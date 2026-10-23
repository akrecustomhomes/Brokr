const { requireAdmin, sendJson } = require("../_admin");
const {
  SESSION_COOKIE,
  assertDocusignConfig,
  getDocusignConfig,
  parseCookies,
  seal,
  serializeCookie,
  unseal,
} = require("../_docusign");

async function getActiveSession(request, response, config) {
  const session = unseal(parseCookies(request)[SESSION_COOKIE], config.sessionSecret);
  if (!session) throw new Error("Connect DocuSign before sending an envelope.");
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

function signer({ email, name, recipientId, routingOrder, signatureAnchor, dateAnchor }) {
  return {
    email,
    name,
    recipientId,
    routingOrder,
    tabs: {
      signHereTabs: [{
        anchorString: signatureAnchor,
        anchorUnits: "pixels",
        anchorXOffset: "0",
        anchorYOffset: "12",
      }],
      dateSignedTabs: [{
        anchorString: dateAnchor,
        anchorUnits: "pixels",
        anchorXOffset: "0",
        anchorYOffset: "12",
      }],
    },
  };
}

module.exports = async function sendDocusignEnvelope(request, response) {
  if (request.method !== "POST") return sendJson(response, 405, { error: "Method not allowed." });
  const admin = await requireAdmin(request);
  if (!admin) return sendJson(response, 403, { error: "Only a Broker or Admin can send agent contracts." });

  try {
    const config = getDocusignConfig(request);
    assertDocusignConfig(config);
    const session = await getActiveSession(request, response, config);
    const agentEmail = String(request.body?.agentEmail || "").trim();
    const agentName = String(request.body?.agentName || "").trim();
    const documentHtml = String(request.body?.documentHtml || "");
    if (!agentEmail || !agentName) throw new Error("Add the agent's name and email before sending the contract.");
    if (!documentHtml || documentHtml.length > 1_500_000) throw new Error("The generated contract is missing or too large to send.");
    if (!session.email) throw new Error("The connected DocuSign account does not include a broker email address.");

    const printableHtml = `<!doctype html><html><head><meta charset="utf-8"><style>
      body{font-family:Arial,sans-serif;color:#27231f;font-size:11pt;line-height:1.45;margin:42px}
      header{text-align:center;margin-bottom:28px} header img{max-width:260px;max-height:90px}
      h2{font-size:24pt;margin:14px 0} h4{font-size:14pt;margin:20px 0 8px}
      section{break-inside:avoid;margin-top:18px}.contract-party-grid,.contract-signatures{display:grid;grid-template-columns:1fr 1fr;gap:24px}
      .contract-compensation{border:1px solid #bdb6ae;padding:14px;margin:12px 0}.contract-compensation:not(.selected){display:none}
      .contract-signature-field{min-height:52px;border-bottom:1px solid #27231f}.docusign-anchor{font-size:2px;color:#fff}
      ul{padding-left:22px}p{margin:7px 0}.contract-document-wordmark span{font-size:24pt;letter-spacing:.18em}.contract-document-wordmark small{display:block;letter-spacing:.25em}
    </style></head><body>${documentHtml}</body></html>`;

    const envelope = {
      emailSubject: `Lume Real Estate Broker / Agent Contract — ${agentName}`,
      emailBlurb: "Please review and sign your Lume Real Estate broker/agent contract.",
      documents: [{
        documentBase64: Buffer.from(printableHtml, "utf8").toString("base64"),
        name: `Lume Broker Agent Contract - ${agentName}`,
        fileExtension: "html",
        documentId: "1",
      }],
      recipients: {
        signers: [
          signer({
            email: session.email,
            name: session.userName || "Lume Real Estate Broker",
            recipientId: "1",
            routingOrder: "1",
            signatureAnchor: "[[BROKER_SIGNATURE]]",
            dateAnchor: "[[BROKER_DATE]]",
          }),
          signer({
            email: agentEmail,
            name: agentName,
            recipientId: "2",
            routingOrder: "2",
            signatureAnchor: "[[AGENT_SIGNATURE]]",
            dateAnchor: "[[AGENT_DATE]]",
          }),
        ],
      },
      status: "created",
    };

    const envelopeResponse = await fetch(
      `${String(session.baseUri).replace(/\/$/, "")}/restapi/v2.1/accounts/${encodeURIComponent(session.accountId)}/envelopes`,
      {
        method: "POST",
        headers: { Authorization: `Bearer ${session.accessToken}`, "Content-Type": "application/json" },
        body: JSON.stringify(envelope),
      },
    );
    const envelopeData = await envelopeResponse.json().catch(() => ({}));
    if (!envelopeResponse.ok) {
      throw new Error(envelopeData.message || envelopeData.errorCode || "DocuSign could not create the envelope.");
    }

    let senderViewUrl = "";
    try {
      const senderViewResponse = await fetch(
        `${String(session.baseUri).replace(/\/$/, "")}/restapi/v2.1/accounts/${encodeURIComponent(session.accountId)}/envelopes/${encodeURIComponent(envelopeData.envelopeId)}/views/sender`,
        {
          method: "POST",
          headers: { Authorization: `Bearer ${session.accessToken}`, "Content-Type": "application/json" },
          body: JSON.stringify({ returnUrl: `${config.appBaseUrl}/?docusign=draft-reviewed` }),
        },
      );
      const senderViewData = await senderViewResponse.json().catch(() => ({}));
      if (senderViewResponse.ok) senderViewUrl = senderViewData.url || "";
    } catch (_error) {
      // The draft still exists even if DocuSign cannot create its short-lived sender view URL.
    }

    return sendJson(response, 200, {
      envelopeId: envelopeData.envelopeId,
      status: envelopeData.status || "created",
      senderViewUrl,
    });
  } catch (error) {
    return sendJson(response, 400, { error: error.message || "DocuSign could not send the contract." });
  }
};
