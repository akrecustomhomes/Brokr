const { requireAdmin } = require("../_admin");
const {
  assertDocusignConfig,
  getActiveDocusignSession,
  getDocusignConfig,
} = require("../_docusign");

module.exports = async function getEnvelopeDocument(request, response) {
  if (request.method !== "GET") return response.status(405).end("Method not allowed.");
  const admin = await requireAdmin(request);
  if (!admin) return response.status(403).end("Only a Broker or Admin can download signed contracts.");

  try {
    const envelopeId = String(request.query?.envelopeId || "").trim();
    if (!/^[0-9a-f-]{36}$/i.test(envelopeId)) throw new Error("A valid DocuSign envelope ID is required.");
    const agentId = Number(request.query?.agentId || 0);
    if (agentId > 0) {
      const { data: agent } = await admin.adminClient
        .from("agents")
        .select("details")
        .eq("id", agentId)
        .maybeSingle();
      const storagePath = agent?.details?.contractStoragePath || "";
      if (storagePath) {
        const { data: storedDocument, error: storageError } = await admin.adminClient.storage
          .from("transaction-files")
          .download(storagePath);
        if (!storageError && storedDocument) {
          const storedBuffer = Buffer.from(await storedDocument.arrayBuffer());
          response.status(200);
          response.setHeader("Content-Type", "application/pdf");
          response.setHeader("Content-Disposition", `attachment; filename="Lume-Agent-Contract-${envelopeId}.pdf"`);
          response.setHeader("Cache-Control", "private, no-store");
          return response.end(storedBuffer);
        }
      }
    }
    const config = getDocusignConfig(request);
    assertDocusignConfig(config);
    const session = await getActiveDocusignSession(request, response, config);
    const documentResponse = await fetch(
      `${String(session.baseUri).replace(/\/$/, "")}/restapi/v2.1/accounts/${encodeURIComponent(session.accountId)}/envelopes/${encodeURIComponent(envelopeId)}/documents/combined`,
      { headers: { Authorization: `Bearer ${session.accessToken}` } },
    );
    if (!documentResponse.ok) {
      const error = await documentResponse.json().catch(() => ({}));
      throw new Error(error.message || "DocuSign could not download the signed contract.");
    }
    const document = Buffer.from(await documentResponse.arrayBuffer());
    response.status(200);
    response.setHeader("Content-Type", "application/pdf");
    response.setHeader("Content-Disposition", `attachment; filename="Lume-Agent-Contract-${envelopeId}.pdf"`);
    response.setHeader("Cache-Control", "private, no-store");
    return response.end(document);
  } catch (error) {
    return response.status(400).end(error.message || "DocuSign could not download the signed contract.");
  }
};
