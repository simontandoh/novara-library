# Footer

## Variants

- **FooterMinimal** — large brand wordmark, optional tagline, single-row legal/social. Use for editorial, luxury, photography, single-page sites.
- **FooterExpanded** — brand block + 2-3 nav columns + contact + legal/social. Use for trade, beauty, consultant, restaurant, ecommerce — any site with multi-page nav.

## Best theme pairings

- FooterMinimal + editorialTheme
- FooterMinimal + luxuryTheme
- FooterExpanded + tradeTheme
- FooterExpanded + luxuryTheme

## Props

See `Footer.types.ts` — `FooterProps`, `FooterLink`, `FooterColumn`, `FooterContact`.

## Notes

- Year auto-updates via `new Date().getFullYear()`.
- Pass `copyright` to override the default "© {year} {brand}" line.
- Expanded variant works best with 2 or 3 columns. Beyond 3, regroup or split the footer.
- Phone numbers auto-format to `tel:` links — strip spaces only, keep country code.
