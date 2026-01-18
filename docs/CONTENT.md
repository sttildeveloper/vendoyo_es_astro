# Guía de Edición de Contenido

Esta guía explica cómo modificar el contenido de la landing page VendoYo sin necesidad de conocimientos técnicos avanzados.

## Índice

- [Textos principales](#textos-principales)
- [Testimonios](#testimonios)
- [Preguntas frecuentes](#preguntas-frecuentes)
- [Precios](#precios)
- [Links de descarga](#links-de-descarga)
- [Imágenes y assets](#imágenes-y-assets)
- [SEO y metadatos](#seo-y-metadatos)
- [Páginas legales](#páginas-legales)

---

## Textos principales

### Hero (Sección principal)

**Archivo:** `src/components/Hero.astro`

```astro
<!-- Línea ~22: Badge -->
<span class="badge"> Nueva versión disponible </span>

<!-- Línea ~27-32: Título principal -->
<h1>
  Tu <span class="text-brand-primary">inmobiliaria</span> en tu bolsillo
</h1>

<!-- Línea ~34-37: Descripción -->
<p>Gestiona propiedades, asigna franquicias y realiza seguimiento en tiempo real.</p>
```

### Estadísticas del Hero

**Archivo:** `src/components/Hero.astro` (línea ~50)

```astro
<!-- Buscar el grid de stats y modificar valores -->
<div class="grid grid-cols-3">
  <div>
    <p>1K+</p>
    <p>Propiedades</p>
  </div>
  <div>
    <p>50+</p>
    <p>Franquicias</p>
  </div>
  <div>
    <p>98%</p>
    <p>Satisfacción</p>
  </div>
</div>
```

---

## Testimonios

**Archivo:** `src/components/Testimonials.astro`

Los testimonios están definidos como un array al inicio del archivo:

```typescript
const testimonials = [
  {
    author: 'Carlos Méndez', // Nombre del autor
    role: 'Vendió en Madrid', // Subtítulo/ubicación
    avatar_url: 'https://...', // URL de la foto
    content: 'Al principio dudaba...', // Texto del testimonio
    stars: 5, // Número de estrellas (1-5)
  },
  // Añadir más testimonios aquí...
];
```

### Añadir un testimonio

Copiar un objeto existente y modificar los valores:

```typescript
{
  author: "Nuevo Cliente",
  role: "Vendió en Barcelona",
  avatar_url: "https://i.pravatar.cc/150?u=nuevo-cliente",
  content: "Mi experiencia con VendoYo fue excelente...",
  stars: 5
}
```

### Eliminar un testimonio

Simplemente borrar el objeto del array.

---

## Preguntas frecuentes

**Archivo:** `src/components/FAQ.astro`

Las FAQs están definidas como un array:

```typescript
const faqs = [
  {
    question: '¿Cuánto cuesta el servicio?',
    answer: 'Ofrecemos una tarifa plana desde X€...',
  },
  {
    question: '¿Cómo funciona el proceso?',
    answer: 'El proceso es muy sencillo...',
  },
  // Añadir más preguntas...
];
```

### Añadir una pregunta

```typescript
{
  question: "¿Nueva pregunta?",
  answer: "Respuesta a la nueva pregunta..."
}
```

---

## Precios

**Archivo:** `src/components/Pricing.astro`

Buscar las secciones de precios y modificar:

```astro
<!-- Precio principal -->
<span class="text-5xl font-bold">2.950€</span>
<span>*sin IVA</span>

<!-- Lista de servicios incluidos -->
<ul>
  <li>Fotografía profesional</li>
  <li>Publicación en portales</li>
  <li>Gestión de visitas</li>
  <!-- Añadir/modificar servicios -->
</ul>
```

---

## Links de descarga

Los links de descarga de la app (App Store / Google Play) se configuran mediante variable de entorno.

### Configuración

**Archivo:** `.env` (crear si no existe)

```bash
PUBLIC_LANDING_VENDOYO_APP_URL=https://tu-link-de-descarga.com
```

### Componentes que usan este link

- `Hero.astro` - Botón "Descargar App"
- `Header.astro` - CTA del header
- `CTASection.astro` - Botones de descarga
- `AppShowcase.astro` - Botones de tiendas

### Cambiar a links separados (iOS / Android)

Si necesitas links diferentes para cada plataforma, modificar el componente:

```astro
---
const iosUrl = import.meta.env.PUBLIC_IOS_URL || '#';
const androidUrl = import.meta.env.PUBLIC_ANDROID_URL || '#';
---

<a href={iosUrl}>App Store</a>
<a href={androidUrl}>Google Play</a>
```

Y añadir al `.env`:

```bash
PUBLIC_IOS_URL=https://apps.apple.com/...
PUBLIC_ANDROID_URL=https://play.google.com/...
```

---

## Imágenes y assets

### Ubicación de assets

```
public/
├── favicon.svg       # Favicon del sitio
├── og-image.svg      # Imagen para redes sociales
└── site.webmanifest  # Configuración PWA
```

### Cambiar el favicon

1. Reemplazar `public/favicon.svg` con tu nuevo favicon
2. Si usas PNG, actualizar las referencias en `src/components/SEO.astro`

### Cambiar imagen OG (redes sociales)

1. Reemplazar `public/og-image.svg` (recomendado: 1200x630px)
2. Formatos soportados: SVG, PNG, JPG

### Añadir nuevas imágenes

1. Colocar en `public/` para assets estáticos
2. O en `src/assets/` para optimización automática

---

## SEO y metadatos

### Metadatos globales

**Archivo:** `src/components/SEO.astro`

```typescript
const {
  title = 'VendoYo - Tu inmobiliaria en tu bolsillo', // Título default
  description = 'App móvil para gestionar propiedades...', // Descripción default
  image = '/og-image.svg', // Imagen OG default
} = Astro.props;
```

### Metadatos por página

Pasar props al componente Layout:

```astro
<Layout title="Mi página | VendoYo" description="Descripción específica de esta página" />
```

### Schema.org

El Schema.org (MobileApplication) está en `SEO.astro`:

```typescript
{
  '@type': 'MobileApplication',
  name: 'VendoYo',
  operatingSystem: 'iOS, Android',
  applicationCategory: 'BusinessApplication',
  // Modificar según necesidad
}
```

### Sitemap

El sitemap se genera automáticamente con `@astrojs/sitemap`.

**Configuración:** `astro.config.mjs`

```javascript
export default defineConfig({
  site: 'https://vendoyo.com', // ← Cambiar al dominio real
  // ...
});
```

---

## Páginas legales

### Política de privacidad

**Archivo:** `src/pages/privacy.astro`

### Términos y condiciones

**Archivo:** `src/pages/terms.astro`

### Política de cookies

**Archivo:** `src/pages/cookies.astro`

### Estructura de páginas legales

```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout title="Política de Privacidad | VendoYo">
  <main class="section prose">
    <h1>Política de Privacidad</h1>

    <h2>1. Responsable del tratamiento</h2>
    <p>...</p>

    <!-- Añadir secciones según necesidad -->
  </main>
</Layout>
```

---

## Colores y estilos

### Cambiar color principal

**Archivo:** `src/styles/global.css`

```css
@theme {
  --color-brand-primary: #0b8f7a; /* Color principal */
  --color-brand-primary-dark: #087563; /* Hover */
  --color-brand-soft: #ddf3ee; /* Fondo suave */
}
```

### Colores recomendados

Si cambias el color principal, actualiza también:

- `--color-brand-primary-dark` (10-15% más oscuro)
- `--color-brand-soft` (versión muy clara para fondos)
- `theme-color` en `SEO.astro`
- `theme_color` en `public/site.webmanifest`

---

## Verificar cambios

Después de hacer cambios:

```bash
# 1. Verificar que compila
npm run check

# 2. Ver en desarrollo
npm run dev

# 3. Build de producción
npm run build

# 4. Preview del build
npm run preview
```
