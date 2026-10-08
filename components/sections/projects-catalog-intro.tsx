const projectCategories = [
  "All",
  "Frameworks",
  "Languages",
  "Web Apps",
  "Frontend",
  "Backend",
  "Experiments",
] as const;

export function ProjectsCatalogIntro() {
  return (
    <section
      aria-labelledby="projects-catalog-title"
      className="site-container section-space"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-20">
        <div className="max-w-xl">
          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-primary">
            Engineering Catalog
          </p>

          <h2
            id="projects-catalog-title"
            className="mt-4 text-balance text-display font-semibold"
          >
            Projects are easier to understand when the decisions are visible.
          </h2>
        </div>

        <div>
          <p className="max-w-2xl text-body-lg text-muted-foreground">
            Some projects explore framework design and language tooling. Others
            focus on business software, frontend systems, APIs, or deployment.
            The common thread is deliberate structure and practical developer
            experience.
          </p>

          <div
            aria-label="Project categories"
            className="mt-9 flex flex-wrap gap-x-5 gap-y-3 border-y border-border py-4"
          >
            {projectCategories.map((category, index) => (
              <span
                key={category}
                className={
                  index === 0
                    ? "font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-primary"
                    : "font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-muted-foreground/55"
                }
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
