const crypto = require("crypto");
const { requireAdmin, sendJson } = require("../_admin");
const {
  OAUTH_COOKIE,
  assertDocusignConfig,
  base64url,
  getDocusignConfig,
  seal,
  serializeCookie,
} = require("../_docusign");

module.exports = async function connectDocusign(request, response) {
  if (request.method !== "GET") {
    sendJson(response, 405, { error: "Method not allowed." });
    return;
  }

  const admin = await requireAdmin(request);
  if (!admin) {
    sendJson(response, 403, { error: "Only a Broker or Admin can connect DocuSign." });
    return;
  }

  try {
    const config = getDocusignConfig(request);
    assertDocusignConfig(config);
    const state = base64url(crypto.randomBytes(24));
    const verifier = base64url(crypto.randomBytes(48));
    const challenge = base64url(crypto.createHash("sha256").update(verifier).digest());
    const oauthState = seal({ state, verifier, createdAt: Date.now() }, config.sessionSecret);
    const authorizationUrl = new URL(`${config.oauthBaseUrl}/oauth/auth`);
    authorizationUrl.search = new URLSearchParams({
      response_type: "code",
      scope: "signature extended",
      client_id: config.clientId,
      redirect_uri: config.redirectUri,
      state,
      code_challenge_method: "S256",
      code_challenge: challenge,
    }).toString();

    response.setHeader("Set-Cookie", serializeCookie(OAUTH_COOKIE, oauthState, 10 * 60));
    sendJson(response, 200, { authorizationUrl: authorizationUrl.toString() });
  } catch (error) {
    sendJson(response, 500, { error: error.message || "DocuSign connection could not start." });
  }
};
