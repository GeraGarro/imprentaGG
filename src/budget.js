export const BUDGET_PRICES = Object.freeze({
  bn: 150,
  color: 200,
  binding: 2500,
});

const MAX_PAGES_PER_PDF = 5000;
const MAX_COPIES = 100;

function requireInteger(value, label, minimum, maximum) {
  const parsed = Number(value);
  if (!Number.isInteger(parsed) || parsed < minimum || parsed > maximum) {
    throw new TypeError(`${label} debe estar entre ${minimum} y ${maximum}.`);
  }
  return parsed;
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

  return { documents, totalSize };
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

export function calculateTotals(documents) {
  return documents.reduce((totals, documentItem) => {
    const result = calculateDocument(documentItem);
    totals.pages += result.pages;
    totals.sheets += result.sheets;
    totals.printTotal += result.printTotal;
    totals.bindingTotal += result.bindingTotal;
    totals.total += result.total;
    return totals;
  }, {
    pages: 0,
    sheets: 0,
    printTotal: 0,
    bindingTotal: 0,
    total: 0,
  });
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

  return [
    "Hola Impresiones GG, preparé este pedido desde la web.",
    `*Pedido ${order.id}*`,
    documentLines.join("\n\n"),
    `*Total estimado: ${formatArs(order.totals.total)}*`,
    `Detalle y PDFs: ${viewUrl}`,
    `Los archivos quedan disponibles durante ${order.retentionDays || 7} días.`,
  ].join("\n\n");
}

export function safeDownloadName(value) {
  return cleanFileName(value).replace(/[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ._ -]/g, "-");
}
