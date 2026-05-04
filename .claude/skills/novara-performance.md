---
name: novara-performance
description: Use when reviewing build size, image optimisation, bundle limits, or before launch. Apply automatically as the final pass before deployment to ensure every Novara site meets premium-grade performance standards.
---

# Novara Performance Skill

## Targets (non-negotiable)

- LCP: <2.0s mobile, <1.5s desktop
- INP: <200ms
- CLS: <0.1
- Total JS shipped: <250KB gzip on standard, <400KB on premium with 3D
- Total images on first paint: <500KB

## Image rules

- Always use `next/image` with explicit width/height
- Hero image: WebP or AVIF, <150KB, served via next/image responsive sizes
- Below-fold images: `loading="lazy"`, `placeholder="blur"`
- Never ship JPEG over 200KB
- SVG for all icons and logos
- Background patterns: SVG or CSS, never raster

## Font loading

- `next/font/google` with `display: "swap"`
- Subset to latin only unless brand requires extended
- Preload only the display font, never the body font
- Max 2 font families per site (display + body)

## Code splitting

- Dynamic import any 3D, video, or heavy animation libs
- `next/dynamic` with `ssr: false` for client-only components
- Split route segments — no monolithic page components

## Third-party scripts

- All analytics via `next/script` with `strategy="afterInteractive"` or later
- No GTM unless client explicitly needs tag management
- No chat widgets above the fold
- Defer all marketing pixels

## Build verification (run before every deploy)

```bash
pnpm build
# Check .next/analyze if @next/bundle-analyzer is set up
# Run Lighthouse locally on the production build
```

## Premium-tier additional checks

- Lenis scroll FPS stays at 60 on mid-range mobile
- 3D scenes deferred until after LCP
- No CLS from animation
