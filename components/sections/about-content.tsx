import {
  aboutBuildAreas,
  aboutInterests,
  aboutPrinciples,
  developmentPhilosophy,
} from "@/data";

import { AboutExperience } from "./about-experience";

const sectionHeadingClass =
  "text-balance text-heading font-semibold text-foreground";

export function AboutContent() {
  return (
    <div className="bg-background">
      <section
        data-scroll-reveal
        aria-labelledby="about-introduction-title"
        className="site-container section-space"
      >
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-20">
          <div>
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-primary">
              Introduction
            </p>
            <h2
              id="about-introduction-title"
              className="mt-4 text-balance text-display font-semibold"
            >
              Software is where structure and experience meet.
            </h2>
          </div>

          <div className="max-w-2xl">
            <p className="text-body-lg text-foreground/90">
              I am most interested in the parts of software engineering that
              turn complexity into something understandable: frameworks,
              architecture, application boundaries, data access, and the
              developer experience around them.
            </p>

            <p className="mt-6 text-body text-muted-foreground">
              The goal is not simply to make a system work. It is to make its
              behavior, structure, and trade-offs clear enough that the work
              can keep evolving without becoming difficult to reason about.
            </p>
          </div>
        </div>
      </section>

      <section
        data-scroll-reveal
        aria-labelledby="about-background-title"
        className="border-y border-border bg-surface-subtle"
      >
        <div className="site-container section-space">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-20">
            <div>
              <p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-primary">
                Background
              </p>
              <h2
                id="about-background-title"
                className={`mt-4 ${sectionHeadingClass}`}
              >
                From applications to the frameworks underneath them.
              </h2>
            </div>

            <div className="max-w-2xl">
              <p className="text-body-lg text-muted-foreground">
                My background in computer science led naturally from building
                applications into asking deeper questions about how those
                applications should be structured in the first place.
              </p>

              <p className="mt-6 text-body text-muted-foreground">
                That curiosity expanded into framework engineering, compiler
                work, ORM design, backend systems, frontend architecture, and
                the infrastructure needed to move software from an idea into a
                maintainable product.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        data-scroll-reveal
        aria-labelledby="about-thinking-title"
        className="site-container section-space"
      >
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1.35fr)] lg:gap-20">
          <div>
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-primary">
              How I Think
            </p>
            <h2
              id="about-thinking-title"
              className={`mt-4 ${sectionHeadingClass}`}
            >
              Good engineering should reduce cognitive load.
            </h2>
          </div>

          <div className="border-t border-border">
            {aboutPrinciples.map((principle, index) => (
              <article
                key={principle.title}
                className="grid gap-4 border-b border-border py-7 sm:grid-cols-[2.5rem_minmax(0,1fr)] sm:gap-6"
              >
                <span aria-hidden="true" className="font-mono text-[0.625rem] text-muted-foreground/45">
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

      <section
        data-scroll-reveal
        aria-labelledby="about-build-title"
        className="border-y border-border bg-surface-subtle"
      >
        <div className="site-container section-space">
          <div className="max-w-3xl">
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-primary">
              What I Build
            </p>
            <h2
              id="about-build-title"
              className="mt-4 text-balance text-display font-semibold"
            >
              Systems with a clear reason to exist.
            </h2>
          </div>

          <div className="mt-12 grid border-t border-border md:grid-cols-2">
            {aboutBuildAreas.map((area, index) => (
              <article
                key={area.title}
                className="border-b border-border py-7 md:min-h-44 md:px-8 md:odd:border-r md:odd:pl-0 md:even:pr-0"
              >
                <span aria-hidden="true" className="font-mono text-[0.625rem] text-muted-foreground/45">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-heading font-medium">
                  {area.title}
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-6 text-muted-foreground">
                  {area.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <AboutExperience />

      <div className="border-y border-border bg-surface-subtle">
        <div className="site-container section-space grid gap-12 lg:grid-cols-2 lg:gap-20">
          <section aria-labelledby="about-education-title">
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-primary">
              Education
            </p>
            <h2
              id="about-education-title"
              className={`mt-4 ${sectionHeadingClass}`}
            >
              Computer Science
            </h2>
            <p className="mt-5 max-w-xl text-body text-muted-foreground">
              A formal foundation in software development, algorithms, data,
              and systems gave me the vocabulary to keep learning beyond any
              one language, framework, or platform.
            </p>
          </section>

          <section aria-labelledby="about-interests-title">
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-primary">
              Interests
            </p>
            <h2
              id="about-interests-title"
              className={`mt-4 ${sectionHeadingClass}`}
            >
              The engineering questions I keep coming back to.
            </h2>

            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
              {aboutInterests.map((interest) => (
                <li
                  key={interest}
                  className="font-mono text-[0.6875rem] text-foreground/60"
                >
                  {interest}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <section
        data-scroll-reveal
        aria-labelledby="about-philosophy-title"
        className="site-container section-space"
      >
        <div className="max-w-3xl">
          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-primary">
            Development Philosophy
          </p>
          <h2
            id="about-philosophy-title"
            className="mt-4 text-balance text-display font-semibold"
          >
            Build the complexity once. Expose the clarity everywhere else.
          </h2>
        </div>

        <ol className="mt-12 border-t border-border">
          {developmentPhilosophy.map((item, index) => (
            <li
              key={item}
              className="grid gap-4 border-b border-border py-6 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-8"
            >
              <span className="font-mono text-xs text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="max-w-3xl text-body-lg text-foreground/85">
                {item}
              </p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
