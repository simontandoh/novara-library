---
name: novara-seo
description: Use on every client build for metadata, OG images, sitemap, robots, and schema.org markup. Apply automatically when finalising a build before launch — never ship a Novara site without this skill having been run.
---

# Novara SEO Skill

## Required on every page

- `metadata` export in `layout.tsx` and per-page where unique
- title format: "{Page} — {Brand}" (luxury) or "{Brand} | {Page}" (trade)
- description: 150–160 chars, includes primary keyword and location
- OG image: 1200x630, branded, generated via @vercel/og or static
- Twitter card: summary_large_image
- canonical URL set
- favicon + apple-touch-icon

## Schema.org by vertical

- **trade**: LocalBusiness + Service
- **beauty**: HealthAndBeautyBusiness + Service
- **restaurant**: Restaurant + Menu
- **consultant**: ProfessionalService + Person (for principals)
- **luxury/editorial**: Organization + Person
- All: BreadcrumbList where nav depth >1

## Required files

- `app/sitemap.ts` — dynamic sitemap from routes
- `app/robots.ts` — allow all, point to sitemap
- `app/opengraph-image.tsx` — branded OG default

## Performance gates (block launch if any fail)

- Lighthouse SEO: 100
- Lighthouse Performance: ≥90 mobile
- LCP <2.5s mobile
- CLS <0.1
- No mixed content warnings

## Local SEO add-ons (trade/beauty/restaurant)

- NAP (name/address/phone) consistent across site, footer, schema
- Google Business Profile link in footer
- Geo meta tags
- City/region keywords in H1 and meta description
