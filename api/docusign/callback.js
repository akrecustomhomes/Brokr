const {
  OAUTH_COOKIE,
  SESSION_COOKIE,
  assertDocusignConfig,
  clearCookie,
  getDocusignConfig,
  parseCookies,
  seal,
  serializeCookie,
  unseal,
} = require("../_docusign");

function redirect(response, location, cookies = []) {
  if (cookies.length) response.setHeader("Set-Cookie", cookies);
  response.statusCode = 302;
  response.setHeader("Cache-Control", "no-store");
  response.setHeader("Location", location);
  response.end();
}

module.exports = async function docusignCallback(request, response) {
  const config = getDocusignConfig(request);
  const appUrl = new URL(config.appBaseUrl);
  const query = request.query || {};

  try {
    assertDocusignConfig(config);
    if (query.error) throw new Error(String(query.error_description || query.error));

    const oauthState = unseal(parseCookies(request)[OAUTH_COOKIE], config.sessionSecret);
    if (!oauthState || !query.code || !query.state || oauthState.state !== query.state) {
      throw new Error("DocuSign authorization expired or could not be verified.");
    }
    if (Date.now() - Number(oauthState.createdAt || 0) > 10 * 60 * 1000) {
      throw new Error("DocuSign authorization expired. Please connect again.");
    }

    const tokenResponse = await fetch(`${config.oauthBaseUrl}/oauth/token`, {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`${config.clientId}:${config.clientSecret}`).toString("base64")}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code: String(query.code),
        redirect_uri: config.redirectUri,
        code_verifier: oauthState.verifier,
      }),
    });
    const tokenData = await tokenResponse.json();
    if (!tokenResponse.ok) throw new Error(tokenData.error_description || tokenData.error || "DocuSign token exchange failed.");

    const userResponse = await fetch(`${config.oauthBaseUrl}/oauth/userinfo`, {
      headers: { Authorization: `Bearer ${tokenData.access_token}` },
    });
    const userData = await userResponse.json();
    if (!userResponse.ok) throw new Error(userData.message || "DocuSign account information could not be loaded.");
    const accounts = userData.accounts || [];
    const productionAccounts = accounts.filter((item) => !/demo\.docusign\.net/i.test(String(item.base_uri || "")));
    const availableAccounts = config.oauthBaseUrl === "https://account.docusign.com" ? productionAccounts : accounts;
    const account = availableAccounts.find((item) => item.is_default) || availableAccounts[0];
    if (!account) {
      throw new Error(config.oauthBaseUrl === "https://account.docusign.com"
        ? "This DocuSign login only returned a demo account. Sign in with the Lume Real Estate production account."
        : "No DocuSign account was returned for this user.");
    }

    const session = seal({
      accessToken: tokenData.access_token,
      refreshToken: tokenData.refresh_token,
      expiresAt: Date.now() + Number(tokenData.expires_in || 28800) * 1000,
      accountId: account.account_id,
      baseUri: account.base_uri,
      accountName: account.account_name || "DocuSign",
      userName: userData.name || "",
      email: userData.email || "",
    }, config.sessionSecret);
    appUrl.searchParams.set("docusign", "connected");
    redirect(response, appUrl.toString(), [
      clearCookie(OAUTH_COOKIE),
      serializeCookie(SESSION_COOKIE, session, 30 * 24 * 60 * 60),
    ]);
  } catch (error) {
    appUrl.searchParams.set("docusign", "error");
    appUrl.searchParams.set("message", error.message || "DocuSign connection failed.");
    redirect(response, appUrl.toString(), [clearCookie(OAUTH_COOKIE)]);
  }
};
