const principles = [
  {
    title: "Choose for the problem",
    body: "I prefer tools that fit the product, team, runtime, and maintenance needs instead of forcing every problem into the same stack.",
  },
  {
    title: "Understand the layer beneath",
    body: "Frameworks become more useful when their runtime, data model, compiler, network, and deployment assumptions are understood rather than treated as magic.",
  },
  {
    title: "Connect the whole system",
    body: "Frontend, backend, data, architecture, and delivery decisions influence one another. I treat those boundaries as part of one engineering problem.",
  },
] as const;

export function SkillsIntroduction() {
  return (
    <section
      aria-labelledby="skills-introduction-title"
      className="site-container section-space"
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-20">
        <div className="max-w-xl">
          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-primary">
            How I Use Technology
          </p>

          <h2
            id="skills-introduction-title"
            className="mt-4 text-balance text-display font-semibold"
          >
            Skills are most useful when they work together.
          </h2>

          <p className="mt-6 text-body-lg text-muted-foreground">
            I work across languages, frameworks, databases, architecture, and
            deployment because real applications rarely stay inside one layer.
          </p>
        </div>

        <div className="border-t border-border">
          {principles.map((principle, index) => (
            <article
              key={principle.title}
              className="grid gap-4 border-b border-border py-7 sm:grid-cols-[2.5rem_minmax(0,1fr)] sm:gap-6"
            >
              <span className="font-mono text-[0.625rem] text-muted-foreground/45">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>
                <h3 className="text-base font-medium text-foreground">
                  {principle.title}
                </h3>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
                  {principle.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
