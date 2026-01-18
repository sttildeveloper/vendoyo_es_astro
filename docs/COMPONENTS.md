# Catálogo de Componentes

Referencia completa de todos los componentes Astro del proyecto VendoYo.

## Índice

- [Layout](#layout)
- [Componentes de página](#componentes-de-página)
- [Componentes SEO](#componentes-seo)
- [Demos visuales](#demos-visuales)
- [Mockups de pantallas](#mockups-de-pantallas)
- [Islands (JavaScript)](#islands-javascript)
- [Clases CSS](#clases-css)

---

## Layout

### `Layout.astro`

Layout base que envuelve todas las páginas.

**Ubicación:** `src/layouts/Layout.astro`

**Props:**
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `title` | `string` | `"VendoYo - Tu inmobiliaria en tu bolsillo"` | Título de la página |
| `description` | `string` | `"App móvil para gestionar propiedades..."` | Meta description |

**Uso:**

```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout title="Mi página" description="Descripción personalizada">
  <main>Contenido</main>
</Layout>
```

---

## Componentes de página

### `Header.astro`

Navegación principal sticky con menú móvil.

**Ubicación:** `src/components/Header.astro`

**Características:**

- Logo + nombre VendoYo
- Links: Características, Precios, Testimonios
- CTA "Descargar App"
- Menú hamburguesa en móvil (Alpine.js)
- Efecto backdrop-blur al scroll

**Uso:**

```astro
<Header />
```

---

### `Hero.astro`

Sección principal con headline, CTAs y mockups.

**Ubicación:** `src/components/Hero.astro`

**Características:**

- Badge "Nueva versión disponible"
- H1 con gradiente
- Botones CTA
- Grid de estadísticas
- Mockups de pantallas móviles
- Animaciones GSAP

---

### `Features.astro`

Sección de 6 características con demos visuales.

**Ubicación:** `src/components/Features.astro`

**Subsecciones:**

1. Tu Anuncio - Sube tu propiedad
2. Flujo Inteligente - Te guiamos paso a paso
3. Control Total - Gestiona interesados
4. Red de Expertos - Asigna franquicia
5. Visión 360° - Dashboard en tiempo real
6. Siempre Informado - Alertas instantáneas

---

### `Pricing.astro`

Tabla de precios con tarifa plana.

**Ubicación:** `src/components/Pricing.astro`

**Características:**

- Comparativa tarifa plana vs comisiones
- Lista de servicios incluidos
- CTA de descarga

---

### `Testimonials.astro`

Sección de prueba social.

**Ubicación:** `src/components/Testimonials.astro`

**Datos internos:**

```typescript
const testimonials = [
  {
    author: 'Carlos Méndez',
    role: 'Vendió en Madrid',
    avatar_url: 'https://...',
    content: 'Testimonio...',
    stars: 5,
  },
  // ... más testimonios
];
```

**Para editar testimonios:** Modificar el array `testimonials` dentro del componente.

---

### `FAQ.astro`

Preguntas frecuentes con acordeón.

**Ubicación:** `src/components/FAQ.astro`

---

### `AppShowcase.astro`

Showcase de la app con mockups.

**Ubicación:** `src/components/AppShowcase.astro`

**Características:**

- Fondo oscuro con glows
- Botones de descarga
- Badge "Disponible ahora"

---

### `CTASection.astro`

Call-to-action final.

**Ubicación:** `src/components/CTASection.astro`

**Características:**

- Headline de conversión
- Botones de descarga grandes
- QR codes placeholder
- Fondo gradiente teal
- Animación GSAP

---

### `Footer.astro`

Pie de página completo.

**Ubicación:** `src/components/Footer.astro`

**Columnas:**

- Empresa: Sobre nosotros, Contacto
- Legal: Privacidad, Términos, Cookies
- Producto: Características, Precios, FAQ

---

## Componentes SEO

### `SEO.astro`

Meta tags y Schema.org.

**Ubicación:** `src/components/SEO.astro`

**Props:**
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `title` | `string` | `"VendoYo - Tu inmobiliaria..."` | Título |
| `description` | `string` | `"App móvil para gestionar..."` | Descripción |
| `image` | `string` | `"/og-image.svg"` | Imagen OG |
| `canonical` | `string` | Auto-generado | URL canónica |
| `noindex` | `boolean` | `false` | No indexar |

**Incluye:**

- Meta tags básicos
- OpenGraph
- Twitter Cards
- Schema.org (MobileApplication)
- Favicons y webmanifest

---

## Demos visuales

Componentes que muestran funcionalidades de la app.

| Componente            | Ubicación               | Descripción                |
| --------------------- | ----------------------- | -------------------------- |
| `DemoUploadProperty`  | `src/components/demos/` | Demo de subir propiedad    |
| `DemoWorkflow`        | `src/components/demos/` | Demo de flujo de trabajo   |
| `DemoCRM`             | `src/components/demos/` | Demo de gestión de leads   |
| `DemoAssignFranchise` | `src/components/demos/` | Demo de asignar franquicia |
| `DemoDashboard`       | `src/components/demos/` | Demo de dashboard          |
| `DemoAlertSystem`     | `src/components/demos/` | Demo de alertas            |

---

## Mockups de pantallas

Simulaciones de pantallas de la app móvil.

### `MobileFrame.astro`

Marco de móvil reutilizable.

**Ubicación:** `src/components/ui/MobileFrame.astro`

**Uso:**

```astro
<MobileFrame>
  <ScreenDashboard />
</MobileFrame>
```

### Pantallas disponibles

| Componente               | Descripción           |
| ------------------------ | --------------------- |
| `ScreenLogin`            | Pantalla de login     |
| `ScreenRegister`         | Registro básico       |
| `ScreenRegisterWizard`   | Wizard de registro    |
| `ScreenEmail`            | Verificación email    |
| `ScreenDashboard`        | Dashboard propietario |
| `ScreenManagerDashboard` | Dashboard gestor      |
| `ScreenTenantDashboard`  | Dashboard inquilino   |
| `ScreenUpload`           | Subir propiedad       |
| `ScreenPropertyDetail`   | Detalle propiedad     |
| `ScreenTeam`             | Equipo/franquicia     |
| `ScreenAdminProfile`     | Perfil admin          |
| `ScreenAdminProperties`  | Lista propiedades     |
| `MobileNavbar`           | Navbar inferior       |
| `StatsCard`              | Card de estadísticas  |

**Ubicación:** `src/components/screens/`

---

## Islands (JavaScript)

Scripts de interactividad mínima siguiendo el patrón Astro Islands.

### `SmoothScroll.ts`

Scroll suave con Lenis.

**Ubicación:** `src/islands/SmoothScroll.ts`

**Características:**

- Solo activo en desktop
- Integración con GSAP ScrollTrigger
- Respeta `prefers-reduced-motion`

---

### `CountUp.ts`

Animación de números.

**Ubicación:** `src/islands/CountUp.ts`

**Data attributes:**

```html
<span data-count-up="1000" data-suffix="+" data-prefix="$" data-duration="2000">0</span>
```

| Atributo        | Descripción                    |
| --------------- | ------------------------------ |
| `data-count-up` | Valor final (requerido)        |
| `data-suffix`   | Sufijo (ej: "+", "%")          |
| `data-prefix`   | Prefijo (ej: "$", "€")         |
| `data-duration` | Duración en ms (default: 2000) |

---

### `ScrollReveal.ts`

Animaciones de entrada al scroll.

**Ubicación:** `src/islands/ScrollReveal.ts`

**Data attributes:**

```html
<div data-reveal="up" data-reveal-delay="200" data-reveal-duration="600">Contenido</div>
```

| Atributo               | Valores                                        | Default |
| ---------------------- | ---------------------------------------------- | ------- |
| `data-reveal`          | `up`, `down`, `left`, `right`, `scale`, `fade` | `up`    |
| `data-reveal-delay`    | Número (ms)                                    | `0`     |
| `data-reveal-duration` | Número (ms)                                    | `600`   |

---

## Clases CSS

Componentes CSS definidos en `src/styles/global.css`.

### Botones

| Clase          | Descripción                  |
| -------------- | ---------------------------- |
| `.btn-primary` | Botón teal principal         |
| `.btn-dark`    | Botón oscuro (store buttons) |
| `.btn-ghost`   | Botón transparente con borde |
| `.btn-pill`    | Botón redondeado completo    |
| `.btn-brand`   | Botón brand para formularios |

### Badges

| Clase             | Descripción       |
| ----------------- | ----------------- |
| `.badge`          | Badge pill básico |
| `.badge-warning`  | Badge amarillo    |
| `.badge-success`  | Badge verde       |
| `.badge-critical` | Badge rosa        |
| `.badge-info`     | Badge azul        |

### Cards

| Clase         | Descripción                   |
| ------------- | ----------------------------- |
| `.card-hover` | Card con efecto lift al hover |

### Layout

| Clase      | Descripción                      |
| ---------- | -------------------------------- |
| `.section` | Container responsive con padding |

### Utilidades

| Clase            | Descripción                  |
| ---------------- | ---------------------------- |
| `.gradient-text` | Texto con gradiente brand    |
| `.input-mock`    | Input de formulario (visual) |
| `.chip`          | Chip para filtros            |
| `.chip-default`  | Chip inactivo                |
| `.chip-active`   | Chip activo                  |

### Tokens de color

```css
--color-brand-primary: #0b8f7a --color-brand-primary-dark: #087563 --color-brand-soft: #ddf3ee
  --color-neutral-text: #0f172a --color-neutral-muted: #64748b --color-neutral-border: #e2e8f0;
```
