# JAP Portfolio

Personal software engineering portfolio built with Next.js, TypeScript, Tailwind CSS v4, shadcn/ui (Nova), and Anime.js.

## Direction

An editorial Tokyo-after-dark atmosphere without visual clutter. Deep midnight surfaces, sparse cyan/violet lighting, large typography, minimal borders, calm transitions, and high contrast. The goal is to evoke an anime-inspired Tokyo street once original artwork is supplied—not to simulate a dense cyberpunk scene through CSS.

**The site is deliberately image-free.** There are no raster/vector scene assets, remote image sources, generated social preview images, decorative particles, or mock train/building artwork. The home and section heroes and selected project views have labelled empty composition slots. Home project cards are text-first.

## Run

```bash
npm ci
npm run dev
```

Quality checks:

```bash
npm run lint
npm run typecheck
npm run build
```

## Pages

- Home — introduction and featured projects
- About — experience and engineering perspective
- Skills — tools and architecture
- Projects — project catalog and individual case studies
- Contact — contact form and public links

Project content is centralized in `data/projects.ts` without media properties.

## Future art

The intended independent layers are a distant Tokyo city backdrop, a restrained street-level midground, foreground road/street furniture, a character, and an optional independently animated train/rail sequence. No train in the static city/road layers. No particles or overcrowded repeated objects. See `docs/visual-direction.md`.

The portfolio is usable and responsive with every visual slot empty.
