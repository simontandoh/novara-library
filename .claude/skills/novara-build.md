---
name: novara-build
description: Use when the user asks to build a new client website. Reads brief.md, infers vertical and tone, picks the matching theme from packages/themes, assembles 5-7 blocks from packages/ui-blocks, and outputs Next.js pages. Defaults intelligently — only asks the user when the brief is genuinely ambiguous (missing vertical, conflicting tone signals, or two themes equally fit).
---

# Novara Build Skill

When invoked:
1. Read `brief.md` in the current project root
2. Infer business vertical (trade, beauty, luxury, restaurant, consultant, editorial, ecommerce)
3. Load matching theme from `packages/themes/src/{vertical}.ts`
4. Select 5-7 blocks from `packages/ui-blocks` that fit the brief
5. Compose them into `app/page.tsx` with theme tokens applied
6. Add metadata, favicon references, OG image placeholder
7. Run `pnpm build` to verify no type errors

Decision rules:
- If vertical is stated in brief.md → use it, do not ask
- If vertical is unstated but inferable from context → infer and proceed, note the inference in a comment at the top of page.tsx
- Only ask the user when two themes fit equally well or the brief contradicts itself

Always:
- Use Framer Motion for entrance and hover animations
- Use GSAP only for scroll-driven sequences and pinned reveals
- Apply Lenis smooth scroll on root layout
- Match font pairing from theme file
- Keep LCP under 2s — lazy-load below-fold blocks

Never:
- Install new packages without asking
- Use stock illustration
- Default to Inter, Roboto, or system fonts
