# 09 - FAQ Section

## Prompt

```
Crea la sección de preguntas frecuentes para VendoYo.

Ubicación: src/components/FAQ.astro

Estructura:
- Header con título "Preguntas frecuentes"
- Lista de FAQs con acordeón expandible
- Diseño limpio y accesible

Preguntas sugeridas:

1. ¿Cuánto cuesta el servicio de VendoYo?
   - Explicar tarifa plana, sin comisiones por venta

2. ¿Cómo funciona el proceso de venta?
   - Pasos: registrar propiedad, fotos, publicación, gestión visitas, cierre

3. ¿En qué ciudades operan?
   - Cobertura nacional, red de franquicias

4. ¿Qué incluye la tarifa plana?
   - Lista de servicios: fotos, portales, legal, etc.

5. ¿Necesito experiencia previa en venta de inmuebles?
   - No, la app guía paso a paso

6. ¿Puedo gestionar las visitas yo mismo?
   - Sí, control total desde la app

Implementación del acordeón:
- Puede ser con Alpine.js o CSS puro (:has selector)
- Animación suave de altura
- Solo una pregunta abierta a la vez (opcional)
- Iconos de expand/collapse (heroicons:chevron-down)

Accesibilidad:
- Usar button para los triggers
- aria-expanded
- role="region" para las respuestas
```

## Resultado esperado

- FAQ funcional con acordeón
- 5-6 preguntas relevantes
- Accesible y responsive
