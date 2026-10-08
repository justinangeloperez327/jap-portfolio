import { additionalProjects } from "@/data";

export function ProjectsAdditional() {
  return (
    <section
      aria-labelledby="additional-projects-title"
      className="bg-background"
    >
      <div className="site-container section-space">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,1.38fr)] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-primary">
              More Work
            </p>

            <h2
              id="additional-projects-title"
              className="mt-4 max-w-xl text-balance text-display font-semibold"
            >
              Applications, systems, and product experiments.
            </h2>

            <p className="mt-6 max-w-md text-body text-muted-foreground">
              The featured work goes deeper into framework and language
              engineering. These projects show the broader application,
              frontend, backend, and product systems around that work.
            </p>
          </div>

          <div className="border-t border-border">
            {additionalProjects.map((project, index) => (
              <article
                key={project.slug}
                className="grid gap-5 border-b border-border py-7 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-7"
              >
                <span className="font-mono text-xs text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between md:gap-8">
                    <div>
                      <p className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-muted-foreground/50">
                        {project.category} · {project.status}
                      </p>
                      <h3 className="mt-2 text-heading font-medium text-foreground">
                        {project.title}
                      </h3>
                    </div>

                    <p className="max-w-md font-mono text-[0.625rem] uppercase tracking-[0.14em] text-primary/80 md:text-right">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="mt-4 max-w-3xl text-sm leading-6 text-muted-foreground">
                    {project.description}
                  </p>

                  <ul
                    aria-label={`${project.title} technologies`}
                    className="mt-5 flex flex-wrap gap-x-4 gap-y-2"
                  >
                    {project.technologies.map((technology) => (
                      <li
                        key={technology}
                        className="font-mono text-[0.6875rem] text-foreground/50"
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
