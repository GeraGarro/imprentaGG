const services = {
  estudiantiles: {
    category: "Estudiantiles",
    time: "Listo en el día",
    title: "Apuntes, certificados y piezas escolares",
    copy: "Impresión simple o doble faz, color, blanco y negro, cortes y presentación prolija para entregar.",
    note: "A4, A3, color y terminaciones",
    image: "assets/trabajos/img/estudiantiles/ChatGPT Image 16 jul 2026, 11_31_54 p.m..jpg",
    imageAlt: "Certificados impresos y cortados para entrega escolar",
  },
  encuadernados: {
    category: "Encuadernados",
    time: "Terminación prolija",
    title: "Anillados, tapas y carpetas",
    copy: "Armamos material de estudio, manuales y presentaciones con tapas, separadores y espiral.",
    note: "Tapas transparentes, cartulina y espiral",
    image: "assets/trabajos/img/estudiantiles/ChatGPT Image 17 jul 2026, 12_02_30 a.m..jpg",
    imageAlt: "Material encuadernado y preparado para entrega",
  },
  souvenirs: {
    category: "Souvenirs",
    time: "Para eventos",
    title: "Stickers, tarjetas y regalos personalizados",
    copy: "Piezas listas para cumpleaños, emprendimientos, ferias, regalos y fechas especiales.",
    note: "Diseño, impresión, corte y armado",
    image: "assets/trabajos/img/souvenirs/ChatGPT Image 16 jul 2026, 10_57_15 p.m..jpg",
    imageAlt: "Caja personalizada para regalo con diseño impreso",
  },
  fotos: {
    category: "Fotos",
    time: "Alta calidad",
    title: "Fotos, láminas y gigantografías",
    copy: "Imprimimos recuerdos, láminas decorativas y piezas grandes para locales o eventos.",
    note: "Brillo, mate, tamaños chicos y grandes",
    image: "assets/trabajos/img/diseños/ChatGPT Image 16 jul 2026, 09_48_59 p.m..jpg",
    imageAlt: "Etiqueta impresa y cortada en mesa de trabajo",
  },
};

const workImagePaths = [
  "assets/trabajos/img/estudiantiles/ChatGPT Image 16 jul 2026, 11_03_12 p.m..jpg",
  "assets/trabajos/img/estudiantiles/ChatGPT Image 16 jul 2026, 11_29_36 p.m..jpg",
  "assets/trabajos/img/estudiantiles/ChatGPT Image 16 jul 2026, 11_31_54 p.m..jpg",
  "assets/trabajos/img/estudiantiles/ChatGPT Image 16 jul 2026, 11_33_34 p.m..jpg",
  "assets/trabajos/img/estudiantiles/ChatGPT Image 16 jul 2026, 11_37_03 p.m..jpg",
  "assets/trabajos/img/estudiantiles/ChatGPT Image 16 jul 2026, 11_40_35 p.m..jpg",
  "assets/trabajos/img/estudiantiles/ChatGPT Image 16 jul 2026, 11_43_52 p.m..jpg",
  "assets/trabajos/img/estudiantiles/ChatGPT Image 17 jul 2026, 12_00_06 a.m..jpg",
  "assets/trabajos/img/estudiantiles/ChatGPT Image 17 jul 2026, 12_02_30 a.m..jpg",
  "assets/trabajos/img/souvenirs/cajas semanal.jpg",
  "assets/trabajos/img/souvenirs/ChatGPT Image 16 jul 2026, 10_57_15 p.m..jpg",
  "assets/trabajos/img/souvenirs/ChatGPT Image 16 jul 2026, 11_18_34 p.m..jpg",
  "assets/trabajos/img/souvenirs/ChatGPT Image 16 jul 2026, 11_25_49 p.m..jpg",
  "assets/trabajos/img/souvenirs/ChatGPT Image 16 jul 2026, 11_28_08 p.m..jpg",
  "assets/trabajos/img/souvenirs/WhatsApp Image 2026-07-16 at 21.25.44 (1).jpeg",
  "assets/trabajos/img/diseños/ChatGPT Image 16 jul 2026, 09_48_59 p.m..jpg",
  "assets/trabajos/img/diseños/ChatGPT Image 16 jul 2026, 09_52_02 p.m..jpg",
  "assets/trabajos/img/diseños/ChatGPT Image 17 jul 2026, 12_21_38 a.m..jpg",
  "assets/trabajos/img/diseños/ChatGPT Image 17 jul 2026, 12_25_02 a.m..jpg",
  "assets/trabajos/img/diseños/WhatsApp Image 2026-07-16 at 21.25.40.jpeg",
  "assets/trabajos/img/diseños/WhatsApp Image 2026-07-16 at 21.25.44 (3).jpeg",
];

const workVideos = [
  { title: "Encuadernado profesional", src: "assets/trabajos/movie/trabajo-01-web.webm", poster: "assets/trabajos/movie/trabajo-01-poster.webp" },
  { title: "Cajita de regalo con bombones", src: "assets/trabajos/movie/trabajo-02-web.webm", poster: "assets/trabajos/movie/trabajo-02-poster.webp" },
  { title: "caja chica san valentin", src: "assets/trabajos/movie/trabajo-03-web.webm", poster: "assets/trabajos/movie/trabajo-03-poster.webp" },
  { title: "Caja de Bombones grande", src: "assets/trabajos/movie/trabajo-04-web.webm", poster: "assets/trabajos/movie/trabajo-04-poster.webp" },
  { title: "Cajita semanal", src: "assets/trabajos/movie/trabajo-05-web.webm", poster: "assets/trabajos/movie/trabajo-05-poster.webp" },
  { title: "cuaderno de anotaciones personalizado", src: "assets/trabajos/movie/trabajo-06-web.webm", poster: "assets/trabajos/movie/trabajo-06-poster.webp" },
];

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const homeIntro = document.querySelector("[data-home-intro]");
const header = document.querySelector("[data-header]");
const previewCard = document.querySelector("[data-preview-card]");
const tabs = document.querySelectorAll("[data-service]");
const galleryTabs = document.querySelector("[data-gallery-tabs]");
const workGallery = document.querySelector("[data-work-gallery]");
const workGallerySection = document.querySelector(".work-gallery-section");
const rouletteTrack = document.querySelector("[data-roulette-track]");
const rouletteScene = rouletteTrack?.closest(".roulette-scene");
const rouletteControls = document.querySelector("[data-roulette-controls]");
const roulettePrevious = document.querySelector("[data-roulette-previous]");
const rouletteNext = document.querySelector("[data-roulette-next]");
const rouletteCategory = document.querySelector("[data-roulette-category]");
const rouletteTitle = document.querySelector("[data-roulette-title]");
const rouletteCount = document.querySelector("[data-roulette-count]");
const previewCategory = document.querySelector("[data-preview-category]");
const previewTime = document.querySelector("[data-preview-time]");
const previewTitle = document.querySelector("[data-preview-title]");
const previewCopy = document.querySelector("[data-preview-copy]");
const previewNote = document.querySelector("[data-preview-note]");
const previewImage = document.querySelector("[data-preview-image]");
const revealItems = document.querySelectorAll("[data-reveal]");
const parallaxItems = document.querySelectorAll("[data-parallax-speed]");
const workVideoPlayer = document.querySelector("[data-work-player]");
const workVideo = document.querySelector("[data-work-video]");
const workVideoSource = document.querySelector("[data-work-video-source]");
const workVideoTitle = document.querySelector("[data-work-video-title]");
const workVideoCount = document.querySelector("[data-work-video-count]");
const workVideoSequence = document.querySelector("[data-work-video-sequence]");
const workVideoPrevious = document.querySelector("[data-work-video-previous]");
const workVideoNext = document.querySelector("[data-work-video-next]");
const paletteSwatches = document.querySelectorAll("[data-bg-option]");
const budgetForm = document.querySelector("[data-budget-form]");
const budgetOverview = document.querySelector("[data-budget-overview]");
const budgetOverviewContent = document.querySelector("[data-budget-overview-content]");
const budgetEditor = document.querySelector("[data-budget-editor]");
const budgetToolButtons = [...document.querySelectorAll("[data-budget-tool]")];
const budgetToolPanels = [...document.querySelectorAll("[data-budget-tool-panel]")];
const budgetUpload = document.querySelector("[data-budget-upload]");
const budgetFile = document.querySelector("[data-budget-file]");
const budgetFileName = document.querySelector("[data-budget-file-name]");
const budgetDocumentList = document.querySelector("[data-budget-document-list]");
const budgetItemsCount = document.querySelector("[data-budget-items]");
const budgetDocumentsCount = document.querySelector("[data-budget-documents]");
const budgetPhotosCount = document.querySelector("[data-budget-photos]");
const budgetStickersCount = document.querySelector("[data-budget-stickers]");
const budgetTotal = document.querySelector("[data-budget-total]");
const budgetTotalNote = document.querySelector("[data-budget-total-note]");
const budgetStatus = document.querySelector("[data-budget-status]");
const budgetWhatsapp = document.querySelector("[data-budget-whatsapp]");
const budgetSummary = document.querySelector("[data-budget-summary]");
const budgetSection = document.querySelector(".budget-section");
const budgetSession = document.querySelector("[data-budget-session]");
const budgetSessionStatus = document.querySelector("[data-budget-session-status]");
const budgetSessionDetail = document.querySelector("[data-budget-session-detail]");
const budgetSessionAction = document.querySelector("[data-budget-session-action]");
const budgetDelivery = document.querySelector("[data-budget-delivery]");
const budgetDeliveryKicker = document.querySelector("[data-budget-delivery-kicker]");
const budgetDeliveryTitle = document.querySelector("[data-budget-delivery-title]");
const budgetDeliveryDescription = document.querySelector("[data-budget-delivery-description]");
const budgetConsent = document.querySelector("[data-budget-consent]");
const budgetConsentBox = document.querySelector("[data-budget-consent-box]");
const budgetProgress = document.querySelector("[data-budget-progress]");
const budgetProgressLabel = document.querySelector("[data-budget-progress-label]");
const budgetProgressValue = document.querySelector("[data-budget-progress-value]");
const budgetProgressBar = document.querySelector("[data-budget-progress-bar]");
const budgetProgressDetail = document.querySelector("[data-budget-progress-detail]");
const budgetPhotoSize = document.querySelector("[data-budget-photo-size]");
const budgetPhotoSizeOutput = document.querySelector("[data-budget-photo-size-output]");
const budgetPhotoQuantity = document.querySelector("[data-budget-photo-quantity]");
const budgetPhotoPreview = document.querySelector("[data-budget-photo-preview]");
const budgetPhotoList = document.querySelector("[data-budget-photo-list]");
const budgetStickerSize = document.querySelector("[data-budget-sticker-size]");
const budgetStickerSizeOutput = document.querySelector("[data-budget-sticker-size-output]");
const budgetStickerMaterial = document.querySelector("[data-budget-sticker-material]");
const budgetStickerQuantity = document.querySelector("[data-budget-sticker-quantity]");
const budgetStickerPreview = document.querySelector("[data-budget-sticker-preview]");
const budgetAddSticker = document.querySelector("[data-budget-add-sticker]");
const budgetStickerList = document.querySelector("[data-budget-sticker-list]");
const budgetRunning = document.querySelector("[data-budget-running]");
const budgetRunningList = document.querySelector("[data-budget-running-list]");
const budgetToolPdfCount = document.querySelector("[data-budget-tool-pdf-count]");
const budgetToolPhotoCount = document.querySelector("[data-budget-tool-photo-count]");
const budgetToolStickerCount = document.querySelector("[data-budget-tool-sticker-count]");
let serviceCards = [];
const screenSections = [...document.querySelectorAll("[data-screen]")];
const colorSchemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
const compactIntroQuery = window.matchMedia("(max-width: 620px)");
const transitionLayer = document.createElement("div");
const serviceImagePreview = document.createElement("div");
const rouletteAutoplayDelay = 4200;
const BUDGET_PRINT_PRICES = {
  bn: 150,
  color: 200,
};
const BUDGET_BINDING_PRICE = 2500;
const BUDGET_PHOTO_FORMATS = Object.freeze({
  5: { label: "5 × 5 cm", price: 500, width: 5, height: 5 },
  6: { label: "6 × 6 cm", price: 500, width: 6, height: 6 },
  7: { label: "7 × 7 cm", price: 500, width: 7, height: 7 },
  8: { label: "8 × 8 cm", price: 500, width: 8, height: 8 },
  9: { label: "9 × 9 cm", price: 500, width: 9, height: 9 },
  10: { label: "10 × 10 cm", price: 1000, width: 10, height: 10 },
  11: { label: "11 × 11 cm", price: 1000, width: 11, height: 11 },
  12: { label: "12 × 12 cm", price: 1000, width: 12, height: 12 },
  15: { label: "15 × 15 cm", price: 1500, width: 15, height: 15 },
  a4: { label: "A4", price: 2500, width: 20.2, height: 29 },
});
const BUDGET_SIZE_STEPS = Object.freeze(["5", "6", "7", "8", "9", "10", "11", "12", "15", "a4"]);
const BUDGET_STICKER_MATERIALS = Object.freeze({
  mate: { label: "Papel mate", price: 2500 },
  brillante: { label: "Papel brillante", price: 3000 },
  transparente: { label: "Papel transparente", price: 3500 },
  holografico: { label: "Papel holográfico", price: 4000 },
});
const BUDGET_PHOTO_SHEET_PRICE = 2500;
const BUDGET_WHATSAPP_NUMBER = "5492665050096";
const A4_WIDTH = 20.2;
const A4_HEIGHT = 29;
const BUDGET_MAX_FILES = 6;
const BUDGET_MAX_FILE_SIZE = 20 * 1024 * 1024;
const BUDGET_MAX_ORDER_SIZE = 60 * 1024 * 1024;

let ticking = false;
let isScreenJumping = false;
let wheelIntent = 0;
let wheelDirection = 0;
let wheelResetTimer;
let screenSettleTimer;
let touchStartY = 0;
let touchIntent = 0;
let canStepTouchScreen = false;
let activeServiceCard;
let isServicePreviewPinned = false;
let servicePreviewCloseTimer;
let budgetDocuments = [];
let budgetQuoteItems = [];
let activeBudgetTool = "pdf";
let isBudgetFocused = false;
let isBudgetProcessing = false;
let isBudgetSubmitting = false;
let budgetFocusNoticeTimer;
let budgetEntryArrivalTimer;
let budgetEntryHighlightTimer;
let activeWorkVideoIndex = 0;
let isWorkVideoVisible = false;
let workVideoSwitchTimer;
let workVideoLoadVersion = 0;
let pdfLibModulePromise;

transitionLayer.className = "screen-transition-layer";
transitionLayer.setAttribute("aria-hidden", "true");
document.body.appendChild(transitionLayer);

serviceImagePreview.className = "service-image-preview";
serviceImagePreview.setAttribute("aria-hidden", "true");
serviceImagePreview.innerHTML = `
  <div class="service-image-preview-shell">
    <img alt="">
    <div class="service-image-preview-caption">
      <div>
        <span></span>
        <strong></strong>
      </div>
      <button class="service-image-preview-close" type="button" aria-label="Cerrar vista ampliada">×</button>
    </div>
  </div>
`;
document.body.appendChild(serviceImagePreview);

const servicePreviewImage = serviceImagePreview.querySelector("img");
const servicePreviewKicker = serviceImagePreview.querySelector("span");
const servicePreviewTitle = serviceImagePreview.querySelector("strong");
const servicePreviewClose = serviceImagePreview.querySelector("button");

function completeHomeIntro() {
  if (!homeIntro) return;

  homeIntro.classList.add("is-leaving");
  const exitDuration = compactIntroQuery.matches ? 420 : 760;
  window.setTimeout(() => {
    document.body.classList.remove("has-home-intro");
    homeIntro.remove();
    requestScrollUpdate();
  }, prefersReducedMotion ? 140 : exitDuration);
}

function initHomeIntro() {
  if (!homeIntro) {
    document.body.classList.remove("has-home-intro");
    return;
  }

  let hasCompleted = false;
  const finishIntro = () => {
    if (hasCompleted) return;
    hasCompleted = true;
    window.setTimeout(completeHomeIntro, 360);
  };

  const introLogo = homeIntro.querySelector(".home-intro-logo");
  introLogo?.addEventListener("animationend", finishIntro, { once: true });

  // Give the browser a painted initial state before starting the CSS animations.
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => homeIntro.classList.add("is-running"));
  });

  window.setTimeout(finishIntro, 6500);
}

function formatBudgetCurrency(value) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(Number.isFinite(value) ? value : 0);
}

function normalizeBudgetAmount(value) {
  return Math.max(1, Number.parseInt(value || "1", 10) || 1);
}

function normalizeBudgetInteger(value, minimum = 1, maximum = 5000) {
  const parsed = Number.parseInt(value || String(minimum), 10);
  return Math.min(Math.max(Number.isFinite(parsed) ? parsed : minimum, minimum), maximum);
}

function normalizeBudgetDecimal(value, minimum = 0.5, maximum = 28.7) {
  const parsed = Number.parseFloat(String(value || minimum).replace(",", "."));
  const normalized = Number.isFinite(parsed) ? parsed : minimum;
  return Math.min(Math.max(Math.round(normalized * 10) / 10, minimum), maximum);
}

function getDocumentNotebookCount(documentItem) {
  const copies = normalizeBudgetAmount(documentItem.copies);
  return Math.min(normalizeBudgetAmount(documentItem.notebooks), copies);
}

function getBudgetUnitPrice(mode) {
  return BUDGET_PRINT_PRICES[mode] || BUDGET_PRINT_PRICES.bn;
}

function getBudgetPageCount() {
  return budgetDocuments.reduce((total, documentItem) => total + documentItem.pages, 0);
}

function getBudgetQuoteItems(type) {
  return budgetQuoteItems.filter((item) => item.type === type);
}

function getBudgetItemCount() {
  return budgetDocuments.length + budgetQuoteItems.length;
}

function createBudgetItemKey(type) {
  return `${type}-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

function getBudgetRangeSize(control) {
  const index = normalizeBudgetInteger(control?.value, 0, BUDGET_SIZE_STEPS.length - 1);
  return BUDGET_SIZE_STEPS[index] || BUDGET_SIZE_STEPS[0];
}

function getBudgetSizeDimensions(size) {
  const key = BUDGET_SIZE_STEPS.includes(String(size).toLowerCase())
    ? String(size).toLowerCase()
    : "5";
  if (key === "a4") return { key, label: "A4", width: A4_WIDTH, height: A4_HEIGHT };
  const value = Number(key);
  return { key, label: `${value} × ${value} cm`, width: value, height: value };
}

function getBudgetStickerMaterial(value) {
  const key = Object.hasOwn(BUDGET_STICKER_MATERIALS, value) ? value : "mate";
  return { key, ...BUDGET_STICKER_MATERIALS[key] };
}

function calculateStickerLayout(width, height, quantity) {
  const stickerWidth = normalizeBudgetDecimal(width, 0.5, A4_HEIGHT);
  const stickerHeight = normalizeBudgetDecimal(height, 0.5, A4_HEIGHT);
  const requested = normalizeBudgetInteger(quantity, 1, 5000);

  const getLayout = (itemWidth, itemHeight, rotated) => {
    const columns = Math.floor(A4_WIDTH / itemWidth);
    const rows = Math.floor(A4_HEIGHT / itemHeight);
    return {
      columns: Math.max(0, columns),
      rows: Math.max(0, rows),
      perSheet: Math.max(0, columns * rows),
      rotated,
    };
  };

  const regular = getLayout(stickerWidth, stickerHeight, false);
  const rotated = getLayout(stickerHeight, stickerWidth, true);
  const best = rotated.perSheet > regular.perSheet ? rotated : regular;

  return {
    width: stickerWidth,
    height: stickerHeight,
    quantity: requested,
    ...best,
    sheets: best.perSheet > 0 ? Math.ceil(requested / best.perSheet) : 0,
  };
}

function setBudgetRangeProgress(control) {
  if (!control) return;
  const minimum = Number(control.min) || 0;
  const maximum = Number(control.max) || 100;
  const current = Number(control.value) || minimum;
  const progress = maximum === minimum ? 0 : ((current - minimum) / (maximum - minimum)) * 100;
  control.style.setProperty("--range-progress", `${progress}%`);
}

function getDocumentSheetCount(documentItem) {
  const pages = Math.max(0, documentItem.pages || 0);
  const baseSheets = documentItem.sides === "doble" ? Math.ceil(pages / 2) : pages;
  return baseSheets * normalizeBudgetAmount(documentItem.copies);
}

function getDocumentPrintTotal(documentItem) {
  return getDocumentSheetCount(documentItem) * getBudgetUnitPrice(documentItem.mode);
}

function getDocumentBindingTotal(documentItem) {
  return documentItem.binding
    ? getDocumentNotebookCount(documentItem) * BUDGET_BINDING_PRICE
    : 0;
}

function getDocumentTotal(documentItem) {
  return getDocumentPrintTotal(documentItem) + getDocumentBindingTotal(documentItem);
}

function getBudgetTotals() {
  const totals = budgetDocuments.reduce((result, documentItem) => {
    const sheets = getDocumentSheetCount(documentItem);
    const printTotal = getDocumentPrintTotal(documentItem);
    const bindingTotal = getDocumentBindingTotal(documentItem);

    result.pages += documentItem.pages || 0;
    result.sheets += sheets;
    result.printTotal += printTotal;
    result.bindingTotal += bindingTotal;
    result.total += printTotal + bindingTotal;

    return result;
  }, {
    pages: 0,
    sheets: 0,
    printTotal: 0,
    bindingTotal: 0,
    photoTotal: 0,
    stickerTotal: 0,
    pendingItems: 0,
    total: 0,
  });

  budgetQuoteItems.forEach((item) => {
    if (item.type === "photo") {
      const details = getPhotoItemDetails(item);
      totals.photoTotal += details.total;
      totals.total += details.total;
    }

    if (item.type === "sticker") {
      const details = getStickerItemDetails(item);
      totals.stickerTotal += details.total;
      totals.total += details.total;
    }
  });

  return totals;
}

function getBudgetDocumentKey(file) {
  return `${file.name}-${file.size}-${file.lastModified}`;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);
}

function renderBudgetDocuments() {
  if (budgetFileName) {
    budgetFileName.textContent = budgetDocuments.length === 0
      ? "Seleccioná o arrastrá tus archivos"
      : `${budgetDocuments.length} PDF${budgetDocuments.length > 1 ? "s" : ""} cargado${budgetDocuments.length > 1 ? "s" : ""}`;
  }

  if (!budgetDocumentList) return;

  budgetDocumentList.innerHTML = budgetDocuments.map((documentItem, index) => `
    <li class="budget-document-card" data-budget-tone="${index % 6}">
      <div class="budget-document-head">
        <div class="budget-document-index">PDF ${index + 1}</div>
        <div class="budget-document-name">
          <strong title="${escapeHtml(documentItem.name)}">${escapeHtml(documentItem.name)}</strong>
          <span>${documentItem.pages || 0} página${documentItem.pages === 1 ? "" : "s"} detectada${documentItem.pages === 1 ? "" : "s"}</span>
        </div>
        <button type="button" data-budget-remove="${escapeHtml(documentItem.key)}" aria-label="Quitar ${escapeHtml(documentItem.name)}">×</button>
      </div>
      <div class="budget-document-controls">
        <label class="budget-control budget-control-mode">
          Tipo
          <select data-budget-doc-mode="${escapeHtml(documentItem.key)}">
            <option value="bn"${documentItem.mode === "bn" ? " selected" : ""}>B&N - $150 por hoja</option>
            <option value="color"${documentItem.mode === "color" ? " selected" : ""}>Color - $200 por hoja</option>
          </select>
        </label>
        <label class="budget-control budget-control-sides">
          Caras
          <select data-budget-doc-sides="${escapeHtml(documentItem.key)}">
            <option value="simple"${documentItem.sides === "simple" ? " selected" : ""}>Simple faz</option>
            <option value="doble"${documentItem.sides === "doble" ? " selected" : ""}>Doble faz</option>
          </select>
        </label>
        <label class="budget-control budget-control-copies">
          Copias
          <input type="number" min="1" step="1" value="${normalizeBudgetAmount(documentItem.copies)}" data-budget-doc-copies="${escapeHtml(documentItem.key)}">
        </label>
        <label class="budget-control budget-control-binding budget-check">
          <input type="checkbox" data-budget-doc-binding="${escapeHtml(documentItem.key)}"${documentItem.binding ? " checked" : ""}>
          Anillado
        </label>
        <label class="budget-control budget-control-notebooks${documentItem.binding ? "" : " is-disabled"}">
          Cuadernos a anillar
          <input type="number" min="1" max="${normalizeBudgetAmount(documentItem.copies)}" step="1" value="${getDocumentNotebookCount(documentItem)}" data-budget-doc-notebooks="${escapeHtml(documentItem.key)}"${documentItem.binding ? "" : " disabled"}>
          <small class="budget-control-hint">Máximo: ${normalizeBudgetAmount(documentItem.copies)}</small>
        </label>
      </div>
      <div class="budget-document-total">
        <span data-budget-doc-meta="${escapeHtml(documentItem.key)}">${getBudgetDocumentMeta(documentItem)}</span>
        <strong data-budget-doc-total="${escapeHtml(documentItem.key)}">${formatBudgetCurrency(getDocumentTotal(documentItem))}</strong>
      </div>
    </li>
  `).join("");
}

function getPhotoItemDetails(item) {
  const format = BUDGET_PHOTO_FORMATS[item.size] || BUDGET_PHOTO_FORMATS[5];
  const quantity = normalizeBudgetInteger(item.quantity, 1, 500);
  const layout = calculateStickerLayout(format.width, format.height, quantity);
  const isSingleUnit = quantity === 1;
  return {
    format,
    quantity,
    ...layout,
    isSingleUnit,
    sheetPrice: BUDGET_PHOTO_SHEET_PRICE,
    total: isSingleUnit ? format.price : layout.sheets * BUDGET_PHOTO_SHEET_PRICE,
  };
}

function getStickerItemDetails(item) {
  const dimensions = getBudgetSizeDimensions(item.size ?? item.width);
  const material = getBudgetStickerMaterial(item.material);
  const layout = calculateStickerLayout(dimensions.width, dimensions.height, item.quantity);
  return {
    ...layout,
    size: dimensions.key,
    sizeLabel: dimensions.label,
    material,
    sheetPrice: material.price,
    total: layout.sheets * material.price,
  };
}

function renderBudgetQuoteItems() {
  const photoItems = getBudgetQuoteItems("photo");
  const stickerItems = getBudgetQuoteItems("sticker");

  if (budgetPhotoList) {
    budgetPhotoList.innerHTML = photoItems.map((item, index) => {
      const details = getPhotoItemDetails(item);
      return `
        <li class="budget-text-item budget-text-item-photo">
          <div class="budget-text-item-index">Foto ${index + 1}</div>
          <div class="budget-text-item-copy">
            <strong>${escapeHtml(details.format.label)} · ${details.quantity} unidad${details.quantity === 1 ? "" : "es"}</strong>
            <span>${details.isSingleUnit
              ? `${formatBudgetCurrency(details.format.price)} precio individual`
              : `${details.perSheet} por A4 · ${details.sheets} hoja${details.sheets === 1 ? "" : "s"} × ${formatBudgetCurrency(details.sheetPrice)}`}</span>
          </div>
          <strong class="budget-text-item-total">${formatBudgetCurrency(details.total)}</strong>
          <button type="button" data-budget-remove-quote="${escapeHtml(item.key)}" aria-label="Quitar fotografías ${details.format.label}">×</button>
        </li>`;
    }).join("");
  }

  if (budgetStickerList) {
    budgetStickerList.innerHTML = stickerItems.map((item, index) => {
      const details = getStickerItemDetails(item);
      return `
        <li class="budget-text-item budget-text-item-sticker">
          <div class="budget-text-item-index">Sticker ${index + 1}</div>
          <div class="budget-text-item-copy">
            <strong>${escapeHtml(details.sizeLabel)} · ${details.quantity} unidad${details.quantity === 1 ? "" : "es"}</strong>
            <span>${escapeHtml(details.material.label)} · ${details.perSheet} por A4 · ${details.sheets} plancha${details.sheets === 1 ? "" : "s"} × ${formatBudgetCurrency(details.sheetPrice)}</span>
          </div>
          <strong class="budget-text-item-total">${formatBudgetCurrency(details.total)}</strong>
          <button type="button" data-budget-remove-quote="${escapeHtml(item.key)}" aria-label="Quitar stickers ${escapeHtml(details.sizeLabel)}">×</button>
        </li>`;
    }).join("");
  }

  if (budgetToolPdfCount) budgetToolPdfCount.textContent = String(budgetDocuments.length);
  if (budgetToolPhotoCount) budgetToolPhotoCount.textContent = String(photoItems.length);
  if (budgetToolStickerCount) budgetToolStickerCount.textContent = String(stickerItems.length);
}

function renderBudgetPhotoPreview() {
  if (!budgetPhotoPreview || !budgetPhotoSize || !budgetPhotoQuantity) return;
  const selectedSize = getBudgetRangeSize(budgetPhotoSize);
  const format = BUDGET_PHOTO_FORMATS[selectedSize] || BUDGET_PHOTO_FORMATS[5];
  const quantity = normalizeBudgetInteger(budgetPhotoQuantity.value, 1, 500);
  const layout = calculateStickerLayout(format.width, format.height, quantity);
  const isSingleUnit = quantity === 1;
  const total = isSingleUnit ? format.price : layout.sheets * BUDGET_PHOTO_SHEET_PRICE;
  if (budgetPhotoSizeOutput) budgetPhotoSizeOutput.textContent = format.label;
  setBudgetRangeProgress(budgetPhotoSize);
  budgetPhotoPreview.innerHTML = `
    <div><span>Pedido</span><strong>${quantity} foto${quantity === 1 ? "" : "s"}${isSingleUnit ? ` · ${formatBudgetCurrency(format.price)}` : ""}</strong></div>
    <div><span>Por hoja A4</span><strong>${layout.perSheet}</strong></div>
    <div><span>Hojas necesarias</span><strong>${layout.sheets}</strong></div>
    <div class="is-total"><span>Subtotal</span><strong>${formatBudgetCurrency(total)}</strong></div>`;
}

function renderBudgetStickerPreview() {
  if (!budgetStickerPreview || !budgetStickerSize || !budgetStickerMaterial || !budgetStickerQuantity) return;
  const size = getBudgetRangeSize(budgetStickerSize);
  const dimensions = getBudgetSizeDimensions(size);
  const material = getBudgetStickerMaterial(budgetStickerMaterial.value);
  const layout = calculateStickerLayout(
    dimensions.width,
    dimensions.height,
    budgetStickerQuantity.value,
  );
  const total = layout.sheets * material.price;
  if (budgetStickerSizeOutput) budgetStickerSizeOutput.textContent = dimensions.label;
  setBudgetRangeProgress(budgetStickerSize);

  budgetStickerPreview.innerHTML = layout.perSheet > 0
    ? `<div><span>Pedido</span><strong>${layout.quantity} sticker${layout.quantity === 1 ? "" : "s"} · ${escapeHtml(material.label)}</strong></div>
       <div><span>Por hoja A4</span><strong>${layout.perSheet}</strong></div>
       <div><span>Planchas necesarias</span><strong>${layout.sheets}</strong></div>
       <div class="is-total"><span>Subtotal</span><strong>${formatBudgetCurrency(total)}</strong></div>`
    : "<span>Ese tamaño no entra en el área imprimible A4.</span><strong>Revisá las medidas</strong>";
  if (budgetAddSticker) budgetAddSticker.disabled = layout.perSheet < 1;
}

function getBudgetOverviewRows() {
  const documentRows = budgetDocuments.map((documentItem, index) => ({
    label: `PDF ${index + 1}`,
    title: documentItem.name,
    detail: `${documentItem.pages || 0} pág. · ${documentItem.mode === "color" ? "Color" : "B&N"} · ${documentItem.sides === "doble" ? "Doble faz" : "Simple faz"} · ${normalizeBudgetAmount(documentItem.copies)} copia${normalizeBudgetAmount(documentItem.copies) === 1 ? "" : "s"}`,
    total: formatBudgetCurrency(getDocumentTotal(documentItem)),
    pending: false,
  }));

  const quoteRows = budgetQuoteItems.map((item) => {
    if (item.type === "photo") {
      const details = getPhotoItemDetails(item);
      return {
        label: "Foto",
        title: `${details.format.label} · ${details.quantity} unidad${details.quantity === 1 ? "" : "es"}`,
        detail: details.isSingleUnit
          ? `${formatBudgetCurrency(details.format.price)} precio individual`
          : `${details.perSheet} por A4 · ${details.sheets} hoja${details.sheets === 1 ? "" : "s"} × ${formatBudgetCurrency(details.sheetPrice)}`,
        total: formatBudgetCurrency(details.total),
        pending: false,
      };
    }

    const details = getStickerItemDetails(item);
    return {
      label: "Sticker",
      title: `${details.sizeLabel} · ${details.quantity} unidad${details.quantity === 1 ? "" : "es"}`,
      detail: `${details.material.label} · ${details.perSheet} por A4 · ${details.sheets} plancha${details.sheets === 1 ? "" : "s"} × ${formatBudgetCurrency(details.sheetPrice)}`,
      total: formatBudgetCurrency(details.total),
      pending: false,
    };
  });

  return [...documentRows, ...quoteRows];
}

function renderBudgetOverview() {
  if (!budgetOverviewContent) return;
  const rows = getBudgetOverviewRows();

  if (!rows.length) {
    budgetOverviewContent.innerHTML = `
      <div class="budget-overview-heading">
        <span>Nuevo presupuesto</span>
        <strong>¿Qué trabajo querés cotizar?</strong>
        <p>Elegí una categoría para abrir el configurador.</p>
      </div>
      <div class="budget-overview-options">
        <button type="button" data-budget-overview-start="pdf"><span>PDF</span><strong>Impresiones y anillado</strong></button>
        <button type="button" data-budget-overview-start="photo"><span>Foto</span><strong>Formatos fotográficos</strong></button>
        <button type="button" data-budget-overview-start="sticker"><span>A4</span><strong>Stickers autoadhesivos</strong></button>
      </div>`;
    return;
  }

  const totals = getBudgetTotals();
  budgetOverviewContent.innerHTML = `
    <div class="budget-overview-heading">
      <span>Presupuesto guardado</span>
      <strong>${rows.length} trabajo${rows.length === 1 ? "" : "s"} cargado${rows.length === 1 ? "" : "s"}</strong>
      <p>Resumen de solo lectura. Abrí el configurador para modificar cantidades o agregar trabajos.</p>
    </div>
    <ul class="budget-overview-list">
      ${rows.map((row) => `
        <li>
          <span>${escapeHtml(row.label)}</span>
          <div><strong>${escapeHtml(row.title)}</strong><small>${escapeHtml(row.detail)}</small></div>
          <strong${row.pending ? ' class="is-pending"' : ""}>${escapeHtml(row.total)}</strong>
        </li>`).join("")}
    </ul>
    <div class="budget-overview-total">
      <div>
        <span>Total calculado</span>
        <strong>${formatBudgetCurrency(totals.total)}</strong>
        <small>Incluye impresiones, fotos y planchas A4 autoadhesivas</small>
      </div>
      <button class="button button-primary" type="button" data-budget-overview-edit>Continuar editando</button>
    </div>`;
}

function renderBudgetRunningList() {
  if (!budgetRunning || !budgetRunningList) return;
  const rows = getBudgetOverviewRows();
  budgetRunning.hidden = rows.length === 0;
  budgetRunningList.innerHTML = rows.map((row) => `
    <li>
      <span>${escapeHtml(row.label)}</span>
      <div>
        <strong>${escapeHtml(row.title)}</strong>
        <small>${escapeHtml(row.detail)}</small>
      </div>
      <strong>${escapeHtml(row.total)}</strong>
    </li>`).join("");
}

function setBudgetTool(tool) {
  activeBudgetTool = ["pdf", "photo", "sticker"].includes(tool) ? tool : "pdf";
  budgetToolButtons.forEach((button) => {
    const isActive = button.dataset.budgetTool === activeBudgetTool;
    button.setAttribute("aria-selected", String(isActive));
    button.classList.toggle("is-active", isActive);
  });
  budgetToolPanels.forEach((panel) => {
    panel.hidden = panel.dataset.budgetToolPanel !== activeBudgetTool;
  });
  if (activeBudgetTool === "photo") syncBudgetPhotoItem();
}

function getBudgetDocumentMeta(documentItem) {
  const sheets = getDocumentSheetCount(documentItem);
  const notebooks = getDocumentNotebookCount(documentItem);
  const bindingLabel = documentItem.binding
    ? `${notebooks} anillado${notebooks === 1 ? "" : "s"}`
    : "sin anillado";

  return `${sheets} hoja${sheets === 1 ? "" : "s"} · ${bindingLabel}`;
}

function refreshBudgetDocumentPreview(key) {
  const documentItem = budgetDocuments.find((item) => item.key === key);
  if (!documentItem || !budgetDocumentList) return;

  budgetDocumentList.querySelectorAll("[data-budget-doc-meta]").forEach((element) => {
    if (element.dataset.budgetDocMeta === key) {
      element.textContent = getBudgetDocumentMeta(documentItem);
    }
  });

  budgetDocumentList.querySelectorAll("[data-budget-doc-total]").forEach((element) => {
    if (element.dataset.budgetDocTotal === key) {
      element.textContent = formatBudgetCurrency(getDocumentTotal(documentItem));
    }
  });
}

function getBudgetDraft() {
  return {
    documents: budgetDocuments.map((documentItem) => ({
      name: documentItem.name,
      size: documentItem.file?.size || 0,
      pages: Math.max(0, Number.parseInt(documentItem.pages || "0", 10) || 0),
      mode: documentItem.mode,
      sides: documentItem.sides,
      copies: normalizeBudgetAmount(documentItem.copies),
      binding: documentItem.binding,
      notebooks: documentItem.binding ? getDocumentNotebookCount(documentItem) : 0,
    })),
    quoteItems: budgetQuoteItems.map((item) => {
      if (item.type === "photo") {
        return {
          type: "photo",
          size: item.size,
          quantity: normalizeBudgetInteger(item.quantity, 1, 500),
        };
      }

      const dimensions = getBudgetSizeDimensions(item.size ?? item.width);
      const material = getBudgetStickerMaterial(item.material);
      return {
          type: "sticker",
          size: dimensions.key,
          width: dimensions.width,
          height: dimensions.height,
          material: material.key,
          quantity: normalizeBudgetInteger(item.quantity, 1, 5000),
        };
    }),
  };
}

function updateBudgetWhatsapp() {
  if (!budgetWhatsapp) return;

  const hasItems = getBudgetItemCount() > 0;
  budgetWhatsapp.disabled = isBudgetSubmitting || !hasItems;
  budgetWhatsapp.textContent = isBudgetSubmitting
    ? budgetDocuments.length ? "Guardando pedido..." : "Abriendo WhatsApp..."
    : budgetDocuments.length
      ? "Crear pedido y abrir WhatsApp"
      : hasItems
        ? "Abrir WhatsApp con presupuesto"
        : "Agregá un trabajo para continuar";
}

function queueBudgetEntryHighlight() {
  if (!budgetSection) return;

  window.clearTimeout(budgetEntryArrivalTimer);
  window.clearTimeout(budgetEntryHighlightTimer);
  budgetEntryArrivalTimer = window.setTimeout(() => {
    setBudgetTool("pdf");
    setBudgetFocus(true);
  }, prefersReducedMotion ? 0 : 980);
}

function updateBudgetEstimate() {
  if (!budgetTotal) return;

  const totals = getBudgetTotals();
  const photoItems = getBudgetQuoteItems("photo");
  const stickerItems = getBudgetQuoteItems("sticker");

  if (budgetItemsCount) budgetItemsCount.textContent = String(getBudgetItemCount());
  if (budgetDocumentsCount) budgetDocumentsCount.textContent = String(budgetDocuments.length);
  if (budgetPhotosCount) budgetPhotosCount.textContent = String(photoItems.length);
  if (budgetStickersCount) budgetStickersCount.textContent = String(stickerItems.length);
  budgetTotal.textContent = formatBudgetCurrency(totals.total);
  if (budgetTotalNote) {
    const a4Sheets = stickerItems.reduce((sum, item) => sum + getStickerItemDetails(item).sheets, 0);
    budgetTotalNote.textContent = a4Sheets
      ? `${a4Sheets} plancha${a4Sheets === 1 ? "" : "s"} A4 autoadhesiva${a4Sheets === 1 ? "" : "s"} incluida${a4Sheets === 1 ? "" : "s"}`
      : "";
  }
  renderBudgetOverview();
  renderBudgetRunningList();
  updateBudgetWhatsapp();
}

function updateBudgetDocument(key, values) {
  budgetDocuments = budgetDocuments.map((documentItem) => {
    if (documentItem.key !== key) return documentItem;

    const updatedDocument = { ...documentItem, ...values };
    updatedDocument.copies = normalizeBudgetAmount(updatedDocument.copies);
    updatedDocument.notebooks = getDocumentNotebookCount(updatedDocument);
    return updatedDocument;
  });
}

function updateBudgetSessionUI() {
  const hasDocuments = budgetDocuments.length > 0;
  const itemCount = getBudgetItemCount();
  const hasItems = itemCount > 0;
  const hasSession = isBudgetFocused || isBudgetProcessing;

  budgetForm?.classList.toggle("has-documents", hasDocuments);
  budgetForm?.classList.toggle("has-items", hasItems);
  budgetForm?.classList.toggle("is-editing", isBudgetFocused);
  if (budgetOverview) budgetOverview.hidden = isBudgetFocused;
  if (budgetEditor) budgetEditor.hidden = !isBudgetFocused;
  if (budgetSummary) budgetSummary.hidden = !isBudgetFocused;
  if (budgetDelivery) budgetDelivery.hidden = !isBudgetFocused || !hasItems;
  if (budgetStatus) budgetStatus.hidden = !isBudgetFocused;
  if (budgetWhatsapp) budgetWhatsapp.hidden = !isBudgetFocused;
  if (budgetConsentBox) budgetConsentBox.hidden = !hasDocuments;

  if (budgetDeliveryKicker) budgetDeliveryKicker.textContent = hasDocuments ? "Entrega segura" : "Continuar por WhatsApp";
  if (budgetDeliveryTitle) {
    budgetDeliveryTitle.textContent = hasDocuments
      ? "Pedido privado con tus PDFs"
      : "Presupuesto listo para enviar";
  }
  if (budgetDeliveryDescription) {
    budgetDeliveryDescription.textContent = hasDocuments
      ? budgetQuoteItems.length
        ? "Los PDFs se guardarán durante 7 días. Las imágenes de fotos y stickers se envían luego por WhatsApp."
        : "Los PDFs se guardarán temporalmente durante 7 días para que la imprenta pueda descargarlos."
      : "Las imágenes no se cargan en la web: las enviarás directamente en la conversación con la imprenta.";
  }

  if (!budgetSession) return;

  budgetSession.hidden = !hasSession;
  budgetSession.classList.remove("is-paused");

  if (budgetSessionStatus) {
    budgetSessionStatus.textContent = isBudgetSubmitting
      ? hasDocuments ? "Guardando pedido" : "Preparando WhatsApp"
      : isBudgetProcessing
      ? "Analizando PDFs"
      : "Configurando presupuesto";
  }

  if (budgetSessionDetail) {
    budgetSessionDetail.textContent = isBudgetSubmitting
      ? "No cierres esta pantalla"
      : isBudgetProcessing && !hasDocuments
      ? "Preparando tus archivos"
      : hasItems
      ? `${itemCount} trabajo${itemCount === 1 ? "" : "s"} listo${itemCount === 1 ? "" : "s"} para editar`
      : "Elegí PDFs, fotos o stickers";
  }

  if (budgetSessionAction) {
    budgetSessionAction.disabled = isBudgetSubmitting;
    budgetSessionAction.textContent = isBudgetSubmitting ? "Guardando" : "Salir";
    budgetSessionAction.setAttribute("aria-label", "Salir del modo presupuesto");
  }
}

function setBudgetFocus(active, options = {}) {
  const nextState = Boolean(active);
  const focusScrollTop = nextState && budgetSection ? budgetSection.offsetTop : null;
  if (nextState === isBudgetFocused) {
    updateBudgetSessionUI();
    return;
  }

  isBudgetFocused = nextState;
  document.body.classList.toggle("is-budget-focused", isBudgetFocused);
  budgetSection?.classList.toggle("is-budget-focused", isBudgetFocused);
  header?.toggleAttribute("inert", isBudgetFocused);
  screenSections.forEach((section) => {
    if (section !== budgetSection) section.toggleAttribute("inert", isBudgetFocused);
  });

  if (isBudgetFocused) {
    isScreenJumping = false;
    document.documentElement.classList.remove("is-screen-jumping");
    document.body.classList.remove("is-screen-jumping");
    document.body.style.removeProperty("--screen-direction");
    clearScreenTransitionClasses();
    if (Number.isFinite(focusScrollTop)) window.scrollTo(0, focusScrollTop);
    budgetSection?.scrollTo({ top: 0, behavior: "auto" });
    budgetForm?.scrollTo({ top: 0, behavior: "auto" });
    if (options.focusSession) window.requestAnimationFrame(() => budgetSessionAction?.focus());
  } else if (options.restoreFocus !== false) {
    window.requestAnimationFrame(() => {
      const overviewAction = budgetOverview?.querySelector("[data-budget-overview-edit], [data-budget-overview-start]");
      overviewAction?.focus?.({ preventScroll: true });
    });
  }

  updateBudgetSessionUI();
  renderBudgetOverview();
}

function signalBudgetFocusBoundary() {
  if (!isBudgetFocused || !budgetSession) return;

  window.clearTimeout(budgetFocusNoticeTimer);
  budgetSession.classList.remove("is-boundary-notice");
  void budgetSession.offsetWidth;
  budgetSession.classList.add("is-boundary-notice");
  budgetFocusNoticeTimer = window.setTimeout(() => {
    budgetSession.classList.remove("is-boundary-notice");
  }, 760);
}

function canScrollBudgetFocus(target, direction) {
  if (!(target instanceof Element)) return false;
  const candidates = [
    target.closest(".budget-document-list"),
    target.closest(".budget-editor"),
    target.closest(".budget-panel"),
  ].filter(Boolean);

  return candidates.some((element) => direction > 0
    ? element.scrollTop + element.clientHeight < element.scrollHeight - 2
    : element.scrollTop > 2);
}

function syncBudgetNotebookControl(key) {
  const documentItem = budgetDocuments.find((item) => item.key === key);
  if (!documentItem || !budgetDocumentList) return;

  const copies = normalizeBudgetAmount(documentItem.copies);
  const notebooks = getDocumentNotebookCount(documentItem);

  budgetDocumentList.querySelectorAll("[data-budget-doc-notebooks]").forEach((element) => {
    if (element.dataset.budgetDocNotebooks !== key) return;
    element.max = String(copies);
    element.value = String(notebooks);

    const hint = element.parentElement?.querySelector(".budget-control-hint");
    if (hint) hint.textContent = `Máximo: ${copies}`;
  });
}

async function addBudgetFiles(fileList) {
  const incomingFiles = [...(fileList || [])];
  const pdfFiles = incomingFiles.filter((file) => {
    const fileName = file.name.toLowerCase();
    return file.type === "application/pdf" || fileName.endsWith(".pdf");
  });

  if (!pdfFiles.length) {
    if (budgetStatus) budgetStatus.textContent = "Arrastrá o seleccioná archivos PDF para poder cotizar.";
    return;
  }

  const existingKeys = new Set(budgetDocuments.map((documentItem) => documentItem.key));
  const uniqueFiles = pdfFiles.filter((file) => !existingKeys.has(getBudgetDocumentKey(file)));
  const sizedFiles = uniqueFiles.filter((file) => file.size <= BUDGET_MAX_FILE_SIZE);

  if (uniqueFiles.length && !sizedFiles.length) {
    if (budgetStatus) budgetStatus.textContent = "Cada PDF puede pesar hasta 20 MB. Elegí una versión más liviana.";
    return;
  }

  const availableSlots = Math.max(0, BUDGET_MAX_FILES - budgetDocuments.length);
  if (!availableSlots) {
    if (budgetStatus) budgetStatus.textContent = `Podés incluir hasta ${BUDGET_MAX_FILES} PDFs por pedido.`;
    return;
  }

  const currentSize = budgetDocuments.reduce((sum, documentItem) => sum + (documentItem.file?.size || 0), 0);
  let selectedSize = 0;
  const filesToAdd = sizedFiles.filter((file) => {
    if (selectedSize + currentSize + file.size > BUDGET_MAX_ORDER_SIZE) return false;
    selectedSize += file.size;
    return true;
  }).slice(0, availableSlots);

  if (!filesToAdd.length) {
    if (budgetStatus) {
      budgetStatus.textContent = uniqueFiles.length
        ? "El pedido puede reunir hasta 60 MB. Quitá un PDF o reducí su tamaño."
        : "Esos PDFs ya estaban cargados en el presupuesto.";
    }
    return;
  }

  if (budgetStatus) budgetStatus.textContent = `Leyendo ${filesToAdd.length} PDF${filesToAdd.length > 1 ? "s" : ""} y contando páginas...`;
  isBudgetProcessing = true;
  setBudgetFocus(true);

  try {
    const nextDocuments = await Promise.all(filesToAdd.map(async (file) => ({
      key: getBudgetDocumentKey(file),
      file,
      name: file.name,
      pages: await countPdfPages(file),
      mode: "bn",
      sides: "simple",
      copies: 1,
      binding: false,
      notebooks: 1,
    })));

    budgetDocuments = [...budgetDocuments, ...nextDocuments];
    if (budgetConsent) budgetConsent.checked = false;
    if (budgetProgress) budgetProgress.hidden = true;
    budgetDelivery?.classList.remove("is-consent-required");
    renderBudgetDocuments();
    renderBudgetQuoteItems();
    window.requestAnimationFrame(() => {
      const newestDocument = budgetDocumentList?.lastElementChild;
      if (budgetDocumentList && newestDocument instanceof HTMLElement) {
        const listCanScroll = budgetDocumentList.scrollHeight > budgetDocumentList.clientHeight + 2;

        if (listCanScroll) {
          budgetDocumentList.scrollTop = newestDocument.offsetTop - budgetDocumentList.offsetTop;
        } else if (budgetForm) {
          const panelRect = budgetForm.getBoundingClientRect();
          const documentRect = newestDocument.getBoundingClientRect();
          const sessionOffset = budgetSession?.offsetHeight || 0;

          budgetForm.scrollTo({
            top: budgetForm.scrollTop + documentRect.top - panelRect.top - sessionOffset - 18,
            behavior: prefersReducedMotion ? "auto" : "smooth",
          });
        }

        newestDocument.classList.add("is-ready-to-edit");

        if (window.innerWidth > 620) {
          newestDocument.querySelector("select")?.focus({ preventScroll: true });
        }

        window.setTimeout(() => newestDocument.classList.remove("is-ready-to-edit"), 1200);
      }
    });

    const pageCount = getBudgetPageCount();
    if (budgetStatus) {
      const skippedCount = incomingFiles.length - filesToAdd.length;
      const prefix = skippedCount > 0 ? `Se agregaron ${filesToAdd.length} PDFs válidos. ` : "";
      budgetStatus.textContent = pageCount > 0
        ? `${prefix}Configurá impresión, caras, copias y anillado en cada tarjeta. El total se actualiza al instante.`
        : `${prefix}Configurá el trabajo; el servidor verificará las páginas al guardar el pedido.`;
    }
  } catch {
    if (budgetStatus) budgetStatus.textContent = "No pudimos leer uno de los PDFs. Probá con otro archivo o consultanos por WhatsApp.";
  }

  isBudgetProcessing = false;
  if (getBudgetItemCount() || isBudgetFocused) {
    updateBudgetSessionUI();
  } else {
    setBudgetFocus(false, { restoreFocus: false });
  }
  updateBudgetEstimate();
}

function syncBudgetPhotoItem() {
  if (!budgetPhotoSize || !budgetPhotoQuantity) return;
  const selectedSize = getBudgetRangeSize(budgetPhotoSize);
  const size = BUDGET_PHOTO_FORMATS[selectedSize] ? selectedSize : "5";
  const quantity = normalizeBudgetInteger(budgetPhotoQuantity.value, 1, 500);
  const currentPhoto = budgetQuoteItems.find((item) => item.type === "photo");
  const nextPhoto = {
    key: currentPhoto?.key || createBudgetItemKey("photo"),
    type: "photo",
    size,
    quantity,
  };

  budgetQuoteItems = currentPhoto
    ? budgetQuoteItems.map((item) => item.key === currentPhoto.key ? nextPhoto : item)
    : [...budgetQuoteItems, nextPhoto];
  renderBudgetQuoteItems();
  renderBudgetPhotoPreview();
  updateBudgetEstimate();
  updateBudgetSessionUI();
  if (budgetStatus) budgetStatus.textContent = "Cotización fotográfica actualizada. Las imágenes se adjuntarán directamente en WhatsApp.";
}

function addBudgetStickerItem() {
  if (!budgetStickerSize || !budgetStickerMaterial || !budgetStickerQuantity) return;
  const size = getBudgetRangeSize(budgetStickerSize);
  const dimensions = getBudgetSizeDimensions(size);
  const material = getBudgetStickerMaterial(budgetStickerMaterial.value);
  const layout = calculateStickerLayout(
    dimensions.width,
    dimensions.height,
    budgetStickerQuantity.value,
  );
  if (layout.perSheet < 1) {
    if (budgetStatus) budgetStatus.textContent = "Revisá las medidas: el sticker debe entrar en el área imprimible A4.";
    return;
  }

  budgetQuoteItems = [...budgetQuoteItems, {
    key: createBudgetItemKey("sticker"),
    type: "sticker",
    size,
    material: material.key,
    quantity: layout.quantity,
  }];
  renderBudgetQuoteItems();
  renderBudgetStickerPreview();
  updateBudgetEstimate();
  updateBudgetSessionUI();
  if (budgetStatus) budgetStatus.textContent = `Stickers agregados en ${material.label.toLowerCase()}. Las planchas A4 ya están incluidas en el total.`;
  budgetStickerList?.lastElementChild?.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "nearest" });
}

function removeBudgetQuoteItem(key) {
  budgetQuoteItems = budgetQuoteItems.filter((item) => item.key !== key);
  renderBudgetQuoteItems();
  updateBudgetEstimate();
  updateBudgetSessionUI();
  if (budgetStatus) budgetStatus.textContent = "Trabajo quitado. El resumen se actualizó.";
}

function detectPdfPagesFromText(text) {
  const pageMatches = text.match(/\/Type\s*\/Page\b/g);
  if (pageMatches?.length) return pageMatches.length;

  const countMatches = [...text.matchAll(/\/Count\s+(\d+)/g)]
    .map((match) => Number.parseInt(match[1], 10))
    .filter(Number.isFinite);

  return countMatches.length ? Math.max(...countMatches) : 0;
}

async function countPdfPages(file) {
  const buffer = await file.arrayBuffer();
  try {
    pdfLibModulePromise ||= import("/vendor/pdf-lib.esm.min.js");
    const { PDFDocument } = await pdfLibModulePromise;
    const documentPdf = await PDFDocument.load(buffer, {
      ignoreEncryption: true,
      throwOnInvalidObject: false,
      updateMetadata: false,
    });
    return documentPdf.getPageCount();
  } catch {
    const text = new TextDecoder("latin1").decode(buffer);
    return detectPdfPagesFromText(text);
  }
}

function setBudgetProgress(value, label, detail) {
  const normalizedValue = Math.min(100, Math.max(0, Math.round(value)));
  if (budgetProgress) budgetProgress.hidden = false;
  if (budgetProgressBar) budgetProgressBar.value = normalizedValue;
  if (budgetProgressValue) budgetProgressValue.textContent = `${normalizedValue}%`;
  if (budgetProgressLabel) budgetProgressLabel.textContent = label;
  if (budgetProgressDetail) budgetProgressDetail.textContent = detail;
}

function setBudgetSubmitting(active) {
  isBudgetSubmitting = Boolean(active);
  budgetForm?.classList.toggle("is-submitting", isBudgetSubmitting);
  budgetForm?.setAttribute("aria-busy", String(isBudgetSubmitting));
  budgetUpload?.toggleAttribute("inert", isBudgetSubmitting);
  budgetDocumentList?.toggleAttribute("inert", isBudgetSubmitting);
  if (budgetConsent) budgetConsent.disabled = isBudgetSubmitting;
  updateBudgetWhatsapp();
  updateBudgetSessionUI();
}

async function readBudgetApiResponse(response) {
  let payload;
  try {
    payload = await response.json();
  } catch {
    payload = null;
  }

  if (!response.ok) {
    throw new Error(payload?.message || "No pudimos comunicarnos con el servidor de pedidos.");
  }
  return payload;
}

function uploadBudgetPdf(uploadUrl, token, file, onProgress) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open("PUT", uploadUrl);
    request.responseType = "json";
    request.setRequestHeader("Content-Type", "application/pdf");
    request.setRequestHeader("X-Order-Token", token);

    request.upload.addEventListener("progress", (event) => {
      if (event.lengthComputable) onProgress(event.loaded / event.total);
    });

    request.addEventListener("load", () => {
      const payload = request.response || {};
      if (request.status >= 200 && request.status < 300) {
        resolve(payload);
      } else {
        reject(new Error(payload.message || `No pudimos guardar ${file.name}.`));
      }
    });
    request.addEventListener("error", () => reject(new Error(`Se interrumpió la carga de ${file.name}.`)));
    request.addEventListener("abort", () => reject(new Error(`Se canceló la carga de ${file.name}.`)));
    request.send(file);
  });
}

function buildTextBudgetWhatsAppMessage() {
  const itemLines = budgetQuoteItems.map((item, index) => {
    if (item.type === "photo") {
      const details = getPhotoItemDetails(item);
      const pricingLine = details.isSingleUnit
        ? `Precio individual: ${formatBudgetCurrency(details.format.price)}`
        : `${details.sheets} hoja${details.sheets === 1 ? "" : "s"} A4 × ${formatBudgetCurrency(details.sheetPrice)}`;
      return [
        `Foto ${index + 1}: ${details.format.label} · ${details.quantity} unidad${details.quantity === 1 ? "" : "es"}`,
        `${details.perSheet} por hoja A4 · ${pricingLine}`,
        `Subtotal: ${formatBudgetCurrency(details.total)}`,
      ].join("\n");
    }

    const details = getStickerItemDetails(item);
    return [
      `Stickers ${index + 1}: ${details.sizeLabel} · ${details.quantity} unidad${details.quantity === 1 ? "" : "es"}`,
      `${details.material.label} · ${details.perSheet} por plancha A4 · ${details.sheets} plancha${details.sheets === 1 ? "" : "s"}`,
      `${formatBudgetCurrency(details.sheetPrice)} por plancha A4`,
      `Subtotal: ${formatBudgetCurrency(details.total)}`,
    ].join("\n");
  });
  const totals = getBudgetTotals();

  return [
    "Hola Impresiones GG, preparé este presupuesto desde la web.",
    "*Presupuesto de fotos y stickers*",
    itemLines.join("\n\n"),
    `*Total calculado: ${formatBudgetCurrency(totals.total)}*`,
    "Voy a enviar las imágenes para diseñar o imprimir por este chat.",
  ].filter(Boolean).join("\n\n");
}

async function createAndUploadBudgetOrder() {
  setBudgetProgress(2, "Creando pedido", "Preparando un espacio privado para tus archivos...");
  const createResponse = await fetch("/api/presupuestos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(getBudgetDraft()),
  });
  const order = await readBudgetApiResponse(createResponse);

  if (!Array.isArray(order.documents) || order.documents.length !== budgetDocuments.length) {
    throw new Error("El servidor no pudo relacionar todos los PDFs del pedido.");
  }

  for (let index = 0; index < order.documents.length; index += 1) {
    const serverDocument = order.documents[index];
    const localDocument = budgetDocuments[index];
    const start = 5 + (index / order.documents.length) * 82;
    const portion = 82 / order.documents.length;

    const uploadResult = await uploadBudgetPdf(
      serverDocument.uploadUrl,
      order.token,
      localDocument.file,
      (fileProgress) => setBudgetProgress(
        start + fileProgress * portion,
        `Guardando PDF ${index + 1} de ${order.documents.length}`,
        localDocument.name,
      ),
    );

    if (Number.isInteger(uploadResult.pages) && uploadResult.pages > 0) {
      localDocument.pages = uploadResult.pages;
      refreshBudgetDocumentPreview(localDocument.key);
      updateBudgetEstimate();
    }
  }

  setBudgetProgress(92, "Verificando presupuesto", "Confirmando páginas, configuración y total final...");
  const finalizeResponse = await fetch(`/api/presupuestos/${encodeURIComponent(order.orderId)}/finalizar`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token: order.token }),
  });
  return readBudgetApiResponse(finalizeResponse);
}

async function handleBudgetStart() {
  if (isBudgetSubmitting) return;

  if (!getBudgetItemCount()) {
    if (budgetStatus) budgetStatus.textContent = "Agregá al menos un trabajo para continuar.";
    return;
  }

  if (budgetDocuments.length && !budgetConsent?.checked) {
    budgetDelivery?.classList.remove("is-consent-required");
    void budgetDelivery?.offsetWidth;
    budgetDelivery?.classList.add("is-consent-required");
    budgetConsent?.focus();
    if (budgetStatus) budgetStatus.textContent = "Confirmá la carga temporal para poder crear el pedido privado.";
    return;
  }

  if (!budgetDocuments.length) {
    setBudgetSubmitting(true);
    if (budgetStatus) budgetStatus.textContent = "Abriendo WhatsApp con el presupuesto listo para enviar.";
    const whatsappUrl = `https://wa.me/${BUDGET_WHATSAPP_NUMBER}?text=${encodeURIComponent(buildTextBudgetWhatsAppMessage())}`;
    setBudgetSubmitting(false);
    window.location.assign(whatsappUrl);
    return;
  }

  budgetDelivery?.classList.remove("is-consent-required");
  setBudgetSubmitting(true);
  if (budgetStatus) budgetStatus.textContent = "Estamos creando el pedido. No cierres esta pantalla.";

  try {
    const delivery = await createAndUploadBudgetOrder();
    setBudgetProgress(100, `Pedido ${delivery.orderId} listo`, "Abriendo WhatsApp con el detalle y el enlace a los PDFs...");
    if (budgetStatus) {
      budgetStatus.textContent = "WhatsApp se abrirá con el mensaje preparado. Revisalo y tocá Enviar para compartirlo con la imprenta.";
    }
    setBudgetSubmitting(false);
    window.location.assign(delivery.whatsappUrl);
  } catch (error) {
    setBudgetProgress(0, "No pudimos completar el pedido", error.message || "Intentá nuevamente.");
    if (budgetStatus) budgetStatus.textContent = error.message || "No pudimos crear el pedido. Intentá nuevamente.";
    setBudgetSubmitting(false);
  }
}

function initBudgetCalculator() {
  if (!budgetForm) return;

  budgetForm.addEventListener("submit", (event) => {
    event.preventDefault();
  });

  renderBudgetDocuments();
  renderBudgetQuoteItems();
  renderBudgetPhotoPreview();
  renderBudgetStickerPreview();
  setBudgetTool(activeBudgetTool);
  updateBudgetEstimate();
  updateBudgetSessionUI();

  budgetWhatsapp?.addEventListener("click", handleBudgetStart);
  budgetConsent?.addEventListener("change", () => {
    budgetDelivery?.classList.remove("is-consent-required");
    if (budgetConsent.checked && budgetStatus) {
      budgetStatus.textContent = "Listo. Crearemos el pedido privado y después abriremos WhatsApp para que confirmes el envío.";
    }
  });
  budgetSessionAction?.addEventListener("click", () => {
    setBudgetFocus(false);
  });

  budgetOverview?.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) return;
    const startButton = event.target.closest("[data-budget-overview-start]");
    const editButton = event.target.closest("[data-budget-overview-edit]");
    if (!startButton && !editButton) return;

    if (startButton) setBudgetTool(startButton.dataset.budgetOverviewStart);
    setBudgetFocus(true);
  });

  budgetToolButtons.forEach((button, index) => {
    button.addEventListener("click", () => setBudgetTool(button.dataset.budgetTool));
    button.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
      event.preventDefault();
      const direction = event.key === "ArrowRight" ? 1 : -1;
      const nextIndex = (index + direction + budgetToolButtons.length) % budgetToolButtons.length;
      const nextButton = budgetToolButtons[nextIndex];
      setBudgetTool(nextButton.dataset.budgetTool);
      nextButton.focus();
    });
  });

  [budgetPhotoSize, budgetPhotoQuantity].forEach((control) => {
    control?.addEventListener("input", syncBudgetPhotoItem);
    control?.addEventListener("change", syncBudgetPhotoItem);
  });
  [budgetStickerSize, budgetStickerMaterial, budgetStickerQuantity].forEach((control) => {
    control?.addEventListener("input", renderBudgetStickerPreview);
    control?.addEventListener("change", renderBudgetStickerPreview);
  });
  budgetAddSticker?.addEventListener("click", addBudgetStickerItem);
  budgetEditor?.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) return;
    const removeButton = event.target.closest("[data-budget-remove-quote]");
    if (removeButton) removeBudgetQuoteItem(removeButton.dataset.budgetRemoveQuote);
  });

  budgetFile?.addEventListener("change", async () => {
    await addBudgetFiles(budgetFile.files);
    budgetFile.value = "";
  });

  budgetDocumentList?.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) return;

    const removeButton = event.target.closest("[data-budget-remove]");
    if (!removeButton) return;

    budgetDocuments = budgetDocuments.filter((documentItem) => documentItem.key !== removeButton.dataset.budgetRemove);
    if (budgetConsent) budgetConsent.checked = false;
    if (budgetProgress) budgetProgress.hidden = true;
    budgetDelivery?.classList.remove("is-consent-required");
    renderBudgetDocuments();
    renderBudgetQuoteItems();
    updateBudgetSessionUI();
    if (budgetStatus) {
      budgetStatus.textContent = budgetDocuments.length
        ? "PDF quitado. El presupuesto final se actualizó."
        : budgetQuoteItems.length
          ? "PDF quitado. Los trabajos de texto siguen guardados."
          : "Presupuesto vacío. Elegí PDFs, fotografías o stickers para continuar.";
    }
    updateBudgetEstimate();
  });

  budgetDocumentList?.addEventListener("input", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    let changedKey = "";

    if (target.matches("[data-budget-doc-copies]")) {
      changedKey = target.dataset.budgetDocCopies;
      updateBudgetDocument(target.dataset.budgetDocCopies, {
        copies: normalizeBudgetAmount(target.value),
      });
      syncBudgetNotebookControl(changedKey);
    }

    if (target.matches("[data-budget-doc-notebooks]")) {
      changedKey = target.dataset.budgetDocNotebooks;
      updateBudgetDocument(target.dataset.budgetDocNotebooks, {
        notebooks: normalizeBudgetAmount(target.value),
      });
      syncBudgetNotebookControl(changedKey);
    }

    if (changedKey) refreshBudgetDocumentPreview(changedKey);
    updateBudgetEstimate();
  });

  budgetDocumentList?.addEventListener("change", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    if (target.matches("[data-budget-doc-mode]")) {
      updateBudgetDocument(target.dataset.budgetDocMode, {
        mode: target.value === "color" ? "color" : "bn",
      });
    }

    if (target.matches("[data-budget-doc-sides]")) {
      updateBudgetDocument(target.dataset.budgetDocSides, {
        sides: target.value === "doble" ? "doble" : "simple",
      });
    }

    if (target.matches("[data-budget-doc-binding]")) {
      updateBudgetDocument(target.dataset.budgetDocBinding, {
        binding: target.checked,
      });
    }

    renderBudgetDocuments();
    updateBudgetEstimate();
  });

  ["dragenter", "dragover"].forEach((eventName) => {
    budgetUpload?.addEventListener(eventName, (event) => {
      event.preventDefault();
      budgetUpload.classList.add("is-dragging");
    });
  });

  ["dragleave", "drop"].forEach((eventName) => {
    budgetUpload?.addEventListener(eventName, (event) => {
      event.preventDefault();
      budgetUpload.classList.remove("is-dragging");
    });
  });

  budgetUpload?.addEventListener("drop", async (event) => {
    await addBudgetFiles(event.dataTransfer?.files);
  });
}

function getSystemTone() {
  return colorSchemeQuery.matches ? "dark" : "light";
}

function getPaletteForSystemTone(tone) {
  return tone === "dark" ? "night" : "sunset";
}

function setBackgroundOption(option) {
  const nextOption = option === "night" ? "night" : "sunset";

  document.body.dataset.bg = nextOption;

  paletteSwatches.forEach((swatch) => {
    swatch.classList.toggle("is-active", swatch.dataset.bgOption === nextOption);
  });
}

function syncPaletteWithSystemTone() {
  const systemTone = getSystemTone();
  const palette = getPaletteForSystemTone(systemTone);

  document.documentElement.dataset.systemTone = systemTone;
  setBackgroundOption(palette);

  return { systemTone, palette };
}

function updateHeaderState() {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
}

function setService(serviceName) {
  const service = services[serviceName];
  if (!service) return;

  tabs.forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.service === serviceName);
  });

  previewCard?.classList.add("is-changing");

  window.setTimeout(() => {
    previewCategory.textContent = service.category;
    previewTime.textContent = service.time;
    previewTitle.textContent = service.title;
    previewCopy.textContent = service.copy;
    previewNote.textContent = service.note;

    if (previewImage) {
      previewImage.src = service.image;
      previewImage.alt = service.imageAlt;
    }

    previewCard?.classList.remove("is-changing");
  }, 180);
}

function toTitleCase(value) {
  return value
    .replace(/[-_]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toLocaleUpperCase("es-AR") + word.slice(1))
    .join(" ");
}

function getWorkImageData(path) {
  const parts = path.split("/");
  const fileName = parts.at(-1) || "";
  const imgIndex = parts.indexOf("img");
  const isCategorizedImage = imgIndex >= 0 && Boolean(parts[imgIndex + 1]);
  const group = isCategorizedImage ? parts[imgIndex + 1] : "generales";
  const subfolder = isCategorizedImage && parts.length > imgIndex + 3 ? parts[imgIndex + 2] : "";
  const cleanName = fileName
    .replace(/\.[a-z0-9]+$/i, "")
    .replace(/^ChatGPT Image\s*/i, "")
    .replace(/^WhatsApp Image\s*/i, "")
    .replace(/^\d+\s*/, "")
    .replace(/[_-]/g, " ");

  return {
    path,
    group,
    groupLabel: toTitleCase(group),
    subfolder,
    kicker: subfolder ? toTitleCase(subfolder) : toTitleCase(group),
    title: cleanName || toTitleCase(group),
    alt: `${toTitleCase(group)} - ${subfolder ? toTitleCase(subfolder) : "trabajo realizado"}`,
  };
}

function groupWorkImages(paths) {
  return paths.reduce((groups, path, index) => {
    const image = getWorkImageData(path);
    groups[image.group] = groups[image.group] || {
      id: image.group,
      label: image.groupLabel,
      items: [],
    };
    groups[image.group].items.push({ ...image, index });
    return groups;
  }, {});
}

function getOrderedWorkGroups() {
  const order = ["estudiantiles", "souvenirs", "diseños", "generales"];
  return Object.values(groupWorkImages(workImagePaths)).sort((a, b) => {
    const aOrder = order.includes(a.id) ? order.indexOf(a.id) : order.length;
    const bOrder = order.includes(b.id) ? order.indexOf(b.id) : order.length;

    return aOrder - bOrder || a.label.localeCompare(b.label);
  });
}

function createGalleryButton(group, isActive) {
  const button = document.createElement("button");
  button.className = `service-tab${isActive ? " is-active" : ""}`;
  button.type = "button";
  button.dataset.galleryFilter = group.id;
  button.textContent = `${group.label} (${group.items.length})`;
  return button;
}

function createRouletteCategoryButton(group, isActive) {
  const button = document.createElement("button");
  button.className = `roulette-button${isActive ? " is-active" : ""}`;
  button.type = "button";
  button.dataset.rouletteGroup = group.id;
  button.textContent = group.label;
  button.setAttribute("aria-pressed", String(isActive));
  return button;
}

const rouletteGradientPalettes = {
  estudiantiles: {
    hue: 202,
    sat: 90,
    lightA: 66,
    lightB: 74,
    lightC: 82,
    line: "rgba(6, 79, 156, 0.22)",
  },
  souvenirs: {
    hue: 332,
    sat: 92,
    lightA: 68,
    lightB: 76,
    lightC: 84,
    line: "rgba(245, 33, 134, 0.22)",
  },
  "diseños": {
    hue: 264,
    sat: 88,
    lightA: 66,
    lightB: 75,
    lightC: 84,
    line: "rgba(91, 68, 220, 0.22)",
  },
  generales: {
    hue: 214,
    sat: 82,
    lightA: 68,
    lightB: 76,
    lightC: 84,
    line: "rgba(13, 114, 217, 0.18)",
  },
};

function setRouletteSectionGradient(item, activeIndex, total) {
  if (!workGallerySection || !item) return;

  const palette = rouletteGradientPalettes[item.group] || rouletteGradientPalettes.generales;
  const progress = total > 1 ? activeIndex / (total - 1) : 0;
  const itemShift = ((activeIndex % 7) - 3) * 4;
  const baseHue = Number.isFinite(palette.hue) ? palette.hue : rouletteGradientPalettes.generales.hue;
  const saturation = Number.isFinite(palette.sat) ? palette.sat : 86;
  const hue = Math.round((baseHue + itemShift + progress * 18) % 360);
  const hueB = Math.round((hue + 18 + progress * 18) % 360);
  const hueC = Math.round((hue + 44 + progress * 14) % 360);
  const angle = Math.round(118 + progress * 44);
  const washX = Math.round(26 + progress * 48);
  const washY = Math.round(24 + (activeIndex % 5) * 8);

  workGallerySection.dataset.rouletteTone = item.group;
  workGallerySection.style.setProperty("--roulette-bg-a", `hsl(${hue} ${saturation}% ${palette.lightA}%)`);
  workGallerySection.style.setProperty("--roulette-bg-b", `hsl(${hueB} ${Math.max(72, saturation - 4)}% ${palette.lightB}%)`);
  workGallerySection.style.setProperty("--roulette-bg-c", `hsl(${hueC} ${Math.max(70, saturation - 8)}% ${palette.lightC}%)`);
  workGallerySection.style.setProperty("--roulette-glow", `hsla(${hue}, 92%, 52%, 0.26)`);
  workGallerySection.style.setProperty("--roulette-line", palette.line);
  workGallerySection.style.setProperty("--roulette-angle", `${angle}deg`);
  workGallerySection.style.setProperty("--roulette-wash-x", `${washX}%`);
  workGallerySection.style.setProperty("--roulette-wash-y", `${washY}%`);
}

function createGalleryCard(item, index) {
  const card = document.createElement("article");
  card.className = "service-card gallery-card";
  card.dataset.galleryGroup = item.group;

  const image = document.createElement("img");
  image.src = item.path;
  image.alt = item.alt;
  image.loading = index < 4 ? "eager" : "lazy";

  const meta = document.createElement("div");
  const number = document.createElement("span");
  const title = document.createElement("h3");

  number.textContent = item.kicker;
  title.textContent = `${item.kicker} ${String(index + 1).padStart(2, "0")}`;

  meta.append(number, title);
  card.append(image, meta);

  return card;
}

let rouletteIndex = 0;
let rouletteTimer;
let isWorkRouletteVisible = false;
let roulettePointerId = null;
let rouletteDragStartX = 0;
let rouletteDragStartY = 0;
let rouletteDragLastX = 0;
let rouletteDragLastTime = 0;
let rouletteDragVelocity = 0;
let rouletteDidDrag = false;

function getRouletteMetrics() {
  const sceneBox = rouletteTrack?.closest(".roulette-scene")?.getBoundingClientRect();
  const width = sceneBox?.width || window.innerWidth;
  const height = sceneBox?.height || 620;
  const isShortDesktop = width >= 981 && height < 680;

  return {
    width,
    height,
    spread: Math.max(width < 620 ? 126 : 230, Math.min(width * 0.24, 390)),
    depth: Math.max(72, Math.min(width * 0.095, 128)),
    activeLift: isShortDesktop ? 16 : Math.max(12, Math.min(height * 0.045, 34)),
    activeScale: width < 620 ? 1.04 : isShortDesktop ? 1 : 1.22,
    sideScaleStart: width < 620 ? 0.72 : 0.78,
    sideScaleStep: width < 620 ? 0.075 : 0.08,
  };
}

function getCircularDistance(index, active, total) {
  let distance = index - active;
  if (distance > total / 2) distance -= total;
  if (distance < -total / 2) distance += total;
  return distance;
}

function createRouletteCard(item, index) {
  const card = document.createElement("article");
  card.className = "roulette-card";
  card.dataset.rouletteIndex = String(index);

  const image = document.createElement("img");
  image.alt = item.alt;
  image.loading = "eager";
  image.fetchPriority = index < 6 ? "high" : "low";
  image.decoding = "async";
  const syncRouletteImageOrientation = () => {
    card.classList.toggle("is-portrait", image.naturalHeight > image.naturalWidth * 1.08);
    card.classList.toggle("is-landscape", image.naturalWidth >= image.naturalHeight * 1.08);
  };
  image.addEventListener("load", syncRouletteImageOrientation, { once: true });
  image.src = item.path;
  if (image.complete) syncRouletteImageOrientation();

  const meta = document.createElement("div");
  meta.className = "roulette-card-meta";

  const category = document.createElement("span");
  category.textContent = item.groupLabel;

  const title = document.createElement("strong");
  title.textContent = item.kicker;

  meta.append(category, title);
  card.append(image, meta);

  return card;
}

function updateWorkRoulette(nextIndex = rouletteIndex, options = {}) {
  if (!rouletteTrack) return;

  const cards = [...rouletteTrack.querySelectorAll(".roulette-card")];
  const total = cards.length;
  if (!total) return;

  const normalizedPosition = ((nextIndex % total) + total) % total;
  if (!options.preview) rouletteIndex = Math.round(normalizedPosition) % total;
  const metrics = getRouletteMetrics();
  const items = workImagePaths.map(getWorkImageData);
  const activeItem = items[rouletteIndex];

  rouletteTrack.style.transform = "translate3d(-50%, -50%, 0)";

  cards.forEach((card, index) => {
    const signedDistance = getCircularDistance(index, normalizedPosition, total);
    const distance = Math.abs(signedDistance);
    const direction = signedDistance === 0 ? 0 : Math.sign(signedDistance);
    const clamped = Math.max(-7, Math.min(7, signedDistance));
    const x = clamped * metrics.spread;
    const depthCurve = Math.min(distance, 6);
    const z = distance === 0 ? 260 : -80 - depthCurve * metrics.depth;
    const y = distance === 0 ? -metrics.activeLift : Math.abs(clamped) * 10 + 18;
    const rotateY = direction * Math.min(38, 10 + distance * 6);
    const rotateZ = direction * Math.min(3, distance * 0.55);
    const scale = distance === 0
      ? metrics.activeScale
      : Math.max(0.46, metrics.sideScaleStart - distance * metrics.sideScaleStep);
    const opacity = distance === 0 ? 1 : Math.max(0.1, 0.48 - distance * 0.07);
    const hidden = distance > 5;

    card.style.transform = `translate3d(calc(-50% + ${x}px), calc(-50% + ${y}px), ${z}px) rotateY(${-rotateY}deg) rotateZ(${rotateZ}deg) scale(${scale})`;
    card.style.zIndex = String(Math.round(120 - distance * 8));
    card.style.opacity = hidden ? "0" : String(opacity);
    card.style.pointerEvents = hidden ? "none" : "auto";
    card.classList.toggle("is-active", index === rouletteIndex);
    card.setAttribute("aria-hidden", String(hidden));
  });

  if (!options.preview && activeItem) {
    rouletteCategory.textContent = activeItem.groupLabel;
    rouletteTitle.textContent = activeItem.kicker;
    rouletteCount.textContent = `${rouletteIndex + 1} de ${total} trabajos cargados`;
    updateRouletteCategoryControls(activeItem.group);
    setRouletteSectionGradient(activeItem, rouletteIndex, total);
  }
}

function moveWorkRoulette(direction) {
  updateWorkRoulette(rouletteIndex + direction);
}

function finishRouletteDrag(event, cancelled = false) {
  if (roulettePointerId === null || event.pointerId !== roulettePointerId) return;

  const metrics = getRouletteMetrics();
  const deltaX = event.clientX - rouletteDragStartX;
  const projectedDelta = deltaX + rouletteDragVelocity * 150;
  let step = cancelled ? 0 : Math.round(-projectedDelta / Math.max(140, metrics.spread * 0.7));

  if (!cancelled && step === 0 && Math.abs(deltaX) > 42) step = deltaX > 0 ? -1 : 1;
  step = Math.max(-3, Math.min(3, step));

  rouletteScene?.classList.remove("is-dragging");
  rouletteScene?.releasePointerCapture?.(roulettePointerId);
  roulettePointerId = null;

  // Flush the drag frame so snapping uses the card transition.
  void rouletteTrack?.offsetWidth;
  updateWorkRoulette(rouletteIndex + step);
  startWorkRouletteAutoplay();
}

function initWorkRouletteInteraction() {
  if (!rouletteScene || !rouletteTrack) return;

  rouletteScene.addEventListener("pointerdown", (event) => {
    if (event.button !== 0 || roulettePointerId !== null) return;

    roulettePointerId = event.pointerId;
    rouletteDragStartX = event.clientX;
    rouletteDragStartY = event.clientY;
    rouletteDragLastX = event.clientX;
    rouletteDragLastTime = event.timeStamp;
    rouletteDragVelocity = 0;
    rouletteDidDrag = false;
    rouletteScene.setPointerCapture(event.pointerId);
    stopWorkRouletteAutoplay();
  });

  rouletteScene.addEventListener("pointermove", (event) => {
    if (event.pointerId !== roulettePointerId) return;

    const deltaX = event.clientX - rouletteDragStartX;
    const deltaY = event.clientY - rouletteDragStartY;
    if (!rouletteDidDrag && Math.abs(deltaX) < 8) return;
    if (!rouletteDidDrag && Math.abs(deltaY) > Math.abs(deltaX)) return;

    rouletteDidDrag = true;
    event.preventDefault();
    rouletteScene.classList.add("is-dragging");

    const elapsed = Math.max(1, event.timeStamp - rouletteDragLastTime);
    rouletteDragVelocity = (event.clientX - rouletteDragLastX) / elapsed;
    rouletteDragLastX = event.clientX;
    rouletteDragLastTime = event.timeStamp;

    const metrics = getRouletteMetrics();
    const dragPosition = rouletteIndex - deltaX / Math.max(170, metrics.spread * 0.82);
    updateWorkRoulette(dragPosition, { preview: true });
  }, { passive: false });

  rouletteScene.addEventListener("pointerup", (event) => finishRouletteDrag(event));
  rouletteScene.addEventListener("pointercancel", (event) => finishRouletteDrag(event, true));
  rouletteScene.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    moveWorkRoulette(event.key === "ArrowLeft" ? -1 : 1);
    startWorkRouletteAutoplay();
  });

  rouletteScene.addEventListener("pointerenter", stopWorkRouletteAutoplay);
  rouletteScene.addEventListener("pointerleave", () => {
    if (roulettePointerId === null) startWorkRouletteAutoplay();
  });
  rouletteScene.addEventListener("focusin", stopWorkRouletteAutoplay);
  rouletteScene.addEventListener("focusout", startWorkRouletteAutoplay);

  roulettePrevious?.addEventListener("click", () => {
    moveWorkRoulette(-1);
    startWorkRouletteAutoplay();
  });
  rouletteNext?.addEventListener("click", () => {
    moveWorkRoulette(1);
    startWorkRouletteAutoplay();
  });
}

function stopWorkRouletteAutoplay() {
  window.clearInterval(rouletteTimer);
}

function updateRouletteCategoryControls(activeGroup) {
  if (!rouletteControls) return;

  rouletteControls.querySelectorAll("[data-roulette-group]").forEach((button) => {
    const isActive = button.dataset.rouletteGroup === activeGroup;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function startWorkRouletteAutoplay() {
  stopWorkRouletteAutoplay();
  if (prefersReducedMotion || !rouletteTrack || !isWorkRouletteVisible) return;
  rouletteTimer = window.setInterval(() => moveWorkRoulette(1), rouletteAutoplayDelay);
}

function renderWorkRoulette() {
  if (!rouletteTrack) return;

  const items = workImagePaths.map(getWorkImageData);
  const groups = getOrderedWorkGroups();

  rouletteTrack.replaceChildren();
  rouletteControls?.replaceChildren();

  items.forEach((item, index) => rouletteTrack.append(createRouletteCard(item, index)));

  rouletteTrack.querySelectorAll(".roulette-card").forEach((card) => {
    card.addEventListener("click", () => {
      if (rouletteDidDrag) return;
      const targetIndex = Number(card.dataset.rouletteIndex);
      if (!Number.isFinite(targetIndex) || targetIndex === rouletteIndex) return;
      updateWorkRoulette(targetIndex);
      startWorkRouletteAutoplay();
    });
  });

  groups.forEach((group, groupIndex) => {
    const button = createRouletteCategoryButton(group, groupIndex === 0);
    button.addEventListener("click", () => {
      const targetIndex = group.items[0]?.index;
      if (typeof targetIndex !== "number") return;

      updateWorkRoulette(targetIndex);
      startWorkRouletteAutoplay();
    });
    rouletteControls?.append(button);
  });

  window.addEventListener("resize", () => updateWorkRoulette());

  const rouletteObserver = new IntersectionObserver(([entry]) => {
    isWorkRouletteVisible = entry.isIntersecting;
    if (isWorkRouletteVisible) {
      startWorkRouletteAutoplay();
    } else {
      stopWorkRouletteAutoplay();
    }
  }, { threshold: 0.24 });
  rouletteObserver.observe(rouletteScene || rouletteTrack);

  updateWorkRoulette(0);
  initWorkRouletteInteraction();
  startWorkRouletteAutoplay();
}

function setGalleryFilter(filter) {
  if (!workGallery || !galleryTabs) return;

  galleryTabs.querySelectorAll("[data-gallery-filter]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.galleryFilter === filter);
  });

  workGallery.querySelectorAll(".gallery-section").forEach((section) => {
    section.hidden = section.dataset.galleryGroup !== filter;
  });
}

function renderWorkGalleries() {
  if (!workGallery || !galleryTabs) return;

  const groups = getOrderedWorkGroups();

  galleryTabs.replaceChildren();
  workGallery.replaceChildren();

  groups.forEach((group, groupIndex) => {
    galleryTabs.append(createGalleryButton(group, groupIndex === 0));

    const section = document.createElement("section");
    section.className = "gallery-section";
    section.dataset.galleryGroup = group.id;
    section.hidden = groupIndex !== 0;

    const heading = document.createElement("div");
    heading.className = "gallery-heading";

    const title = document.createElement("h3");
    title.textContent = group.label;

    const count = document.createElement("span");
    count.textContent = `${group.items.length} trabajos`;

    const grid = document.createElement("div");
    grid.className = "service-grid gallery-grid";

    group.items.forEach((item, index) => {
      grid.append(createGalleryCard(item, index));
    });

    heading.append(title, count);
    section.append(heading, grid);
    workGallery.append(section);
  });

  galleryTabs.addEventListener("click", (event) => {
    const button = event.target.closest("[data-gallery-filter]");
    if (!button) return;
    setGalleryFilter(button.dataset.galleryFilter);
  });

  serviceCards = [...document.querySelectorAll(".service-card")];
  bindServiceCardInteractions();
  syncServicePreviewAvailability();
}

function canUseServicePreview() {
  return window.matchMedia("(min-width: 761px)").matches;
}

function canUseHoverServicePreview() {
  return window.matchMedia("(min-width: 981px)").matches;
}

function syncServicePreviewAvailability() {
  const canPreview = canUseServicePreview();

  serviceCards.forEach((card) => {
    const title = card.querySelector("h3")?.textContent || "servicio";
    if (canPreview) {
      card.tabIndex = 0;
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", `Ver ${title} ampliado`);
    } else {
      card.removeAttribute("tabindex");
      card.removeAttribute("role");
      card.removeAttribute("aria-label");
    }
  });

  if (!canPreview) {
    closeServicePreview({ force: true });
  }
}

function getServiceCardData(card) {
  const image = card.querySelector("img");
  const number = card.querySelector("span");
  const title = card.querySelector("h3");

  return {
    src: image?.currentSrc || image?.src || "",
    alt: image?.alt || "",
    kicker: number?.textContent || "",
    title: title?.textContent || "",
  };
}

function openServicePreview(card, options = {}) {
  if (!canUseServicePreview()) return;

  const data = getServiceCardData(card);
  if (!data.src) return;

  window.clearTimeout(servicePreviewCloseTimer);
  activeServiceCard = card;
  isServicePreviewPinned = Boolean(options.pinned);
  servicePreviewImage.src = data.src;
  servicePreviewImage.alt = data.alt;
  servicePreviewKicker.textContent = data.kicker;
  servicePreviewTitle.textContent = data.title;
  serviceImagePreview.classList.add("is-visible");
  serviceImagePreview.classList.toggle("is-pinned", isServicePreviewPinned);
  serviceImagePreview.setAttribute("aria-hidden", "false");
}

function closeServicePreview(options = {}) {
  if (isServicePreviewPinned && !options.force) return;

  isServicePreviewPinned = false;
  activeServiceCard = undefined;
  serviceImagePreview.classList.remove("is-visible", "is-pinned");
  serviceImagePreview.setAttribute("aria-hidden", "true");
}

function queueServicePreviewClose() {
  window.clearTimeout(servicePreviewCloseTimer);
  servicePreviewCloseTimer = window.setTimeout(() => closeServicePreview(), 90);
}

function handleServiceCardKeydown(event) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    openServicePreview(event.currentTarget, { pinned: true });
  }
}

function updateParallax() {
  ticking = false;

  if (prefersReducedMotion || isScreenJumping) return;

  parallaxItems.forEach((item) => {
    const rect = item.getBoundingClientRect();
    const viewportCenter = window.innerHeight / 2;
    const itemCenter = rect.top + rect.height / 2;
    const progress = (viewportCenter - itemCenter) / window.innerHeight;
    const speed = Number(item.dataset.parallaxSpeed) || 0;

    item.style.transform = `translate3d(0, ${progress * speed * 0.32}px, 0)`;
  });
}

function requestScrollUpdate() {
  updateHeaderState();
  updateActiveScreen();
  scheduleScreenSettle();

  if (!ticking) {
    window.requestAnimationFrame(updateParallax);
    ticking = true;
  }
}

function getActiveScreenIndex() {
  if (!screenSections.length) return -1;

  const viewportAnchor = window.scrollY + window.innerHeight * 0.42;
  let closestIndex = 0;
  let closestDistance = Number.POSITIVE_INFINITY;

  screenSections.forEach((section, index) => {
    const sectionCenter = section.offsetTop + section.offsetHeight / 2;
    const distance = Math.abs(sectionCenter - viewportAnchor);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestIndex = index;
    }
  });

  return closestIndex;
}

function updateActiveScreen() {
  const activeIndex = getActiveScreenIndex();

  screenSections.forEach((section, index) => {
    section.classList.toggle("is-screen-active", index === activeIndex);
  });
}

function canUseTouchScreenStep() {
  const activeSection = screenSections[getActiveScreenIndex()];
  return Boolean(activeSection && activeSection.offsetHeight <= window.innerHeight + 24);
}

function canScrollWithinSection(section, direction) {
  if (!section || section.offsetHeight <= window.innerHeight + 24) return false;

  const rect = section.getBoundingClientRect();
  return direction > 0 ? rect.bottom > window.innerHeight + 8 : rect.top < -8;
}

function easeScreenTransition(progress) {
  return progress < 0.5
    ? 8 * progress * progress * progress * progress
    : 1 - Math.pow(-2 * progress + 2, 4) / 2;
}

function clearScreenTransitionClasses() {
  screenSections.forEach((section) => {
    section.classList.remove("is-screen-entering", "is-screen-exiting");
  });
}

function finishScreenJump(targetTop) {
  window.scrollTo(0, targetTop);
  isScreenJumping = false;
  document.documentElement.classList.remove("is-screen-jumping");
  document.body.classList.remove("is-screen-jumping");
  document.body.style.removeProperty("--screen-direction");
  clearScreenTransitionClasses();
  updateActiveScreen();
  requestScrollUpdate();
}

function animateScreenScroll(targetTop, duration = 760) {
  const startTop = window.scrollY;
  const distance = targetTop - startTop;
  const startTime = window.performance.now();

  function step(now) {
    if (!isScreenJumping) return;

    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);

    window.scrollTo(0, startTop + distance * easeScreenTransition(progress));

    if (progress < 1) {
      window.requestAnimationFrame(step);
      return;
    }

    finishScreenJump(targetTop);
  }

  window.requestAnimationFrame(step);
}

function getScreenTargetTop(index) {
  const section = screenSections[index];
  if (!section) return 0;

  return index === 0 ? 0 : section.offsetTop;
}

function jumpToScreen(index, options = {}) {
  if (isBudgetFocused) {
    signalBudgetFocusBoundary();
    return;
  }

  const nextSection = screenSections[index];
  if (!nextSection || isScreenJumping) return;
  const targetTop = getScreenTargetTop(index);

  if (prefersReducedMotion) {
    window.scrollTo(0, targetTop);
    updateActiveScreen();
    return;
  }

  const activeIndex = getActiveScreenIndex();
  const currentSection = screenSections[activeIndex];
  const distanceToTarget = Math.abs(window.scrollY - targetTop);
  const direction = index > activeIndex ? 1 : -1;

  if (!options.force && distanceToTarget < 2) return;

  isScreenJumping = true;
  window.clearTimeout(screenSettleTimer);
  document.documentElement.classList.add("is-screen-jumping");
  document.body.classList.add("is-screen-jumping");
  document.body.style.setProperty("--screen-direction", direction);
  clearScreenTransitionClasses();

  currentSection?.classList.add("is-screen-exiting");
  nextSection.classList.add("is-screen-entering");

  screenSections.forEach((section, sectionIndex) => {
    section.classList.toggle("is-screen-active", sectionIndex === index);
  });

  animateScreenScroll(targetTop);
}

function scheduleScreenSettle() {
  if (prefersReducedMotion || isScreenJumping || isBudgetFocused || window.innerWidth < 761) return;

  window.clearTimeout(screenSettleTimer);
  screenSettleTimer = window.setTimeout(() => {
    if (isScreenJumping) return;

    const activeIndex = getActiveScreenIndex();
    const activeSection = screenSections[activeIndex];
    if (!activeSection) return;
    if (activeSection.offsetHeight > window.innerHeight + 24) return;

    const distanceToTop = Math.abs(window.scrollY - getScreenTargetTop(activeIndex));
    if (distanceToTop > 2) {
      jumpToScreen(activeIndex, { force: true });
    }
  }, 180);
}

function handleScreenWheel(event) {
  if (isBudgetFocused) {
    const direction = event.deltaY > 0 ? 1 : -1;
    if (canScrollBudgetFocus(event.target, direction)) return;

    event.preventDefault();
    signalBudgetFocusBoundary();
    return;
  }

  if (prefersReducedMotion || window.innerWidth < 761 || Math.abs(event.deltaY) < 4) return;

  const activeIndex = getActiveScreenIndex();
  const currentDirection = event.deltaY > 0 ? 1 : -1;
  const activeSection = screenSections[activeIndex];

  if (canScrollWithinSection(activeSection, currentDirection)) return;

  if (currentDirection !== wheelDirection) {
    wheelIntent = 0;
    wheelDirection = currentDirection;
  }

  wheelIntent += event.deltaY;

  window.clearTimeout(wheelResetTimer);
  wheelResetTimer = window.setTimeout(() => {
    wheelIntent = 0;
    wheelDirection = 0;
  }, 220);

  const direction = wheelIntent > 0 ? 1 : -1;
  const nextIndex = activeIndex + direction;

  if (nextIndex < 0 || nextIndex >= screenSections.length) return;

  event.preventDefault();

  if (isScreenJumping || Math.abs(wheelIntent) < 140) return;

  wheelIntent = 0;
  wheelDirection = 0;
  jumpToScreen(nextIndex);
}

function handleScreenTouchStart(event) {
  if (isBudgetFocused) {
    touchStartY = event.touches[0]?.clientY || 0;
    canStepTouchScreen = false;
    return;
  }

  touchStartY = event.touches[0]?.clientY || 0;
  touchIntent = 0;
  canStepTouchScreen = canUseTouchScreenStep();
}

function handleScreenTouchMove(event) {
  if (isBudgetFocused) {
    const touchCurrentY = event.touches[0]?.clientY || 0;
    const direction = touchStartY - touchCurrentY > 0 ? 1 : -1;
    if (canScrollBudgetFocus(event.target, direction)) return;

    event.preventDefault();
    signalBudgetFocusBoundary();
    return;
  }

  if (prefersReducedMotion || window.innerWidth > 760 || isScreenJumping || !canStepTouchScreen) return;

  const touchCurrentY = event.touches[0]?.clientY || 0;
  touchIntent = touchStartY - touchCurrentY;

  if (Math.abs(touchIntent) < 18) return;

  event.preventDefault();
}

function handleScreenTouchEnd() {
  if (isBudgetFocused) return;

  if (prefersReducedMotion || window.innerWidth > 760 || isScreenJumping || !canStepTouchScreen) return;

  if (Math.abs(touchIntent) < 92) return;

  const activeIndex = getActiveScreenIndex();
  const direction = touchIntent > 0 ? 1 : -1;
  const nextIndex = activeIndex + direction;

  if (nextIndex < 0 || nextIndex >= screenSections.length) return;

  jumpToScreen(nextIndex);
}

function handleScreenKeydown(event) {
  if (event.defaultPrevented || isScreenJumping) return;

  if (isBudgetFocused && ["ArrowDown", "PageDown", " ", "ArrowUp", "PageUp", "Home", "End"].includes(event.key)) {
    if (event.target.closest?.("input, select, button")) return;

    event.preventDefault();
    signalBudgetFocusBoundary();
    return;
  }

  if (prefersReducedMotion) return;

  if (event.target.closest?.(".service-card, .service-image-preview, button, a")) return;

  const activeIndex = getActiveScreenIndex();
  const keys = {
    ArrowDown: activeIndex + 1,
    PageDown: activeIndex + 1,
    " ": activeIndex + 1,
    ArrowUp: activeIndex - 1,
    PageUp: activeIndex - 1,
    Home: 0,
    End: screenSections.length - 1,
  };

  if (!(event.key in keys)) return;

  const nextIndex = keys[event.key];
  if (nextIndex < 0 || nextIndex >= screenSections.length) return;

  event.preventDefault();
  jumpToScreen(nextIndex);
}

function handleAnchorNavigation(event) {
  if (isBudgetFocused) {
    event.preventDefault();
    signalBudgetFocusBoundary();
    return;
  }

  const link = event.currentTarget;
  const href = link.getAttribute("href");
  const target = href === "#" ? screenSections[0] : document.querySelector(href);
  const targetIndex = screenSections.indexOf(target);

  if (targetIndex < 0) return;

  event.preventDefault();
  jumpToScreen(targetIndex, { force: true });
  if (link.hasAttribute("data-budget-entry")) queueBudgetEntryHighlight();
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => setService(tab.dataset.service));
});

function bindServiceCardInteractions() {
  serviceCards.forEach((card) => {
    if (card.dataset.previewBound === "true") return;

    const openHoverPreview = () => {
      if (canUseHoverServicePreview()) {
        openServicePreview(card);
      }
    };

    card.dataset.previewBound = "true";
    card.addEventListener("pointerenter", openHoverPreview);
    card.addEventListener("pointerleave", queueServicePreviewClose);
    card.addEventListener("mouseenter", openHoverPreview);
    card.addEventListener("mouseleave", queueServicePreviewClose);
    card.addEventListener("focus", () => openServicePreview(card));
    card.addEventListener("blur", queueServicePreviewClose);
    card.addEventListener("click", () => openServicePreview(card, { pinned: true }));
    card.addEventListener("keydown", handleServiceCardKeydown);
  });
}

serviceImagePreview.addEventListener("click", (event) => {
  if (event.target === serviceImagePreview || event.target === servicePreviewClose) {
    const cardToFocus = activeServiceCard;
    closeServicePreview({ force: true });
    cardToFocus?.focus();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (isBudgetFocused) {
      event.preventDefault();
      setBudgetFocus(false);
      return;
    }
    closeServicePreview({ force: true });
  }
});

paletteSwatches.forEach((swatch) => {
  swatch.addEventListener("click", () => setBackgroundOption(swatch.dataset.bgOption));
});

function updateWorkVideoControls() {
  if (workVideoCount) {
    workVideoCount.textContent = `${String(activeWorkVideoIndex + 1).padStart(2, "0")} / ${String(workVideos.length).padStart(2, "0")}`;
  }
  if (workVideoTitle) workVideoTitle.textContent = workVideos[activeWorkVideoIndex].title;
  workVideoSequence?.querySelectorAll("button").forEach((button, index) => {
    const isActive = index === activeWorkVideoIndex;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function showWorkVideo(nextIndex, options = {}) {
  if (!workVideo || !workVideoSource || !workVideoPlayer || !workVideos.length) return;
  const normalizedIndex = (nextIndex + workVideos.length) % workVideos.length;
  if (normalizedIndex === activeWorkVideoIndex && !options.force) {
    if (isWorkVideoVisible) workVideo.play().catch(() => {});
    return;
  }

  activeWorkVideoIndex = normalizedIndex;
  const item = workVideos[activeWorkVideoIndex];
  const loadVersion = ++workVideoLoadVersion;
  window.clearTimeout(workVideoSwitchTimer);
  workVideo.pause();
  workVideoPlayer.classList.add("is-changing");
  updateWorkVideoControls();

  const swapSource = () => {
    if (loadVersion !== workVideoLoadVersion) return;
    workVideoSource.src = item.src;
    workVideo.poster = item.poster;
    workVideo.setAttribute("aria-label", item.title);
    workVideo.load();

    let hasRevealed = false;
    const revealVideo = () => {
      if (hasRevealed || loadVersion !== workVideoLoadVersion) return;
      hasRevealed = true;
      workVideoPlayer.classList.remove("is-changing");
      workVideoPlayer.classList.add("is-arriving");
      window.setTimeout(() => workVideoPlayer.classList.remove("is-arriving"), 420);
      if (isWorkVideoVisible) workVideo.play().catch(() => {});
    };

    workVideo.addEventListener("loadeddata", revealVideo, { once: true });
    window.setTimeout(revealVideo, 900);
  };

  workVideoSwitchTimer = window.setTimeout(swapSource, prefersReducedMotion ? 0 : 220);
}

function initWorkVideoPlayer() {
  if (!workVideoPlayer || !workVideo || !workVideoSequence || !workVideos.length) return;

  workVideoSequence.innerHTML = workVideos.map((item, index) => `
    <button type="button" aria-label="Ver ${escapeHtml(item.title)}" aria-pressed="${index === 0}">
      <span>${String(index + 1).padStart(2, "0")}</span>
      <strong>${escapeHtml(item.title)}</strong>
    </button>`).join("");
  workVideoSequence.querySelectorAll("button").forEach((button, index) => {
    button.addEventListener("click", () => showWorkVideo(index));
  });
  workVideoPrevious?.addEventListener("click", () => showWorkVideo(activeWorkVideoIndex - 1));
  workVideoNext?.addEventListener("click", () => showWorkVideo(activeWorkVideoIndex + 1));
  workVideo.addEventListener("ended", () => showWorkVideo(activeWorkVideoIndex + 1));
  updateWorkVideoControls();

  const workVideoObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      isWorkVideoVisible = entry.isIntersecting;
      workVideoPlayer.classList.toggle("is-in-view", isWorkVideoVisible);
      if (isWorkVideoVisible) {
        workVideo.play().catch(() => {});
      } else {
        workVideo.pause();
      }
    });
  }, { threshold: 0.42 });

  workVideoObserver.observe(workVideoPlayer);
}

syncPaletteWithSystemTone();
initHomeIntro();
initBudgetCalculator();
initWorkVideoPlayer();

if (colorSchemeQuery.addEventListener) {
  colorSchemeQuery.addEventListener("change", syncPaletteWithSystemTone);
} else if (colorSchemeQuery.addListener) {
  colorSchemeQuery.addListener(syncPaletteWithSystemTone);
}

window.ggTheme = {
  getSystemTone,
  syncPaletteWithSystemTone,
  setBackgroundOption,
};

renderWorkRoulette();

window.addEventListener("scroll", requestScrollUpdate, { passive: true });
window.addEventListener("resize", requestScrollUpdate);
window.addEventListener("resize", syncServicePreviewAvailability);
window.addEventListener("wheel", handleScreenWheel, { passive: false });
window.addEventListener("keydown", handleScreenKeydown);
window.addEventListener("touchstart", handleScreenTouchStart, { passive: true });
window.addEventListener("touchmove", handleScreenTouchMove, { passive: false });
window.addEventListener("touchend", handleScreenTouchEnd, { passive: true });
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", handleAnchorNavigation);
});
syncServicePreviewAvailability();
requestScrollUpdate();

if (revealItems.length) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
}
