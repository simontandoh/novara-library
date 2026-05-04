import type { NovaraTheme } from "@simontandoh/novara-themes";

export type FooterLink = {
  label: string;
  href: string;
};

export type FooterColumn = {
  title: string;
  links: FooterLink[];
};

export type FooterContact = {
  email?: string;
  phone?: string;
  address?: string;
};

export type FooterProps = {
  brand: string;
  tagline?: string;
  columns?: FooterColumn[];
  contact?: FooterContact;
  social?: FooterLink[];
  legal?: FooterLink[];
  copyright?: string;
  theme: NovaraTheme;
};
