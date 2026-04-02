# 🚀 Guía de Optimización de Imágenes

## Imágenes Grandes Detectadas (>500KB)

Las siguientes imágenes deberían optimizarse para mejorar el rendimiento:

1. **metasploit_intro.webp** - 792KB
2. **tcpdump.webp** - 752KB
3. **metasploit_exploitation.webp** - 716KB
4. **net-sec-challenge.webp** - 684KB
5. **eviction.webp** - 668KB
6. **linux-privilege-escalation.webp** - 596KB
7. **session-management.webp** - 488KB

## Recomendaciones

### 1. Optimización con Sharp (ya instalado)

Puedes crear un script para optimizar imágenes automáticamente:

```bash
# Instalar sharp-cli globalmente
npm install -g sharp-cli

# Optimizar una imagen
sharp -i input.webp -o output.webp resize 1200 --withoutEnlargement --quality 85
```

### 2. Tamaño Recomendado

- **Imágenes de blog**: Máximo 1200px de ancho, calidad 80-85%
- **Imágenes de proyectos**: Máximo 800px de ancho, calidad 80-85%
- **Thumbnails**: 400px de ancho, calidad 75%

### 3. Lazy Loading

Considera usar el componente `<Picture>` de Astro con lazy loading:

```astro
---
import { Picture } from "astro:assets";
import myImage from "../assets/image.webp";
---

<Picture
  src={myImage}
  alt="Descripción"
  widths={[400, 800, 1200]}
  sizes="(max-width: 800px) 100vw, 800px"
  loading="lazy"
/>
```

### 4. Formatos Modernos

- **WebP**: Ya lo estás usando ✅
- **AVIF**: Considera migrar a AVIF para mejor compresión (20-30% más pequeño que WebP)

### 5. Script de Optimización Automática

Crea un script en `package.json`:

```json
"scripts": {
  "optimize:images": "sharp -i 'public/images/**/*.{jpg,jpeg,png}' -o 'public/images' -f webp --quality 85"
}
```

## Estado Actual

- **Total de imágenes en blog**: ~7.2MB
- **Total de imágenes en projects**: ~1.1MB
- **Build size**: 11MB

## Meta de Optimización

Reducir las imágenes del blog a menos de 4MB optimizando las 7 imágenes más grandes.
