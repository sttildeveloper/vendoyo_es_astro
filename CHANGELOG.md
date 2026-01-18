# Changelog

Todos los cambios notables de este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/lang/es/).

## [1.0.0] - 2026-01-18

### Añadido

#### Core

- Proyecto Astro 5.16.6 con TypeScript
- Tailwind CSS 4.1.18 con tokens de diseño personalizados
- ESLint + Prettier con plugins para Astro
- Sistema de compresión con astro-compress

#### Componentes principales

- `Header.astro` - Navegación sticky con menú móvil (Alpine.js)
- `Hero.astro` - Sección principal con mockups y animaciones GSAP
- `Features.astro` - 6 características con demos visuales
- `Pricing.astro` - Tabla de precios con tarifa plana
- `Testimonials.astro` - 4 testimonios de propietarios
- `FAQ.astro` - Preguntas frecuentes con acordeón
- `AppShowcase.astro` - Showcase de la app
- `CTASection.astro` - Call-to-action final
- `Footer.astro` - Pie de página con navegación

#### SEO

- `SEO.astro` - Componente de meta tags reutilizable
- OpenGraph y Twitter Cards
- Schema.org (MobileApplication)
- sitemap.xml automático
- robots.txt
- PWA webmanifest

#### Islands (Interactividad)

- `SmoothScroll.ts` - Scroll suave con Lenis
- `CountUp.ts` - Animación de números
- `ScrollReveal.ts` - Animaciones de entrada

#### Mockups de pantallas (13)

- ScreenLogin, ScreenRegister, ScreenRegisterWizard
- ScreenEmail, ScreenDashboard, ScreenManagerDashboard
- ScreenTenantDashboard, ScreenUpload, ScreenPropertyDetail
- ScreenTeam, ScreenAdminProfile, ScreenAdminProperties
- MobileNavbar, StatsCard

#### Demos visuales (6)

- DemoUploadProperty, DemoWorkflow, DemoCRM
- DemoAssignFranchise, DemoDashboard, DemoAlertSystem

#### Páginas

- `index.astro` - Landing principal
- `404.astro` - Página de error personalizada
- `privacy.astro` - Política de privacidad
- `terms.astro` - Términos y condiciones
- `cookies.astro` - Política de cookies

#### Sistema de diseño

- Tokens de color (brand, neutral, accent)
- Componentes CSS (.btn-primary, .badge, .card-hover, etc.)
- Utilidades responsive (.section)

### Dependencias principales

- astro: ^5.16.6
- tailwindcss: ^4.1.18
- gsap: ^3.14.2
- lenis: ^1.3.17
- alpinejs: ^3.15.3
- astro-icon: ^1.1.5
- astro-seo: ^1.1.0
- astro-compress: ^2.3.9

---

## [Unreleased]

### Por hacer

- Integración con analytics
- Formulario de contacto
- Página de blog (opcional)
- Tests E2E con Playwright
