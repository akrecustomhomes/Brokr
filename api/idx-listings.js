const SPARK_PROPERTY_ENDPOINT = "https://replication.sparkapi.com/Version/3/Reso/OData/Property";
const ACTIVE_STATUSES = new Set(["Active", "Coming Soon", "Active Under Contract"]);

function escapeODataString(value) {
  return String(value || "").replaceAll("'", "''");
}

function getPrimaryPhoto(media = []) {
  return [...media]
    .filter((item) => item?.MediaURL && (!item.MediaCategory || item.MediaCategory === "Photo"))
    .sort((left, right) => {
      if (left.PreferredPhotoYN && !right.PreferredPhotoYN) return -1;
      if (!left.PreferredPhotoYN && right.PreferredPhotoYN) return 1;
      return Number(left.Order || 0) - Number(right.Order || 0);
    })[0]?.MediaURL || "";
}

function getAddress(listing) {
  if (listing.UnparsedAddress) return listing.UnparsedAddress;
  const street = [listing.StreetNumber, listing.StreetName, listing.StreetSuffix].filter(Boolean).join(" ");
  const locality = [listing.City, listing.StateOrProvince, listing.PostalCode].filter(Boolean).join(", ");
  return [street, locality].filter(Boolean).join(", ");
}

function normalizeListing(listing) {
  return {
    id: listing.ListingKey,
    listingId: listing.ListingId || "",
    status: listing.StandardStatus || "Active",
    title: listing.UnparsedAddress || [listing.StreetNumber, listing.StreetName].filter(Boolean).join(" ") || "Lume listing",
    address: getAddress(listing),
    price: Number(listing.ListPrice) || 0,
    bedrooms: Number(listing.BedroomsTotal) || 0,
    bathrooms: Number(listing.BathroomsTotalInteger) || 0,
    livingArea: Number(listing.LivingArea) || 0,
    propertyType: listing.PropertySubType || listing.PropertyType || "",
    agentName: listing.ListAgentFullName || "",
    officeName: listing.ListOfficeName || "",
    listingDate: listing.ListingContractDate || "",
    modifiedAt: listing.ModificationTimestamp || "",
    remarks: listing.PublicRemarks || "",
    latitude: Number(listing.Latitude) || null,
    longitude: Number(listing.Longitude) || null,
    photoUrl: getPrimaryPhoto(listing.Media),
  };
}

module.exports = async function idxListings(request, response) {
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");
    return response.status(405).json({ error: "Method not allowed." });
  }

  const accessToken = process.env.SPARK_ACCESS_TOKEN;
  if (!accessToken) return response.status(503).json({ error: "IDX feed is not configured." });

  const officeName = process.env.SPARK_OFFICE_NAME || "LUME REAL ESTATE";
  const fields = [
    "ListingKey", "ListingId", "StandardStatus", "ListPrice", "UnparsedAddress", "StreetNumber",
    "StreetName", "StreetSuffix", "City", "StateOrProvince", "PostalCode", "BedroomsTotal",
    "BathroomsTotalInteger", "LivingArea", "PropertyType", "PropertySubType", "ListOfficeName",
    "ListAgentFullName", "ListingContractDate", "ModificationTimestamp", "PublicRemarks", "Latitude", "Longitude",
  ].join(",");
  const query = new URLSearchParams({
    "$top": "100",
    "$select": fields,
    "$expand": "Media",
    "$filter": `ListOfficeName eq '${escapeODataString(officeName)}'`,
    "$orderby": "ModificationTimestamp desc",
  });

  try {
    const sparkResponse = await fetch(`${SPARK_PROPERTY_ENDPOINT}?${query}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/json",
        "User-Agent": "Brokr/1.0 (Lume Real Estate)",
      },
    });
    const payload = await sparkResponse.json().catch(() => ({}));
    if (!sparkResponse.ok) {
      console.error("Spark IDX request failed", sparkResponse.status, payload?.error?.message || payload?.Message || "Unknown error");
      return response.status(502).json({ error: "The IDX feed could not be loaded." });
    }

    const listings = (payload.value || [])
      .filter((listing) => ACTIVE_STATUSES.has(listing.StandardStatus))
      .map(normalizeListing);
    response.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=900");
    return response.status(200).json({ listings, officeName, source: "Spark IDX" });
  } catch (error) {
    console.error("Spark IDX connection error", error.message);
    return response.status(502).json({ error: "The IDX feed could not be reached." });
  }
};
