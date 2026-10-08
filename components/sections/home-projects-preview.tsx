import Link from "next/link";

import { FeaturedProject } from "@/components/projects";
import { featuredProjects, portfolioSections } from "@/data";

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
          {featuredProjects.map((project, index) => (
            <FeaturedProject
              key={project.slug}
              project={project}
              index={index}
              surface="subtle"
              showProjectLink
            />
          ))}
        </div>
      </div>
    </section>
  );
}
