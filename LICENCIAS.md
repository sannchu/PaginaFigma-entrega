# Licencias y derechos de autor de los recursos multimedia

Todos los recursos de `src/media/` proceden de los originales guardados en `media-bruto/`. Esta tabla indica el origen y los derechos de cada uno.

> Estado: las imágenes, el vídeo y el logotipo están completos. **Falta completar los datos del audio** (marcados con `COMPLETAR`) antes de entregar.

## Imágenes (10 fotografías/ilustraciones)

- **Origen:** generadas con IA en el chat de Gemini (modelo de imagen «Nano Banana», según indica el autor del proyecto).
- **Autor/a:** Alejandro Sanz (`sannchu`), autor del *prompt* y de la selección y edición.
- **Licencia:** no son recursos Creative Commons. Son contenido generado por IA y su uso se rige por las [Condiciones de uso de Google Gemini](https://policies.google.com/terms/generative-ai). No reproducen carteles ni obras de terceros.
- **Justificación:** sustituyen a los carteles reales de películas que usaba la primera versión del proyecto, que tenían derechos de autor de sus distribuidoras y se han eliminado.

| Original (`media-bruto/img/`) | Optimizada (`src/media/img/`) | Uso en la web |
|---|---|---|
| `superheroe-libelula.jpg` | `superheroe-libelula.webp` | Tarjeta Spider-Man: No Way Home |
| `desierto-cristal.jpg` | `desierto-cristal.webp` | Tarjeta Dune: Parte dos |
| `criaturas-emocion.jpg` | `criaturas-emocion.webp` | Tarjeta Del revés 2 |
| `mundo-pastel.jpg` | `mundo-pastel.webp` | Tarjeta Barbie |
| `drama-cientifico.jpg` | `drama-cientifico.webp` | Tarjeta Oppenheimer |
| `detective-noche.jpg` | `detective-noche.webp` | Tarjeta The Batman |
| `zorro-artes-marciales.jpg` | `zorro-artes-marciales.webp` | Tarjeta Kung Fu Panda 4 |
| `colosos.jpg` | `colosos.webp` | Tarjeta Godzilla y Kong |
| `doble-accion.jpg` | `doble-accion.webp` | Tarjeta El especialista |
| `motos-portada.jpg` | `motos-portada.webp` | Imagen de la portada y póster del vídeo |

## Vídeo

- **Archivo:** `media-bruto/video/motos-carrera-1080p.mp4` (original) → `src/media/video/motos-carrera-720p.mp4` (optimizado, 720p).
- **Duración:** unos 15 s. Se usa como fondo de la portada del explorador.
- **Origen:** generado con IA mediante Gemini («Omni Flash», según indica el autor del proyecto).
- **Autor/a:** Alejandro Sanz (`sannchu`).
- **Licencia:** no es Creative Commons. Contenido generado por IA sujeto a las [Condiciones de uso de Google Gemini](https://policies.google.com/terms/generative-ai).

## Audio

- **Archivo:** `media-bruto/audio/entrada-original.mp3` (original) → `src/media/audio/entrada.mp3` (recortado, 128 kbps).
- **Uso:** efecto de sonido al iniciar sesión.
- **Origen (URL):** `COMPLETAR` (banco Creative Commons, por ejemplo Freesound).
- **Autor/a:** `COMPLETAR`
- **Licencia CC exacta:** `COMPLETAR` (por ejemplo CC0 1.0, CC BY 4.0…). Si es CC BY, hay que mantener aquí la atribución al autor.

## Logotipo / icono vectorial

- **Archivo:** `src/media/img/logo-movieapp.svg`
- **Origen:** dibujado a mano para este proyecto (icono de claqueta, el mismo de la cabecera de la web).
- **Autor/a:** Alejandro Sanz (`sannchu`).
- **Licencia:** obra propia, sin restricciones de uso dentro de este proyecto.

## Otros componentes

- **Bootstrap** (`src/js/`, `src/scss/`): [licencia MIT](https://github.com/twbs/bootstrap/blob/main/LICENSE), © The Bootstrap Authors.
