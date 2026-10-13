# Responsive Architecture

The site supports small phones through wide desktop screens without requiring artwork.

- **Mobile:** copy first; empty scene slot stacked below hero copy
- **Desktop:** two-column hero with a reserved scene frame beside text
- **Contact:** full-width content and form, no scene slot
- **Project previews:** text-first cards
- **Project details:** labelled empty media area separated from content
- **Navigation:** compact menu until `lg`, then desktop navigation

Hero sections use `100svh` minimum height but grow naturally as content requires. Headings and gutters use responsive CSS values. Page width is capped at 80rem.

No image focal-position, mirroring, or Next Image sizing logic remains. Future approved artwork needs independently designed mobile variants.
