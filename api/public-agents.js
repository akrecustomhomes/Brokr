const { getAdminClient } = require("./_admin");

module.exports = async function publicAgents(request, response) {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (request.method === "OPTIONS") return response.status(204).end();
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET, OPTIONS");
    return response.status(405).json({ error: "Method not allowed." });
  }

  try {
    const adminClient = getAdminClient();
    if (!adminClient) return response.status(503).json({ error: "Agent profiles are not configured." });
    const { data, error } = await adminClient
      .from("agents")
      .select("id, first_name, last_name, phone, profile_image_url, archived")
      .eq("archived", false)
      .order("created_at", { ascending: true });

    if (error) throw error;

    const agents = (data || []).map((agent) => ({
      id: agent.id,
      firstName: agent.first_name || "",
      lastName: agent.last_name || "",
      phone: agent.phone || "",
      profileImageUrl: agent.profile_image_url || "",
    }));

    response.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=900");
    return response.status(200).json({ agents });
  } catch (error) {
    console.error("Unable to load public agent profiles", error.message);
    return response.status(500).json({ error: "Agent profiles could not be loaded." });
  }
};
