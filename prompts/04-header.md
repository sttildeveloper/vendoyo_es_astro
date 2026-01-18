# 04 - Header

## Prompt

```
Crea el componente Header.astro para VendoYo.

Ubicación: src/components/Header.astro

Características:
- Header fijo (fixed top-0) con z-50
- Transición de estilos al hacer scroll (usando Alpine.js)
- Al scroll > 50px: fondo blanco/95 con backdrop-blur, sombra, padding reducido
- Sin scroll: fondo transparente, sin sombra

Contenido:
- Logo: icono heroicons:home-modern + texto "VendoYo" en brand-primary
- Links de navegación (desktop): Características (#features), Precios (#pricing), Testimonios (#testimonials)
- CTA "Descargar App" con estilo btn-primary (solo desktop)
- Botón hamburguesa (móvil) con toggle

Menú móvil:
- Panel que aparece debajo del header
- Animación slide-down con Alpine.js (x-show, x-transition)
- Los mismos links + CTA
- Cierre automático al hacer click en un link

Variables de entorno:
- Usar PUBLIC_LANDING_VENDOYO_APP_URL para los links de descarga

Interactividad con Alpine.js:
- x-data="{ mobileMenuOpen: false, scrolled: false }"
- Event listener en window scroll
- :class bindings para estilos dinámicos

Incluir CSS para [x-cloak] { display: none !important; }
```

## Resultado esperado

- Header responsive
- Menú móvil funcional
- Efecto de scroll suave
- ~100 líneas de código
