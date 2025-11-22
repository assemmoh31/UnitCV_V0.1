# Guía de Despliegue para AdSense

Para que Google AdSense pueda verificar tu sitio, necesitas publicarlo en una URL pública. Aquí tienes varias opciones:

## Opción 1: Vercel (Recomendado - Gratis)

1. **Instala Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Inicia sesión:**
   ```bash
   vercel login
   ```

3. **Despliega:**
   ```bash
   vercel
   ```

4. **Sigue las instrucciones** y tu sitio estará en `https://tu-proyecto.vercel.app`

5. **Actualiza la configuración de AdSense:**
   - Ve a tu cuenta de AdSense
   - Ingresa la URL: `https://tu-proyecto.vercel.app`
   - Espera la verificación (puede tardar algunas horas)

## Opción 2: Netlify (Gratis)

1. **Instala Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Inicia sesión:**
   ```bash
   netlify login
   ```

3. **Construye el proyecto:**
   ```bash
   npm run build
   ```

4. **Despliega:**
   ```bash
   netlify deploy --prod --dir=dist
   ```

5. **Tu sitio estará en:** `https://tu-proyecto.netlify.app`

## Opción 3: GitHub Pages

1. **Crea un repositorio en GitHub**

2. **Sube tu código:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/tu-usuario/tu-repo.git
   git push -u origin main
   ```

3. **Instala gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

4. **Agrega al package.json:**
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

5. **Despliega:**
   ```bash
   npm run deploy
   ```

6. **Tu sitio estará en:** `https://tu-usuario.github.io/tu-repo`

## Opción 4: Render (Gratis)

1. Ve a [render.com](https://render.com)
2. Conecta tu repositorio de GitHub
3. Selecciona "Static Site"
4. Configura:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
5. Despliega

## Después del Despliegue

1. **Espera 24-48 horas** para que Google indexe tu sitio
2. **Verifica que el sitio sea accesible** desde un navegador
3. **Asegúrate de que el código de AdSense esté visible** en el HTML
4. **Intenta verificar nuevamente en AdSense**

## Verificación de AdSense

Si AdSense te da un código de verificación (meta tag), agrégalo en `index.html` en la sección `<head>`:

```html
<meta name="google-adsense-account" content="ca-pub-2239313494905583">
```

O si te dan un código HTML completo, agrégalo también en el `<head>`.

## Notas Importantes

- ✅ El sitio debe estar **públicamente accesible** (no localhost)
- ✅ El sitio debe tener **contenido real** (no estar vacío)
- ✅ Debe tener **política de privacidad** y **términos de servicio**
- ✅ El código de AdSense debe estar **visible en el HTML**
- ⏰ La verificación puede tardar **24-48 horas**

## Solución de Problemas

Si AdSense sigue sin poder verificar:

1. **Verifica que el sitio esté accesible** desde otro dispositivo/red
2. **Asegúrate de que el código de AdSense esté en el HTML** (no solo en JavaScript)
3. **Espera 24-48 horas** después del despliegue
4. **Usa el método de verificación por archivo HTML** si está disponible
5. **Contacta al soporte de AdSense** si el problema persiste


