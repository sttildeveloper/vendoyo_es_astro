# 03 - Layout y SEO

## Prompt

```
Crea el layout base y componente SEO para VendoYo.

### Layout.astro (src/layouts/Layout.astro)

Props:
- title?: string (default: "VendoYo - Tu inmobiliaria en tu bolsillo")
- description?: string

Debe incluir:
- DOCTYPE html con lang="es"
- Meta charset y viewport
- Componente SEO con props
- Alpine.js via CDN (defer, is:inline)
- Slot para contenido

### SEO.astro (src/components/SEO.astro)

Usar astro-seo para:
- Title y description dinámicos
- Canonical URL automática
- OpenGraph tags (title, description, image, url, type, locale es_ES)
- Twitter Cards (summary_large_image)
- Favicons: favicon.svg, apple-touch-icon, mask-icon
- Link al webmanifest
- Theme color: #3CB4AC
- Meta tags adicionales: application-name, format-detection

Schema.org JSON-LD para MobileApplication:
{
  "@type": "MobileApplication",
  "name": "VendoYo",
  "operatingSystem": "iOS, Android",
  "applicationCategory": "BusinessApplication",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
  "inLanguage": "es"
}

### Assets públicos

Crear en public/:
- robots.txt (Allow all, sitemap)
- site.webmanifest (PWA básico con theme_color #3CB4AC)
- Placeholder para favicon.svg y og-image.svg
```

## Resultado esperado

- Layout reutilizable
- SEO completo con Schema.org
- PWA básico configurado
