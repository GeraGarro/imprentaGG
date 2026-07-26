import { calculateDocument, formatArs } from "./budget.js";

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);
}

function formatDate(value) {
  return new Intl.DateTimeFormat("es-AR", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "America/Argentina/Buenos_Aires",
  }).format(new Date(value));
}

function pageShell(title, content) {
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="noindex, nofollow, noarchive">
  <title>${escapeHtml(title)} | Impresiones GG</title>
  <link rel="icon" type="image/png" href="/assets/logo/logo.png">
  <link rel="stylesheet" href="/order.css">
</head>
<body>
  ${content}
</body>
</html>`;
}

export function renderOrderPage(order, token) {
  const documentCards = order.documents.map((documentItem, index) => {
    const result = calculateDocument(documentItem);
    const bindingLabel = documentItem.binding
      ? `${documentItem.notebooks} cuaderno${documentItem.notebooks === 1 ? "" : "s"} anillado${documentItem.notebooks === 1 ? "" : "s"}`
      : "Sin anillado";
    const downloadUrl = `/api/presupuestos/${encodeURIComponent(order.id)}/archivos/${encodeURIComponent(documentItem.id)}?token=${encodeURIComponent(token)}`;

    return `<li class="order-document order-tone-${index % 6}">
      <div class="order-document-heading">
        <span>PDF ${index + 1}</span>
        <div>
          <h2>${escapeHtml(documentItem.name)}</h2>
          <p>${result.pages} página${result.pages === 1 ? "" : "s"} verificadas</p>
        </div>
        <strong>${escapeHtml(formatArs(result.total))}</strong>
      </div>
      <dl class="order-document-specs">
        <div><dt>Impresión</dt><dd>${documentItem.mode === "color" ? "Color" : "Blanco y negro"}</dd></div>
        <div><dt>Caras</dt><dd>${documentItem.sides === "doble" ? "Doble faz" : "Simple faz"}</dd></div>
        <div><dt>Copias</dt><dd>${documentItem.copies}</dd></div>
        <div><dt>Hojas</dt><dd>${result.sheets}</dd></div>
        <div><dt>Terminación</dt><dd>${escapeHtml(bindingLabel)}</dd></div>
      </dl>
      <a class="order-download" href="${downloadUrl}">Descargar PDF</a>
    </li>`;
  }).join("");

  return pageShell(`Pedido ${order.id}`, `
    <header class="order-header">
      <a class="order-brand" href="/" aria-label="Volver a Impresiones GG">
        <img src="/assets/logo/logo.png" alt="Impresiones GG">
        <span>Impresiones GG Digital Fix</span>
      </a>
      <span class="order-status">Pedido verificado</span>
    </header>
    <main class="order-main">
      <section class="order-title">
        <div>
          <p>Presupuesto privado</p>
          <h1>${escapeHtml(order.id)}</h1>
          <span>Creado el ${escapeHtml(formatDate(order.createdAt))}</span>
        </div>
        <div class="order-grand-total">
          <span>Total estimado</span>
          <strong>${escapeHtml(formatArs(order.totals.total))}</strong>
        </div>
      </section>

      <section class="order-summary" aria-label="Resumen del pedido">
        <div><span>PDFs</span><strong>${order.documents.length}</strong></div>
        <div><span>Páginas</span><strong>${order.totals.pages}</strong></div>
        <div><span>Hojas</span><strong>${order.totals.sheets}</strong></div>
        <div><span>Anillado</span><strong>${escapeHtml(formatArs(order.totals.bindingTotal))}</strong></div>
      </section>

      <ul class="order-documents">${documentCards}</ul>

      <footer class="order-footer">
        <strong>Acceso temporal y privado</strong>
        <p>Este enlace permite descargar los archivos del pedido. No lo publiques ni lo reenvíes. Los documentos se eliminan automáticamente después del ${escapeHtml(formatDate(order.expiresAt))}.</p>
      </footer>
    </main>
  `);
}

export function renderOrderErrorPage(title, message) {
  return pageShell(title, `
    <main class="order-error">
      <a class="order-brand" href="/">
        <img src="/assets/logo/logo.png" alt="Impresiones GG">
        <span>Impresiones GG Digital Fix</span>
      </a>
      <p>Acceso al presupuesto</p>
      <h1>${escapeHtml(title)}</h1>
      <span>${escapeHtml(message)}</span>
      <a class="order-home" href="/">Volver a la web</a>
    </main>
  `);
}
