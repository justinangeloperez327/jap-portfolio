# JAP Portfolio Design System

## Visual direction

Dark-first, text-first, Tokyo-after-dark editorial design. The current site is image-free. No decorative particles, CSS-built streets, excessive neon, oversized rounded cards, or ornamental clutter.

## Palette

- Deep navy and graphite surfaces
- Cyan for functional and interactive emphasis
- Violet / magenta used rarely for ambient light
- Muted foreground for metadata and supporting copy

## Type

Large editorial headings, readable text, and tracked monospaced micro-labels. System font stacks avoid external requests and layout shifts.

## Surfaces

Use thin borders and mostly flat surfaces. Base radius is `0.375rem`. Reuse `surface-subtle`, `surface-raised`, and `surface-strong` tokens. Glass effects are exceptional, not the default.

## Layout

- 80rem maximum site content width
- 44rem reading column
- Responsive gutters and section spacing via CSS variables
- `100svh` minimum hero with natural vertical expansion
- Essential text never baked into media slots

## Motion

Anime.js supports a short Home entrance; skills and scroll reveals are one-shot. Motion must respect `prefers-reduced-motion`.

Original multi-layer art will be a future separate implementation. See `docs/visual-direction.md`.
