# 05 - Hero Section

## Prompt

```
Crea la sección Hero para VendoYo.

Ubicación: src/components/Hero.astro

Layout:
- Grid de 2 columnas en desktop (contenido izquierda, mockups derecha)
- Stack en móvil
- Fondo con blobs difuminados (divs con blur-[100px])
- Padding top para compensar header fijo

Contenido izquierdo:
1. Badge "Nueva versión disponible" con icono sparkles
2. H1: "Tu <span class="text-brand-primary">inmobiliaria</span> en tu bolsillo"
3. Párrafo descriptivo sobre gestionar propiedades
4. Botones CTA: "Descargar App" (btn-primary) + "Ver Características" (btn-ghost)
5. Grid de 3 estadísticas:
   - "1K+" Propiedades
   - "50+" Franquicias
   - "98%" Satisfacción

Contenido derecho:
- Mockups de pantallas móviles (importar componentes Screen*)
- Disposición visual atractiva con rotaciones sutiles

Animaciones GSAP:
- Entrada secuencial de elementos (badge → título → descripción → CTAs → stats)
- Usar data attributes para targeting
- Respetar prefers-reduced-motion
- Usar ScrollTrigger para elementos below-the-fold

Importar los componentes de pantallas:
- ScreenRegisterWizard
- ScreenEmail
- ScreenLogin
- ScreenManagerDashboard
```

## Resultado esperado

- Hero impactante con mockups
- Animaciones suaves
- Estadísticas destacadas
- Responsive mobile-first
