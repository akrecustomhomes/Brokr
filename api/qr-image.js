const QRCode = require("qrcode");
const { getAdminClient } = require("./_admin");

function isFinderPattern(row, column, size) {
  return (
    (row < 7 && column < 7) ||
    (row < 7 && column >= size - 7) ||
    (row >= size - 7 && column < 7)
  );
}

function roundedFinderPatterns(size, margin) {
  return [
    [margin, margin],
    [margin + size - 7, margin],
    [margin, margin + size - 7],
  ].map(([x, y]) => `
    <rect x="${x}" y="${y}" width="7" height="7" rx="1.05"/>
    <rect x="${x + 1}" y="${y + 1}" width="5" height="5" rx="0.72" fill="#fff"/>
    <rect x="${x + 2}" y="${y + 2}" width="3" height="3" rx="0.52"/>
  `).join("");
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
      if (style !== "classic" && isFinderPattern(row, column, size)) continue;
      const x = column + margin;
      const y = row + margin;
      const keepSquare = style === "classic";
      if (keepSquare) {
        modules.push(`<rect x="${x}" y="${y}" width="1" height="1"/>`);
      } else if (style === "dots") {
        modules.push(`<circle cx="${x + 0.5}" cy="${y + 0.5}" r="0.41"/>`);
      } else {
        modules.push(`<rect x="${x + 0.05}" y="${y + 0.05}" width="0.9" height="0.9" rx="0.42"/>`);
      }
    }
  }
  const finderPatterns = style === "classic" ? "" : roundedFinderPatterns(size, margin);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${viewSize} ${viewSize}" shape-rendering="geometricPrecision"><rect width="100%" height="100%" fill="#fff"/><g fill="#24221f">${finderPatterns}${modules.join("")}</g></svg>`;
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

module.exports.styledQrSvg = styledQrSvg;
