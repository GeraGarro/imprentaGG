import assert from "node:assert/strict";
import test from "node:test";
import { PDFDocument } from "pdf-lib";
import {
  buildWhatsAppMessage,
  calculateDocument,
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
    total: 27100,
  });
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
  const { documents } = normalizeOrderDraft({ documents: [draftDocument()] }, limits);
  documents[0].pages = 200;
  documents[0].uploaded = true;
  const order = {
    id: "GG-20260726-ABC123",
    documents,
    totals: calculateTotals(documents),
    retentionDays: 7,
  };
  const message = buildWhatsAppMessage(order, "https://example.com/pedido/privado");

  assert.match(message, /GG-20260726-ABC123/);
  assert.match(message, /\$\s?22\.500/);
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
