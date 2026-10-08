import Link from "next/link";

import { CinematicMedia } from "@/components/media";
import { featuredProjects, portfolioSections } from "@/data";
import { cn } from "@/lib/utils";

import { SectionLabel } from "./section-label";

const projectsSection = portfolioSections.find(
  (section) => section.id === "projects",
);

export function HomeProjectsPreview() {
  if (!projectsSection) {
    return null;
  }

  return (
    <section
      id="projects-preview"
      aria-labelledby="projects-preview-title"
      className="relative isolate overflow-hidden border-t border-border/70 bg-background"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-4 select-none font-mono text-[clamp(9rem,22vw,22rem)] font-semibold leading-none tracking-[-0.08em] text-foreground/[0.018]"
      >
        03
      </div>

      <div className="site-container section-space relative">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionLabel
              number={projectsSection.number}
              label={projectsSection.label}
            />

            <h2
              id="projects-preview-title"
              className="mt-10 max-w-3xl text-balance text-display font-semibold"
            >
              Frameworks and systems built from first principles.
            </h2>
          </div>

          <Link
            href={projectsSection.href}
            className="group inline-flex shrink-0 items-center gap-3 text-sm font-medium text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            View All Projects
            <span
              aria-hidden="true"
              className="text-primary transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>

        <div className="mt-16 border-t border-border">
          {featuredProjects.map((project, index) => {
            const contentOnRight = project.contentSide === "right";

            return (
              <article
                key={project.slug}
                className="grid gap-8 border-b border-border py-10 lg:grid-cols-2 lg:items-center lg:gap-14 lg:py-16"
              >
                <div
                  className={cn(
                    "relative aspect-[16/10] overflow-hidden border border-border bg-surface-subtle",
                    contentOnRight ? "lg:order-1" : "lg:order-2",
                  )}
                >
                  <CinematicMedia
                    src={project.image ?? undefined}
                    alt={`${project.title} project artwork`}
                    label={`${project.title} artwork coming later`}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    position={project.imagePosition}
                    className="absolute inset-0"
                    imageClassName={cn(
                      "transition-transform duration-700",
                      project.imageMirror && "-scale-x-100",
                    )}
                  />

                  <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between p-4">
                    <span className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-muted-foreground/55">
                      Featured {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="size-1.5 bg-primary/70" />
                  </div>
                </div>

                <div
                  className={cn(
                    "max-w-xl",
                    contentOnRight
                      ? "lg:order-2 lg:justify-self-end"
                      : "lg:order-1",
                  )}
                >
                  <p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-primary">
                    {project.subtitle}
                  </p>

                  <h3 className="mt-4 text-display font-semibold">
                    {project.title}
                  </h3>

                  <p className="mt-5 text-body-lg text-muted-foreground">
                    {project.description}
                  </p>

                  <ul
                    aria-label={`${project.title} technologies`}
                    className="mt-7 flex flex-wrap gap-x-4 gap-y-2"
                  >
                    {project.technologies.map((technology) => (
                      <li
                        key={technology}
                        className="font-mono text-[0.6875rem] text-foreground/55"
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={projectsSection.href}
                    className="group mt-8 inline-flex items-center gap-3 text-sm font-medium text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    Explore {project.title}
                    <span
                      aria-hidden="true"
                      className="text-primary transition-transform duration-200 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
