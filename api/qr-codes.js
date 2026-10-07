const crypto = require("node:crypto");
const { requireAdmin, sendJson } = require("./_admin");
const allowedStyles = new Set(["classic", "rounded", "dots"]);

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
    const { data: summary, error: summaryError } = await adminClient
      .from("qr_code_summary")
      .select("*")
      .order("created_at", { ascending: false });
    if (!summaryError) return sendJson(response, 200, { codes: summary || [] });

    // A newly created PostgREST view can take time to enter the schema cache.
    // Fall back to the secured source tables so the Admin panel remains usable.
    const [{ data: codes, error: codesError }, { data: scans, error: scansError }] = await Promise.all([
      adminClient.from("qr_codes").select("*").order("created_at", { ascending: false }),
      adminClient.from("qr_scan_events").select("qr_code_id,scanned_at,visitor_hash"),
    ]);
    if (codesError || scansError) return sendJson(response, 400, { error: codesError?.message || scansError?.message });
    const summaries = (codes || []).map((code) => {
      const codeScans = (scans || []).filter((scan) => scan.qr_code_id === code.id);
      const visitors = new Set(codeScans.map((scan) => scan.visitor_hash).filter(Boolean));
      const lastScan = codeScans.reduce(
        (latest, scan) => (!latest || scan.scanned_at > latest ? scan.scanned_at : latest),
        null,
      );
      return {
        ...code,
        scan_count: codeScans.length,
        unique_visitor_count: visitors.size,
        last_scanned_at: lastScan,
      };
    });
    return sendJson(response, 200, { codes: summaries });
  }

  const body = typeof request.body === "string" ? JSON.parse(request.body || "{}") : request.body || {};
  if (request.method === "POST") {
    const name = String(body.name || "").trim();
    const destinationUrl = cleanUrl(body.destinationUrl);
    if (!name || !destinationUrl) return sendJson(response, 400, { error: "Name and a valid destination URL are required." });

    const { data, error } = await adminClient
      .from("qr_codes")
      .insert({
        name,
        destination_url: destinationUrl,
        slug: makeSlug(),
        style: allowedStyles.has(body.style) ? body.style : "classic",
        created_by: authUser.id,
      })
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
    if (body.style !== undefined && allowedStyles.has(body.style)) updates.style = body.style;
    if (!id || !Object.keys(updates).length) return sendJson(response, 400, { error: "Nothing to update." });
    const { data, error } = await adminClient.from("qr_codes").update(updates).eq("id", id).select("*").single();
    if (error) return sendJson(response, 400, { error: error.message });
    return sendJson(response, 200, { code: data });
  }

  if (request.method === "DELETE") {
    const id = String(body.id || "");
    if (!id) return sendJson(response, 400, { error: "QR code ID is required." });
    const { error } = await adminClient.from("qr_codes").delete().eq("id", id);
    if (error) return sendJson(response, 400, { error: error.message });
    return sendJson(response, 200, { deleted: true });
  }

  return sendJson(response, 405, { error: "Method not allowed." });
};
