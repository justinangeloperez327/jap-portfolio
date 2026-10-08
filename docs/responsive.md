# Responsive Architecture

The portfolio is designed as distinct mobile, tablet, laptop, and wide-desktop compositions rather than a single desktop layout that shrinks.

## Layout ranges

The primary layout behavior follows Tailwind's standard responsive ranges:

- Base: phones and narrow viewports
- `sm`: wider phones / compact layouts
- `md`: tablet content adjustments
- `lg`: laptop-level composition
- `xl`: dense two-column editorial layouts
- `2xl` and above: spacing refinement while preserving the 80rem content maximum

Primary navigation intentionally remains in the compact full-screen menu through tablet widths and switches to the horizontal navigation at `lg`.

## Hero behavior

Heroes use `100svh` as the minimum visual height and can grow when content requires more space.

On narrow and intermediate screens:

- Content is anchored lower in the cinematic frame.
- Horizontal artwork overlays also gain a vertical darkening layer so text remains readable over full-width imagery.
- Hero type and display type use fluid `clamp()` scales.
- Content remains stacked until there is enough width for a true two-column composition.

## Dense layouts

Contact and project case-study hero layouts wait until `xl` before becoming two columns. This avoids forcing form panels or project imagery into narrow columns on 1024px-class devices.

Project catalog editorial sidebars also wait until `xl` before becoming sticky two-column layouts.

## Artwork focal positions

All full-page artwork uses `ResponsiveFocalPosition`:

```ts
{
  mobile: "68% center",
  tablet: "66% center",
  desktop: "70% center",
}
```

These values are converted to CSS custom properties by `ImageLayer` and switched at 48rem and 64rem.

Project records expose the same `imagePosition` structure. When final artwork is uploaded, composition should be tuned in data rather than by adding page-specific CSS.

## Image sizes

Full-screen hero artwork uses `100vw`.

Project artwork supplies responsive `sizes` hints so Next.js can request an appropriate source width for stacked versus split layouts.

## Content width

`site-container` remains capped at 80rem on wide displays. Increasing viewport width should create breathing room around the composition rather than indefinitely stretching reading lines.
