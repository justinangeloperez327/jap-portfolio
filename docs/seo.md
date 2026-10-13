# SEO Architecture

Canonical URL generation lives in `lib/site-url.ts`; configure `NEXT_PUBLIC_SITE_URL` on production. The sitemap and robots directives are provided by Next.js metadata routes.

Pages and project case studies expose titles, descriptions, canonical URLs and Open Graph text metadata. X uses a text-only `summary` card.

There are no generated social images, icon files, or Apple touch icons in this reset. `app/manifest.ts` only provides application metadata. Do not reference old preview routes or static icon paths.

The root emits `Person` and `WebSite` structured data. Project routes emit project-specific `CreativeWork` structured data derived from `data/projects.ts`.

## QA checklist

- Production domain configured correctly
- Correct canonical URL on every public page
- `/sitemap.xml` and `/robots.txt` accessible
- No stale social image links
- HTML titles, descriptions and structured data render correctly
- Unknown project slugs are not indexed
