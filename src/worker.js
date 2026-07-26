import { Buffer } from "node:buffer";
import { createHash, randomBytes, timingSafeEqual } from "node:crypto";
import {
  buildWhatsAppMessage,
  calculateTotals,
  normalizeOrderDraft,
  safeDownloadName,
} from "./budget.js";
import { renderOrderErrorPage, renderOrderPage } from "./order-page.js";
import { inspectPdf } from "./pdf.js";

const ORDER_PREFIX = "orders/";

class HttpError extends Error {
  constructor(status, message, code = "REQUEST_ERROR") {
    super(message);
    this.name = "HttpError";
    this.status = status;
    this.code = code;
  }
}

function envInteger(value, fallback, minimum, maximum) {
  const parsed = Number.parseInt(value || "", 10);
  if (!Number.isInteger(parsed)) return fallback;
  return Math.min(Math.max(parsed, minimum), maximum);
}

function getLimits(env) {
  const megabyte = 1024 * 1024;
  return {
    maxFiles: envInteger(env.MAX_FILES_PER_ORDER, 6, 1, 12),
    maxFileSize: envInteger(env.MAX_FILE_SIZE_MB, 20, 1, 100) * megabyte,
    maxOrderSize: envInteger(env.MAX_ORDER_SIZE_MB, 60, 1, 300) * megabyte,
    retentionDays: envInteger(env.ORDER_RETENTION_DAYS, 7, 1, 30),
  };
}

function apiHeaders(extra = {}) {
  return {
    "Cache-Control": "no-store",
    "Content-Type": "application/json; charset=utf-8",
    "Referrer-Policy": "no-referrer",
    "X-Content-Type-Options": "nosniff",
    ...extra,
  };
}

function jsonResponse(data, status = 200, headers = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: apiHeaders(headers),
  });
}

function orderPageResponse(content, status = 200) {
  return new Response(content, {
    status,
    headers: {
      "Cache-Control": "no-store",
      "Content-Type": "text/html; charset=utf-8",
      "Content-Security-Policy": "default-src 'self'; img-src 'self' data:; style-src 'self'; script-src 'none'; connect-src 'self'; frame-ancestors 'none'; base-uri 'none'; form-action 'self'",
      "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
      "Referrer-Policy": "no-referrer",
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "DENY",
      "X-Robots-Tag": "noindex, nofollow, noarchive",
    },
  });
}

function assertStorage(env) {
  if (!env.ORDER_FILES) {
    throw new HttpError(503, "El almacenamiento de pedidos todavía no está configurado.", "STORAGE_UNAVAILABLE");
  }
}

function assertSameOrigin(request) {
  const origin = request.headers.get("Origin");
  if (origin && origin !== new URL(request.url).origin) {
    throw new HttpError(403, "El origen de la solicitud no está autorizado.", "INVALID_ORIGIN");
  }
}

async function readJson(request) {
  try {
    return await request.json();
  } catch {
    throw new HttpError(400, "La información enviada no tiene un formato válido.", "INVALID_JSON");
  }
}

function createOrderId(now = new Date()) {
  const date = now.toISOString().slice(0, 10).replaceAll("-", "");
  return `GG-${date}-${randomBytes(3).toString("hex").toUpperCase()}`;
}

function createAccessToken() {
  return randomBytes(24).toString("base64url");
}

function hashToken(token) {
  return createHash("sha256").update(String(token || "")).digest("hex");
}

function tokensMatch(token, expectedHash) {
  if (!token || typeof expectedHash !== "string" || expectedHash.length !== 64) return false;
  const actual = Buffer.from(hashToken(token), "hex");
  const expected = Buffer.from(expectedHash, "hex");
  return actual.length === expected.length && timingSafeEqual(actual, expected);
}

function manifestKey(orderId) {
  return `${ORDER_PREFIX}${orderId}/manifest.json`;
}

function documentKey(orderId, fileId) {
  return `${ORDER_PREFIX}${orderId}/files/${fileId}.pdf`;
}

async function getManifest(env, orderId) {
  const object = await env.ORDER_FILES.get(manifestKey(orderId));
  if (!object) {
    throw new HttpError(404, "No encontramos ese pedido.", "ORDER_NOT_FOUND");
  }

  try {
    return JSON.parse(await object.text());
  } catch {
    throw new HttpError(500, "El pedido guardado no pudo ser interpretado.", "INVALID_MANIFEST");
  }
}

async function saveManifest(env, order) {
  await env.ORDER_FILES.put(manifestKey(order.id), JSON.stringify(order), {
    httpMetadata: {
      contentType: "application/json; charset=utf-8",
      cacheControl: "no-store",
    },
  });
}

function assertOrderAccess(order, token) {
  if (!tokensMatch(token, order.accessTokenHash)) {
    throw new HttpError(403, "El enlace privado no es válido.", "INVALID_ORDER_TOKEN");
  }

  if (Date.now() >= Date.parse(order.expiresAt)) {
    throw new HttpError(410, "Este pedido venció y sus archivos ya no están disponibles.", "ORDER_EXPIRED");
  }
}

async function createOrder(request, env) {
  assertSameOrigin(request);
  assertStorage(env);
  const limits = getLimits(env);
  const payload = await readJson(request);

  let normalized;
  try {
    normalized = normalizeOrderDraft(payload, limits);
  } catch (error) {
    throw new HttpError(400, error.message, "INVALID_ORDER");
  }

  let orderId;
  for (let attempt = 0; attempt < 4; attempt += 1) {
    const candidate = createOrderId();
    if (!await env.ORDER_FILES.head(manifestKey(candidate))) {
      orderId = candidate;
      break;
    }
  }
  if (!orderId) {
    throw new HttpError(503, "No pudimos generar un número de pedido. Intentá nuevamente.", "ORDER_ID_UNAVAILABLE");
  }

  const token = createAccessToken();
  const createdAt = new Date();
  const expiresAt = new Date(createdAt.getTime() + limits.retentionDays * 24 * 60 * 60 * 1000);
  const documents = normalized.documents.map((documentItem) => ({
    ...documentItem,
    id: randomBytes(8).toString("hex"),
    storageKey: null,
    uploadedAt: null,
    checksum: null,
  }));

  const order = {
    version: 1,
    id: orderId,
    status: "uploading",
    createdAt: createdAt.toISOString(),
    finalizedAt: null,
    expiresAt: expiresAt.toISOString(),
    retentionDays: limits.retentionDays,
    accessTokenHash: hashToken(token),
    totalSize: normalized.totalSize,
    documents,
    totals: calculateTotals(documents),
  };

  await saveManifest(env, order);

  return jsonResponse({
    orderId,
    token,
    expiresAt: order.expiresAt,
    documents: documents.map((documentItem) => ({
      id: documentItem.id,
      name: documentItem.name,
      uploadUrl: `/api/presupuestos/${encodeURIComponent(orderId)}/archivos/${encodeURIComponent(documentItem.id)}`,
    })),
  }, 201);
}

async function uploadDocument(request, env, orderId, fileId) {
  assertSameOrigin(request);
  assertStorage(env);
  const order = await getManifest(env, orderId);
  const token = request.headers.get("X-Order-Token");
  assertOrderAccess(order, token);

  if (order.status !== "uploading") {
    throw new HttpError(409, "El pedido ya fue finalizado.", "ORDER_ALREADY_FINALIZED");
  }

  const documentItem = order.documents.find((item) => item.id === fileId);
  if (!documentItem) {
    throw new HttpError(404, "Ese PDF no pertenece al pedido.", "DOCUMENT_NOT_FOUND");
  }

  const declaredLength = Number.parseInt(request.headers.get("Content-Length") || "", 10);
  if (Number.isFinite(declaredLength) && declaredLength !== documentItem.size) {
    throw new HttpError(400, "El tamaño del PDF no coincide con el archivo cotizado.", "FILE_SIZE_MISMATCH");
  }

  const bytes = new Uint8Array(await request.arrayBuffer());
  if (bytes.byteLength !== documentItem.size) {
    throw new HttpError(400, "El PDF recibido está incompleto o fue modificado.", "FILE_SIZE_MISMATCH");
  }

  let inspection;
  try {
    inspection = await inspectPdf(bytes);
  } catch (error) {
    throw new HttpError(400, error.message, "INVALID_PDF");
  }

  const storageKey = documentKey(orderId, fileId);
  const checksum = createHash("sha256").update(bytes).digest("hex");
  await env.ORDER_FILES.put(storageKey, bytes, {
    httpMetadata: {
      contentType: "application/pdf",
      cacheControl: "no-store",
    },
    customMetadata: {
      orderId,
      fileId,
      checksum,
    },
  });

  documentItem.pages = inspection.pages;
  documentItem.uploaded = true;
  documentItem.uploadedAt = new Date().toISOString();
  documentItem.storageKey = storageKey;
  documentItem.checksum = checksum;
  order.totals = calculateTotals(order.documents);
  await saveManifest(env, order);

  return jsonResponse({
    fileId,
    pages: documentItem.pages,
    totals: order.totals,
  });
}

function getOrderDelivery(order, token, request, env) {
  const origin = new URL(request.url).origin;
  const viewUrl = `${origin}/pedido/${encodeURIComponent(order.id)}?token=${encodeURIComponent(token)}`;
  const message = buildWhatsAppMessage(order, viewUrl);
  const whatsappNumber = String(env.WHATSAPP_NUMBER || "5492665050096").replace(/\D/g, "");

  return {
    orderId: order.id,
    totals: order.totals,
    viewUrl,
    whatsappUrl: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
  };
}

async function finalizeOrder(request, env, orderId) {
  assertSameOrigin(request);
  assertStorage(env);
  const payload = await readJson(request);
  const token = payload.token;
  const order = await getManifest(env, orderId);
  assertOrderAccess(order, token);

  if (order.documents.some((documentItem) => !documentItem.uploaded || !documentItem.storageKey)) {
    throw new HttpError(409, "Todavía faltan PDFs por guardar.", "FILES_PENDING");
  }

  if (order.status !== "ready") {
    order.status = "ready";
    order.finalizedAt = new Date().toISOString();
    order.totals = calculateTotals(order.documents);
    await saveManifest(env, order);
  }

  return jsonResponse(getOrderDelivery(order, token, request, env));
}

async function showOrder(request, env, orderId) {
  assertStorage(env);
  const token = new URL(request.url).searchParams.get("token");

  try {
    const order = await getManifest(env, orderId);
    assertOrderAccess(order, token);
    if (order.status !== "ready") {
      throw new HttpError(409, "El pedido todavía se está preparando.", "ORDER_NOT_READY");
    }
    return orderPageResponse(renderOrderPage(order, token));
  } catch (error) {
    const status = error instanceof HttpError ? error.status : 500;
    const message = error instanceof HttpError
      ? error.message
      : "No pudimos abrir este presupuesto.";
    return orderPageResponse(renderOrderErrorPage("Pedido no disponible", message), status);
  }
}

function asciiFileName(name) {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9._ -]/g, "-")
    .slice(0, 140);
}

async function downloadDocument(request, env, orderId, fileId) {
  assertStorage(env);
  const token = new URL(request.url).searchParams.get("token");
  const order = await getManifest(env, orderId);
  assertOrderAccess(order, token);

  if (order.status !== "ready") {
    throw new HttpError(409, "El pedido todavía se está preparando.", "ORDER_NOT_READY");
  }

  const documentItem = order.documents.find((item) => item.id === fileId && item.uploaded);
  if (!documentItem) {
    throw new HttpError(404, "No encontramos ese PDF.", "DOCUMENT_NOT_FOUND");
  }

  const object = await env.ORDER_FILES.get(documentItem.storageKey);
  if (!object) {
    throw new HttpError(404, "El PDF ya no está disponible.", "FILE_NOT_FOUND");
  }

  const safeName = safeDownloadName(documentItem.name);
  const fallbackName = asciiFileName(safeName) || "documento.pdf";
  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set("Cache-Control", "private, no-store");
  headers.set("Content-Disposition", `attachment; filename="${fallbackName}"; filename*=UTF-8''${encodeURIComponent(safeName)}`);
  headers.set("Content-Length", String(object.size));
  headers.set("Referrer-Policy", "no-referrer");
  headers.set("X-Content-Type-Options", "nosniff");

  return new Response(object.body, { headers });
}

async function cleanupExpiredOrders(env) {
  if (!env.ORDER_FILES) return;
  const { retentionDays } = getLimits(env);
  const cutoff = Date.now() - retentionDays * 24 * 60 * 60 * 1000;
  let cursor;

  do {
    const listing = await env.ORDER_FILES.list({
      prefix: ORDER_PREFIX,
      cursor,
      limit: 1000,
    });
    const expiredKeys = listing.objects
      .filter((object) => object.uploaded.getTime() < cutoff)
      .map((object) => object.key);

    if (expiredKeys.length) await env.ORDER_FILES.delete(expiredKeys);
    cursor = listing.truncated ? listing.cursor : undefined;
  } while (cursor);
}

async function routeRequest(request, env) {
  const url = new URL(request.url);
  const path = url.pathname;

  if (request.method === "OPTIONS" && path.startsWith("/api/")) {
    return new Response(null, {
      status: 204,
      headers: {
        Allow: "GET, POST, PUT, OPTIONS",
        "Cache-Control": "no-store",
      },
    });
  }

  if (request.method === "GET" && path === "/api/health") {
    return jsonResponse({ status: "ok", storage: Boolean(env.ORDER_FILES) });
  }

  if (request.method === "POST" && path === "/api/presupuestos") {
    return createOrder(request, env);
  }

  const fileMatch = path.match(/^\/api\/presupuestos\/([^/]+)\/archivos\/([^/]+)$/);
  if (fileMatch && request.method === "PUT") {
    return uploadDocument(request, env, decodeURIComponent(fileMatch[1]), decodeURIComponent(fileMatch[2]));
  }
  if (fileMatch && request.method === "GET") {
    return downloadDocument(request, env, decodeURIComponent(fileMatch[1]), decodeURIComponent(fileMatch[2]));
  }

  const finalizeMatch = path.match(/^\/api\/presupuestos\/([^/]+)\/finalizar$/);
  if (finalizeMatch && request.method === "POST") {
    return finalizeOrder(request, env, decodeURIComponent(finalizeMatch[1]));
  }

  const orderMatch = path.match(/^\/pedido\/([^/]+)$/);
  if (orderMatch && request.method === "GET") {
    return showOrder(request, env, decodeURIComponent(orderMatch[1]));
  }

  if (path.startsWith("/api/")) {
    throw new HttpError(404, "La ruta solicitada no existe.", "ROUTE_NOT_FOUND");
  }

  return env.ASSETS.fetch(request);
}

export default {
  async fetch(request, env) {
    try {
      return await routeRequest(request, env);
    } catch (error) {
      if (!(error instanceof HttpError)) console.error("Unhandled order API error", error);
      const status = error instanceof HttpError ? error.status : 500;
      return jsonResponse({
        error: error instanceof HttpError ? error.code : "INTERNAL_ERROR",
        message: error instanceof HttpError
          ? error.message
          : "Ocurrió un error al preparar el pedido.",
      }, status);
    }
  },

  async scheduled(_controller, env, ctx) {
    ctx.waitUntil(cleanupExpiredOrders(env));
  },
};

export { cleanupExpiredOrders, createOrderId, hashToken, tokensMatch };
