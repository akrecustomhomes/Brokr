const crypto = require("node:crypto");
const { requireAdmin, sendJson } = require("./_admin");

function cleanUrl(value) {
  try {
    const url = new URL(String(value || "").trim());
    return ["http:", "https:"].includes(url.protocol) ? url.toString() : "";
  } catch {
    return "";
  }
}

function makeSlug() {
  return crypto.randomBytes(6).toString("base64url").toLowerCase();
}

module.exports = async function qrCodes(request, response) {
  const auth = await requireAdmin(request);
  if (!auth) return sendJson(response, 401, { error: "Broker or Admin sign-in required." });
  const { adminClient, authUser } = auth;

  if (request.method === "GET") {
    const { data: codes, error } = await adminClient.from("qr_code_summary").select("*").order("created_at", { ascending: false });
    if (error) return sendJson(response, 400, { error: error.message });
    return sendJson(response, 200, { codes: codes || [] });
  }

  const body = typeof request.body === "string" ? JSON.parse(request.body || "{}") : request.body || {};
  if (request.method === "POST") {
    const name = String(body.name || "").trim();
    const destinationUrl = cleanUrl(body.destinationUrl);
    if (!name || !destinationUrl) return sendJson(response, 400, { error: "Name and a valid destination URL are required." });

    const { data, error } = await adminClient
      .from("qr_codes")
      .insert({ name, destination_url: destinationUrl, slug: makeSlug(), created_by: authUser.id })
      .select("*")
      .single();
    if (error) return sendJson(response, 400, { error: error.message });
    return sendJson(response, 201, { code: data });
  }

  if (request.method === "PATCH") {
    const id = String(body.id || "");
    const updates = {};
    if (body.name !== undefined) updates.name = String(body.name).trim();
    if (body.destinationUrl !== undefined) {
      updates.destination_url = cleanUrl(body.destinationUrl);
      if (!updates.destination_url) return sendJson(response, 400, { error: "Enter a valid destination URL." });
    }
    if (body.isActive !== undefined) updates.is_active = Boolean(body.isActive);
    if (!id || !Object.keys(updates).length) return sendJson(response, 400, { error: "Nothing to update." });
    const { data, error } = await adminClient.from("qr_codes").update(updates).eq("id", id).select("*").single();
    if (error) return sendJson(response, 400, { error: error.message });
    return sendJson(response, 200, { code: data });
  }

  return sendJson(response, 405, { error: "Method not allowed." });
};
