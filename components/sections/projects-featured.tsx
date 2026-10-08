import { CinematicMedia } from "@/components/media";
import { featuredProjects } from "@/data";
import { cn } from "@/lib/utils";

export function ProjectsFeatured() {
  return (
    <section
      aria-labelledby="featured-projects-title"
      className="border-y border-border bg-surface-subtle"
    >
      <div className="site-container section-space">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-primary">
              Selected Work
            </p>
            <h2
              id="featured-projects-title"
              className="mt-4 text-balance text-display font-semibold"
            >
              Featured engineering projects.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-muted-foreground">
            These four projects represent the framework, language, and
            developer-experience side of the portfolio.
          </p>
        </div>

        <div className="mt-14 border-t border-border">
          {featuredProjects.map((project, index) => {
            const contentOnRight = project.contentSide === "right";

            return (
              <article
                key={project.slug}
                className="grid gap-8 border-b border-border py-10 lg:grid-cols-2 lg:items-center lg:gap-14 lg:py-16"
              >
                <div
                  className={cn(
                    "relative aspect-[16/10] overflow-hidden border border-border bg-background",
                    contentOnRight ? "lg:order-1" : "lg:order-2",
                  )}
                >
                  <CinematicMedia
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    label={`${project.title} artwork coming later`}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="absolute inset-0"
                    imageClassName={cn(
                      project.imageMirror && "-scale-x-100",
                    )}
                  />

                  <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between p-4">
                    <span className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-muted-foreground/55">
                      Project {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-muted-foreground/45">
                      Featured
                    </span>
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
                    {project.eyebrow}
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

                  <p className="mt-8 text-sm leading-6 text-muted-foreground/70">
                    Detailed case study coming with the project-detail
                    architecture.
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
