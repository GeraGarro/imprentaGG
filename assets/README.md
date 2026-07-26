# Estructura sugerida para imagenes

Usa nombres simples, sin espacios y en minusculas. Preferi `.webp` para web y deja `.jpg` o `.png` solo cuando sea necesario.

```text
assets/
  logo/
    logo.png

  trabajos/
    img/
      estudiantiles/
        apuntes-a4.webp
        resumen-color.webp
        monografia-anillada.webp

      souvenirs/
        stickers-personalizados.webp
        tarjetas-evento.webp
        etiquetas-emprendimiento.webp

      diseños/
        foto-10x15.webp
        laminas-decorativas.webp
        gigantografia.webp

    movie/
      trabajo-01-web.webm
      trabajo-01-poster.webp
      regaleria.mp4

  hero/
    collage-principal.webp
    fondo-impresiones.webp
    detalle-papel.webp
```

Recomendaciones rapidas:

- `hero/`: imagenes principales del primer pantallazo. Deben verse bien en grande.
- `trabajos/img/`: imagenes reales separadas por carpeta de categoria. El carrusel usa cada carpeta como categoria.
- `trabajos/movie/`: videos y posters de video para la seccion de trabajos realizados.
- Tamaño recomendado para hero: 1400px de ancho como minimo.
- Tamaño recomendado para cards: 900px x 700px aproximadamente.
- Peso ideal por imagen web: menos de 300 KB cuando sea posible.
