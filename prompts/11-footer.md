# 11 - Footer

## Prompt

```
Crea el componente Footer para VendoYo.

Ubicación: src/components/Footer.astro

Estructura:
- Fondo oscuro (slate-900)
- Grid de 4 columnas en desktop, stack en móvil
- Separador antes del copyright

Columnas:

1. Logo y descripción
   - Logo VendoYo (igual que header)
   - Breve descripción de la app
   - Links a redes sociales (iconos)

2. Empresa
   - Sobre nosotros
   - Contacto
   - Trabaja con nosotros

3. Legal
   - Política de privacidad (/privacy)
   - Términos y condiciones (/terms)
   - Política de cookies (/cookies)

4. Producto
   - Características (#features)
   - Precios (#pricing)
   - FAQ (#faq)

Footer inferior:
- Copyright: "© 2024 VendoYo. Todos los derechos reservados."
- Año dinámico con new Date().getFullYear()

Estilos:
- Texto slate-400 con hover:text-white
- Links con transición
- Iconos de redes: LinkedIn, Twitter/X, Instagram
- Responsive: grid-cols-1 md:grid-cols-2 lg:grid-cols-4
```

## Resultado esperado

- Footer completo y profesional
- Links funcionales
- Responsive
- ~80 líneas de código
