# Guía de Despliegue en Dokploy

Esta guía explica cómo desplegar la landing page VendoYo en [Dokploy](https://dokploy.com/), una plataforma de despliegue self-hosted alternativa a Vercel/Netlify.

## Índice

- [Requisitos previos](#requisitos-previos)
- [Preparar el proyecto](#preparar-el-proyecto)
- [Configurar Dokploy](#configurar-dokploy)
- [Variables de entorno](#variables-de-entorno)
- [Despliegue](#despliegue)
- [Configurar dominio](#configurar-dominio)
- [SSL/HTTPS](#sslhttps)
- [CI/CD automático](#cicd-automático)
- [Troubleshooting](#troubleshooting)

---

## Requisitos previos

- Servidor con Dokploy instalado
- Acceso al panel de Dokploy
- Repositorio Git (GitHub, GitLab, etc.)
- Dominio configurado (opcional pero recomendado)

---

## Preparar el proyecto

### 1. Verificar build local

```bash
# Instalar dependencias
npm install

# Verificar tipos
npm run check

# Build de producción
npm run build
```

El build debe completarse sin errores y generar la carpeta `dist/`.

### 2. Crear Dockerfile (opcional)

Si prefieres desplegar con Docker, crear `Dockerfile` en la raíz:

```dockerfile
# Dockerfile para VendoYo Landing
FROM node:20-alpine AS builder

WORKDIR /app

# Copiar package files
COPY package*.json ./

# Instalar dependencias
RUN npm ci

# Copiar código fuente
COPY . .

# Build de producción
RUN npm run build

# Imagen de producción con nginx
FROM nginx:alpine

# Copiar build a nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Configuración nginx para SPA
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

### 3. Crear nginx.conf

```nginx
server {
    listen 80;
    server_name _;
    root /usr/share/nginx/html;
    index index.html;

    # Gzip
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml;

    # Cache de assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # SPA fallback
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Error pages
    error_page 404 /404.html;
}
```

---

## Configurar Dokploy

### 1. Acceder al panel

Ir a tu instancia de Dokploy (ej: `https://dokploy.tuservidor.com`)

### 2. Crear nuevo proyecto

1. Click en **"New Project"**
2. Nombre: `vendoyo-landing`
3. Descripción: `Landing page VendoYo`

### 3. Añadir aplicación

#### Opción A: Desde Git (recomendado)

1. Click en **"Add Application"**
2. Seleccionar **"Git"**
3. Configurar:
   - **Repository URL**: `https://github.com/sttildeveloper/vendoyo_es_astro.git`
   - **Branch**: `main`
   - **Build Path**: `/`

#### Opción B: Docker

1. Click en **"Add Application"**
2. Seleccionar **"Docker"**
3. Usar el Dockerfile creado anteriormente

### 4. Configurar build

En la sección **Build**:

| Campo            | Valor                     |
| ---------------- | ------------------------- |
| Build Command    | `npm ci && npm run build` |
| Output Directory | `dist`                    |
| Node Version     | `20`                      |

### 5. Configurar servidor estático

En **Settings > Static**:

- Habilitar **"Static Site"**
- Root: `dist`
- SPA Mode: **Deshabilitado** (Astro genera rutas estáticas)

---

## Variables de entorno

### En Dokploy

1. Ir a **Settings > Environment**
2. Añadir variables:

| Variable                         | Valor                     | Descripción   |
| -------------------------------- | ------------------------- | ------------- |
| `PUBLIC_LANDING_VENDOYO_APP_URL` | `https://app.vendoyo.com` | URL de la app |
| `NODE_ENV`                       | `production`              | Entorno       |

### Variables disponibles

```bash
# URL de descarga de la app
PUBLIC_LANDING_VENDOYO_APP_URL=https://app.vendoyo.com

# O URLs separadas por plataforma (si se implementa)
PUBLIC_IOS_URL=https://apps.apple.com/app/vendoyo
PUBLIC_ANDROID_URL=https://play.google.com/store/apps/details?id=com.vendoyo
```

---

## Despliegue

### Despliegue manual

1. En el panel de la aplicación, click en **"Deploy"**
2. Esperar a que complete el build
3. Verificar logs en **"Deployments"**

### Verificar despliegue

1. Click en la URL generada por Dokploy
2. Verificar que la landing carga correctamente
3. Comprobar navegación y links

---

## Configurar dominio

### 1. En Dokploy

1. Ir a **Settings > Domains**
2. Click en **"Add Domain"**
3. Introducir dominio: `vendoyo.com` o `www.vendoyo.com`

### 2. Configurar DNS

En tu proveedor de DNS, añadir registros:

#### Opción A: Registro A

```
Tipo: A
Nombre: @
Valor: [IP de tu servidor Dokploy]
TTL: 3600
```

#### Opción B: CNAME (subdominios)

```
Tipo: CNAME
Nombre: www
Valor: tu-app.dokploy.tuservidor.com
TTL: 3600
```

### 3. Esperar propagación

La propagación DNS puede tardar hasta 48 horas (normalmente minutos).

---

## SSL/HTTPS

### Certificado automático (Let's Encrypt)

Dokploy puede generar certificados SSL automáticamente:

1. Ir a **Settings > Domains**
2. Habilitar **"Auto SSL"**
3. Dokploy generará certificado Let's Encrypt

### Certificado personalizado

Si tienes certificado propio:

1. Ir a **Settings > SSL**
2. Subir certificado (`.crt`) y clave privada (`.key`)

### Forzar HTTPS

En **Settings > Security**:

- Habilitar **"Force HTTPS"**
- Habilitar **"HSTS"** (recomendado)

---

## CI/CD automático

### Configurar webhooks

1. En Dokploy, ir a **Settings > Webhooks**
2. Copiar la URL del webhook

### En GitHub

1. Ir a **Settings > Webhooks** del repositorio
2. Click **"Add webhook"**
3. Configurar:
   - **Payload URL**: URL copiada de Dokploy
   - **Content type**: `application/json`
   - **Events**: `push`

### Resultado

Cada push a `main` disparará un nuevo despliegue automático.

---

## Troubleshooting

### Build falla

**Problema**: Error durante `npm run build`

**Solución**:

1. Verificar logs en Dokploy
2. Asegurar Node.js 20+
3. Verificar que `npm run build` funciona localmente

```bash
# Local debug
npm ci
npm run check
npm run build
```

### 404 en rutas

**Problema**: Páginas como `/privacy` dan 404

**Solución**:

- Verificar que `Output Directory` es `dist`
- Asegurar que no está en modo SPA
- Comprobar que `nginx.conf` tiene el fallback correcto

### Assets no cargan

**Problema**: CSS/JS no cargan, consola muestra errores

**Solución**:

1. Verificar rutas relativas vs absolutas
2. Comprobar configuración de `site` en `astro.config.mjs`:

```javascript
export default defineConfig({
  site: 'https://vendoyo.com', // ← Debe coincidir con dominio real
});
```

### Variables de entorno no funcionan

**Problema**: `PUBLIC_*` variables no disponibles

**Solución**:

1. Asegurar prefijo `PUBLIC_` para variables client-side
2. Rebuildar después de añadir variables
3. Verificar que están en Dokploy > Environment

### SSL no funciona

**Problema**: Certificado no se genera

**Solución**:

1. Verificar que DNS apunta correctamente al servidor
2. Comprobar que puerto 80 está abierto (para verificación Let's Encrypt)
3. Revisar logs de Dokploy para errores de certificado

---

## Recursos adicionales

- [Documentación Dokploy](https://docs.dokploy.com/)
- [Guía Astro Static Sites](https://docs.astro.build/en/guides/deploy/)
- [Let's Encrypt](https://letsencrypt.org/docs/)

---

## Checklist de despliegue

- [ ] Build local funciona (`npm run build`)
- [ ] Repositorio actualizado en GitHub
- [ ] Aplicación creada en Dokploy
- [ ] Variables de entorno configuradas
- [ ] Dominio configurado (DNS)
- [ ] SSL/HTTPS habilitado
- [ ] Webhook configurado para CI/CD
- [ ] Sitio accesible y funcionando
- [ ] Verificar en móvil
- [ ] Comprobar SEO (meta tags, OG)
