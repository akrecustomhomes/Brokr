const crypto = require("node:crypto");
const { getAdminClient } = require("../_admin");

function deviceType(userAgent) {
  if (/tablet|ipad/i.test(userAgent)) return "Tablet";
  if (/mobile|iphone|android/i.test(userAgent)) return "Mobile";
  return "Desktop";
}

function decodeHeader(value, maxLength) {
  const text = String(value || "").slice(0, maxLength);
  try {
    return decodeURIComponent(text.replaceAll("+", " ")) || null;
  } catch {
    return text || null;
  }
}

module.exports = async function scan(request, response) {
  if (request.method !== "GET") return response.status(405).end("Method not allowed.");
  const adminClient = getAdminClient();
  if (!adminClient) return response.status(503).end("Tracking is not configured.");

  const slug = String(request.query?.slug || "");
  const { data: code, error } = await adminClient
    .from("qr_codes")
    .select("id,destination_url,is_active")
    .eq("slug", slug)
    .maybeSingle();
  if (error || !code || !code.is_active) return response.status(404).end("This QR code is unavailable.");

  const forwarded = String(request.headers["x-forwarded-for"] || "").split(",")[0].trim();
  const salt = process.env.QR_TRACKING_SALT || process.env.SUPABASE_SERVICE_ROLE_KEY || "";
  const visitorHash = forwarded && salt ? crypto.createHash("sha256").update(`${salt}:${forwarded}`).digest("hex") : null;
  const userAgent = String(request.headers["user-agent"] || "").slice(0, 500);
  const event = {
    qr_code_id: code.id,
    visitor_hash: visitorHash,
    device_type: deviceType(userAgent),
    user_agent: userAgent || null,
    referrer: String(request.headers.referer || "").slice(0, 1000) || null,
    country: String(request.headers["x-vercel-ip-country"] || "").slice(0, 2) || null,
    region: decodeHeader(request.headers["x-vercel-ip-country-region"], 100),
    city: decodeHeader(request.headers["x-vercel-ip-city"], 150),
  };
  const { error: insertError } = await adminClient.from("qr_scan_events").insert(event);
  if (insertError) console.error("Unable to record QR scan", insertError.message);

  response.status(302).setHeader("Location", code.destination_url);
  response.setHeader("Cache-Control", "no-store, max-age=0");
  response.end();
};
