# Services

## Variants

- **ServicesGrid** - card grid with hover lift. Use for trade, beauty, consultant, restaurant, ecommerce.
- **ServicesEditorial** - numbered editorial list with large type, no cards. Use for editorial, luxury, photography, hospitality.

## Best theme pairings

- ServicesGrid + tradeTheme
- ServicesGrid + luxuryTheme (when you want structure)
- ServicesEditorial + editorialTheme
- ServicesEditorial + luxuryTheme (signature presentation)

## Props

See `Services.types.ts` - `ServicesProps`, `ServiceItem`.

## Item shape

```ts
{
  title: "Brand Identity",
  description: "Logo, type system, and colour direction.",
  icon: "*",          // optional, ServicesGrid only
  href: "/services/brand"  // optional CTA
}
```
