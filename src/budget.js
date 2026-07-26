export const BUDGET_PRICES = Object.freeze({
  bn: 150,
  color: 200,
  binding: 2500,
});

export const PHOTO_SHEET_PRICE = 2500;

export const PHOTO_FORMATS = Object.freeze({
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

export const STICKER_MATERIALS = Object.freeze({
  mate: { label: "Papel mate", price: 2500 },
  brillante: { label: "Papel brillante", price: 3000 },
  transparente: { label: "Papel transparente", price: 3500 },
  holografico: { label: "Papel holográfico", price: 4000 },
});

const MAX_PAGES_PER_PDF = 5000;
const MAX_COPIES = 100;
const MAX_QUOTE_ITEMS = 20;
const A4_WIDTH = 20.2;
const A4_HEIGHT = 29;

function requireInteger(value, label, minimum, maximum) {
  const parsed = Number(value);
  if (!Number.isInteger(parsed) || parsed < minimum || parsed > maximum) {
    throw new TypeError(`${label} debe estar entre ${minimum} y ${maximum}.`);
  }
  return parsed;
}

function requireDecimal(value, label, minimum, maximum) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed) || parsed < minimum || parsed > maximum) {
    throw new TypeError(`${label} debe estar entre ${minimum} y ${maximum}.`);
  }
  return Math.round(parsed * 10) / 10;
}

export function calculateStickerLayout(width, height, quantity) {
  const stickerWidth = requireDecimal(width, "El ancho del sticker", 0.5, A4_HEIGHT);
  const stickerHeight = requireDecimal(height, "El alto del sticker", 0.5, A4_HEIGHT);
  const requested = requireInteger(quantity, "La cantidad de stickers", 1, 5000);

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
  if (best.perSheet < 1) throw new TypeError("El tamaño del sticker no entra en el área imprimible A4.");

  return {
    width: stickerWidth,
    height: stickerHeight,
    quantity: requested,
    ...best,
    sheets: Math.ceil(requested / best.perSheet),
  };
}

function normalizeQuoteItem(item, index) {
  const position = index + 1;
  if (item?.type === "photo") {
    const size = String(item.size || "").toLowerCase();
    const format = PHOTO_FORMATS[size];
    if (!format) throw new TypeError(`El tamaño de fotografías ${position} no es válido.`);
    return {
      type: "photo",
      size,
      quantity: requireInteger(item.quantity, `La cantidad de fotografías ${position}`, 1, 500),
    };
  }

  if (item?.type === "sticker") {
    const inferredSize = Number(item.width) === Number(item.height) ? String(item.width) : "";
    const size = String(item.size || inferredSize).toLowerCase();
    const format = PHOTO_FORMATS[size];
    if (!format) throw new TypeError(`El tamaño de stickers ${position} no es válido.`);
    const material = Object.hasOwn(STICKER_MATERIALS, item.material) ? item.material : "mate";
    const layout = calculateStickerLayout(format.width, format.height, item.quantity);
    return {
      type: "sticker",
      size,
      width: layout.width,
      height: layout.height,
      material,
      quantity: layout.quantity,
      perSheet: layout.perSheet,
      sheets: layout.sheets,
      rotated: layout.rotated,
    };
  }

  throw new TypeError(`El trabajo adicional ${position} no es válido.`);
}

function cleanFileName(value) {
  const name = String(value || "")
    .replace(/[\\/\u0000-\u001f\u007f]/g, "-")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 160);

  if (!name || !name.toLowerCase().endsWith(".pdf")) {
    throw new TypeError("Cada archivo debe tener un nombre PDF válido.");
  }

  return name;
}

export function normalizeOrderDraft(payload, limits) {
  if (!payload || typeof payload !== "object" || !Array.isArray(payload.documents)) {
    throw new TypeError("El pedido no contiene documentos válidos.");
  }

  const maxFiles = requireInteger(limits.maxFiles, "El límite de archivos", 1, 20);
  const maxFileSize = requireInteger(limits.maxFileSize, "El límite por archivo", 1, 1024 ** 3);
  const maxOrderSize = requireInteger(limits.maxOrderSize, "El límite del pedido", 1, 2 * 1024 ** 3);

  if (payload.documents.length < 1 || payload.documents.length > maxFiles) {
    throw new TypeError(`Podés incluir entre 1 y ${maxFiles} PDFs por pedido.`);
  }

  const documents = payload.documents.map((documentItem, index) => {
    const position = index + 1;
    const name = cleanFileName(documentItem?.name);
    const size = requireInteger(documentItem?.size, `El tamaño del PDF ${position}`, 1, maxFileSize);
    const clientPages = requireInteger(documentItem?.pages, `Las páginas del PDF ${position}`, 0, MAX_PAGES_PER_PDF);
    const copies = requireInteger(documentItem?.copies, `Las copias del PDF ${position}`, 1, MAX_COPIES);
    const mode = documentItem?.mode === "color" ? "color" : documentItem?.mode === "bn" ? "bn" : null;
    const sides = documentItem?.sides === "doble" ? "doble" : documentItem?.sides === "simple" ? "simple" : null;

    if (!mode || !sides) {
      throw new TypeError(`Revisá el tipo de impresión y las caras del PDF ${position}.`);
    }

    const binding = documentItem?.binding === true;
    const notebooks = binding
      ? requireInteger(documentItem?.notebooks, `Los cuadernos del PDF ${position}`, 1, copies)
      : 0;

    return {
      name,
      size,
      clientPages,
      pages: null,
      mode,
      sides,
      copies,
      binding,
      notebooks,
      uploaded: false,
    };
  });

  const totalSize = documents.reduce((sum, documentItem) => sum + documentItem.size, 0);
  if (totalSize > maxOrderSize) {
    throw new TypeError(`El pedido supera el máximo permitido de ${Math.floor(maxOrderSize / 1024 / 1024)} MB.`);
  }

  const rawQuoteItems = payload.quoteItems === undefined ? [] : payload.quoteItems;
  if (!Array.isArray(rawQuoteItems) || rawQuoteItems.length > MAX_QUOTE_ITEMS) {
    throw new TypeError(`Podés incluir hasta ${MAX_QUOTE_ITEMS} trabajos de fotos o stickers.`);
  }
  const quoteItems = rawQuoteItems.map(normalizeQuoteItem);

  return { documents, quoteItems, totalSize };
}

export function calculateDocument(documentItem) {
  const pages = Number.isInteger(documentItem.pages)
    ? documentItem.pages
    : documentItem.clientPages;
  const sheetsPerCopy = documentItem.sides === "doble" ? Math.ceil(pages / 2) : pages;
  const sheets = sheetsPerCopy * documentItem.copies;
  const printTotal = sheets * BUDGET_PRICES[documentItem.mode];
  const bindingTotal = documentItem.binding
    ? documentItem.notebooks * BUDGET_PRICES.binding
    : 0;

  return {
    pages,
    sheets,
    printTotal,
    bindingTotal,
    total: printTotal + bindingTotal,
  };
}

export function calculateQuoteItem(item) {
  if (item.type === "photo") {
    const format = PHOTO_FORMATS[item.size];
    const quantity = requireInteger(item.quantity, "La cantidad de fotografías", 1, 500);
    const layout = calculateStickerLayout(format.width, format.height, quantity);
    const isSingleUnit = quantity === 1;
    return {
      ...layout,
      isSingleUnit,
      unitPrice: format.price,
      sheetPrice: PHOTO_SHEET_PRICE,
      total: isSingleUnit ? format.price : layout.sheets * PHOTO_SHEET_PRICE,
      pending: false,
    };
  }

  const layout = calculateStickerLayout(item.width, item.height, item.quantity);
  const materialKey = Object.hasOwn(STICKER_MATERIALS, item.material) ? item.material : "mate";
  const material = STICKER_MATERIALS[materialKey];
  return {
    ...layout,
    material: materialKey,
    materialLabel: material.label,
    sheetPrice: material.price,
    total: layout.sheets * material.price,
    pending: false,
  };
}

export function calculateTotals(documents, quoteItems = []) {
  const totals = documents.reduce((accumulator, documentItem) => {
    const calculated = calculateDocument(documentItem);
    accumulator.pages += calculated.pages;
    accumulator.sheets += calculated.sheets;
    accumulator.printTotal += calculated.printTotal;
    accumulator.bindingTotal += calculated.bindingTotal;
    accumulator.total += calculated.total;
    return accumulator;
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

  quoteItems.forEach((item) => {
    const result = calculateQuoteItem(item);
    if (item.type === "photo") totals.photoTotal += result.total;
    if (item.type === "sticker") totals.stickerTotal += result.total;
    if (result.pending) totals.pendingItems += 1;
    totals.total += result.total;
  });

  return totals;
}

export function formatArs(value) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(value);
}

function shorten(value, maximum = 58) {
  const text = String(value);
  if (text.length <= maximum) return text;
  return `${text.slice(0, maximum - 3)}...`;
}

export function buildWhatsAppMessage(order, viewUrl) {
  const documentLines = order.documents.map((documentItem, index) => {
    const result = calculateDocument(documentItem);
    const binding = documentItem.binding
      ? `${documentItem.notebooks} anillado${documentItem.notebooks === 1 ? "" : "s"}`
      : "sin anillado";

    return [
      `PDF ${index + 1}: ${shorten(documentItem.name)}`,
      `${result.pages} pág. · ${documentItem.mode === "color" ? "Color" : "B&N"} · ${documentItem.sides === "doble" ? "Doble faz" : "Simple faz"}`,
      `${documentItem.copies} copia${documentItem.copies === 1 ? "" : "s"} · ${result.sheets} hojas · ${binding}`,
      `Subtotal: ${formatArs(result.total)}`,
    ].join("\n");
  });

  const quoteItems = Array.isArray(order.quoteItems) ? order.quoteItems : [];
  const quoteLines = quoteItems.map((item, index) => {
    if (item.type === "photo") {
      const format = PHOTO_FORMATS[item.size];
      const result = calculateQuoteItem(item);
      const pricingLine = result.isSingleUnit
        ? `Precio individual: ${formatArs(result.unitPrice)}`
        : `${result.sheets} hoja${result.sheets === 1 ? "" : "s"} A4 × ${formatArs(result.sheetPrice)}`;
      return [
        `Foto ${index + 1}: ${format.label} · ${item.quantity} unidad${item.quantity === 1 ? "" : "es"}`,
        `${result.perSheet} por hoja A4 · ${pricingLine}`,
        `Subtotal: ${formatArs(result.total)}`,
      ].join("\n");
    }

    const result = calculateQuoteItem(item);
    const format = PHOTO_FORMATS[item.size] || { label: `${result.width} × ${result.height} cm` };
    return [
      `Stickers ${index + 1}: ${format.label} · ${result.quantity} unidad${result.quantity === 1 ? "" : "es"}`,
      `${result.materialLabel} · ${result.perSheet} por plancha A4 · ${result.sheets} plancha${result.sheets === 1 ? "" : "s"}`,
      `${formatArs(result.sheetPrice)} por plancha A4`,
      `Subtotal: ${formatArs(result.total)}`,
    ].join("\n");
  });

  return [
    "Hola Impresiones GG, preparé este pedido desde la web.",
    `*Pedido ${order.id}*`,
    documentLines.join("\n\n"),
    quoteLines.join("\n\n"),
    `*Total calculado: ${formatArs(order.totals.total)}*`,
    `Detalle y archivos: ${viewUrl}`,
    `Los archivos quedan disponibles durante ${order.retentionDays || 7} días.`,
    quoteItems.length ? "Las imágenes de fotos y stickers se enviarán por este chat." : "",
  ].filter(Boolean).join("\n\n");
}

export function safeDownloadName(value) {
  return cleanFileName(value).replace(/[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ._ -]/g, "-");
}
