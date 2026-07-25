# Handoff: Rebrand flino.dev — dirección "Cursor" (monocromo + señal)

---

## ⚠️ Estado de implementación — 25 de julio de 2026

Este documento es la especificación original. **La fase 1 ya está implementada**;
lo que sigue describe el rebrand completo, no lo pendiente. Usa esta tabla para
saber qué falta.

### ✅ Fase 1 — Identidad (hecha)

| Pieza | Dónde vive |
|---|---|
| Lockup `flino ▪ dev` | `src/components/Logo.astro` — todo en `em`, escala con `size` |
| Logo en el header, a 23px | `src/components/Header.astro` |
| JetBrains Mono self-hosted | `public/fonts/jetbrains-mono-latin.woff2` (variable, 31 KB, subset latin, OFL) · `@font-face` en `src/styles/global.css` · precargada en `BaseHead.astro` |
| Tokens `signal` y `alert`, familia `font-brand` | `tailwind.config.mjs` |
| Wordmark en texto (`flino.dev`) | `src/consts.ts` · `src/pages/llms.txt.ts` · `src/pages/og/[...slug].png.ts` |
| Avatar, favicon, variantes | `public/flinodev.png` (avatar + imagen social) · `public/favicon.png` (la `f` sola) · `public/avatar-circular.png` · `public/avatar-inverso.png` |
| Cuadrado de señal como indicador de estado | bloques "disponible" en `src/pages/work/index.astro` y `src/pages/projects/index.astro` |

**Decisiones tomadas al implementar, que se apartan de la letra del handoff:**

- El cuadrado se alinea con `align-items: baseline` y se dimensiona en `em`, en
  vez de usar los px por tamaño que da la sección "El logotipo". Da el mismo
  resultado y no se rompe en tamaños que el handoff no previó.
- El favicon es **PNG**, no SVG. El SVG dependería de `font-family` y en una
  máquina sin JetBrains Mono renderizaría con otra tipografía. El PNG está
  rasterizado y se ve idéntico en todos lados.

**Limpieza hecha en el mismo pase** (por coherencia con el sistema, no por el
rebrand en sí): se eliminó la sección "Educación continua" con los cinco logos
de plataformas de cursos —rompía la regla de un acento por pantalla y
posicionaba como estudiante en vez de practicante—; TryHackMe se movió a texto
en el párrafo de intro. También se quitaron todos los emoji del chrome del
sitio (títulos y botones), que se renderizaban a color.

### ⏳ Fase 2 — Aplicación al sitio (pendiente)

Se pospuso a propósito hasta después del lanzamiento de Habitus: es trabajo de
días y competía con el calendario editorial (`docs/calendario-editorial.md`).

Falta todo lo de la sección **Screens / Views** de más abajo:

- Tipografía de cuerpo, escala de espaciado, radio `0` y hairlines de 1px.
- Header, hero, grid de destacados y footer según la especificación.
- Miniaturas 16:9 y la plantilla editable.
- Favicon `.ico` / `apple-touch-icon`, y `og:image` con la marca nueva
  (la ruta `og/[...slug].png.ts` ya usa el wordmark correcto, pero el layout
  sigue siendo el anterior).

**Antes de implementar el footer, decidir qué hacer con el indicador de
estado.** Hoy `src/components/Footer.astro:68` tiene un punto verde fijo
(`bg-green-500`) junto a "All systems normal". El handoff dice que debe ser
dato, no decoración — y en un sitio cuyo argumento es publicar números
honestos, un indicador que siempre dice OK es lo contrario. Tres salidas:
cablearlo a un health check real, cambiar el copy para que no prometa
monitoreo, o quitarlo.

**Ojo con el copy de los mockups:** "7+ años" y "19 writeups publicados" son
relleno. Los números reales se calculan solos en `src/pages/index.astro`.

---

## Overview
Rebrand de la marca personal **flino.dev** (Francisco Suriel Lino, full stack + seguridad web). El objetivo del rebrand es eliminar el parecido con **devtalles**: se retiran las llaves `{ }` y el patrón `{palabra|palabra}` del logotipo actual.

La dirección elegida es **"Cursor"**: una sola familia monoespaciada, logotipo `flino ▪ dev` donde el punto de `.dev` se convierte en un **cuadrado de señal** de color, y el color se usa exclusivamente como **estado del sistema** (no como paleta decorativa). Esto respeta el sitio actual, que es monocromo con voz de terminal (`/search`, `/rss.xml`, "All systems normal").

Este paquete cubre:
1. Logotipo principal (lockup horizontal) + variantes de avatar/favicon.
2. Aplicación al sitio: header, hero, grid de cards, footer.
3. Paleta y tipografía.
4. Miniaturas 16:9 para YouTube/portadas.

## About the Design Files
Los archivos de este bundle son **referencias de diseño hechas en HTML** — prototipos que muestran la apariencia e intención, **no código de producción para copiar tal cual**. El HTML usa un runtime propio de streaming (`support.js`) y **estilos 100% inline**; nada de eso debe portarse.

La tarea es **recrear estos diseños en el entorno existente del codebase destino**. El sitio real de flino.dev está construido en **Astro v5 + Tailwind CSS**, así que la implementación esperada es: componentes `.astro`/`.tsx` con clases de Tailwind y tokens declarados en la config, siguiendo los patrones ya establecidos en el repo. No introducir estilos inline ni un sistema de diseño nuevo.

## Fidelity
**High-fidelity (hifi).** Colores, tipografía, tamaños y espaciados son finales y deben reproducirse con precisión. Los únicos elementos deliberadamente no finales son los **placeholders rayados con la etiqueta `foto`** en las miniaturas: ahí va una fotografía real recortada.

## Design Tokens

### Colores
| Token | Hex | Uso |
|---|---|---|
| `ink` | `#0B0B0B` | fondo oscuro, tinta principal |
| `ink-alt` | `#14150F` | tinta sobre fondos claros (paneles, especímenes) |
| `paper` | `#FAFAF8` | texto sobre oscuro / fondo claro |
| `paper-alt` | `#FBFAF8` | fondo de paneles claros |
| `mute-dark` | `#8A8A85` | texto secundario sobre oscuro |
| `mute-darker` | `#6E6E68` | metadatos, labels sobre oscuro |
| `mute-light` | `#57534C` | texto secundario sobre claro |
| `mute-lighter` | `#9A968E` | labels sobre claro |
| `hairline-dark` | `#1E1E1E` | divisores sobre oscuro |
| `hairline-dark-2` | `#33332F` | borde de botón secundario sobre oscuro |
| `hairline-light` | `#E5E2DB` | divisores sobre claro |
| `border-light` | `#CFCCC5` | borde exterior de paneles |
| **`signal`** | `#3FA075` | **estado OK / en producción / el punto del logo** |
| `signal-soft` | `#C9E3D6` | tinte del verde (fondos suaves) |
| **`alert`** | `#C9A227` | **writeups, seguridad, alto impacto** |

**Regla del color (crítica):** máximo **un** elemento con acento por pantalla, más el punto del logotipo. Todo lo demás es blanco y negro. El acento nunca se usa para "dar vida" a un bloque; solo comunica estado.

### Tipografía
- Familia única: **JetBrains Mono** (Google Fonts), pesos 400 / 500 / 700 / 800.
  - `800` — logotipo y títulos.
  - `700` — subtítulos, nombres de card, botón primario.
  - `400` — cuerpo, metadatos, código.
- `Archivo` aparece en el archivo de diseño **solo para el chrome del documento de presentación** (títulos de las secciones "Turno 1/2"). **No es parte de la marca en la dirección Cursor** y no debe implementarse.
- Letter-spacing: títulos grandes `-0.045em` a `-0.03em`; labels en mayúsculas `0.16em`–0.22em`; cuerpo `0`.
- Line-height: display `0.88`–`1.05`; cuerpo `1.6`.

### Espaciado
Escala de 4: `4, 6, 8, 10, 12, 14, 18, 20, 26, 32, 40, 56, 64, 72`. Los paneles usan padding horizontal `32px` y vertical `18px` (barras) / `26–28px` (celdas) / `64–72px` (hero).

### Radios y sombras
- **Sin sombras en ninguna parte.** La jerarquía se construye con hairlines de 1px.
- Radio `0` por defecto (cuadrados). Única excepción: variantes circulares de avatar/favicon (`border-radius: 999px`) y el punto del footer (7px círculo).

## El logotipo

### Lockup horizontal (principal)
Tres piezas en una fila, `align-items: flex-end`:
1. `flino` — JetBrains Mono 800, `letter-spacing: -0.035em`, color tinta (`#14150F` sobre claro, `#FAFAF8` sobre oscuro), `line-height: 0.9`.
2. **El punto de señal** — cuadrado sólido `#3FA075`, alineado al baseline (no centrado). A 62px de tipo: `13×13px`, `margin: 0 5px 11px`. A 84px: `17×17px`, `margin: 0 7px 15px`. A 20px: `5×5px`, `margin: 0 2px 3px`. **Escala ≈ 0.20× del font-size, con el margen inferior ≈ 0.18× del font-size.**
3. `dev` — JetBrains Mono **400** (contraste de peso deliberado), color secundario (`#57534C` sobre claro, `#8A8A85` sobre oscuro).

No hay separador `/`, `|` ni llaves. El cuadrado **es** el punto de `.dev` y el cursor de terminal a la vez.

### Símbolo / avatar
Caja sólida tinta con una **`f`** en JetBrains Mono 800 color papel, más el cuadrado de señal alineado al baseline a la derecha de la `f`.
- Avatar 88px: caja `88×88`, `f` a `54px`, punto `11×11px` con `margin-left: 2px; margin-bottom: 20px`, `align-self: flex-end`.
- Avatar 72px: `f` a `44px`, punto `9×9px`, `margin-bottom: 16px`.
- Circular: misma composición con `border-radius: 999px`; `f` a `40px` en 72px de caja para compensar el recorte óptico.
- **Favicon 32px: la `f` sola a `21px`, sin punto** (a ese tamaño el cuadrado se convierte en ruido).
- Inverso: fondo `#F6F5F1`, borde `1px #DCD9D2`, `f` en `#14150F`, punto en verde.

## Screens / Views

### 1. Header del sitio (fondo `#0B0B0B`)
- Fila única, `justify-content: space-between`, padding `18px 32px`, borde inferior `1px #1E1E1E`.
- Izquierda: lockup a `20px` / 800.
- Centro: nav en mono `13px`, `gap: 26px`. Item activo `#FAFAF8`, inactivos `#A8A8A2`. Copy: `Inicio · Carrera · Blog · Writeups · Proyectos`.
- Derecha: utilidades mono `12px` en `#6E6E68`, `gap: 14px`: `/search`, `/rss.xml`.
- Hover propuesto: inactivos → `#FAFAF8`, transición `120ms ease-out` sobre `color`. Sin subrayado.

### 2. Hero
- Columna, padding `72px 32px 64px`, `gap: 26px`, borde inferior `1px #1E1E1E`.
- Eyebrow: mono `12px`, `letter-spacing: 0.2em`, mayúsculas, `#6E6E68` — `Full stack developer · security`.
- Logotipo display: `84px` / 800 / `-0.045em` / `line-height: 0.88`, punto `17px`.
- Subcopy: mono `17px`, `line-height: 1.6`, `#A8A8A2`, `max-width: 620px`, dos líneas separadas por `<br>` — *"Construyo y opero sistemas en producción. Go, PostgreSQL, Redis." / "Y documento lo que aprendo rompiendo cosas."*
- Botones (`gap: 12px`, `margin-top: 8px`):
  - Primario: fondo `#FAFAF8`, texto `#0B0B0B` mono `13px`/700, padding `12px 20px`, sin radio — *Ver proyectos*.
  - Secundario: transparente, borde `1px #33332F`, texto `#FAFAF8` mono `13px`/400 — *Leer writeups*.
  - Hover sugerido: primario → fondo `#E8E7E3`; secundario → borde `#5A5A54`. `120ms`.

### 3. Grid de destacados
Tres columnas iguales, divisores verticales `1px #1E1E1E`, celdas con padding `26px 32px`, `gap` interno `10px`. Borde inferior `1px #1E1E1E`.
1. **WRITEUP** — label mono `11px`/`0.16em`/`#6E6E68`; título `20px`/700/`-0.02em`/`#FAFAF8` (*JWT Security*); descripción `12px`/`#8A8A85`; estado `11px` `#C9A227` con bullet `●` — *alto impacto*.
2. **PROYECTO** — igual, título *flino.link*, estado `#3FA075` — *en producción*.
3. **EXPERIENCIA** — cifra `40px`/800/`-0.04em`/`line-height: 1` (*7+*), pie `12px`/`#8A8A85` (*años · 19 writeups publicados*). Sin acento.

### 4. Footer
Fila `space-between`, padding `16px 32px`, mono `12px` `#6E6E68`. Izquierda `© 2026 flino.dev`. Derecha: círculo `7px` `#3FA075` + `All systems normal` en `#A8A8A2`, `gap: 8px`. Este punto es un **indicador de estado real**: si el health check falla debe pasar a `#C9A227` con el copy correspondiente.

### 5. Miniaturas 16:9 (YouTube / portadas)
Dos plantillas alternables:
- **Oscura**: fondo `#0B0B0B`/`#14150F`, padding `22px`, columna `space-between`, `overflow: hidden`. Lockup pequeño arriba (`13px`). Título mono `34px`/800/`-0.03em`/`line-height: 1.05`, `max-width: 56%`, `position: relative; z-index: 2` (debe quedar **por encima** del retrato). Palabra clave del título en `#3FA075`. Retrato: bloque `190×190px` anclado en `right: -40px; bottom: -30px` — aquí va la foto recortada.
- **Clara**: fondo `#F6F5F1`, borde `1px #E5E2DB`. Fila superior: avatar cuadrado `30px` + metadato mono `11px`/`0.12em`/`#7A766E` (*EN PRODUCCIÓN / 04*). Título `32px`/800 en `#14150F`. Barra inferior de acento: `height: 6px`, ancho `~45%`, color `#3FA075`.
- Producción real: exportar a **1280×720**; el título nunca por debajo de `~54px` a ese tamaño (legibilidad en móvil).

## Interactions & Behavior
El diseño es una identidad estática; el sitio destino ya tiene su comportamiento. Lo relevante a implementar:
- Hover de nav y botones como se describe arriba (`120ms ease-out`, solo `color`/`background`/`border-color`).
- El indicador del footer refleja estado real (verde OK / ámbar degradado). Es dato, no decoración.
- Focus visible: outline `2px` `#3FA075`, `outline-offset: 2px` — el acento sí puede usarse aquí sin romper la regla de "un acento por pantalla" (es transitorio).
- Respetar `prefers-reduced-motion`; no hay animaciones esenciales.
- Responsive: el hero baja de `84px` a `clamp(44px, 11vw, 84px)`; el grid de tres columnas pasa a una sola columna con divisores horizontales; el nav colapsa al patrón ya existente en el sitio.

## State Management
Ninguno propio del diseño. La única pieza dinámica es el estado del health check del footer (`ok | degraded`).

## Assets
- **Fuente**: JetBrains Mono vía Google Fonts (pesos 400, 500, 700, 800). Preferible self-host en el repo de Astro.
- **Sin SVG dibujado**: logotipo y símbolo son tipografía + un rectángulo. Para exportar a SVG/favicon, convertir a contornos la `f` y el cuadrado.
- **Foto de retrato**: pendiente de entregar por el cliente; en las miniaturas aparece como placeholder rayado etiquetado `foto`.
- Los archivos de marca actuales (`{flino|dev}` con el círculo tecnológico) quedan **deprecados** y no deben reutilizarse.

## Entregables pendientes (fuera de este bundle)
Favicon/`.ico`/`apple-touch-icon` exportados, `og:image` nueva (la actual `flinodev.webp` usa la marca vieja), avatares de YouTube/X/GitHub/LinkedIn/TikTok, y plantilla de miniatura editable.

## Files
- `Rebrand flino.dev.dc.html` — documento de diseño completo. Contiene, de arriba abajo: **2a** (dirección Cursor aplicada al sitio: header/hero/grid/footer + sistema de color), **1a** (Cursor: lockup, avatares, paleta, tipografía, miniaturas) y **1b** (dirección alternativa "Bitácora", descartada — ignorar salvo referencia).
- `support.js` — runtime del prototipo. Necesario solo para abrir el HTML; **no portar**.
