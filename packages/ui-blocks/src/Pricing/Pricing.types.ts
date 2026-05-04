import type { NovaraTheme } from "@simontandoh/novara-themes";

export type PricingTier = {
  name: string;
  price: string; // e.g. "£79", "£499", "From £2,500"
  cadence?: string; // e.g. "/month", "+ £49/mo", "one-time"
  description?: string;
  features: string[];
  cta: { label: string; href: string };
  featured?: boolean; // highlights this tier
};

export type PricingStat = {
  value: string; // "5 days", "30+", "£0"
  label: string; // "Average launch", "Active clients", "Upfront"
};

export type PricingProps = {
  eyebrow?: string;
  headline: string;
  sub?: string;
  tiers?: PricingTier[]; // for Tiered
  offer?: PricingTier; // for Minimal - single tier
  stats?: PricingStat[]; // for Minimal - anchor stats below offer
  theme: NovaraTheme;
};
