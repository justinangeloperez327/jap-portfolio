import { FeaturedProject } from "@/components/projects";
import { featuredProjects } from "@/data";

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
            Four projects that best represent my framework, language, and
            developer-experience work.
          </p>
        </div>

        <div className="mt-14 border-t border-border">
          {featuredProjects.map((project, index) => (
            <FeaturedProject
              key={project.slug}
              project={project}
              index={index}
              showCatalogMeta
            />
          ))}
        </div>
      </div>
    </section>
  );
}
