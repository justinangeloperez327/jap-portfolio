import Link from "next/link";

import {
  engineeringJourney,
  professionalExperienceThemes,
} from "@/data";

export function AboutExperience() {
  return (
    <>
      <section
        data-scroll-reveal
        aria-labelledby="about-journey-title"
        className="site-container section-space"
      >
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,1.38fr)] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-primary">
              Engineering Journey
            </p>
            <h2
              id="about-journey-title"
              className="mt-4 text-balance text-display font-semibold"
            >
              The scope kept getting wider.
            </h2>
            <p className="mt-6 max-w-md text-body text-muted-foreground">
              Each phase added another layer to the same question: how do you
              make complex software easier to build, understand, and evolve?
            </p>
          </div>

          <ol className="border-t border-border">
            {engineeringJourney.map((stage, index) => (
              <li
                key={stage.phase}
                className="grid gap-5 border-b border-border py-8 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-7"
              >
                <span className="font-mono text-xs text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <article>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                    <h3 className="text-heading font-medium text-foreground">
                      {stage.phase}
                    </h3>
                    <p className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-muted-foreground/55">
                      {stage.focus}
                    </p>
                  </div>

                  <p className="mt-4 max-w-2xl text-body text-muted-foreground">
                    {stage.description}
                  </p>

                  <p className="mt-4 max-w-2xl border-l border-primary/40 pl-4 text-sm leading-6 text-foreground/70">
                    {stage.outcome}
                  </p>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        data-scroll-reveal
        aria-labelledby="about-experience-title"
        className="border-y border-border bg-surface-subtle"
      >
        <div className="site-container section-space">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.68fr)_minmax(0,1.32fr)] lg:gap-20">
            <div>
              <p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-primary">
                Professional Experience
              </p>
              <h2
                id="about-experience-title"
                className="mt-4 text-balance text-heading font-semibold"
              >
                Experience is useful when it changes how you make decisions.
              </h2>
            </div>

            <div>
              <p className="max-w-2xl text-body-lg text-muted-foreground">
                My work has moved across application delivery, architecture,
                framework engineering, and operational systems. Rather than
                listing every responsibility, these are the recurring themes
                that shaped how I work.
              </p>

              <div className="mt-10 border-t border-border">
                {professionalExperienceThemes.map((theme, index) => (
                  <article
                    key={theme.title}
                    className="grid gap-4 border-b border-border py-6 sm:grid-cols-[2.5rem_minmax(0,1fr)] sm:gap-6"
                  >
                    <span className="font-mono text-[0.625rem] text-muted-foreground/45">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-base font-medium text-foreground">
                        {theme.title}
                      </h3>
                      <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
                        {theme.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>

              <Link
                href="/projects"
                className="group mt-9 inline-flex items-center gap-3 text-sm font-medium text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                See the work behind the progression
                <span
                  aria-hidden="true"
                  className="text-primary transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
