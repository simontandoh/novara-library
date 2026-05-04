import type { NovaraTheme } from "./types";

export const luxuryTheme: NovaraTheme = {
  name: "luxury",
  fonts: {
    display: '"Bodoni Moda", serif',
    body: '"Montserrat", sans-serif',
    mono: '"JetBrains Mono", monospace'
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
};
