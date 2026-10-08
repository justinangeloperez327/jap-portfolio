# Accessibility

The portfolio accessibility baseline targets WCAG 2.2 AA patterns. Final conformance still requires browser, keyboard, screen-reader, contrast, and automated testing during final QA.

## Landmarks and headings

Each route owns one `<main id="main-content">` landmark.

The global skip link targets that landmark, and client-side route changes move focus to the new route's main content without forcing the viewport back to the top.

Each primary route presents one page-level `h1`; editorial sections use descending section headings.

## Keyboard navigation

Interactive elements use visible focus styles.

The mobile navigation behaves as a modal interaction:

- focus enters the dialog when it opens,
- Tab and Shift+Tab remain contained,
- Escape closes the dialog,
- the dedicated Close control returns focus to the trigger,
- selecting the active route also returns focus to the trigger,
- selecting a new route allows route-change focus management to move focus into the new page.

The global skip link is visually hidden until focused.

## Forms

The Contact form uses associated labels, native input types, `required`, autocomplete where appropriate, and shared client/server validation.

Validation behavior includes:

- `aria-invalid` on invalid fields,
- field errors connected through `aria-describedby`,
- focus moved to the first invalid field,
- assertive announcement for submission errors,
- polite announcement for loading and success states,
- `aria-busy` while submitting.

## Motion

All custom Anime.js systems check `prefers-reduced-motion`.

The global reduced-motion CSS also collapses CSS animation and transition durations and disables smooth scrolling.

Continuous parallax and scroll zoom are disabled on compact viewports in addition to being disabled for reduced-motion users.

## Visual accessibility

Functional secondary text and form placeholders use stronger contrast than decorative metadata.

Decorative counters are marked `aria-hidden` where list semantics or surrounding headings already convey the information.

Forced-colors mode receives an explicit focus outline so keyboard location remains visible when authored colors are overridden.

## Images and branding

Cinematic images receive descriptive alt text through shared artwork metadata.

The brand mark is decorative by default and becomes an accessible image only when an explicit title is supplied. Logo links themselves carry accessible link labels.

## Final QA

Group 33 should validate at minimum:

- keyboard-only traversal,
- skip link,
- mobile-menu focus trap and focus return,
- form validation and announcements,
- reduced-motion mode,
- forced-colors/high-contrast behavior where available,
- 200% zoom and text reflow,
- automated accessibility checks,
- color contrast against final uploaded artwork.
