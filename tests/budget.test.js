import assert from "node:assert/strict";
import test from "node:test";
import { PDFDocument } from "pdf-lib";
import {
  buildWhatsAppMessage,
  calculateDocument,
  calculateStickerLayout,
  calculateTotals,
  normalizeOrderDraft,
} from "../src/budget.js";
import { inspectPdf } from "../src/pdf.js";
import { createOrderId, hashToken, tokensMatch } from "../src/worker.js";

const limits = {
  maxFiles: 6,
  maxFileSize: 20 * 1024 * 1024,
  maxOrderSize: 60 * 1024 * 1024,
};

function draftDocument(overrides = {}) {
  return {
    name: "apuntes.pdf",
    size: 1024,
    pages: 200,
    mode: "color",
    sides: "doble",
    copies: 1,
    binding: true,
    notebooks: 1,
    ...overrides,
  };
}

test("calcula hojas, impresión y anillado por documento", () => {
  const { documents } = normalizeOrderDraft({ documents: [draftDocument()] }, limits);
  const result = calculateDocument(documents[0]);

  assert.deepEqual(result, {
    pages: 200,
    sheets: 100,
    printTotal: 20000,
    bindingTotal: 2500,
    total: 22500,
  });
});

test("suma configuraciones independientes de múltiples PDFs", () => {
  const { documents } = normalizeOrderDraft({
    documents: [
      draftDocument(),
      draftDocument({ name: "guía.pdf", pages: 4, mode: "bn", sides: "simple", binding: false }),
      draftDocument({ name: "flyer.pdf", pages: 2, copies: 10, sides: "simple", binding: false }),
    ],
  }, limits);

  assert.deepEqual(calculateTotals(documents), {
    pages: 206,
    sheets: 124,
    printTotal: 24600,
    bindingTotal: 2500,
    photoTotal: 0,
    stickerTotal: 0,
    pendingItems: 0,
    total: 27100,
  });
});

test("suma PDFs, fotografías y hojas A4 de stickers", () => {
  const { documents, quoteItems } = normalizeOrderDraft({
    documents: [draftDocument()],
    quoteItems: [
      { type: "photo", size: "10", quantity: 3 },
      { type: "sticker", size: "5", material: "mate", quantity: 24 },
    ],
  }, limits);
  const totals = calculateTotals(documents, quoteItems);

  assert.equal(totals.photoTotal, 2500);
  assert.equal(totals.stickerTotal, 5000);
  assert.equal(totals.pendingItems, 0);
  assert.equal(totals.total, 30000);
  assert.deepEqual(calculateStickerLayout(5, 5, 24), {
    width: 5,
    height: 5,
    quantity: 24,
    columns: 4,
    rows: 5,
    perSheet: 20,
    rotated: false,
    sheets: 2,
  });
});

test("calcula capacidad sobre 20,2 × 29 cm para todos los tamaños", () => {
  const cases = [
    { size: 5, perSheet: 20, sheets: 2 },
    { size: 6, perSheet: 12, sheets: 2 },
    { size: 7, perSheet: 8, sheets: 3 },
    { size: 8, perSheet: 6, sheets: 4 },
    { size: 9, perSheet: 6, sheets: 4 },
    { size: 10, perSheet: 4, sheets: 6 },
    { size: 11, perSheet: 2, sheets: 11 },
    { size: 12, perSheet: 2, sheets: 11 },
    { size: 15, perSheet: 1, sheets: 21 },
    { width: 20.2, height: 29, perSheet: 1, sheets: 21 },
  ];

  cases.forEach(({ size, width = size, height = size, perSheet, sheets }) => {
    const layout = calculateStickerLayout(width, height, 21);
    assert.equal(layout.perSheet, perSheet);
    assert.equal(layout.sheets, sheets);
  });
});

test("aplica precios individuales a una única fotografía", () => {
  const sizes = ["5", "6", "7", "8", "9", "10", "11", "12", "15", "a4"];
  const { documents, quoteItems } = normalizeOrderDraft({
    documents: [draftDocument()],
    quoteItems: sizes.map((size) => ({ type: "photo", size, quantity: 1 })),
  }, limits);
  const totals = calculateTotals(documents, quoteItems);

  assert.equal(totals.photoTotal, 9500);
  assert.equal(totals.total, 32000);
});

test("cotiza múltiples fotografías por hojas A4 necesarias", () => {
  const { documents, quoteItems } = normalizeOrderDraft({
    documents: [draftDocument()],
    quoteItems: [{ type: "photo", size: "8", quantity: 12 }],
  }, limits);
  const totals = calculateTotals(documents, quoteItems);

  assert.equal(totals.photoTotal, 5000);
  assert.equal(totals.total, 27500);
});

test("calcula el valor de cada material autoadhesivo", () => {
  const materials = ["mate", "brillante", "transparente", "holografico"];
  const { documents, quoteItems } = normalizeOrderDraft({
    documents: [draftDocument()],
    quoteItems: materials.map((material) => ({ type: "sticker", size: "5", material, quantity: 1 })),
  }, limits);
  const totals = calculateTotals(documents, quoteItems);

  assert.equal(totals.stickerTotal, 13000);
  assert.equal(totals.total, 35500);
});

test("rechaza más cuadernos que copias", () => {
  assert.throws(
    () => normalizeOrderDraft({
      documents: [draftDocument({ copies: 2, notebooks: 3 })],
    }, limits),
    /cuadernos/i,
  );
});

test("rechaza archivos que superan los límites", () => {
  assert.throws(
    () => normalizeOrderDraft({
      documents: [draftDocument({ size: limits.maxFileSize + 1 })],
    }, limits),
    /tamaño/i,
  );
});

test("genera un mensaje con pedido, total y enlace privado", () => {
  const { documents, quoteItems } = normalizeOrderDraft({
    documents: [draftDocument()],
    quoteItems: [
      { type: "photo", size: "5", quantity: 2 },
      { type: "sticker", size: "5", material: "mate", quantity: 1 },
    ],
  }, limits);
  documents[0].pages = 200;
  documents[0].uploaded = true;
  const order = {
    id: "GG-20260726-ABC123",
    documents,
    quoteItems,
    totals: calculateTotals(documents, quoteItems),
    retentionDays: 7,
  };
  const message = buildWhatsAppMessage(order, "https://example.com/pedido/privado");

  assert.match(message, /GG-20260726-ABC123/);
  assert.match(message, /\$\s?27\.500/);
  assert.match(message, /Foto 1/);
  assert.match(message, /1 hoja A4 × \$\s?2\.500/);
  assert.match(message, /Stickers 2/);
  assert.match(message, /Papel mate · 20 por plancha A4 · 1 plancha/);
  assert.match(message, /https:\/\/example\.com\/pedido\/privado/);
});

test("valida la cantidad real de páginas de un PDF", async () => {
  const pdf = await PDFDocument.create();
  pdf.addPage();
  pdf.addPage();
  pdf.addPage();
  const bytes = await pdf.save();

  assert.deepEqual(await inspectPdf(bytes), { pages: 3 });
});

test("genera identificadores y compara tokens sin guardar el valor original", () => {
  const id = createOrderId(new Date("2026-07-26T12:00:00.000Z"));
  const tokenHash = hashToken("token-secreto");

  assert.match(id, /^GG-20260726-[A-F0-9]{6}$/);
  assert.equal(tokenHash.length, 64);
  assert.equal(tokensMatch("token-secreto", tokenHash), true);
  assert.equal(tokensMatch("otro-token", tokenHash), false);
});
