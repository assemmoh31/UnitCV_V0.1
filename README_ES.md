# UnitCV - Aplicación Convertidor de Unidades

Una aplicación React moderna y responsive para convertir entre diferentes unidades de medida con integración de pagos Stripe.

## Problema: AdSense no puede verificar el sitio

Si recibes el error "No se ha podido verificar su sitio", es porque **el sitio necesita estar publicado públicamente**. Google AdSense no puede acceder a `localhost`.

### Solución Rápida: Desplegar en Vercel (5 minutos)

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

4. **Copia la URL** que te da (ej: `https://unitcv.vercel.app`)

5. **En AdSense**, ingresa esa URL para verificación

6. **Espera 24-48 horas** para la verificación

### Otras Opciones de Despliegue

Ver el archivo `DEPLOYMENT.md` para instrucciones detalladas de:
- Netlify
- GitHub Pages
- Render
- Otros servicios

## Características

- 🎨 **Modo Oscuro/Claro** - Cambio de tema con persistencia en localStorage
- 📱 **Totalmente Responsive** - Funciona perfectamente en escritorio y móvil
- 🎯 **Acceso Basado en Planes** - Planes Free, Plus y Pro con diferentes convertidores
- 💳 **Integración Stripe** - Procesamiento seguro de pagos
- 🎪 **Animaciones Suaves** - Efectos hover y transiciones con Tailwind CSS
- 📊 **UI Interactiva de Conversión** - Conversión en tiempo real con dropdowns
- 📈 **Historial de Conversiones** - Rastrea tus conversiones recientes
- 📢 **Integración AdSense** - Anuncios para usuarios del plan Free

## Planes

- **Free** (Azul): 3 convertidores (Longitud, Peso, Temperatura) + Anuncios AdSense
- **Plus** (Verde): 6 convertidores (añade Volumen, Área, Velocidad) - $4.99/mes
- **Pro** (Dorado): 9 convertidores (añade Energía, Presión, Tiempo) - $9.99/mes

## Instalación

1. Instala las dependencias:
```bash
npm install
```

2. Inicia el servidor de desarrollo:
```bash
npm run dev
```

La app estará disponible en `http://localhost:5173`

## Despliegue para AdSense

**IMPORTANTE:** Para que AdSense funcione, necesitas desplegar el sitio en una URL pública.

### Opción Rápida: Vercel

```bash
npm install -g vercel
vercel login
vercel
```

Luego ingresa la URL en AdSense y espera 24-48 horas.

Ver `DEPLOYMENT.md` para más opciones.

## Tecnologías

- React 18
- Vite
- Tailwind CSS
- Stripe
- Express
- AdSense

## Licencia

MIT


