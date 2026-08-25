# ArQonnect — Next.js + Tailwind

Multi-page marketing site, migrated from the original static HTML build.

## Structure

- `src/app/` — one route folder per page (App Router): `/`, `/services`,
  `/crm`, `/case-studies`, `/pricing`, `/enterprise`, `/resources`, `/contact`.
- `src/components/sections/` — one component per content section
  (Hero, Demo, Capabilities, Pricing, etc.), composed into pages.
- `src/components/Nav.tsx`, `Footer.tsx`, `SiteChrome.tsx` — shared chrome,
  rendered once in `src/app/layout.tsx` so it isn't repeated per page.
- `src/components/SiteScripts.tsx` — all the original interactivity
  (hero canvas particles, scroll reveals, the cinematic scene engine, the
  door-threshold zoom, chat/voice demo widgets, tab switchers, tickers,
  the pricing calculator) ported to React, wired via `useEffect`. It's
  split into a mount-once effect (nav scroll state, spotlight, magnetic
  buttons) and a per-route effect that re-initializes on navigation, since
  each page only has the DOM elements its own sections use.
- `src/app/globals.css` — Tailwind directives plus the full original design
  system CSS (colors, gradients, keyframe animations). Kept as plain CSS
  rather than force-fit into Tailwind utilities, given how dense the custom
  animation work is — Tailwind's config (`tailwind.config.ts`) is wired up
  and ready for any new components you build going forward.
- `public/` — logo and all media (images/video) that used to be inlined as
  base64 in the original HTML.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start   # production build
```

## Notes

- The Google Fonts `<link>` in `layout.tsx` pulls Fraunces / Inter /
  JetBrains Mono / Space Grotesk exactly as the original site did — no
  action needed, it'll fetch normally in any environment with internet
  access.
- Nav/Footer links use `next/link` and route to the actual pages
  (`/services#capabilities` etc. for in-page anchors), replacing the old
  single-page `#section` hashes.
