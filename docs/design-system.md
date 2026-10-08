# JAP Portfolio Design System

The portfolio is dark-first and artwork-led. UI components support the artwork rather than becoming the dominant visual language.

## Palette

Core surfaces use near-black, low-chroma blue tones.

Accent colors are deliberately limited:

- Cyan — primary interactive/accent color
- Violet — secondary atmospheric accent
- Magenta — rare highlight
- Blue — supporting depth accent

Neon colors should be used sparingly. Large UI surfaces should remain dark and neutral.

## Surfaces

Three semantic surface levels are available:

- `surface-subtle`
- `surface-raised`
- `surface-strong`

Use `glass-surface` only where content must float over artwork. Avoid stacking multiple glass cards.

## Typography

The site uses a system-first sans stack to avoid external font loading and layout shifts.

Typography principles:

- Large editorial headings
- Restrained font weights
- Comfortable body line-height
- Uppercase tracking only for small section labels
- Mono type only for technical metadata

## Layout

- Maximum content width: `80rem`
- Reading width: `44rem`
- Header height: `4.5rem`
- Horizontal gutter: responsive via `--page-gutter`
- Section spacing: responsive via `--section-space`
- Hero height: `100svh`

Shared utilities:

- `site-container`
- `reading-width`
- `section-space`
- `hero-height`
- `glass-surface`
- `cinematic-overlay-left`
- `cinematic-overlay-bottom`

## Shape

The base radius is intentionally restrained at `0.5rem`. Avoid highly rounded dashboard-style cards.

## Layering

- Background: 0
- Atmosphere: 10
- Content: 20
- Navigation: 50
- Overlay: 60

These values are mirrored in `lib/design-system.ts` for motion and client-side logic.

## Responsive breakpoints

Tailwind defaults remain the primary responsive system, with:

- xs: 480px
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1536px
- 3xl: 1920px

Final artwork focal positions will be configured per page rather than relying on a global center crop.

## Motion

Motion should add depth, hierarchy, and atmosphere only. All motion work must respect `prefers-reduced-motion`.
