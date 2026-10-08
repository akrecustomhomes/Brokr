const QRCodeStyling = require("qr-code-styling");
const { JSDOM } = require("jsdom");
const { getAdminClient } = require("./_admin");

const bodyStyles = {
  classic: "square",
  rounded: "rounded",
  dots: "dots",
  flow: "classy-rounded",
};

const eyeStyles = {
  square: { frame: "square", center: "square" },
  rounded: { frame: "extra-rounded", center: "dot" },
  circle: { frame: "dot", center: "dot" },
  classy: { frame: "extra-rounded", center: "square" },
};

async function styledQrSvg(value, style = "classic", eyeStyle = "rounded") {
  const eye = eyeStyles[eyeStyle] || eyeStyles.rounded;
  const qrCode = new QRCodeStyling({
    width: 320,
    height: 320,
    type: "svg",
    data: value,
    margin: 16,
    jsdom: JSDOM,
    qrOptions: { typeNumber: 0, errorCorrectionLevel: "M" },
    dotsOptions: {
      type: bodyStyles[style] || bodyStyles.classic,
      color: "#24221f",
      roundSize: false,
    },
    cornersSquareOptions: { type: eye.frame, color: "#24221f" },
    cornersDotOptions: { type: eye.center, color: "#24221f" },
    backgroundOptions: { color: "#ffffff" },
  });
  const svg = await qrCode.getRawData("svg");
  if (!svg) throw new Error("Unable to generate QR code.");
  return svg.toString();
}

module.exports = async function qrImage(request, response) {
  const slug = String(request.query?.slug || "").replace(/[^a-z0-9_-]/gi, "");
  if (!slug) return response.status(400).end("Missing QR code.");

  const protocol = request.headers["x-forwarded-proto"] || "https";
  const host = request.headers["x-forwarded-host"] || request.headers.host || "app.lumerealestate.com";
  const scanUrl = `${protocol}://${host}/q/${slug}`;
  const adminClient = getAdminClient();
  let style = "classic";
  let eyeStyle = "rounded";
  if (adminClient) {
    const { data } = await adminClient
      .from("qr_codes")
      .select("style,eye_style")
      .eq("slug", slug)
      .maybeSingle();
    if (Object.hasOwn(bodyStyles, data?.style)) style = data.style;
    if (Object.hasOwn(eyeStyles, data?.eye_style)) eyeStyle = data.eye_style;
  }
  const svg = await styledQrSvg(scanUrl, style, eyeStyle);
  response.status(200).setHeader("Content-Type", "image/svg+xml; charset=utf-8");
  response.setHeader("Cache-Control", "public, max-age=3600");
  response.end(svg);
};

module.exports.styledQrSvg = styledQrSvg;
