# Project Data

The canonical project catalog is `data/projects.ts`, typed by `types/project.ts`. Home previews, Projects filtering, case-study pages, route metadata and sitemap use the same data model.

## Project shape

- `slug`, `title`, `subtitle`, `description`, `category`
- `technologies`, `contentSide`, `status`
- `github`, `website`, `featured`

GitHub and website values may be null. **Image paths, responsive focal positions and image-mirroring fields were removed.**

The Home cards are text-first. Featured project and case-study sections use empty labelled scene slots, not image dependencies.

`featuredProjects`, `additionalProjects`, and `getProjectBySlug()` are derived from the catalog. Long-form case studies are separate in `data/project-case-studies.ts`; unknown projects use the existing structured fallback.

Any future media model should only be introduced when actual approved artwork exists.
