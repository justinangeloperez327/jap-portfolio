# Cinematic Media System

The portfolio artwork layer is designed so final images can be added later without restructuring page components.

## Components

- `PageHero` — full-height page hero frame
- `CinematicBackground` — composes the complete artwork stack
- `ImageLayer` — responsive `next/image` layer using the Next.js 16 `preload` API for LCP artwork
- `ArtworkPlaceholder` — temporary skeleton while artwork is unavailable
- `AtmosphereLayer` — low-opacity cyan/violet environmental depth
- `GradientOverlay` — directional text-readability treatment
- `NoiseOverlay` — subtle cinematic texture
- `ForegroundLayer` — decorative content above the background treatment
- `ParallaxLayer` — motion-ready depth wrapper

## Artwork configuration

All primary page artwork is configured in:

`data/artwork.ts`

Each entry provides:

- optional `src`
- descriptive `alt`
- placeholder label
- mobile focal position
- tablet focal position
- desktop focal position
- optional responsive image `sizes`

Example:

```ts
home: {
  src: "/images/home/hero.webp",
  alt: "Tokyo night portfolio scene",
  placeholderLabel: "Home artwork coming later",
  position: {
    mobile: "68% center",
    tablet: "66% center",
    desktop: "70% center",
  },
}
```

## Expected final image paths

Recommended paths:

- `/images/home/hero.webp`
- `/images/about/hero.webp`
- `/images/skills/hero.webp`
- `/images/projects/hero.webp`
- `/images/contact/hero.webp`

Project-specific artwork will later live under `/images/projects/`.

## Responsive focal positions

The system does not assume every image should be centered.

`ImageLayer` exposes per-breakpoint object positioning through CSS variables:

- mobile: below 768px
- tablet: 768px through 1023px
- desktop: 1024px and above

These positions should be tuned after the final artwork is uploaded.

## Overlay directions

Supported values:

- `left`
- `right`
- `bottom`
- `none`

Use the overlay direction based on where readable content is placed, not as a decorative effect.

## Parallax

`ParallaxLayer` records a depth value through:

```html
data-parallax-layer
data-parallax-depth
```

The Home hero consumes this value for its dedicated motion treatment. Other pages do not pay for a persistent compositor hint simply because they use the shared artwork wrapper.

When `prefers-reduced-motion: reduce` is enabled, parallax transforms are explicitly disabled.

## Replacement workflow

When the final page artwork is uploaded:

1. Place each image in its expected `public/images/<page>/` directory.
2. Add the image path to the matching entry in `data/artwork.ts`.
3. Review desktop, tablet, and mobile crops.
4. Adjust only the focal-position values if necessary.

No page layout or component changes should be required.

## Delivery

The shared image layer uses Next.js Image Optimization.

- Hero/LCP artwork is preloaded through the Next.js 16 `preload` prop.
- Non-critical project artwork remains lazy-loaded by default.
- Responsive `sizes` prevent desktop-sized sources from being sent unnecessarily to narrow viewports.
- `next.config.ts` enables AVIF and WebP output.
- The configured device widths stop at 2560px to avoid generating unnecessary ultra-wide variants for the portfolio layout.

Final source artwork should still be exported at sensible dimensions and compressed before upload. Image Optimization should not be used as a substitute for multi-megabyte source assets.
