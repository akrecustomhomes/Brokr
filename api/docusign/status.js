const { requireAdmin, sendJson } = require("../_admin");
const {
  SESSION_COOKIE,
  getDocusignConfig,
  parseCookies,
  unseal,
} = require("../_docusign");

module.exports = async function docusignStatus(request, response) {
  if (request.method !== "GET") {
    sendJson(response, 405, { error: "Method not allowed." });
    return;
  }
  const admin = await requireAdmin(request);
  if (!admin) {
    sendJson(response, 403, { error: "Only a Broker or Admin can view the DocuSign connection." });
    return;
  }

  const config = getDocusignConfig(request);
  const session = unseal(parseCookies(request)[SESSION_COOKIE], config.sessionSecret);
  sendJson(response, 200, session ? {
    connected: true,
    accountName: session.accountName,
    userName: session.userName,
    email: session.email,
  } : { connected: false });
};
