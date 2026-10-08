import Link from "next/link";

import { portfolioSections, skillCategories } from "@/data";

import { SectionLabel } from "./section-label";

const skillsSection = portfolioSections.find(
  (section) => section.id === "skills",
);

export function HomeSkillsPreview() {
  if (!skillsSection) {
    return null;
  }

  return (
    <section
      id="skills-preview"
      aria-labelledby="skills-preview-title"
      className="relative isolate overflow-hidden border-t border-border/70 bg-surface-subtle"
    >
      <div
        aria-hidden="true"
        data-scroll-depth="0.65"
        className="pointer-events-none absolute -left-8 top-4 select-none font-mono text-[clamp(9rem,22vw,22rem)] font-semibold leading-none tracking-[-0.08em] text-foreground/[0.015]"
      >
        02
      </div>

      <div data-scroll-reveal className="site-container section-space relative">
        <SectionLabel
          number={skillsSection.number}
          label={skillsSection.label}
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-20">
          <div className="max-w-xl">
            <h2
              id="skills-preview-title"
              className="text-balance text-display font-semibold"
            >
              Tools matter. How they fit together matters more.
            </h2>

            <p className="mt-6 text-body-lg text-muted-foreground">
              I work across the stack, from interface composition to backend
              architecture, data access, deployment, and framework internals.
            </p>

            <Link
              href={skillsSection.href}
              className="group mt-9 inline-flex items-center gap-3 text-sm font-medium text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Explore My Skills
              <span
                aria-hidden="true"
                className="text-primary transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>

          <div className="border-t border-border">
            {skillCategories.map((category, index) => (
              <article
                key={category.label}
                className="grid gap-4 border-b border-border py-6 sm:grid-cols-[2.25rem_minmax(0,0.75fr)_minmax(0,1.25fr)] sm:items-start sm:gap-6"
              >
                <span className="font-mono text-[0.625rem] text-muted-foreground/45">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3 className="text-base font-medium text-foreground">
                    {category.label}
                  </h3>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
                    {category.summary}
                  </p>
                </div>

                <ul
                  aria-label={`${category.label} technologies`}
                  className="flex flex-wrap gap-x-4 gap-y-2 sm:justify-end"
                >
                  {category.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="font-mono text-[0.6875rem] text-foreground/55"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
