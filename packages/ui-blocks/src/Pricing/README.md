# Pricing

## Variants

- **PricingTiered** - 3-column grid with featured highlight. Use for Novara's own site (Launch / Ownership / Premium) and any service business with multiple plans.
- **PricingMinimal** - single offer card with optional anchor stats. Use for client sites with one core offer (most plumber/salon/restaurant builds).

## Best theme pairings

- PricingTiered + tradeTheme
- PricingTiered + luxuryTheme
- PricingMinimal + editorialTheme (signature)
- PricingMinimal + luxuryTheme

## Props

See `Pricing.types.ts` - `PricingProps`, `PricingTier`, `PricingStat`.

## Tier examples

```ts
{
  name: "Launch Plan",
  price: "£79",
  cadence: "/month",
  description: "No upfront. Managed by Novara.",
  features: ["Custom design", "Hosting included", "Monthly updates", "Cancel anytime"],
  cta: { label: "Start Launch Plan", href: "/start/launch" },
  featured: false
}
```
