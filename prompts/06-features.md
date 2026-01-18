# 06 - Features Section

## Prompt

```
Crea la sección de características para VendoYo.

Ubicación: src/components/Features.astro

Estructura:
- Header de sección con badge "Características" y título con gradient-text
- 6 subsecciones alternando layout (izq-der, der-izq)
- Cada subsección tiene texto + demo visual

Las 6 características:

1. "Tu Anuncio" - Sube tu propiedad en segundos
   - Badge: "Tu Anuncio"
   - Bullets: Fotos optimizadas, Publicación en portales, Descripción asistida
   - Demo: DemoUploadProperty

2. "Flujo Inteligente" - Te guiamos paso a paso
   - Badge: "Flujo Inteligente"
   - Bullets: Checklist automático, Documentación guiada, Sin sorpresas
   - Demo: DemoWorkflow

3. "Control Total" - Gestiona tus interesados
   - Badge: "Control Total"
   - Bullets: CRM integrado, Historial de contactos, Notas y seguimiento
   - Demo: DemoCRM

4. "Red de Expertos" - Asigna una franquicia
   - Badge: "Red de Expertos"
   - Bullets: Agencias verificadas, Cobertura nacional, Tú eliges
   - Demo: DemoAssignFranchise

5. "Visión 360°" - Dashboard en tiempo real
   - Badge: "Visión 360°"
   - Bullets: Métricas de visitas, Estado de trámites, Alertas importantes
   - Demo: DemoDashboard

6. "Siempre Informado" - Alertas instantáneas
   - Badge: "Siempre Informado"
   - Bullets: Push notifications, Email digest, Sin spam
   - Demo: DemoAlertSystem

Animaciones:
- GSAP ScrollTrigger para cada bloque
- Fade-in desde la dirección correspondiente
- Stagger en bullets
- Respetar reduced-motion

Crear también los 6 componentes Demo en src/components/demos/:
- Cada demo simula una pantalla de la app
- Usar MobileFrame para el marco del móvil
- Contenido visual representativo de la función
```

## Resultado esperado

- 6 características con demos visuales
- Layout alternado
- Animaciones al scroll
- Componentes de demo reutilizables
