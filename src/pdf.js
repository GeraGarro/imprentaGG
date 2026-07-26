import { PDFDocument } from "pdf-lib";

export async function inspectPdf(bytes) {
  const header = new TextDecoder("latin1").decode(bytes.slice(0, 1024));
  if (!header.includes("%PDF-")) {
    throw new TypeError("El archivo no contiene una cabecera PDF válida.");
  }

  let document;
  try {
    document = await PDFDocument.load(bytes, {
      ignoreEncryption: true,
      updateMetadata: false,
    });
  } catch {
    throw new TypeError("No pudimos validar la estructura del PDF.");
  }

  const pages = document.getPageCount();
  if (!Number.isInteger(pages) || pages < 1) {
    throw new TypeError("El PDF no contiene páginas imprimibles.");
  }

  return { pages };
}
