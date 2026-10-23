const { getAdminClient, sendJson } = require("./_admin");

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function addDays(date, days) {
  const result = new Date(date);
  result.setUTCDate(result.getUTCDate() + days);
  return result;
}

function dateKey(date) {
  return date.toISOString().slice(0, 10);
}

function formatDate(value) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T12:00:00Z`));
}

function daysUntil(value, today) {
  return Math.ceil((new Date(`${value}T12:00:00Z`) - new Date(`${today}T12:00:00Z`)) / 86400000);
}

async function sendEmail({ to, subject, html }) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.BROKR_FROM_EMAIL;
  if (!apiKey || !from) throw new Error("License reminder email delivery is not configured.");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from, to: [to], subject, html }),
  });
  const body = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(body.message || "Email delivery failed.");
  return body;
}

async function alreadySent(adminClient, notificationKey) {
  const { data, error } = await adminClient
    .from("notifications")
    .select("id")
    .eq("notification_key", notificationKey)
    .maybeSingle();
  if (error) throw error;
  return Boolean(data);
}

async function recordReminder(adminClient, { notificationKey, agentId, title, detail }) {
  const { error } = await adminClient.from("notifications").insert({
    notification_key: notificationKey,
    type: "License",
    title,
    detail,
    status: "Email sent",
    state: "open",
    related_agent_id: agentId,
  });
  if (error && error.code !== "23505") throw error;
}

module.exports = async function handler(request, response) {
  if (request.method !== "GET") return sendJson(response, 405, { error: "Method not allowed." });

  const cronSecret = process.env.CRON_SECRET;
  if (!cronSecret || request.headers.authorization !== `Bearer ${cronSecret}`) {
    return sendJson(response, 401, { error: "Unauthorized." });
  }

  const adminClient = getAdminClient();
  if (!adminClient) return sendJson(response, 503, { error: "Database connection is not configured." });

  const { data: broker, error: brokerError } = await adminClient
    .from("broker_contacts")
    .select("*")
    .eq("id", "primary")
    .maybeSingle();
  if (brokerError) return sendJson(response, 500, { error: brokerError.message });

  const leadDays = Math.min(365, Math.max(1, Number(broker?.license_reminder_days || 60)));
  const agentEnabled = broker?.license_reminder_agent_enabled !== false;
  const brokerEnabled = broker?.license_reminder_broker_enabled !== false;
  const today = dateKey(new Date());
  const cutoff = dateKey(addDays(new Date(`${today}T12:00:00Z`), leadDays));

  const { data: agents, error: agentsError } = await adminClient
    .from("agents")
    .select("id,first_name,last_name,email,license_number,license_expires_on,archived")
    .eq("archived", false)
    .gte("license_expires_on", today)
    .lte("license_expires_on", cutoff);
  if (agentsError) return sendJson(response, 500, { error: agentsError.message });

  const results = [];
  for (const agent of agents || []) {
    const agentName = `${agent.first_name || ""} ${agent.last_name || ""}`.trim() || "Agent";
    const expirationDate = formatDate(agent.license_expires_on);
    const remainingDays = daysUntil(agent.license_expires_on, today);
    const title = `${agentName}'s real estate license expires in ${remainingDays} day${remainingDays === 1 ? "" : "s"}`;
    const detail = `License ${agent.license_number || "number not entered"} expires ${expirationDate}.`;
    const html = `<h2>${escapeHtml(title)}</h2><p>${escapeHtml(detail)}</p><p>Please complete the renewal and update the expiration date in Brokr.</p>`;

    const recipients = [];
    if (agentEnabled && agent.email) recipients.push({ type: "agent", email: agent.email });
    if (brokerEnabled && broker?.broker_email) recipients.push({ type: "broker", email: broker.broker_email });

    for (const recipient of recipients) {
      const notificationKey = `license-expiration:${agent.id}:${agent.license_expires_on}:${recipient.type}`;
      if (await alreadySent(adminClient, notificationKey)) {
        results.push({ agentId: agent.id, recipient: recipient.type, status: "already-sent" });
        continue;
      }

      try {
        await sendEmail({
          to: recipient.email,
          subject: recipient.type === "agent" ? `License renewal reminder: expires ${expirationDate}` : title,
          html,
        });
        await recordReminder(adminClient, { notificationKey, agentId: agent.id, title, detail });
        results.push({ agentId: agent.id, recipient: recipient.type, status: "sent" });
      } catch (error) {
        results.push({ agentId: agent.id, recipient: recipient.type, status: "failed", error: error.message });
      }
    }
  }

  return sendJson(response, 200, {
    checked: (agents || []).length,
    leadDays,
    sent: results.filter((item) => item.status === "sent").length,
    failed: results.filter((item) => item.status === "failed").length,
    results,
  });
};
