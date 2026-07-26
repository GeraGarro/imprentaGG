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

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const homeIntro = document.querySelector("[data-home-intro]");
const header = document.querySelector("[data-header]");
const previewCard = document.querySelector("[data-preview-card]");
const tabs = document.querySelectorAll("[data-service]");
const galleryTabs = document.querySelector("[data-gallery-tabs]");
const workGallery = document.querySelector("[data-work-gallery]");
const workGallerySection = document.querySelector(".work-gallery-section");
const rouletteTrack = document.querySelector("[data-roulette-track]");
const rouletteControls = document.querySelector("[data-roulette-controls]");
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
const autoplayVideos = document.querySelectorAll("[data-autoplay-video]");
const paletteSwatches = document.querySelectorAll("[data-bg-option]");
const budgetForm = document.querySelector("[data-budget-form]");
const budgetUpload = document.querySelector("[data-budget-upload]");
const budgetFile = document.querySelector("[data-budget-file]");
const budgetFileName = document.querySelector("[data-budget-file-name]");
const budgetDocumentList = document.querySelector("[data-budget-document-list]");
const budgetDocumentsCount = document.querySelector("[data-budget-documents]");
const budgetPages = document.querySelector("[data-budget-pages]");
const budgetSheets = document.querySelector("[data-budget-sheets]");
const budgetBindingTotal = document.querySelector("[data-budget-binding-total]");
const budgetTotal = document.querySelector("[data-budget-total]");
const budgetStatus = document.querySelector("[data-budget-status]");
const budgetWhatsapp = document.querySelector("[data-budget-whatsapp]");
const budgetSection = document.querySelector(".budget-section");
const budgetSession = document.querySelector("[data-budget-session]");
const budgetSessionStatus = document.querySelector("[data-budget-session-status]");
const budgetSessionDetail = document.querySelector("[data-budget-session-detail]");
const budgetSessionAction = document.querySelector("[data-budget-session-action]");
const budgetDelivery = document.querySelector("[data-budget-delivery]");
const budgetConsent = document.querySelector("[data-budget-consent]");
const budgetProgress = document.querySelector("[data-budget-progress]");
const budgetProgressLabel = document.querySelector("[data-budget-progress-label]");
const budgetProgressValue = document.querySelector("[data-budget-progress-value]");
const budgetProgressBar = document.querySelector("[data-budget-progress-bar]");
const budgetProgressDetail = document.querySelector("[data-budget-progress-detail]");
let serviceCards = [];
const screenSections = [...document.querySelectorAll("[data-screen]")];
const colorSchemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
const compactIntroQuery = window.matchMedia("(max-width: 620px)");
const transitionLayer = document.createElement("div");
const serviceImagePreview = document.createElement("div");
const rouletteAutoplayDelay = 2000;
const BUDGET_PRINT_PRICES = {
  bn: 150,
  color: 200,
};
const BUDGET_BINDING_PRICE = 2500;
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
let isBudgetFocused = false;
let isBudgetProcessing = false;
let isBudgetSubmitting = false;
let budgetFocusNoticeTimer;
let budgetFocusReturnTarget;
let budgetEntryArrivalTimer;
let budgetEntryHighlightTimer;

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
  }, prefersReducedMotion ? 80 : exitDuration);
}

function initHomeIntro() {
  if (!homeIntro) {
    document.body.classList.remove("has-home-intro");
    return;
  }

  const introDuration = compactIntroQuery.matches ? 2350 : 6650;
  window.setTimeout(completeHomeIntro, prefersReducedMotion ? 500 : introDuration);
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
  return budgetDocuments.reduce((totals, documentItem) => {
    const sheets = getDocumentSheetCount(documentItem);
    const printTotal = getDocumentPrintTotal(documentItem);
    const bindingTotal = getDocumentBindingTotal(documentItem);

    totals.pages += documentItem.pages || 0;
    totals.sheets += sheets;
    totals.printTotal += printTotal;
    totals.bindingTotal += bindingTotal;
    totals.total += printTotal + bindingTotal;

    return totals;
  }, {
    pages: 0,
    sheets: 0,
    printTotal: 0,
    bindingTotal: 0,
    total: 0,
  });
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

  updateBudgetSessionUI();
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
  };
}

function updateBudgetWhatsapp() {
  if (!budgetWhatsapp) return;

  budgetWhatsapp.disabled = isBudgetSubmitting;
  budgetWhatsapp.textContent = isBudgetSubmitting
    ? "Guardando pedido..."
    : budgetDocuments.length
      ? "Crear pedido y abrir WhatsApp"
      : "Cargar primer PDF";
}

function queueBudgetEntryHighlight() {
  if (!budgetSection) return;

  window.clearTimeout(budgetEntryArrivalTimer);
  window.clearTimeout(budgetEntryHighlightTimer);
  budgetEntryArrivalTimer = window.setTimeout(() => {
    budgetSection.classList.remove("is-budget-entry");
    void budgetSection.offsetWidth;
    budgetSection.classList.add("is-budget-entry");
    budgetEntryHighlightTimer = window.setTimeout(() => {
      budgetSection.classList.remove("is-budget-entry");
    }, 1700);
  }, prefersReducedMotion ? 0 : 920);
}

function updateBudgetEstimate() {
  if (!budgetPages || !budgetSheets || !budgetTotal) return;

  const totals = getBudgetTotals();

  if (budgetDocumentsCount) budgetDocumentsCount.textContent = budgetDocuments.length || "0";
  budgetPages.textContent = totals.pages || "0";
  budgetSheets.textContent = totals.sheets || "0";
  if (budgetBindingTotal) budgetBindingTotal.textContent = formatBudgetCurrency(totals.bindingTotal);
  budgetTotal.textContent = formatBudgetCurrency(totals.total);
  updateBudgetWhatsapp(totals);
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
  const hasSession = hasDocuments || isBudgetProcessing;

  budgetForm?.classList.toggle("has-documents", hasDocuments);
  if (!budgetSession) return;

  budgetSession.hidden = !hasSession;
  budgetSession.classList.toggle("is-paused", hasDocuments && !isBudgetFocused);

  if (budgetSessionStatus) {
    budgetSessionStatus.textContent = isBudgetSubmitting
      ? "Guardando pedido"
      : isBudgetProcessing
      ? "Analizando PDFs"
      : isBudgetFocused ? "Presupuesto en curso" : "Presupuesto pausado";
  }

  if (budgetSessionDetail) {
    budgetSessionDetail.textContent = isBudgetSubmitting
      ? "No cierres esta pantalla"
      : isBudgetProcessing && !hasDocuments
      ? "Preparando tus archivos"
      : `${budgetDocuments.length} PDF${budgetDocuments.length === 1 ? "" : "s"} cargado${budgetDocuments.length === 1 ? "" : "s"}`;
  }

  if (budgetSessionAction) {
    budgetSessionAction.disabled = isBudgetSubmitting;
    budgetSessionAction.textContent = isBudgetSubmitting ? "Guardando" : isBudgetFocused ? "Salir" : "Continuar";
    budgetSessionAction.setAttribute(
      "aria-label",
      isBudgetFocused ? "Salir del modo presupuesto" : "Continuar el presupuesto"
    );
  }
}

function setBudgetFocus(active, options = {}) {
  const canActivate = budgetDocuments.length > 0 || isBudgetProcessing;
  const nextState = Boolean(active && canActivate);
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
    budgetFocusReturnTarget = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : undefined;
    budgetSection?.scrollTo({ top: 0, behavior: "auto" });
    if (options.focusSession) window.requestAnimationFrame(() => budgetSessionAction?.focus());
  } else if (options.restoreFocus !== false) {
    window.requestAnimationFrame(() => {
      if (budgetSessionAction && budgetSession && !budgetSession.hidden) {
        budgetSessionAction.focus();
      } else {
        budgetFocusReturnTarget?.focus?.();
      }
    });
  }

  updateBudgetSessionUI();
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

function canScrollBudgetDocumentList(target, direction) {
  const documentList = target.closest?.(".budget-document-list");
  if (!documentList) return false;

  if (direction > 0) {
    return documentList.scrollTop + documentList.clientHeight < documentList.scrollHeight - 2;
  }

  return documentList.scrollTop > 2;
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
    window.requestAnimationFrame(() => {
      const newestDocument = budgetDocumentList?.lastElementChild;
      if (budgetDocumentList && newestDocument instanceof HTMLElement) {
        budgetDocumentList.scrollTop = newestDocument.offsetTop - budgetDocumentList.offsetTop;
      }
    });

    const pageCount = getBudgetPageCount();
    if (budgetStatus) {
      const skippedCount = incomingFiles.length - filesToAdd.length;
      const prefix = skippedCount > 0 ? `Se agregaron ${filesToAdd.length} PDFs válidos. ` : "";
      budgetStatus.textContent = pageCount > 0
        ? `${prefix}Presupuesto actualizado. Al finalizar crearemos el pedido privado y abriremos WhatsApp.`
        : `${prefix}El servidor verificará las páginas al guardar el pedido.`;
    }
  } catch {
    if (budgetStatus) budgetStatus.textContent = "No pudimos leer uno de los PDFs. Probá con otro archivo o consultanos por WhatsApp.";
  }

  isBudgetProcessing = false;
  if (budgetDocuments.length) {
    updateBudgetSessionUI();
  } else {
    setBudgetFocus(false, { restoreFocus: false });
  }
  updateBudgetEstimate();
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
  const text = new TextDecoder("latin1").decode(buffer);
  return detectPdfPagesFromText(text);
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

  if (!budgetDocuments.length) {
    if (budgetStatus) budgetStatus.textContent = "Cargá al menos un PDF para iniciar el presupuesto.";
    budgetFile?.click();
    return;
  }

  if (!budgetConsent?.checked) {
    budgetDelivery?.classList.remove("is-consent-required");
    void budgetDelivery?.offsetWidth;
    budgetDelivery?.classList.add("is-consent-required");
    budgetConsent?.focus();
    if (budgetStatus) budgetStatus.textContent = "Confirmá la carga temporal para poder crear el pedido privado.";
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
  updateBudgetEstimate();

  budgetWhatsapp?.addEventListener("click", handleBudgetStart);
  budgetConsent?.addEventListener("change", () => {
    budgetDelivery?.classList.remove("is-consent-required");
    if (budgetConsent.checked && budgetStatus) {
      budgetStatus.textContent = "Listo. Crearemos el pedido privado y después abriremos WhatsApp para que confirmes el envío.";
    }
  });
  budgetSessionAction?.addEventListener("click", () => {
    setBudgetFocus(!isBudgetFocused, { focusSession: !isBudgetFocused });
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
    if (!budgetDocuments.length) setBudgetFocus(false, { restoreFocus: false });
    if (budgetStatus) {
      budgetStatus.textContent = budgetDocuments.length
        ? "PDF quitado. El presupuesto final se actualizó."
        : "Subí uno o más PDFs para detectar páginas y calcular el presupuesto.";
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
  let distance = (index - active + total) % total;
  if (distance > total / 2) distance -= total;
  return distance;
}

function createRouletteCard(item, index) {
  const card = document.createElement("article");
  card.className = "roulette-card";
  card.dataset.rouletteIndex = String(index);

  const image = document.createElement("img");
  image.alt = item.alt;
  image.loading = index < 8 ? "eager" : "lazy";
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

function updateWorkRoulette(nextIndex = rouletteIndex) {
  if (!rouletteTrack) return;

  const cards = [...rouletteTrack.querySelectorAll(".roulette-card")];
  const total = cards.length;
  if (!total) return;

  rouletteIndex = (nextIndex + total) % total;
  const metrics = getRouletteMetrics();
  const items = workImagePaths.map(getWorkImageData);
  const activeItem = items[rouletteIndex];

  rouletteTrack.style.transform = "translate3d(-50%, -50%, 0)";

  cards.forEach((card, index) => {
    const signedDistance = getCircularDistance(index, rouletteIndex, total);
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
    card.style.filter = distance === 0
      ? "saturate(1.08) contrast(1.03)"
      : `saturate(${Math.max(0.58, 0.8 - distance * 0.04)}) brightness(${Math.max(0.58, 0.82 - distance * 0.045)}) contrast(0.94)`;
    card.style.pointerEvents = distance === 0 ? "auto" : "none";
    card.classList.toggle("is-active", distance === 0);
  });

  if (activeItem) {
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
  if (prefersReducedMotion || !rouletteTrack) return;
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
    card.addEventListener("pointerenter", () => {
      if (!card.classList.contains("is-active")) return;
      stopWorkRouletteAutoplay();
    });

    card.addEventListener("pointerleave", () => {
      if (!card.classList.contains("is-active")) return;
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

  updateWorkRoulette(0);
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

function animateScreenScroll(targetTop, duration = 940) {
  const startTop = window.scrollY;
  const distance = targetTop - startTop;
  const startTime = window.performance.now();

  function step(now) {
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
    if (canScrollBudgetDocumentList(event.target, direction)) return;

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
    if (canScrollBudgetDocumentList(event.target, direction)) return;

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

syncPaletteWithSystemTone();
initHomeIntro();
initBudgetCalculator();

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

if (autoplayVideos.length) {
  const videoObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        const shell = video.closest(".work-card");

        if (entry.isIntersecting) {
          shell?.classList.add("is-in-view");
          video.play().catch(() => {});
        } else {
          shell?.classList.remove("is-in-view");
          video.pause();
        }
      });
    },
    { threshold: 0.45 }
  );

  autoplayVideos.forEach((video) => videoObserver.observe(video));
}
