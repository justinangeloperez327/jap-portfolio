# JAP Portfolio Motion

Motion is used to reinforce hierarchy and cinematic depth. It should not compete with the artwork or slow navigation.

## Engine

The project uses Anime.js 4.

React integrations use `createScope()` so animation instances and inline styles are reverted when their component unmounts.

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
- Scrolling shifts the artwork by no more than 18px across the hero.
- Atmosphere moves at a slower rate than the artwork.
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
