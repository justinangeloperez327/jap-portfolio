import Link from "next/link";

import { PageHero } from "@/components/media";
import { HomeHeroMotion } from "@/components/motion";
import { artwork, brand } from "@/data";

export function HomeHero() {
  return (
    <HomeHeroMotion>
      <PageHero
        artwork={artwork.home}
        priority
        overlay="left"
        contentClassName="items-end pb-14 pt-28 sm:pb-18 sm:pt-32 lg:items-center lg:pb-24 lg:pt-28"
      >
        <div className="grid w-full gap-12 lg:grid-cols-[minmax(0,42rem)_1fr] lg:items-end lg:gap-14">
          <div className="max-w-2xl">
            <div
              data-home-eyebrow
              className="mb-7 flex items-center gap-3"
            >
              <span
                aria-hidden="true"
                className="h-px w-8 bg-primary"
              />
              <p className="text-label font-medium uppercase text-muted-foreground">
                Software Engineer · Framework Builder
              </p>
            </div>

            <h1
              data-home-title
              className="text-balance text-hero font-semibold"
            >
              {brand.title}
            </h1>

            <p
              data-home-copy
              className="mt-7 max-w-xl text-body-lg text-muted-foreground"
            >
              I build expressive frameworks, full-stack applications, and
              developer-focused systems with an emphasis on clean architecture,
              performance, and usable developer experience.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                data-home-action
                href="/projects"
                className="inline-flex min-h-11 items-center justify-center border border-primary bg-primary px-5 text-sm font-medium text-primary-foreground transition-[background-color,color,border-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Explore Projects
                <span aria-hidden="true" className="ml-2">
                  ↗
                </span>
              </Link>

              <Link
                data-home-action
                href="/about"
                className="inline-flex min-h-11 items-center justify-center border border-border bg-background/30 px-5 text-sm font-medium text-foreground backdrop-blur-md transition-[background-color,border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-foreground/30 hover:bg-surface-raised focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                About Me
              </Link>
            </div>
          </div>

          <div
            data-home-focus
            className="hidden justify-self-end lg:block"
          >
            <div className="border-l border-border pl-5">
              <p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-muted-foreground/60">
                Current focus
              </p>
              <p className="mt-2 max-w-56 text-sm leading-6 text-muted-foreground">
                Framework engineering, application architecture, and developer
                tooling.
              </p>
            </div>
          </div>
        </div>

        <div
          data-home-scroll
          aria-hidden="true"
          className="absolute bottom-5 left-[var(--page-gutter)] hidden items-center gap-3 text-muted-foreground/45 sm:flex lg:left-auto lg:right-[var(--page-gutter)]"
        >
          <span className="font-mono text-[0.625rem] uppercase tracking-[0.22em]">
            Scroll
          </span>
          <span className="h-8 w-px bg-border" />
        </div>
      </PageHero>
    </HomeHeroMotion>
  );
}
