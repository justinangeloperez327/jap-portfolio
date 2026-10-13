# Visual Direction — Tokyo After Dark

## Current state

This version intentionally has **no images**. Text and empty framed areas define the visual hierarchy. Subtle CSS-only night-time tints are not substitutes for artwork.

## Composition when original artwork is approved

1. Distant Tokyo skyline/building backdrop, with restrained realistic density
2. Street-level midground with a few carefully placed signs, shops, realistic vehicles and lights
3. Foreground road, curbs, sidewalks, railings and street furniture
4. One separate character figure
5. Optional separate bridge/rail line and independently moving train, never baked into static layers

Each layer should be exportable independently, with transparency where appropriate. Avoid excess trees, buildings, signs, lamp posts, cables, neon flares, petals, particles, and props. Prioritize clear depth, believable scale and negative space.

## Product UI

- Text remains fully readable and navigable with no art.
- Deep navy, low-luminance surfaces; cyan as a controlled interactive accent; occasional violet highlights.
- Minimal surface effects, small radii, compact controls, generous composition space.
- Anime.js for brief purpose-driven entrances only.
- Mobile composition is independent, not a desktop crop.
- Provide reduced-motion behavior for all future moving parts, especially a train.

## Current implementation

`components/media/scene-slot.tsx` is an inert empty frame with no network requests. `components/media/page-hero.tsx` positions it beside page copy. Contact does not use one to preserve form width.

Do not introduce arbitrary stock images, CSS mock streets, SVG silhouettes, or procedural particles before final artwork is approved.
