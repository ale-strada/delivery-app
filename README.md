# MVP — Landing + simulador de leasing de motos de trabajo

Proyecto de punto de partida: Next.js 15 + Tailwind CSS. Todo el contenido
(marca, modelos, precios, testimonios) es **ficticio**, marcado con
comentarios `⚠️` en `src/data/content.ts` — reemplazalo antes de publicar
de verdad.

## Cómo correrlo local

```bash
npm install
npm run dev
```

Abrí http://localhost:3000

## Qué tiene

- `src/data/content.ts` — todo el contenido editable en un solo lugar
  (marca, pasos, modelos, stats, testimonios, FAQ). Empezá por acá.
- `src/components/Simulator.tsx` — el simulador de cuotas. Corre 100% en
  el navegador con una regla fija simple (sin backend, sin IA). La lógica
  está comentada arriba de `suggestModel()`.
- `src/components/ContactForm.tsx` — el formulario de contacto arma un
  link de WhatsApp con los datos cargados (`brand.whatsapp` en
  `content.ts` — hoy es un número fake). No hay backend ni base de datos.

## Subirlo a GitHub y desplegarlo en Vercel

```bash
git init
git add .
git commit -m "MVP inicial"
gh repo create tu-usuario/mvp-leasing --public --source=. --push
# o creá el repo a mano en github.com y:
# git remote add origin https://github.com/tu-usuario/mvp-leasing.git
# git push -u origin main
```

Después, en https://vercel.com → **Add New Project** → importás el repo →
Deploy. No hace falta configurar nada más, Vercel detecta Next.js solo.
Cada push a `main` vuelve a desplegar automáticamente.

## Próximos pasos sugeridos (no incluidos en este MVP)

- Reemplazar el contenido fake por el real.
- Reemplazar el número de WhatsApp fake en `content.ts`.
- Si el volumen de leads crece, reemplazar el submit de `ContactForm.tsx`
  por una API route que guarde el lead en Sheets/Airtable/Supabase antes
  de redirigir a WhatsApp.
- Analytics: `@vercel/analytics` (gratis en el plan Hobby).
