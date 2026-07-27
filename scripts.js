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
let serviceCards = [];
const screenSections = [...document.querySelectorAll("[data-screen]")];
const colorSchemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
const compactIntroQuery = window.matchMedia("(max-width: 620px)");
const transitionLayer = document.createElement("div");
const serviceImagePreview = document.createElement("div");
const rouletteAutoplayDelay = 2000;

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

  const introDuration = compactIntroQuery.matches ? 2350 : 8450;
  window.setTimeout(completeHomeIntro, prefersReducedMotion ? 500 : introDuration);
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
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
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

  return {
    width,
    height,
    spread: Math.max(width < 620 ? 126 : 230, Math.min(width * 0.24, 390)),
    depth: Math.max(72, Math.min(width * 0.095, 128)),
    activeLift: Math.max(12, Math.min(height * 0.045, 34)),
    activeScale: width < 620 ? 1.04 : 1.22,
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

function jumpToScreen(index, options = {}) {
  const nextSection = screenSections[index];
  if (!nextSection || isScreenJumping) return;

  if (prefersReducedMotion) {
    window.scrollTo(0, nextSection.offsetTop);
    updateActiveScreen();
    return;
  }

  const activeIndex = getActiveScreenIndex();
  const currentSection = screenSections[activeIndex];
  const distanceToTarget = Math.abs(window.scrollY - nextSection.offsetTop);
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

  animateScreenScroll(nextSection.offsetTop);
}

function scheduleScreenSettle() {
  if (prefersReducedMotion || isScreenJumping || window.innerWidth < 761) return;

  window.clearTimeout(screenSettleTimer);
  screenSettleTimer = window.setTimeout(() => {
    if (isScreenJumping) return;

    const activeIndex = getActiveScreenIndex();
    const activeSection = screenSections[activeIndex];
    if (!activeSection) return;
    if (activeSection.offsetHeight > window.innerHeight + 24) return;

    const distanceToTop = Math.abs(window.scrollY - activeSection.offsetTop);
    if (distanceToTop > 2) {
      jumpToScreen(activeIndex, { force: true });
    }
  }, 180);
}

function handleScreenWheel(event) {
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
  touchStartY = event.touches[0]?.clientY || 0;
  touchIntent = 0;
  canStepTouchScreen = canUseTouchScreenStep();
}

function handleScreenTouchMove(event) {
  if (prefersReducedMotion || window.innerWidth > 760 || isScreenJumping || !canStepTouchScreen) return;

  const touchCurrentY = event.touches[0]?.clientY || 0;
  touchIntent = touchStartY - touchCurrentY;

  if (Math.abs(touchIntent) < 18) return;

  event.preventDefault();
}

function handleScreenTouchEnd() {
  if (prefersReducedMotion || window.innerWidth > 760 || isScreenJumping || !canStepTouchScreen) return;

  if (Math.abs(touchIntent) < 92) return;

  const activeIndex = getActiveScreenIndex();
  const direction = touchIntent > 0 ? 1 : -1;
  const nextIndex = activeIndex + direction;

  if (nextIndex < 0 || nextIndex >= screenSections.length) return;

  jumpToScreen(nextIndex);
}

function handleScreenKeydown(event) {
  if (event.defaultPrevented || prefersReducedMotion || isScreenJumping) return;

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
  const link = event.currentTarget;
  const href = link.getAttribute("href");
  const target = href === "#" ? screenSections[0] : document.querySelector(href);
  const targetIndex = screenSections.indexOf(target);

  if (targetIndex < 0) return;

  event.preventDefault();
  jumpToScreen(targetIndex, { force: true });
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
    closeServicePreview({ force: true });
  }
});

paletteSwatches.forEach((swatch) => {
  swatch.addEventListener("click", () => setBackgroundOption(swatch.dataset.bgOption));
});

syncPaletteWithSystemTone();
initHomeIntro();

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
