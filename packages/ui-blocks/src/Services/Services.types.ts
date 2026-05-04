import type { NovaraTheme } from "@novara/themes";

export type ServiceItem = {
  title: string;
  description: string;
  icon?: string; // emoji, SVG path, or icon name - variant decides
  href?: string; // optional CTA per service
};

export type ServicesProps = {
  eyebrow?: string;
  headline: string;
  sub?: string;
  items: ServiceItem[];
  theme: NovaraTheme;
};
