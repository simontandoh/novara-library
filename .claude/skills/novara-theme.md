---
name: novara-theme
description: Use when creating or modifying theme tokens in packages/themes. Defines the token shape, font pairings per vertical, color systems, and how themes are consumed by blocks. Apply when a new vertical is added or an existing theme needs tuning.
---

# Novara Theme Skill

## Theme token shape

Every theme exports an object with this exact shape:

```ts
export const luxuryTheme = {
  name: "luxury",
  fonts: {
    display: "Bodoni Moda, serif",
    body: "Montserrat, sans-serif",
    mono: "JetBrains Mono, monospace"
  },
  colors: {
    bg: "#0a0a0a",
    bgAlt: "#141414",
    surface: "#1c1c1c",
    text: "#f5f5f0",
    textMuted: "#8a8a85",
    accent: "#c9a961",
    border: "#2a2a2a"
  },
  radius: { sm: "2px", md: "4px", lg: "8px", full: "9999px" },
  spacing: { section: "8rem", block: "4rem" },
  motion: { ease: [0.16, 1, 0.3, 1], duration: 0.8 }
} as const;
```

## Vertical → font pairing reference

- **trade** (plumber, electrician, roofer): Anton + Barlow Condensed — bold, no-nonsense
- **beauty** (salon, aesthetics, nails): Playfair Display + Jost — elegant, modern
- **luxury** (high-end consumer, lifestyle): Bodoni Moda + Montserrat — refined, editorial
- **restaurant**: Cormorant Garamond + Inter Tight — warm, classical
- **consultant** (legal, financial, strategy): DM Serif Display + DM Sans — authoritative, trusted
- **editorial** (photography, creative, media): Cormorant Garamond + Söhne — magazine, art-led
- **ecommerce**: Söhne Breit + Söhne — modern, neutral

## Color rules

- Dark themes: bg under #1a1a1a, text over #e5e5e5, contrast ratio 7:1 minimum
- Accent must pass WCAG AA against bg
- Never more than 6 colors total in a theme — bg, bgAlt, surface, text, textMuted, accent, border

## Usage in blocks

```tsx
import { useTheme } from "@novara/themes";
const theme = useTheme();
<div style={{ background: theme.colors.bg, fontFamily: theme.fonts.display }}>
```

Never hardcode theme values in blocks. Always pull from theme.
