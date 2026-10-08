# JAP Portfolio Motion

Motion is used to reinforce hierarchy and cinematic depth. It should not compete with the artwork or slow navigation.

## Engine

Anime.js 4 is reserved for choreography that benefits from timelines and staggered sequencing, currently the Home hero and Skills page.

Global route transitions and shared scroll effects use the browser Web Animations API, IntersectionObserver, and requestAnimationFrame instead of importing Anime.js into the site-wide client boundary.

Anime-powered React integrations use `createScope()` so animation instances and inline styles are reverted when their component unmounts.

## Home entrance sequence

The Home hero currently enters in this order:

1. Artwork layer
2. Atmosphere layer
3. Global header
4. Professional role label
5. Name / hero headline
6. Introductory copy
7. Primary and secondary calls to action
8. Current-focus note
9. Scroll cue

The timing intentionally overlaps so the sequence feels continuous rather than like separate animations.

## Persistent depth

After the entrance sequence:

- Fine-pointer devices receive a very small pointer parallax effect.
- On tablet/desktop, scrolling shifts the artwork by no more than 18px across the hero.
- Atmosphere moves at a slower rate than the artwork.
- Continuous Home hero scroll depth is disabled below 48rem.
- No perpetual looping animation is used.

## Reduced motion

When `prefers-reduced-motion: reduce` is active:

- Entrance translations are skipped.
- Elements are immediately visible.
- Pointer parallax is disabled.
- Scroll parallax is disabled.
- Existing global CSS also forces parallax layers back to a static transform.

## Motion hooks

Motion targets are exposed with semantic data attributes rather than styling classes. This keeps visual styling independent from animation implementation.

The Home animation is implemented in:

`components/motion/home-hero-motion.tsx`

Future page and section motion should follow the same scoped-cleanup pattern.


## Skills motion

The Skills page uses viewport-triggered, one-shot reveals rather than continuous animation.

- The explanation block enters first.
- Principle rows follow with a short stagger.
- Capability categories reveal as they enter the viewport.
- Technologies inside each category use a tighter stagger.
- Hover feedback is limited to subtle surface and vertical depth changes.
- No proficiency counters, percentages, or decorative metrics are shown.

The Skills animation is implemented in:

`components/motion/skills-motion.tsx`

Reduced-motion preferences skip all translations and reveal content immediately.


## Page transitions

Route changes use the shared `PageTransition` layout wrapper.

The transition is intentionally restrained:

- It runs only after client-side route changes, not on the initial page load.
- The incoming page starts 8px lower and fades from 0 to full opacity.
- Duration is 360ms with the same soft `out(3)` easing used elsewhere.
- There is no full-screen wipe, loading curtain, or artificial navigation delay.
- Header and footer remain stable while the route content changes.
- Page-specific hero and section motion continue to own their own choreography.

This keeps navigation responsive while still giving the portfolio a consistent sense of continuity.

When `prefers-reduced-motion: reduce` is active, the page is shown immediately at full opacity with no translation.


## Scroll motion

Shared scroll behavior is implemented in:

`components/motion/scroll-motion.tsx`

The system is mounted once inside the global page-transition boundary and uses opt-in data attributes.

### Reveal

Elements marked with `data-scroll-reveal`:

- Start 18px lower
- Fade from transparent to full opacity
- Animate once when roughly 8% of the element enters the viewport
- Use a 620ms soft cubic-bezier transition equivalent to the established `out(3)` feel
- Are unobserved after their first reveal

A MutationObserver registers newly rendered opt-in content, including Projects catalog sections that change after filtering.

### Depth

Elements marked with `data-scroll-depth` receive a very small continuous vertical offset based on viewport position.

The maximum base travel is 14px, multiplied by the element's depth value. This is used for selected artwork containers and oversized background numerals rather than ordinary interface elements.

### Media zoom

`CinematicMedia` can opt into `data-scroll-zoom`.

Media scales by at most 1.5% as it approaches the center of the viewport. This is intentionally too small to read as a dramatic zoom effect; it exists only to reinforce depth.

### Motion boundaries

The shared scroll system does not target:

- The Home hero, which owns its existing pointer and scroll depth behavior
- The Skills page reveal targets, which are controlled by `SkillsMotion`
- Navigation or form controls
- Every text block or list item

This prevents stacked transforms and keeps motion subordinate to content.

When `prefers-reduced-motion: reduce` is active, shared reveal, depth, and zoom effects are skipped entirely.
