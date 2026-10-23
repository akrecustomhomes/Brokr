const crypto = require("crypto");

const OAUTH_COOKIE = "brokr_docusign_oauth";
const SESSION_COOKIE = "brokr_docusign_session";

function getDocusignConfig(request) {
  const requestOrigin = `${request.headers["x-forwarded-proto"] || "https"}://${request.headers["x-forwarded-host"] || request.headers.host}`;
  const appBaseUrl = String(process.env.APP_BASE_URL || requestOrigin).replace(/\/$/, "");
  return {
    clientId: process.env.DOCUSIGN_CLIENT_ID,
    clientSecret: process.env.DOCUSIGN_CLIENT_SECRET,
    sessionSecret: process.env.DOCUSIGN_SESSION_SECRET,
    oauthBaseUrl: String(process.env.DOCUSIGN_OAUTH_BASE_URL || "https://account-d.docusign.com").replace(/\/$/, ""),
    redirectUri: process.env.DOCUSIGN_REDIRECT_URI || `${appBaseUrl}/api/docusign/callback`,
    appBaseUrl,
  };
}

function assertDocusignConfig(config) {
  const missing = [];
  if (!config.clientId) missing.push("DOCUSIGN_CLIENT_ID");
  if (!config.clientSecret) missing.push("DOCUSIGN_CLIENT_SECRET");
  if (!config.sessionSecret) missing.push("DOCUSIGN_SESSION_SECRET");
  if (missing.length) throw new Error(`DocuSign is missing: ${missing.join(", ")}`);
}

async function getActiveDocusignSession(request, response, config) {
  const session = unseal(parseCookies(request)[SESSION_COOKIE], config.sessionSecret);
  if (!session) throw new Error("Connect DocuSign before accessing an envelope.");
  if (Number(session.expiresAt || 0) > Date.now() + 60_000) return session;
  if (!session.refreshToken) throw new Error("The DocuSign connection expired. Connect it again.");

  const tokenResponse = await fetch(`${config.oauthBaseUrl}/oauth/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.clientId}:${config.clientSecret}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ grant_type: "refresh_token", refresh_token: session.refreshToken }),
  });
  const tokenData = await tokenResponse.json().catch(() => ({}));
  if (!tokenResponse.ok) throw new Error(tokenData.error_description || "The DocuSign connection could not be refreshed.");

  const refreshedSession = {
    ...session,
    accessToken: tokenData.access_token,
    refreshToken: tokenData.refresh_token || session.refreshToken,
    expiresAt: Date.now() + Number(tokenData.expires_in || 28800) * 1000,
  };
  response.setHeader("Set-Cookie", serializeCookie(
    SESSION_COOKIE,
    seal(refreshedSession, config.sessionSecret),
    30 * 24 * 60 * 60,
  ));
  return refreshedSession;
}

function base64url(value) {
  return Buffer.from(value).toString("base64url");
}

function seal(value, secret) {
  const iv = crypto.randomBytes(12);
  const key = crypto.createHash("sha256").update(secret).digest();
  const cipher = crypto.createCipheriv("aes-256-gcm", key, iv);
  const encrypted = Buffer.concat([cipher.update(JSON.stringify(value), "utf8"), cipher.final()]);
  return [iv, cipher.getAuthTag(), encrypted].map(base64url).join(".");
}

function unseal(value, secret) {
  if (!value || !secret) return null;
  try {
    const [ivValue, tagValue, encryptedValue] = value.split(".");
    if (!ivValue || !tagValue || !encryptedValue) return null;
    const key = crypto.createHash("sha256").update(secret).digest();
    const decipher = crypto.createDecipheriv("aes-256-gcm", key, Buffer.from(ivValue, "base64url"));
    decipher.setAuthTag(Buffer.from(tagValue, "base64url"));
    const decrypted = Buffer.concat([
      decipher.update(Buffer.from(encryptedValue, "base64url")),
      decipher.final(),
    ]);
    return JSON.parse(decrypted.toString("utf8"));
  } catch (_error) {
    return null;
  }
}

function parseCookies(request) {
  return String(request.headers.cookie || "")
    .split(";")
    .map((part) => part.trim())
    .filter(Boolean)
    .reduce((cookies, part) => {
      const separator = part.indexOf("=");
      if (separator < 0) return cookies;
      cookies[part.slice(0, separator)] = decodeURIComponent(part.slice(separator + 1));
      return cookies;
    }, {});
}

function serializeCookie(name, value, maxAge) {
  return `${name}=${encodeURIComponent(value)}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${maxAge}`;
}

function clearCookie(name) {
  return `${name}=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0`;
}

module.exports = {
  OAUTH_COOKIE,
  SESSION_COOKIE,
  assertDocusignConfig,
  base64url,
  clearCookie,
  getActiveDocusignSession,
  getDocusignConfig,
  parseCookies,
  seal,
  serializeCookie,
  unseal,
};
