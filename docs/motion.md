# Portfolio Motion

Animation supports hierarchy, not decoration.

## Home

`components/motion/home-hero-motion.tsx` scopes an Anime.js entrance to role text, name, introduction, CTAs, focus labels. No image layers move or load. No perpetual animations.

## Other pages

`PageTransition` handles route changes. Shared scroll reveals and `SkillsMotion` remain available for one-shot entrances without counters or particles.

## Accessibility

`prefers-reduced-motion` disables moving entrances. Content remains visible without motion. Forms, navigation, and main content should not have persistent parallax or distracting transitions. A future moving train must have a reduced-motion alternative.
