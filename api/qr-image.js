const QRCode = require("qrcode");

module.exports = async function qrImage(request, response) {
  const slug = String(request.query?.slug || "").replace(/[^a-z0-9_-]/gi, "");
  if (!slug) return response.status(400).end("Missing QR code.");

  const protocol = request.headers["x-forwarded-proto"] || "https";
  const host = request.headers["x-forwarded-host"] || request.headers.host || "app.lumerealestate.com";
  const scanUrl = `${protocol}://${host}/api/scan/${slug}`;
  const svg = await QRCode.toString(scanUrl, {
    type: "svg",
    errorCorrectionLevel: "H",
    margin: 2,
    color: { dark: "#24221f", light: "#ffffff" },
  });
  response.status(200).setHeader("Content-Type", "image/svg+xml; charset=utf-8");
  response.setHeader("Cache-Control", "public, max-age=3600");
  response.end(svg);
};
