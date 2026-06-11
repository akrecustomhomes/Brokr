(function () {
  const config = window.BROKR_CONFIG || {};
  const hasSupabase = Boolean(config.supabaseUrl && config.supabaseAnonKey);
  let clientPromise;

  async function getClient() {
    if (!hasSupabase) return null;
    if (!clientPromise) {
      clientPromise = import("https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm").then(({ createClient }) =>
        createClient(config.supabaseUrl, config.supabaseAnonKey),
      );
    }
    return clientPromise;
  }

  function getRedirectUrl() {
    return `${window.location.origin}${window.location.pathname}`;
  }

  function mapUserFromRow(row) {
    if (!row) return null;

    return {
      id: row.id,
      authUserId: row.auth_user_id,
      agentId: row.agent_id,
      profileImageSrc: row.profile_image_url || "",
      firstName: row.first_name || "",
      lastName: row.last_name || "",
      email: row.email,
      role: row.role,
      canUpload: row.can_upload_files,
      permissionScope: row.permission_scope,
      status: row.status,
    };
  }

  function mapUserToRow(user) {
    return {
      id: typeof user.id === "string" ? user.id : undefined,
      auth_user_id: user.authUserId || null,
      // Agent records are still local prototype data, so do not send those ids
      // into Supabase until agents are persisted there too.
      agent_id: null,
      profile_image_url: user.profileImageSrc || null,
      first_name: user.firstName || null,
      last_name: user.lastName || null,
      email: user.email,
      role: user.role,
      can_upload_files: Boolean(user.canUpload),
      permission_scope: user.permissionScope || "Own transactions only",
      status: user.status || "Active",
      updated_at: new Date().toISOString(),
    };
  }

  async function getSession() {
    const client = await getClient();
    if (!client) return null;

    const { data, error } = await client.auth.getSession();
    if (error) {
      console.warn("Unable to load Supabase auth session.", error);
      return null;
    }
    return data.session;
  }

  async function signIn(email, password) {
    const client = await getClient();
    if (!client) throw new Error("Supabase is not configured.");

    const { data, error } = await client.auth.signInWithPassword({ email, password });
    if (error) throw error;
    return data.session;
  }

  async function signOut() {
    const client = await getClient();
    if (!client) return;

    const { error } = await client.auth.signOut();
    if (error) throw error;
  }

  async function createBrokerSuperAdmin(email, password) {
    const client = await getClient();
    if (!client) throw new Error("Supabase is not configured.");

    const existingUsers = await loadUsers();
    const setupAlreadyCompleted = existingUsers.some((user) => user.authUserId);
    const canClaimSeededBroker =
      existingUsers.length <= 1 &&
      existingUsers.every((user) => user.email?.toLowerCase() === email.toLowerCase() && user.role === "Broker");

    if (setupAlreadyCompleted || !canClaimSeededBroker) {
      throw new Error("Broker super admin setup is already complete.");
    }

    const { data, error } = await client.auth.signUp({
      email,
      password,
      options: {
        data: {
          role: "Broker",
          app: "Brokr",
        },
        emailRedirectTo: getRedirectUrl(),
      },
    });
    if (error) throw error;

    if (data.user) {
      await saveUserProfile({
        authUserId: data.user.id,
        email,
        role: "Broker",
        canUpload: true,
        permissionScope: "Any transaction",
        status: "Active",
      });
    }

    return data.session;
  }

  async function sendPasswordSetupEmail(email) {
    const client = await getClient();
    if (!client) throw new Error("Supabase is not configured.");

    const { error } = await client.auth.resetPasswordForEmail(email, {
      redirectTo: getRedirectUrl(),
    });
    if (error) throw error;
  }

  async function getCurrentAuthUser() {
    const client = await getClient();
    if (!client) return null;

    const { data, error } = await client.auth.getUser();
    if (error) return null;
    return data.user;
  }

  async function loadUsers() {
    const client = await getClient();
    if (!client) return [];

    const { data, error } = await client.from("app_users").select("*").order("created_at", { ascending: false });
    if (error) {
      console.warn("Unable to load Supabase users.", error);
      return [];
    }
    return (data || []).map(mapUserFromRow);
  }

  async function loadCurrentUser() {
    const authUser = await getCurrentAuthUser();
    if (!authUser) return null;

    const client = await getClient();
    const email = authUser.email?.toLowerCase();
    const { data: userIdMatch, error: userIdError } = await client
      .from("app_users")
      .select("*")
      .eq("auth_user_id", authUser.id)
      .maybeSingle();

    if (userIdError) {
      console.warn("Unable to load current Brokr user.", userIdError);
      return null;
    }

    let data = userIdMatch;
    if (!data && email) {
      const { data: emailMatch, error: emailError } = await client
        .from("app_users")
        .select("*")
        .eq("email", email)
        .maybeSingle();

      if (emailError) {
        console.warn("Unable to load current Brokr user by email.", emailError);
        return null;
      }
      data = emailMatch;
    }

    if (data && data.auth_user_id !== authUser.id) {
      await saveUserProfile({
        ...mapUserFromRow(data),
        authUserId: authUser.id,
        email: data?.email || email,
      });
    }

    return mapUserFromRow(data) || null;
  }

  async function saveUserProfile(user) {
    const client = await getClient();
    if (!client) return null;

    const row = mapUserToRow(user);
    let { data, error } = await client.from("app_users").upsert(row, { onConflict: "email" }).select("*").single();
    if (error && /first_name|last_name/i.test(error.message || "")) {
      const fallbackRow = { ...row };
      delete fallbackRow.first_name;
      delete fallbackRow.last_name;
      ({ data, error } = await client.from("app_users").upsert(fallbackRow, { onConflict: "email" }).select("*").single());
    }
    if (error) throw error;
    return mapUserFromRow(data);
  }

  async function deleteUserProfile(user) {
    const client = await getClient();
    if (!client) return;

    const query = client.from("app_users").delete();
    const { error } = user.id ? await query.eq("id", user.id) : await query.eq("email", user.email);
    if (error) throw error;
  }

  async function inviteUser(user) {
    const client = await getClient();
    if (!client) throw new Error("Supabase is not configured.");

    const session = await getSession();
    const response = await fetch("/api/invite-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.access_token || ""}`,
      },
      body: JSON.stringify({
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
        agentId: user.agentId,
        canUpload: user.canUpload,
        permissionScope: user.permissionScope,
        status: user.status,
      }),
    });

    const payload = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(payload.error || "Unable to send invite.");
    return payload;
  }

  async function onAuthStateChange(callback) {
    const client = await getClient();
    if (!client) return null;

    const { data } = client.auth.onAuthStateChange((_event, session) => callback(session));
    return data.subscription;
  }

  async function loadBranding() {
    const client = await getClient();
    if (!client) return null;

    const { data, error } = await client.from("branding_settings").select("*").eq("id", "default").maybeSingle();
    if (error) {
      console.warn("Unable to load Supabase branding settings.", error);
      return null;
    }
    return data;
  }

  async function saveBranding(settings) {
    const client = await getClient();
    if (!client) return;

    const { error } = await client.from("branding_settings").upsert({
      id: "default",
      company_name: settings.companyName,
      system_name: settings.systemName,
      primary_color: settings.primaryColor,
      accent_color: settings.accentColor,
      logo_src: settings.logoSrc,
      icon_src: settings.iconSrc,
      updated_at: new Date().toISOString(),
    });

    if (error) console.warn("Unable to save Supabase branding settings.", error);
  }

  async function loadBrokerContact() {
    const client = await getClient();
    if (!client) return null;

    const { data, error } = await client.from("broker_contacts").select("*").eq("id", "primary").maybeSingle();
    if (error) {
      console.warn("Unable to load Supabase broker contact.", error);
      return null;
    }
    return data;
  }

  async function saveBrokerContact(contact) {
    const client = await getClient();
    if (!client) return;

    const payload = {
      id: "primary",
      broker_name: contact.name,
      broker_email: contact.email,
      broker_phone: contact.phone,
      profile_image_src: contact.profileImageSrc || null,
      updated_at: new Date().toISOString(),
    };

    const { error } = await client.from("broker_contacts").upsert(payload);

    if (error && /profile_image_src/i.test(error.message || "")) {
      const { profile_image_src: _profileImageSrc, ...legacyPayload } = payload;
      const { error: legacyError } = await client.from("broker_contacts").upsert(legacyPayload);
      if (legacyError) console.warn("Unable to save Supabase broker contact.", legacyError);
      return;
    }

    if (error) console.warn("Unable to save Supabase broker contact.", error);
  }

  async function loadArchiveSettings() {
    const client = await getClient();
    if (!client) return null;

    const { data, error } = await client.from("archive_settings").select("*").eq("id", "default").maybeSingle();
    if (error) {
      console.warn("Unable to load Supabase archive settings.", error);
      return null;
    }
    return data;
  }

  async function saveArchiveSettings(settings) {
    const client = await getClient();
    if (!client) return;

    const { error } = await client.from("archive_settings").upsert({
      id: "default",
      google_drive_folder_url: settings.folderUrl,
      archive_folder_name: settings.folderName,
      package_format: settings.packageFormat,
      updated_at: new Date().toISOString(),
    });

    if (error) console.warn("Unable to save Supabase archive settings.", error);
  }

  async function uploadTransactionFile({ transactionId, documentName, file }) {
    const client = await getClient();
    if (!client || !file) return null;

    const safeDocumentName = String(documentName || "document")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
    const safeFileName = file.name.replace(/[^\w.\-]+/g, "-");
    const path = `${transactionId || "draft"}/${safeDocumentName}/${Date.now()}-${safeFileName}`;
    const { data, error } = await client.storage.from("transaction-files").upload(path, file, {
      cacheControl: "3600",
      contentType: file.type || "application/octet-stream",
      upsert: false,
    });

    if (error) throw error;

    return {
      bucket: "transaction-files",
      storagePath: data.path,
      fileName: file.name,
      contentType: file.type || "",
      uploadedAt: new Date().toISOString(),
    };
  }

  async function createTransactionFileUrl(fileRecord) {
    const client = await getClient();
    if (!client || !fileRecord?.storagePath) return "";

    const bucket = fileRecord.bucket || "transaction-files";
    const { data, error } = await client.storage.from(bucket).createSignedUrl(fileRecord.storagePath, 60 * 10);
    if (error) throw error;
    return data.signedUrl;
  }

  window.BrokrBackend = {
    isConfigured: hasSupabase,
    getSession,
    signIn,
    signOut,
    createBrokerSuperAdmin,
    sendPasswordSetupEmail,
    loadCurrentUser,
    loadUsers,
    saveUserProfile,
    deleteUserProfile,
    inviteUser,
    onAuthStateChange,
    loadBranding,
    saveBranding,
    loadBrokerContact,
    saveBrokerContact,
    loadArchiveSettings,
    saveArchiveSettings,
    uploadTransactionFile,
    createTransactionFileUrl,
  };
})();
