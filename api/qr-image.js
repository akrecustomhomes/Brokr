const QRCode = require("qrcode");
const { getAdminClient } = require("./_admin");

function isFinderArea(row, column, size) {
  return (
    (row <= 8 && column <= 8) ||
    (row <= 8 && column >= size - 9) ||
    (row >= size - 9 && column <= 8)
  );
}

function styledQrSvg(value, style) {
  const qr = QRCode.create(value, { errorCorrectionLevel: "Q" });
  const size = qr.modules.size;
  const margin = 2;
  const viewSize = size + margin * 2;
  const modules = [];
  for (let row = 0; row < size; row += 1) {
    for (let column = 0; column < size; column += 1) {
      if (!qr.modules.get(row, column)) continue;
      const x = column + margin;
      const y = row + margin;
      const keepSquare = style === "classic" || isFinderArea(row, column, size);
      if (keepSquare) {
        modules.push(`<rect x="${x}" y="${y}" width="1" height="1"/>`);
      } else if (style === "dots") {
        modules.push(`<circle cx="${x + 0.5}" cy="${y + 0.5}" r="0.41"/>`);
      } else {
        modules.push(`<rect x="${x + 0.06}" y="${y + 0.06}" width="0.88" height="0.88" rx="0.28"/>`);
      }
    }
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${viewSize} ${viewSize}" shape-rendering="geometricPrecision"><rect width="100%" height="100%" fill="#fff"/><g fill="#24221f">${modules.join("")}</g></svg>`;
}

module.exports = async function qrImage(request, response) {
  const slug = String(request.query?.slug || "").replace(/[^a-z0-9_-]/gi, "");
  if (!slug) return response.status(400).end("Missing QR code.");

  const protocol = request.headers["x-forwarded-proto"] || "https";
  const host = request.headers["x-forwarded-host"] || request.headers.host || "app.lumerealestate.com";
  const scanUrl = `${protocol}://${host}/q/${slug}`;
  const adminClient = getAdminClient();
  let style = "classic";
  if (adminClient) {
    const { data } = await adminClient.from("qr_codes").select("style").eq("slug", slug).maybeSingle();
    if (["classic", "rounded", "dots"].includes(data?.style)) style = data.style;
  }
  const svg = styledQrSvg(scanUrl, style);
  response.status(200).setHeader("Content-Type", "image/svg+xml; charset=utf-8");
  response.setHeader("Cache-Control", "public, max-age=3600");
  response.end(svg);
};
