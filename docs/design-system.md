# JAP Portfolio Design System

## Direction

Tokyo after dark, expressed through quiet ink-blue surfaces, compact sign-like typography, and one signal-red accent. The portfolio introduces Justin, makes work easy to explore, and gives visitors a clear path to contact. Artwork remains a separate future pass; no placeholder frames, stock scenes, or decorative particles are shown.

## Tokens

| Role | Value |
| --- | --- |
| Background / ink | `#0B111C` |
| Card / night blue | `#131E2D` |
| Text / paper | `#F1F4F7` |
| Supporting text / steel | `#A6B5C8` |
| Borders / slate | `#2C3A4D` |
| Accent / signal red | `#FF3B5C` |

Red buttons use dark ink text for contrast. Focus indicators use signal red with an offset. Small supporting text uses the full supporting-text token rather than an extra opacity reduction.

## Typography and layout

Display: Bahnschrift, DIN Alternate, Arial Narrow, system fallback. Body: Segoe UI Variable and system sans. Utility: Cascadia Code and monospace fallbacks. All fonts resolve locally, with no font network requests.

Use a 4–96px spacing scale, 80rem content width, responsive gutters, and 12px base corners. Hero headings scale from 44px to 92px. Inner-page heroes fit their content rather than forcing every introduction to fill the viewport. Major headings wrap naturally; navigation anchors account for the fixed header.

## Page composition

- Home: identity, clear project/contact actions, and a Gungnir workbench feature.
- About: personal introduction and three working principles, followed by background and experience.
- Skills: concise introduction, six direct category links, then detailed context for each tool.
- Projects: compact introduction, category filters, featured work, and the wider catalog.
- Contact: direct invitation and labeled form with validation, pending, success, and error feedback.
- Case studies: readable project summary, real metadata cover, and structured engineering narrative.

`ProjectSignal` is a typographic cover derived from project metadata. It is not an application screenshot or a representation of a running product. Reuse it in project features and case studies.

## Interaction

Controls target at least 44px. Navigation exposes current-page state. Mobile navigation uses a portal, keyboard focus containment, Escape dismissal, and scroll locking. Keyboard focus remains visible. Reduced motion is respected. Prefer short transitions and no persistent decorative animation.
