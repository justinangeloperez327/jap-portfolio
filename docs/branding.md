# JAP Portfolio Branding

The current branding is intentionally lightweight and replaceable.

## Brand source

Shared identity values live in:

- `data/brand.ts`

This supplies the application name, author, title, description, and theme color.

## Logo component

The site shell uses:

- `components/brand/brand-mark.tsx`
- `components/brand/brand-lockup.tsx`

The mark is an inline SVG using `currentColor`, so it adapts to the design system without duplicated color logic.

## Exported logo assets

Temporary static variants are available at:

- `public/images/brand/jap-mark-light.svg`
- `public/images/brand/jap-mark-dark.svg`

These can be replaced with final supplied JAP artwork later.

## Browser and app identity

- `app/icon.svg` — favicon and manifest icon
- `app/apple-icon.tsx` — generated Apple touch icon
- `app/manifest.ts` — application manifest

## Social preview identity

- `app/opengraph-image.tsx`
- `app/twitter-image.tsx`
- `lib/social-image.tsx`

The social preview is generated in code for now, avoiding a temporary raster asset.

## Replacement rule

When final branding is supplied:

1. Replace the SVG geometry in `BrandMark` or point the component to the final asset.
2. Replace the static light/dark exported marks if needed.
3. Replace `app/icon.svg` and the generated Apple icon.
4. Replace or redesign `lib/social-image.tsx`.

Header/footer/navigation contracts should not need to change.
