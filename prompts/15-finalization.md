# 15 - Finalización y optimización

## Prompt

````
Finaliza el proyecto VendoYo con optimizaciones y verificaciones.

### 1. Ensamblar index.astro

Crear src/pages/index.astro con todos los componentes:

```astro
---
import Layout from '../layouts/Layout.astro';
import Header from '../components/Header.astro';
import Hero from '../components/Hero.astro';
import Features from '../components/Features.astro';
import Pricing from '../components/Pricing.astro';
import Testimonials from '../components/Testimonials.astro';
import FAQ from '../components/FAQ.astro';
import AppShowcase from '../components/AppShowcase.astro';
import Footer from '../components/Footer.astro';
import '../styles/global.css';
---

<Layout>
  <Header />
  <main>
    <Hero />
    <Features />
    <Pricing />
    <Testimonials />
    <FAQ />
    <AppShowcase />
  </main>
  <Footer />

  <!-- Islands -->
  <script src="../islands/SmoothScroll.ts"></script>
  <script src="../islands/ScrollReveal.ts"></script>
  <script src="../islands/CountUp.ts"></script>
</Layout>
````

### 2. Configurar astro-compress

En astro.config.mjs añadir:

```javascript
import compress from 'astro-compress';

// En integrations:
compress({
  CSS: true,
  HTML: true,
  Image: false, // Astro maneja imágenes
  JavaScript: true,
  SVG: true,
});
```

### 3. Verificaciones finales

Ejecutar y verificar:

```bash
npm run check    # 0 errors, 0 warnings
npm run lint     # Sin errores
npm run build    # Build exitoso
```

### 4. Crear .env.example

```bash
PUBLIC_LANDING_VENDOYO_APP_URL=https://app.vendoyo.com
```

### 5. Objetivos de rendimiento

Lighthouse targets:

- Performance: ≥ 90
- Accessibility: ≥ 95
- Best Practices: ≥ 95
- SEO: ≥ 95

Bundle JS inicial: < 100KB (idealmente < 60KB gzip)

### 6. Checklist final

- [ ] Build sin errores
- [ ] Todas las páginas accesibles
- [ ] Links funcionando
- [ ] Responsive en móvil
- [ ] Animaciones respetan reduced-motion
- [ ] SEO meta tags correctos
- [ ] Favicon visible
- [ ] 404 personalizado funciona

```

## Resultado esperado

- Proyecto listo para producción
- Build optimizado
- Todas las verificaciones pasando
```
