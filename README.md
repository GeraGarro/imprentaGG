# Impresiones GG Digital Fix

Sitio y cotizador de PDFs desplegable como Cloudflare Worker con Static Assets y almacenamiento privado en R2.

## Flujo del presupuesto

1. El cliente carga y configura uno o varios PDFs en forma independiente.
2. El navegador crea un pedido y sube los archivos al Worker.
3. El Worker valida cada PDF, vuelve a contar sus paginas y recalcula el precio con los valores oficiales.
4. Los archivos se guardan temporalmente en R2 y el pedido recibe un enlace privado.
5. La web abre WhatsApp con el detalle, el total y ese enlace listos para enviar a la imprenta.
6. Un proceso diario elimina los objetos con mas de 7 dias.

WhatsApp no permite que una web adjunte archivos ni envie un mensaje por cuenta del cliente. Por eso el mensaje se abre preparado y el cliente confirma el envio; la imprenta descarga los PDFs desde el enlace privado.

## Que es R2

R2 es el almacenamiento de objetos de Cloudflare. En este proyecto funciona como un disco privado para los PDFs: los archivos no son publicos, no aparecen en buscadores y solo se entregan desde el Worker cuando el enlace contiene el token correcto.

La vinculacion se llama `ORDER_FILES` y esta declarada en `wrangler.jsonc`. Wrangler puede aprovisionar el recurso durante el despliegue. La cuenta de Cloudflare debe tener R2 habilitado.

## Desarrollo local

```powershell
npm install
npm run dev
```

La web queda disponible en `http://127.0.0.1:8787/`.

Comprobaciones antes de publicar:

```powershell
npm test
npm run check
```

## Produccion en Cloudflare

El proyecto ya incluye la configuracion necesaria para Workers Builds:

- Comando de despliegue: `npm run deploy`
- Directorio raiz: `/`
- Worker: `src/worker.js`
- Archivos publicos: `public/`
- Compatibilidad Node.js: `nodejs_compat`
- Tarea de limpieza: `17 5 * * *`

Cada push a la rama conectada inicia un nuevo build. Si Cloudflare solicita habilitar R2, se hace una sola vez desde **Storage & Databases > R2** y luego se vuelve a ejecutar el despliegue.

## Protecciones incluidas

- Recuento y cotizacion definitivos en el servidor.
- Limites de 6 PDFs, 20 MB por archivo y 60 MB por pedido.
- Tokens aleatorios guardados como hash y comparados en tiempo constante.
- Pedidos y descargas sin cache, sin indexacion y sin iframes.
- PDFs privados con vencimiento de 7 dias.
- Validacion de origen para las operaciones de escritura.
