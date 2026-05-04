---
name: novara-motion
description: Use when adding, tuning, or reviewing animation in any Novara build. Defines when to use Framer Motion vs GSAP vs CSS, the standard easing tokens, stagger rules, and scroll patterns. Apply automatically on any component that involves entrance, hover, scroll-driven, or transition motion.
---

# Novara Motion Skill

## Tool selection

- **CSS transitions** — hover states, simple opacity/transform on interactive elements
- **Framer Motion** — component entrance, exit, layout transitions, gesture, presence
- **GSAP + ScrollTrigger** — scroll-pinned sections, horizontal scroll, image sequences, timeline-based reveals, anything requiring precise scrub control
- **Lenis** — always applied at root layout level, never per-component

If a moment can be done in CSS, do it in CSS. Reach for GSAP only when Framer cannot do it cleanly.

## Easing tokens (use these, do not invent new ones)

- `ease-out-expo` → [0.16, 1, 0.3, 1] — entrance, default
- `ease-out-quart` → [0.25, 1, 0.5, 1] — secondary entrance
- `ease-in-out-cubic` → [0.65, 0, 0.35, 1] — transitions between states
- `ease-out-back` → [0.34, 1.56, 0.64, 1] — only on playful blocks, never luxury

## Stagger rules

- Hero text reveal: 0.04s per line, 0.015s per character if splitting
- Card grid entrance: 0.08s between items, max 6 visible at once
- Nav items: 0.05s
- Never stagger more than 12 elements — group them or fade as a block

## Duration defaults

- Micro (hover, focus): 200–300ms
- Standard (entrance, exit): 600–800ms
- Cinematic (hero reveal, scroll-driven): 1000–1800ms

## Scroll patterns

1. **Fade + rise** — default for any below-fold block. 40px translateY, opacity 0→1, ease-out-expo, triggered at 80% viewport
2. **Pinned reveal** — GSAP ScrollTrigger pin, used once per page max, signature moment only
3. **Horizontal scroll** — premium tier only, never on Launch Plan builds
4. **Image sequence** — Allura/award-tier only

## Never

- Animate width/height (use transform: scale instead)
- Stack more than 3 simultaneous animations on the same element
- Use bounce or elastic easing on luxury/editorial themes
- Animate without `will-change` hints on heavy elements
- Forget `prefers-reduced-motion` — wrap heavy motion in a check
