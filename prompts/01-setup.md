# 01 - Setup inicial del proyecto

## Prompt

```
Inicializa un proyecto Astro con TypeScript para una landing page de una app móvil inmobiliaria llamada "VendoYo".

Requisitos:
- Astro 5.x con TypeScript
- Tailwind CSS v4 (usando @tailwindcss/vite)
- Crear src/styles/global.css con @import 'tailwindcss'
- ESLint + Prettier con plugins para Astro
- Scripts en package.json: dev, build, preview, check, lint, format

Dependencias adicionales a instalar:
- @astrojs/sitemap (sitemap automático)
- astro-icon con @iconify-json/heroicons y @iconify-json/lucide
- astro-seo para meta tags
- gsap para animaciones
- lenis para smooth scroll
- alpinejs para interactividad ligera
- zod para validación
- astro-compress para optimización del build

Configura astro.config.mjs con:
- site: 'https://vendoyo.com'
- Integración de sitemap
- Integración de astro-icon con heroicons, lucide y circle-flags
- Integración de astro-compress

No uses React, Vue ni Svelte. Solo Astro components e islands con vanilla JS.
```

## Resultado esperado

- Proyecto Astro inicializado
- Tailwind CSS v4 funcionando
- Todas las dependencias instaladas
- astro.config.mjs configurado
- Scripts de npm funcionando
