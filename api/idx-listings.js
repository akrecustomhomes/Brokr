const SPARK_PROPERTY_ENDPOINT = "https://replication.sparkapi.com/Version/3/Reso/OData/Property";
const SPARK_OFFICE_ENDPOINT = "https://replication.sparkapi.com/Version/3/Reso/OData/Office";
const DASHBOARD_STATUSES = new Set(["Active", "Coming Soon", "Active Under Contract", "Pending", "Closed", "Expired"]);

function sparkHeaders(accessToken) {
  return {
    Authorization: `Bearer ${accessToken}`,
    Accept: "application/json",
    "User-Agent": "Brokr/1.0 (Lume Real Estate)",
  };
}

async function getOfficeKeys(accessToken, officeName) {
  const query = new URLSearchParams({
    "$top": "1000",
    "$select": "OfficeKey,OfficeName",
  });
  const officeResponse = await fetch(`${SPARK_OFFICE_ENDPOINT}?${query}`, {
    headers: sparkHeaders(accessToken),
  });
  const officePayload = await officeResponse.json().catch(() => ({}));
  if (!officeResponse.ok) return [];
  const normalizedName = officeName.trim().toLowerCase();
  return [...new Set((officePayload.value || [])
    .filter((office) => String(office.OfficeName || "").trim().toLowerCase() === normalizedName)
    .map((office) => String(office.OfficeKey || "").trim())
    .filter(Boolean))];
}

function getPrimaryPhoto(media = []) {
  return getPhotoUrls(media)[0] || "";
}

function getPhotoUrls(media = []) {
  return [...media]
    .filter((item) => item?.MediaURL && (!item.MediaCategory || item.MediaCategory === "Photo"))
    .sort((left, right) => {
      if (left.PreferredPhotoYN && !right.PreferredPhotoYN) return -1;
      if (!left.PreferredPhotoYN && right.PreferredPhotoYN) return 1;
      return Number(left.Order || 0) - Number(right.Order || 0);
    })
    .map((item) => item.MediaURL);
}

function getAddress(listing) {
  if (listing.UnparsedAddress) return listing.UnparsedAddress;
  const street = [listing.StreetNumber, listing.StreetName, listing.StreetSuffix].filter(Boolean).join(" ");
  const locality = [listing.City, listing.StateOrProvince, listing.PostalCode].filter(Boolean).join(", ");
  return [street, locality].filter(Boolean).join(", ");
}

function normalizeValue(value) {
  if (Array.isArray(value)) return value.filter(Boolean).join(", ");
  return value ?? "";
}

function normalizeListing(listing) {
  return {
    id: listing.ListingKey,
    listingId: listing.ListingId || "",
    status: listing.StandardStatus || "Active",
    title: listing.UnparsedAddress || [listing.StreetNumber, listing.StreetName].filter(Boolean).join(" ") || "Lume listing",
    address: getAddress(listing),
    price: Number(listing.ListPrice) || 0,
    closePrice: Number(listing.ClosePrice) || 0,
    bedrooms: Number(listing.BedroomsTotal) || 0,
    bathrooms: Number(listing.BathroomsTotalDecimal ?? listing.BathroomsTotalInteger) || 0,
    livingArea: Number(listing.LivingArea) || 0,
    buildingArea: Number(listing.BuildingAreaTotal) || 0,
    propertyType: listing.PropertySubType || listing.PropertyType || "",
    agentName: listing.ListAgentFullName || "",
    officeName: listing.ListOfficeName || "",
    listingDate: listing.ListingContractDate || "",
    expirationDate: listing.ExpirationDate || "",
    closeDate: listing.CloseDate || "",
    modifiedAt: listing.ModificationTimestamp || "",
    remarks: listing.PublicRemarks || "",
    latitude: Number(listing.Latitude) || null,
    longitude: Number(listing.Longitude) || null,
    daysOnMarket: Number(listing.DaysOnMarket) || 0,
    cumulativeDaysOnMarket: Number(listing.CumulativeDaysOnMarket) || 0,
    levels: normalizeValue(listing.Levels),
    yearBuilt: Number(listing.YearBuilt) || null,
    county: listing.CountyOrParish || "",
    subdivision: listing.SubdivisionName || "",
    lotAcres: Number(listing.LotSizeAcres) || null,
    garageSpaces: Number(listing.GarageSpaces) || null,
    poolPrivate: listing.PoolPrivateYN ?? null,
    parcelNumber: listing.ParcelNumber || "",
    taxAnnualAmount: Number(listing.TaxAnnualAmount) || null,
    taxYear: Number(listing.TaxYear) || null,
    directions: listing.Directions || "",
    cooling: normalizeValue(listing.Cooling),
    heating: normalizeValue(listing.Heating),
    parkingFeatures: normalizeValue(listing.ParkingFeatures),
    interiorFeatures: normalizeValue(listing.InteriorFeatures),
    appliances: normalizeValue(listing.Appliances),
    utilities: normalizeValue(listing.Utilities),
    sewer: normalizeValue(listing.Sewer),
    waterSource: normalizeValue(listing.WaterSource),
    zoning: normalizeValue(listing.Zoning),
    propertyCondition: normalizeValue(listing.PropertyCondition),
    photoUrl: getPrimaryPhoto(listing.Media),
    photoUrls: getPhotoUrls(listing.Media),
  };
}

module.exports = async function idxListings(request, response) {
  // Office listing data is public IDX content. Allow the separate public Lume
  // website to consume this read-only endpoint without exposing Spark secrets.
  response.setHeader("Access-Control-Allow-Origin", "*");
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");
    return response.status(405).json({ error: "Method not allowed." });
  }

  const accessToken = process.env.SPARK_ACCESS_TOKEN;
  if (!accessToken) return response.status(503).json({ error: "IDX feed is not configured." });

  const officeName = process.env.SPARK_OFFICE_NAME || "LUME REAL ESTATE";
  const fields = [
    "ListingKey", "ListingId", "StandardStatus", "ListPrice", "ClosePrice", "UnparsedAddress", "StreetNumber",
    "StreetName", "StreetSuffix", "City", "StateOrProvince", "PostalCode", "BedroomsTotal",
    "BathroomsTotalDecimal", "BathroomsTotalInteger", "PropertyType", "PropertySubType", "ListOfficeName",
    "ListAgentFullName", "ListingContractDate", "ExpirationDate", "CloseDate", "ModificationTimestamp", "PublicRemarks", "Latitude", "Longitude",
    "BuildingAreaTotal", "DaysOnMarket", "CumulativeDaysOnMarket", "Levels", "YearBuilt",
    "CountyOrParish", "SubdivisionName", "LotSizeAcres", "GarageSpaces", "PoolPrivateYN",
    "ParcelNumber", "TaxAnnualAmount", "TaxYear", "Directions", "Cooling", "Heating",
    "ParkingFeatures", "InteriorFeatures", "Appliances", "Utilities", "Sewer", "WaterSource",
    "Zoning", "PropertyCondition",
  ];

  try {
    const listingKey = String(request.query?.listingKey || "").trim();
    if (listingKey) {
      let detailResponse;
      let detailPayload;
      const selectedFields = [...fields];
      for (let attempt = 0; attempt < fields.length; attempt += 1) {
        const query = new URLSearchParams({
          "$select": selectedFields.join(","),
          "$expand": "Media",
        });
        const safeListingKey = listingKey.replaceAll("'", "''");
        detailResponse = await fetch(`${SPARK_PROPERTY_ENDPOINT}('${safeListingKey}')?${query}`, {
          headers: sparkHeaders(accessToken),
        });
        detailPayload = await detailResponse.json().catch(() => ({}));
        const message = String(detailPayload?.error?.message || detailPayload?.Message || "");
        const unsupportedField = message.match(/\$select contains non-matching element:\s*([A-Za-z0-9_]+)/i)?.[1];
        if (detailResponse.ok || !unsupportedField || !selectedFields.includes(unsupportedField)) break;
        selectedFields.splice(selectedFields.indexOf(unsupportedField), 1);
      }
      if (!detailResponse.ok) return response.status(502).json({ error: "The full MLS listing could not be loaded." });
      response.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=900");
      return response.status(200).json({ listing: normalizeListing(detailPayload), source: "Spark IDX" });
    }

    const officeKeys = await getOfficeKeys(accessToken, officeName);
    let sparkResponse;
    let payload;
    const selectedFields = [...fields];
    for (let attempt = 0; attempt < fields.length; attempt += 1) {
      const query = new URLSearchParams({
        "$top": "1000",
        "$select": selectedFields.join(","),
        "$expand": "Media($top=1)",
        "$filter": officeKeys.length
          ? officeKeys
            .map((officeKey) => `ListOfficeKey eq '${officeKey.replaceAll("'", "''")}'`)
            .join(" or ")
          : "StandardStatus in ('Active','Coming Soon','Active Under Contract','Pending','Closed','Expired')",
        "$orderby": "ModificationTimestamp desc",
      });
      sparkResponse = await fetch(`${SPARK_PROPERTY_ENDPOINT}?${query}`, {
        headers: sparkHeaders(accessToken),
      });
      payload = await sparkResponse.json().catch(() => ({}));
      const message = String(payload?.error?.message || payload?.Message || "");
      const unsupportedField = message.match(/\$select contains non-matching element:\s*([A-Za-z0-9_]+)/i)?.[1];
      if (sparkResponse.ok || !unsupportedField || !selectedFields.includes(unsupportedField)) break;
      selectedFields.splice(selectedFields.indexOf(unsupportedField), 1);
    }
    if (!sparkResponse.ok) {
      const upstreamMessage = String(payload?.error?.message || payload?.Message || "Unknown Spark error")
        .replace(/Bearer\s+\S+/gi, "Bearer [redacted]")
        .slice(0, 240);
      console.error("Spark IDX request failed", sparkResponse.status, upstreamMessage);
      return response.status(502).json({
        error: "The IDX feed could not be loaded.",
        upstreamStatus: sparkResponse.status,
        upstreamMessage,
      });
    }

    const normalizedOfficeName = officeName.trim().toLowerCase();
    const listings = (payload.value || [])
      .filter((listing) => String(listing.ListOfficeName || "").trim().toLowerCase() === normalizedOfficeName)
      .filter((listing) => DASHBOARD_STATUSES.has(listing.StandardStatus))
      .map(normalizeListing);
    response.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=900");
    return response.status(200).json({ listings, officeName, source: "Spark IDX" });
  } catch (error) {
    console.error("Spark IDX connection error", error.message);
    return response.status(502).json({ error: "The IDX feed could not be reached." });
  }
};
