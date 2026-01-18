# VendoYo - Landing Page

Landing page ultra rápida y SEO-first para la app móvil VendoYo, construida con **Astro** y **Tailwind CSS v4**.

## Requisitos

- Node.js 18+ (LTS recomendado)
- npm 9+

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/sttildeveloper/vendoyo_es_astro.git
cd vendoyo_es_astro

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:4321`

## Scripts disponibles

| Comando           | Descripción                           |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Servidor de desarrollo con hot reload |
| `npm run build`   | Build de producción en `./dist/`      |
| `npm run preview` | Preview del build de producción       |
| `npm run check`   | Verificación de tipos TypeScript      |
| `npm run lint`    | Linting con ESLint                    |
| `npm run format`  | Formateo con Prettier                 |

## Estructura del proyecto

```
vendoyo_es_astro/
├── public/                 # Assets estáticos
│   ├── favicon.svg
│   ├── og-image.svg
│   ├── robots.txt
│   └── site.webmanifest
├── src/
│   ├── components/         # Componentes Astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Features.astro
│   │   ├── Pricing.astro
│   │   ├── Testimonials.astro
│   │   ├── FAQ.astro
│   │   ├── AppShowcase.astro
│   │   ├── CTASection.astro
│   │   ├── Footer.astro
│   │   ├── SEO.astro
│   │   ├── demos/          # Demos visuales de la app
│   │   └── screens/        # Mockups de pantallas móviles
│   ├── islands/            # JavaScript interactivo (islas)
│   │   ├── SmoothScroll.ts
│   │   ├── CountUp.ts
│   │   └── ScrollReveal.ts
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── 404.astro
│   │   ├── privacy.astro
│   │   ├── terms.astro
│   │   └── cookies.astro
│   └── styles/
│       └── global.css      # Tokens y componentes CSS
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Stack tecnológico

| Tecnología   | Versión | Uso                   |
| ------------ | ------- | --------------------- |
| Astro        | 5.16.6  | Framework principal   |
| Tailwind CSS | 4.1.18  | Estilos               |
| TypeScript   | 5.9.3   | Tipado                |
| GSAP         | 3.14.2  | Animaciones           |
| Lenis        | 1.3.17  | Smooth scroll         |
| Alpine.js    | 3.15.3  | Interactividad ligera |
| astro-icon   | 1.1.5   | Iconos SVG            |
| astro-seo    | 1.1.0   | Meta tags SEO         |

## Editar contenido

Ver [docs/CONTENT.md](docs/CONTENT.md) para guía detallada de edición.

### Cambios rápidos

| Contenido         | Archivo                                   |
| ----------------- | ----------------------------------------- |
| Textos del Hero   | `src/components/Hero.astro`               |
| Características   | `src/components/Features.astro`           |
| Precios           | `src/components/Pricing.astro`            |
| Testimonios       | `src/components/Testimonials.astro`       |
| FAQ               | `src/components/FAQ.astro`                |
| Links de descarga | Variable `PUBLIC_LANDING_VENDOYO_APP_URL` |

## Variables de entorno

Crear archivo `.env` basado en `.env.example`:

```bash
# URL de la app (App Store / Google Play)
PUBLIC_LANDING_VENDOYO_APP_URL=https://tu-app-url.com
```

## SEO Checklist

- [x] Meta title y description únicos por página
- [x] OpenGraph tags para redes sociales
- [x] Twitter Cards
- [x] Canonical URLs
- [x] Schema.org (MobileApplication)
- [x] sitemap.xml generado automáticamente
- [x] robots.txt
- [x] Favicons y webmanifest
- [x] Imágenes optimizadas

## Despliegue

Ver [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) para guía de despliegue en Dokploy.

### Build de producción

```bash
npm run build
```

Los archivos estáticos se generan en `./dist/` listos para servir.

## Rendimiento

Objetivos Lighthouse:

- Performance: ≥ 90
- Accessibility: ≥ 95
- Best Practices: ≥ 95
- SEO: ≥ 95

### Optimizaciones aplicadas

- HTML/CSS/JS minificado (astro-compress)
- SVGs optimizados
- Imágenes en formato SVG/WebP
- JavaScript diferido
- Islands architecture (JS solo donde necesario)
- Respeto a `prefers-reduced-motion`

## Documentación adicional

- [Catálogo de componentes](docs/COMPONENTS.md)
- [Guía de contenido](docs/CONTENT.md)
- [Guía de despliegue](docs/DEPLOYMENT.md)

## Licencia

Propietario - VendoYo
