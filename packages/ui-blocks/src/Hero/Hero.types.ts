import type { NovaraTheme } from "@simontandoh/novara-themes";

export type HeroProps = {
  eyebrow?: string;
  headline: string;
  sub?: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  image?: { src: string; alt: string };
  theme: NovaraTheme;
};
