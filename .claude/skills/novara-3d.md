---
name: novara-3d
description: Use when adding 3D elements, WebGL backgrounds, or Spline scenes to a Novara build. Covers React Three Fiber setup, Spline embed pattern, performance budgets, and when 3D is appropriate vs overkill. Only used on premium and editorial-tier builds, never on Launch Plan.
---

# Novara 3D Skill

## When to use 3D

- Allura builds — yes, signature moments
- Editorial/luxury client builds — yes, sparingly, one scene per page max
- Trade/beauty/restaurant Launch Plan — no, never
- Consultant builds — only if the brand explicitly calls for it

## Spline (preferred for static or lightly interactive scenes)

Use `@splinetool/react-spline/next` for Next.js App Router. Always:
- Lazy-load via `next/dynamic` with `ssr: false`
- Wrap in a fallback (skeleton, gradient, or first-frame poster image)
- Set explicit `width`/`height` on the container to prevent layout shift
- Export Spline scene compressed — target under 2MB

## React Three Fiber (preferred for custom scenes, particles, shaders)

- Use `@react-three/fiber` Canvas with `dpr={[1, 2]}` to cap pixel ratio
- Add `<Suspense fallback={null}>` around all loaded assets
- Use `@react-three/drei` `Preload` and `useGLTF.preload`
- Cap geometry under 50k triangles total per scene
- Mobile: reduce particle counts by 60%, disable shadows

## Performance budget

- Total 3D asset weight: <3MB on premium, <1MB on standard
- First paint must not be blocked by 3D — render scene after LCP
- If FPS drops below 50 on mid-range mobile, simplify or fall back to video/poster

## Never

- Auto-play 3D scenes on page load without user opt-in if total weight >2MB
- Use Spline as the LCP element
- Embed multiple Spline scenes on one page
- Skip the reduced-motion fallback
