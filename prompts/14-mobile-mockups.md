# 14 - Mobile Mockups

## Prompt

````
Crea el sistema de mockups de pantallas móviles para VendoYo.

### MobileFrame.astro (src/components/ui/)

Marco de móvil reutilizable:
- Aspecto de iPhone moderno
- Notch en la parte superior
- Bordes redondeados (rounded-[2.5rem])
- Sombra realista
- Slot para contenido de pantalla
- pointer-events: none (no interactivo)

```astro
<div class="relative w-[280px] h-[580px] bg-slate-900 rounded-[2.5rem] p-2 shadow-2xl">
  <!-- Notch -->
  <div class="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-10"></div>
  <!-- Screen -->
  <div class="w-full h-full bg-white rounded-[2rem] overflow-hidden">
    <slot />
  </div>
</div>
````

### Pantallas a crear (src/components/screens/)

Crear 13 componentes de pantalla:

1. ScreenLogin - Login con email/password
2. ScreenRegister - Registro básico
3. ScreenRegisterWizard - Wizard de registro paso a paso
4. ScreenEmail - Verificación de email
5. ScreenDashboard - Dashboard del propietario
6. ScreenManagerDashboard - Dashboard del gestor
7. ScreenTenantDashboard - Dashboard del inquilino
8. ScreenUpload - Subir nueva propiedad
9. ScreenPropertyDetail - Detalle de propiedad
10. ScreenTeam - Equipo/franquicia asignada
11. ScreenAdminProfile - Perfil de administrador
12. ScreenAdminProperties - Lista de propiedades
13. MobileNavbar - Navbar inferior reutilizable

También crear: 14. StatsCard - Card de estadísticas para dashboards

Cada pantalla debe:

- Usar los colores brand
- Tener contenido representativo (datos fake)
- Usar iconos de heroicons/lucide
- Incluir MobileNavbar donde corresponda
- Ser visualmente atractiva

Clases CSS útiles:

- .screen-container - Contenedor flex column
- .screen-header - Header de pantalla
- .screen-content - Contenido scrollable
- .screen-navbar - Navbar inferior

```

## Resultado esperado

- MobileFrame reutilizable
- 13+ pantallas visuales
- Aspecto profesional de app real
- Componentes modulares
```
