import Link from "next/link";

import { PageHero } from "@/components/media";
import { HomeHeroMotion } from "@/components/motion";
import { artwork } from "@/data";

const focusAreas = [
  "Framework Engineering",
  "Full-Stack Systems",
  "Developer Tooling",
] as const;

export function HomeHero() {
  return (
    <HomeHeroMotion>
      <PageHero
        artwork={artwork.home}
        priority
        overlay="left"
        contentClassName="items-end pb-28 pt-32 sm:pb-32 sm:pt-36 lg:items-center lg:pb-36 lg:pt-32"
      >
        <div className="w-full">
          <div className="max-w-[46rem]">
            <div
              data-home-eyebrow
              className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-2"
            >
              <span className="font-mono text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-primary">
                Software Engineer
              </span>
              <span aria-hidden="true" className="size-1 rounded-full bg-neon-cyan" />
              <span className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-muted-foreground">
                Framework Builder
              </span>
            </div>

            <h1
              data-home-title
              className="text-balance text-[clamp(3.6rem,8.2vw,7.25rem)] font-semibold leading-[0.86] tracking-[-0.065em]"
            >
              <span className="block text-foreground">
                Justin Angelo
              </span>
              <span className="neon-text mt-1 block">
                Perez
              </span>
            </h1>

            <p
              data-home-copy
              className="mt-7 max-w-2xl text-[clamp(1rem,1.5vw,1.2rem)] leading-7 text-foreground/72 sm:leading-8"
            >
              I build modern web applications, developer tools, and expressive
              frameworks with a focus on clean architecture, performance, and
              developer experience.
            </p>

            <div className="mt-8 grid gap-3 xs:grid-cols-2 sm:flex sm:flex-wrap">
              <Link
                data-home-action
                href="/projects"
                className="neon-action inline-flex min-h-12 w-full touch-manipulation items-center justify-center rounded-xl border border-primary/65 bg-primary/85 px-5 text-sm font-medium text-primary-foreground transition-[background-color,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:w-auto"
              >
                View Projects
                <span aria-hidden="true" className="ml-3">
                  →
                </span>
              </Link>

              <Link
                data-home-action
                href="/contact"
                className="glass-surface inline-flex min-h-12 w-full touch-manipulation items-center justify-center rounded-xl px-5 text-sm font-medium text-foreground transition-[background-color,border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-foreground/25 hover:bg-surface-raised focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:w-auto"
              >
                Contact Me
                <span aria-hidden="true" className="ml-3 text-muted-foreground">
                  ↗
                </span>
              </Link>
            </div>

            <div
              data-home-focus
              className="mt-10 grid max-w-2xl gap-px overflow-hidden rounded-xl border border-border/80 bg-border/80 sm:grid-cols-3"
            >
              {focusAreas.map((area) => (
                <div
                  key={area}
                  className="bg-background/58 px-4 py-4 backdrop-blur-md"
                >
                  <p className="font-mono text-[0.625rem] uppercase tracking-[0.14em] text-foreground/64">
                    {area}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          data-home-scroll
          aria-hidden="true"
          className="absolute bottom-5 right-[var(--page-gutter)] hidden items-center gap-3 text-muted-foreground/45 sm:flex"
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
