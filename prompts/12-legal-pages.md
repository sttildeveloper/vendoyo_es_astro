# 12 - Páginas legales y 404

## Prompt

```
Crea las páginas legales y de error para VendoYo.

### Páginas a crear en src/pages/:

1. privacy.astro - Política de privacidad
2. terms.astro - Términos y condiciones
3. cookies.astro - Política de cookies
4. 404.astro - Página de error

### Estructura de páginas legales

Todas deben:
- Usar Layout con title y description apropiados
- Tener estructura de documento legal (h1, h2, párrafos)
- Incluir contenido placeholder estructurado
- Enlace para volver al inicio

Secciones típicas para privacy.astro:
1. Responsable del tratamiento
2. Datos que recopilamos
3. Finalidad del tratamiento
4. Base legal
5. Destinatarios
6. Derechos del usuario
7. Contacto

### 404.astro

Diseño atractivo con branding:
- Fondo gradiente suave
- Icono grande (heroicons:map o similar)
- "404" en texto grande con color brand
- Título: "Página no encontrada"
- Copy on-brand: "La propiedad que buscas no está disponible. Quizás ha sido vendida..."
- Botones:
  - "Volver al inicio" (btn-primary)
  - "Página anterior" (btn-ghost con onclick history.back())
- Stat decorativo: "Ya hemos ayudado a vender más de 1.000+ propiedades"

Diseño centrado, min-h-screen, flex items-center justify-center
```

## Resultado esperado

- 4 páginas funcionales
- 404 con personalidad de marca
- Contenido legal placeholder
