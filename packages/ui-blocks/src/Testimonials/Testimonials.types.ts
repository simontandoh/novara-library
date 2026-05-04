import type { NovaraTheme } from "@novara/themes";

export type TestimonialItem = {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  avatar?: string;
};

export type TestimonialsProps = {
  eyebrow?: string;
  headline?: string;
  items: TestimonialItem[];
  theme: NovaraTheme;
};
