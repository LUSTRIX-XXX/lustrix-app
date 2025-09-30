# LUSTRIX - App (starter)

Estructura básica de la app para LUSTRIX. Contiene diseño inicial, páginas principales y la API para envío de correos con SendGrid.

## Ejecutar localmente

1. Copia `.env.example` a `.env.local` y rellena las variables (SENDGRID_API_KEY, FROM_EMAIL).
2. `npm install`
3. `npm run dev`
4. Abre http://localhost:3000

## Deploy
- Recomendado: desplegar en un VPS o en Vercel (si mantienes Node/Serverless API).
- Variables de entorno necesarias: SENDGRID_API_KEY, FROM_EMAIL, NEXT_PUBLIC_APP_URL

