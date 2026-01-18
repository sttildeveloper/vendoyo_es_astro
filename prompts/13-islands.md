# 13 - Islands (Interactividad)

## Prompt

````
Crea los islands de JavaScript para VendoYo siguiendo el patrón Astro Islands.

Ubicación: src/islands/

### 1. SmoothScroll.ts

Implementar scroll suave con Lenis:
- Inicializar Lenis solo en desktop (no touch devices)
- Integrar con GSAP ScrollTrigger (scrollerProxy)
- Respetar prefers-reduced-motion
- RAF loop para actualizaciones

```typescript
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// ... implementación
````

### 2. CountUp.ts

Animación de números de 0 al valor final:

- Usar IntersectionObserver para activar
- Easing easeOutExpo
- Soporte para data attributes:
  - data-count-up="1000" (valor final, requerido)
  - data-suffix="+" (opcional)
  - data-prefix="€" (opcional)
  - data-duration="2000" (opcional, default 2000ms)
- Formatear números con toLocaleString('es-ES')
- Respetar prefers-reduced-motion (mostrar valor final sin animar)

### 3. ScrollReveal.ts

Animaciones de entrada al scroll:

- IntersectionObserver
- Data attributes:
  - data-reveal="up|down|left|right|scale|fade"
  - data-reveal-delay="200" (ms)
  - data-reveal-duration="600" (ms)
- Aplicar estilos iniciales (opacity 0, transform)
- Añadir clase 'revealed' al completar
- Respetar prefers-reduced-motion

Todos los islands deben:

- Auto-inicializarse en DOMContentLoaded
- Exportar función de inicialización para uso manual
- Ser TypeScript válido
- Manejar cleanup si es necesario

```

## Resultado esperado

- 3 islands funcionales
- Respeto a accesibilidad (reduced-motion)
- TypeScript tipado
- ~80-90 líneas cada uno
```
