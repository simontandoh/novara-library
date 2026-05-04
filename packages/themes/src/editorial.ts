import type { NovaraTheme } from "./types";

export const editorialTheme: NovaraTheme = {
  name: "editorial",
  fonts: {
    display: '"Cormorant Garamond", serif',
    body: '"Söhne", "Inter", sans-serif',
    mono: '"JetBrains Mono", monospace'
  },
  colors: {
    bg: "#fafaf7",
    bgAlt: "#f0efe9",
    surface: "#ffffff",
    text: "#1a1a18",
    textMuted: "#6b6b66",
    accent: "#a8492a",
    border: "#d8d6cc"
  },
  radius: { sm: "0px", md: "0px", lg: "0px", full: "9999px" },
  spacing: { section: "10rem", block: "5rem" },
  motion: { ease: [0.16, 1, 0.3, 1], duration: 1.0 }
};
