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
const sidebarMobileUser = document.querySelector("#sidebar-mobile-user");
const authActionText = document.querySelector("#auth-action-text");
const accountMenu = document.querySelector(".account-menu");
const accountDropdown = document.querySelector("#account-dropdown");
const accountProfileButton = document.querySelector("#account-profile-button");
const accountPasskeyButton = document.querySelector("#account-passkey-button");
const accountLogoutButton = document.querySelector("#account-logout-button");
const accountMenuName = document.querySelector("#account-menu-name");
const accountMenuEmail = document.querySelector("#account-menu-email");
const authGate = document.querySelector("#auth-gate");
const authForm = document.querySelector("#auth-form");
const authEmail = document.querySelector("#auth-email");
const authPassword = document.querySelector("#auth-password");
const authPasswordToggle = document.querySelector("#auth-password-toggle");
const authRememberLogin = document.querySelector("#auth-remember-login");
const authPasskeySignin = document.querySelector("#auth-passkey-signin");
const authMessage = document.querySelector("#auth-message");
const authResetButton = document.querySelector("#auth-reset-button");
const authCreateSuperButton = document.querySelector("#auth-create-super-button");
const passwordSetupGate = document.querySelector("#password-setup-gate");
const passwordSetupForm = document.querySelector("#password-setup-form");
const passwordSetupNew = document.querySelector("#password-setup-new");
const passwordSetupConfirm = document.querySelector("#password-setup-confirm");
const passwordSetupMessage = document.querySelector("#password-setup-message");
const themeOptions = document.querySelectorAll("button[data-theme]");
const adminPanels = document.querySelectorAll(
  "#admin .branding-panel, #admin .broker-contact-panel, #admin .archive-storage-panel, #admin .lockbox-panel, #admin .qr-manager-panel, #admin .commission-panel",
);
const brandingForm = document.querySelector(".branding-panel");
const companyInput = document.querySelector("#company-name");
const systemInput = document.querySelector("#system-name");
const primaryColorInput = document.querySelector("#primary-color");
const accentColorInput = document.querySelector("#accent-color");
const darkLogoUpload = document.querySelector("#logo-dark-upload");
const lightLogoUpload = document.querySelector("#logo-light-upload");
const iconUpload = document.querySelector("#icon-upload");
const appFavicon = document.querySelector("#app-favicon");
const appAppleTouchIcon = document.querySelector("#app-apple-touch-icon");
const appAppleTitle = document.querySelector('meta[name="apple-mobile-web-app-title"]');
const companyPreview = document.querySelector("#company-preview");
const systemPreview = document.querySelector("#system-preview");
const darkLogoPreview = document.querySelector("#logo-dark-preview");
const lightLogoPreview = document.querySelector("#logo-light-preview");
const sidebarLogo = document.querySelector("#sidebar-logo");
const sidebarBrokerageLogo = document.querySelector("#sidebar-brokerage-logo");
const sidebarBrokerageLogoImage = document.querySelector("#sidebar-brokerage-logo-image");
const sidebarBrokerageLogoFallback = document.querySelector("#sidebar-brokerage-logo-fallback");
const topbarBrokerageLogo = document.querySelector("#topbar-brokerage-logo");
const topbarBrokerageLogoImage = document.querySelector("#topbar-brokerage-logo-image");
const topbarBrokerageLogoFallback = document.querySelector("#topbar-brokerage-logo-fallback");
const agentFormLogo = document.querySelector("#agent-form-logo");
const agentContractLogo = document.querySelector("#agent-contract-logo");
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
const licenseNotificationForm = document.querySelector("#license-notification-form");
const licenseNotificationFields = {
  days: document.querySelector("#license-reminder-days"),
  agentEnabled: document.querySelector("#license-reminder-agent-enabled"),
  brokerEnabled: document.querySelector("#license-reminder-broker-enabled"),
};
const deadlineNotificationFields = {
  days: document.querySelector("#deadline-reminder-days"),
  agentEnabled: document.querySelector("#deadline-reminder-agent-enabled"),
  brokerEnabled: document.querySelector("#deadline-reminder-broker-enabled"),
};
const archiveStorageForm = document.querySelector("#archive-storage-form");
const archiveStorageFields = {
  folderUrl: document.querySelector("#archive-folder-url"),
  folderName: document.querySelector("#archive-folder-name"),
  packageFormat: document.querySelector("#archive-package-format"),
};
const archiveQueueList = document.querySelector("#archive-queue-list");
const archiveQueueCount = document.querySelector("#archive-queue-count");
const lockboxList = document.querySelector("#lockbox-list");
const addLockboxButton = document.querySelector("#add-lockbox-button");
const lockboxModal = document.querySelector("#lockbox-modal");
const lockboxForm = document.querySelector("#lockbox-form");
const lockboxModalTitle = document.querySelector("#lockbox-modal-title");
const closeLockboxModal = document.querySelector("#close-lockbox-modal");
const cancelLockboxButton = document.querySelector("#cancel-lockbox-button");
const deleteLockboxButton = document.querySelector("#delete-lockbox-button");
const lockboxFields = {
  lockboxId: document.querySelector("#lockbox-id"),
  mlsNumber: document.querySelector("#lockbox-mls"),
  status: document.querySelector("#lockbox-status"),
  address: document.querySelector("#lockbox-address"),
  agentName: document.querySelector("#lockbox-agent"),
  dateAdded: document.querySelector("#lockbox-date-added"),
  shackleCode: document.querySelector("#lockbox-shackle-code"),
  keyCode: document.querySelector("#lockbox-key-code"),
  showCodes: document.querySelector("#show-lockbox-codes"),
  applyCodesToAll: document.querySelector("#apply-lockbox-codes-all"),
};
const qrCodeList = document.querySelector("#qr-code-list");
const addQrCodeButton = document.querySelector("#add-qr-code-button");
const qrCodeModal = document.querySelector("#qr-code-modal");
const qrCodeForm = document.querySelector("#qr-code-form");
const qrCodeModalTitle = document.querySelector("#qr-code-modal-title");
const qrCodeName = document.querySelector("#qr-code-name");
const qrCodeDestination = document.querySelector("#qr-code-destination");
const qrCodeDestinationField = document.querySelector("#qr-code-destination-field");
const qrCodeStyle = document.querySelector("#qr-code-style");
const qrCodeStyleField = document.querySelector("#qr-code-style-field");
const qrCodeEyeStyle = document.querySelector("#qr-code-eye-style");
const qrCodeEyeStyleField = document.querySelector("#qr-code-eye-style-field");
const qrCodeFormMessage = document.querySelector("#qr-code-form-message");
const qrCodeSubmitButton = document.querySelector("#qr-code-submit-button");
const closeQrCodeModal = document.querySelector("#close-qr-code-modal");
const cancelQrCodeButton = document.querySelector("#cancel-qr-code-button");
const qrScanModal = document.querySelector("#qr-scan-modal");
const qrScanModalTitle = document.querySelector("#qr-scan-modal-title");
const qrScanList = document.querySelector("#qr-scan-list");
const closeQrScanModal = document.querySelector("#close-qr-scan-modal");
const doneQrScanButton = document.querySelector("#done-qr-scan-button");
const overviewMetrics = {
  activeListings: document.querySelector("#overview-active-listings"),
  pendingDeals: document.querySelector("#overview-pending-deals"),
  listingVolume: document.querySelector("#overview-listing-volume"),
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
const officeListingFilters = [...document.querySelectorAll("[data-office-listing-filter]")];
const idxListingModal = document.querySelector("#idx-listing-modal");
const idxListingModalTitle = document.querySelector("#idx-listing-title");
const idxListingModalStatus = document.querySelector("#idx-listing-status");
const idxListingDetail = document.querySelector("#idx-listing-detail");
const closeIdxListingModal = document.querySelector("#close-idx-listing-modal");
const doneIdxListingModal = document.querySelector("#done-idx-listing-modal");
const idxGalleryLightbox = document.querySelector("#idx-gallery-lightbox");
const idxLightboxImage = document.querySelector("#idx-lightbox-image");
const idxLightboxCaption = document.querySelector("#idx-lightbox-caption");
const idxLightboxClose = document.querySelector("#idx-lightbox-close");
const idxLightboxPrevious = document.querySelector("#idx-lightbox-previous");
const idxLightboxNext = document.querySelector("#idx-lightbox-next");
let idxOfficeListings = [];
let idxOfficeListingsLoaded = false;
let idxGalleryPhotos = [];
let idxGalleryIndex = 0;
let idxGalleryTargetIndex = 0;
let idxGalleryLabel = "Listing photo";
let idxGalleryTouchStartX = null;
let idxGalleryWheelLocked = false;
let idxGalleryLoadRequest = 0;
const idxGalleryPreloadCache = new Map();

function preloadIdxPhoto(url) {
  if (!url) return Promise.resolve();
  if (idxGalleryPreloadCache.has(url)) return idxGalleryPreloadCache.get(url);
  const preloadPromise = new Promise((resolve) => {
    const image = new Image();
    image.onload = resolve;
    image.onerror = resolve;
    image.src = url;
  });
  idxGalleryPreloadCache.set(url, preloadPromise);
  return preloadPromise;
}

async function preloadIdxGallery(photos) {
  if (!photos.length || navigator.connection?.saveData) return;
  const queue = [...new Set(photos)];
  const workers = Array.from({ length: Math.min(6, queue.length) }, async () => {
    while (queue.length) await preloadIdxPhoto(queue.shift());
  });
  await Promise.all(workers);
}
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
const rosterTabs = document.querySelectorAll("[data-agent-filter]");
const activeAgentCount = document.querySelector("#active-agent-count");
const archivedAgentCount = document.querySelector("#archived-agent-count");
const licenseAlertCount = document.querySelector("#license-alert-count");
const agentSummaryItems = document.querySelectorAll("[data-agent-summary-action]");
const transactionTableBody = document.querySelector("#transaction-table-body");
const transactionTabs = document.querySelectorAll("[data-transaction-filter]");
const transactionSummaryItems = document.querySelectorAll("[data-transaction-summary-filter]");
const addTransactionButton = document.querySelector("#add-transaction-button");
const transactionModal = document.querySelector("#transaction-modal");
const transactionForm = document.querySelector("#transaction-form");
const closeTransactionModal = document.querySelector("#close-transaction-modal");
const cancelTransactionButton = document.querySelector("#cancel-transaction-button");
const cancelCalendarEventButton = document.querySelector("#cancel-calendar-event-button");
const deleteTransactionButton = document.querySelector("#delete-transaction-button");
const transactionEmptyState = document.querySelector("#transaction-empty-state");
const transactionSummary = {
  total: document.querySelector("#transaction-total-count"),
  active: document.querySelector("#transaction-active-count"),
  pending: document.querySelector("#transaction-pending-count"),
  closed: document.querySelector("#transaction-closed-count"),
};
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
    earnestMoney: document.querySelector("#deadline-earnest-money"),
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
  compensationOption: document.querySelector("#commission-compensation-option"),
  agentSplit: document.querySelector("#commission-agent-split"),
  brokerageSplit: document.querySelector("#commission-brokerage-split"),
  flatTransactionFee: document.querySelector("#commission-flat-fee"),
};
const commissionAgentSplitField = document.querySelector("#commission-agent-split-field");
const commissionBrokerageSplitField = document.querySelector("#commission-brokerage-split-field");
const commissionFlatFeeField = document.querySelector("#commission-flat-fee-field");
const commissionFormNote = document.querySelector("#commission-form-note");
const agentFields = {
  profileImage: document.querySelector("#agent-profile-image"),
  firstName: document.querySelector("#agent-first-name"),
  lastName: document.querySelector("#agent-last-name"),
  roleTitle: document.querySelector("#agent-role-title"),
  licenseNumber: document.querySelector("#agent-license-number"),
  email: document.querySelector("#agent-email"),
  phone: document.querySelector("#agent-phone"),
  calendarColor: document.querySelector("#agent-calendar-color"),
  street: document.querySelector("#agent-street"),
  city: document.querySelector("#agent-city"),
  state: document.querySelector("#agent-state"),
  zip: document.querySelector("#agent-zip"),
  licenseFile: document.querySelector("#agent-license-file"),
  licenseExpiration: document.querySelector("#agent-license-expiration"),
  contractEffectiveDate: document.querySelector("#agent-contract-effective-date"),
  compensationOption: document.querySelector("#agent-compensation-option"),
  commissionSplit: document.querySelector("#agent-commission-split"),
  flatTransactionFee: document.querySelector("#agent-flat-transaction-fee"),
  contractFile: document.querySelector("#agent-contract-file"),
  otherFile: document.querySelector("#agent-other-file"),
};
const agentContractModal = document.querySelector("#agent-contract-modal");
const agentContractDocument = document.querySelector("#agent-contract-document");
const closeAgentContractModal = document.querySelector("#close-agent-contract-modal");
const previewAgentContractButton = document.querySelector("#preview-agent-contract-button");
const sendAgentContractButton = document.querySelector("#send-agent-contract-button");
const deleteAgentContractButton = document.querySelector("#delete-agent-contract-button");
const printAgentContractButton = document.querySelector("#print-agent-contract-button");
const contractDocusignButton = document.querySelector("#contract-docusign-button");
const agentCommissionSplitField = document.querySelector("#agent-commission-split-field");
const agentFlatTransactionFeeField = document.querySelector("#agent-flat-transaction-fee-field");

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
  earnestMoney: "Earnest Money Deposit Deadline",
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
    firstName: "Jared",
    lastName: "Alvey",
    roleTitle: "Principal Broker",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "UT",
    zip: "",
    calendarColor: "#837a6d",
    commissionSplit: 70,
    archived: false,
  },
  {
    id: 2,
    firstName: "Shannon",
    lastName: "Alvey",
    roleTitle: "Realtor",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "UT",
    zip: "",
    calendarColor: "#5f7588",
    commissionSplit: 70,
    archived: false,
  },
  {
    id: 3,
    firstName: "Andrea",
    lastName: "Herzog",
    roleTitle: "Realtor",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "UT",
    zip: "",
    calendarColor: "#9a7a48",
    commissionSplit: 70,
    archived: false,
  },
  {
    id: 4,
    firstName: "Michael",
    lastName: "Christensen",
    roleTitle: "Realtor",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "UT",
    zip: "",
    calendarColor: "#667a68",
    commissionSplit: 70,
    archived: false,
  },
];
const savedAgents = JSON.parse(localStorage.getItem("brokr-agents") || "null");
const hasSavedAgentData = Array.isArray(savedAgents) && savedAgents.length > 0;
if (hasSavedAgentData) agents = savedAgents;

function saveAgents() {
  try {
    localStorage.setItem("brokr-agents", JSON.stringify(agents));
  } catch (error) {
    console.warn("Agent records are too large for local browser storage; saving to the shared database instead.", error);
  }
  window.BrokrBackend?.saveAgents?.(agents).catch((error) => {
    console.warn("Unable to save shared agent records.", error);
  });
}

async function loadAgentsFromBackend() {
  const remoteAgents = await window.BrokrBackend?.loadAgents?.();
  if (Array.isArray(remoteAgents) && remoteAgents.length) {
    agents = remoteAgents;
    localStorage.setItem("brokr-agents", JSON.stringify(agents));
  } else if (hasSavedAgentData) {
    const importedAgents = await window.BrokrBackend?.saveAgents?.(agents);
    if (Array.isArray(importedAgents) && importedAgents.length) {
      agents = importedAgents;
      localStorage.setItem("brokr-agents", JSON.stringify(agents));
    }
  }

  renderAgents();
  renderAgentOptions();
  renderUsers();
  renderCommissionRules();
  renderCalendar();
  renderOverviewSchedule();
  renderInbox();
}

async function loadTransactionsFromBackend() {
  const remoteTransactions = await window.BrokrBackend?.loadTransactions?.();
  if (Array.isArray(remoteTransactions) && remoteTransactions.length) {
    transactions = remoteTransactions;
    localStorage.setItem("brokr-transactions", JSON.stringify(transactions));
  } else if (transactions.length) {
    const importedTransactions = await window.BrokrBackend?.saveTransactions?.(transactions);
    if (Array.isArray(importedTransactions) && importedTransactions.length) {
      transactions = importedTransactions;
      localStorage.setItem("brokr-transactions", JSON.stringify(transactions));
    }
  }
  renderTransactions();
  renderCalendar();
  renderOverviewMetrics();
  renderOverviewSchedule();
  renderInbox();
}

async function loadSystemNotificationsFromBackend() {
  const remoteNotifications = await window.BrokrBackend?.loadNotifications?.();
  systemNotifications = Array.isArray(remoteNotifications) ? remoteNotifications : [];
  renderInbox();
}
const cleanStartMigrationKey = "brokr-clean-start-idx-v1";
if (!localStorage.getItem(cleanStartMigrationKey)) {
  [
    "brokr-transactions",
    "brokr-sample-listings-v1",
    "brokr-file-upload-notifications",
    "brokr-inbox-item-states",
  ].forEach((key) => localStorage.removeItem(key));
  localStorage.setItem(cleanStartMigrationKey, "true");
}
let transactions = JSON.parse(localStorage.getItem("brokr-transactions") || "[]");
let calendarView = "month";
let calendarDate = new Date();
calendarDate.setHours(0, 0, 0, 0);
let overviewScheduleStartOffset = 0;
const overviewScheduleWindowDays = 10;
const officeListingsPreviewLimit = 8;
let showAllOfficeListings = false;
let officeListingsFilter = "all";
let editingUserId = null;
let companyTasks = [];
const defaultLockboxes = [
  {
    id: 1,
    lockboxId: "34439577",
    mlsNumber: "26-275211",
    address: "3165 S Tallow Tree DR, Washington, UT 84780",
    agentName: "Jared Alvey",
    dateAdded: "",
    status: "assigned",
    shackleCode: "",
    keyCode: "",
  },
  {
    id: 2,
    lockboxId: "34499015",
    mlsNumber: "",
    address: "2047 S Tagans Way, St. George, UT 84790",
    agentName: "Jared Alvey",
    dateAdded: "",
    status: "assigned",
    shackleCode: "",
    keyCode: "",
  },
  {
    id: 3,
    lockboxId: "34499026",
    mlsNumber: "25-266109",
    address: "3174 Walnut Canyon DR, Washington, UT 84780",
    agentName: "Jared Alvey",
    dateAdded: "",
    status: "assigned",
    shackleCode: "",
    keyCode: "",
  },
  {
    id: 4,
    lockboxId: "34439629",
    mlsNumber: "",
    address: "",
    agentName: "",
    dateAdded: "",
    status: "unassigned",
    shackleCode: "",
    keyCode: "",
  },
  {
    id: 5,
    lockboxId: "33274937",
    mlsNumber: "",
    address: "",
    agentName: "",
    dateAdded: "",
    status: "unassigned",
    shackleCode: "",
    keyCode: "",
  },
];
const savedLockboxes = JSON.parse(localStorage.getItem("brokr-lockboxes") || "null");
let lockboxes = (savedLockboxes || defaultLockboxes).map((lockbox) => ({
  ...lockbox,
  status: lockbox.status || (lockbox.address ? "assigned" : "unassigned"),
}));
const legacyBlankInventory = lockboxes.filter(
  (lockbox) => lockbox.status === "unassigned" && !lockbox.lockboxId && /^Unassigned Lockbox [123]$/.test(lockbox.inventoryLabel || ""),
);
if (legacyBlankInventory.length === 3) {
  lockboxes = [
    ...lockboxes.filter((lockbox) => !legacyBlankInventory.includes(lockbox)),
    ...defaultLockboxes.filter((lockbox) => lockbox.status === "unassigned"),
  ];
  localStorage.setItem("brokr-lockboxes", JSON.stringify(lockboxes));
}
let editingLockboxId = null;
let brokerContact = {
  name: "Jared Alvey",
  email: "broker@lumerealestate.com",
  phone: "(555) 430-1000",
  profileImageSrc: "",
  licenseReminderDays: 60,
  licenseReminderAgentEnabled: true,
  licenseReminderBrokerEnabled: true,
  deadlineReminderDays: 2,
  deadlineReminderAgentEnabled: true,
  deadlineReminderBrokerEnabled: true,
};
let archiveSettings = {
  folderUrl: "",
  folderName: "Brokr Closed Transaction Archives",
  packageFormat: "ZIP package",
};
let fileUploadNotifications = JSON.parse(localStorage.getItem("brokr-file-upload-notifications") || "[]");
let systemNotifications = [];
let inboxItemStates = JSON.parse(localStorage.getItem("brokr-inbox-item-states") || "{}");
let activeInboxItemId = null;
let transactionFilter = "all";
let users = [];

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
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  document.querySelector(".content")?.scrollTo?.({ top: 0, left: 0, behavior: "auto" });
  if (pageId === "admin") loadQrCodes();
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
  if (window.matchMedia("(max-width: 980px)").matches) {
    document.body.classList.remove("menu-open");
    return;
  }

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
  const firstName = String(displayName).trim().split(/\s+/)[0] || "there";
  return `${greeting}, ${firstName}.`;
}

function getAuthRoleLabel(user = currentUser) {
  const role = user?.role || currentUserRole;
  if (role === "Broker") return "Principal Broker";
  if (role === "Admin") return "Administrator";
  if (role === "Agent") return getCurrentUserAgent()?.roleTitle || "Realtor";
  if (role === "Read only") return "Read only";
  return isSignedIn() ? "Signed in" : "Signed out";
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

  authStatus.textContent = getAuthRoleLabel(user);
  authName.textContent = isLoggedIn ? displayName : "Guest";
  if (sidebarMobileUser) sidebarMobileUser.textContent = isLoggedIn ? displayName : "Guest";
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
  authPassword.type = "password";
  authPasswordToggle.setAttribute("aria-label", "Show password");
  authPasswordToggle.setAttribute("aria-pressed", "false");
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

function getSessionDisplayProfile(session) {
  const sessionEmail = session?.user?.email?.trim().toLowerCase();
  const brokerEmail = brokerContact.email?.trim().toLowerCase();
  const metadata = session?.user?.user_metadata || {};
  const displayName = sessionEmail && brokerEmail && sessionEmail === brokerEmail
    ? brokerContact.name
    : metadata.full_name || metadata.name || toDisplayNameFromEmail(session?.user?.email || "");
  const [firstName = "", ...lastNameParts] = displayName.trim().split(/\s+/);
  return {
    authUserId: session.user.id,
    firstName,
    lastName: lastNameParts.join(" "),
    email: session.user.email,
    status: "Loading",
  };
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

  setAuthState(getSessionDisplayProfile(session), session);

  const profile = await window.BrokrBackend.loadCurrentUser();
  if (!profile || profile.status !== "Active") {
    setAuthState(null, null);
    openAuthGate("This login does not have an active Brokr user profile yet. Ask the broker/admin to add this user.");
    return;
  }

  setAuthState(profile, session);
  closeAuthGate();
  await loadUsersFromBackend();
  await loadAgentsFromBackend();
  await loadTransactionsFromBackend();
  await loadSystemNotificationsFromBackend();
}

async function initializeAuth() {
  authRememberLogin.checked = window.BrokrBackend?.getRememberLogin?.() ?? true;
  const supportsPasskeys = Boolean(window.PublicKeyCredential && navigator.credentials);
  authPasskeySignin.hidden = !supportsPasskeys;
  if (accountPasskeyButton) accountPasskeyButton.hidden = !supportsPasskeys;

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
accountPasskeyButton?.addEventListener("click", async () => {
  closeAccountMenu();
  accountPasskeyButton.disabled = true;
  try {
    await window.BrokrBackend.registerPasskey();
    window.alert("Face ID / passkey sign-in is ready on this device.");
  } catch (error) {
    window.alert(error.code === "passkey_disabled"
      ? "Passkey sign-in still needs to be enabled for this Brokr account."
      : error.message || "Unable to set up Face ID / passkey sign-in.");
  } finally {
    accountPasskeyButton.disabled = false;
  }
});
accountLogoutButton?.addEventListener("click", logoutCurrentUser);

authPasswordToggle.addEventListener("click", () => {
  const showPassword = authPassword.type === "password";
  authPassword.type = showPassword ? "text" : "password";
  authPasswordToggle.setAttribute("aria-label", showPassword ? "Hide password" : "Show password");
  authPasswordToggle.setAttribute("aria-pressed", String(showPassword));
  authPassword.focus();
});

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
    const session = await window.BrokrBackend.signIn(authEmail.value.trim(), authPassword.value, authRememberLogin.checked);
    await refreshAuthUser(session);
  } catch (error) {
    setAuthMessage(error.message || "Unable to sign in.", "error");
  }
});

authPasskeySignin.addEventListener("click", async () => {
  authPasskeySignin.disabled = true;
  setAuthMessage("Waiting for Face ID or your device passkey...");
  try {
    const session = await window.BrokrBackend.signInWithPasskey(authRememberLogin.checked);
    await refreshAuthUser(session);
  } catch (error) {
    setAuthMessage(error.code === "passkey_disabled"
      ? "Face ID / passkey sign-in is not enabled yet. Sign in with your password for now."
      : error.message || "Unable to sign in with Face ID / passkey.", "error");
  } finally {
    authPasskeySignin.disabled = false;
  }
});

authCreateSuperButton?.addEventListener("click", async () => {
  if (!authForm.reportValidity()) return;

  setAuthMessage("Creating broker super admin...");
  try {
    window.BrokrBackend.setRememberLogin(authRememberLogin.checked);
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
  const email = authEmail.value.trim();
  if (!email) {
    setAuthMessage("Enter your broker email first, then click Forgot password.", "error");
    authEmail.focus();
    return;
  }

  if (!authEmail.checkValidity()) {
    setAuthMessage("Enter a valid email address, then click Forgot password.", "error");
    authEmail.focus();
    return;
  }

  authResetButton.disabled = true;
  setAuthMessage("Sending password reset email...");
  try {
    await window.BrokrBackend.sendPasswordSetupEmail(email);
    setAuthMessage(`Password reset email sent to ${email}. Check that inbox and spam folder.`, "success");
  } catch (error) {
    setAuthMessage(error.message || "Unable to send password reset email.", "error");
  } finally {
    authResetButton.disabled = false;
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
setupAdminPanelToggles();
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

Object.values(licenseNotificationFields).forEach((field) => {
  field.addEventListener("change", syncLicenseNotificationSettings);
});
Object.values(deadlineNotificationFields).forEach((field) => {
  field.addEventListener("change", syncLicenseNotificationSettings);
});

licenseNotificationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  syncLicenseNotificationSettings();
});

Object.values(archiveStorageFields).forEach((field) => {
  field.addEventListener("input", syncArchiveSettings);
  field.addEventListener("change", syncArchiveSettings);
});

archiveStorageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  syncArchiveSettings();
});

function setupAdminPanelToggles() {
  adminPanels.forEach((panel, index) => {
    const header = panel.querySelector(":scope > .panel-header");
    if (!header) return;

    const body = document.createElement("div");
    body.className = "admin-panel-body";
    body.id = `admin-panel-body-${index + 1}`;

    while (header.nextSibling) {
      body.appendChild(header.nextSibling);
    }

    panel.appendChild(body);

    const actions = document.createElement("div");
    actions.className = "panel-header-actions";

    Array.from(header.children)
      .slice(1)
      .forEach((child) => actions.appendChild(child));

    const toggle = document.createElement("button");
    toggle.className = "panel-toggle-button";
    toggle.type = "button";
    toggle.setAttribute("aria-controls", body.id);
    actions.appendChild(toggle);
    header.appendChild(actions);

    const setCollapsed = (isCollapsed) => {
      panel.classList.toggle("is-collapsed", isCollapsed);
      toggle.setAttribute("aria-expanded", String(!isCollapsed));
      toggle.textContent = isCollapsed ? "Expand" : "Collapse";
      header.tabIndex = 0;
      header.setAttribute("aria-expanded", String(!isCollapsed));
      header.setAttribute("aria-controls", body.id);
      header.setAttribute("aria-label", `${panel.querySelector("h3")?.textContent || "Admin panel"}: ${isCollapsed ? "expand" : "collapse"}`);
    };

    setCollapsed(true);
    toggle.addEventListener("click", () => setCollapsed(!panel.classList.contains("is-collapsed")));
    header.addEventListener("click", (event) => {
      if (event.target.closest("button, a, input, select, textarea")) return;
      setCollapsed(!panel.classList.contains("is-collapsed"));
    });
    header.addEventListener("keydown", (event) => {
      if (event.target !== header) return;
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      setCollapsed(!panel.classList.contains("is-collapsed"));
    });
  });
}

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

function formatShortDate(dateValue) {
  if (!dateValue) return "Not set";

  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
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

function formatPersonName(value = "") {
  const name = String(value).trim();
  if (!name || name !== name.toUpperCase()) return name;
  return name.toLowerCase().replace(/(^|[\s'-])([a-z])/g, (_match, separator, letter) => `${separator}${letter.toUpperCase()}`);
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

function isSellerListing(transaction) {
  return transaction.side === "seller" && !isUnderContractStatus(transaction.status) && transaction.status !== "Cancelled";
}

function getListingStatus(transaction) {
  if (!isSellerListing(transaction)) return transaction.status;

  const listingDate = transaction.listingDate || transaction.createdAt || toDateKey(new Date());
  const startDate = new Date(`${listingDate}T00:00:00`);
  if (Number.isNaN(startDate.getTime())) return transaction.status || "New";

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const listingAgeDays = Math.floor((today - startDate) / 86400000);
  return listingAgeDays <= 14 ? "New" : "Active";
}

function getEditableTransactionStatus(transaction) {
  if (!transaction) return "Active";
  return transaction.status === "New" ? "Active" : transaction.status || "Active";
}

function getEstimatedGrossCommission(transaction) {
  if (transaction.commissionType === "flat") return Number(transaction.commissionFlatFee) || 0;

  const commissionRate = Number.isFinite(Number(transaction.commissionRate)) ? Number(transaction.commissionRate) : 3;
  return (Number(transaction.contractPrice) || 0) * (commissionRate / 100);
}

function getAgentCommission(transaction) {
  const agent = agents.find((item) => item.id === Number(transaction.agentId));
  const grossCommission = getEstimatedGrossCommission(transaction);
  if ((agent?.compensationOption || "split") === "flat") {
    return Math.max(0, grossCommission - (Number(agent.flatTransactionFee) || 0));
  }
  const agentSplit = getCommissionSplit(agent);
  return grossCommission * (agentSplit / 100);
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
  const hasUploadedContract = Boolean(agent.contractFileName || agentFields.contractFile.files[0]);
  const hasCreatedContract = Boolean(agent.contractGenerated);
  previewAgentContractButton.textContent = hasUploadedContract ? "Preview Uploaded Contract" : "Preview Contract";
  deleteAgentContractButton.hidden = !hasUploadedContract && !hasCreatedContract;
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

function getAgentContractDraft() {
  const savedAgent = agents.find((agent) => agent.id === editingAgentId);
  return {
    ...(savedAgent || {}),
    firstName: agentFields.firstName.value.trim() || savedAgent?.firstName || "",
    lastName: agentFields.lastName.value.trim() || savedAgent?.lastName || "",
    email: agentFields.email.value.trim() || savedAgent?.email || "",
    licenseNumber: agentFields.licenseNumber.value.trim() || savedAgent?.licenseNumber || "",
    contractEffectiveDate: agentFields.contractEffectiveDate.value,
    compensationOption: agentFields.compensationOption.value,
    commissionSplit: Number(agentFields.commissionSplit.value) || 0,
    flatTransactionFee: Number(agentFields.flatTransactionFee.value) || 0,
  };
}

function syncAgentCompensationFields() {
  const usesSplit = agentFields.compensationOption.value === "split";
  agentCommissionSplitField.hidden = !usesSplit;
  agentFlatTransactionFeeField.hidden = usesSplit;
  agentFields.commissionSplit.disabled = !usesSplit;
  agentFields.commissionSplit.required = usesSplit;
  agentFields.flatTransactionFee.disabled = usesSplit;
  agentFields.flatTransactionFee.required = !usesSplit;
}

function renderAgentContract(agent) {
  const name = `${agent.firstName || ""} ${agent.lastName || ""}`.trim() || "________________________";
  const effectiveDate = formatDate(toDateKey(new Date()));
  const agentSplit = Number(agent.commissionSplit) || 0;
  const brokerageSplit = 100 - agentSplit;
  const splitSelected = (agent.compensationOption || "split") === "split";
  const flatFee = Number(agent.flatTransactionFee) || 0;
  const section = (title, body) => `<section><h4>${title}</h4>${body}</section>`;
  const bullets = (items) => `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
  const contractLogoSrc = agentContractLogo?.getAttribute("src") || "";
  const contractBrand = contractLogoSrc
    ? `<img class="contract-document-logo" src="${escapeLockboxText(contractLogoSrc)}" alt="Lume Real Estate" />`
    : `<div class="contract-document-wordmark" aria-label="Lume Real Estate"><span>LUME</span><small>REAL ESTATE</small></div>`;

  agentContractDocument.innerHTML = `
    <header>${contractBrand}<h2>Independent Contractor Agreement</h2></header>
    <p>This Independent Contractor Agreement ("Agreement") is entered into on <strong>${escapeLockboxText(effectiveDate)}</strong>, by and between:</p>
    <div class="contract-party-grid"><div><span>Brokerage</span><strong>Lume Real Estate</strong><p>Principal Broker: Jared Alvey<br>212 E Blue Fields Ln.<br>Washington, UT 84780</p></div><div><span>Agent</span><strong>${escapeLockboxText(name)}</strong><p>License Number: ${escapeLockboxText(agent.licenseNumber || "________________")}</p></div></div>
    <p>Collectively referred to as the "Parties."</p>
    ${section("1. Independent Contractor Status", "<p>Agent shall perform services as an independent contractor and not as an employee of Brokerage. Agent shall be responsible for all taxes, insurance, licensing fees, continuing education requirements, and other expenses associated with Agent's business activities.</p>")}
    ${section("2. Term", "<p>This Agreement shall commence on the effective date above and shall continue until terminated by either party upon written notice.</p>")}
    ${section("3. Agent Responsibilities", bullets(["Maintain an active Utah real estate license in good standing.", "Conduct all business in accordance with Utah law, REALTOR® Code of Ethics, MLS rules, and Brokerage policies.", "Present a professional image and conduct all business ethically and honestly.", "Use Brokerage-approved forms and disclosures.", "Promptly communicate with clients, cooperating agents, lenders, title companies, and Brokerage staff.", "Maintain accurate transaction records.", "Protect confidential client information.", "Refrain from making unauthorized legal, tax, or financial representations."]))}
    ${section("4. Broker Supervision and Document Review", `<p>Agent acknowledges that Brokerage is responsible for supervising licensed activity.</p>${bullets(["All listing agreements, buyer representation agreements, purchase contracts, addenda, disclosures, amendments, and other transaction documents shall be submitted to Brokerage for review and approval as required.", "No document requiring Broker approval shall be presented or distributed without such approval when required by Brokerage policy.", "All fully executed documents shall be submitted to Brokerage immediately upon execution and no later than twenty-four (24) hours after signing.", "Agent shall cooperate with all compliance reviews and requests for information.", "Brokerage may require corrections to any transaction file to maintain compliance."])}`)}
    ${section("5. Transaction File Requirements", `<p>Agent shall provide complete transaction files including:</p>${bullets(["Listing agreements", "Buyer representation agreements", "Purchase contracts", "Addenda and amendments", "Agency disclosures", "Seller disclosures", "Inspection documents", "Closing statements", "Any other documents required by Brokerage"])}<p>Brokerage reserves the right to withhold commission payments until all required documents have been received and approved.</p>`)}
    ${section("6. Commission Compensation", `<p>The Principal Broker has selected the following compensation structure for Agent. This structure is pulled directly from the Agent's brokerage record.</p><div class="contract-compensation ${splitSelected ? "selected" : ""}"><strong>Commission Split</strong><p>Brokerage Split: ${splitSelected ? brokerageSplit : "____"}% &nbsp; · &nbsp; Agent Split: ${splitSelected ? agentSplit : "____"}%</p><p>The Agent shall receive the agreed-upon percentage of commissions earned and collected by Brokerage from transactions originated or serviced by Agent.</p><p>Broker Initials: ${splitSelected ? '<span class="docusign-anchor">[[BROKER_INITIALS]]</span>' : "______"} &nbsp; Agent Initials: ${splitSelected ? '<span class="docusign-anchor">[[AGENT_INITIALS]]</span>' : "______"}</p></div><div class="contract-compensation ${!splitSelected ? "selected" : ""}"><strong>Flat Transaction Fee</strong><p>Agent shall retain one hundred percent (100%) of earned commission, less the following transaction fee paid to Brokerage:</p><p>${!splitSelected && flatFee ? formatCurrency(flatFee) : "$________"} per closed transaction.</p><p>Broker Initials: ${!splitSelected ? '<span class="docusign-anchor">[[BROKER_INITIALS]]</span>' : "______"} &nbsp; Agent Initials: ${!splitSelected ? '<span class="docusign-anchor">[[AGENT_INITIALS]]</span>' : "______"}</p></div><h5>Commission Modifications and Reductions</h5><p>Agent shall not independently negotiate, advertise, offer, agree to, or promise any reduction, rebate, credit, discount, concession, or modification of Brokerage commission or compensation without the prior written approval of the Principal Broker.</p><p>Any request by a buyer, seller, landlord, tenant, or other client to reduce Brokerage compensation must be submitted to the Principal Broker for review and approval before any agreement is made or documented.</p><p>Any commission reduction, listing fee discount, buyer rebate, closing cost credit paid from commission, referral fee adjustment, or other compensation modification must be approved in writing by the Principal Broker prior to execution of any agreement or amendment affecting Brokerage compensation.</p><p>The Principal Broker reserves the sole right to approve, deny, or modify any proposed commission reduction or compensation arrangement.</p><p>Any unauthorized commission reduction or compensation agreement entered into by Agent may constitute grounds for disciplinary action, withholding of commission payment, or termination of this Agreement.</p>`)}
    ${section("7. Payment of Commissions", bullets(["Brokerage has received commission funds.", "Transaction file is complete.", "All required documentation has been submitted and approved.", "Brokerage may deduct transaction fees, MLS fees, E&O insurance fees, unpaid brokerage charges, and client-related expenses authorized by Agent.", "No commission shall be paid on transactions that fail to close."]))}
    ${section("8. Advertising and Marketing", bullets(["All advertising shall comply with Utah law and Brokerage policy.", "Brokerage name shall appear on all advertising as required by law.", "Social media, websites, signs, flyers, and marketing materials shall clearly identify Brokerage.", "Brokerage may require review and approval of marketing materials."]))}
    ${section("9. Earnest Money", "<p>Agent shall immediately deliver all earnest money and trust funds in accordance with Utah law and Brokerage policy to their client's Title Company and provide proof of Earnest Money deposits.</p>")}
    ${section("10. Confidentiality", "<p>Agent shall maintain confidentiality regarding client information, brokerage operations, financial information, and proprietary systems both during and after the term of this Agreement.</p>")}
    ${section("11. License Maintenance", bullets(["Maintain an active license.", "Complete continuing education requirements.", "Notify Brokerage immediately of any investigation, complaint, disciplinary action, or license status change."]))}
    ${section("12. Termination", `<p>Either party may terminate this Agreement at any time upon written notice.</p>${bullets(["Agent shall immediately cease using Brokerage branding, signs, marketing materials, and systems.", "All transaction files remain property of Brokerage.", "Pending transactions shall be handled according to Brokerage policy and Utah law.", "Commission rights on pending transactions shall be determined by Brokerage and any separate written agreement."])}`)}
    ${section("13. Indemnification", "<p>Agent agrees to indemnify and hold harmless Brokerage, Broker, employees, and affiliates from claims, damages, liabilities, or expenses arising from Agent's negligence, misconduct, or violation of law.</p>")}
    ${section("14. Entire Agreement", "<p>This Agreement constitutes the entire understanding between the Parties and supersedes all prior agreements. Any modification must be in writing and signed by both Parties.</p>")}
    ${section("15. Governing Law", "<p>This Agreement shall be governed by the laws of the State of Utah.</p>")}
    <section><h4>Signatures</h4><div class="contract-signatures"><div><strong>Lume Real Estate</strong><p>Jared Alvey, Principal Broker</p><p class="contract-signature-field"><span>Broker Signature</span><span class="docusign-anchor">[[BROKER_SIGNATURE]]</span><span class="contract-signature-line" aria-hidden="true"></span></p><p class="contract-signature-field"><span>Date</span><span class="docusign-anchor">[[BROKER_DATE]]</span><span class="contract-signature-line" aria-hidden="true"></span></p></div><div><strong>${escapeLockboxText(name)}</strong><p class="contract-signature-field"><span>Agent Signature</span><span class="docusign-anchor">[[AGENT_SIGNATURE]]</span><span class="contract-signature-line" aria-hidden="true"></span></p><p class="contract-signature-field"><span>Date</span><span class="docusign-anchor">[[AGENT_DATE]]</span><span class="contract-signature-line" aria-hidden="true"></span></p></div></div></section>
  `;
}

function openAgentContract(agent = getAgentContractDraft()) {
  const selectedFile = agentFields.contractFile.files[0];
  const uploadedContractUrl = selectedFile ? URL.createObjectURL(selectedFile) : agent.contractFileData || "";
  const uploadedContractType = selectedFile?.type || agent.contractFileType || "";

  if (uploadedContractUrl) {
    const isImage = uploadedContractType.startsWith("image/");
    agentContractDocument.innerHTML = isImage
      ? `<img class="uploaded-contract-preview" src="${escapeLockboxText(uploadedContractUrl)}" alt="Uploaded broker agent contract" />`
      : `<iframe class="uploaded-contract-preview" src="${escapeLockboxText(uploadedContractUrl)}" title="Uploaded broker agent contract"></iframe>`;
    agentContractModal.hidden = false;
    closeAgentContractModal.focus();
    return;
  }

  if (agent.contractFileName) {
    window.alert("This contract was uploaded before document previews were enabled. Please delete it, upload the file again, and save the agent record.");
    return;
  }

  renderAgentContract(agent);
  agentContractModal.hidden = false;
  closeAgentContractModal.focus();

  if (editingAgentId) {
    agents = agents.map((item) => (item.id === editingAgentId ? { ...item, contractGenerated: true } : item));
    saveAgents();
    updateAgentFileVault(agents.find((item) => item.id === editingAgentId));
  }
}

function closeAgentContract() {
  agentContractModal.hidden = true;
}

async function ensureDocusignConnection() {
  try {
    const session = await window.BrokrBackend?.getSession();
    if (!session?.access_token) throw new Error("Sign in as Broker or Admin before connecting DocuSign.");
    const headers = { Authorization: `Bearer ${session.access_token}` };
    const statusResponse = await fetch("/api/docusign/status", { headers });
    const status = await statusResponse.json();
    if (statusResponse.ok && status.connected) {
      return status;
    }

    const response = await fetch("/api/docusign/connect", { headers });
    const data = await response.json();
    if (!response.ok || !data.authorizationUrl) throw new Error(data.error || "DocuSign connection could not start.");
    window.location.assign(data.authorizationUrl);
    return null;
  } catch (error) {
    window.alert(error.message || "DocuSign connection could not start.");
    return null;
  }
}

async function sendAgentContractWithDocusign() {
  const agent = getAgentContractDraft();
  const agentName = `${agent.firstName || ""} ${agent.lastName || ""}`.trim();
  if (!agentName || !agent.email) {
    window.alert("Add the agent's name and email before sending the contract.");
    return;
  }
  if (agentFields.contractFile.files[0] || agent.contractFileName) {
    window.alert("The DocuSign workflow currently sends the generated Brokr contract. Delete the uploaded contract first if you want to generate and send a new agreement.");
    return;
  }

  const buttons = [sendAgentContractButton, contractDocusignButton];
  buttons.forEach((button) => {
    button.disabled = true;
    button.textContent = "Sending…";
  });
  const connection = await ensureDocusignConnection();
  if (!connection) {
    buttons.forEach((button) => {
      button.disabled = false;
      button.textContent = "Create DocuSign Draft";
    });
    return;
  }
  const docusignWindow = window.open("", "brokr-docusign-draft");
  if (docusignWindow) {
    docusignWindow.document.title = "Opening DocuSign draft…";
    docusignWindow.document.body.innerHTML = '<p style="font:16px system-ui,sans-serif;padding:32px">Creating your DocuSign draft…</p>';
  }
  renderAgentContract(agent);
  const session = await window.BrokrBackend?.getSession();
  try {
    const response = await fetch("/api/docusign/send-envelope", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${session?.access_token || ""}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        agentName,
        agentEmail: agent.email,
        documentHtml: agentContractDocument.innerHTML,
      }),
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(result.error || "DocuSign could not send the contract.");
    if (result.senderViewUrl) {
      if (docusignWindow) {
        docusignWindow.location.replace(result.senderViewUrl);
      } else {
        window.location.assign(result.senderViewUrl);
      }
    } else {
      docusignWindow?.close();
      window.alert(`DocuSign draft created for ${agentName}, but its review window could not be opened. Envelope ID: ${result.envelopeId}`);
    }
  } catch (error) {
    docusignWindow?.close();
    window.alert(error.message || "DocuSign could not send the contract.");
  } finally {
    sendAgentContractButton.disabled = false;
    contractDocusignButton.disabled = false;
    sendAgentContractButton.textContent = "Create DocuSign Draft";
    contractDocusignButton.textContent = "Create DocuSign Draft";
  }
}

const docusignResult = new URLSearchParams(window.location.search).get("docusign");
if (docusignResult) {
  const resultUrl = new URL(window.location.href);
  const message = resultUrl.searchParams.get("message");
  resultUrl.searchParams.delete("docusign");
  resultUrl.searchParams.delete("message");
  window.history.replaceState({}, "", resultUrl);
  window.setTimeout(() => {
    window.alert(docusignResult === "connected" ? "DocuSign connected successfully." : message || "DocuSign connection failed.");
  }, 250);
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
      <td data-label="Name">
        <div class="agent-identity">
          ${renderAgentAvatar(agent)}
          <div class="agent-name">
            <strong>${agent.firstName} ${agent.lastName}</strong>
            <span>${agent.archived ? "Archived agent" : agent.roleTitle || "Office agent"}</span>
          </div>
        </div>
      </td>
      <td data-label="Contact">
        <div class="agent-contact">${agent.email}<br />${agent.phone || "No phone on file"}</div>
      </td>
      <td data-label="Address"><div class="agent-contact">${formatAgentAddress(agent)}</div></td>
      <td data-label="Files">
        <div>${agent.licenseFileName || "No license uploaded"}</div>
        <div class="license-detail">Expires ${formatDate(agent.licenseExpiration)}</div>
        <div class="license-detail">Contract: ${agent.contractStatus || (agent.contractFileName ? "Completed" : "Draft")}</div>
        <div class="license-detail">${agent.otherFileName ? `Other: ${agent.otherFileName}` : "No other files"}</div>
      </td>
      <td data-label="Status"><span class="status-pill ${agent.archived ? "archived" : licenseStatus.type}">${agent.archived ? "Archived" : licenseStatus.label}</span></td>
      <td data-label="Actions">
        <div class="table-actions">
          <button class="text-action" type="button" data-agent-contract="${agent.id}">Contract</button>
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

function isWithinLastTwoYears(dateValue) {
  if (!dateValue) return false;
  const date = new Date(dateValue);
  if (Number.isNaN(date.getTime())) return false;
  const cutoff = new Date();
  cutoff.setFullYear(cutoff.getFullYear() - 2);
  return date >= cutoff;
}

function getOfficeListings() {
  if (idxOfficeListingsLoaded) {
    return idxOfficeListings.filter((listing) => listing.status !== "Closed" || isWithinLastTwoYears(listing.closeDate));
  }
  return getVisibleTransactions({ includeCancelled: false }).filter(
    (transaction) => transaction.side === "seller",
  );
}

function getActiveOfficeListings() {
  return getOfficeListings().filter((listing) => getOfficeListingCategory(listing) === "active");
}

function getOfficeListingCategory(listing) {
  const status = listing.isIdxListing ? listing.status : getListingStatus(listing);
  if (["Active", "Coming Soon", "New"].includes(status)) return "active";
  if (["Pending", "Active Under Contract", "Under Contract"].includes(status)) return "pending";
  if (["Closed", "Sold"].includes(status)) return "closed";
  if (["Expired"].includes(status)) return "expired";
  return "other";
}

function getFilteredOfficeListings() {
  const listings = getOfficeListings();
  if (officeListingsFilter === "all") return listings;
  return listings.filter((listing) => getOfficeListingCategory(listing) === officeListingsFilter);
}

function getListingTitle(transaction) {
  if (transaction.isIdxListing) return transaction.title || transaction.address || "Lume listing";
  if (transaction.listingTitle) return transaction.listingTitle;
  if (transaction.propertyAddress) return transaction.propertyAddress.split(",")[0];
  return `${transaction.clientName} Listing`;
}

function renderOfficeListings() {
  if (!officeListingsGrid) return;
  const listings = getFilteredOfficeListings();
  const visibleListings = showAllOfficeListings ? listings : listings.slice(0, officeListingsPreviewLimit);

  if (!listings.length) {
    const label = officeListingsFilter === "all" ? "office" : officeListingsFilter;
    officeListingsGrid.innerHTML = `<p class="empty-panel-copy">No ${label} listings found.</p>`;
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
      const listingStatus = listing.isIdxListing ? listing.status : getListingStatus(listing);
      const photoSrc = listing.isIdxListing ? listing.photoUrl : listing.listingPhotoSrc;
      const price = listing.isIdxListing ? listing.price : listing.listPrice;
      const listingAgent = listing.isIdxListing
        ? null
        : agents.find((agent) => String(agent.id) === String(listing.agentId));
      const agentName = listing.isIdxListing
        ? formatPersonName(listing.agentName)
        : listingAgent
          ? `${listingAgent.firstName} ${listingAgent.lastName}`
          : "";
      const listingByline = [agentName || "Lume Real Estate", `List price ${formatCurrency(price || 0)}`].join(" · ");
      const listingReference = listing.isIdxListing && listing.listingId
        ? `MLS # ${listing.listingId}`
        : formatCurrency(price || 0);
      const photo = photoSrc
        ? `<img src="${escapeLockboxText(photoSrc)}" alt="${escapeLockboxText(title)}" />`
        : `<div class="listing-photo-placeholder"><span>${escapeLockboxText(title.slice(0, 1))}</span></div>`;
      const interactionAttributes = listing.isIdxListing
        ? `role="button" tabindex="0" data-idx-listing-key="${escapeLockboxText(listing.id)}" aria-label="Preview MLS listing ${escapeLockboxText(title)}"`
        : `role="button" tabindex="0" data-listing-id="${listing.id}" aria-label="Open listing ${escapeLockboxText(title)}"`;

      return `
        <article class="office-listing-card" ${interactionAttributes}>
          <div class="office-listing-photo">${photo}</div>
          <div class="office-listing-copy">
            <h4>${escapeLockboxText(title)}</h4>
            <p>${escapeLockboxText(listingByline)}</p>
          </div>
          <div class="office-listing-meta">
            <span><i aria-hidden="true"></i>${escapeLockboxText(listingStatus)}</span>
            <strong>${escapeLockboxText(listingReference)}</strong>
          </div>
        </article>
      `;
    })
    .join("");
}

async function openIdxListingPreview(listingKey) {
  let listing = idxOfficeListings.find((item) => String(item.id) === String(listingKey));
  if (!listing || !idxListingModal) return;
  idxListingModalTitle.textContent = listing.address || listing.title || "Listing Details";
  idxListingModalStatus.textContent = listing.status || "MLS listing";
  idxListingDetail.innerHTML = '<p class="idx-listing-loading">Loading full MLS listing…</p>';
  idxListingModal.hidden = false;
  closeIdxListingModal?.focus();
  try {
    const response = await fetch(`/api/idx-listings?listingKey=${encodeURIComponent(listingKey)}`, {
      headers: { Accept: "application/json" },
    });
    const payload = await response.json().catch(() => ({}));
    if (response.ok && payload.listing) listing = { ...listing, ...payload.listing, isIdxListing: true };
  } catch (error) {
    console.warn("Using summary IDX data because full listing details are unavailable:", error.message);
  }
  if (idxListingModal.hidden) return;
  const area = listing.buildingArea || listing.livingArea || 0;
  const facts = [
    ["Bedrooms", listing.bedrooms || "—", "beds"],
    ["Bathrooms", listing.bathrooms || "—", "baths"],
    ["Square feet", area ? Number(area).toLocaleString() : "—", "sqft"],
    ["Garage", listing.garageSpaces || "—", "car garage"],
    ["Lot size", listing.lotAcres || "—", "acre lot"],
    ["Year built", listing.yearBuilt || "—", "year built"],
    ["Price / sq. ft.", area ? formatCurrency((listing.price || 0) / area) : "—", "per sqft"],
    ["Property type", listing.propertyType || "—", ""],
  ];
  const listingFacts = [
    ["Listing agent", formatPersonName(listing.agentName) || "—"],
    ["Listed", listing.listingDate ? formatDate(listing.listingDate) : "—"],
    ["Days on market", listing.daysOnMarket || "—"],
    ["Cumulative DOM", listing.cumulativeDaysOnMarket || "—"],
    ["Subdivision", listing.subdivision || "—"],
    ["County", listing.county || "—"],
    ["Levels", listing.levels || "—"],
    ["Private pool", listing.poolPrivate === null ? "—" : listing.poolPrivate ? "Yes" : "No"],
  ];
  const financialFacts = [
    ["List price", formatCurrency(listing.price || 0)],
    ["Price / sq. ft.", area ? formatCurrency((listing.price || 0) / area) : "—"],
    ["Parcel number", listing.parcelNumber || "—"],
    ["Annual taxes", listing.taxAnnualAmount ? formatCurrency(listing.taxAnnualAmount) : "—"],
    ["Tax year", listing.taxYear || "—"],
    ["Zoning", listing.zoning || "—"],
  ];
  const features = [
    ["Cooling", listing.cooling],
    ["Heating", listing.heating],
    ["Parking", listing.parkingFeatures],
    ["Interior features", listing.interiorFeatures],
    ["Appliances", listing.appliances],
    ["Utilities", listing.utilities],
    ["Sewer", listing.sewer],
    ["Water", listing.waterSource],
    ["Property condition", listing.propertyCondition],
  ].filter(([, value]) => value);
  const factIcon = (label) => {
    const paths = {
      Bedrooms: '<path d="M3 18v-8m0 5h18v3m-14-3v-4h6a4 4 0 0 1 4 4M7 11V8h3a3 3 0 0 1 3 3"/>',
      Bathrooms: '<path d="M4 12h16v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-3Zm2 0V7a3 3 0 0 1 6 0"/>',
      "Square feet": '<path d="M4 4v16h16M8 16v4m4-7v7m4-11v11M4 8h4m-4 4h7"/>',
      Garage: '<path d="M4 20V8l8-4 8 4v12M7 20v-8h10v8M9 15h6"/>',
      "Lot size": '<path d="M12 3 5 8l2 3-3 3 5 2-1 5h8l-1-5 5-2-3-3 2-3-7-5Z"/>',
      "Year built": '<path d="M4 20h16M7 20V9l5-4 5 4v11M10 20v-6h4v6"/>',
      "Price / sq. ft.": '<path d="M4 7h16v11H4zM8 4h8v3M8 11h8m-8 3h5"/>',
      "Property type": '<path d="m3 11 9-7 9 7M5 10v10h14V10M9 20v-6h6v6"/>',
    };
    return `<svg class="idx-fact-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${paths[label] || paths["Property type"]}</svg>`;
  };
  const detailGrid = (items, withIcons = false) => items.map(([label, value, suffix = ""]) => withIcons
    ? `<div class="idx-icon-fact">${factIcon(label)}<p><strong>${escapeLockboxText(value)}</strong>${suffix ? ` <span>${escapeLockboxText(suffix)}</span>` : ""}</p></div>`
    : `<div><span>${escapeLockboxText(label)}</span><strong>${escapeLockboxText(value)}</strong></div>`).join("");
  idxListingModalTitle.textContent = listing.address || listing.title || "Listing Details";
  idxListingModalStatus.textContent = listing.status || "MLS listing";
  const photos = listing.photoUrls?.length ? listing.photoUrls : listing.photoUrl ? [listing.photoUrl] : [];
  preloadIdxGallery(photos);
  idxListingDetail.innerHTML = `
    <div class="idx-listing-summary">
      ${photos.length ? `<div class="idx-listing-carousel"><button class="idx-carousel-image" type="button" aria-label="Open all ${photos.length} listing photos"><img class="idx-listing-hero" src="${escapeLockboxText(photos[0])}" alt="${escapeLockboxText(listing.address || listing.title || "MLS listing")}" />${photos.length > 1 ? `<span class="idx-carousel-count">View all ${photos.length} photos</span>` : ""}</button></div>` : ""}
      <div class="idx-listing-summary-copy">
        <span>${escapeLockboxText(listing.status || "MLS listing")}</span>
        <strong>${formatCurrency(listing.price || 0)}</strong>
        <p>${escapeLockboxText(listing.propertyType || "Residential property")}</p>
        <p>MLS # ${escapeLockboxText(listing.listingId || "—")}</p>
      </div>
    </div>
    <section class="idx-listing-section"><h4>Property overview</h4><div class="idx-listing-facts idx-listing-icon-facts">${detailGrid(facts, true)}</div></section>
    ${listing.remarks ? `<section class="idx-listing-section idx-listing-remarks"><h4>Public remarks</h4><p>${escapeLockboxText(listing.remarks)}</p></section>` : ""}
    <section class="idx-listing-section"><h4>Listing details</h4><div class="idx-listing-facts">${detailGrid(listingFacts)}</div></section>
    <section class="idx-listing-section"><h4>Financial &amp; tax</h4><div class="idx-listing-facts">${detailGrid(financialFacts)}</div></section>
    ${features.length ? `<section class="idx-listing-section"><h4>Features &amp; utilities</h4><div class="idx-listing-feature-list">${features.map(([label, value]) => `<div><strong>${escapeLockboxText(label)}</strong><p>${escapeLockboxText(value)}</p></div>`).join("")}</div></section>` : ""}
    ${(listing.directions || (listing.latitude && listing.longitude)) ? `<section class="idx-listing-section"><h4>Location</h4>${listing.directions ? `<p>${escapeLockboxText(listing.directions)}</p>` : ""}${listing.latitude && listing.longitude ? `<a class="secondary-action idx-map-link" href="https://www.google.com/maps?q=${encodeURIComponent(`${listing.latitude},${listing.longitude}`)}" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg><span>Open in Maps</span></a>` : ""}</section>` : ""}
  `;
  idxListingDetail.querySelector(".idx-carousel-image")?.addEventListener("click", () => {
    openIdxGallery(photos, listing.address || listing.title || "Listing photo");
  });
}

function preloadIdxGalleryNeighbors() {
  if (idxGalleryPhotos.length < 2) return;
  [-3, -2, -1, 1, 2, 3].forEach((offset) => {
    preloadIdxPhoto(idxGalleryPhotos[(idxGalleryTargetIndex + offset + idxGalleryPhotos.length) % idxGalleryPhotos.length]);
  });
}

function showIdxGalleryPhoto(nextIndex) {
  if (!idxGalleryPhotos.length) return;
  idxGalleryTargetIndex = (nextIndex + idxGalleryPhotos.length) % idxGalleryPhotos.length;
  const requestId = ++idxGalleryLoadRequest;
  idxGalleryLightbox.classList.add("is-loading");
  idxLightboxCaption.textContent = "Loading photo…";
  const nextPhoto = new Image();
  nextPhoto.onload = () => {
    if (requestId !== idxGalleryLoadRequest) return;
    idxGalleryIndex = idxGalleryTargetIndex;
    idxLightboxImage.src = nextPhoto.src;
    idxLightboxImage.alt = `${idxGalleryLabel}, photo ${idxGalleryIndex + 1} of ${idxGalleryPhotos.length}`;
    idxLightboxCaption.textContent = `${idxGalleryIndex + 1} / ${idxGalleryPhotos.length}`;
    idxGalleryLightbox.classList.remove("is-loading");
  };
  nextPhoto.onerror = () => {
    if (requestId !== idxGalleryLoadRequest) return;
    idxLightboxCaption.textContent = "Photo could not be loaded";
    idxGalleryLightbox.classList.remove("is-loading");
  };
  nextPhoto.src = idxGalleryPhotos[idxGalleryTargetIndex];
  preloadIdxGalleryNeighbors();
}

function openIdxGallery(photos, label) {
  if (!photos.length || !idxGalleryLightbox) return;
  idxGalleryPhotos = photos;
  idxGalleryLabel = label;
  idxGalleryTargetIndex = 0;
  idxGalleryLightbox.hidden = false;
  document.body.classList.add("idx-lightbox-open");
  showIdxGalleryPhoto(0);
  idxLightboxClose.focus();
}

function closeIdxGallery() {
  if (!idxGalleryLightbox) return;
  idxGalleryLightbox.hidden = true;
  document.body.classList.remove("idx-lightbox-open");
  idxLightboxImage.removeAttribute("src");
}

function closeIdxListingPreview() {
  if (idxListingModal) idxListingModal.hidden = true;
}

async function loadOfficeListingsFromIdx() {
  try {
    const response = await fetch("/api/idx-listings", { headers: { Accept: "application/json" } });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(payload.error || "Unable to load IDX listings.");
    idxOfficeListings = (payload.listings || []).map((listing) => ({ ...listing, isIdxListing: true }));
    idxOfficeListingsLoaded = true;
    renderOfficeListings();
    renderOverviewMetrics();
  } catch (error) {
    console.warn("Using local office listings because IDX is unavailable:", error.message);
  }
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
      const deadlines = {
        ...(transaction.deadlines || {}),
        earnestMoney: getEarnestMoneyDeadline(transaction.contractDate),
      };
      Object.entries(deadlines).forEach(([key, date]) => {
        if (!date) return;
        events.push({
          transaction,
          date,
          label: transactionDeadlineLabels[key],
          deadlineKey: key,
        });
      });
    }

    return events.filter((event) => event.date);
  });
}

function matchesTransactionFilter(transaction, filter = transactionFilter) {
  if (filter === "active") return transaction.side === "seller" && ["New", "Active"].includes(getListingStatus(transaction));
  if (filter === "pending") return isUnderContractStatus(transaction.status) && transaction.status !== "Closed";
  if (filter === "closed") return transaction.status === "Closed";
  return transaction.status !== "Cancelled";
}

function renderTransactions() {
  const visibleTransactions = getVisibleTransactions({ includeCancelled: true });
  const activeTransactions = visibleTransactions.filter((transaction) => transaction.status !== "Cancelled");
  const pendingTransactions = activeTransactions.filter(
    (transaction) => isUnderContractStatus(transaction.status) && transaction.status !== "Closed",
  );
  const filteredTransactions = visibleTransactions.filter((transaction) => matchesTransactionFilter(transaction));
  transactionTableBody.innerHTML = "";
  addTransactionButton.hidden = isAgentUser();
  transactionEmptyState.classList.toggle("visible", filteredTransactions.length === 0);
  transactionSummary.total.textContent = activeTransactions.length;
  transactionSummary.active.textContent = getActiveOfficeListings().length;
  transactionSummary.pending.textContent = pendingTransactions.length;
  transactionSummary.closed.textContent = activeTransactions.filter((transaction) => transaction.status === "Closed").length;

  filteredTransactions.forEach((transaction) => {
    const sideLabel = transaction.side === "buyer" ? "Buyer rep" : "Seller rep";
    const statusLabel = getListingStatus(transaction);
    const fileSummary = getTransactionFileSummary(transaction);
    const row = document.createElement("tr");
    row.className = "clickable-row";
    row.dataset.transactionEdit = transaction.id;
    row.tabIndex = 0;
    row.setAttribute("role", "button");
    row.setAttribute("aria-label", `Open transaction details for ${transaction.clientName}`);
    row.innerHTML = `
      <td data-label="Client">
        <div class="agent-name">
          <strong>${transaction.clientName}</strong>
          <span>${transaction.side === "buyer" ? "Buyer" : "Seller"}</span>
        </div>
      </td>
      <td data-label="Agent">${getAgentName(transaction.agentId)}</td>
      <td data-label="Side"><span class="status-pill">${sideLabel}</span></td>
      <td data-label="Contact">
        <div class="agent-contact">${transaction.clientEmail || "No email on file"}<br />${transaction.clientPhone || "No phone on file"}</div>
      </td>
      <td data-label="Property">${transaction.propertyAddress || "No property address yet"}</td>
      <td data-label="Files">
        <div>${fileSummary.uploadedCount}/${fileSummary.requiredDocs.length} files complete</div>
        <div class="license-detail">Contract ${formatDate(transaction.contractDate)} | ${fileSummary.missingCount ? `${fileSummary.missingCount} missing` : "Complete"}</div>
      </td>
      <td data-label="Status"><span class="status-pill ${statusLabel === "Review Needed" ? "warning" : ""}">${statusLabel}</span></td>
    `;
    transactionTableBody.appendChild(row);
  });
}

function setTransactionFilter(filter) {
  transactionFilter = filter;
  transactionTabs.forEach((tab) => {
    const isActive = tab.dataset.transactionFilter === filter;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-pressed", String(isActive));
  });
  transactionSummaryItems.forEach((item) => {
    const isActive = item.dataset.transactionSummaryFilter === filter;
    item.classList.toggle("active", isActive);
    item.setAttribute("aria-pressed", String(isActive));
  });
  renderTransactions();
}

function renderOverviewMetrics() {
  if (idxOfficeListingsLoaded) {
    const currentYear = new Date().getFullYear();
    const activeListings = getActiveOfficeListings();
    const pendingListings = idxOfficeListings.filter((listing) => ["Pending", "Active Under Contract"].includes(listing.status));
    const closedListings = idxOfficeListings.filter((listing) => listing.status === "Closed");
    const ytdListings = idxOfficeListings.filter((listing) => {
      const date = new Date(`${listing.listingDate || listing.modifiedAt || ""}`);
      return !Number.isNaN(date.getTime()) && date.getFullYear() === currentYear;
    });
    overviewMetrics.activeListings.textContent = activeListings.length;
    overviewMetrics.pendingDeals.textContent = pendingListings.length;
    overviewMetrics.listingVolume.textContent = formatCurrency(activeListings.reduce((total, listing) => total + (Number(listing.price) || 0), 0));
    overviewMetrics.salesVolume.textContent = formatCurrency(closedListings.reduce(
      (total, listing) => total + (Number(listing.closePrice) || Number(listing.price) || 0),
      0,
    ));
    overviewMetrics.agentCommission.textContent = formatCurrency(0);
    overviewMetrics.brokerageCommission.textContent = formatCurrency(0);
    overviewMetrics.ytdTransactions.textContent = ytdListings.length;
    return;
  }
  const visibleTransactions = getVisibleTransactions({ includeCancelled: true });
  const activeListings = getActiveOfficeListings().length;
  const pendingDeals = visibleTransactions.filter((transaction) => isUnderContractStatus(transaction.status)).length;
  const ytdTransactions = visibleTransactions.filter((transaction) => transaction.status !== "Cancelled").length;
  const listingVolume = visibleTransactions
    .filter((transaction) => transaction.side === "seller" && ["New", "Active"].includes(getListingStatus(transaction)))
    .reduce((total, transaction) => total + (Number(transaction.listPrice) || 0), 0);
  const salesVolume = visibleTransactions
    .filter((transaction) => transaction.status === "Closed")
    .reduce((total, transaction) => total + (Number(transaction.contractPrice) || 0), 0);
  const agentCommission = visibleTransactions
    .filter((transaction) => transaction.status !== "Cancelled" && isUnderContractStatus(transaction.status))
    .reduce((total, transaction) => total + getAgentCommission(transaction), 0);
  const brokerageCommission = visibleTransactions
    .filter((transaction) => transaction.status !== "Cancelled" && isUnderContractStatus(transaction.status))
    .reduce((total, transaction) => total + getBrokerageCommission(transaction), 0);

  overviewMetrics.activeListings.textContent = activeListings;
  overviewMetrics.pendingDeals.textContent = pendingDeals;
  overviewMetrics.listingVolume.textContent = formatCurrency(listingVolume);
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

  const rangeStartKey = toDateKey(rangeStart);
  const rangeEndKey = toDateKey(rangeEnd);
  const compactScheduleRange = window.matchMedia("(max-width: 720px)").matches;
  overviewScheduleRange.textContent = compactScheduleRange
    ? `${formatShortDate(rangeStartKey)} - ${formatShortDate(rangeEndKey)}`
    : `${formatDate(rangeStartKey)} - ${formatDate(rangeEndKey)}`;

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

function isCompanyTaskOverdue(task) {
  if (task.completed || !task.deadline) return false;

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const deadline = new Date(`${task.deadline}T00:00:00`);
  return !Number.isNaN(deadline.getTime()) && deadline < today;
}

function renderCompanyTasks() {
  const visibleTasks = getVisibleCompanyTasks();
  const openTasks = visibleTasks.filter((task) => !task.completed);
  const completedTasks = visibleTasks.filter((task) => task.completed);
  const overdueTaskCount = openTasks.filter(isCompanyTaskOverdue).length;
  const taskSection = (label, tasks) => `
    <div class="company-task-section">
      <p class="task-section-label">${label}</p>
      ${
        tasks.length
          ? tasks
              .map(
                (task) => {
                  const isOverdue = isCompanyTaskOverdue(task);
                  const statusLabel = isOverdue ? "Overdue" : task.status;
                  return `
                  <label class="company-task-row ${task.completed ? "completed" : ""} ${isOverdue ? "overdue" : ""}">
                    <input type="checkbox" data-company-task="${task.id}" ${task.completed ? "checked" : ""} />
                    <span class="task-checkbox" aria-hidden="true"></span>
                    <span class="task-copy">
                      <strong>${task.title}</strong>
                      <span>${task.owner}${task.deadline ? ` | ${isOverdue ? "Overdue" : "Due"} ${formatDate(task.deadline)}` : ""}</span>
                    </span>
                    <span class="task-status ${isOverdue ? "overdue" : task.status === "High" ? "high" : ""}">${statusLabel}</span>
                  </label>
                `;
                },
              )
              .join("")
          : '<p class="task-empty">No tasks in this section</p>'
      }
    </div>
  `;

  companyTaskOpenCount.textContent = overdueTaskCount
    ? `${openTasks.length} open · ${overdueTaskCount} overdue`
    : `${openTasks.length} open`;
  addCompanyTaskButton.hidden = isAgentUser();
  companyTaskList.innerHTML = `${taskSection("Open company tasks", openTasks)}${taskSection("Completed", completedTasks)}`;
}

function escapeLockboxText(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function saveLockboxes() {
  localStorage.setItem("brokr-lockboxes", JSON.stringify(lockboxes));
}

const expandedLockboxIds = new Set();
const expandedQrCodeIds = new Set();
const expandedCommissionAgentIds = new Set();

function renderLockboxes() {
  if (!lockboxes.length) {
    lockboxList.innerHTML = '<p class="lockbox-empty">No lockboxes are assigned to listings.</p>';
    return;
  }

  lockboxList.innerHTML = lockboxes
    .map(
      (lockbox) => {
        const isExpanded = expandedLockboxIds.has(lockbox.id);
        return `
        <article class="lockbox-row ${isExpanded ? "is-expanded" : "is-collapsed"}" data-lockbox-card="${lockbox.id}" tabindex="0" aria-expanded="${isExpanded}">
          <div class="lockbox-row-main">
            <div class="lockbox-primary">
              <p class="eyebrow">Lockbox ID</p>
              <strong>${lockbox.lockboxId ? escapeLockboxText(lockbox.lockboxId) : escapeLockboxText(lockbox.inventoryLabel || "Not entered")}</strong>
              <p>${lockbox.address ? escapeLockboxText(lockbox.address) : "Available for a future listing"}</p>
            </div>
            <div class="lockbox-card-actions split-card-actions" role="group" aria-label="Lockbox actions">
              <button class="secondary-action lockbox-edit-button" type="button" data-lockbox-edit="${lockbox.id}" aria-label="Edit ${escapeLockboxText(lockbox.lockboxId || lockbox.inventoryLabel || "lockbox")}">Edit</button>
              <button class="secondary-action lockbox-expand-button" type="button" data-lockbox-toggle="${lockbox.id}" aria-expanded="${isExpanded}" aria-label="${isExpanded ? "Collapse" : "Expand"} ${escapeLockboxText(lockbox.lockboxId || lockbox.inventoryLabel || "lockbox")}">${isExpanded ? "Collapse" : "Expand"}</button>
            </div>
          </div>
          <dl class="lockbox-details">
            <div>
              <dt>Status</dt>
              <dd><span class="lockbox-status ${lockbox.status}">${lockbox.status === "assigned" ? "Assigned" : "Unassigned"}</span></dd>
            </div>
            <div>
              <dt>MLS #</dt>
              <dd>${lockbox.mlsNumber ? escapeLockboxText(lockbox.mlsNumber) : "Not set"}</dd>
            </div>
            <div>
              <dt>Agent</dt>
              <dd>${lockbox.agentName ? escapeLockboxText(lockbox.agentName) : "Not assigned"}</dd>
            </div>
            <div>
              <dt>Date added to listing</dt>
              <dd>${lockbox.dateAdded ? formatDate(lockbox.dateAdded) : "Not set"}</dd>
            </div>
            <div>
              <dt>Shackle code</dt>
              <dd>${lockbox.shackleCode ? "Saved ••••" : "Not set"}</dd>
            </div>
            <div>
              <dt>Key code</dt>
              <dd>${lockbox.keyCode ? "Saved ••••" : "Not set"}</dd>
            </div>
          </dl>
        </article>
      `;
      },
    )
    .join("");
}

let qrCodes = [];
let qrCodesLoading = false;
let editingQrCodeId = null;

async function qrApi(path = "", options = {}) {
  const session = await window.BrokrBackend?.getSession();
  if (!session?.access_token) throw new Error("Sign in as Broker or Admin to manage QR codes.");
  const response = await fetch(`/api/qr-codes${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session.access_token}`,
      ...(options.headers || {}),
    },
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(payload.error || "Unable to update QR codes.");
  return payload;
}

function qrScanUrl(code) {
  return `${window.location.origin}/q/${encodeURIComponent(code.slug)}`;
}

function qrBodyStyleLabel(style) {
  return { classic: "Classic", rounded: "Clean rounded", dots: "Dots", flow: "Designer" }[style] || "Classic";
}

function qrEyeStyleLabel(style) {
  return { square: "Square", rounded: "Rounded", circle: "Circle", classy: "Designer" }[style] || "Rounded";
}

function renderQrCodes() {
  if (!qrCodes.length) {
    qrCodeList.innerHTML = '<p class="qr-empty">No QR codes yet. Create one for a listing, sign, flyer, or campaign.</p>';
    return;
  }

  qrCodeList.innerHTML = qrCodes
    .map((code) => {
      const isExpanded = expandedQrCodeIds.has(code.id);
      const lastScan = code.last_scanned_at
        ? new Intl.DateTimeFormat("en", { dateStyle: "medium", timeStyle: "short" }).format(new Date(code.last_scanned_at))
        : "Never";
      return `
        <article class="qr-code-card ${code.is_active ? "" : "is-paused"} ${isExpanded ? "is-expanded" : "is-collapsed"}" data-qr-card="${code.id}" tabindex="0" aria-expanded="${isExpanded}">
          <div class="qr-code-main">
            <div class="qr-code-image-wrap">
              <img src="/api/qr-image?slug=${encodeURIComponent(code.slug)}&v=styling-1-${encodeURIComponent(code.updated_at || code.style || "classic")}" alt="QR code for ${escapeLockboxText(code.name)}" loading="lazy" />
            </div>
            <div class="qr-code-content">
              <div class="qr-code-copy">
                <div class="qr-code-title-row">
                  <p class="eyebrow">${code.is_active ? "Active" : "Paused"}</p>
                  <h4>${escapeLockboxText(code.name)}</h4>
                  <p class="qr-style-label">${qrBodyStyleLabel(code.style)} · ${qrEyeStyleLabel(code.eye_style)} eyes</p>
                </div>
                <a class="qr-destination" href="${escapeLockboxText(code.destination_url)}" target="_blank" rel="noopener">${escapeLockboxText(code.destination_url)}</a>
              </div>
              <div class="qr-card-actions split-card-actions" role="group" aria-label="QR code actions">
                <button class="secondary-action" type="button" data-qr-copy="${code.id}">Copy link</button>
                <button class="secondary-action" type="button" data-qr-expand="${code.id}" aria-expanded="${isExpanded}">${isExpanded ? "Collapse" : "Expand"}</button>
              </div>
              <dl class="qr-code-stats">
                <div><dt>Scans</dt><dd>${Number(code.scan_count || 0).toLocaleString()}</dd></div>
                <div><dt>Approx. visitors</dt><dd>${Number(code.unique_visitor_count || 0).toLocaleString()}</dd></div>
                <div><dt>Last scan</dt><dd>${escapeLockboxText(lastScan)}</dd></div>
              </dl>
            </div>
          </div>
          <div class="qr-code-actions">
              <label class="qr-style-control">
                Style
                <select data-qr-style="${code.id}">
                  <option value="classic" ${code.style === "classic" || !code.style ? "selected" : ""}>Classic</option>
                  <option value="rounded" ${code.style === "rounded" ? "selected" : ""}>Clean rounded</option>
                  <option value="flow" ${code.style === "flow" ? "selected" : ""}>Designer</option>
                  <option value="dots" ${code.style === "dots" ? "selected" : ""}>Dots</option>
                </select>
              </label>
              <label class="qr-style-control">
                Eyes
                <select data-qr-eye-style="${code.id}">
                  <option value="rounded" ${code.eye_style === "rounded" || !code.eye_style ? "selected" : ""}>Rounded</option>
                  <option value="classy" ${code.eye_style === "classy" ? "selected" : ""}>Designer</option>
                  <option value="circle" ${code.eye_style === "circle" ? "selected" : ""}>Circle</option>
                  <option value="square" ${code.eye_style === "square" ? "selected" : ""}>Square</option>
                </select>
              </label>
              <button class="secondary-action" type="button" data-qr-edit="${code.id}">Edit name</button>
              <button class="secondary-action" type="button" data-qr-scans="${code.id}">Scan details</button>
              <a class="secondary-action" href="/api/qr-image?slug=${encodeURIComponent(code.slug)}&v=styling-1-${encodeURIComponent(code.updated_at || code.style || "classic")}" download="${escapeLockboxText(code.name.replace(/[^a-z0-9]+/gi, "-").toLowerCase())}-qr.svg">Download SVG (Vector)</a>
              <button class="secondary-action" type="button" data-qr-toggle="${code.id}">${code.is_active ? "Pause" : "Resume"}</button>
              <button class="secondary-action danger-action" type="button" data-qr-delete="${code.id}">Delete</button>
          </div>
        </article>`;
    })
    .join("");
}

async function loadQrCodes() {
  if (qrCodesLoading || !canAccessAdmin()) return;
  qrCodesLoading = true;
  qrCodeList.setAttribute("aria-busy", "true");
  try {
    const payload = await qrApi();
    qrCodes = payload.codes || [];
    renderQrCodes();
  } catch (error) {
    qrCodeList.innerHTML = `<p class="qr-empty">${escapeLockboxText(error.message)}</p>`;
  } finally {
    qrCodesLoading = false;
    qrCodeList.removeAttribute("aria-busy");
  }
}

function openQrCodeForm() {
  editingQrCodeId = null;
  qrCodeForm.reset();
  qrCodeModalTitle.textContent = "Create QR Code";
  qrCodeDestination.disabled = false;
  qrCodeDestinationField.hidden = false;
  qrCodeStyleField.hidden = false;
  qrCodeEyeStyleField.hidden = false;
  qrCodeSubmitButton.textContent = "Create QR Code";
  qrCodeFormMessage.textContent = "The tracked link stays attached to this QR code after it is created.";
  qrCodeFormMessage.classList.remove("error");
  qrCodeModal.hidden = false;
  qrCodeName.focus();
}

function openQrCodeEditForm(code) {
  editingQrCodeId = code.id;
  qrCodeForm.reset();
  qrCodeModalTitle.textContent = "Edit QR Code Name";
  qrCodeName.value = code.name;
  qrCodeDestination.value = qrScanUrl(code);
  qrCodeDestination.disabled = true;
  qrCodeDestinationField.hidden = false;
  qrCodeStyleField.hidden = true;
  qrCodeEyeStyleField.hidden = true;
  qrCodeSubmitButton.textContent = "Save Name";
  qrCodeFormMessage.textContent = "Only the display name will change. The QR code and its tracked link will remain the same.";
  qrCodeFormMessage.classList.remove("error");
  qrCodeModal.hidden = false;
  qrCodeName.focus();
  qrCodeName.select();
}

function closeQrCodeForm() {
  qrCodeModal.hidden = true;
  editingQrCodeId = null;
}

function closeQrScanDetails() {
  qrScanModal.hidden = true;
}

async function openQrScanDetails(code) {
  qrScanModalTitle.textContent = `${code.name} Scan Details`;
  qrScanList.innerHTML = '<p class="qr-scan-empty">Loading recent scans…</p>';
  qrScanModal.hidden = false;
  try {
    const payload = await qrApi(`?id=${encodeURIComponent(code.id)}`);
    if (!payload.scans.length) {
      qrScanList.innerHTML = '<p class="qr-scan-empty">No scans recorded yet.</p>';
      return;
    }
    qrScanList.innerHTML = payload.scans
      .map((scan) => {
        const scannedAt = new Intl.DateTimeFormat("en", { dateStyle: "medium", timeStyle: "short" }).format(new Date(scan.scanned_at));
        const decodeLocation = (value) => {
          try { return decodeURIComponent(String(value || "").replaceAll("+", " ")); } catch { return String(value || ""); }
        };
        const location = [scan.city, scan.region, scan.country].map(decodeLocation).filter(Boolean).join(", ") || "Location unavailable";
        let referrer = "Direct / camera scan";
        if (scan.referrer) {
          try { referrer = new URL(scan.referrer).hostname; } catch { referrer = scan.referrer; }
        }
        return `<article class="qr-scan-row">
          <div><strong>${escapeLockboxText(scannedAt)}</strong><span>${escapeLockboxText(scan.device_type || "Unknown device")}</span></div>
          <div><span>Approx. location</span><strong>${escapeLockboxText(location)}</strong></div>
          <div><span>Source</span><strong>${escapeLockboxText(referrer)}</strong></div>
        </article>`;
      })
      .join("");
  } catch (error) {
    qrScanList.innerHTML = `<p class="qr-scan-empty">${escapeLockboxText(error.message)}</p>`;
  }
}

function renderLockboxAgentOptions() {
  const activeAgentNames = agents
    .filter((agent) => !agent.archived)
    .map((agent) => `${agent.firstName} ${agent.lastName}`.trim())
    .filter(Boolean);
  const agentNames = [...new Set(["Jared Alvey", ...activeAgentNames])];
  lockboxFields.agentName.innerHTML = agentNames
    .map((agentName) => `<option value="${escapeLockboxText(agentName)}">${escapeLockboxText(agentName)}</option>`)
    .join("");
}

function openLockboxModal(lockboxId = null) {
  editingLockboxId = lockboxId;
  lockboxForm.reset();
  renderLockboxAgentOptions();
  const lockbox = lockboxes.find((item) => item.id === lockboxId);
  lockboxModalTitle.textContent = lockbox ? "Edit Lockbox" : "Add Lockbox";
  deleteLockboxButton.hidden = !lockbox;
  lockboxFields.lockboxId.value = lockbox?.lockboxId || "";
  lockboxFields.mlsNumber.value = lockbox?.mlsNumber || "";
  lockboxFields.status.value = lockbox?.status || "assigned";
  lockboxFields.address.value = lockbox?.address || "";
  lockboxFields.agentName.value = lockbox?.agentName || "Jared Alvey";
  lockboxFields.dateAdded.value = lockbox?.dateAdded || (lockbox ? "" : toDateKey(new Date()));
  lockboxFields.shackleCode.value = lockbox?.shackleCode || "";
  lockboxFields.keyCode.value = lockbox?.keyCode || "";
  lockboxFields.showCodes.checked = false;
  lockboxFields.applyCodesToAll.checked = false;
  lockboxFields.shackleCode.type = "password";
  lockboxFields.keyCode.type = "password";
  syncLockboxAssignmentFields();
  lockboxModal.hidden = false;
  lockboxFields.lockboxId.focus();
}

function syncLockboxAssignmentFields() {
  const isAssigned = lockboxFields.status.value === "assigned";
  lockboxFields.address.required = isAssigned;
  lockboxFields.dateAdded.required = isAssigned;
  lockboxFields.mlsNumber.disabled = !isAssigned;
  lockboxFields.address.disabled = !isAssigned;
  lockboxFields.agentName.disabled = !isAssigned;
  lockboxFields.dateAdded.disabled = !isAssigned;
  lockboxFields.mlsNumber.closest("label").classList.toggle("is-optional", !isAssigned);
  lockboxFields.address.closest("label").classList.toggle("is-optional", !isAssigned);
  lockboxFields.dateAdded.closest("label").classList.toggle("is-optional", !isAssigned);
}

function closeLockboxForm() {
  lockboxModal.hidden = true;
  editingLockboxId = null;
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
    licenseReminderDays: brokerContact.licenseReminderDays || 60,
    licenseReminderAgentEnabled: brokerContact.licenseReminderAgentEnabled !== false,
    licenseReminderBrokerEnabled: brokerContact.licenseReminderBrokerEnabled !== false,
    deadlineReminderDays: brokerContact.deadlineReminderDays || 2,
    deadlineReminderAgentEnabled: brokerContact.deadlineReminderAgentEnabled !== false,
    deadlineReminderBrokerEnabled: brokerContact.deadlineReminderBrokerEnabled !== false,
  };
  updateBrokerProfilePreview();
  renderAuthIdentity();
  saveBrokerContact();
  saveBrokerContactToBackend();
  renderInbox();
}

function syncLicenseNotificationFields() {
  licenseNotificationFields.days.value = brokerContact.licenseReminderDays || 60;
  licenseNotificationFields.agentEnabled.checked = brokerContact.licenseReminderAgentEnabled !== false;
  licenseNotificationFields.brokerEnabled.checked = brokerContact.licenseReminderBrokerEnabled !== false;
  deadlineNotificationFields.days.value = brokerContact.deadlineReminderDays || 2;
  deadlineNotificationFields.agentEnabled.checked = brokerContact.deadlineReminderAgentEnabled !== false;
  deadlineNotificationFields.brokerEnabled.checked = brokerContact.deadlineReminderBrokerEnabled !== false;
}

function syncLicenseNotificationSettings() {
  if (!licenseNotificationForm.checkValidity()) return;
  brokerContact = {
    ...brokerContact,
    licenseReminderDays: Math.min(365, Math.max(1, Number(licenseNotificationFields.days.value) || 60)),
    licenseReminderAgentEnabled: licenseNotificationFields.agentEnabled.checked,
    licenseReminderBrokerEnabled: licenseNotificationFields.brokerEnabled.checked,
    deadlineReminderDays: Math.min(30, Math.max(1, Number(deadlineNotificationFields.days.value) || 2)),
    deadlineReminderAgentEnabled: deadlineNotificationFields.agentEnabled.checked,
    deadlineReminderBrokerEnabled: deadlineNotificationFields.brokerEnabled.checked,
  };
  syncLicenseNotificationFields();
  saveBrokerContact();
  saveBrokerContactToBackend();
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
  syncLicenseNotificationFields();
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
    licenseReminderDays: Number(savedContact.license_reminder_days || brokerContact.licenseReminderDays || 60),
    licenseReminderAgentEnabled: savedContact.license_reminder_agent_enabled ?? brokerContact.licenseReminderAgentEnabled,
    licenseReminderBrokerEnabled: savedContact.license_reminder_broker_enabled ?? brokerContact.licenseReminderBrokerEnabled,
    deadlineReminderDays: Number(savedContact.deadline_reminder_days || brokerContact.deadlineReminderDays || 2),
    deadlineReminderAgentEnabled: savedContact.deadline_reminder_agent_enabled ?? brokerContact.deadlineReminderAgentEnabled,
    deadlineReminderBrokerEnabled: savedContact.deadline_reminder_broker_enabled ?? brokerContact.deadlineReminderBrokerEnabled,
  };

  brokerContactFields.name.value = brokerContact.name;
  brokerContactFields.email.value = brokerContact.email;
  brokerContactFields.phone.value = brokerContact.phone;
  brokerContactFields.profileImage.value = "";
  updateBrokerProfilePreview();
  syncLicenseNotificationFields();
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
  window.BrokrBackend?.saveTransactions?.(transactions).catch((error) => {
    console.warn("Unable to save shared transaction records.", error);
  });
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
  const deadlineLabels = new Set(Object.values(transactionDeadlineLabels));

  return getTransactionCalendarEvents(getVisibleTransactions())
    .filter((event) => {
      if (!deadlineLabels.has(event.label) || event.date < todayKey) return false;
      const leadDays = event.label === transactionDeadlineLabels.earnestMoney
        ? 2
        : Number(brokerContact.deadlineReminderDays || 2);
      return event.date <= toDateKey(addDays(today, leadDays));
    })
    .map((event) => {
      const agent = agents.find((candidate) => candidate.id === event.transaction.agentId);

      return {
        id: `deadline-${event.transaction.id}-${event.label}-${event.date}`,
        sourceKey: `contract-deadline:${event.transaction.id}:${event.deadlineKey}:${event.date}`,
        type: "Deadline",
        title: `${event.label} approaching`,
        detail: `${brokerContact.name} should review ${event.transaction.clientName} with ${agent ? `${agent.firstName} ${agent.lastName}` : "the assigned agent"}. Deadline is ${formatDate(event.date)}.`,
        status: "Broker alert",
        receivedDate: todayKey,
        actionLabel: "Review Transaction",
        actionType: "transaction",
        transactionId: event.transaction.id,
      };
    });
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
      sourceKey: `license-expiration:${agent.id}:${agent.licenseExpiration}`,
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

  const currentAgentId = Number(currentAgent?.id || 0);
  const systemItems = systemNotifications
    .filter((notification) => !isAgentUser() || Number(notification.agentId || 0) === currentAgentId)
    .map((notification) => ({
      id: `system-${notification.id}`,
      sourceKey: notification.sourceKey,
      type: notification.type,
      title: notification.title,
      detail: notification.detail,
      status: notification.status || "Reminder",
      receivedDate: notification.createdAt?.slice(0, 10) || todayKey,
      actionLabel: notification.transactionId ? "Review Transaction" : notification.agentId && canAccessAdmin() ? "Open Agent File" : "",
      actionType: notification.transactionId ? "transaction" : notification.agentId && canAccessAdmin() ? "agent" : "",
      transactionId: notification.transactionId,
      agentId: notification.agentId,
    }));

  return [...systemItems, ...licenseItems, ...buildDeadlineEmailItems(), ...uploadItems, ...reviewItems, ...fileItems]
    .filter((item, index, items) => items.findIndex((candidate) => (candidate.sourceKey || candidate.id) === (item.sourceKey || item.id)) === index)
    .filter(isInboxItemActive);
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
      <td data-label="User">
        <div class="agent-identity">
          ${renderUserAvatar(user)}
          <div class="agent-name">
            <strong>${getUserDisplayName(user)}</strong>
            <span>${user.email}</span>
          </div>
        </div>
      </td>
      <td data-label="Linked Agent">${getUserAgentName(user.agentId)}</td>
      <td data-label="Role"><span class="status-pill">${user.role}</span></td>
      <td data-label="File Access">
        <div>${user.canUpload ? "Can upload files" : "No upload access"}</div>
        <div class="license-detail">${user.permissionScope || "Own transactions only"}</div>
      </td>
      <td data-label="Status"><span class="status-pill ${user.status === "Suspended" ? "warning" : ""}">${user.status}</span></td>
      <td data-label="Actions">
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
      const usesFlatFee = (agent.compensationOption || "split") === "flat";
      const flatFee = Number(agent.flatTransactionFee) || 0;
      const production = getAgentProduction(agent.id);
      const isExpanded = expandedCommissionAgentIds.has(agent.id);

      return `
        <article class="commission-row ${isExpanded ? "is-expanded" : "is-collapsed"}" data-commission-card="${agent.id}" tabindex="0" aria-expanded="${isExpanded}">
          <div class="commission-row-main">
            <div class="agent-identity">
              ${renderAgentAvatar(agent)}
              <div class="agent-name">
                <strong>${agent.firstName} ${agent.lastName}</strong>
                <span>${agent.email}</span>
              </div>
            </div>
            <div class="commission-card-actions split-card-actions" role="group" aria-label="Commission rule actions">
              <button class="secondary-action" type="button" data-commission-edit="${agent.id}">Edit</button>
              <button class="secondary-action" type="button" data-commission-expand="${agent.id}" aria-expanded="${isExpanded}">${isExpanded ? "Collapse" : "Expand"}</button>
            </div>
          </div>
          <div class="commission-split">
            ${usesFlatFee
              ? `<span>${formatCurrency(flatFee)} Flat fee</span><span>Agent retains remaining commission</span>`
              : `<span>${agentSplit}% Agent</span><span>${brokerageSplit}% Brokerage</span>`}
            <span>${formatCurrency(production.volume)} Volume</span>
            <span>${formatCurrency(production.commission)} Agent Commission</span>
          </div>
        </article>
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
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayKey = toDateKey(today);
  const isCurrentMonthView =
    calendarView === "month" &&
    calendarDate.getFullYear() === today.getFullYear() &&
    calendarDate.getMonth() === today.getMonth();

  calendarGrid.className = `calendar-grid ${calendarView}-view`;
  calendarGrid.innerHTML = "";
  updateCalendarHeading(days, filteredTransactions);

  days.forEach((day) => {
    const dateKey = toDateKey(day);
    const dayEvents = calendarEvents.filter((event) => event.date === dateKey);
    const isOutsideMonth = calendarView === "month" && day.getMonth() !== calendarDate.getMonth();
    const isBeforeMobileMonthStart = isCurrentMonthView && day < today;
    const tile = document.createElement("article");
    tile.className = `calendar-day${isOutsideMonth ? " outside-range" : ""}${isBeforeMobileMonthStart ? " before-mobile-month-start" : ""}${dateKey === todayKey ? " today" : ""}`;
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
  syncEarnestMoneyDeadline();
}

function getEarnestMoneyDeadline(contractDate) {
  if (!contractDate) return "";
  const date = new Date(`${contractDate}T12:00:00Z`);
  if (Number.isNaN(date.getTime())) return "";
  date.setUTCDate(date.getUTCDate() + 4);
  return date.toISOString().slice(0, 10);
}

function syncEarnestMoneyDeadline() {
  if (!transactionFields.deadlines.earnestMoney) return;
  transactionFields.deadlines.earnestMoney.value = isUnderContractStatus(transactionFields.status.value)
    ? getEarnestMoneyDeadline(transactionFields.contractDate.value)
    : "";
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
    field.value = key === "earnestMoney"
      ? transaction?.deadlines?.[key] || getEarnestMoneyDeadline(transactionFields.contractDate.value)
      : transaction?.deadlines?.[key] || "";
  });
  transactionFields.status.value = getEditableTransactionStatus(transaction);
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
  commissionFields.compensationOption.value = agent.compensationOption || "split";
  commissionFields.agentSplit.value = agentSplit;
  commissionFields.brokerageSplit.value = 100 - agentSplit;
  commissionFields.flatTransactionFee.value = agent.flatTransactionFee || "";
  syncCommissionRuleFields();
  commissionModal.hidden = false;
  (commissionFields.compensationOption.value === "flat" ? commissionFields.flatTransactionFee : commissionFields.agentSplit).focus();
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

function syncCommissionRuleFields() {
  const usesSplit = commissionFields.compensationOption.value === "split";
  commissionAgentSplitField.hidden = !usesSplit;
  commissionBrokerageSplitField.hidden = !usesSplit;
  commissionFlatFeeField.hidden = usesSplit;
  commissionFields.agentSplit.disabled = !usesSplit;
  commissionFields.agentSplit.required = usesSplit;
  commissionFields.brokerageSplit.disabled = !usesSplit;
  commissionFields.flatTransactionFee.disabled = usesSplit;
  commissionFields.flatTransactionFee.required = !usesSplit;
  commissionFormNote.textContent = usesSplit
    ? "Set the default agent/brokerage commission split used for this agent's transactions."
    : "Set the flat fee retained by the brokerage for each closed transaction.";
  if (usesSplit) syncBrokerageSplit();
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
  window.BrokrBackend?.deleteTransaction?.(transaction.id).catch((error) => {
    console.warn("Unable to delete the shared transaction record.", error);
  });
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
  agentFields.roleTitle.value = agent?.roleTitle || "Realtor";
  agentFields.licenseNumber.value = agent?.licenseNumber || "";
  agentFields.email.value = agent?.email || "";
  agentFields.phone.value = agent?.phone || "";
  agentFields.calendarColor.value = agent?.calendarColor || "#837a6d";
  const legacyAddress = splitLegacyAddress(agent?.address);
  agentFields.street.value = agent?.street || legacyAddress.street;
  agentFields.city.value = agent?.city || legacyAddress.city;
  agentFields.state.value = agent?.state || legacyAddress.state;
  agentFields.zip.value = agent?.zip || legacyAddress.zip;
  agentFields.licenseExpiration.value = agent?.licenseExpiration || "";
  agentFields.contractEffectiveDate.value = agent?.contractEffectiveDate || toDateKey(new Date());
  agentFields.compensationOption.value = agent?.compensationOption || "split";
  agentFields.commissionSplit.value = agent?.commissionSplit ?? 70;
  agentFields.flatTransactionFee.value = agent?.flatTransactionFee || "";
  syncAgentCompensationFields();
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
  saveAgents();
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
  window.BrokrBackend?.deleteAgent?.(agentId).catch((error) => {
    console.warn("Unable to delete the shared agent record.", error);
  });
  saveAgents();
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
previewAgentContractButton.addEventListener("click", () => openAgentContract());
sendAgentContractButton.addEventListener("click", sendAgentContractWithDocusign);
closeAgentContractModal.addEventListener("click", closeAgentContract);
agentContractModal.addEventListener("click", (event) => {
  if (event.target === agentContractModal) closeAgentContract();
});
printAgentContractButton.addEventListener("click", () => window.print());
contractDocusignButton.addEventListener("click", sendAgentContractWithDocusign);

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
  const contractButton = event.target.closest("[data-agent-contract]");
  const editButton = event.target.closest("[data-agent-edit]");
  const archiveButton = event.target.closest("[data-agent-archive]");
  const deleteButton = event.target.closest("[data-agent-delete]");
  const agentRow = event.target.closest("tr[data-agent-edit]");

  if (contractButton) {
    const agent = agents.find((item) => item.id === Number(contractButton.dataset.agentContract));
    if (agent) openAgentContract(agent);
    return;
  }

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
  const savedAgent = agents.find((agent) => agent.id === editingAgentId) || {};
  const selectedFile = agentFields.contractFile.files[0];
  updateAgentFileVault({
    ...savedAgent,
    contractFileName: selectedFile?.name || savedAgent.contractFileName || "",
  });
});
agentFields.otherFile.addEventListener("change", () => {
  updateAgentFileTile(agentOtherTile, agentOtherStatus, agentOtherFileName, agentFields.otherFile.files[0]?.name || "", "Optional");
});

deleteAgentContractButton.addEventListener("click", () => {
  const savedAgent = agents.find((agent) => agent.id === editingAgentId);
  const hasContract = Boolean(agentFields.contractFile.files[0] || savedAgent?.contractFileName || savedAgent?.contractGenerated);
  if (!hasContract) return;
  const agentName = `${savedAgent?.firstName || agentFields.firstName.value || "this"} ${savedAgent?.lastName || agentFields.lastName.value || "agent"}`.trim();
  const contractType = agentFields.contractFile.files[0] || savedAgent?.contractFileName ? "uploaded" : "generated";
  const confirmed = window.confirm(
    `Delete ${agentName}'s ${contractType} broker / agent contract?\n\nThis permanently removes the contract record and cannot be undone.`,
  );
  if (!confirmed) return;

  agentFields.contractFile.value = "";
  if (savedAgent) {
    agents = agents.map((agent) =>
      agent.id === savedAgent.id
        ? {
            ...agent,
            contractFileName: "",
            contractFileData: "",
            contractFileType: "",
            contractGenerated: false,
            contractStatus: "Draft",
          }
        : agent,
    );
    saveAgents();
    updateAgentFileVault(agents.find((agent) => agent.id === savedAgent.id));
  } else {
    updateAgentFileVault({});
  }
});
attachPhoneFormatter(agentFields.phone);
agentFields.compensationOption.addEventListener("change", syncAgentCompensationFields);

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
  const selectedContractFile = agentFields.contractFile.files[0];
  const contractFileData = selectedContractFile
    ? await readImageDataUrl(selectedContractFile)
    : existingAgent?.contractFileData || "";
  const contractFileType = selectedContractFile?.type || existingAgent?.contractFileType || "";
  const otherFileName = agentFields.otherFile.files[0]?.name || existingAgent?.otherFileName || "";
  const profileImageSrc =
    (await readImageDataUrl(agentFields.profileImage.files[0])) || existingAgent?.profileImageSrc || "";
  const agentData = {
    id: existingAgent?.id || Date.now(),
    profileImageSrc,
    firstName: agentFields.firstName.value.trim(),
    lastName: agentFields.lastName.value.trim(),
    roleTitle: agentFields.roleTitle.value,
    licenseNumber: agentFields.licenseNumber.value.trim(),
    email: agentFields.email.value.trim(),
    phone: formatPhoneNumber(agentFields.phone.value),
    calendarColor: agentFields.calendarColor.value,
    street: agentFields.street.value.trim(),
    city: agentFields.city.value.trim(),
    state: agentFields.state.value.trim().toUpperCase(),
    zip: agentFields.zip.value.trim(),
    commissionSplit: Math.min(100, Math.max(0, Number(agentFields.commissionSplit.value) || 0)),
    compensationOption: agentFields.compensationOption.value,
    flatTransactionFee: Number(agentFields.flatTransactionFee.value) || 0,
    contractEffectiveDate: agentFields.contractEffectiveDate.value,
    contractStatus: existingAgent?.contractStatus || "Draft",
    licenseFileName,
    contractFileName,
    contractFileData,
    contractFileType,
    contractGenerated: selectedContractFile ? false : Boolean(existingAgent?.contractGenerated),
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
  saveAgents();
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
  renderLockboxes();
  renderInbox();
  renderArchiveQueue();
}

renderAll();
initializeAuth();
loadOfficeListingsFromIdx();

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
officeListingFilters.forEach((button) => {
  button.addEventListener("click", () => {
    officeListingsFilter = button.dataset.officeListingFilter;
    showAllOfficeListings = false;
    officeListingFilters.forEach((filterButton) => {
      const isActive = filterButton === button;
      filterButton.classList.toggle("active", isActive);
      filterButton.setAttribute("aria-selected", String(isActive));
    });
    renderOfficeListings();
  });
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
transactionFields.contractDate.addEventListener("change", syncEarnestMoneyDeadline);
transactionFields.commissionType.addEventListener("change", updateTransactionCommissionFields);
attachPhoneFormatter(transactionFields.clientPhone);
[
  transactionFields.listPrice,
  transactionFields.contractPrice,
  transactionFields.commissionFlatFee,
].forEach(attachCurrencyFormatter);

officeListingsGrid?.addEventListener("click", (event) => {
  const idxListingCard = event.target.closest("[data-idx-listing-key]");
  if (idxListingCard) {
    openIdxListingPreview(idxListingCard.dataset.idxListingKey);
    return;
  }
  const listingCard = event.target.closest("[data-listing-id]");
  if (!listingCard) return;
  openTransactionModal(Number(listingCard.dataset.listingId));
});

officeListingsGrid?.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const idxListingCard = event.target.closest("[data-idx-listing-key]");
  if (idxListingCard) {
    event.preventDefault();
    openIdxListingPreview(idxListingCard.dataset.idxListingKey);
    return;
  }
  const listingCard = event.target.closest("[data-listing-id]");
  if (!listingCard) return;
  event.preventDefault();
  openTransactionModal(Number(listingCard.dataset.listingId));
});

closeIdxListingModal?.addEventListener("click", closeIdxListingPreview);
doneIdxListingModal?.addEventListener("click", closeIdxListingPreview);
idxListingModal?.addEventListener("click", (event) => {
  if (event.target === idxListingModal) closeIdxListingPreview();
});
idxLightboxClose?.addEventListener("click", closeIdxGallery);
idxLightboxPrevious?.addEventListener("click", () => showIdxGalleryPhoto(idxGalleryTargetIndex - 1));
idxLightboxNext?.addEventListener("click", () => showIdxGalleryPhoto(idxGalleryTargetIndex + 1));
idxGalleryLightbox?.addEventListener("click", (event) => {
  if (event.target === idxGalleryLightbox) closeIdxGallery();
});
idxGalleryLightbox?.addEventListener("wheel", (event) => {
  event.preventDefault();
  if (idxGalleryWheelLocked) return;
  idxGalleryWheelLocked = true;
  showIdxGalleryPhoto(idxGalleryTargetIndex + (event.deltaY > 0 || event.deltaX > 0 ? 1 : -1));
  window.setTimeout(() => { idxGalleryWheelLocked = false; }, 280);
}, { passive: false });
idxGalleryLightbox?.addEventListener("touchstart", (event) => {
  idxGalleryTouchStartX = event.changedTouches[0]?.clientX ?? null;
}, { passive: true });
idxGalleryLightbox?.addEventListener("touchend", (event) => {
  if (idxGalleryTouchStartX === null) return;
  const distance = (event.changedTouches[0]?.clientX ?? idxGalleryTouchStartX) - idxGalleryTouchStartX;
  if (Math.abs(distance) > 45) showIdxGalleryPhoto(idxGalleryTargetIndex + (distance < 0 ? 1 : -1));
  idxGalleryTouchStartX = null;
}, { passive: true });
document.addEventListener("keydown", (event) => {
  if (!idxGalleryLightbox || idxGalleryLightbox.hidden) return;
  if (event.key === "Escape") closeIdxGallery();
  if (event.key === "ArrowLeft") showIdxGalleryPhoto(idxGalleryTargetIndex - 1);
  if (event.key === "ArrowRight") showIdxGalleryPhoto(idxGalleryTargetIndex + 1);
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

addLockboxButton.addEventListener("click", () => openLockboxModal());
addQrCodeButton.addEventListener("click", openQrCodeForm);
closeQrCodeModal.addEventListener("click", closeQrCodeForm);
cancelQrCodeButton.addEventListener("click", closeQrCodeForm);
qrCodeModal.addEventListener("click", (event) => {
  if (event.target === qrCodeModal) closeQrCodeForm();
});
qrCodeForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!qrCodeForm.reportValidity()) return;
  const submitButton = qrCodeForm.querySelector('[type="submit"]');
  submitButton.disabled = true;
  qrCodeFormMessage.textContent = editingQrCodeId ? "Saving name…" : "Creating QR code…";
  qrCodeFormMessage.classList.remove("error");
  try {
    await qrApi("", editingQrCodeId
      ? {
          method: "PATCH",
          body: JSON.stringify({ id: editingQrCodeId, name: qrCodeName.value.trim() }),
        }
      : {
          method: "POST",
          body: JSON.stringify({
            name: qrCodeName.value.trim(),
            destinationUrl: qrCodeDestination.value.trim(),
            style: qrCodeStyle.value,
            eyeStyle: qrCodeEyeStyle.value,
          }),
        });
    closeQrCodeForm();
    await loadQrCodes();
  } catch (error) {
    qrCodeFormMessage.textContent = error.message;
    qrCodeFormMessage.classList.add("error");
  } finally {
    submitButton.disabled = false;
  }
});
qrCodeStyle.addEventListener("change", () => {
  if (qrCodeStyle.value === "flow") qrCodeEyeStyle.value = "classy";
});
qrCodeList.addEventListener("click", async (event) => {
  const copyButton = event.target.closest("[data-qr-copy]");
  const editButton = event.target.closest("[data-qr-edit]");
  const expandButton = event.target.closest("[data-qr-expand]");
  const toggleButton = event.target.closest("[data-qr-toggle]");
  const deleteButton = event.target.closest("[data-qr-delete]");
  const scansButton = event.target.closest("[data-qr-scans]");
  const card = event.target.closest("[data-qr-card]");
  if (editButton) {
    const code = qrCodes.find((item) => item.id === editButton.dataset.qrEdit);
    if (code) openQrCodeEditForm(code);
    return;
  }
  if (expandButton) {
    const codeId = expandButton.dataset.qrExpand;
    if (expandedQrCodeIds.has(codeId)) expandedQrCodeIds.delete(codeId);
    else expandedQrCodeIds.add(codeId);
    renderQrCodes();
    return;
  }
  if (copyButton) {
    const code = qrCodes.find((item) => item.id === copyButton.dataset.qrCopy);
    if (!code) return;
    await navigator.clipboard.writeText(qrScanUrl(code));
    const originalText = copyButton.textContent;
    copyButton.textContent = "Copied";
    setTimeout(() => { copyButton.textContent = originalText; }, 1400);
  }
  if (scansButton) {
    const code = qrCodes.find((item) => item.id === scansButton.dataset.qrScans);
    if (code) openQrScanDetails(code);
  }
  if (toggleButton) {
    const code = qrCodes.find((item) => item.id === toggleButton.dataset.qrToggle);
    if (!code) return;
    toggleButton.disabled = true;
    try {
      await qrApi("", { method: "PATCH", body: JSON.stringify({ id: code.id, isActive: !code.is_active }) });
      await loadQrCodes();
    } catch (error) {
      window.alert(error.message);
      toggleButton.disabled = false;
    }
  }
  if (deleteButton) {
    const code = qrCodes.find((item) => item.id === deleteButton.dataset.qrDelete);
    if (!code || !window.confirm(`Delete the QR code “${code.name}” and all of its scan history? This cannot be undone.`)) return;
    deleteButton.disabled = true;
    try {
      await qrApi("", { method: "DELETE", body: JSON.stringify({ id: code.id }) });
      await loadQrCodes();
    } catch (error) {
      window.alert(error.message);
      deleteButton.disabled = false;
    }
  }
  if (card && !event.target.closest("button, a, input, select, textarea, label")) {
    const codeId = card.dataset.qrCard;
    if (expandedQrCodeIds.has(codeId)) expandedQrCodeIds.delete(codeId);
    else expandedQrCodeIds.add(codeId);
    renderQrCodes();
  }
});
qrCodeList.addEventListener("keydown", (event) => {
  const card = event.target.closest("[data-qr-card]");
  if (!card || event.target !== card || (event.key !== "Enter" && event.key !== " ")) return;
  event.preventDefault();
  const codeId = card.dataset.qrCard;
  if (expandedQrCodeIds.has(codeId)) expandedQrCodeIds.delete(codeId);
  else expandedQrCodeIds.add(codeId);
  renderQrCodes();
});
closeQrScanModal.addEventListener("click", closeQrScanDetails);
doneQrScanButton.addEventListener("click", closeQrScanDetails);
qrScanModal.addEventListener("click", (event) => {
  if (event.target === qrScanModal) closeQrScanDetails();
});
qrCodeList.addEventListener("change", async (event) => {
  const styleSelect = event.target.closest("[data-qr-style]");
  const eyeStyleSelect = event.target.closest("[data-qr-eye-style]");
  const select = styleSelect || eyeStyleSelect;
  if (!select) return;
  select.disabled = true;
  try {
    await qrApi("", {
      method: "PATCH",
      body: JSON.stringify(styleSelect
        ? {
            id: styleSelect.dataset.qrStyle,
            style: styleSelect.value,
            ...(styleSelect.value === "flow" ? { eyeStyle: "classy" } : {}),
          }
        : { id: eyeStyleSelect.dataset.qrEyeStyle, eyeStyle: eyeStyleSelect.value }),
    });
    await loadQrCodes();
  } catch (error) {
    window.alert(error.message);
    select.disabled = false;
  }
});
lockboxFields.status.addEventListener("change", syncLockboxAssignmentFields);
lockboxFields.showCodes.addEventListener("change", () => {
  const inputType = lockboxFields.showCodes.checked ? "text" : "password";
  lockboxFields.shackleCode.type = inputType;
  lockboxFields.keyCode.type = inputType;
});
closeLockboxModal.addEventListener("click", closeLockboxForm);
cancelLockboxButton.addEventListener("click", closeLockboxForm);
deleteLockboxButton.addEventListener("click", () => {
  const lockbox = lockboxes.find((item) => item.id === editingLockboxId);
  if (!lockbox) return;
  const lockboxName = lockbox.lockboxId || lockbox.inventoryLabel || "this lockbox";
  if (!window.confirm(`Delete lockbox ${lockboxName} from inventory? This cannot be undone.`)) return;
  lockboxes = lockboxes.filter((item) => item.id !== editingLockboxId);
  saveLockboxes();
  renderLockboxes();
  closeLockboxForm();
});

lockboxModal.addEventListener("click", (event) => {
  if (event.target === lockboxModal) closeLockboxForm();
});

lockboxList.addEventListener("click", (event) => {
  const editButton = event.target.closest("[data-lockbox-edit]");
  const toggleButton = event.target.closest("[data-lockbox-toggle]");
  const card = event.target.closest("[data-lockbox-card]");
  if (editButton) {
    openLockboxModal(Number(editButton.dataset.lockboxEdit));
    return;
  }
  if (toggleButton) {
    const lockboxId = Number(toggleButton.dataset.lockboxToggle);
    if (expandedLockboxIds.has(lockboxId)) expandedLockboxIds.delete(lockboxId);
    else expandedLockboxIds.add(lockboxId);
    renderLockboxes();
    return;
  }
  if (card && !event.target.closest("button, a, input, select, textarea, label")) {
    const lockboxId = Number(card.dataset.lockboxCard);
    if (expandedLockboxIds.has(lockboxId)) expandedLockboxIds.delete(lockboxId);
    else expandedLockboxIds.add(lockboxId);
    renderLockboxes();
  }
});
lockboxList.addEventListener("keydown", (event) => {
  const card = event.target.closest("[data-lockbox-card]");
  if (!card || event.target !== card || (event.key !== "Enter" && event.key !== " ")) return;
  event.preventDefault();
  const lockboxId = Number(card.dataset.lockboxCard);
  if (expandedLockboxIds.has(lockboxId)) expandedLockboxIds.delete(lockboxId);
  else expandedLockboxIds.add(lockboxId);
  renderLockboxes();
});

lockboxForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!lockboxForm.reportValidity()) return;

  const isAssigned = lockboxFields.status.value === "assigned";
  const lockboxData = {
    id: editingLockboxId || Date.now(),
    lockboxId: lockboxFields.lockboxId.value.trim(),
    mlsNumber: isAssigned ? lockboxFields.mlsNumber.value.trim() : "",
    status: lockboxFields.status.value,
    address: isAssigned ? lockboxFields.address.value.trim() : "",
    agentName: isAssigned ? lockboxFields.agentName.value : "",
    dateAdded: isAssigned ? lockboxFields.dateAdded.value : "",
    shackleCode: lockboxFields.shackleCode.value.trim(),
    keyCode: lockboxFields.keyCode.value.trim(),
    inventoryLabel: lockboxes.find((lockbox) => lockbox.id === editingLockboxId)?.inventoryLabel || "",
  };
  lockboxes = editingLockboxId
    ? lockboxes.map((lockbox) => (lockbox.id === editingLockboxId ? lockboxData : lockbox))
    : [lockboxData, ...lockboxes];
  if (lockboxFields.applyCodesToAll.checked) {
    lockboxes = lockboxes.map((lockbox) => ({
      ...lockbox,
      shackleCode: lockboxData.shackleCode,
      keyCode: lockboxData.keyCode,
    }));
  }
  saveLockboxes();
  renderLockboxes();
  closeLockboxForm();
});

transactionTabs.forEach((tab) => {
  tab.addEventListener("click", () => setTransactionFilter(tab.dataset.transactionFilter));
});

transactionSummaryItems.forEach((item) => {
  item.addEventListener("click", () => setTransactionFilter(item.dataset.transactionSummaryFilter));
  item.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    setTransactionFilter(item.dataset.transactionSummaryFilter);
  });
});
setTransactionFilter(transactionFilter);

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
  const editButton = event.target.closest("[data-commission-edit]");
  const expandButton = event.target.closest("[data-commission-expand]");
  const card = event.target.closest("[data-commission-card]");
  if (editButton) {
    openCommissionModal(Number(editButton.dataset.commissionEdit));
    return;
  }
  if (expandButton) {
    const agentId = Number(expandButton.dataset.commissionExpand);
    if (expandedCommissionAgentIds.has(agentId)) expandedCommissionAgentIds.delete(agentId);
    else expandedCommissionAgentIds.add(agentId);
    renderCommissionRules();
    return;
  }
  if (card && !event.target.closest("button, a, input, select, textarea, label")) {
    const agentId = Number(card.dataset.commissionCard);
    if (expandedCommissionAgentIds.has(agentId)) expandedCommissionAgentIds.delete(agentId);
    else expandedCommissionAgentIds.add(agentId);
    renderCommissionRules();
  }
});
commissionList.addEventListener("keydown", (event) => {
  const card = event.target.closest("[data-commission-card]");
  if (!card || event.target !== card || (event.key !== "Enter" && event.key !== " ")) return;
  event.preventDefault();
  const agentId = Number(card.dataset.commissionCard);
  if (expandedCommissionAgentIds.has(agentId)) expandedCommissionAgentIds.delete(agentId);
  else expandedCommissionAgentIds.add(agentId);
  renderCommissionRules();
});

closeCommissionModal.addEventListener("click", closeCommissionForm);
cancelCommissionButton.addEventListener("click", closeCommissionForm);
commissionFields.agentSplit.addEventListener("input", syncBrokerageSplit);
commissionFields.compensationOption.addEventListener("change", syncCommissionRuleFields);

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
  if (commissionFields.compensationOption.value === "split") syncBrokerageSplit();

  agents = agents.map((agent) =>
    agent.id === editingCommissionAgentId
      ? {
          ...agent,
          compensationOption: commissionFields.compensationOption.value,
          commissionSplit: Number(commissionFields.agentSplit.value) || 0,
          flatTransactionFee: Number(commissionFields.flatTransactionFee.value) || 0,
        }
      : agent,
  );
  saveAgents();

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
    listingDate:
      transactionFields.side.value === "seller"
        ? existingTransaction?.listingDate || existingTransaction?.createdAt || toDateKey(new Date())
        : "",
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

function getContrastTextColor(hexColor) {
  const hex = hexColor.replace("#", "");
  if (!/^[\da-f]{6}$/i.test(hex)) return "#2a241c";

  const red = parseInt(hex.slice(0, 2), 16);
  const green = parseInt(hex.slice(2, 4), 16);
  const blue = parseInt(hex.slice(4, 6), 16);
  const luminance = (red * 0.299 + green * 0.587 + blue * 0.114) / 255;

  return luminance > 0.58 ? "#2a241c" : "#ffffff";
}

function setBrandColor(input, colorVariable, textVariable) {
  setColor(input, colorVariable);
  document.documentElement.style.setProperty(textVariable, getContrastTextColor(input.value));
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

function setBrokerageLogos(darkSrc = "", lightSrc = "") {
  const lightBackgroundLogo = darkSrc || lightSrc;
  const darkBackgroundLogo = lightSrc || darkSrc;

  [agentFormLogo, agentContractLogo].forEach((image) => {
    if (!image) return;
    if (lightBackgroundLogo) image.src = lightBackgroundLogo;
    else image.removeAttribute("src");
    image.hidden = !lightBackgroundLogo;
  });

  if (darkBackgroundLogo) {
    if (sidebarBrokerageLogo && sidebarBrokerageLogoImage) {
      sidebarBrokerageLogoImage.src = darkBackgroundLogo;
      sidebarBrokerageLogo.classList.add("has-image");
    }
  } else if (sidebarBrokerageLogo && sidebarBrokerageLogoImage) {
    sidebarBrokerageLogoImage.removeAttribute("src");
    sidebarBrokerageLogo.classList.remove("has-image");
  }

  if (lightBackgroundLogo) {
    if (topbarBrokerageLogo && topbarBrokerageLogoImage) {
      topbarBrokerageLogoImage.src = lightBackgroundLogo;
      topbarBrokerageLogo.classList.add("has-image");
    }
  } else {
    if (topbarBrokerageLogo && topbarBrokerageLogoImage) {
      topbarBrokerageLogoImage.removeAttribute("src");
      topbarBrokerageLogo.classList.remove("has-image");
    }
  }
}

function getCurrentBrandingSettings() {
  return {
    companyName: companyInput.value.trim() || "Lume Real Estate",
    systemName: systemInput.value.trim() || "Brokr",
    primaryColor: primaryColorInput.value,
    accentColor: accentColorInput.value,
    darkLogoSrc: darkLogoPreview?.getAttribute("src") || "",
    lightLogoSrc: lightLogoPreview?.getAttribute("src") || "",
    logoSrc: darkLogoPreview?.getAttribute("src") || "",
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
  if (topbarBrokerageLogoFallback) topbarBrokerageLogoFallback.textContent = companyName;
  if (appAppleTitle) appAppleTitle.content = systemName;
  saveBrandingSetting("brokr-company-name", companyName);
  saveBrandingSetting("brokr-system-name", systemName);
  saveBrandingToBackend();
}

companyInput.addEventListener("input", syncBrandText);
systemInput.addEventListener("input", syncBrandText);

primaryColorInput.addEventListener("input", () => {
  setBrandColor(primaryColorInput, "--forest", "--button-text");
  saveBrandingSetting("brokr-primary-color", primaryColorInput.value);
  saveBrandingToBackend();
});

accentColorInput.addEventListener("input", () => {
  setBrandColor(accentColorInput, "--brass", "--button-hover-text");
  saveBrandingSetting("brokr-accent-color", accentColorInput.value);
  saveBrandingToBackend();
});

darkLogoUpload.addEventListener("change", () => {
  readImage(darkLogoUpload.files[0], (src) => {
    darkLogoPreview.src = src;
    darkLogoPreview.classList.add("has-image");
    setBrokerageLogos(src, lightLogoPreview.getAttribute("src") || "");
    saveBrandingSetting("brokr-dark-logo-src", src);
    saveBrandingSetting("brokr-logo-src", src);
    saveBrandingToBackend();
  });
});

lightLogoUpload.addEventListener("change", () => {
  readImage(lightLogoUpload.files[0], (src) => {
    lightLogoPreview.src = src;
    lightLogoPreview.classList.add("has-image");
    setBrokerageLogos(darkLogoPreview.getAttribute("src") || "", src);
    saveBrandingSetting("brokr-light-logo-src", src);
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
  const savedLegacyLogoSrc = localStorage.getItem("brokr-logo-src");
  const savedDarkLogoSrc = localStorage.getItem("brokr-dark-logo-src") || savedLegacyLogoSrc;
  const savedLightLogoSrc = localStorage.getItem("brokr-light-logo-src") || savedLegacyLogoSrc;
  const savedIconSrc = localStorage.getItem("brokr-icon-src");

  if (savedCompanyName) companyInput.value = savedCompanyName;
  if (savedSystemName) systemInput.value = savedSystemName;
  if (savedPrimaryColor) primaryColorInput.value = savedPrimaryColor;
  if (savedAccentColor) accentColorInput.value = savedAccentColor;

  syncBrandText();
  setBrandColor(primaryColorInput, "--forest", "--button-text");
  setBrandColor(accentColorInput, "--brass", "--button-hover-text");

  if (savedDarkLogoSrc) {
    darkLogoPreview.src = savedDarkLogoSrc;
    darkLogoPreview.classList.add("has-image");
  }
  if (savedLightLogoSrc) {
    lightLogoPreview.src = savedLightLogoSrc;
    lightLogoPreview.classList.add("has-image");
  }
  setBrokerageLogos(savedDarkLogoSrc || "", savedLightLogoSrc || "");

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
  setBrandColor(primaryColorInput, "--forest", "--button-text");
  setBrandColor(accentColorInput, "--brass", "--button-hover-text");

  const backendDarkLogoSrc = savedBranding.dark_logo_src || savedBranding.logo_src || "";
  const backendLightLogoSrc = savedBranding.light_logo_src || savedBranding.logo_src || "";
  if (backendDarkLogoSrc) {
    darkLogoPreview.src = backendDarkLogoSrc;
    darkLogoPreview.classList.add("has-image");
    saveBrandingSetting("brokr-dark-logo-src", backendDarkLogoSrc);
  }
  if (backendLightLogoSrc) {
    lightLogoPreview.src = backendLightLogoSrc;
    lightLogoPreview.classList.add("has-image");
    saveBrandingSetting("brokr-light-logo-src", backendLightLogoSrc);
  }
  setBrokerageLogos(backendDarkLogoSrc, backendLightLogoSrc);

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
      "brokr-dark-logo-src",
      "brokr-light-logo-src",
      "brokr-icon-src",
    ].forEach((key) => localStorage.removeItem(key));
    syncBrandText();
    setBrandColor(primaryColorInput, "--forest", "--button-text");
    setBrandColor(accentColorInput, "--brass", "--button-hover-text");
    [darkLogoPreview, lightLogoPreview].forEach((preview) => {
      preview.removeAttribute("src");
      preview.classList.remove("has-image");
    });
    setBrokerageLogos();
    iconPreview.textContent = "B";
    if (brandMark) brandMark.textContent = "B";
    updateFavicon();
  }, 0);
});

const actionIconPaths = {
  plus: '<path d="M12 5v14M5 12h14"/>',
  user: '<circle cx="12" cy="8" r="3.5"/><path d="M5 20c.8-4 3.1-6 7-6s6.2 2 7 6"/>',
  file: '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v5h5M9 13h6M9 17h6"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  alert: '<circle cx="12" cy="12" r="9"/><path d="M12 7v6M12 17h.01"/>',
  edit: '<path d="m4 20 4.2-1 10-10a2.1 2.1 0 0 0-3-3l-10 10L4 20Z"/><path d="m13.8 7.2 3 3"/>',
  trash: '<path d="M4 7h16M9 7V4h6v3M7 7l1 14h8l1-14M10 11v6M14 11v6"/>',
  archive: '<path d="M4 7h16v14H4zM3 3h18v4H3zM9 12h6"/>',
  eye: '<path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"/><circle cx="12" cy="12" r="2.5"/>',
  send: '<path d="m3 4 18 8-18 8 3-8-3-8Z"/><path d="M6 12h15"/>',
  upload: '<path d="M12 16V4M7 9l5-5 5 5M5 20h14"/>',
  download: '<path d="M12 4v12M7 11l5 5 5-5M5 20h14"/>',
  copy: '<rect x="8" y="8" width="11" height="11" rx="1"/><path d="M16 8V5H5v11h3"/>',
  lock: '<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
  qr: '<path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM15 14h2v2h-2zM18 18h2v2h-2zM14 18h2v2h-2zM18 14h2v2h-2z"/>',
  expand: '<path d="m7 10 5 5 5-5"/>',
  collapse: '<path d="m7 14 5-5 5 5"/>',
  left: '<path d="m15 18-6-6 6-6"/>',
  right: '<path d="m9 18 6-6-6-6"/>',
  print: '<path d="M7 8V3h10v5M7 17H5a2 2 0 0 1-2-2v-5h18v5a2 2 0 0 1-2 2h-2M7 14h10v7H7z"/>',
  refresh: '<path d="M20 7v5h-5M4 17v-5h5M6.5 7a7 7 0 0 1 11.5 1.5L20 12M4 12l2 3.5A7 7 0 0 0 17.5 17"/>',
  pause: '<path d="M8 5v14M16 5v14"/>',
  play: '<path d="m8 5 11 7-11 7Z"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/>',
  grid: '<rect x="4" y="4" width="6" height="6"/><rect x="14" y="4" width="6" height="6"/><rect x="4" y="14" width="6" height="6"/><rect x="14" y="14" width="6" height="6"/>',
};

function getActionIconName(control) {
  if (control.dataset.actionIcon && actionIconPaths[control.dataset.actionIcon]) return control.dataset.actionIcon;
  const text = `${control.textContent || ""} ${control.getAttribute("aria-label") || ""}`.trim().toLowerCase();
  if (/face id|passkey|profile|agent|user/.test(text)) return "user";
  if (/qr/.test(text)) return "qr";
  if (/lockbox/.test(text)) return "lock";
  if (/delete|remove/.test(text)) return "trash";
  if (/archive/.test(text)) return "archive";
  if (/edit/.test(text)) return "edit";
  if (/preview|show|view/.test(text)) return "eye";
  if (/print/.test(text)) return "print";
  if (/download/.test(text)) return "download";
  if (/upload|attach/.test(text)) return "upload";
  if (/send|forward/.test(text)) return "send";
  if (/copy/.test(text)) return "copy";
  if (/collapse/.test(text)) return "collapse";
  if (/expand/.test(text)) return "expand";
  if (/pause/.test(text)) return "pause";
  if (/resume/.test(text)) return "play";
  if (/back|previous/.test(text)) return "left";
  if (/next/.test(text)) return "right";
  if (/forgot|reset/.test(text)) return "refresh";
  if (/cancel|dismiss|close/.test(text)) return "left";
  if (/save|approve|done|closed/.test(text)) return "check";
  if (/pending/.test(text)) return "clock";
  if (/expired/.test(text)) return "alert";
  if (/today|month|week|day|event/.test(text)) return "calendar";
  if (/all/.test(text)) return "grid";
  if (/contract|document|file/.test(text)) return "file";
  if (/add|new|create|task/.test(text) || /^\+/.test(text)) return "plus";
  if (/sign in|login/.test(text)) return "right";
  return "right";
}

function decorateActionControl(control) {
  if (!control || control.classList.contains("has-action-icon")) return;
  if (control.matches(".icon-button, .mobile-menu, .idx-carousel-image, .calendar-event, .overview-schedule-event, .file-link, .file-inline-link")) return;
  const visibleText = control.textContent.trim();
  if (control.querySelector("svg, img") || !visibleText) return;
  const iconName = getActionIconName(control);
  const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  icon.setAttribute("viewBox", "0 0 24 24");
  icon.setAttribute("aria-hidden", "true");
  icon.classList.add("action-button-icon");
  icon.innerHTML = actionIconPaths[iconName] || actionIconPaths.right;
  control.classList.add("has-action-icon");
  control.prepend(icon);
}

function decorateActionControls(root = document) {
  if (root.matches?.("button, .file-upload-action")) decorateActionControl(root);
  root.querySelectorAll?.("button, .file-upload-action").forEach(decorateActionControl);
}

decorateActionControls();
new MutationObserver((mutations) => {
  mutations.forEach((mutation) => mutation.addedNodes.forEach((node) => {
    if (node.nodeType === Node.ELEMENT_NODE) decorateActionControls(node);
  }));
}).observe(document.body, { childList: true, subtree: true });
