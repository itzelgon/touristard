# Touristar Diamond — sitio informativo (solo frontend)

React + Vite. Sin backend ni base de datos.

## Editar contenido
Todo (correo, WhatsApp, Instagram, servicios, viajes, eventos) está en `src/datos.js`.
Fotos en `public/img/` (JPG, ideal < 300 KB cada una).

## Correr en tu computadora
    npm install
    npm run dev      → http://localhost:5173

## Publicar en Vercel
1. Sube esta carpeta a GitHub (sin node_modules).
2. vercel.com → Add New → Project → importa el repositorio.
3. Framework: Vite (se detecta solo) → Deploy.
No necesita variables de entorno. `vercel.json` hace que las rutas (/servicios, /contacto…) funcionen al recargar.
