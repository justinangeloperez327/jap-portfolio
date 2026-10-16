import Link from "next/link";

import { PageHero } from "@/components/media";
import { FeaturedSignal } from "@/components/media/project-signal";
import { projects } from "@/data/projects";
import { HomeHeroMotion } from "@/components/motion";

const focusAreas = [
  "Framework Engineering",
  "Full-Stack Systems",
  "Developer Tooling",
] as const;

export function HomeHero() {
  return (
    <HomeHeroMotion>
      <PageHero sceneLabel="Tokyo after dark / Home" companion={<FeaturedSignal project={projects.find(project => project.slug === "gungnir")!} />}>
        <div className="max-w-[48rem]">
          <div data-home-eyebrow className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-primary">
              Software Engineer
            </span>
            <span className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-muted-foreground">
              / Framework Builder
            </span>
          </div>

          <h1
            data-home-title
            className="hero-title mt-8"
          >
            Justin Angelo
            <span className="mt-1 block text-primary">Perez.</span>
          </h1>

          <p
            data-home-copy
            className="mt-7 max-w-[35rem] text-[clamp(1rem,1.45vw,1.125rem)] leading-8 text-muted-foreground"
          >
            I build web applications, frameworks, and tools that make complex
            systems easier to use—and easier to build on.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              data-home-action
              href="/projects"
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-primary bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:border-[#E62E50] hover:bg-[#E62E50] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring motion-reduce:transition-none"
            >
              View Projects <span aria-hidden="true" className="ml-3">→</span>
            </Link>
            <Link
              data-home-action
              href="/contact"
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-border bg-background/40 px-5 text-sm font-medium text-foreground transition-colors hover:border-foreground/30 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Contact Me <span aria-hidden="true" className="ml-3">↗</span>
            </Link>
          </div>

          <div
            data-home-focus
            className="mt-12 flex max-w-[37rem] flex-wrap gap-x-5 gap-y-2 border-t border-border/80 pt-5"
          >
            {focusAreas.map((area) => (
              <span
                key={area}
                className="font-mono text-[0.625rem] uppercase tracking-[0.08em] text-muted-foreground"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </PageHero>
    </HomeHeroMotion>
  );
}
