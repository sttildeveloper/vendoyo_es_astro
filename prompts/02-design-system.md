# 02 - Sistema de diseño

## Prompt

```
Crea el sistema de diseño en src/styles/global.css con Tailwind CSS v4.

Tokens de color (usar @theme):
- Brand primary: #0b8f7a (teal)
- Brand primary dark: #087563 (hover)
- Brand soft: #ddf3ee (fondos suaves)
- Neutral white: #ffffff
- Neutral text: #0f172a (texto principal)
- Neutral muted: #64748b (texto secundario)
- Neutral border: #e2e8f0
- Accent colors: warning (#f97316), success (#10b981), critical (#ec4899), info (#3b82f6)

Componentes CSS a crear:

1. .btn-primary - Botón teal con hover, sombra y transform
2. .btn-dark - Botón oscuro para store buttons
3. .btn-ghost - Botón transparente con borde
4. .btn-pill - Botón completamente redondeado
5. .badge - Badge pill con variantes (warning, success, critical, info)
6. .card-hover - Card con efecto lift al hover
7. .section - Container responsive con max-width 80rem y padding adaptativo
8. .gradient-text - Texto con gradiente brand
9. .input-mock - Input visual para demos

Incluir también:
- Reset básico en @layer base
- Tipografía Inter con system-ui fallback
- Variables de sombras (sm, md, lg, xl)
```

## Resultado esperado

- global.css con ~300 líneas
- Todos los tokens definidos en @theme
- Componentes reutilizables
- Consistencia visual en todo el proyecto
