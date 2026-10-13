import Link from "next/link";

import { HomeProjectCard } from "@/components/projects";
import { featuredProjects, portfolioSections } from "@/data";

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
      className="relative border-t border-border/70 bg-background py-16 sm:py-20"
    >
      <div className="site-container">
        <div className="w-full">
          <div className="flex flex-col gap-5 border-b border-border/70 pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-primary">
                Featured Projects
              </p>
              <h2
                id="projects-preview-title"
                className="mt-2 text-2xl font-semibold tracking-[-0.035em] sm:text-3xl"
              >
                A few things I&apos;ve built.
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Frameworks, developer tools, and product systems.
              </p>
            </div>

            <Link
              href={projectsSection.href}
              className="group inline-flex min-h-11 shrink-0 items-center gap-3 rounded-xl border border-border/80 bg-background/30 px-4 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-surface-raised focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {featuredProjects.slice(0, 3).map((project, index) => (
              <HomeProjectCard
                key={project.slug}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
