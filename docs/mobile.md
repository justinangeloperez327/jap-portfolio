# Mobile Experience

The mobile portfolio is treated as its own composition rather than a scaled-down desktop layout.

## Navigation

The compact navigation remains active below `lg`.

On phones:

- The menu button is a 48px touch target.
- The full-screen menu respects top and bottom safe-area insets.
- Navigation content starts near the top instead of relying on vertical centering.
- The menu can scroll on short displays and landscape orientations.
- Selecting a route closes the menu immediately.
- Escape closes the menu for keyboard users.
- Body scroll is restored to its previous value when the menu closes.

## Hero actions

The Home hero actions are full-width on the narrowest screens and become inline controls as width becomes available.

The Scroll indicator remains hidden on the smallest screens so it does not compete with primary actions.

## Forms

Contact inputs use a 16px base font size on phones to avoid browser auto-zoom behavior.

Fields have at least a 48px control height. Email and Subject remain stacked until `md`, giving each field enough horizontal space for comfortable text entry.

## Project browsing

Project category filters are a horizontal swipe strip on phones instead of wrapping into several rows.

Filter buttons:

- are at least 44px high,
- do not shrink,
- use scroll snapping,
- become a normal wrapping row on wider screens.

Project artwork uses a 4:3 frame on phones and returns to 16:10 on wider screens. This gives artwork and placeholders enough vertical presence without creating an overly wide, shallow card.

Project and case-study links use larger mobile touch targets.

## Motion

Continuous scroll-depth and media-zoom effects are disabled below 48rem.

One-shot section reveals remain, but their entrance distance is reduced from 18px to 10px on compact viewports.

This lowers visual noise and per-frame work on phones while keeping the portfolio's motion language intact.

## Safe areas

The fixed header and mobile navigation account for `env(safe-area-inset-top)` and `env(safe-area-inset-bottom)`.

The page still keeps the same content hierarchy when those insets resolve to zero on devices without display cutouts.
