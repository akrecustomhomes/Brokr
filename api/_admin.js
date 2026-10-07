const { createClient } = require("@supabase/supabase-js");

function getServerConfig() {
  return {
    supabaseUrl: process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL,
    anonKey: process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY,
    serviceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
  };
}

function getAdminClient() {
  const { supabaseUrl, serviceRoleKey } = getServerConfig();
  if (!supabaseUrl || !serviceRoleKey) return null;
  return createClient(supabaseUrl, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

async function requireAdmin(request) {
  const { supabaseUrl, anonKey } = getServerConfig();
  const adminClient = getAdminClient();
  const token = request.headers.authorization?.replace(/^Bearer\s+/i, "");
  if (!supabaseUrl || !anonKey || !adminClient || !token) return null;

  const userClient = createClient(supabaseUrl, anonKey, {
    global: { headers: { Authorization: `Bearer ${token}` } },
    auth: { autoRefreshToken: false, persistSession: false },
  });
  const { data: authData, error: authError } = await userClient.auth.getUser(token);
  if (authError || !authData.user) return null;

  const { data: profile, error: profileError } = await adminClient
    .from("app_users")
    .select("id,role,status")
    .eq("auth_user_id", authData.user.id)
    .maybeSingle();

  if (profileError || !profile || profile.status !== "Active" || !["Broker", "Admin"].includes(profile.role)) return null;
  return { adminClient, authUser: authData.user, profile };
}

function sendJson(response, statusCode, payload) {
  response.status(statusCode).setHeader("Content-Type", "application/json");
  response.setHeader("Cache-Control", "no-store");
  response.end(JSON.stringify(payload));
}

module.exports = { getAdminClient, requireAdmin, sendJson };
