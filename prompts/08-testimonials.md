# 08 - Testimonials Section

## Prompt

```
Crea la sección de testimonios para VendoYo.

Ubicación: src/components/Testimonials.astro

Enfoque:
- Testimonios de PROPIETARIOS que han vendido con VendoYo
- Enfatizar: ahorro, rapidez, transparencia, facilidad

Estructura:
- Header: "Ellos ya han vendido ahorrando miles de euros"
- Subtítulo: "Propietarios reales que tomaron la decisión inteligente"
- Grid de testimonios (2 columnas en desktop)

Datos de testimonios (array interno):
[
  {
    author: "Carlos Méndez",
    role: "Vendió en Madrid",
    avatar_url: "https://i.pravatar.cc/150?u=vy-owner-1",
    content: "Al principio dudaba de la tarifa plana, pero el ahorro ha sido brutal. Me he ahorrado más de 12.000€ en comisiones y la gestión ha sido impecable.",
    stars: 5
  },
  {
    author: "Ana Belén Torres",
    role: "Vendió en Barcelona",
    avatar_url: "https://i.pravatar.cc/150?u=vy-owner-2",
    content: "Vendí mi piso en 3 semanas. Lo mejor es que tú controlas las visitas desde el móvil y ellos se encargan de todo el papeleo legal.",
    stars: 5
  },
  {
    author: "Miguel Ángel R.",
    role: "Vendió en Valencia",
    avatar_url: "https://i.pravatar.cc/150?u=vy-owner-3",
    content: "Servicio de 10. Las fotos quedaron espectaculares y el abogado me resolvió un problema con la nota simple en dos días.",
    stars: 5
  },
  {
    author: "Lucía P.",
    role: "Vendió en Sevilla",
    avatar_url: "https://i.pravatar.cc/150?u=vy-owner-4",
    content: "Sencillo, rápido y barato. Pagué la tarifa plana y me olvidé de porcentajes abusivos.",
    stars: 5
  }
]

Card de testimonio:
- Estrellas (heroicons:star-solid) en amber-400
- Texto entrecomillado
- Avatar redondeado con hover scale
- Nombre y ubicación
- Icono decorativo (heroicons:home)

Diseño:
- Fondo blanco o slate-50
- Cards con borde sutil y hover effect
- Responsive (2 cols → 1 col en móvil)
```

## Resultado esperado

- 4 testimonios convincentes
- Diseño limpio y profesional
- ~90 líneas de código
