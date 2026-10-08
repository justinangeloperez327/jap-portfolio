# Public Links

Public profile/contact links are centralized in `lib/public-links.ts`.

## GitHub

GitHub is wired directly to the repository-owner profile:

`https://github.com/justinangeloperez327`

## LinkedIn and Email

These values are intentionally environment-configured so the portfolio does not guess or publish unverified personal information.

Configure:

```env
PUBLIC_LINKEDIN_URL=
PUBLIC_CONTACT_EMAIL=
```

The Contact page and global footer both consume the same link source.

If either value is missing or invalid, its label remains visible but inactive rather than rendering a broken link.

LinkedIn must be an HTTP/HTTPS URL. The public email must pass a basic email-format check before a `mailto:` link is rendered.
