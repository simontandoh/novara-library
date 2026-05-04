# Novara Library

Component library, themes, and Claude Code skills for Novara Studios builds.

## Structure

- `apps/client-template` — clone-per-client Next.js starter
- `packages/ui-primitives` — buttons, inputs, layout primitives
- `packages/ui-blocks` — hero, pricing, testimonials, etc
- `packages/ui-motion` — Framer + GSAP wrappers
- `packages/ui-3d` — R3F + Spline components
- `packages/themes` — vertical-specific design tokens
- `packages/content-engine` — MD-to-JSX parser
- `.claude/skills` — Claude Code skill files

## New client

```bash
pnpm new-client
# prompts for slug and vertical, copies client-template, creates brief.md
```

Then edit `apps/{slug}/brief.md` with brand notes, positioning, and references, and run:

```bash
cd apps/{slug}
pnpm install
pnpm dev
```

Inside that app, invoke the `/novara-build` skill to scaffold the site from the brief.
