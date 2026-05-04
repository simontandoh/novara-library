export type NovaraTheme = {
  name: string;
  fonts: { display: string; body: string; mono: string };
  colors: {
    bg: string;
    bgAlt: string;
    surface: string;
    text: string;
    textMuted: string;
    accent: string;
    border: string;
  };
  radius: { sm: string; md: string; lg: string; full: string };
  spacing: { section: string; block: string };
  motion: { ease: [number, number, number, number]; duration: number };
};
