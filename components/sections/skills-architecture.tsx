import { skillArchitecture } from "@/data";

export function SkillsArchitecture() {
  return (
    <section
      aria-labelledby="skills-architecture-title"
      className="border-y border-border bg-surface-subtle"
    >
      <div className="site-container section-space">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,1.38fr)] lg:gap-20">
          <div data-skills-architecture-copy className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-primary">
              Capability Map
            </p>

            <h2
              id="skills-architecture-title"
              className="mt-4 max-w-xl text-balance text-display font-semibold"
            >
              Six layers of the stack I work across.
            </h2>

            <p className="mt-6 max-w-md text-body text-muted-foreground">
              This is not a proficiency chart. It is a map of the languages,
              platforms, engineering disciplines, and delivery tools I use to
              build complete systems.
            </p>
          </div>

          <div className="border-t border-border">
            {skillArchitecture.map((category, categoryIndex) => (
              <article
                key={category.id}
                id={`skills-${category.id}`}
                data-skills-category
                className="border-b border-border py-9"
              >
                <div className="grid gap-5 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-7">
                  <span className="font-mono text-xs text-primary">
                    {String(categoryIndex + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <div className="grid gap-4 md:grid-cols-[minmax(0,0.55fr)_minmax(0,1.45fr)] md:gap-8">
                      <h3 className="text-heading font-medium text-foreground">
                        {category.label}
                      </h3>

                      <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
                        {category.description}
                      </p>
                    </div>

                    <ul className="mt-8 grid border-t border-border md:grid-cols-2">
                      {category.items.map((item) => (
                        <li
                          key={item.name}
                          data-skill-item
                          className="border-b border-border py-5 transition-[background-color,transform] duration-200 motion-safe:hover:-translate-y-0.5 hover:bg-background/30 md:min-h-36 md:px-6 md:odd:border-r md:odd:pl-0 md:even:pr-0"
                        >
                          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-foreground/80">
                            {item.name}
                          </p>

                          <p className="mt-3 max-w-lg text-sm leading-6 text-muted-foreground">
                            {item.context}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
