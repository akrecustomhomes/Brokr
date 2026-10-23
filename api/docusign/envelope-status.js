const { requireAdmin, sendJson } = require("../_admin");
const {
  assertDocusignConfig,
  getActiveDocusignSession,
  getDocusignConfig,
} = require("../_docusign");

function getContractStatus(envelope, recipients) {
  const status = String(envelope.status || "").toLowerCase();
  if (status === "completed") return "Completed";
  if (status === "declined") return "Declined";
  if (status === "voided") return "Voided";
  if (status === "created") return "Draft";

  const signers = [...(recipients.signers || [])].sort(
    (first, second) => Number(first.routingOrder || 0) - Number(second.routingOrder || 0),
  );
  const brokerComplete = String(signers[0]?.status || "").toLowerCase() === "completed";
  const agentComplete = String(signers[1]?.status || "").toLowerCase() === "completed";
  if (!brokerComplete) return "Awaiting Broker Signature";
  if (!agentComplete) return "Awaiting Agent Signature";
  return "Sent";
}

module.exports = async function getEnvelopeStatus(request, response) {
  if (request.method !== "GET") return sendJson(response, 405, { error: "Method not allowed." });
  const admin = await requireAdmin(request);
  if (!admin) return sendJson(response, 403, { error: "Only a Broker or Admin can view DocuSign envelopes." });

  try {
    const envelopeId = String(request.query?.envelopeId || "").trim();
    if (!/^[0-9a-f-]{36}$/i.test(envelopeId)) throw new Error("A valid DocuSign envelope ID is required.");
    const config = getDocusignConfig(request);
    assertDocusignConfig(config);
    const session = await getActiveDocusignSession(request, response, config);
    const apiBase = `${String(session.baseUri).replace(/\/$/, "")}/restapi/v2.1/accounts/${encodeURIComponent(session.accountId)}/envelopes/${encodeURIComponent(envelopeId)}`;
    const headers = { Authorization: `Bearer ${session.accessToken}` };
    const [envelopeResponse, recipientsResponse] = await Promise.all([
      fetch(apiBase, { headers }),
      fetch(`${apiBase}/recipients`, { headers }),
    ]);
    const envelope = await envelopeResponse.json().catch(() => ({}));
    const recipients = await recipientsResponse.json().catch(() => ({}));
    if (!envelopeResponse.ok) throw new Error(envelope.message || "DocuSign could not load the envelope.");

    const contractStatus = getContractStatus(envelope, recipients);
    const demo = String(config.oauthBaseUrl).includes("account-d.docusign.com");
    const result = {
      envelopeId,
      status: contractStatus,
      docusignStatus: envelope.status || "created",
      sentAt: envelope.sentDateTime || "",
      completedAt: envelope.completedDateTime || "",
      declinedAt: envelope.declinedDateTime || "",
      voidedAt: envelope.voidedDateTime || "",
      webUrl: `https://${demo ? "apps-d" : "apps"}.docusign.com/send/documents/details/${encodeURIComponent(envelopeId)}`,
      recipients: (recipients.signers || []).map((signer) => ({
        name: signer.name || "",
        email: signer.email || "",
        routingOrder: Number(signer.routingOrder || 0),
        status: signer.status || "",
        signedAt: signer.signedDateTime || "",
      })),
    };

    const agentId = Number(request.query?.agentId || 0);
    if (agentId > 0) {
      const { data: agent } = await admin.adminClient
        .from("agents")
        .select("id,first_name,last_name,contract_file_name,details")
        .eq("id", agentId)
        .maybeSingle();
      if (agent) {
        const details = agent.details && typeof agent.details === "object" ? agent.details : {};
        let contractFileName = agent.contract_file_name || details.contractFileName || "";
        let contractStoragePath = details.contractStoragePath || "";

        if (contractStatus === "Completed" && !contractStoragePath) {
          const signedDocumentResponse = await fetch(`${apiBase}/documents/combined`, { headers });
          if (signedDocumentResponse.ok) {
            const safeName = `${agent.first_name || "Agent"}-${agent.last_name || "Contract"}`.replace(/[^a-z0-9-]+/gi, "-");
            contractFileName = `${safeName}-Broker-Agent-Contract-Signed.pdf`;
            contractStoragePath = `agent-contracts/${agentId}/${envelopeId}.pdf`;
            const document = Buffer.from(await signedDocumentResponse.arrayBuffer());
            const { error: uploadError } = await admin.adminClient.storage
              .from("transaction-files")
              .upload(contractStoragePath, document, { contentType: "application/pdf", upsert: true });
            if (uploadError) contractStoragePath = "";
          }
        }

        const updatedDetails = {
          ...details,
          docusignEnvelopeId: envelopeId,
          docusignEnvelopeStatus: envelope.status || "",
          docusignEnvelopeWebUrl: result.webUrl,
          docusignRecipients: result.recipients,
          contractSentAt: result.sentAt,
          contractCompletedAt: result.completedAt,
          contractStoragePath,
          contractFileName,
          contractGenerated: true,
          contractStatus,
        };
        await admin.adminClient
          .from("agents")
          .update({
            contract_status: contractStatus,
            contract_file_name: contractFileName || null,
            details: updatedDetails,
          })
          .eq("id", agentId);
        result.contractFileName = contractFileName;
        result.contractStoragePath = contractStoragePath;
      }
    }

    return sendJson(response, 200, result);
  } catch (error) {
    return sendJson(response, 400, { error: error.message || "DocuSign could not load the envelope." });
  }
};
