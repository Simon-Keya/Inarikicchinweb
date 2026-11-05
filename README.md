# Inari Kicchin — Next.js restaurant portfolio and view-only menu

A standalone, responsive restaurant website for Inari Kicchin. Built with Next.js App Router, TypeScript, Tailwind CSS v4, Radix UI primitives, Framer Motion and next-themes. It is independent of RestFlow and SukariBurgers.

## Routes

- `/` — Home
- `/story/` — Our Story
- `/menu/` — permanent, view-only menu destination
- `/gallery/` — Gallery
- `/visit/` — Visit information

Legacy `.html` URLs are redirected in `netlify.toml`.

## Requirements and commands

Node.js 22 or newer is recommended.

```bash
npm install
npm run typecheck
npm run build
```

The production build is a static export in `out/`. For local development use `npm run dev`. To preview the exported `out/` folder locally, use a static file server such as `npx serve out`. Netlify publishes the `out/` directory.

## Brand system

`src/app/globals.css` defines the authoritative design tokens based on `CLAUDE.md`:

- Sign Red `#C91D36`
- Signage Black `#0A0C13`
- Whitewashed Stone `#F7F4EE`
- Sandy Timber `#B4A38D`
- Warm Tan `#907663`
- Warm Charcoal `#282023`
- Stone Grey `#B9B4A7`
- Poster Brown `#754531`
- Poster Gold `#B68B64`
- Deep Wine `#62171E`
- Awning Burgundy `#78232F`
- Red hover `#A5142B`
- Light raised surface `#E9E1D4`
- Light muted text `#4F4A45`
- Dark-mode accent `#EE4A60`

Fonts are self-hosted from Fontsource packages: Playfair Display and DM Sans. Light and dark themes have distinct treatments; the selected theme is persisted using `next-themes`.

## Content and client assets

Typed content is maintained in `src/data/site.ts`, `src/data/menu.ts` and `src/data/gallery.ts`. Shared UI is in `src/components/`.

Client-supplied images are stored in `public/images/`: the storefront photograph and the small menu-reference photograph. The menu-reference image is not used as a source of verified dish or price data. Unsplash gallery/food images are illustrative editorial placeholders and are explicitly labelled as such where shown. Replace them with client-approved photographs before launch.

## Accuracy and scope

The menu is view-only. Dish descriptions are a preview, not a verified complete menu. Do not invent prices, detailed ingredients, allergens, opening hours, phone numbers, booking availability or exact map coordinates. The Visit page uses the supplied Mvuli Road, Westlands location and clearly labels its map treatment as approximate. Confirm all details with the restaurant before launch.

No ordering, cart, payment, customer accounts, delivery, loyalty, table-specific QR, POS or RestFlow integration is included. Do not generate a production QR until the production domain is confirmed.

## Environment and Netlify

Copy `.env.example` to `.env.local` for local configuration and set `NEXT_PUBLIC_SITE_URL` to the canonical production origin. At build time the site URL falls back to Netlify's `URL` environment variable, then a non-production placeholder. Configure the canonical URL before launch.

Netlify uses `npm run build` and publishes `out/`. Security headers, static image caching and legacy redirects are configured in `netlify.toml`.

## Launch checklist

- Confirm production domain and set `NEXT_PUBLIC_SITE_URL`.
- Replace illustrative food/interior images with approved restaurant photography.
- Confirm current menu, ingredients, dietary/allergen guidance and prices.
- Confirm opening hours and preferred contact channel.
- Confirm the exact map pin and directions.
- Generate the QR only after the production domain is live.
