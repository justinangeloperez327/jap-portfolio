# Performance

Use server components by default. Client-side motion is scoped to where it is needed. Route transitions and scroll reveals should not introduce continuous work when offscreen.

The current site has no image payloads, external image requests, generated raster social previews, media optimization pipeline, or video playback.

- Keep the content width capped; prevent horizontal overflow.
- Ensure the large Home hero heading is the LCP candidate and is visible without JavaScript.
- Keep typographic covers in normal flow to avoid clipping wrapped text on small screens.
- Prefer short, one-shot reveals over constant scroll listeners.
- Defer any train animation and its runtime cost until a final approved asset exists.
- Respect reduced-motion and accessibility preferences.

Run `npm run lint`, `npm run typecheck`, and `npm run build`. Measure LCP, CLS and interaction responsiveness on the deployed site.

Future artwork must be independently compressed and profiled before integration.
