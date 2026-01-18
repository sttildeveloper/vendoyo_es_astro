# 10 - App Showcase

## Prompt

```
Crea la sección AppShowcase para VendoYo.

Ubicación: src/components/AppShowcase.astro

Propósito:
- CTA final antes del footer
- Destacar disponibilidad de la app móvil
- Botones de descarga prominentes

Diseño:
- Fondo oscuro (slate-900)
- Glows ambientales (divs con blur y opacity)
- Texto blanco/claro

Contenido:
- Badge: "App Móvil Disponible" con indicador pulsante
- Título: "Lleva tu franquicia en el bolsillo" con gradiente
- Subtítulo sobre control total iOS/Android
- Botones de descarga:
  - App Store (fondo blanco, iconos SVG inline)
  - Google Play (fondo slate-800, borde)

Botones de store:
- Iconos SVG de Apple y Google Play
- Texto "Descargar en" / "Disponible en"
- Hover con translate-y y sombra
- Link a PUBLIC_LANDING_VENDOYO_APP_URL

Estilo de los glows:
- Div absolute con bg-brand-primary/10
- blur-[120px]
- Posicionados en esquinas

NO incluir:
- QR codes (simplificar)
- Mockups adicionales (ya hay en hero/features)
```

## Resultado esperado

- CTA impactante y oscuro
- Contraste con el resto de la página
- Botones de descarga claros
- ~70 líneas de código
