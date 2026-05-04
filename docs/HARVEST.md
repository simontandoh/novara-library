# Novara Library — Harvest Audit

Living document. Updated as demos are read and decisions made.

## Purpose

Map every section across the 14 demo repositories to a target library block — existing variant, new variant of an existing block, or new block entirely. Decide what gets harvested, what becomes pure design reference, and what gets discarded.

This audit is the **gate** for harvest execution. No code moves into the library before its target row is approved.

## Status legend

| Mark | Meaning |
|---|---|
| ✅ | Confirmed by direct repo read |
| 🔍 | Pattern inferred from sibling demo, needs verification during harvest |
| 📐 | Design reference only — code not portable (HTML-only demos) |
| ⏭️ | Skip — superseded or low value |
| 🆕 | New block / variant to add to library |
| ♻️ | Maps to existing library block |

## Demo inventory

| # | Repo | Stack | Status | Vertical | Routes seen |
|---|---|---|---|---|---|
| 1 | novara-football-club | Next 16 / TS | ✅ | Football club | home, club, fixtures, squad, contact |
| 2 | novara-law-firm | Next 16 / TS | ✅ | Legal services | home (others inferred) |
| 3 | novara-photographer | Next 16 / TS | 🔍 | Photography | tbd |
| 4 | novara-plumbing-demo | Next 16 / TS | 🔍 | Trade — emergency | tbd |
| 5 | willow-stone-demo | Next 16 / TS | 🔍 | Unknown — likely lifestyle/luxury | tbd |
| 6 | pandora-rose-collective | Next 16 / TS | 🔍 | Influencer / creator | real client |
| 7 | novara-car-demo | Next / JS | 🔍 | Automotive | tbd |
| 8 | novara-influencer | HTML | 📐 | Influencer / creator | n/a |
| 9 | novara-nail-tech | HTML | 📐 | Beauty — nails | n/a |
| 10 | novara-luxury-restaurant | HTML | 📐 | Hospitality | n/a |
| 11 | novara-restaurant-demo | HTML | 📐 | Restaurant | n/a |
| 12 | novara-luxury-brand | HTML | 📐 | Luxury fashion / lifestyle | n/a |
| 13 | novara-fitness-coach | HTML | 📐 | Fitness | n/a |
| 14 | luxury-hotel-demo | tbd (local) | 🔍 | Hospitality — hotel | tbd |
| 15 | aurelian-hotel | tbd (local) | 🔍 | Hospitality — hotel | tbd |

## Architectural observation

Every Next.js demo extends `novara-template` (empty shell). They share:
- Next.js 16 App Router, React 19, TypeScript, Tailwind 3
- No motion library — fade/rise animations done via CSS utility classes (`fu d1`, `fu d2`, etc.)
- Components live in `components/{vertical}/` (e.g. `components/football/`, `components/law/`)
- Custom CSS lives in `styles/pages/` and `styles/components/`
- Multi-route — most demos have 4–6 pages

**Implication for harvest:** the demos give us **structural patterns and content** more than reusable code. Each harvested block is rebuilt in library style — theme tokens, Framer Motion entrance/scroll, single-file component pattern.

---

## Confirmed harvest map — Demo 1: novara-football-club

Source: `app/page.tsx` (read in full).

| Section in demo | Library target | Block | Variant | Status | Notes |
|---|---|---|---|---|---|
| `FootballNav` | Nav | 🆕 NavSplit | Confirmed | New block. Wordmark left, links right, CTA pill |
| `Ticker` strip | Ticker | 🆕 TickerScroll | Confirmed | New block. Auto-scrolls horizontally |
| Hero with bg image, watermark text "RFC", overlays | Hero | 🆕 HeroStadium | Confirmed | New variant. Adds large bg-text watermark behind content |
| `next-match` 3-column block | NextEvent | 🆕 NextEventVersus | Confirmed | New block. Reusable: next match, next session, next opening |
| `stats-bar` 5-stat strip | StatsBar | 🆕 StatsBarHorizontal | Confirmed | New block. Number + label, full width |
| `news` featured + 2 side cards | NewsGrid | 🆕 NewsGridFeatured | Confirmed | New block. 1 large + 2 small layout |
| `table` league standings with form pills | DataTable | 🆕 DataTableLeague | Confirmed | New block. Generic data table with row highlight + form pill column |
| `sponsors` logo strip | LogoStrip | 🆕 LogoStripBasic | Confirmed | New block. Eyebrow + horizontal text/logo wall |
| `FooterHome` | Footer | 🆕 FooterExpandedClub | Confirmed | New variant — may consolidate with FooterExpanded |
| `HomeScrollEffects` | — | ⏭️ | Skip | Replaced by Lenis at root layout |

**Yield:** 1 new variant, 8 new blocks, 1 skip.

---

## Confirmed harvest map — Demo 2: novara-law-firm

Source: `app/page.tsx` (read in full).

| Section in demo | Library target | Block | Variant | Status | Notes |
|---|---|---|---|---|---|
| `LawNav` | Nav | ♻️ NavSplit | Reuse | Same shape as football, different theme |
| Hero split (left copy + trust; right image with stat-box) | Hero | 🆕 HeroSplit | Confirmed | New variant. Image right, copy left, optional floating stat box |
| Trust badges row | Primitive | 🆕 TrustList | Confirmed | New primitive. Reusable inline credential list |
| `services-strip` flat horizontal text list | LogoStrip | ♻️ LogoStripBasic | Reuse | Same component as football |
| `about-strip` split copy + 3 inline stats | About | 🆕 AboutWithStats | Confirmed | New block. Copy left, 3 stat tiles right |
| `services-grid` 6-card with SVG icons | Services | 🆕 ServicesIconCards | Confirmed | New variant. Adds SVG icon slot + per-card link |
| `team` 4-card photo grid with overlay | Team | 🆕 TeamGrid | Confirmed | New block. Photo card + overlay reveal |
| `testimonials` 3-card grid with stars | Testimonials | 🆕 TestimonialsCardsWithStars | Confirmed | New variant. Adds star row |
| `cta-section` full-width centered | CTABand | 🆕 CTABandCentered | Confirmed | New block. Reusable across every vertical |
| `LawFooterFull` | Footer | 🆕 FooterPracticeAreas | Confirmed | New variant — may consolidate with FooterExpanded |
| `HomeEffects` | — | ⏭️ | Skip | Replaced by Lenis |

**Yield:** 4 new variants, 5 new blocks, 1 new primitive, 1 skip.

---

## Inferred harvest map (🔍) — pending verification during harvest

### Demo 3 — novara-photographer

Likely sections:
- HeroFullbleed image-led with restrained type 🆕
- PortfolioMasonry 🆕 (Gallery block)
- ServicesEditorial existing variant ♻️
- ContactSplit form + info 🆕
- FooterMinimal existing variant ♻️
- Possible PressLogos ♻️ LogoStripBasic

### Demo 4 — novara-plumbing-demo

Likely sections:
- HeroEmergency with sticky 24/7 phone 🆕
- ServiceArea map block 🆕
- BeforeAfter slider 🆕
- ServicesGrid existing variant ♻️
- ProcessSteps 🆕
- ReviewsAggregate 🆕
- StickyEmergencyBar 🆕 primitive

### Demo 5 — willow-stone-demo

Vertical unknown — identify on read. Likely lifestyle/luxury.

### Demo 6 — pandora-rose-collective

Real client (influencer). Strip personal content during harvest, keep structure.
Likely sections:
- HeroPortrait image-led 🆕
- MediaKit stats + brand collabs 🆕
- ContentPillars 3-col vertical themes 🆕
- BrandLogos collab strip ♻️ LogoStripBasic
- BookingCTA inquire form 🆕

### Demo 7 — novara-car-demo

Likely sections:
- HeroVehicle full-bleed 🆕 (may collapse into HeroCinematic)
- ModelGrid 🆕
- BookTestDrive booking CTA 🆕

---

## HTML-only demos — design reference (📐)

Code not portable. Harvest design language only — typography pairings, color systems, motion timing, layout proportions.

### Demo 8 — novara-influencer (Celeste Vane)
Reference for editorial influencer aesthetic. Feeds future MediaKit, ContentPillars, HeroPortrait.

### Demo 9 — novara-nail-tech (Lola Nails)
Reference for beauty service-menu pattern, BookingCTA inline.

### Demo 10 — novara-luxury-restaurant
Reference for hospitality typography, Reservations, MenuList editorial.

### Demo 11 — novara-restaurant-demo
Standard restaurant pattern. Lower priority — likely superseded by luxury sibling.

### Demo 12 — novara-luxury-brand
Highest design value of the HTML demos. Feeds editorialTheme refinements and future Lookbook block.

### Demo 13 — novara-fitness-coach
Trainer/coach pattern — class schedule, programme list, stats.

### Demo 14 — luxury-hotel-demo
Hotel pattern — room cards, gallery, reservations, amenity grid.

### Demo 15 — aurelian-hotel
Likely the more refined version of demo 14.

---

## Aggregated new-block list

Library will gain ~22 new blocks and 8+ new variants of existing blocks.

### New blocks (priority order)

| # | Block | First seen | Variants planned | Priority |
|---|---|---|---|---|
| 1 | Nav | football, law | NavMinimal, NavSplit, NavSticky | P0 |
| 2 | CTABand | law | CTABandCentered, CTABandSplit | P0 |
| 3 | StatsBar | football, law | StatsBarHorizontal, StatsBarStacked | P0 |
| 4 | LogoStrip | football, law | LogoStripBasic, LogoStripMarquee | P0 |
| 5 | AboutWithStats | law | AboutSplit, AboutInline | P0 |
| 6 | Team | law | TeamGrid, TeamEditorial | P0 |
| 7 | ProcessSteps | plumbing | ProcessNumbered, ProcessTimeline | P1 |
| 8 | Gallery | photographer | GalleryMasonry, GalleryGrid, GalleryLightbox | P1 |
| 9 | ContactSplit | photographer | ContactSplit, ContactInline | P1 |
| 10 | NextEvent | football | NextEventVersus, NextEventDate | P1 |
| 11 | NewsGrid | football | NewsGridFeatured, NewsGridUniform | P1 |
| 12 | DataTable | football | DataTableLeague, DataTableBasic | P2 |
| 13 | Ticker | football | TickerScroll, TickerStatic | P2 |
| 14 | MediaKit | influencer | MediaKitStats, MediaKitFull | P2 |
| 15 | ContentPillars | influencer | PillarsThree, PillarsGrid | P2 |
| 16 | MenuList | nails / restaurant | MenuListEditorial, MenuListPriced | P2 |
| 17 | BookingCTA | nails | BookingInline, BookingSticky | P2 |
| 18 | RoomCards | hotel | RoomCardsGrid, RoomCardsEditorial | P3 |
| 19 | Reservations | restaurant / hotel | ReservationsInline, ReservationsModal | P3 |
| 20 | BeforeAfter | plumbing | BeforeAfterSlider | P3 |
| 21 | ServiceArea | plumbing | ServiceAreaMap, ServiceAreaList | P3 |
| 22 | Amenities | hotel | AmenitiesGrid, AmenitiesIconList | P3 |

### New variants of existing blocks

| Block | New variant | First seen | Priority |
|---|---|---|---|
| Hero | HeroSplit | law | P0 |
| Hero | HeroStadium | football | P1 |
| Hero | HeroEmergency | plumbing | P1 |
| Hero | HeroPortrait | influencer | P2 |
| Services | ServicesIconCards | law | P0 |
| Services | ServicesPriceList | nails / restaurant | P2 |
| Testimonials | TestimonialsCardsWithStars | law | P0 |
| Footer | FooterPracticeAreas | law, football | P1 |

### New primitives

| Primitive | First seen | Priority |
|---|---|---|
| TrustList | law | P0 |
| StatTile | football, law | P0 |
| FormPill (W/D/L) | football | P2 |
| StickyBar | plumbing | P2 |

---

## Execution order

**Wave 1 — P0** (high reuse, blocks every future build)
1. Nav (NavSplit + NavMinimal)
2. CTABand (CTABandCentered + CTABandSplit)
3. StatsBar (StatsBarHorizontal + StatsBarStacked)
4. LogoStrip (LogoStripBasic + LogoStripMarquee)
5. AboutWithStats
6. Team (TeamGrid + TeamEditorial)
7. Hero variant: HeroSplit
8. Services variant: ServicesIconCards
9. Testimonials variant: TestimonialsCardsWithStars
10. Primitives: TrustList, StatTile

**Wave 2 — P1**
11. ProcessSteps
12. Gallery
13. ContactSplit + ContactInline
14. NextEvent
15. NewsGrid
16. Hero variant: HeroStadium

**Wave 3 — P2**
17. DataTable
18. Ticker
19. MediaKit
20. ContentPillars
21. MenuList
22. BookingCTA
23. Hero variants: HeroEmergency, HeroPortrait

**Wave 4 — P3**
24. RoomCards
25. Reservations
26. BeforeAfter
27. ServiceArea
28. Amenities

After Wave 1, the library can credibly build any trade, beauty, consultant, restaurant, ecommerce, or service business site without invention. After Wave 2, photography and most editorial work too.

---

## Open questions

1. Consolidate FooterExpanded with FooterPracticeAreas/FooterFull, or keep separate?
2. Does Hero need a true HeroStadium variant or is the watermark text just a CSS detail of HeroCinematic?
3. Should DataTable live in ui-blocks or ui-primitives?
4. HTML-only demos — convert to Next.js eventually, or design references forever?

---

## Updates log

- 2026-05-04 — Document created. Demos 1 & 2 read in full. Demos 3–7 inferred from architecture. HTML demos categorised as design reference.
