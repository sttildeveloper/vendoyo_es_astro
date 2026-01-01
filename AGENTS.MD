# agent.md — Landing “VendoYo” (Astro + Tailwind CSS v4)

## Objetivo

Construir una landing **ultra rápida**, **SEO-first**, **mobile-first** para presentar una app móvil (iOS/Android) con estética similar a la maqueta: header sticky, hero con mockup de móvil, secciones de features, “soporte agencia”, stats, franquicias, pricing y CTA final.

Stack obligatorio: **Astro + Tailwind CSS v4**.  
Nada de frameworks pesados (React/Vue/Svelte) salvo que sea estrictamente necesario; preferir **islas** con JS mínimo.

---

## Reglas de implementación

1. **Astro Islands**: solo hidratar lo que sea interactivo (tabs, FAQ, contador, carrusel).
2. **Performance**: LCP rápido (hero optimizado), imágenes responsive (AVIF/WebP), CSS mínimo, JS diferido.
3. **Accesibilidad**: foco visible, roles ARIA correctos, `prefers-reduced-motion` respetado.
4. **SEO**: metadatos completos, OpenGraph/Twitter cards, sitemap, robots.txt, canonical, Schema.org.
5. **Diseño**: Tailwind v4 + tokens (colores, radius, tipografías) + componentes consistentes.
6. **Sin dependencias innecesarias**: cada librería debe justificar su coste.

---

## Dependencias a instalar (selección recomendada)

### Astro integraciones (core)

- `@astrojs/tailwind` (Tailwind v4)
- `@astrojs/sitemap` (sitemap.xml)
- `@astrojs/robots-txt` (robots.txt)
- ~~`@astrojs/image`~~ (deprecado, usar `astro:assets` built-in)
- `@astrojs/compress` (gzip/brotli + minificación assets)

### SEO / Metadatos (ligero y claro)

- `astro-seo` (si prefieres API simple para meta + OG; opcional)
  - Si no se instala: implementar `<SEO />` propio en `src/components/SEO.astro`.

### Iconos

- `astro-icon` (Iconify) **o** `@iconify-json/*` + `@iconify/utils` (según preferencia)
  - Objetivo: iconos sin cargar fuentes externas.

### Animaciones (elegir 1 vía; no mezclar)

**Opción A (premium / control total):**

- `gsap` (ScrollTrigger viene incluido en el paquete GSAP >= 3.x)
  - Usar solo para hero + 2–3 momentos clave (no animar toda la página).

**Opción B (muy ligera / “enough”):**

- Sin GSAP.
- Animaciones con CSS + IntersectionObserver (script propio) + utilidades Tailwind.

### Scroll suave (opcional; cuidado con UX)

- `@studio-freight/lenis` (si se usa, activar solo desktop y respetar reduced-motion).

### Carrusel (testimonios / capturas)

- `embla-carousel-vanilla` + `embla-carousel-autoplay` (plugins opcionales) + CSS propio Tailwind.

### Helpers

- `zod` (validar config de la web, URLs store links, etc.)
- `eslint` + `prettier` + `prettier-plugin-astro` (formato consistente)

---

## Estructura del proyecto

- `src/layouts/BaseLayout.astro`
- `src/components/SEO.astro`
- `src/components/Header.astro`
- `src/components/Hero.astro`
- `src/components/StoreButtons.astro`
- `src/components/FeatureCards.astro`
- `src/components/SplitSection.astro` (imagen + texto + bullets)
- `src/components/StatsCard.astro` (con progress bars)
- `src/components/FranchiseSteps.astro`
- `src/components/PricingBand.astro`
- `src/components/CTASection.astro`
- `src/components/Footer.astro`

Interactividad (islas):

- `src/islands/MobileMenu.ts` (vanilla: abre/cierra menú)
- `src/islands/Tabs.ts` (features / pantallas)
- `src/islands/TestimonialsCarousel.ts` (Embla)
- `src/islands/CountUp.ts` (contador al entrar en viewport)
- `src/islands/ScrollReveal.ts` (si no usamos GSAP)
- `src/islands/SmoothScroll.ts` (Lenis, opcional)

Datos:

- `src/content/site.ts` (config: nombre, copy, links, contacto, redes)
- `src/content/sections.ts` (features, pricing, steps, FAQ, testimonials)

Assets:

- `src/assets/` (logos, mockups, capturas)
- Usar `@astrojs/image` para optimizar.

Páginas:

- `src/pages/index.astro`
- `src/pages/thanks.astro` (si hay formulario)
- `src/pages/privacy.astro`, `terms.astro`, `cookies.astro` (mínimos legales)

---

## Diseño / UI tokens (Tailwind v4)

Definir tokens:

- Color primario: teal (ej. `#3CB4AC`) y hover `#2E8F88`.
- Fondo: `bg` suave, superficies blancas, sombras blandas.
- Radius: 16–24px para cards; 9999px para botones pill.
- Tipografía: sistema o Google Font (si se usa, cargar con `display=swap` y preconnect).

**Componentes base (estándar)**

- Button:
  - `btn-primary` (teal)
  - `btn-dark` (negro para “store buttons”)
  - `btn-ghost` (texto)
- Card:
  - `card` (bg white, shadow-sm, border)
  - `card-hover` (hover shadow + lift)
- Badge:
  - `badge` (pill, fondo suave)
- Section container:
  - `section` (padding y max-width consistente)

Implementar en Tailwind usando `@layer components` para no repetir clases.

---

## Componentes / Secciones concretas (mapa de la landing)

### 1) Header sticky

- Logo + links ancla (Características, Franquicias, Precios) + CTA “Descargar App”.
- Mobile: hamburguesa + panel off-canvas (isla `MobileMenu.ts`).
- Añadir `backdrop-blur` y borde inferior sutil.

### 2) Hero

- H1: “Tu inmobiliaria en tu bolsillo”.
- Subcopy: selling points.
- Botones App Store / Google Play.
- Mockup móvil a la derecha.
- Fondo: gradient + blobs (divs con blur).

Animación:

- Si GSAP: entrada secuencial (badge → H1 → párrafo → botones → mockup).
- Si sin GSAP: CSS transitions + `ScrollReveal` en viewport.

### 3) Features (3 cards)

- “Sube tu propiedad”, “Asigna una franquicia”, “Seguimiento en vivo”.
- Iconos (SVG/Iconify).
- Hover: lift + shadow.

### 4) Split section “soporte agencia / libertad app”

- Izquierda: imagen ilustrativa (optimizada) con glow.
- Derecha: texto + bullets con icono “verified”.

### 5) Split invertido con “Estadísticas”

- Card con progress bars.
- Counters opcionales (CountUp) solo al entrar.

### 6) Franquicias

- 3 cards: Agencias locales, Gestión integral, Supervisión central.
- Steps: 3 pasos en horizontal (cards).

### 7) Pricing band

- Banda teal con tabla 3 columnas, nota “\*sin IVA”.
- Animación ligera (fade-up).

### 8) CTA final

- Texto + botones iOS/Android.
- Muy claro: “¿Listo para vender tu propiedad?”

### 9) Footer

- Columnas: Empresa, Legal, Contacto + redes.
- Añadir microcopy y copyright.

---

## SEO: checklist obligatorio

Implementar:

- `<title>` + `<meta name="description">` únicos.
- OpenGraph + Twitter Cards.
- `canonical`.
- `sitemap.xml` (integración Astro).
- `robots.txt` (integración Astro).
- Schema.org:
  - `SoftwareApplication` o `MobileApplication` con:
    - name, operatingSystem, applicationCategory, offers (si hay pricing),
    - aggregateRating (solo si real), downloadUrl (si procede).
- Favicons + webmanifest (PWA light opcional):
  - `site.webmanifest`, `apple-touch-icon`, `favicon-32/16`, `mask-icon`.

Rendimiento:

- Imágenes hero con prioridad (`fetchpriority="high"`) y tamaño correcto.
- Preload de fuente si aplica.
- Evitar librerías pesadas en inicial.

---

## Tareas exactas para el agente (orden estricto)

### Paso 0 — Preparación

- Detectar si el repo ya tiene Astro. Si no:
  - Inicializar Astro (TypeScript recomendado).
- Confirmar Node LTS.

### Paso 1 — Instalar Tailwind v4 en Astro

- Instalar y configurar `@astrojs/tailwind` usando Tailwind CSS v4.
- Crear `src/styles/global.css` con:
  - `@import "tailwindcss";`
  - `@layer base` para defaults.
  - `@layer components` para botones/cards/badges.

### Paso 2 — Instalar integraciones de performance/SEO

- Instalar y configurar:
  - `@astrojs/sitemap`
  - `@astrojs/robots-txt`
  - `@astrojs/image`
  - `@astrojs/compress`
- Configurar `astro.config.*` correctamente.

### Paso 3 — Lint/format

- ESLint + Prettier + plugin Astro.
- Scripts:
  - `lint`, `format`, `check`, `build`, `preview`.

### Paso 4 — Componentes y layout

- Crear `BaseLayout.astro` con:
  - SEO component
  - header/footer slots
  - global styles
- Implementar componentes listados.
- Montar `index.astro` con secciones y anchors.

### Paso 5 — Interactividad mínima (islas)

- Menú móvil.
- Tabs (si se añade sección).
- Embla carousel (si se añade testimonios/capturas).
- CountUp (si se anima stats).
- Elegir animaciones:
  - O GSAP (solo hero + 1–2 secciones).
  - O ScrollReveal (IntersectionObserver).

### Paso 6 — Assets e imágenes

- Añadir mockup móvil (placeholder si aún no hay).
- Integrar `@astrojs/image` y generar variantes.
- Convertir imágenes a AVIF/WebP si posible.

### Paso 7 — SEO final + pages legales

- `privacy`, `terms`, `cookies` (contenido mínimo).
- `404` básico.
- Schema JSON-LD en home.

### Paso 8 — Validación final

- Lighthouse:
  - Performance ≥ 90
  - Accessibility ≥ 95
  - Best Practices ≥ 95
  - SEO ≥ 95
- No más de ~50–100KB de JS inicial (ideal: mucho menos).
- Revisar `prefers-reduced-motion`.

---

## Comandos esperados (scripts)

En `package.json`:

- `dev`: `astro dev`
- `build`: `astro build`
- `preview`: `astro preview`
- `lint`: `eslint .`
- `format`: `prettier --write .`
- `check`: `astro check`

---

## Criterios de aceptación (no negociables)

1. `npm run build` sin errores.
2. Landing completa con el layout y secciones descritas.
3. SEO implementado (meta + OG + sitemap + robots + schema).
4. Animaciones suaves y opcionales (reduced-motion ok).
5. JS solo donde hace falta (islas).
6. Diseño consistente: botones, cards, espaciados.

---

## Notas de implementación (decisiones)

- Evitar “smooth scroll” global si rompe la UX; si se usa Lenis, habilitarlo solo desktop y desactivar con reduced-motion.
- GSAP solo si el cliente quiere “wow factor” real; si no, CSS + observer es suficiente.
- No cargar fuentes/iconos via CDN si se puede evitar; mejor SVG/inline.

---

## Entregables

- Código funcional en el repo.
- `README.md` mínimo: cómo correr dev/build, dónde cambiar contenido, checklist de SEO.
- `agent.log.md` (opcional): decisiones y tradeoffs.
