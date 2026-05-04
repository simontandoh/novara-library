import type { NovaraTheme } from "./types";

export const tradeTheme: NovaraTheme = {
  name: "trade",
  fonts: {
    display: '"Anton", sans-serif',
    body: '"Barlow Condensed", sans-serif',
    mono: '"JetBrains Mono", monospace'
  },
  colors: {
    bg: "#0f1419",
    bgAlt: "#161c23",
    surface: "#1e252e",
    text: "#f4f4f4",
    textMuted: "#9aa3ad",
    accent: "#ffb300",
    border: "#2a323d"
  },
  radius: { sm: "0px", md: "2px", lg: "4px", full: "9999px" },
  spacing: { section: "6rem", block: "3rem" },
  motion: { ease: [0.25, 1, 0.5, 1], duration: 0.6 }
};
