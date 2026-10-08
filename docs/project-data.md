# Project Data Architecture

Project metadata is centralized in `data/projects.ts` and typed by `types/project.ts`.

The shared `Project` model is the source of truth for:

- Home featured-project previews
- The Projects catalog
- Future category filtering
- Future `/projects/[slug]` case studies
- Project-specific metadata and external links

## Project schema

Each project provides:

- `slug`
- `title`
- `subtitle`
- `description`
- `category`
- `technologies`
- `image`
- `imagePosition`
- `imageMirror`
- `contentSide`
- `status`
- `github`
- `website`
- `featured`

Image, GitHub, and website values are nullable so incomplete project records still have a predictable shape.

## Images

`imagePosition` uses the shared responsive focal-position type. This allows artwork framing to be tuned independently for mobile, tablet, and desktop.

`imageMirror` applies only to the artwork layer. Layout, text, labels, and interface elements are never mirrored.

## Derived data

`featuredProjects` is derived from `projects` using the `featured` field.

`getProjectBySlug()` provides the lookup boundary that the dynamic project-detail route can use later.

Do not create separate project metadata objects for Home or individual pages. Extend the central `Project` model when a field is genuinely shared across the portfolio.


## Case studies

Long-form project content is stored separately in `data/project-case-studies.ts`.

This keeps the core `Project` record compact for catalog rendering while allowing the dynamic `/projects/[slug]` route to render:

- Overview
- Context
- Problem
- Design Principles
- Architecture
- Implementation
- Developer Experience
- Engineering Decisions
- Technology
- Challenges
- Result
- Repository / external links

Flagship projects can provide curated case-study content. Other catalog projects use a structured fallback derived from the central project metadata until a bespoke narrative is added.

The dynamic route pre-generates every known project slug and still validates the requested slug at render time before displaying a case study.
