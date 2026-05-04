---
name: novara-component
description: Use when adding a new block or primitive to packages/ui-blocks or packages/ui-primitives. Defines the file structure, variant pattern, export rules, and Storybook entry conventions so every component in the library is consistent and reusable across client builds.
---

# Novara Component Skill

## File structure for a new block

```
packages/ui-blocks/src/Hero/
├── index.ts              # exports
├── Hero.types.ts         # shared types
├── variants/
│   ├── HeroMinimal.tsx
│   ├── HeroCinematic.tsx
│   └── HeroSplit.tsx
└── README.md             # variant gallery, props, when to use
```

## Naming

- Block folder: PascalCase singular (`Hero`, not `Heroes`)
- Variants: `{Block}{Style}.tsx` — `HeroCinematic`, `PricingTiered`, `TestimonialsMarquee`
- Props interface: `{Block}Props` exported from `.types.ts`

## Variant rules

- Every block must ship with at least 2 variants — minimal and expressive
- Variants share the same props interface, never diverge
- Theme tokens come from props, never hardcoded
- All copy comes from props, never hardcoded
- All images come from props, with sensible Unsplash fallback for demos

## Export pattern

```ts
// index.ts
export { HeroMinimal } from "./variants/HeroMinimal";
export { HeroCinematic } from "./variants/HeroCinematic";
export { HeroSplit } from "./variants/HeroSplit";
export type { HeroProps } from "./Hero.types";
```

## Required per component

- Mobile-first responsive
- Reduced-motion fallback
- ARIA labels on interactive elements
- No layout shift on image load (next/image with explicit dimensions)
- TypeScript strict — no `any`

## README.md per block

Must include:
- Screenshot or Loom of each variant
- Props table
- "Use when" decision rule
- Theme combinations that look best
