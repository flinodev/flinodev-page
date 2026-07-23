# Configuración del Contador de Vistas

## ✅ Lo que se ha implementado

### Archivos creados:
1. **`src/pages/api/views/[slug].ts`** - API endpoint para manejar vistas
2. **`src/components/ViewCounter.tsx`** - Componente con animación del contador
3. **Actualizado `.env.example`** - Variables de entorno necesarias

### Archivos modificados:
1. **`src/layouts/ArticleTopLayout.astro`** - Muestra el contador en cada post
2. **`src/env.d.ts`** - Tipos TypeScript para variables de entorno

## 🎨 Características

- ✅ Contador animado con transición suave (0 → número real)
- ✅ Icono de ojo con diseño minimalista
- ✅ Formato de números en español (1.234 vistas)
- ✅ Incremento automático al cargar la página
- ✅ Loading state con animación de pulso
- ✅ Compatible con tema dark/light
- ✅ Manejo de errores graceful
- ✅ Funciona sin configuración en desarrollo (devuelve 0)

## 🚀 Configuración (Requerida para Producción)

### Paso 1: Crear cuenta en Upstash

1. Ve a https://console.upstash.com/
2. Click en "Sign Up" (puedes usar tu cuenta de GitHub)
3. Verifica tu email

### Paso 2: Crear base de datos Redis

1. En el dashboard, click en "Create Database"
2. Configura:
   - **Name:** `flinodev-views` (o el nombre que prefieras)
   - **Type:** Regional (más barato y suficiente)
   - **Region:** Elige la más cercana a tus usuarios (ej: `us-east-1` o `eu-west-1`)
   - **Eviction:** No eviction
   - **TLS:** Enabled (recomendado)
3. Click en "Create"

### Paso 3: Obtener credenciales

1. En el dashboard de tu nueva base de datos
2. Ve a la pestaña **"REST API"**
3. Verás dos valores importantes:
   - `UPSTASH_REDIS_REST_URL`
   - `UPSTASH_REDIS_REST_TOKEN`

### Paso 4: Configurar variables de entorno localmente

1. Copia el archivo de ejemplo:
   ```bash
   cp .env.example .env
   ```

2. Edita `.env` y agrega tus credenciales de Upstash:
   ```env
   UPSTASH_REDIS_REST_URL=https://xxxxx.upstash.io
   UPSTASH_REDIS_REST_TOKEN=AXxxxxxxxxxxxx
   ```

3. **Importante:** El archivo `.env` ya está en `.gitignore`, no lo subas a GitHub

### Paso 5: Configurar en Vercel (Producción)

1. Ve a tu proyecto en Vercel Dashboard
2. Settings → Environment Variables
3. Agrega las dos variables:
   - `UPSTASH_REDIS_REST_URL` = tu URL de Upstash
   - `UPSTASH_REDIS_REST_TOKEN` = tu token de Upstash
4. Aplica a: Production, Preview, y Development
5. Click en "Save"

### Paso 6: Redeploy

1. Ve a Deployments
2. Click en el último deployment
3. Click en los 3 puntos (⋯) → "Redeploy"
4. Las variables de entorno se aplicarán

## 🧪 Probar Localmente

1. Inicia el servidor de desarrollo:
   ```bash
   yarn dev
   ```

2. Abre cualquier post del blog: http://localhost:4321/blog/[slug]

3. Deberías ver el contador de vistas animándose:
   ```
   📅 3 Apr 2024    📖 5 min read    👁️ 1,234 vistas
   ```

4. Recarga la página → el contador debería incrementarse

## 📊 Cómo Funciona

### Flujo de Datos:

```
1. Usuario carga post
   ↓
2. ViewCounter.tsx hace POST a /api/views/[slug]
   ↓
3. API incrementa contador en Redis
   ↓
4. API devuelve nuevo número
   ↓
5. Componente anima desde 0 hasta el número real
```

### Almacenamiento en Redis:

```
Key: views:blog/01-patrones-de-diseno-nodejs
Value: 1234
```

Cada post tiene su propia key basada en su slug.

## 🎯 Personalización

### Cambiar duración de animación

Edita `src/components/ViewCounter.tsx`, línea ~45:

```typescript
const duration = 1000; // 1 segundo (1000ms)
const steps = 60; // 60 frames
```

### Desactivar tracking en post específico

En el frontmatter del post:

```markdown
---
title: "Mi Post"
# ... otras opciones
---
```

Luego en `ArticleTopLayout.astro`:

```astro
<ViewCounter slug={slug} trackView={false} client:load />
```

### Cambiar formato de números

Edita la función `formatNumber` en `ViewCounter.tsx`:

```typescript
// Español: 1.234
num.toLocaleString('es-ES')

// Inglés: 1,234
num.toLocaleString('en-US')
```

## 📈 Análisis de Vistas

### Ver posts más populares

Puedes conectarte a tu base de datos Redis desde la consola de Upstash:

1. Ve a tu database en Upstash
2. Click en "CLI"
3. Ejecuta:
   ```redis
   KEYS views:*
   GET views:blog/mi-post-slug
   ```

### Exportar datos

Usa el CLI de Upstash o crea un endpoint personalizado:

```typescript
// src/pages/api/views/stats.ts
export const GET: APIRoute = async () => {
  const keys = await redis.keys('views:*');
  const stats = await Promise.all(
    keys.map(async (key) => ({
      slug: key.replace('views:', ''),
      views: await redis.get(key),
    }))
  );

  return new Response(JSON.stringify(stats));
};
```

## 🆓 Plan Gratuito de Upstash

- **10,000 comandos/día** (suficiente para ~5,000 vistas/día)
- **256 MB de almacenamiento** (millones de posts)
- **Sin tarjeta de crédito** requerida
- **TLS incluido**

Para un blog personal, el plan gratuito es más que suficiente.

## 🔧 Troubleshooting

### El contador no aparece

- ✅ Verifica que el componente esté en ArticleTopLayout
- ✅ Revisa la consola del navegador por errores
- ✅ Asegúrate de usar `client:load` en el componente

### El contador siempre muestra 0

- ✅ Verifica que las variables de entorno estén configuradas
- ✅ En desarrollo sin `.env`, es normal (mock data)
- ✅ Revisa los logs de la API en la consola

### Error de conexión a Redis

- ✅ Verifica que las credenciales sean correctas
- ✅ Asegúrate de que la URL incluya `https://`
- ✅ Verifica que el token no tenga espacios extras

### El contador no se incrementa

- ✅ Verifica que el método POST esté funcionando
- ✅ Abre DevTools → Network → Busca POST a `/api/views/[slug]`
- ✅ Revisa la respuesta del servidor

## 🎨 Variaciones de Diseño

### Solo mostrar en posts populares (>100 vistas)

```tsx
{views() > 100 && <ViewCounter slug={slug} />}
```

### Agregar badge "Popular"

```tsx
{views() > 1000 && (
  <span class="ml-2 px-2 py-1 text-xs bg-red-500 text-white rounded">
    🔥 Popular
  </span>
)}
```

### Mostrar vistas totales en homepage

Crea un nuevo componente `TotalViews.tsx` que sume todas las vistas.

---

**¿Necesitas ayuda?** Abre un issue en el repositorio o consulta la documentación de Upstash: https://docs.upstash.com/redis
