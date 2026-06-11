const { createClient } = require("@supabase/supabase-js");

const allowedRoles = new Set(["Agent", "Broker", "Admin", "Read only"]);
const allowedScopes = new Set(["Own transactions only", "Any transaction"]);

function sendJson(response, statusCode, payload) {
  response.status(statusCode).setHeader("Content-Type", "application/json");
  response.end(JSON.stringify(payload));
}

module.exports = async function inviteUser(request, response) {
  if (request.method !== "POST") {
    sendJson(response, 405, { error: "Method not allowed." });
    return;
  }

  const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
  const anonKey = process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !anonKey || !serviceRoleKey) {
    sendJson(response, 500, { error: "Invite service is not configured." });
    return;
  }

  const token = request.headers.authorization?.replace("Bearer ", "");
  if (!token) {
    sendJson(response, 401, { error: "Sign in before inviting users." });
    return;
  }

  const userClient = createClient(supabaseUrl, anonKey, {
    global: { headers: { Authorization: `Bearer ${token}` } },
  });
  const adminClient = createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });

  const { data: authData, error: authError } = await userClient.auth.getUser();
  if (authError || !authData.user) {
    sendJson(response, 401, { error: "Your session could not be verified." });
    return;
  }

  const { data: requester, error: requesterError } = await adminClient
    .from("app_users")
    .select("role,status")
    .eq("auth_user_id", authData.user.id)
    .maybeSingle();

  if (requesterError || !requester || requester.status !== "Active" || !["Broker", "Admin"].includes(requester.role)) {
    sendJson(response, 403, { error: "Only Broker or Admin users can invite users." });
    return;
  }

  const body = typeof request.body === "string" ? JSON.parse(request.body || "{}") : request.body || {};
  const email = String(body.email || "").trim().toLowerCase();
  const firstName = String(body.firstName || "").trim();
  const lastName = String(body.lastName || "").trim();
  const role = allowedRoles.has(body.role) ? body.role : "Agent";
  const permissionScope = allowedScopes.has(body.permissionScope) ? body.permissionScope : "Own transactions only";

  if (!email) {
    sendJson(response, 400, { error: "Email is required." });
    return;
  }

  const { data: inviteData, error: inviteError } = await adminClient.auth.admin.inviteUserByEmail(email, {
    data: { role, app: "Brokr", firstName, lastName },
    redirectTo: request.headers.origin || "https://app.lumerealestate.com",
  });

  if (inviteError && !/already|registered|exists/i.test(inviteError.message || "")) {
    sendJson(response, 400, { error: inviteError.message });
    return;
  }

  const userRow = {
    auth_user_id: inviteData?.user?.id || null,
    // Agent ids currently come from the local roster, not Supabase.
    // Keep this null so app user updates do not violate the database FK.
    agent_id: null,
    first_name: firstName || null,
    last_name: lastName || null,
    email,
    role,
    can_upload_files: Boolean(body.canUpload),
    permission_scope: permissionScope,
    status: body.status || "Active",
    updated_at: new Date().toISOString(),
  };
  let { data: savedUser, error: saveError } = await adminClient
    .from("app_users")
    .upsert(userRow, { onConflict: "email" })
    .select("id,email,role,status")
    .single();

  if (saveError && /first_name|last_name/i.test(saveError.message || "")) {
    const fallbackRow = { ...userRow };
    delete fallbackRow.first_name;
    delete fallbackRow.last_name;
    ({ data: savedUser, error: saveError } = await adminClient
      .from("app_users")
      .upsert(fallbackRow, { onConflict: "email" })
      .select("id,email,role,status")
      .single());
  }

  if (saveError) {
    sendJson(response, 400, { error: saveError.message });
    return;
  }

  sendJson(response, 200, {
    invited: !inviteError,
    user: savedUser,
    message: inviteError ? "User exists; Brokr permissions were updated." : "Invite sent.",
  });
};
