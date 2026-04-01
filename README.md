## Seybel

Galerie Next.js de présentation des oeuvres de Lyne Seybel, artiste peintre française contemporaine.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## SEO

Set the production URL before deployment so canonical URLs, Open Graph tags, `robots.txt` and `sitemap.xml` all point to the real domain:

```bash
NEXT_PUBLIC_SITE_URL=https://votre-domaine.fr
```

Current SEO features:

- metadata globale et par page
- données structurées Schema.org
- `app/robots.ts`
- `app/sitemap.ts` avec images des collections et oeuvres
- textes alternatifs enrichis pour les images clés

## Pages principales

- `/`
- `/about`
- `/category/[slug]`

## Stack

- Next.js 16
- React 19
- Tailwind CSS 4
- TypeScript

## Déploiement

Après déploiement, vérifiez les routes suivantes :

- `/robots.txt`
- `/sitemap.xml`
