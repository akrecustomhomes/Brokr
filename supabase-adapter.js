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

    const { error } = await client.from("broker_contacts").upsert({
      id: "primary",
      broker_name: contact.name,
      broker_email: contact.email,
      broker_phone: contact.phone,
      updated_at: new Date().toISOString(),
    });

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

  window.BrokrBackend = {
    isConfigured: hasSupabase,
    loadBranding,
    saveBranding,
    loadBrokerContact,
    saveBrokerContact,
    loadArchiveSettings,
    saveArchiveSettings,
  };
})();
