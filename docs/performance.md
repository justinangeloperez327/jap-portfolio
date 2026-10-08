# Performance Architecture

The portfolio is designed to keep cinematic presentation from becoming a permanent runtime tax.

## Client JavaScript

Global motion does not depend on Anime.js.

- Route transitions use the Web Animations API.
- Scroll reveals use IntersectionObserver + Web Animations.
- Continuous depth/zoom updates use requestAnimationFrame.
- Scroll listeners are attached only while depth/zoom targets are near the viewport.
- Page visibility pauses continuous scroll work.
- MutationObserver is used only to register newly rendered opt-in motion targets.

Anime.js remains page-scoped to:

- Home hero choreography
- Skills staggered reveal choreography

This keeps timeline/stagger functionality where it provides value without forcing the library into every route's shared motion path.

## Mobile rendering

Below 48rem:

- continuous shared depth and zoom are disabled,
- Home hero scroll parallax is disabled,
- full-screen fractal noise is not rendered,
- large blurred cyan/violet atmosphere blobs are not rendered,
- one-shot section reveals remain lightweight.

The bottom atmosphere gradient and readability overlays remain, so visual hierarchy is preserved.

## Images

All cinematic/project images flow through `next/image`.

Current configuration:

- AVIF and WebP output
- responsive source widths up to 2560px
- hero/LCP images use Next.js 16 `preload`
- non-critical images use native lazy loading through `next/image`
- explicit `sizes` values for full-width and split project compositions
- responsive focal positions without duplicate image assets

Final artwork should be pre-compressed before it enters `public/images`. As a practical portfolio target:

- avoid multi-megabyte source files,
- keep hero dimensions proportional to their expected maximum display width,
- avoid shipping animation/video when a still image communicates the same scene,
- prefer separate animation layers only when the motion materially improves the experience.

## Rendering

The content maximum remains 80rem, preventing progressively larger layout/image requirements on ultra-wide screens.

Persistent `will-change: transform` was removed from the generic parallax wrapper. Browser compositing should be requested only while a component is actually animating.

## Core Web Vitals priorities

Final QA should pay particular attention to:

1. LCP — hero artwork and hero text
2. INP — navigation, project filters, and Contact form
3. CLS — image/artwork replacement and responsive typography
4. Mobile main-thread work — especially motion and backdrop effects

## Final measurement

Group 33 should run the production build and test deployed pages with Lighthouse or equivalent browser tooling.

Performance decisions should be revisited after the final artwork is installed because the image files will likely dominate transfer size more than the application code.
