const pageTitles = {
  overview: "Overview",
  agents: "Agents",
  transactions: "Transactions",
  schedule: "Schedule",
  inbox: "Inbox",
  users: "Users",
  admin: "Admin",
};

const menuItems = document.querySelectorAll(".menu-item");
const pages = document.querySelectorAll(".page");
const pageTitle = document.querySelector("#page-title");
const mobileMenu = document.querySelector(".mobile-menu");
const sidebarToggle = document.querySelector(".sidebar-toggle");
const topbarNewTransaction = document.querySelector("#topbar-new-transaction");
const headerInboxButton = document.querySelector("#header-inbox-button");
const inboxCount = document.querySelector("#inbox-count");
const authToggle = document.querySelector("#auth-toggle");
const authStatus = document.querySelector("#auth-status");
const authName = document.querySelector("#auth-name");
const authAvatar = document.querySelector(".auth-avatar");
const authActionText = document.querySelector("#auth-action-text");
const accountMenu = document.querySelector(".account-menu");
const accountDropdown = document.querySelector("#account-dropdown");
const accountProfileButton = document.querySelector("#account-profile-button");
const accountLogoutButton = document.querySelector("#account-logout-button");
const accountMenuName = document.querySelector("#account-menu-name");
const accountMenuEmail = document.querySelector("#account-menu-email");
const authGate = document.querySelector("#auth-gate");
const authForm = document.querySelector("#auth-form");
const authEmail = document.querySelector("#auth-email");
const authPassword = document.querySelector("#auth-password");
const authMessage = document.querySelector("#auth-message");
const authResetButton = document.querySelector("#auth-reset-button");
const authCreateSuperButton = document.querySelector("#auth-create-super-button");
const passwordSetupGate = document.querySelector("#password-setup-gate");
const passwordSetupForm = document.querySelector("#password-setup-form");
const passwordSetupNew = document.querySelector("#password-setup-new");
const passwordSetupConfirm = document.querySelector("#password-setup-confirm");
const passwordSetupMessage = document.querySelector("#password-setup-message");
const themeOptions = document.querySelectorAll("button[data-theme]");
const brandingForm = document.querySelector(".branding-panel");
const companyInput = document.querySelector("#company-name");
const systemInput = document.querySelector("#system-name");
const primaryColorInput = document.querySelector("#primary-color");
const accentColorInput = document.querySelector("#accent-color");
const logoUpload = document.querySelector("#logo-upload");
const iconUpload = document.querySelector("#icon-upload");
const appFavicon = document.querySelector("#app-favicon");
const appAppleTouchIcon = document.querySelector("#app-apple-touch-icon");
const appAppleTitle = document.querySelector('meta[name="apple-mobile-web-app-title"]');
const companyPreview = document.querySelector("#company-preview");
const systemPreview = document.querySelector("#system-preview");
const logoPreview = document.querySelector("#logo-preview");
const sidebarLogo = document.querySelector("#sidebar-logo");
const sidebarBrokerageLogo = document.querySelector("#sidebar-brokerage-logo");
const sidebarBrokerageLogoImage = document.querySelector("#sidebar-brokerage-logo-image");
const sidebarBrokerageLogoFallback = document.querySelector("#sidebar-brokerage-logo-fallback");
const overviewDate = document.querySelector("#overview-date");
const overviewWelcomeTitle = document.querySelector("#overview-welcome-title");
const brokerContactForm = document.querySelector("#broker-contact-form");
const brokerContactFields = {
  name: document.querySelector("#broker-contact-name"),
  email: document.querySelector("#broker-contact-email"),
  phone: document.querySelector("#broker-contact-phone"),
  profileImage: document.querySelector("#broker-profile-image"),
};
const brokerProfilePreview = document.querySelector("#broker-profile-preview");
const archiveStorageForm = document.querySelector("#archive-storage-form");
const archiveStorageFields = {
  folderUrl: document.querySelector("#archive-folder-url"),
  folderName: document.querySelector("#archive-folder-name"),
  packageFormat: document.querySelector("#archive-package-format"),
};
const archiveQueueList = document.querySelector("#archive-queue-list");
const archiveQueueCount = document.querySelector("#archive-queue-count");
const overviewMetrics = {
  activeListings: document.querySelector("#overview-active-listings"),
  pendingDeals: document.querySelector("#overview-pending-deals"),
  salesVolume: document.querySelector("#overview-sales-volume"),
  agentCommission: document.querySelector("#overview-agent-commission"),
  brokerageCommission: document.querySelector("#overview-brokerage-commission"),
  ytdTransactions: document.querySelector("#overview-ytd-transactions"),
};
const metricCards = document.querySelectorAll(".metric-card[data-page-target]");
const overviewScheduleGrid = document.querySelector("#overview-schedule-grid");
const overviewScheduleRange = document.querySelector("#overview-schedule-range");
const overviewSchedulePrev = document.querySelector("#overview-schedule-prev");
const overviewScheduleNext = document.querySelector("#overview-schedule-next");
const officeListingsGrid = document.querySelector("#office-listings-grid");
const officeListingsToggle = document.querySelector("#office-listings-toggle");
const companyTaskList = document.querySelector("#company-task-list");
const companyTaskOpenCount = document.querySelector("#company-task-open-count");
const addCompanyTaskButton = document.querySelector("#add-company-task-button");
const companyTaskModal = document.querySelector("#company-task-modal");
const companyTaskForm = document.querySelector("#company-task-form");
const closeCompanyTaskModal = document.querySelector("#close-company-task-modal");
const cancelCompanyTaskButton = document.querySelector("#cancel-company-task-button");
const companyTaskFields = {
  title: document.querySelector("#company-task-title"),
  owner: document.querySelector("#company-task-owner"),
  deadline: document.querySelector("#company-task-deadline"),
};
const iconPreview = document.querySelector("#icon-preview");
const brandEyebrow = document.querySelector(".brand .eyebrow");
const brandTitle = document.querySelector(".brand h1");
const brandMark = document.querySelector(".brand-mark");
const agentTableBody = document.querySelector("#agent-table-body");
const addAgentButton = document.querySelector("#add-agent-button");
const agentModal = document.querySelector("#agent-modal");
const agentForm = document.querySelector("#agent-form");
const agentModalTitle = document.querySelector("#agent-modal-title");
const closeAgentModal = document.querySelector("#close-agent-modal");
const cancelAgentButton = document.querySelector("#cancel-agent-button");
const archiveAgentButton = document.querySelector("#archive-agent-button");
const deleteAgentButton = document.querySelector("#delete-agent-button");
const agentEmptyState = document.querySelector("#agent-empty-state");
const rosterTabs = document.querySelectorAll(".roster-tab");
const activeAgentCount = document.querySelector("#active-agent-count");
const archivedAgentCount = document.querySelector("#archived-agent-count");
const licenseAlertCount = document.querySelector("#license-alert-count");
const agentSummaryItems = document.querySelectorAll("[data-agent-summary-action]");
const transactionTableBody = document.querySelector("#transaction-table-body");
const addTransactionButton = document.querySelector("#add-transaction-button");
const transactionModal = document.querySelector("#transaction-modal");
const transactionForm = document.querySelector("#transaction-form");
const closeTransactionModal = document.querySelector("#close-transaction-modal");
const cancelTransactionButton = document.querySelector("#cancel-transaction-button");
const cancelCalendarEventButton = document.querySelector("#cancel-calendar-event-button");
const deleteTransactionButton = document.querySelector("#delete-transaction-button");
const transactionEmptyState = document.querySelector("#transaction-empty-state");
const transactionClientLabel = document.querySelector("#transaction-client-label");
const transactionFileGrid = document.querySelector("#transaction-file-grid");
const additionalDocumentList = document.querySelector("#additional-document-list");
const addAdditionalDocumentButton = document.querySelector("#add-additional-document-button");
const transactionFields = {
  agentId: document.querySelector("#transaction-agent"),
  side: document.querySelector("#transaction-side"),
  clientName: document.querySelector("#transaction-client-name"),
  clientEmail: document.querySelector("#transaction-client-email"),
  clientPhone: document.querySelector("#transaction-client-phone"),
  contractDate: document.querySelector("#transaction-contract-date"),
  listPrice: document.querySelector("#transaction-list-price"),
  listingTitle: document.querySelector("#transaction-listing-title"),
  listingPhoto: document.querySelector("#transaction-listing-photo"),
  contractPrice: document.querySelector("#transaction-contract-price"),
  listPriceField: document.querySelector("#transaction-list-price-field"),
  listingTitleField: document.querySelector("#transaction-listing-title-field"),
  listingPhotoField: document.querySelector("#transaction-listing-photo-field"),
  contractPriceField: document.querySelector("#transaction-contract-price-field"),
  commissionType: document.querySelector("#transaction-commission-type"),
  commissionRate: document.querySelector("#transaction-commission-rate"),
  commissionRateField: document.querySelector("#transaction-commission-rate-field"),
  commissionFlatFee: document.querySelector("#transaction-commission-flat-fee"),
  commissionFlatField: document.querySelector("#transaction-commission-flat-field"),
  deadlinesField: document.querySelector("#transaction-deadlines-field"),
  deadlines: {
    sellerDisclosure: document.querySelector("#deadline-seller-disclosure"),
    dueDiligence: document.querySelector("#deadline-due-diligence"),
    financingAppraisal: document.querySelector("#deadline-financing-appraisal"),
    settlement: document.querySelector("#deadline-settlement"),
  },
  status: document.querySelector("#transaction-status"),
  propertyAddress: document.querySelector("#transaction-property-address"),
  additionalDocumentType: document.querySelector("#additional-document-type"),
  additionalDocumentName: document.querySelector("#additional-document-name"),
  additionalDocumentDate: document.querySelector("#additional-document-date"),
  additionalDocumentFile: document.querySelector("#additional-document-file"),
  additionalDocumentNotes: document.querySelector("#additional-document-notes"),
};
const calendarGrid = document.querySelector("#calendar-grid");
const calendarRangeLabel = document.querySelector("#calendar-range-label");
const calendarSummary = document.querySelector("#calendar-summary");
const calendarAgentFilter = document.querySelector("#calendar-agent-filter");
const calendarViewOptions = document.querySelectorAll(".calendar-view-option");
const calendarPrev = document.querySelector("#calendar-prev");
const calendarNext = document.querySelector("#calendar-next");
const calendarToday = document.querySelector("#calendar-today");
const userTableBody = document.querySelector("#user-table-body");
const inboxList = document.querySelector("#inbox-list");
const inboxEmptyState = document.querySelector("#inbox-empty-state");
const inboxDetailModal = document.querySelector("#inbox-detail-modal");
const inboxDetailTitle = document.querySelector("#inbox-detail-title");
const inboxDetailType = document.querySelector("#inbox-detail-type");
const inboxDetailStatus = document.querySelector("#inbox-detail-status");
const inboxDetailDate = document.querySelector("#inbox-detail-date");
const inboxDetailCopy = document.querySelector("#inbox-detail-copy");
const inboxDetailAction = document.querySelector("#inbox-detail-action");
const closeInboxDetailModal = document.querySelector("#close-inbox-detail-modal");
const dismissInboxItemButton = document.querySelector("#dismiss-inbox-item-button");
const approveInboxItemButton = document.querySelector("#approve-inbox-item-button");
const archiveInboxItemButton = document.querySelector("#archive-inbox-item-button");
const addUserButton = document.querySelector("#add-user-button");
const userModal = document.querySelector("#user-modal");
const userForm = document.querySelector("#user-form");
const userModalTitle = document.querySelector("#user-modal-title");
const closeUserModal = document.querySelector("#close-user-modal");
const cancelUserButton = document.querySelector("#cancel-user-button");
const deleteUserButton = document.querySelector("#delete-user-button");
const userEmptyState = document.querySelector("#user-empty-state");
const userFields = {
  profileImage: document.querySelector("#user-profile-image"),
  agentId: document.querySelector("#user-agent"),
  role: document.querySelector("#user-role"),
  firstName: document.querySelector("#user-first-name"),
  lastName: document.querySelector("#user-last-name"),
  email: document.querySelector("#user-email"),
  status: document.querySelector("#user-status"),
  canUpload: document.querySelector("#user-can-upload"),
  permissionScope: document.querySelector("#user-scope"),
};
const userProfilePreview = document.querySelector("#user-profile-preview");
const userFormNote = document.querySelector("#user-form-note");
const commissionList = document.querySelector("#commission-list");
const commissionModal = document.querySelector("#commission-modal");
const commissionForm = document.querySelector("#commission-form");
const closeCommissionModal = document.querySelector("#close-commission-modal");
const cancelCommissionButton = document.querySelector("#cancel-commission-button");
const commissionFields = {
  agentName: document.querySelector("#commission-agent-name"),
  agentSplit: document.querySelector("#commission-agent-split"),
  brokerageSplit: document.querySelector("#commission-brokerage-split"),
};
const agentFields = {
  profileImage: document.querySelector("#agent-profile-image"),
  firstName: document.querySelector("#agent-first-name"),
  lastName: document.querySelector("#agent-last-name"),
  email: document.querySelector("#agent-email"),
  phone: document.querySelector("#agent-phone"),
  calendarColor: document.querySelector("#agent-calendar-color"),
  street: document.querySelector("#agent-street"),
  city: document.querySelector("#agent-city"),
  state: document.querySelector("#agent-state"),
  zip: document.querySelector("#agent-zip"),
  licenseFile: document.querySelector("#agent-license-file"),
  licenseExpiration: document.querySelector("#agent-license-expiration"),
  contractFile: document.querySelector("#agent-contract-file"),
  otherFile: document.querySelector("#agent-other-file"),
};

menuItems.forEach((item) => {
  const label = item.querySelector("span:last-child")?.textContent?.trim() || pageTitles[item.dataset.page] || "Menu item";
  item.dataset.menuLabel = label;
  item.setAttribute("aria-label", label);
  item.setAttribute("title", label);
});
const agentProfilePreview = document.querySelector("#agent-profile-preview");
const agentLicenseTile = document.querySelector("#agent-license-tile");
const agentLicenseStatus = document.querySelector("#agent-license-status");
const agentLicenseFileName = document.querySelector("#agent-license-file-name");
const agentContractTile = document.querySelector("#agent-contract-tile");
const agentContractStatus = document.querySelector("#agent-contract-status");
const agentContractFileName = document.querySelector("#agent-contract-file-name");
const agentOtherTile = document.querySelector("#agent-other-tile");
const agentOtherStatus = document.querySelector("#agent-other-status");
const agentOtherFileName = document.querySelector("#agent-other-file-name");
let editingAgentId = null;
let editingTransactionId = null;
let editingCommissionAgentId = null;
let additionalDocumentsDraft = [];
let agentFilter = "active";
let currentSession = null;
let currentUser = null;
let currentUserRole = "Guest";
let authSubscription = null;
let pendingPasswordSetupType = "";
const transactionDeadlineLabels = {
  sellerDisclosure: "Seller Disclosure Deadline",
  dueDiligence: "Due Diligence Deadline",
  financingAppraisal: "Financing & Appraisal Deadline",
  settlement: "Settlement Deadline",
};
const transactionDocumentGroups = {
  buyer: [
    "Buyer Broker Agreement",
    "Wire Fraud Disclosure",
  ],
  seller: [
    "MLS Listing Input Form",
    "Exclusive Right To Sell",
    "Wire Fraud Disclosure",
    "Seller Property Condition Disclosures",
  ],
  contract: [
    "Real Estate Purchase Contract",
    "Addendums",
    "Title Commitment",
    "Earnest Money Receipt",
  ],
};
const transactionDocumentDetails = {
  "MLS Listing Input Form": {
    category: "Listing",
    description: "MLS data sheet for brokerage review and listing setup",
  },
  "Exclusive Right To Sell": {
    category: "Listing",
    description: "Signed seller listing agreement",
  },
  "Wire Fraud Disclosure": {
    category: "Disclosure",
    description: "Signed wire fraud notice for the represented client",
  },
  "Seller Property Condition Disclosures": {
    category: "Disclosure",
    description: "Seller disclosure packet for property condition",
  },
  "Buyer Broker Agreement": {
    category: "Representation",
    description: "Signed buyer agency agreement",
  },
  "Real Estate Purchase Contract": {
    category: "Contract",
    description: "Fully executed purchase contract",
  },
  Addendums: {
    category: "Contract",
    description: "Contract addendums, amendments, and counter documents",
  },
  "Title Commitment": {
    category: "Title",
    description: "Title commitment and related title documents",
  },
  "Earnest Money Receipt": {
    category: "Escrow",
    description: "Receipt confirming earnest money deposit",
  },
};
let agents = [
  {
    id: 1,
    firstName: "Maren",
    lastName: "Cole",
    email: "maren@lumerealestate.com",
    phone: "(555) 214-1034",
    street: "418 Pine Street, Suite 200",
    city: "Denver",
    state: "CO",
    zip: "80202",
    calendarColor: "#837a6d",
    commissionSplit: 70,
    licenseFileName: "maren-cole-license.pdf",
    licenseExpiration: "2026-07-05",
    archived: false,
  },
  {
    id: 2,
    firstName: "Elliot",
    lastName: "Reyes",
    email: "elliot@lumerealestate.com",
    phone: "(555) 890-4412",
    street: "1180 Pearl Street",
    city: "Boulder",
    state: "CO",
    zip: "80302",
    calendarColor: "#5f7588",
    commissionSplit: 75,
    licenseFileName: "elliot-reyes-license.pdf",
    licenseExpiration: "2027-03-18",
    archived: false,
  },
  {
    id: 3,
    firstName: "Dana",
    lastName: "Wirth",
    email: "dana@lumerealestate.com",
    phone: "(555) 309-7780",
    street: "900 Lincoln Avenue",
    city: "Fort Collins",
    state: "CO",
    zip: "80524",
    calendarColor: "#9a7a48",
    commissionSplit: 60,
    licenseFileName: "dana-wirth-license.pdf",
    licenseExpiration: "2025-12-10",
    archived: true,
  },
];
let transactions = [
  {
    id: 1,
    agentId: 1,
    side: "seller",
    clientName: "Harper Stone",
    clientEmail: "harper@example.com",
    clientPhone: "(555) 119-4200",
    propertyAddress: "742 Maple Ridge Road, Golden, CO 80401",
    contractDate: "2026-06-12",
    listPrice: 875000,
    contractPrice: 862000,
    deadlines: {
      sellerDisclosure: "2026-06-13",
      dueDiligence: "2026-06-15",
      financingAppraisal: "2026-06-18",
      settlement: "2026-07-10",
    },
    fileNames: ["listing-agreement.pdf", "seller-disclosure.pdf"],
    documents: {
      "MLS Listing Input Form": "listing-input.pdf",
      "Exclusive Right To Sell": "listing-agreement.pdf",
      "Wire Fraud Disclosure": "wire-fraud.pdf",
      "Seller Property Condition Disclosures": "seller-disclosure.pdf",
      "Real Estate Purchase Contract": "purchase-contract.pdf",
    },
    status: "Under Contract",
  },
  {
    id: 2,
    agentId: 2,
    side: "buyer",
    clientName: "Jordan Blake",
    clientEmail: "jordan@example.com",
    clientPhone: "(555) 664-9821",
    propertyAddress: "1560 Tejon Street, Denver, CO 80211",
    contractDate: "2026-06-20",
    contractPrice: 640000,
    deadlines: {
      sellerDisclosure: "2026-06-22",
      dueDiligence: "2026-06-24",
      financingAppraisal: "2026-06-27",
      settlement: "2026-07-18",
    },
    fileNames: ["buyer-agency.pdf"],
    documents: {
      "Buyer Broker Agreement": "buyer-agency.pdf",
    },
    status: "Review Needed",
  },
];
transactions = JSON.parse(localStorage.getItem("brokr-transactions") || "null") || transactions;
const sampleListings = [
  {
    id: 901,
    agentId: 1,
    side: "seller",
    clientName: "Avery Collins",
    listingTitle: "Forest View Modern Retreat",
    listingPhotoSrc: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    clientEmail: "avery.collins@example.com",
    clientPhone: "(555) 431-2088",
    propertyAddress: "2818 Forest View Lane, Evergreen, CO 80439",
    contractDate: "",
    listPrice: 1195000,
    contractPrice: 0,
    commissionType: "percent",
    commissionRate: 2.8,
    commissionFlatFee: 0,
    deadlines: {},
    fileNames: ["exclusive-right-to-sell-collins.pdf", "mls-input-evergreen.pdf"],
    documents: {
      "MLS Listing Input Form": "mls-input-evergreen.pdf",
      "Exclusive Right To Sell": "exclusive-right-to-sell-collins.pdf",
      "Wire Fraud Disclosure": "wire-fraud-collins.pdf",
    },
    additionalDocuments: [],
    status: "New",
  },
  {
    id: 902,
    agentId: 2,
    side: "seller",
    clientName: "Nora Whitaker",
    listingTitle: "Clay Street Bungalow",
    listingPhotoSrc: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    clientEmail: "nora.whitaker@example.com",
    clientPhone: "(555) 782-4109",
    propertyAddress: "3940 Clay Street, Denver, CO 80211",
    contractDate: "",
    listPrice: 735000,
    contractPrice: 0,
    commissionType: "flat",
    commissionRate: 0,
    commissionFlatFee: 18500,
    deadlines: {},
    fileNames: ["seller-disclosures-whitaker.pdf"],
    documents: {
      "Seller Property Condition Disclosures": "seller-disclosures-whitaker.pdf",
      "Wire Fraud Disclosure": "wire-fraud-whitaker.pdf",
    },
    additionalDocuments: [
      {
        id: 1,
        type: "Disclosure",
        name: "Lead-Based Paint Disclosure",
        date: "2026-06-10",
        fileName: "lead-based-paint-whitaker.pdf",
        notes: "Added during listing prep.",
      },
    ],
    status: "New",
  },
];

if (!localStorage.getItem("brokr-sample-listings-v1")) {
  const existingTransactionIds = new Set(transactions.map((transaction) => Number(transaction.id)));
  const missingSampleListings = sampleListings.filter((listing) => !existingTransactionIds.has(Number(listing.id)));
  if (missingSampleListings.length) {
    transactions = [...missingSampleListings, ...transactions];
    saveTransactions();
  }
  localStorage.setItem("brokr-sample-listings-v1", "true");
}

const sampleListingById = Object.fromEntries(sampleListings.map((listing) => [Number(listing.id), listing]));
let sampleListingsUpdated = false;
transactions = transactions.map((transaction) => {
  const sampleListing = sampleListingById[Number(transaction.id)];
  if (!sampleListing) return transaction;

  const updatedTransaction = {
    ...transaction,
    listingTitle: transaction.listingTitle || sampleListing.listingTitle,
    listingPhotoSrc: transaction.listingPhotoSrc || sampleListing.listingPhotoSrc,
    additionalDocuments: transaction.additionalDocuments || sampleListing.additionalDocuments || [],
  };
  sampleListingsUpdated ||=
    updatedTransaction.listingTitle !== transaction.listingTitle ||
    updatedTransaction.listingPhotoSrc !== transaction.listingPhotoSrc;
  return updatedTransaction;
});
if (sampleListingsUpdated) saveTransactions();
let calendarView = "month";
let calendarDate = new Date();
calendarDate.setHours(0, 0, 0, 0);
let overviewScheduleStartOffset = 0;
const overviewScheduleWindowDays = 10;
const officeListingsPreviewLimit = 8;
let showAllOfficeListings = false;
let editingUserId = null;
let companyTasks = [
  {
    id: 1,
    title: "Review expiring agent licenses",
    owner: "Brokerage admin",
    deadline: "2026-06-15",
    status: "Open",
    completed: false,
  },
  {
    id: 2,
    title: "Confirm missing transaction files",
    owner: "Compliance",
    deadline: "2026-06-12",
    status: "High",
    completed: false,
  },
  {
    id: 3,
    title: "Archive closed June transaction packets",
    owner: "Operations",
    deadline: "2026-06-07",
    status: "Done",
    completed: true,
  },
];
let brokerContact = {
  name: "Jared Alvey",
  email: "broker@lumerealestate.com",
  phone: "(555) 430-1000",
  profileImageSrc: "",
};
let archiveSettings = {
  folderUrl: "",
  folderName: "Brokr Closed Transaction Archives",
  packageFormat: "ZIP package",
};
let fileUploadNotifications = JSON.parse(localStorage.getItem("brokr-file-upload-notifications") || "[]");
let inboxItemStates = JSON.parse(localStorage.getItem("brokr-inbox-item-states") || "{}");
let activeInboxItemId = null;
let users = [
  {
    id: 1,
    agentId: 1,
    firstName: "Maren",
    lastName: "Cole",
    email: "maren@lumerealestate.com",
    role: "Agent",
    canUpload: true,
    permissionScope: "Own transactions only",
    status: "Active",
  },
  {
    id: 2,
    agentId: 2,
    firstName: "Elliot",
    lastName: "Rey",
    email: "elliot@lumerealestate.com",
    role: "Agent",
    canUpload: true,
    permissionScope: "Own transactions only",
    status: "Active",
  },
];

overviewDate.textContent = new Intl.DateTimeFormat("en", {
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric",
}).format(new Date());

function isSignedIn() {
  return Boolean(currentSession) || (!window.BrokrBackend?.isConfigured && currentUserRole !== "Guest");
}

function canAccessAdmin() {
  return isSignedIn() && ["Broker", "Admin"].includes(currentUserRole);
}

function isAgentUser() {
  return isSignedIn() && currentUserRole === "Agent";
}

function getCurrentUserAgent() {
  if (!currentUser) return null;

  return (
    agents.find(
      (agent) =>
        (currentUser.agentId && String(agent.id) === String(currentUser.agentId)) ||
        agent.email?.toLowerCase() === currentUser.email?.toLowerCase(),
    ) || null
  );
}

function canSeeTransaction(transaction) {
  if (!isAgentUser()) return true;

  const agent = getCurrentUserAgent();
  return Boolean(agent && String(transaction.agentId) === String(agent.id));
}

function getVisibleTransactions({ includeCancelled = false } = {}) {
  return transactions.filter(
    (transaction) => (includeCancelled || transaction.status !== "Cancelled") && canSeeTransaction(transaction),
  );
}

function canAccessPage(pageId) {
  if (pageId === "admin" || pageId === "users") return canAccessAdmin();
  if (pageId === "agents") return !isAgentUser();
  return true;
}

function showLockedNotice(pageId) {
  const section = pageTitles[pageId] || "This section";
  window.alert(`${section} is locked for agent users. Ask the broker/admin for access.`);
}

function syncMenuAccess() {
  const adminMenuItem = document.querySelector('[data-page="admin"]');
  const usersMenuItem = document.querySelector('[data-page="users"]');
  const agentsMenuItem = document.querySelector('[data-page="agents"]');
  const hasAdminAccess = canAccessAdmin();
  const agentView = isAgentUser();

  adminMenuItem.hidden = !isSignedIn();
  adminMenuItem.classList.toggle("locked", isSignedIn() && !hasAdminAccess);
  adminMenuItem.setAttribute("aria-disabled", String(!hasAdminAccess));

  usersMenuItem.hidden = !hasAdminAccess;
  usersMenuItem.setAttribute("aria-disabled", String(!hasAdminAccess));
  agentsMenuItem.hidden = agentView;
  agentsMenuItem.setAttribute("aria-disabled", String(agentView));

  if (!canAccessPage(document.querySelector(".page.active")?.id)) {
    activatePage("overview");
  }
}

function activatePage(pageId) {
  if (!canAccessPage(pageId)) {
    showLockedNotice(pageId);
    return;
  }

  menuItems.forEach((item) => {
    const isActive = item.dataset.page === pageId;
    item.classList.toggle("active", isActive);
    item.toggleAttribute("aria-current", isActive);
  });

  pages.forEach((page) => {
    page.classList.toggle("active", page.id === pageId);
  });

  document.body.classList.toggle("overview-active", pageId === "overview");
  pageTitle.textContent = pageTitles[pageId];
  topbarNewTransaction.hidden = isAgentUser() || !["overview", "transactions"].includes(pageId);
  document.body.classList.remove("menu-open");
}

menuItems.forEach((item) => {
  item.addEventListener("click", () => activatePage(item.dataset.page));
});

metricCards.forEach((card) => {
  const openMetricPage = () => activatePage(card.dataset.pageTarget);
  card.addEventListener("click", openMetricPage);
  card.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    openMetricPage();
  });
});

mobileMenu.addEventListener("click", () => {
  document.body.classList.toggle("menu-open");
});

function setSidebarCollapsed(isCollapsed) {
  document.body.classList.toggle("sidebar-collapsed", isCollapsed);
  sidebarToggle.setAttribute("aria-expanded", String(!isCollapsed));
  sidebarToggle.setAttribute("aria-label", isCollapsed ? "Expand sidebar" : "Collapse sidebar");
  localStorage.setItem("brokr-sidebar-collapsed", String(isCollapsed));
}

sidebarToggle.addEventListener("click", () => {
  setSidebarCollapsed(!document.body.classList.contains("sidebar-collapsed"));
});

setSidebarCollapsed(localStorage.getItem("brokr-sidebar-collapsed") === "true");

function toDisplayNameFromEmail(email = "") {
  return (
    email
      .split("@")[0]
      ?.split(/[._\-\s]+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => `${part.charAt(0).toUpperCase()}${part.slice(1).toLowerCase()}`)
      .join(" ") || "Guest"
  );
}

function getAuthDisplayName(user) {
  if (!user) return !window.BrokrBackend?.isConfigured ? "Jared Alvey" : "Guest";
  if (user.firstName || user.lastName) return getUserDisplayName(user);
  if (["Broker", "Admin"].includes(user.role)) return brokerContact.name || toDisplayNameFromEmail(user.email);

  const linkedAgent = agents.find(
    (agent) => Number(agent.id) === Number(user.agentId) || agent.email?.toLowerCase() === user.email?.toLowerCase(),
  );
  if (linkedAgent) return `${linkedAgent.firstName} ${linkedAgent.lastName}`;

  return toDisplayNameFromEmail(user.email);
}

function getWelcomeMessage(displayName = "there") {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";
  return `${greeting}, ${displayName}.`;
}

function getAuthAvatarMarkup(user, displayName) {
  if (["Broker", "Admin"].includes(user?.role || currentUserRole) && brokerContact.profileImageSrc) {
    return `<img src="${brokerContact.profileImageSrc}" alt="${displayName}" />`;
  }

  if (user?.profileImageSrc) {
    return `<img src="${user.profileImageSrc}" alt="${displayName}" />`;
  }

  const linkedAgent = agents.find(
    (agent) => Number(agent.id) === Number(user?.agentId) || agent.email?.toLowerCase() === user?.email?.toLowerCase(),
  );
  if (linkedAgent?.profileImageSrc) {
    return `<img src="${linkedAgent.profileImageSrc}" alt="${displayName}" />`;
  }

  const source = user ? { ...user, firstName: displayName.split(" ")[0], lastName: displayName.split(" ")[1] || "" } : {
    firstName: "Jared",
    lastName: "Alvey",
  };
  return getUserInitials(source);
}

function renderAuthIdentity(user = currentUser) {
  const isLoggedIn = isSignedIn();
  const displayName = getAuthDisplayName(user);
  const email = user?.email?.includes("@") ? user.email : brokerContact.email || "broker@lumerealestate.com";

  authStatus.textContent = isLoggedIn ? currentUserRole : "Signed out";
  authName.textContent = isLoggedIn ? displayName : "Guest";
  authAvatar.innerHTML = getAuthAvatarMarkup(user, displayName);
  authAvatar.classList.toggle("has-image", authAvatar.querySelector("img") !== null);
  if (accountMenuName) accountMenuName.textContent = isLoggedIn ? displayName : "Guest";
  if (accountMenuEmail) accountMenuEmail.textContent = isLoggedIn ? email : "Not signed in";
  if (overviewWelcomeTitle) overviewWelcomeTitle.textContent = getWelcomeMessage(displayName);
}

function setAuthState(user = null, session = null) {
  currentUser = user;
  currentSession = session;
  currentUserRole = user?.role || (!window.BrokrBackend?.isConfigured ? "Broker" : "Guest");
  const isLoggedIn = isSignedIn();

  authToggle.setAttribute("aria-pressed", String(isLoggedIn));
  if (authActionText) authActionText.textContent = isLoggedIn ? "Open account menu" : "Login";
  closeAccountMenu();
  renderAuthIdentity(user);
  syncMenuAccess();
  renderAll();
}

function openAccountMenu() {
  if (!isSignedIn()) {
    openAuthGate();
    return;
  }

  accountMenu?.classList.add("open");
  authToggle.setAttribute("aria-expanded", "true");
}

function closeAccountMenu() {
  accountMenu?.classList.remove("open");
  authToggle.setAttribute("aria-expanded", "false");
}

async function logoutCurrentUser() {
  closeAccountMenu();
  if (!window.BrokrBackend?.isConfigured) {
    setAuthState(null, null);
    return;
  }

  await window.BrokrBackend.signOut();
}

function openProfileSettings() {
  closeAccountMenu();
  if (!isSignedIn()) {
    openAuthGate();
    return;
  }

  if (canAccessAdmin()) {
    activatePage("admin");
    document.querySelector(".broker-contact-panel")?.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  activatePage("users");
  const editableUser = users.find(
    (user) =>
      String(user.id) === String(currentUser?.id) ||
      user.email?.toLowerCase() === currentUser?.email?.toLowerCase(),
  );
  if (editableUser) openUserModal(editableUser.id);
}

function setAuthMessage(message, type = "") {
  authMessage.textContent = message;
  authMessage.dataset.type = type;
}

function setPasswordSetupMessage(message, type = "") {
  passwordSetupMessage.textContent = message;
  passwordSetupMessage.dataset.type = type;
}

function openAuthGate(message = "Sign in with your Brokr account to continue.", type = "") {
  passwordSetupGate.hidden = true;
  authGate.hidden = false;
  setAuthMessage(message, type);
  authPassword.value = "";
  authEmail.focus();
}

function closeAuthGate() {
  authGate.hidden = true;
}

function openPasswordSetupGate(type = "setup") {
  pendingPasswordSetupType = type;
  authGate.hidden = true;
  passwordSetupGate.hidden = false;
  passwordSetupNew.value = "";
  passwordSetupConfirm.value = "";
  setPasswordSetupMessage(
    type === "recovery"
      ? "Create a new password, then sign in again with that password."
      : "Create a password to finish your Brokr account setup.",
  );
  passwordSetupNew.focus();
}

function closePasswordSetupGate() {
  passwordSetupGate.hidden = true;
}

async function refreshAuthUser(session = currentSession) {
  if (pendingPasswordSetupType) {
    if (session) openPasswordSetupGate(pendingPasswordSetupType);
    return;
  }

  if (!window.BrokrBackend?.isConfigured) {
    setAuthState({ email: brokerContact.email, role: "Broker", status: "Active" }, null);
    closeAuthGate();
    return;
  }

  if (!session) {
    setAuthState(null, null);
    openAuthGate();
    return;
  }

  const profile = await window.BrokrBackend.loadCurrentUser();
  if (!profile || profile.status !== "Active") {
    setAuthState(null, null);
    openAuthGate("This login does not have an active Brokr user profile yet. Ask the broker/admin to add this user.");
    return;
  }

  setAuthState(profile, session);
  closeAuthGate();
  await loadUsersFromBackend();
}

async function initializeAuth() {
  if (!window.BrokrBackend?.isConfigured) {
    await refreshAuthUser(null);
    return;
  }

  pendingPasswordSetupType = window.BrokrBackend.getAuthCallbackType?.() || "";
  currentSession = await window.BrokrBackend.getSession();
  if (pendingPasswordSetupType && currentSession) {
    setAuthState(null, currentSession);
    openPasswordSetupGate(pendingPasswordSetupType);
  } else if (pendingPasswordSetupType && !currentSession) {
    openAuthGate("This setup link has expired. Use Forgot password? to send a fresh password setup email.", "error");
    pendingPasswordSetupType = "";
  } else {
    await refreshAuthUser(currentSession);
  }
  authSubscription = await window.BrokrBackend.onAuthStateChange(async (session) => {
    currentSession = session;
    await refreshAuthUser(session);
  });
}

authToggle.addEventListener("click", (event) => {
  event.stopPropagation();
  if (!window.BrokrBackend?.isConfigured) {
    if (!isSignedIn()) setAuthState({ email: brokerContact.email, role: "Broker", status: "Active" }, null);
    openAccountMenu();
    return;
  }

  if (isSignedIn()) openAccountMenu();
  else openAuthGate();
});

accountProfileButton?.addEventListener("click", openProfileSettings);
accountLogoutButton?.addEventListener("click", logoutCurrentUser);

document.addEventListener("click", (event) => {
  if (accountMenu?.contains(event.target)) return;
  closeAccountMenu();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeAccountMenu();
});

authForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  setAuthMessage("Signing in...");

  try {
    const session = await window.BrokrBackend.signIn(authEmail.value.trim(), authPassword.value);
    await refreshAuthUser(session);
  } catch (error) {
    setAuthMessage(error.message || "Unable to sign in.", "error");
  }
});

authCreateSuperButton?.addEventListener("click", async () => {
  if (!authForm.reportValidity()) return;

  setAuthMessage("Creating broker super admin...");
  try {
    const session = await window.BrokrBackend.createBrokerSuperAdmin(authEmail.value.trim(), authPassword.value);
    if (session) {
      await refreshAuthUser(session);
    } else {
      setAuthMessage("Check your email to confirm the broker account, then sign in.", "success");
    }
  } catch (error) {
    setAuthMessage(error.message || "Unable to create broker super admin.", "error");
  }
});

authResetButton.addEventListener("click", async () => {
  if (!authEmail.reportValidity()) return;

  setAuthMessage("Sending password reset email...");
  try {
    await window.BrokrBackend.sendPasswordSetupEmail(authEmail.value.trim());
    setAuthMessage("Password reset email sent. Check the inbox for that user.", "success");
  } catch (error) {
    setAuthMessage(error.message || "Unable to send password reset email.", "error");
  }
});

passwordSetupForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const newPassword = passwordSetupNew.value;
  const confirmedPassword = passwordSetupConfirm.value;

  if (newPassword.length < 6) {
    setPasswordSetupMessage("Password must be at least 6 characters.", "error");
    passwordSetupNew.focus();
    return;
  }

  if (newPassword !== confirmedPassword) {
    setPasswordSetupMessage("Passwords do not match.", "error");
    passwordSetupConfirm.focus();
    return;
  }

  setPasswordSetupMessage("Saving password...");
  try {
    const loginEmail = currentSession?.user?.email || "";
    await window.BrokrBackend.updatePassword(newPassword);
    window.BrokrBackend.clearAuthCallbackUrl?.();
    pendingPasswordSetupType = "";
    closePasswordSetupGate();
    await window.BrokrBackend.signOut();
    openAuthGate("Password saved. Sign in with your email and new password.", "success");
    if (loginEmail) authEmail.value = loginEmail;
  } catch (error) {
    setPasswordSetupMessage(error.message || "Unable to save password.", "error");
  }
});

function setTheme(theme) {
  theme = "light";
  document.body.dataset.theme = theme;
  localStorage.setItem("brokr-theme", theme);

  themeOptions.forEach((option) => {
    const isActive = option.dataset.theme === theme;
    option.classList.toggle("active", isActive);
    option.setAttribute("aria-pressed", String(isActive));
  });
}

themeOptions.forEach((option) => {
  option.addEventListener("click", () => setTheme(option.dataset.theme));
});

setTheme("light");
restoreBrokerContact();
restoreArchiveSettings();
restoreBrokerContactFromBackend();
restoreArchiveSettingsFromBackend();

Object.values(brokerContactFields).forEach((field) => {
  field.addEventListener("input", syncBrokerContact);
});
attachPhoneFormatter(brokerContactFields.phone);

brokerContactFields.profileImage.addEventListener("change", () => {
  readImage(brokerContactFields.profileImage.files[0], (src) => {
    brokerContact.profileImageSrc = src;
    updateBrokerProfilePreview(src);
    renderAuthIdentity();
    saveBrokerContact();
    saveBrokerContactToBackend();
  });
});

brokerContactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!brokerContactForm.reportValidity()) return;
  syncBrokerContact();
});

Object.values(archiveStorageFields).forEach((field) => {
  field.addEventListener("input", syncArchiveSettings);
  field.addEventListener("change", syncArchiveSettings);
});

archiveStorageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  syncArchiveSettings();
});

function getLicenseStatus(expirationDate) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const expiration = new Date(`${expirationDate}T00:00:00`);
  const daysUntilExpiration = Math.ceil((expiration - today) / 86400000);

  if (daysUntilExpiration < 0) return { label: "Expired", type: "warning" };
  if (daysUntilExpiration <= 30) return { label: "Renewal due", type: "warning" };
  return { label: "Current", type: "current" };
}

function formatDate(dateValue) {
  if (!dateValue) return "Not set";

  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${dateValue}T00:00:00`));
}

function toDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function addDays(date, days) {
  const nextDate = new Date(date);
  nextDate.setDate(nextDate.getDate() + days);
  return nextDate;
}

function startOfWeek(date) {
  return addDays(date, -date.getDay());
}

function monthLabel(date) {
  return new Intl.DateTimeFormat("en", { month: "long", year: "numeric" }).format(date);
}

function formatPhoneNumber(value) {
  const digits = String(value || "").replace(/\D/g, "").slice(0, 10);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

function attachPhoneFormatter(field) {
  field.addEventListener("input", () => {
    field.value = formatPhoneNumber(field.value);
  });
  field.addEventListener("blur", () => {
    field.value = formatPhoneNumber(field.value);
  });
}

function parseCurrencyInput(value) {
  return Number(String(value || "").replace(/[^0-9.]/g, "")) || 0;
}

function formatCurrencyInput(value) {
  const numericValue = parseCurrencyInput(value);
  if (!numericValue) return "";
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 2,
  }).format(numericValue);
}

function attachCurrencyFormatter(field) {
  field.addEventListener("input", () => {
    field.value = field.value.replace(/[^0-9.]/g, "");
  });
  field.addEventListener("blur", () => {
    field.value = formatCurrencyInput(field.value);
  });
}

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value || 0);
}

function formatAgentAddress(agent) {
  const stateZip = [agent.state, agent.zip].filter(Boolean).join(" ");
  const cityStateZip = [agent.city, stateZip].filter(Boolean).join(", ");
  const splitAddress = [agent.street, cityStateZip].filter(Boolean).join("<br />");

  return splitAddress || agent.address || "No address on file";
}

function splitLegacyAddress(address = "") {
  const parts = address.split(",").map((part) => part.trim()).filter(Boolean);
  const stateZip = parts[2]?.split(" ").filter(Boolean) || [];

  return {
    street: parts[0] || "",
    city: parts[1] || "",
    state: stateZip[0] || "",
    zip: stateZip.slice(1).join(" "),
  };
}

function getAgentInitials(agent) {
  const first = agent?.firstName?.trim()?.[0] || "";
  const last = agent?.lastName?.trim()?.[0] || "";
  return `${first}${last}`.toUpperCase() || "A";
}

function renderAgentAvatar(agent, className = "agent-avatar") {
  if (agent.profileImageSrc) {
    return `<img class="${className}" src="${agent.profileImageSrc}" alt="${agent.firstName} ${agent.lastName}" />`;
  }

  return `<span class="${className}" aria-hidden="true">${getAgentInitials(agent)}</span>`;
}

function getUserInitials(user) {
  const first = user?.firstName?.trim()?.[0] || "";
  const last = user?.lastName?.trim()?.[0] || "";
  if (first || last) return `${first}${last}`.toUpperCase();

  const emailName = user?.email?.split("@")[0] || "";
  return emailName
    .split(/[.\s_-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase() || "U";
}

function renderUserAvatar(user) {
  if (user.profileImageSrc) {
    return `<img class="agent-avatar" src="${user.profileImageSrc}" alt="${getUserDisplayName(user)}" />`;
  }

  return `<span class="agent-avatar" aria-hidden="true">${getUserInitials(user)}</span>`;
}

function getUserDisplayName(user) {
  const fullName = [user?.firstName, user?.lastName].filter(Boolean).join(" ").trim();
  return fullName || toDisplayNameFromEmail(user?.email || "");
}

function getUserNameCache() {
  return JSON.parse(localStorage.getItem("brokr-user-name-cache") || "{}");
}

function cacheUserDisplayFields(user) {
  if (!user?.email) return;

  const cache = getUserNameCache();
  cache[user.email.toLowerCase()] = {
    firstName: user.firstName || "",
    lastName: user.lastName || "",
    profileImageSrc: user.profileImageSrc || "",
  };
  localStorage.setItem("brokr-user-name-cache", JSON.stringify(cache));
}

function applyUserDisplayFallback(user, fallback = {}) {
  const cached = user?.email ? getUserNameCache()[user.email.toLowerCase()] || {} : {};

  return {
    ...fallback,
    ...user,
    firstName: user?.firstName || fallback.firstName || cached.firstName || "",
    lastName: user?.lastName || fallback.lastName || cached.lastName || "",
    profileImageSrc: user?.profileImageSrc || fallback.profileImageSrc || cached.profileImageSrc || "",
  };
}

function getBrokerInitials(contact = brokerContact) {
  const nameParts = (contact.name || "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2);
  const initials = nameParts.map((part) => part[0]).join("").toUpperCase();
  return initials || "B";
}

function isUnderContractStatus(status) {
  return ["Under Contract", "Closing", "Closed", "Review Needed"].includes(status);
}

function getEstimatedGrossCommission(transaction) {
  if (transaction.commissionType === "flat") return Number(transaction.commissionFlatFee) || 0;

  const commissionRate = Number.isFinite(Number(transaction.commissionRate)) ? Number(transaction.commissionRate) : 3;
  return (Number(transaction.contractPrice) || 0) * (commissionRate / 100);
}

function getAgentCommission(transaction) {
  const agent = agents.find((item) => item.id === Number(transaction.agentId));
  const agentSplit = getCommissionSplit(agent);
  return getEstimatedGrossCommission(transaction) * (agentSplit / 100);
}

function getBrokerageCommission(transaction) {
  return getEstimatedGrossCommission(transaction) - getAgentCommission(transaction);
}

function updateAgentProfilePreview(src = "") {
  const previewAgent = {
    firstName: agentFields.firstName.value,
    lastName: agentFields.lastName.value,
    profileImageSrc: src,
  };

  agentProfilePreview.innerHTML = src ? `<img src="${src}" alt="" />` : getAgentInitials(previewAgent);
  agentProfilePreview.classList.toggle("has-image", Boolean(src));
}

function updateAgentFileTile(tile, status, name, fileName = "", emptyLabel = "Needed") {
  tile.classList.toggle("uploaded", Boolean(fileName));
  status.textContent = fileName ? "Uploaded" : emptyLabel;
  name.textContent = fileName || "No file uploaded";
}

function updateAgentFileVault(agent = {}) {
  updateAgentFileTile(agentLicenseTile, agentLicenseStatus, agentLicenseFileName, agent.licenseFileName || "");
  updateAgentFileTile(agentContractTile, agentContractStatus, agentContractFileName, agent.contractFileName || "");
  updateAgentFileTile(agentOtherTile, agentOtherStatus, agentOtherFileName, agent.otherFileName || "", "Optional");
}

function updateUserProfilePreview(src = "") {
  const previewUser = {
    firstName: userFields.firstName.value,
    lastName: userFields.lastName.value,
    email: userFields.email.value,
    profileImageSrc: src,
  };

  userProfilePreview.innerHTML = src ? `<img src="${src}" alt="" />` : getUserInitials(previewUser);
  userProfilePreview.classList.toggle("has-image", Boolean(src));
}

function updateBrokerProfilePreview(src = brokerContact.profileImageSrc || "") {
  brokerProfilePreview.innerHTML = src ? `<img src="${src}" alt="" />` : getBrokerInitials();
  brokerProfilePreview.classList.toggle("has-image", Boolean(src));
}

function renderAgents() {
  const activeAgents = agents.filter((agent) => !agent.archived);
  const archivedAgents = agents.filter((agent) => agent.archived);
  const alertAgents = activeAgents.filter((agent) => getLicenseStatus(agent.licenseExpiration).type === "warning");
  const visibleAgents = agentFilter === "active" ? activeAgents : archivedAgents;

  activeAgentCount.textContent = activeAgents.length;
  archivedAgentCount.textContent = archivedAgents.length;
  licenseAlertCount.textContent = alertAgents.length;
  agentTableBody.innerHTML = "";
  agentEmptyState.classList.toggle("visible", visibleAgents.length === 0);

  visibleAgents.forEach((agent) => {
    const licenseStatus = getLicenseStatus(agent.licenseExpiration);
    const row = document.createElement("tr");
    row.className = "clickable-row";
    row.dataset.agentEdit = agent.id;
    row.tabIndex = 0;
    row.setAttribute("role", "button");
    row.setAttribute("aria-label", `Edit agent ${agent.firstName} ${agent.lastName}`);
    row.innerHTML = `
      <td>
        <div class="agent-identity">
          ${renderAgentAvatar(agent)}
          <div class="agent-name">
            <strong>${agent.firstName} ${agent.lastName}</strong>
            <span>${agent.archived ? "Archived agent" : "Office agent"}</span>
          </div>
        </div>
      </td>
      <td>
        <div class="agent-contact">${agent.email}<br />${agent.phone || "No phone on file"}</div>
      </td>
      <td><div class="agent-contact">${formatAgentAddress(agent)}</div></td>
      <td>
        <div>${agent.licenseFileName || "No license uploaded"}</div>
        <div class="license-detail">Expires ${formatDate(agent.licenseExpiration)}</div>
        <div class="license-detail">${agent.contractFileName ? `Contract: ${agent.contractFileName}` : "No agent/broker contract"}</div>
        <div class="license-detail">${agent.otherFileName ? `Other: ${agent.otherFileName}` : "No other files"}</div>
      </td>
      <td><span class="status-pill ${agent.archived ? "archived" : licenseStatus.type}">${agent.archived ? "Archived" : licenseStatus.label}</span></td>
      <td>
        <div class="table-actions">
          <button class="text-action" type="button" data-agent-edit="${agent.id}">Edit</button>
          <button class="text-action ${agent.archived ? "" : "archive"}" type="button" data-agent-archive="${agent.id}">
            ${agent.archived ? "Restore" : "Archive"}
          </button>
          <button class="text-action danger-action" type="button" data-agent-delete="${agent.id}">Delete</button>
        </div>
      </td>
    `;
    agentTableBody.appendChild(row);
  });
}

function getAgentName(agentId) {
  const agent = agents.find((item) => item.id === Number(agentId));
  return agent ? `${agent.firstName} ${agent.lastName}` : "Unassigned";
}

function getUserAgentName(agentId) {
  return agentId ? getAgentName(agentId) : "No linked agent";
}

function getAgentCalendarColor(agentId) {
  const agent = agents.find((item) => item.id === Number(agentId));
  return agent?.calendarColor || "#837a6d";
}

function renderAgentOptions() {
  const activeAgents = agents.filter((agent) => !agent.archived);
  const currentAgent = getCurrentUserAgent();
  const calendarAgents = isAgentUser() && currentAgent ? [currentAgent] : activeAgents;
  transactionFields.agentId.innerHTML = activeAgents
    .map((agent) => `<option value="${agent.id}">${agent.firstName} ${agent.lastName}</option>`)
    .join("");
  calendarAgentFilter.innerHTML = isAgentUser()
    ? calendarAgents.map((agent) => `<option value="${agent.id}">${agent.firstName} ${agent.lastName}</option>`).join("")
    : [
        '<option value="all">All agents</option>',
        ...activeAgents.map((agent) => `<option value="${agent.id}">${agent.firstName} ${agent.lastName}</option>`),
      ].join("");
  if (isAgentUser() && currentAgent) calendarAgentFilter.value = String(currentAgent.id);
  userFields.agentId.innerHTML = [
    '<option value="">No linked agent</option>',
    ...activeAgents.map((agent) => `<option value="${agent.id}">${agent.firstName} ${agent.lastName}</option>`),
  ].join("");
}

function getRequiredTransactionDocs(side, status) {
  return [
    ...transactionDocumentGroups[side],
    ...(isUnderContractStatus(status) ? transactionDocumentGroups.contract : []),
  ];
}

function getTransactionDocuments(transaction) {
  if (transaction?.documents) {
    return Object.fromEntries(
      Object.entries(transaction.documents).map(([docName, record]) => [
        docName,
        typeof record === "string" ? { fileName: record } : record,
      ]),
    );
  }

  return (transaction?.fileNames || []).reduce((documents, fileName) => {
    documents[fileName] = { fileName };
    return documents;
  }, {});
}

function getDocumentFileName(record) {
  if (!record) return "";
  return typeof record === "string" ? record : record.fileName || "";
}

function getDocumentFileNames(documents) {
  return Object.values(documents).map(getDocumentFileName).filter(Boolean);
}

function createLocalFileRecord(file) {
  return {
    bucket: "",
    storagePath: "",
    fileName: file?.name || "",
    contentType: file?.type || "",
    uploadedAt: new Date().toISOString(),
  };
}

async function uploadTransactionFileRecord({ transactionId, documentName, file }) {
  if (!file) return null;

  if (!window.BrokrBackend?.isConfigured || !window.BrokrBackend.uploadTransactionFile) {
    return createLocalFileRecord(file);
  }

  return window.BrokrBackend.uploadTransactionFile({ transactionId, documentName, file });
}

async function openTransactionFile(record) {
  const fileName = getDocumentFileName(record);
  if (!fileName) return;

  if (!record?.storagePath || !window.BrokrBackend?.createTransactionFileUrl) {
    window.alert(`${fileName} has not been uploaded to cloud storage yet. Replace the file and save the transaction to make it viewable.`);
    return;
  }

  const viewer = window.open("", "_blank", "noopener");
  try {
    const url = await window.BrokrBackend.createTransactionFileUrl(record);
    if (viewer) {
      viewer.location.href = url;
    } else {
      window.location.href = url;
    }
  } catch (error) {
    if (viewer) viewer.close();
    window.alert(error.message || "Unable to open this file.");
  }
}

function getTransactionFileSummary(transaction) {
  const requiredDocs = getRequiredTransactionDocs(transaction.side, transaction.status);
  const documents = getTransactionDocuments(transaction);
  const uploadedCount = requiredDocs.filter((docName) => getDocumentFileName(documents[docName])).length;

  return {
    requiredDocs,
    uploadedCount,
    missingCount: requiredDocs.length - uploadedCount,
  };
}

function getActiveOfficeListings() {
  return getVisibleTransactions({ includeCancelled: false }).filter(
    (transaction) => transaction.side === "seller" && transaction.status === "New",
  );
}

function getListingTitle(transaction) {
  if (transaction.listingTitle) return transaction.listingTitle;
  if (transaction.propertyAddress) return transaction.propertyAddress.split(",")[0];
  return `${transaction.clientName} Listing`;
}

function renderOfficeListings() {
  if (!officeListingsGrid) return;
  const listings = getActiveOfficeListings();
  const visibleListings = showAllOfficeListings ? listings : listings.slice(0, officeListingsPreviewLimit);

  if (!listings.length) {
    officeListingsGrid.innerHTML = '<p class="empty-panel-copy">No active office listings yet.</p>';
    if (officeListingsToggle) officeListingsToggle.hidden = true;
    return;
  }

  if (officeListingsToggle) {
    officeListingsToggle.hidden = listings.length <= officeListingsPreviewLimit;
    officeListingsToggle.textContent = showAllOfficeListings ? "Show Less" : `Show All (${listings.length})`;
  }

  officeListingsGrid.innerHTML = visibleListings
    .map((listing) => {
      const title = getListingTitle(listing);
      const photo = listing.listingPhotoSrc
        ? `<img src="${listing.listingPhotoSrc}" alt="${title}" />`
        : `<div class="listing-photo-placeholder"><span>${title.slice(0, 1)}</span></div>`;

      return `
        <article class="office-listing-card" role="button" tabindex="0" data-listing-id="${listing.id}" aria-label="Open listing ${title}">
          <div class="office-listing-photo">${photo}</div>
          <div class="office-listing-copy">
            <h4>${title}</h4>
            <p>${listing.propertyAddress || "No property address"}</p>
          </div>
          <div class="office-listing-meta">
            <span><i aria-hidden="true"></i>Active</span>
            <strong>${formatCurrency(listing.listPrice || 0)}</strong>
          </div>
        </article>
      `;
    })
    .join("");
}

function getTransactionCalendarEvents(sourceTransactions) {
  return sourceTransactions.flatMap((transaction) => {
    const events = [
      {
        transaction,
        date: transaction.contractDate,
        label: "Contract date",
      },
    ];

    if (isUnderContractStatus(transaction.status)) {
      Object.entries(transaction.deadlines || {}).forEach(([key, date]) => {
        if (!date) return;
        events.push({
          transaction,
          date,
          label: transactionDeadlineLabels[key],
        });
      });
    }

    return events.filter((event) => event.date);
  });
}

function renderTransactions() {
  const visibleTransactions = getVisibleTransactions({ includeCancelled: true });
  transactionTableBody.innerHTML = "";
  addTransactionButton.hidden = isAgentUser();
  transactionEmptyState.classList.toggle("visible", visibleTransactions.length === 0);

  visibleTransactions.forEach((transaction) => {
    const sideLabel = transaction.side === "buyer" ? "Buyer rep" : "Seller rep";
    const fileSummary = getTransactionFileSummary(transaction);
    const row = document.createElement("tr");
    row.className = "clickable-row";
    row.dataset.transactionEdit = transaction.id;
    row.tabIndex = 0;
    row.setAttribute("role", "button");
    row.setAttribute("aria-label", `Open transaction details for ${transaction.clientName}`);
    row.innerHTML = `
      <td>
        <div class="agent-name">
          <strong>${transaction.clientName}</strong>
          <span>${transaction.side === "buyer" ? "Buyer" : "Seller"}</span>
        </div>
      </td>
      <td>${getAgentName(transaction.agentId)}</td>
      <td><span class="status-pill">${sideLabel}</span></td>
      <td>
        <div class="agent-contact">${transaction.clientEmail || "No email on file"}<br />${transaction.clientPhone || "No phone on file"}</div>
      </td>
      <td>${transaction.propertyAddress || "No property address yet"}</td>
      <td>
        <div>${fileSummary.uploadedCount}/${fileSummary.requiredDocs.length} files complete</div>
        <div class="license-detail">Contract ${formatDate(transaction.contractDate)} | ${fileSummary.missingCount ? `${fileSummary.missingCount} missing` : "Complete"}</div>
      </td>
      <td><span class="status-pill ${transaction.status === "Review Needed" ? "warning" : ""}">${transaction.status}</span></td>
    `;
    transactionTableBody.appendChild(row);
  });
}

function renderOverviewMetrics() {
  const currentYear = new Date().getFullYear();
  const visibleTransactions = getVisibleTransactions({ includeCancelled: true });
  const activeListings = getActiveOfficeListings().length;
  const pendingDeals = visibleTransactions.filter((transaction) => isUnderContractStatus(transaction.status)).length;
  const ytdTransactions = visibleTransactions.filter(
    (transaction) => transaction.status !== "Cancelled" && new Date(transaction.contractDate).getFullYear() === currentYear,
  ).length;
  const salesVolume = visibleTransactions
    .filter((transaction) => transaction.status !== "Cancelled" && isUnderContractStatus(transaction.status))
    .reduce((total, transaction) => total + (Number(transaction.contractPrice) || 0), 0);
  const agentCommission = visibleTransactions
    .filter((transaction) => transaction.status !== "Cancelled" && isUnderContractStatus(transaction.status))
    .reduce((total, transaction) => total + getAgentCommission(transaction), 0);
  const brokerageCommission = visibleTransactions
    .filter((transaction) => transaction.status !== "Cancelled" && isUnderContractStatus(transaction.status))
    .reduce((total, transaction) => total + getBrokerageCommission(transaction), 0);

  overviewMetrics.activeListings.textContent = activeListings;
  overviewMetrics.pendingDeals.textContent = pendingDeals;
  overviewMetrics.salesVolume.textContent = formatCurrency(salesVolume);
  overviewMetrics.agentCommission.textContent = formatCurrency(agentCommission);
  overviewMetrics.brokerageCommission.textContent = formatCurrency(brokerageCommission);
  overviewMetrics.ytdTransactions.textContent = ytdTransactions;
}

function renderOverviewSchedule() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const rangeStart = addDays(today, overviewScheduleStartOffset);
  const rangeEnd = addDays(rangeStart, overviewScheduleWindowDays - 1);

  overviewScheduleRange.textContent = `${formatDate(toDateKey(rangeStart))} - ${formatDate(toDateKey(rangeEnd))}`;

  overviewScheduleGrid.innerHTML = Array.from({ length: overviewScheduleWindowDays }, (_, index) => {
    const day = addDays(rangeStart, index);
    const dateKey = toDateKey(day);
    const isToday = dateKey === toDateKey(today);
    const dayEvents = getTransactionCalendarEvents(
      getVisibleTransactions(),
    ).filter((event) => event.date === dateKey);

    return `
      <article class="overview-day-tile ${isToday ? "today" : ""}">
        <div class="overview-day-heading">
          <span>${new Intl.DateTimeFormat("en", { weekday: "short" }).format(day)}</span>
          <strong>${new Intl.DateTimeFormat("en", { month: "short", day: "numeric" }).format(day)}</strong>
        </div>
        <div class="overview-day-events">
          ${
            dayEvents.length
              ? dayEvents
                  .map(
                    (event) => `
                      <button class="overview-schedule-event" type="button" data-transaction-edit="${event.transaction.id}" style="--agent-color: ${getAgentCalendarColor(event.transaction.agentId)}">
                        <strong>${event.transaction.clientName}</strong>
                        <span>${getAgentName(event.transaction.agentId)} | ${event.label}</span>
                      </button>
                    `,
                  )
                  .join("")
              : '<p class="overview-empty-day">No contract dates</p>'
          }
        </div>
      </article>
    `;
  }).join("");
}

function getVisibleCompanyTasks() {
  if (!isAgentUser()) return companyTasks;

  const agent = getCurrentUserAgent();
  const agentName = agent ? `${agent.firstName} ${agent.lastName}`.toLowerCase() : "";
  const userEmail = currentUser?.email?.toLowerCase() || "";

  return companyTasks.filter((task) => {
    const owner = task.owner.toLowerCase();
    return owner === agentName || owner === userEmail;
  });
}

function renderCompanyTasks() {
  const visibleTasks = getVisibleCompanyTasks();
  const openTasks = visibleTasks.filter((task) => !task.completed);
  const completedTasks = visibleTasks.filter((task) => task.completed);
  const taskSection = (label, tasks) => `
    <div class="company-task-section">
      <p class="task-section-label">${label}</p>
      ${
        tasks.length
          ? tasks
              .map(
                (task) => `
                  <label class="company-task-row ${task.completed ? "completed" : ""}">
                    <input type="checkbox" data-company-task="${task.id}" ${task.completed ? "checked" : ""} />
                    <span class="task-checkbox" aria-hidden="true"></span>
                    <span class="task-copy">
                      <strong>${task.title}</strong>
                      <span>${task.owner}${task.deadline ? ` | Due ${formatDate(task.deadline)}` : ""}</span>
                    </span>
                    <span class="task-status ${task.status === "High" ? "high" : ""}">${task.status}</span>
                  </label>
                `,
              )
              .join("")
          : '<p class="task-empty">No tasks in this section</p>'
      }
    </div>
  `;

  companyTaskOpenCount.textContent = `${openTasks.length} open`;
  addCompanyTaskButton.hidden = isAgentUser();
  companyTaskList.innerHTML = `${taskSection("Open company tasks", openTasks)}${taskSection("Completed", completedTasks)}`;
}

function openCompanyTaskModal() {
  companyTaskForm.reset();
  companyTaskFields.owner.value = "Admin";
  companyTaskModal.hidden = false;
  companyTaskFields.title.focus();
}

function closeCompanyTaskForm() {
  companyTaskModal.hidden = true;
}

function saveBrokerContact() {
  localStorage.setItem("brokr-broker-contact", JSON.stringify(brokerContact));
}

function saveBrokerContactToBackend() {
  window.BrokrBackend?.saveBrokerContact(brokerContact);
}

function syncBrokerContact() {
  if (!brokerContactForm.checkValidity()) return;

  brokerContactFields.phone.value = formatPhoneNumber(brokerContactFields.phone.value);
  brokerContact = {
    name: brokerContactFields.name.value.trim(),
    email: brokerContactFields.email.value.trim(),
    phone: brokerContactFields.phone.value.trim(),
    profileImageSrc: brokerContact.profileImageSrc || "",
  };
  updateBrokerProfilePreview();
  renderAuthIdentity();
  saveBrokerContact();
  saveBrokerContactToBackend();
  renderInbox();
}

function restoreBrokerContact() {
  const savedContact = JSON.parse(localStorage.getItem("brokr-broker-contact") || "null");
  if (savedContact?.name && savedContact?.email && savedContact?.phone) {
    brokerContact = { ...savedContact, phone: formatPhoneNumber(savedContact.phone) };
  }

  brokerContactFields.name.value = brokerContact.name;
  brokerContactFields.email.value = brokerContact.email;
  brokerContactFields.phone.value = brokerContact.phone;
  brokerContactFields.profileImage.value = "";
  updateBrokerProfilePreview();
  renderAuthIdentity();
}

async function restoreBrokerContactFromBackend() {
  const savedContact = await window.BrokrBackend?.loadBrokerContact();
  if (!savedContact) return;

  brokerContact = {
    name: savedContact.broker_name || brokerContact.name,
    email: savedContact.broker_email || brokerContact.email,
    phone: formatPhoneNumber(savedContact.broker_phone || brokerContact.phone),
    profileImageSrc: savedContact.profile_image_src || brokerContact.profileImageSrc || "",
  };

  brokerContactFields.name.value = brokerContact.name;
  brokerContactFields.email.value = brokerContact.email;
  brokerContactFields.phone.value = brokerContact.phone;
  brokerContactFields.profileImage.value = "";
  updateBrokerProfilePreview();
  renderAuthIdentity();
  saveBrokerContact();
  renderInbox();
}

function getBrokerFirstName() {
  return brokerContact.name.split(" ")[0] || "Broker";
}

function saveFileUploadNotifications() {
  localStorage.setItem("brokr-file-upload-notifications", JSON.stringify(fileUploadNotifications));
}

function saveTransactions() {
  localStorage.setItem("brokr-transactions", JSON.stringify(transactions));
}

function saveInboxItemStates() {
  localStorage.setItem("brokr-inbox-item-states", JSON.stringify(inboxItemStates));
}

function isInboxItemActive(item) {
  return !["dismissed", "approved", "archived"].includes(inboxItemStates[item.id]);
}

function saveArchiveSettings() {
  localStorage.setItem("brokr-archive-settings", JSON.stringify(archiveSettings));
}

function saveArchiveSettingsToBackend() {
  window.BrokrBackend?.saveArchiveSettings(archiveSettings);
}

function restoreArchiveSettings() {
  const savedSettings = JSON.parse(localStorage.getItem("brokr-archive-settings") || "null");
  if (savedSettings) archiveSettings = { ...archiveSettings, ...savedSettings };

  archiveStorageFields.folderUrl.value = archiveSettings.folderUrl;
  archiveStorageFields.folderName.value = archiveSettings.folderName;
  archiveStorageFields.packageFormat.value = archiveSettings.packageFormat;
}

function syncArchiveSettings() {
  archiveSettings = {
    folderUrl: archiveStorageFields.folderUrl.value.trim(),
    folderName: archiveStorageFields.folderName.value.trim(),
    packageFormat: archiveStorageFields.packageFormat.value,
  };
  saveArchiveSettings();
  saveArchiveSettingsToBackend();
  renderArchiveQueue();
}

async function restoreArchiveSettingsFromBackend() {
  const savedSettings = await window.BrokrBackend?.loadArchiveSettings();
  if (!savedSettings) return;

  archiveSettings = {
    folderUrl: savedSettings.google_drive_folder_url || "",
    folderName: savedSettings.archive_folder_name || archiveSettings.folderName,
    packageFormat: savedSettings.package_format || archiveSettings.packageFormat,
  };

  archiveStorageFields.folderUrl.value = archiveSettings.folderUrl;
  archiveStorageFields.folderName.value = archiveSettings.folderName;
  archiveStorageFields.packageFormat.value = archiveSettings.packageFormat;
  saveArchiveSettings();
  renderArchiveQueue();
}

function getClosedTransactionsForArchive() {
  return transactions.filter((transaction) => transaction.status === "Closed" && !transaction.archivedAt);
}

function renderArchiveQueue() {
  const closedTransactions = getClosedTransactionsForArchive();
  archiveQueueCount.textContent = `${closedTransactions.length} ready`;

  if (!closedTransactions.length) {
    archiveQueueList.innerHTML = '<p class="archive-empty">No closed transaction files are waiting for archive approval.</p>';
    return;
  }

  archiveQueueList.innerHTML = closedTransactions
    .map((transaction) => {
      const fileSummary = getTransactionFileSummary(transaction);
      const destination = archiveSettings.folderUrl ? archiveSettings.folderName : "Add a Google Drive folder link first";

      return `
        <article class="archive-queue-row">
          <div>
            <h5>${transaction.clientName}</h5>
            <p>${getAgentName(transaction.agentId)} | ${fileSummary.uploadedCount}/${fileSummary.requiredDocs.length} required files | Destination: ${destination}</p>
          </div>
          <button class="secondary-action" type="button" data-archive-transaction="${transaction.id}" ${archiveSettings.folderUrl ? "" : "disabled"}>
            Archive Package
          </button>
        </article>
      `;
    })
    .join("");
}

function approveArchivePackage(transactionId) {
  transactions = transactions.map((transaction) =>
    transaction.id === transactionId
      ? {
          ...transaction,
          archivedAt: toDateKey(new Date()),
          archiveDestination: archiveSettings.folderUrl,
          archivePackageFormat: archiveSettings.packageFormat,
        }
      : transaction,
  );

  saveTransactions();
  renderArchiveQueue();
  renderTransactions();
  renderInbox();
}

function buildDeadlineEmailItems() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayKey = toDateKey(today);
  const cutoffKey = toDateKey(addDays(today, 7));
  const deadlineLabels = new Set(Object.values(transactionDeadlineLabels));

  return getTransactionCalendarEvents(getVisibleTransactions())
    .filter((event) => deadlineLabels.has(event.label) && event.date >= todayKey && event.date <= cutoffKey)
    .map((event) => {
      const agent = agents.find((candidate) => candidate.id === event.transaction.agentId);
      if (!agent?.email) return null;

      return {
        id: `deadline-${event.transaction.id}-${event.label}-${event.date}`,
        type: "Deadline",
        title: `${event.label} approaching`,
        detail: `${brokerContact.name} should review ${event.transaction.clientName} with ${agent.firstName} ${agent.lastName}. Deadline is ${formatDate(event.date)}.`,
        status: "Broker alert",
        receivedDate: todayKey,
        actionLabel: "Review Transaction",
        actionType: "transaction",
        transactionId: event.transaction.id,
      };
    })
    .filter(Boolean);
}

function createFileUploadNotifications(transaction, uploads) {
  if (!uploads.length) return;

  const agent = agents.find((candidate) => candidate.id === transaction.agentId);
  const todayKey = toDateKey(new Date());
  const newNotifications = uploads.map((upload, index) => ({
    id: Date.now() + index,
    transactionId: transaction.id,
    clientName: transaction.clientName,
    propertyAddress: transaction.propertyAddress,
    agentName: agent ? `${agent.firstName} ${agent.lastName}` : "Assigned agent",
    documentName: upload.documentName,
    fileName: upload.fileName,
    date: todayKey,
  }));

  fileUploadNotifications = [...newNotifications, ...fileUploadNotifications].slice(0, 25);
  saveFileUploadNotifications();
}

function buildInboxItems() {
  const todayKey = toDateKey(new Date());
  const currentAgent = getCurrentUserAgent();
  const activeAgents = agents.filter(
    (agent) => !agent.archived && (!isAgentUser() || String(agent.id) === String(currentAgent?.id)),
  );
  const licenseItems = activeAgents
    .filter((agent) => getLicenseStatus(agent.licenseExpiration).type === "warning")
    .map((agent) => ({
      id: `license-${agent.id}`,
      type: "License",
      title: `${agent.firstName} ${agent.lastName} license renewal`,
      detail: `License expires ${formatDate(agent.licenseExpiration)}. Broker follow-up is needed before renewal.`,
      status: getLicenseStatus(agent.licenseExpiration).label,
      receivedDate: todayKey,
      actionLabel: canAccessAdmin() ? "Open Agent File" : "",
      actionType: canAccessAdmin() ? "agent" : "",
      agentId: agent.id,
    }));

  const reviewItems = getVisibleTransactions({ includeCancelled: true })
    .filter((transaction) => transaction.status === "Review Needed")
    .map((transaction) => ({
      id: `review-${transaction.id}`,
      type: "Review",
      title: `${transaction.clientName} transaction needs review`,
      detail: `${getAgentName(transaction.agentId)} has a ${transaction.side === "buyer" ? "buyer" : "seller"} file requiring brokerage attention.`,
      status: transaction.status,
      receivedDate: todayKey,
      actionLabel: "Review Transaction",
      actionType: "transaction",
      transactionId: transaction.id,
    }));

  const fileItems = getVisibleTransactions({ includeCancelled: true })
    .map((transaction) => ({ transaction, summary: getTransactionFileSummary(transaction) }))
    .filter(({ transaction, summary }) => transaction.status !== "Cancelled" && summary.missingCount > 0)
    .map(({ transaction, summary }) => ({
      id: `files-${transaction.id}`,
      type: "Files",
      title: `${transaction.clientName} file vault incomplete`,
      detail: `${summary.uploadedCount}/${summary.requiredDocs.length} required files uploaded for contract date ${formatDate(transaction.contractDate)}.`,
      status: "Files due",
      receivedDate: todayKey,
      actionLabel: "Open File Vault",
      actionType: "transaction",
      transactionId: transaction.id,
    }));

  const uploadItems = isAgentUser()
    ? []
    : fileUploadNotifications.map((notification) => ({
        id: `upload-${notification.id}`,
        type: "Upload",
        title: `${notification.documentName} uploaded`,
        detail: `${notification.agentName} uploaded ${notification.fileName} for ${notification.clientName}. Broker review is needed.`,
        status: "Review",
        receivedDate: notification.date || todayKey,
        actionLabel: "Review Transaction",
        actionType: "transaction",
        transactionId: notification.transactionId,
      }));

  return [...licenseItems, ...buildDeadlineEmailItems(), ...uploadItems, ...reviewItems, ...fileItems].filter(isInboxItemActive);
}

function renderInbox() {
  const items = buildInboxItems();
  inboxCount.textContent = items.length;
  inboxList.innerHTML = "";
  inboxEmptyState.classList.toggle("visible", items.length === 0);

  items.forEach((item) => {
    const row = document.createElement("article");
    row.className = "inbox-item";
    row.dataset.inboxItem = item.id;
    row.tabIndex = 0;
    row.innerHTML = `
      <div>
        <h4>${item.title}</h4>
        <p>${item.detail}</p>
      </div>
      <div class="inbox-meta">
        <span class="inbox-date">Received ${formatDate(item.receivedDate || toDateKey(new Date()))}</span>
        <span class="status-pill warning">${item.status}</span>
        <span>${item.type}</span>
        ${
          item.actionType
            ? `<button class="inbox-action" type="button" data-inbox-action="${item.id}" aria-label="${item.actionLabel} for ${item.title}">${item.actionLabel}</button>`
            : ""
        }
      </div>
    `;
    inboxList.appendChild(row);
  });
}

function openInbox() {
  activatePage("inbox");
}

function closeInboxDetail() {
  inboxDetailModal.hidden = true;
  activeInboxItemId = null;
}

function openInboxDetail(itemId) {
  const item = buildInboxItems().find((candidate) => candidate.id === itemId);
  if (!item) return;

  activeInboxItemId = item.id;
  inboxDetailTitle.textContent = item.title;
  inboxDetailType.textContent = item.type;
  inboxDetailStatus.textContent = item.status;
  inboxDetailDate.textContent = `Received ${formatDate(item.receivedDate || toDateKey(new Date()))}`;
  inboxDetailCopy.textContent = item.detail;
  inboxDetailAction.hidden = !item.actionType;
  inboxDetailAction.textContent = item.actionLabel || "Review Item";
  inboxDetailAction.dataset.inboxAction = item.id;
  inboxDetailModal.hidden = false;
  approveInboxItemButton.focus();
}

function runInboxAction(itemId) {
  const item = buildInboxItems().find((candidate) => candidate.id === itemId);
  if (!item?.actionType) return;

  closeInboxDetail();

  if (item.actionType === "transaction" && item.transactionId) {
    openTransactionModal(Number(item.transactionId));
    return;
  }

  if (item.actionType === "agent" && item.agentId && canAccessAdmin()) {
    openAgentModal(Number(item.agentId));
  }
}

function updateInboxItemState(state) {
  if (!activeInboxItemId) return;

  inboxItemStates = {
    ...inboxItemStates,
    [activeInboxItemId]: state,
  };
  saveInboxItemStates();
  closeInboxDetail();
  renderInbox();
}

function renderUsers() {
  userTableBody.innerHTML = "";
  userEmptyState.classList.toggle("visible", users.length === 0);

  users.forEach((user) => {
    const row = document.createElement("tr");
    row.className = "clickable-row";
    row.dataset.userEdit = user.id;
    row.tabIndex = 0;
    row.innerHTML = `
      <td>
        <div class="agent-identity">
          ${renderUserAvatar(user)}
          <div class="agent-name">
            <strong>${getUserDisplayName(user)}</strong>
            <span>${user.email}</span>
          </div>
        </div>
      </td>
      <td>${getUserAgentName(user.agentId)}</td>
      <td><span class="status-pill">${user.role}</span></td>
      <td>
        <div>${user.canUpload ? "Can upload files" : "No upload access"}</div>
        <div class="license-detail">${user.permissionScope || "Own transactions only"}</div>
      </td>
      <td><span class="status-pill ${user.status === "Suspended" ? "warning" : ""}">${user.status}</span></td>
      <td>
        <div class="table-actions">
          <button class="text-action" type="button" data-user-edit="${user.id}">Edit</button>
          <button class="text-action danger-action" type="button" data-user-delete="${user.id}">Delete</button>
        </div>
      </td>
    `;
    userTableBody.appendChild(row);
  });
}

async function loadUsersFromBackend() {
  if (!window.BrokrBackend?.isConfigured || !isSignedIn() || !canAccessAdmin()) return;

  const savedUsers = await window.BrokrBackend.loadUsers();
  if (!savedUsers.length) return;

  users = savedUsers.map((savedUser) => {
    const existingUser = users.find((user) => user.email?.toLowerCase() === savedUser.email?.toLowerCase());
    return applyUserDisplayFallback(savedUser, existingUser);
  });
  renderUsers();
}

async function saveUserToBackend(user) {
  cacheUserDisplayFields(user);
  if (!window.BrokrBackend?.isConfigured) return user;

  const savedUser = await window.BrokrBackend.saveUserProfile(user);
  const mergedUser = applyUserDisplayFallback(savedUser || user, user);
  cacheUserDisplayFields(mergedUser);
  return mergedUser;
}

async function inviteSavedUser(user) {
  if (!window.BrokrBackend?.isConfigured || !window.BrokrBackend.inviteUser) {
    window.alert("User saved. Invite email is available after Supabase is configured.");
    return;
  }

  const inviteResult = await window.BrokrBackend.inviteUser(user);
  window.alert(inviteResult.message || "Invite sent. The user can set their password from email.");
}

async function deleteUserFromBackend(user) {
  if (!window.BrokrBackend?.isConfigured || !window.BrokrBackend.deleteUserProfile) return;
  await window.BrokrBackend.deleteUserProfile(user);
}

function getCommissionSplit(agent) {
  return Number.isFinite(Number(agent?.commissionSplit)) ? Number(agent.commissionSplit) : 70;
}

function getAgentProduction(agentId) {
  const agentTransactions = transactions.filter(
    (transaction) =>
      Number(transaction.agentId) === Number(agentId) &&
      transaction.status !== "Cancelled" &&
      isUnderContractStatus(transaction.status),
  );

  return {
    volume: agentTransactions.reduce((total, transaction) => total + (Number(transaction.contractPrice) || 0), 0),
    commission: agentTransactions.reduce((total, transaction) => total + getAgentCommission(transaction), 0),
  };
}

function renderCommissionRules() {
  const activeAgents = agents.filter((agent) => !agent.archived);

  commissionList.innerHTML = activeAgents
    .map((agent) => {
      const agentSplit = getCommissionSplit(agent);
      const brokerageSplit = 100 - agentSplit;
      const production = getAgentProduction(agent.id);

      return `
        <button class="commission-row" type="button" data-commission-agent="${agent.id}">
          <div class="agent-identity">
            ${renderAgentAvatar(agent)}
            <div class="agent-name">
              <strong>${agent.firstName} ${agent.lastName}</strong>
              <span>${agent.email}</span>
            </div>
          </div>
          <div class="commission-split">
            <span>${agentSplit}% Agent</span>
            <span>${brokerageSplit}% Brokerage</span>
            <span>${formatCurrency(production.volume)} Volume</span>
            <span>${formatCurrency(production.commission)} Agent Commission</span>
          </div>
        </button>
      `;
    })
    .join("");
}

function syncUserEmailFromAgent() {
  const agent = agents.find((item) => item.id === Number(userFields.agentId.value));
  if (agent) {
    userFields.firstName.value = agent.firstName;
    userFields.lastName.value = agent.lastName;
    if (!editingUserId || !userFields.email.value.trim()) userFields.email.value = agent.email;
  }

  const hasLinkedAgent = Boolean(agent);
  userFields.firstName.readOnly = hasLinkedAgent;
  userFields.lastName.readOnly = hasLinkedAgent;
  userFields.firstName.required = !hasLinkedAgent;
  userFields.lastName.required = !hasLinkedAgent;
  if (!userProfilePreview.classList.contains("has-image")) updateUserProfilePreview();
}

function getSelectedUserAgentId() {
  const selectedAgentId = Number(userFields.agentId.value);
  return agents.some((agent) => agent.id === selectedAgentId) ? selectedAgentId : null;
}

function getFilteredTransactions() {
  const agentId = calendarAgentFilter.value;
  return getVisibleTransactions().filter(
    (transaction) => agentId === "all" || String(transaction.agentId) === agentId,
  );
}

function getCalendarDays() {
  if (calendarView === "day") return [new Date(calendarDate)];

  if (calendarView === "week") {
    const weekStart = startOfWeek(calendarDate);
    return Array.from({ length: 7 }, (_, index) => addDays(weekStart, index));
  }

  const monthStart = new Date(calendarDate.getFullYear(), calendarDate.getMonth(), 1);
  const gridStart = startOfWeek(monthStart);
  return Array.from({ length: 42 }, (_, index) => addDays(gridStart, index));
}

function updateCalendarHeading(days, visibleTransactions) {
  if (calendarView === "day") {
    calendarRangeLabel.textContent = formatDate(toDateKey(calendarDate));
  } else if (calendarView === "week") {
    calendarRangeLabel.textContent = `${formatDate(toDateKey(days[0]))} - ${formatDate(toDateKey(days[6]))}`;
  } else {
    calendarRangeLabel.textContent = monthLabel(calendarDate);
  }

  const selectedAgent = calendarAgentFilter.options[calendarAgentFilter.selectedIndex]?.textContent || "All agents";
  const visibleEvents = getTransactionCalendarEvents(visibleTransactions);
  calendarSummary.textContent = `${visibleEvents.length} calendar event${visibleEvents.length === 1 ? "" : "s"} shown for ${selectedAgent}.`;
}

function renderCalendar() {
  const days = getCalendarDays();
  const filteredTransactions = getFilteredTransactions();
  const calendarEvents = getTransactionCalendarEvents(filteredTransactions);
  const todayKey = toDateKey(new Date());

  calendarGrid.className = `calendar-grid ${calendarView}-view`;
  calendarGrid.innerHTML = "";
  updateCalendarHeading(days, filteredTransactions);

  days.forEach((day) => {
    const dateKey = toDateKey(day);
    const dayEvents = calendarEvents.filter((event) => event.date === dateKey);
    const isOutsideMonth = calendarView === "month" && day.getMonth() !== calendarDate.getMonth();
    const tile = document.createElement("article");
    tile.className = `calendar-day${isOutsideMonth ? " outside-range" : ""}${dateKey === todayKey ? " today" : ""}`;
    tile.innerHTML = `
      <div class="day-number">
        <span>${calendarView === "day" ? formatDate(dateKey) : day.getDate()}</span>
        <span class="day-count">${dayEvents.length || ""}</span>
      </div>
      <div class="calendar-events">
        ${dayEvents
          .map(
            (event) => `
              <button class="calendar-event" type="button" data-transaction-edit="${event.transaction.id}" style="--agent-color: ${getAgentCalendarColor(event.transaction.agentId)}">
                <strong>${event.label}</strong>
                <span>${event.transaction.clientName} | ${getAgentName(event.transaction.agentId)}</span>
                <span>${event.transaction.propertyAddress || "No property address"}</span>
              </button>
            `,
          )
          .join("")}
      </div>
    `;
    calendarGrid.appendChild(tile);
  });
}

function setCalendarView(view) {
  calendarView = view;
  calendarViewOptions.forEach((option) => {
    const isActive = option.dataset.calendarView === view;
    option.classList.toggle("active", isActive);
    option.setAttribute("aria-pressed", String(isActive));
  });
  renderCalendar();
}

function moveCalendar(direction) {
  if (calendarView === "day") calendarDate = addDays(calendarDate, direction);
  if (calendarView === "week") calendarDate = addDays(calendarDate, direction * 7);
  if (calendarView === "month") calendarDate = new Date(calendarDate.getFullYear(), calendarDate.getMonth() + direction, 1);
  calendarDate.setHours(0, 0, 0, 0);
  renderCalendar();
}

function updateTransactionClientLabel() {
  const clientType = transactionFields.side.value === "buyer" ? "Buyer" : "Seller";
  transactionClientLabel.textContent = `${clientType} name`;
}

function updateTransactionPriceFields() {
  const isSeller = transactionFields.side.value === "seller";
  const isUnderContract = isUnderContractStatus(transactionFields.status.value);

  transactionFields.listPriceField.hidden = !isSeller;
  transactionFields.listingTitleField.hidden = !isSeller;
  transactionFields.listingPhotoField.hidden = !isSeller;
  transactionFields.contractPriceField.hidden = !isUnderContract;
  transactionFields.deadlinesField.hidden = !isUnderContract;
  transactionFields.contractDate.required = isUnderContract;

  if (!isSeller) {
    transactionFields.listPrice.value = "";
    transactionFields.listingTitle.value = "";
    transactionFields.listingPhoto.value = "";
  }
  if (!isUnderContract) {
    transactionFields.contractPrice.value = "";
    Object.values(transactionFields.deadlines).forEach((field) => {
      field.value = "";
    });
  }
}

function updateTransactionCommissionFields() {
  const isFlatFee = transactionFields.commissionType.value === "flat";
  transactionFields.commissionRateField.hidden = isFlatFee;
  transactionFields.commissionFlatField.hidden = !isFlatFee;

  if (isFlatFee) {
    transactionFields.commissionRate.value = transactionFields.commissionRate.value || "3";
  } else {
    transactionFields.commissionFlatFee.value = "";
  }
}

function syncTransactionFormAccess(transaction) {
  const agentLocked = isAgentUser();
  const lockedFields = [
    transactionFields.agentId,
    transactionFields.side,
    transactionFields.clientName,
    transactionFields.clientEmail,
    transactionFields.clientPhone,
    transactionFields.contractDate,
    transactionFields.listPrice,
    transactionFields.listingTitle,
    transactionFields.listingPhoto,
    transactionFields.contractPrice,
    transactionFields.commissionType,
    transactionFields.commissionRate,
    transactionFields.commissionFlatFee,
    transactionFields.status,
    transactionFields.propertyAddress,
    ...Object.values(transactionFields.deadlines),
  ];

  lockedFields.forEach((field) => {
    field.disabled = agentLocked;
  });

  cancelCalendarEventButton.hidden = !transaction || agentLocked;
  deleteTransactionButton.hidden = !transaction || agentLocked;
}

function renderTransactionFileVault(transaction) {
  const requiredDocs = getRequiredTransactionDocs(transactionFields.side.value, transactionFields.status.value);
  const documents = getTransactionDocuments(transaction);

  transactionFileGrid.innerHTML = requiredDocs
    .map((docName) => {
      const fileRecord = documents[docName];
      const fileName = getDocumentFileName(fileRecord);
      const detail = transactionDocumentDetails[docName];
      const fileDisplay = fileName
        ? `<button class="file-tile-name file-link" type="button" data-file-doc-name="${docName}">${fileName}</button>`
        : '<span class="file-tile-name">No file uploaded</span>';

      return `
        <article class="transaction-file-tile ${fileName ? "uploaded" : ""}">
          <div>
            <p class="file-tile-category">${detail.category}</p>
            <h5>${docName}</h5>
            <p class="file-tile-description">${detail.description}</p>
          </div>
          <div class="file-tile-meta">
            <span class="file-tile-status">${fileName ? "Uploaded" : "Needed"}</span>
            ${fileDisplay}
          </div>
          <div class="file-tile-divider"></div>
          <div>
            <strong class="file-action-title">${fileName ? "File Uploaded" : "Waiting for Upload"}</strong>
            <p class="file-action-type">PDF, image, or document</p>
          </div>
          <label class="file-upload-action">
            <span class="file-upload-action-text">${fileName ? "Replace File" : "Upload File"}</span>
            <input type="file" data-doc-name="${docName}" accept=".pdf,.doc,.docx,image/*" />
          </label>
        </article>
      `;
    })
    .join("");
}

function getNextAdditionalDocumentName(type) {
  const count = additionalDocumentsDraft.filter((document) => document.type === type).length + 1;
  return type === "Other" ? `Document ${count}` : `${type} ${count}`;
}

function resetAdditionalDocumentComposer() {
  transactionFields.additionalDocumentType.value = "Addendum";
  transactionFields.additionalDocumentName.value = "";
  transactionFields.additionalDocumentDate.value = "";
  transactionFields.additionalDocumentFile.value = "";
  transactionFields.additionalDocumentNotes.value = "";
}

function renderAdditionalDocuments() {
  if (!additionalDocumentsDraft.length) {
    additionalDocumentList.innerHTML = '<p class="additional-document-empty">No additional documents added yet.</p>';
    return;
  }

  additionalDocumentList.innerHTML = additionalDocumentsDraft
    .map(
      (document) => {
        const fileCopy = document.fileName
          ? `<button class="file-inline-link" type="button" data-additional-file="${document.id}">${document.fileName}</button>`
          : "No file uploaded";

        return `
          <article class="additional-document-row">
            <div>
              <span class="status-pill">${document.type}</span>
              <h5>${document.name}</h5>
              <p>${fileCopy}${document.relatedDate ? ` | Related date ${formatDate(document.relatedDate)}` : ""}</p>
              ${document.notes ? `<p>${document.notes}</p>` : ""}
            </div>
            ${
              !isAgentUser() || document.notifyOnSave
                ? `<button class="text-action" type="button" data-remove-additional-document="${document.id}">Remove</button>`
                : ""
            }
          </article>
        `;
      },
    )
    .join("");
}

function openTransactionModal(transactionId = null) {
  editingTransactionId = transactionId;
  renderAgentOptions();
  transactionForm.reset();
  const transaction = transactions.find((item) => item.id === transactionId);
  if (isAgentUser() && (!transaction || !canSeeTransaction(transaction))) {
    window.alert("Agents can upload files to assigned transactions only. Ask the broker/admin for transaction changes.");
    return;
  }
  additionalDocumentsDraft = (transaction?.additionalDocuments || []).map((document) => ({ ...document }));

  document.querySelector("#transaction-modal-title").textContent = transaction ? "Transaction Details" : "Add Transaction";
  transactionFields.agentId.value = transaction?.agentId || transactionFields.agentId.options[0]?.value || "";
  transactionFields.side.value = transaction?.side || "buyer";
  transactionFields.clientName.value = transaction?.clientName || "";
  transactionFields.clientEmail.value = transaction?.clientEmail || "";
  transactionFields.clientPhone.value = transaction?.clientPhone || "";
  transactionFields.contractDate.value = transaction?.contractDate || toDateKey(new Date());
  transactionFields.listPrice.value = formatCurrencyInput(transaction?.listPrice || "");
  transactionFields.listingTitle.value = transaction?.listingTitle || "";
  transactionFields.listingPhoto.value = "";
  transactionFields.contractPrice.value = formatCurrencyInput(transaction?.contractPrice || "");
  transactionFields.commissionType.value = transaction?.commissionType || "percent";
  transactionFields.commissionRate.value = transaction?.commissionRate ?? 3;
  transactionFields.commissionFlatFee.value = formatCurrencyInput(transaction?.commissionFlatFee || "");
  Object.entries(transactionFields.deadlines).forEach(([key, field]) => {
    field.value = transaction?.deadlines?.[key] || "";
  });
  transactionFields.status.value = transaction?.status || "New";
  transactionFields.propertyAddress.value = transaction?.propertyAddress || "";
  renderTransactionFileVault(transaction);
  resetAdditionalDocumentComposer();
  renderAdditionalDocuments();
  updateTransactionClientLabel();
  updateTransactionPriceFields();
  updateTransactionCommissionFields();
  syncTransactionFormAccess(transaction);
  transactionModal.hidden = false;
  transactionFields.agentId.focus();
}

function openUserModal(userId = null) {
  editingUserId = userId;
  renderAgentOptions();
  const user = users.find((item) => String(item.id) === String(userId));

  userModalTitle.textContent = user ? "Edit User" : "Add User";
  userFormNote.textContent = user
    ? "Update the user role, file permissions, and transaction access scope."
    : "After saving, choose whether to send the password setup invite email.";
  userFields.profileImage.value = "";
  userFields.agentId.value = user?.agentId || userFields.agentId.options[0]?.value || "";
  userFields.role.value = user?.role || "Agent";
  userFields.firstName.value = user?.firstName || "";
  userFields.lastName.value = user?.lastName || "";
  userFields.email.value = user?.email || "";
  userFields.status.value = user?.status || "Active";
  userFields.canUpload.checked = user?.canUpload ?? true;
  userFields.permissionScope.value = user?.permissionScope || "Own transactions only";
  deleteUserButton.hidden = !user;
  updateUserProfilePreview(user?.profileImageSrc || "");
  syncUserEmailFromAgent();
  userModal.hidden = false;
  userFields.agentId.focus();
}

function closeUserForm() {
  userModal.hidden = true;
  editingUserId = null;
}

async function deleteUser(userId) {
  const user = users.find((item) => String(item.id) === String(userId));
  if (!user) return false;

  const isCurrentUser =
    (currentUser?.id && String(currentUser.id) === String(user.id)) ||
    (currentUser?.email && currentUser.email.toLowerCase() === user.email.toLowerCase());

  if (isCurrentUser) {
    window.alert("You cannot delete the user profile you are currently signed in with.");
    return false;
  }

  if (!window.confirm(`Delete ${user.email} from Brokr users? This removes their app profile and permissions.`)) {
    return false;
  }

  try {
    await deleteUserFromBackend(user);
  } catch (error) {
    userFormNote.textContent = error.message || "Unable to delete user.";
    if (userModal.hidden) window.alert(userFormNote.textContent);
    return false;
  }

  users = users.filter((item) => String(item.id) !== String(user.id));
  renderUsers();
  return true;
}

function openCommissionModal(agentId) {
  editingCommissionAgentId = agentId;
  const agent = agents.find((item) => item.id === agentId);
  const agentSplit = getCommissionSplit(agent);

  commissionFields.agentName.value = `${agent.firstName} ${agent.lastName}`;
  commissionFields.agentSplit.value = agentSplit;
  commissionFields.brokerageSplit.value = 100 - agentSplit;
  commissionModal.hidden = false;
  commissionFields.agentSplit.focus();
}

function closeCommissionForm() {
  commissionModal.hidden = true;
  editingCommissionAgentId = null;
}

function syncBrokerageSplit() {
  const agentSplit = Math.min(100, Math.max(0, Number(commissionFields.agentSplit.value) || 0));
  commissionFields.agentSplit.value = agentSplit;
  commissionFields.brokerageSplit.value = 100 - agentSplit;
}

function closeTransactionForm() {
  transactionModal.hidden = true;
  editingTransactionId = null;
}

function deleteTransaction(transactionId) {
  const transaction = transactions.find((item) => item.id === transactionId);
  if (!transaction) return false;

  if (isAgentUser()) {
    window.alert("Only broker/admin users can delete transactions.");
    return false;
  }

  const confirmed = window.confirm(
    `Delete ${transaction.clientName} from transactions?\n\nThis removes the transaction from the roster, calendar, inbox, and local file vault records.`,
  );
  if (!confirmed) return false;

  transactions = transactions.filter((item) => item.id !== transaction.id);
  saveTransactions();
  renderTransactions();
  renderCalendar();
  renderCommissionRules();
  renderOverviewMetrics();
  renderOfficeListings();
  renderOverviewSchedule();
  renderInbox();
  renderArchiveQueue();
  return true;
}

function openAgentModal(agentId = null) {
  editingAgentId = agentId;
  const agent = agents.find((item) => item.id === agentId);

  agentModalTitle.textContent = agent ? "Edit Agent" : "Add Agent";
  agentFields.profileImage.value = "";
  agentFields.firstName.value = agent?.firstName || "";
  agentFields.lastName.value = agent?.lastName || "";
  agentFields.email.value = agent?.email || "";
  agentFields.phone.value = agent?.phone || "";
  agentFields.calendarColor.value = agent?.calendarColor || "#837a6d";
  const legacyAddress = splitLegacyAddress(agent?.address);
  agentFields.street.value = agent?.street || legacyAddress.street;
  agentFields.city.value = agent?.city || legacyAddress.city;
  agentFields.state.value = agent?.state || legacyAddress.state;
  agentFields.zip.value = agent?.zip || legacyAddress.zip;
  agentFields.licenseExpiration.value = agent?.licenseExpiration || "";
  agentFields.licenseFile.value = "";
  agentFields.contractFile.value = "";
  agentFields.otherFile.value = "";
  updateAgentProfilePreview(agent?.profileImageSrc || "");
  updateAgentFileVault(agent);
  archiveAgentButton.hidden = !agent;
  deleteAgentButton.hidden = !agent;
  archiveAgentButton.textContent = agent?.archived ? "Restore Agent" : "Archive Agent";
  agentModal.hidden = false;
  agentFields.firstName.focus();
}

function closeModal() {
  agentModal.hidden = true;
  editingAgentId = null;
}

function archiveAgent(agentId) {
  const agent = agents.find((item) => item.id === agentId);
  if (!agent) return;

  agent.archived = !agent.archived;
  renderAgents();
  renderAgentOptions();
  renderUsers();
  renderCommissionRules();
  renderInbox();
}

function deleteAgent(agentId) {
  const agent = agents.find((item) => item.id === agentId);
  if (!agent) return false;

  const agentName = `${agent.firstName} ${agent.lastName}`;
  const hasTransactions = transactions.some((transaction) => Number(transaction.agentId) === Number(agentId));
  const warning = hasTransactions
    ? `\n\nExisting transactions assigned to ${agentName} will show as unassigned.`
    : "";

  if (!window.confirm(`Delete ${agentName} from the roster? This cannot be undone.${warning}`)) return false;

  agents = agents.filter((item) => item.id !== agentId);
  users = users.map((user) => (Number(user.agentId) === Number(agentId) ? { ...user, agentId: null } : user));
  renderAgents();
  renderAgentOptions();
  renderUsers();
  renderCommissionRules();
  renderCalendar();
  renderOverviewSchedule();
  renderInbox();
  return true;
}

addAgentButton.addEventListener("click", () => openAgentModal());
closeAgentModal.addEventListener("click", closeModal);
cancelAgentButton.addEventListener("click", closeModal);

agentModal.addEventListener("click", (event) => {
  if (event.target === agentModal) closeModal();
});

rosterTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    agentFilter = tab.dataset.agentFilter;
    rosterTabs.forEach((item) => {
      const isActive = item === tab;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });
    renderAgents();
  });
});

function setAgentRosterFilter(filter) {
  agentFilter = filter;
  rosterTabs.forEach((tab) => {
    const isActive = tab.dataset.agentFilter === filter;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-pressed", String(isActive));
  });
  renderAgents();
}

function runAgentSummaryAction(action) {
  if (action === "active" || action === "archived") {
    setAgentRosterFilter(action);
    return;
  }

  if (action === "license-alerts") {
    const alertAgent = agents
      .filter((agent) => !agent.archived)
      .find((agent) => getLicenseStatus(agent.licenseExpiration).type === "warning");

    if (alertAgent) openAgentModal(alertAgent.id);
  }
}

agentSummaryItems.forEach((item) => {
  item.addEventListener("click", () => runAgentSummaryAction(item.dataset.agentSummaryAction));
  item.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    runAgentSummaryAction(item.dataset.agentSummaryAction);
  });
});

agentTableBody.addEventListener("click", (event) => {
  const editButton = event.target.closest("[data-agent-edit]");
  const archiveButton = event.target.closest("[data-agent-archive]");
  const deleteButton = event.target.closest("[data-agent-delete]");
  const agentRow = event.target.closest("tr[data-agent-edit]");

  if (deleteButton) {
    deleteAgent(Number(deleteButton.dataset.agentDelete));
    return;
  }

  if (archiveButton) {
    archiveAgent(Number(archiveButton.dataset.agentArchive));
    return;
  }

  if (editButton) {
    openAgentModal(Number(editButton.dataset.agentEdit));
    return;
  }

  if (agentRow) openAgentModal(Number(agentRow.dataset.agentEdit));
});

agentTableBody.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;

  const agentRow = event.target.closest("tr[data-agent-edit]");
  if (!agentRow) return;

  event.preventDefault();
  openAgentModal(Number(agentRow.dataset.agentEdit));
});

archiveAgentButton.addEventListener("click", () => {
  if (!editingAgentId) return;

  archiveAgent(editingAgentId);
  closeModal();
});

deleteAgentButton.addEventListener("click", () => {
  if (!editingAgentId) return;

  if (deleteAgent(editingAgentId)) closeModal();
});

agentFields.profileImage.addEventListener("change", () => {
  readImage(agentFields.profileImage.files[0], updateAgentProfilePreview);
});

agentFields.licenseFile.addEventListener("change", () => {
  updateAgentFileTile(agentLicenseTile, agentLicenseStatus, agentLicenseFileName, agentFields.licenseFile.files[0]?.name || "");
});
agentFields.contractFile.addEventListener("change", () => {
  updateAgentFileTile(agentContractTile, agentContractStatus, agentContractFileName, agentFields.contractFile.files[0]?.name || "");
});
agentFields.otherFile.addEventListener("change", () => {
  updateAgentFileTile(agentOtherTile, agentOtherStatus, agentOtherFileName, agentFields.otherFile.files[0]?.name || "", "Optional");
});
attachPhoneFormatter(agentFields.phone);

[agentFields.firstName, agentFields.lastName].forEach((field) => {
  field.addEventListener("input", () => {
    if (!agentProfilePreview.classList.contains("has-image")) updateAgentProfilePreview();
  });
});

agentForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const existingAgent = agents.find((agent) => agent.id === editingAgentId);
  const licenseFileName = agentFields.licenseFile.files[0]?.name || existingAgent?.licenseFileName || "";
  const contractFileName = agentFields.contractFile.files[0]?.name || existingAgent?.contractFileName || "";
  const otherFileName = agentFields.otherFile.files[0]?.name || existingAgent?.otherFileName || "";
  const profileImageSrc =
    (await readImageDataUrl(agentFields.profileImage.files[0])) || existingAgent?.profileImageSrc || "";
  const agentData = {
    id: existingAgent?.id || Date.now(),
    profileImageSrc,
    firstName: agentFields.firstName.value.trim(),
    lastName: agentFields.lastName.value.trim(),
    email: agentFields.email.value.trim(),
    phone: formatPhoneNumber(agentFields.phone.value),
    calendarColor: agentFields.calendarColor.value,
    street: agentFields.street.value.trim(),
    city: agentFields.city.value.trim(),
    state: agentFields.state.value.trim().toUpperCase(),
    zip: agentFields.zip.value.trim(),
    commissionSplit: existingAgent?.commissionSplit ?? 70,
    licenseFileName,
    contractFileName,
    otherFileName,
    licenseExpiration: agentFields.licenseExpiration.value,
    archived: existingAgent?.archived || false,
  };

  if (existingAgent) {
    agents = agents.map((agent) => (agent.id === existingAgent.id ? agentData : agent));
  } else {
    agents = [agentData, ...agents];
    agentFilter = "active";
    rosterTabs.forEach((tab) => {
      const isActive = tab.dataset.agentFilter === "active";
      tab.classList.toggle("active", isActive);
      tab.setAttribute("aria-pressed", String(isActive));
    });
  }

  renderAgents();
  renderAgentOptions();
  renderCommissionRules();
  renderCalendar();
  renderOverviewSchedule();
  renderInbox();
  closeModal();
});

function renderAll() {
  renderAgents();
  renderAgentOptions();
  renderTransactions();
  renderCalendar();
  renderUsers();
  renderCommissionRules();
  renderOverviewMetrics();
  renderOfficeListings();
  renderOverviewSchedule();
  renderCompanyTasks();
  renderInbox();
  renderArchiveQueue();
}

renderAll();
initializeAuth();

topbarNewTransaction.addEventListener("click", () => {
  if (isAgentUser()) {
    window.alert("New transactions are created by broker/admin users. Agents can upload files to assigned transactions.");
    return;
  }

  openTransactionModal();
});
addTransactionButton.addEventListener("click", () => {
  if (isAgentUser()) {
    window.alert("New transactions are created by broker/admin users. Agents can upload files to assigned transactions.");
    return;
  }

  openTransactionModal();
});
officeListingsToggle?.addEventListener("click", () => {
  showAllOfficeListings = !showAllOfficeListings;
  renderOfficeListings();
});
headerInboxButton.addEventListener("click", openInbox);
closeInboxDetailModal.addEventListener("click", closeInboxDetail);
dismissInboxItemButton.addEventListener("click", () => updateInboxItemState("dismissed"));
approveInboxItemButton.addEventListener("click", () => updateInboxItemState("approved"));
archiveInboxItemButton.addEventListener("click", () => updateInboxItemState("archived"));
inboxDetailAction.addEventListener("click", () => runInboxAction(inboxDetailAction.dataset.inboxAction));
inboxDetailModal.addEventListener("click", (event) => {
  if (event.target === inboxDetailModal) closeInboxDetail();
});
inboxList.addEventListener("click", (event) => {
  const actionButton = event.target.closest("[data-inbox-action]");
  if (actionButton) {
    event.stopPropagation();
    runInboxAction(actionButton.dataset.inboxAction);
    return;
  }

  const item = event.target.closest("[data-inbox-item]");
  if (item) openInboxDetail(item.dataset.inboxItem);
});
inboxList.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;

  const item = event.target.closest("[data-inbox-item]");
  if (!item) return;

  event.preventDefault();
  openInboxDetail(item.dataset.inboxItem);
});
closeTransactionModal.addEventListener("click", closeTransactionForm);
cancelTransactionButton.addEventListener("click", closeTransactionForm);
deleteTransactionButton.addEventListener("click", () => {
  if (!editingTransactionId) return;
  if (deleteTransaction(editingTransactionId)) closeTransactionForm();
});

transactionModal.addEventListener("click", (event) => {
  if (event.target === transactionModal) closeTransactionForm();
});

transactionFields.side.addEventListener("change", () => {
  updateTransactionClientLabel();
  updateTransactionPriceFields();
  renderTransactionFileVault(transactions.find((transaction) => transaction.id === editingTransactionId));
});
transactionFields.status.addEventListener("change", () => {
  updateTransactionPriceFields();
  renderTransactionFileVault(transactions.find((transaction) => transaction.id === editingTransactionId));
});
transactionFields.commissionType.addEventListener("change", updateTransactionCommissionFields);
attachPhoneFormatter(transactionFields.clientPhone);
[
  transactionFields.listPrice,
  transactionFields.contractPrice,
  transactionFields.commissionFlatFee,
].forEach(attachCurrencyFormatter);

officeListingsGrid?.addEventListener("click", (event) => {
  const listingCard = event.target.closest("[data-listing-id]");
  if (!listingCard) return;
  openTransactionModal(Number(listingCard.dataset.listingId));
});

officeListingsGrid?.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const listingCard = event.target.closest("[data-listing-id]");
  if (!listingCard) return;
  event.preventDefault();
  openTransactionModal(Number(listingCard.dataset.listingId));
});

transactionFileGrid.addEventListener("change", (event) => {
  const input = event.target.closest("input[type='file']");
  if (!input?.files[0]) return;

  const tile = input.closest(".transaction-file-tile");
  tile.classList.add("uploaded");
  tile.querySelector(".file-tile-status").textContent = "Selected";
  tile.querySelector(".file-tile-name").textContent = input.files[0].name;
  tile.querySelector(".file-action-title").textContent = "File Selected";
  tile.querySelector(".file-upload-action-text").textContent = "Replace File";
});

transactionFileGrid.addEventListener("click", (event) => {
  const fileButton = event.target.closest("[data-file-doc-name]");
  if (!fileButton) return;

  const transaction = transactions.find((item) => item.id === editingTransactionId);
  const documents = getTransactionDocuments(transaction);
  openTransactionFile(documents[fileButton.dataset.fileDocName]);
});

addAdditionalDocumentButton.addEventListener("click", () => {
  const type = transactionFields.additionalDocumentType.value;
  const file = transactionFields.additionalDocumentFile.files[0];
  const name = transactionFields.additionalDocumentName.value.trim() || getNextAdditionalDocumentName(type);

  additionalDocumentsDraft = [
    ...additionalDocumentsDraft,
    {
      id: Date.now(),
      type,
      name,
      relatedDate: transactionFields.additionalDocumentDate.value,
      notes: transactionFields.additionalDocumentNotes.value.trim(),
      fileName: file?.name || "",
      file,
      reviewStatus: file ? "Pending Review" : "No file uploaded",
      notifyOnSave: Boolean(file),
    },
  ];

  resetAdditionalDocumentComposer();
  renderAdditionalDocuments();
});

additionalDocumentList.addEventListener("click", (event) => {
  const fileButton = event.target.closest("[data-additional-file]");
  if (fileButton) {
    const document = additionalDocumentsDraft.find((item) => item.id === Number(fileButton.dataset.additionalFile));
    openTransactionFile(document);
    return;
  }

  const removeButton = event.target.closest("[data-remove-additional-document]");
  if (!removeButton) return;

  additionalDocumentsDraft = additionalDocumentsDraft.filter(
    (document) => document.id !== Number(removeButton.dataset.removeAdditionalDocument),
  );
  renderAdditionalDocuments();
});
calendarAgentFilter.addEventListener("change", renderCalendar);
calendarPrev.addEventListener("click", () => moveCalendar(-1));
calendarNext.addEventListener("click", () => moveCalendar(1));
calendarToday.addEventListener("click", () => {
  calendarDate = new Date();
  calendarDate.setHours(0, 0, 0, 0);
  renderCalendar();
});

calendarViewOptions.forEach((option) => {
  option.addEventListener("click", () => setCalendarView(option.dataset.calendarView));
});

calendarGrid.addEventListener("click", (event) => {
  const editButton = event.target.closest("[data-transaction-edit]");
  if (editButton) openTransactionModal(Number(editButton.dataset.transactionEdit));
});

overviewScheduleGrid.addEventListener("click", (event) => {
  const editButton = event.target.closest("[data-transaction-edit]");
  if (editButton) openTransactionModal(Number(editButton.dataset.transactionEdit));
});

overviewSchedulePrev.addEventListener("click", () => {
  overviewScheduleStartOffset -= overviewScheduleWindowDays;
  renderOverviewSchedule();
});

overviewScheduleNext.addEventListener("click", () => {
  overviewScheduleStartOffset += overviewScheduleWindowDays;
  renderOverviewSchedule();
});

companyTaskList.addEventListener("change", (event) => {
  const checkbox = event.target.closest("[data-company-task]");
  if (!checkbox) return;

  companyTasks = companyTasks.map((task) =>
    task.id === Number(checkbox.dataset.companyTask)
      ? { ...task, completed: checkbox.checked, status: checkbox.checked ? "Done" : "Open" }
      : task,
  );
  renderCompanyTasks();
});

addCompanyTaskButton.addEventListener("click", () => {
  if (isAgentUser()) {
    window.alert("Company tasks are managed by broker/admin users.");
    return;
  }

  openCompanyTaskModal();
});
closeCompanyTaskModal.addEventListener("click", closeCompanyTaskForm);
cancelCompanyTaskButton.addEventListener("click", closeCompanyTaskForm);

companyTaskModal.addEventListener("click", (event) => {
  if (event.target === companyTaskModal) closeCompanyTaskForm();
});

companyTaskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  companyTasks = [
    {
      id: Date.now(),
      title: companyTaskFields.title.value.trim(),
      owner: companyTaskFields.owner.value.trim(),
      deadline: companyTaskFields.deadline.value,
      status: "Open",
      completed: false,
    },
    ...companyTasks,
  ];
  renderCompanyTasks();
  closeCompanyTaskForm();
});

transactionTableBody.addEventListener("click", (event) => {
  const transactionRow = event.target.closest("[data-transaction-edit]");
  if (transactionRow) openTransactionModal(Number(transactionRow.dataset.transactionEdit));
});

transactionTableBody.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;

  const transactionRow = event.target.closest("[data-transaction-edit]");
  if (!transactionRow) return;

  event.preventDefault();
  openTransactionModal(Number(transactionRow.dataset.transactionEdit));
});

addUserButton.addEventListener("click", () => openUserModal());
closeUserModal.addEventListener("click", closeUserForm);
cancelUserButton.addEventListener("click", closeUserForm);

userModal.addEventListener("click", (event) => {
  if (event.target === userModal) closeUserForm();
});

userFields.agentId.addEventListener("change", syncUserEmailFromAgent);
userFields.profileImage.addEventListener("change", () => {
  readImage(userFields.profileImage.files[0], updateUserProfilePreview);
});
userFields.email.addEventListener("input", () => {
  if (!userProfilePreview.classList.contains("has-image")) updateUserProfilePreview();
});
userFields.firstName.addEventListener("input", () => {
  if (!userProfilePreview.classList.contains("has-image")) updateUserProfilePreview();
});
userFields.lastName.addEventListener("input", () => {
  if (!userProfilePreview.classList.contains("has-image")) updateUserProfilePreview();
});

commissionList.addEventListener("click", (event) => {
  const row = event.target.closest("[data-commission-agent]");
  if (row) openCommissionModal(Number(row.dataset.commissionAgent));
});

closeCommissionModal.addEventListener("click", closeCommissionForm);
cancelCommissionButton.addEventListener("click", closeCommissionForm);
commissionFields.agentSplit.addEventListener("input", syncBrokerageSplit);

commissionModal.addEventListener("click", (event) => {
  if (event.target === commissionModal) closeCommissionForm();
});

userTableBody.addEventListener("click", (event) => {
  const editButton = event.target.closest("[data-user-edit]");
  const deleteButton = event.target.closest("[data-user-delete]");
  const userRow = event.target.closest("tr[data-user-edit]");

  if (deleteButton) {
    deleteUser(deleteButton.dataset.userDelete);
    return;
  }

  if (editButton) {
    openUserModal(editButton.dataset.userEdit);
    return;
  }

  if (userRow) openUserModal(userRow.dataset.userEdit);
});

userTableBody.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;

  const userRow = event.target.closest("tr[data-user-edit]");
  if (!userRow) return;

  event.preventDefault();
  openUserModal(userRow.dataset.userEdit);
});

deleteUserButton.addEventListener("click", async () => {
  if (!editingUserId) return;
  if (await deleteUser(editingUserId)) closeUserForm();
});

archiveQueueList.addEventListener("click", (event) => {
  const archiveButton = event.target.closest("[data-archive-transaction]");
  if (!archiveButton) return;

  approveArchivePackage(Number(archiveButton.dataset.archiveTransaction));
});

commissionForm.addEventListener("submit", (event) => {
  event.preventDefault();
  syncBrokerageSplit();

  agents = agents.map((agent) =>
    agent.id === editingCommissionAgentId ? { ...agent, commissionSplit: Number(commissionFields.agentSplit.value) } : agent,
  );

  renderCommissionRules();
  renderOverviewMetrics();
  closeCommissionForm();
});

userForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const existingUser = users.find((user) => String(user.id) === String(editingUserId));
  const profileImageSrc =
    (await readImageDataUrl(userFields.profileImage.files[0])) || existingUser?.profileImageSrc || "";
  const linkedAgent = agents.find((agent) => agent.id === Number(userFields.agentId.value));
  let userData = {
    id: existingUser?.id || Date.now(),
    authUserId: existingUser?.authUserId || "",
    profileImageSrc,
    agentId: getSelectedUserAgentId(),
    firstName: linkedAgent?.firstName || userFields.firstName.value.trim(),
    lastName: linkedAgent?.lastName || userFields.lastName.value.trim(),
    email: userFields.email.value.trim(),
    role: userFields.role.value,
    canUpload: userFields.canUpload.checked,
    permissionScope: userFields.permissionScope.value,
    status: userFields.status.value,
  };

  try {
    userData = await saveUserToBackend(userData);
  } catch (error) {
    userFormNote.textContent = error.message || "Unable to save user.";
    return;
  }

  const isNewUser = !existingUser;
  if (existingUser) {
    users = users.map((user) => (String(user.id) === String(existingUser.id) ? userData : user));
  } else {
    users = [userData, ...users];
  }

  renderUsers();
  closeUserForm();

  if (isNewUser) {
    const shouldInvite = window.confirm(
      `User saved for ${getUserDisplayName(userData)}.\n\nSend invite email now so they can set up their password and complete the account?`,
    );

    if (shouldInvite) {
      try {
        await inviteSavedUser(userData);
      } catch (error) {
        window.alert(error.message || "User saved, but the invite email could not be sent.");
      }
    }
  }
});

transactionForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const existingTransaction = transactions.find((transaction) => transaction.id === editingTransactionId);
  if (isAgentUser() && !existingTransaction) {
    window.alert("Agents can upload files to assigned transactions only. Ask the broker/admin to create new transactions.");
    return;
  }

  const documents = { ...getTransactionDocuments(existingTransaction) };
  const deadlines = isUnderContractStatus(transactionFields.status.value)
    ? Object.fromEntries(Object.entries(transactionFields.deadlines).map(([key, field]) => [key, field.value]))
    : {};
  const selectedUploads = [];
  const transactionId = existingTransaction?.id || Date.now();
  const listingPhotoSrc =
    transactionFields.side.value === "seller"
      ? (await readImageDataUrl(transactionFields.listingPhoto.files[0])) || existingTransaction?.listingPhotoSrc || ""
      : "";

  try {
    for (const input of transactionFileGrid.querySelectorAll("input[type='file']")) {
      if (input.files[0]) {
        const fileRecord = await uploadTransactionFileRecord({
          transactionId,
          documentName: input.dataset.docName,
          file: input.files[0],
        });
        documents[input.dataset.docName] = fileRecord;
        selectedUploads.push({
          documentName: input.dataset.docName,
          fileName: input.files[0].name,
        });
      }
    }

    for (const document of additionalDocumentsDraft.filter((item) => item.notifyOnSave && item.fileName && item.file)) {
      const fileRecord = await uploadTransactionFileRecord({
        transactionId,
        documentName: document.name,
        file: document.file,
      });
      document.bucket = fileRecord.bucket;
      document.storagePath = fileRecord.storagePath;
      document.contentType = fileRecord.contentType;
      document.uploadedAt = fileRecord.uploadedAt;
      selectedUploads.push({
        documentName: document.name,
        fileName: document.fileName,
      });
    }
  } catch (error) {
    window.alert(error.message || "Unable to upload one of the files.");
    return;
  }

  let transactionData = {
    id: transactionId,
    agentId: Number(transactionFields.agentId.value),
    side: transactionFields.side.value,
    clientName: transactionFields.clientName.value.trim(),
    clientEmail: transactionFields.clientEmail.value.trim(),
    clientPhone: formatPhoneNumber(transactionFields.clientPhone.value),
    propertyAddress: transactionFields.propertyAddress.value.trim(),
    listingTitle: transactionFields.side.value === "seller" ? transactionFields.listingTitle.value.trim() : "",
    listingPhotoSrc,
    contractDate: transactionFields.contractDate.value,
    listPrice: transactionFields.side.value === "seller" ? parseCurrencyInput(transactionFields.listPrice.value) : 0,
    contractPrice: isUnderContractStatus(transactionFields.status.value)
      ? parseCurrencyInput(transactionFields.contractPrice.value)
      : 0,
    commissionType: transactionFields.commissionType.value,
    commissionRate: transactionFields.commissionType.value === "percent" ? Number(transactionFields.commissionRate.value) || 0 : 0,
    commissionFlatFee:
      transactionFields.commissionType.value === "flat" ? parseCurrencyInput(transactionFields.commissionFlatFee.value) : 0,
    deadlines,
    documents,
    additionalDocuments: additionalDocumentsDraft.map(({ file, notifyOnSave, ...document }) => document),
    fileNames: getDocumentFileNames(documents),
    status: transactionFields.status.value,
  };

  if (isAgentUser() && existingTransaction) {
    transactionData = {
      ...transactionData,
      agentId: existingTransaction.agentId,
      side: existingTransaction.side,
      clientName: existingTransaction.clientName,
      clientEmail: existingTransaction.clientEmail,
      clientPhone: existingTransaction.clientPhone,
      propertyAddress: existingTransaction.propertyAddress,
      listingTitle: existingTransaction.listingTitle,
      listingPhotoSrc: existingTransaction.listingPhotoSrc,
      contractDate: existingTransaction.contractDate,
      listPrice: existingTransaction.listPrice,
      contractPrice: existingTransaction.contractPrice,
      commissionType: existingTransaction.commissionType,
      commissionRate: existingTransaction.commissionRate,
      commissionFlatFee: existingTransaction.commissionFlatFee,
      deadlines: existingTransaction.deadlines || {},
      status: existingTransaction.status,
    };
  }

  if (existingTransaction) {
    transactions = transactions.map((transaction) =>
      transaction.id === existingTransaction.id ? transactionData : transaction,
    );
  } else {
    transactions = [transactionData, ...transactions];
  }

  saveTransactions();
  createFileUploadNotifications(transactionData, selectedUploads);
  renderTransactions();
  renderCalendar();
  renderCommissionRules();
  renderOverviewMetrics();
  renderOfficeListings();
  renderOverviewSchedule();
  renderInbox();
  renderArchiveQueue();
  closeTransactionForm();
});

cancelCalendarEventButton.addEventListener("click", () => {
  if (!editingTransactionId) return;

  transactions = transactions.map((transaction) =>
    transaction.id === editingTransactionId ? { ...transaction, status: "Cancelled" } : transaction,
  );
  saveTransactions();
  renderTransactions();
  renderCalendar();
  renderCommissionRules();
  renderOverviewMetrics();
  renderOfficeListings();
  renderOverviewSchedule();
  renderInbox();
  renderArchiveQueue();
  closeTransactionForm();
});

function setColor(input, variable) {
  document.documentElement.style.setProperty(variable, input.value);
  input.nextElementSibling.textContent = input.value;
}

function saveBrandingSetting(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    console.warn("Branding asset is too large to save in browser storage.");
  }
}

let isRestoringBranding = false;
const defaultFaviconHref = appFavicon?.getAttribute("href") || "";

function setSidebarBrokerageLogo(src = "") {
  if (!sidebarBrokerageLogo || !sidebarBrokerageLogoImage) return;

  if (src) {
    sidebarBrokerageLogoImage.src = src;
    sidebarBrokerageLogo.classList.add("has-image");
  } else {
    sidebarBrokerageLogoImage.removeAttribute("src");
    sidebarBrokerageLogo.classList.remove("has-image");
  }
}

function getCurrentBrandingSettings() {
  return {
    companyName: companyInput.value.trim() || "Lume Real Estate",
    systemName: systemInput.value.trim() || "Brokr",
    primaryColor: primaryColorInput.value,
    accentColor: accentColorInput.value,
    logoSrc: sidebarBrokerageLogoImage?.getAttribute("src") || "",
    iconSrc: iconPreview.querySelector("img")?.getAttribute("src") || localStorage.getItem("brokr-icon-src") || "",
  };
}

function saveBrandingToBackend() {
  if (isRestoringBranding) return;
  window.BrokrBackend?.saveBranding(getCurrentBrandingSettings());
}

function readImage(file, callback) {
  if (!file) return;

  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(file);
}

function readImageDataUrl(file) {
  return new Promise((resolve) => {
    if (!file) {
      resolve("");
      return;
    }

    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result));
    reader.readAsDataURL(file);
  });
}

function updateFavicon(src = "") {
  if (appFavicon) appFavicon.href = src || defaultFaviconHref;

  if (appAppleTouchIcon) appAppleTouchIcon.href = src || defaultFaviconHref;
}

function syncBrandText() {
  const companyName = companyInput.value.trim() || "Lume Real Estate";
  const systemName = systemInput.value.trim() || "Brokr";

  companyPreview.textContent = companyName;
  systemPreview.textContent = systemName;
  if (brandEyebrow) brandEyebrow.textContent = companyName;
  if (brandTitle) brandTitle.textContent = systemName;
  if (sidebarLogo) sidebarLogo.querySelector("span").textContent = "Brokr";
  if (sidebarBrokerageLogoFallback) sidebarBrokerageLogoFallback.textContent = companyName;
  if (appAppleTitle) appAppleTitle.content = systemName;
  saveBrandingSetting("brokr-company-name", companyName);
  saveBrandingSetting("brokr-system-name", systemName);
  saveBrandingToBackend();
}

companyInput.addEventListener("input", syncBrandText);
systemInput.addEventListener("input", syncBrandText);

primaryColorInput.addEventListener("input", () => {
  setColor(primaryColorInput, "--forest");
  saveBrandingSetting("brokr-primary-color", primaryColorInput.value);
  saveBrandingToBackend();
});

accentColorInput.addEventListener("input", () => {
  setColor(accentColorInput, "--brass");
  saveBrandingSetting("brokr-accent-color", accentColorInput.value);
  saveBrandingToBackend();
});

logoUpload.addEventListener("change", () => {
  readImage(logoUpload.files[0], (src) => {
    logoPreview.src = src;
    logoPreview.classList.add("has-image");
    setSidebarBrokerageLogo(src);
    saveBrandingSetting("brokr-logo-src", src);
    saveBrandingToBackend();
  });
});

iconUpload.addEventListener("change", () => {
  readImage(iconUpload.files[0], (src) => {
    const iconImage = `<img src="${src}" alt="Brokr logo icon" />`;
    iconPreview.innerHTML = iconImage;
    if (brandMark) brandMark.innerHTML = iconImage;
    updateFavicon(src);
    saveBrandingSetting("brokr-icon-src", src);
    saveBrandingToBackend();
  });
});

function restoreBrandingSettings() {
  isRestoringBranding = true;
  const savedCompanyName = localStorage.getItem("brokr-company-name");
  const savedSystemName = localStorage.getItem("brokr-system-name");
  const savedPrimaryColor = localStorage.getItem("brokr-primary-color");
  const savedAccentColor = localStorage.getItem("brokr-accent-color");
  const savedLogoSrc = localStorage.getItem("brokr-logo-src");
  const savedIconSrc = localStorage.getItem("brokr-icon-src");

  if (savedCompanyName) companyInput.value = savedCompanyName;
  if (savedSystemName) systemInput.value = savedSystemName;
  if (savedPrimaryColor) primaryColorInput.value = savedPrimaryColor;
  if (savedAccentColor) accentColorInput.value = savedAccentColor;

  syncBrandText();
  setColor(primaryColorInput, "--forest");
  setColor(accentColorInput, "--brass");

  if (savedLogoSrc) {
    logoPreview.src = savedLogoSrc;
    logoPreview.classList.add("has-image");
    setSidebarBrokerageLogo(savedLogoSrc);
  }

  if (savedIconSrc) {
    const iconImage = `<img src="${savedIconSrc}" alt="Brokr logo icon" />`;
    iconPreview.innerHTML = iconImage;
    if (brandMark) brandMark.innerHTML = iconImage;
    updateFavicon(savedIconSrc);
  }
  isRestoringBranding = false;
}

restoreBrandingSettings();

async function restoreBrandingFromBackend() {
  const savedBranding = await window.BrokrBackend?.loadBranding();
  if (!savedBranding) return;

  isRestoringBranding = true;
  if (savedBranding.company_name) companyInput.value = savedBranding.company_name;
  if (savedBranding.system_name) systemInput.value = savedBranding.system_name;
  if (savedBranding.primary_color) primaryColorInput.value = savedBranding.primary_color;
  if (savedBranding.accent_color) accentColorInput.value = savedBranding.accent_color;

  syncBrandText();
  setColor(primaryColorInput, "--forest");
  setColor(accentColorInput, "--brass");

  if (savedBranding.logo_src) {
    logoPreview.src = savedBranding.logo_src;
    logoPreview.classList.add("has-image");
    setSidebarBrokerageLogo(savedBranding.logo_src);
  }

  if (savedBranding.icon_src) {
    const iconImage = `<img src="${savedBranding.icon_src}" alt="Brokr logo icon" />`;
    iconPreview.innerHTML = iconImage;
    if (brandMark) brandMark.innerHTML = iconImage;
    updateFavicon(savedBranding.icon_src);
  }
  isRestoringBranding = false;
}

restoreBrandingFromBackend();

brandingForm.addEventListener("reset", () => {
  setTimeout(() => {
    [
      "brokr-company-name",
      "brokr-system-name",
      "brokr-primary-color",
      "brokr-accent-color",
      "brokr-logo-src",
      "brokr-icon-src",
    ].forEach((key) => localStorage.removeItem(key));
    syncBrandText();
    setColor(primaryColorInput, "--forest");
    setColor(accentColorInput, "--brass");
    logoPreview.removeAttribute("src");
    logoPreview.classList.remove("has-image");
    setSidebarBrokerageLogo();
    iconPreview.textContent = "B";
    if (brandMark) brandMark.textContent = "B";
    updateFavicon();
  }, 0);
});
