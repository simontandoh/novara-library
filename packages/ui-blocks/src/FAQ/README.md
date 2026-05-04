# FAQ

## Variants

- **FAQAccordion** - collapsible questions with split-column header. First item open by default. Use for trade, beauty, consultant, restaurant, ecommerce - every Launch Plan build.
- **FAQEditorial** - open Q&A in two-column magazine grid. No interaction. Use for editorial, luxury, photography, hospitality where the answers themselves are part of the brand voice.

## Best theme pairings

- FAQAccordion + tradeTheme
- FAQAccordion + luxuryTheme
- FAQEditorial + editorialTheme
- FAQEditorial + luxuryTheme

## Props

See `FAQ.types.ts` - `FAQProps`, `FAQItem`.

## Notes

- Accordion: only one item open at a time. To allow multiple, change `useState<number | null>` to `useState<number[]>` and adjust handler.
- Editorial: works best with 4-8 items. Beyond 8, switch to Accordion.
