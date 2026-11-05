# Inari Kicchin — Project Instructions

## Project objective
Build and maintain a premium, high-end client-facing restaurant portfolio website for Inari Kicchin, with a permanent, view-only digital menu. This is a standalone restaurant website, not a RestFlow feature.

## Brand direction
Use the exact brand palette below. Do not substitute orange-leaning terracotta or generic Japanese restaurant colours.

- Sign Red: `#C91D36`
- Signage Black: `#0A0C13`
- Whitewashed Stone: `#F7F4EE`
- Sandy Timber: `#B4A38D`
- Warm Tan: `#907663`
- Warm Charcoal: `#282023`
- Stone Grey: `#B9B4A7`
- Poster Brown: `#754531`
- Poster Gold: `#B68B64`
- Deep Wine: `#62171E`
- Awning Burgundy: `#78232F`
- Red hover: `#A5142B`
- Light raised surface: `#E9E1D4`
- Light muted text: `#4F4A45`
- Dark-mode accent: `#EE4A60`

Light mode: ivory background, black text, warm raised surfaces, sign-red actions, black footer with a 4px sign-red top border.

Dark mode: signage-black background, ivory text, warm-charcoal surfaces, sign-red buttons, brighter `#EE4A60` links. Do not simply invert light mode.

Red is reserved for CTAs, active states and restrained brand accents. Black and ivory dominate; timber tones add warmth. Use white text on sign-red buttons.

## Brand experience
Communicate contemporary Asian fusion and Japanese-inspired dining in Nairobi. The supplied brand direction includes black/red storefront awnings, warm timber, minimalist indoor dining, a patio beside a heated pool, skyline views, social dining, studying, working and board games.

Brand lines:
- “Where every bite tells a story. Where every visit feels special.”
- “A taste of Asia in the heart of Nairobi.”
- “Come for the food. Stay for the experience.”

Keep copy welcoming, youthful, polished and lifestyle-oriented.

## Image integrity
Never claim generic stock or generated images are photographs of the actual restaurant. Prefer original client-approved photographs. If unavailable, use properly licensed illustrative imagery and disclose it as illustrative. Do not invent restaurant details or scrape private/restricted media.

Preferred original asset names:
- `assets/storefront-exterior.jpg`
- `assets/dining-ambiance.jpg`
- `assets/culinary-presentation.jpg`

## Scope
- Pages: Home, Our Story, Our Menu, Gallery, Visit Us.
- Permanent, mobile-first, view-only `/menu` experience and one restaurant-wide QR destination.
- No ordering, cart, payment, customer accounts, delivery, loyalty, table-specific QR, POS or RestFlow integration.
- Do not invent prices, menu items, ingredients, allergens, opening hours, phone numbers, booking availability or exact map coordinates.
- Reservation/enquiry actions must not imply a confirmed booking unless a real booking integration exists.

## Engineering rules
1. Inspect the whole project before editing. Understand the existing stack, routes, assets, build scripts and current behaviour.
2. Preserve working behaviour and make focused, maintainable changes. Avoid unnecessary rewrites or dependencies.
3. Use shared design tokens and reusable components. Avoid scattered hardcoded colours.
4. Verify responsive layouts at phone, tablet and desktop widths.
5. Respect accessibility: semantic HTML, keyboard navigation, visible focus, reduced motion, meaningful alt text and adequate contrast.
6. Optimise images, prevent layout shifts and avoid unnecessary animation.
7. Test navigation, theme switching, menu filters, QR destination, links, build and browser console.
8. Report what was actually tested. Never claim a deployment, browser check or client approval that did not happen.

## Design quality bar
Aim for a distinctive editorial restaurant identity, not a generic template. Use strong hierarchy, confident typography, generous but purposeful spacing, deliberate image crops, restrained motion and a clear visual rhythm. Every section should reinforce the Inari Kicchin brand rather than exist as decoration.
