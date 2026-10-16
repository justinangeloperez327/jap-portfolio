# Responsive Architecture

The site supports small phones through wide desktop screens without requiring artwork.

- **Mobile:** copy first; useful companion content stacked below hero copy
- **Desktop:** two-column Home, About, and Skills introductions with relevant companion content
- **Contact:** full-width content and form
- **Project previews:** text-first cards
- **Project details:** typographic metadata cover separated from content
- **Navigation:** compact menu until `lg`, then desktop navigation

The Home hero can fill the desktop viewport; inner-page introductions use natural content height. Covers remain in normal flow so content can grow on narrow screens. Headings and gutters use responsive CSS values. Page width is capped at 80rem.

No image focal-position, mirroring, or Next Image sizing logic remains. Future approved artwork needs independently designed mobile variants.
