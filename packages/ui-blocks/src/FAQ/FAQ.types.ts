import type { NovaraTheme } from "@simontandoh/novara-themes";

export type FAQItem = {
  question: string;
  answer: string;
};

export type FAQProps = {
  eyebrow?: string;
  headline: string;
  sub?: string;
  items: FAQItem[];
  theme: NovaraTheme;
};
