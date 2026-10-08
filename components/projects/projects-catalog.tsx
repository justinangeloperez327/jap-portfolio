"use client";

import Link from "next/link";
import { useState } from "react";

import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";
import type {
  Project,
  ProjectCategory,
} from "@/types";

import { FeaturedProject } from "./featured-project";

const projectFilters = [
  "All",
  "Frameworks",
  "Languages",
  "Web Apps",
  "Frontend",
  "Backend",
  "Experiments",
] as const;

type ProjectFilter = "All" | ProjectCategory;

function matchesFilter(
  project: Project,
  filter: ProjectFilter,
) {
  if (filter === "All") {
    return true;
  }

  if (filter === "Experiments") {
    return (
      project.category === "Experiments" ||
      project.status === "Experimental"
    );
  }

  return project.category === filter;
}

function ProjectCatalogRow({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article
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
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex min-h-11 touch-manipulation items-center transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {project.title}
              </Link>
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

        <Link
          href={`/projects/${project.slug}`}
          className="group mt-5 inline-flex min-h-11 touch-manipulation items-center gap-3 text-sm font-medium sm:mt-6 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          View case study
          <span
            aria-hidden="true"
            className="text-primary transition-transform duration-200 group-hover:translate-x-1"
          >
            →
          </span>
        </Link>
      </div>
    </article>
  );
}

export function ProjectsCatalog() {
  const [activeFilter, setActiveFilter] =
    useState<ProjectFilter>("All");

  const filteredProjects = projects.filter((project) =>
    matchesFilter(project, activeFilter),
  );

  const featuredProjects = projects.filter(
    (project) => project.featured,
  );
  const additionalProjects = projects.filter(
    (project) => !project.featured,
  );

  return (
    <>
      <section
        data-scroll-reveal
        aria-labelledby="projects-catalog-title"
        className="site-container section-space"
      >
        <div className="grid gap-10 xl:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] xl:gap-20">
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
              Some projects explore framework design and language tooling.
              Others focus on business software, frontend systems, APIs, or
              deployment. The common thread is deliberate structure and
              practical developer experience.
            </p>

            <div
              aria-label="Filter projects by category"
              className="mt-9 -mx-1 flex snap-x snap-mandatory flex-nowrap gap-2 overflow-x-auto border-y border-border px-1 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:flex-wrap sm:gap-x-5 sm:gap-y-2 sm:overflow-visible sm:px-0"
            >
              {projectFilters.map((filter) => {
                const active = activeFilter === filter;

                return (
                  <button
                    key={filter}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setActiveFilter(filter)}
                    className={cn(
                      "relative min-h-11 shrink-0 snap-start touch-manipulation whitespace-nowrap px-1 font-mono text-[0.6875rem] uppercase tracking-[0.12em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      active
                        ? "text-primary"
                        : "text-muted-foreground/55 hover:text-foreground",
                    )}
                  >
                    {filter}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute inset-x-0 -bottom-3 h-px origin-left bg-primary transition-transform duration-200",
                        active ? "scale-x-100" : "scale-x-0",
                      )}
                    />
                  </button>
                );
              })}
            </div>

            <p
              aria-live="polite"
              className="mt-4 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-muted-foreground/45"
            >
              {activeFilter === "All"
                ? `${projects.length} projects`
                : `${filteredProjects.length} ${activeFilter} ${filteredProjects.length === 1 ? "project" : "projects"}`}
            </p>
          </div>
        </div>
      </section>

      {activeFilter === "All" ? (
        <>
          <section
            data-scroll-reveal
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
                  Four projects that best represent my framework, language,
                  and developer-experience work.
                </p>
              </div>

              <div className="mt-14 border-t border-border">
                {featuredProjects.map((project, index) => (
                  <FeaturedProject
                    key={project.slug}
                    project={project}
                    index={index}
                    showCatalogMeta
                    showProjectLink
                  />
                ))}
              </div>
            </div>
          </section>

          <section
            data-scroll-reveal
            aria-labelledby="additional-projects-title"
            className="bg-background"
          >
            <div className="site-container section-space">
              <div className="grid gap-10 xl:grid-cols-[minmax(0,0.62fr)_minmax(0,1.38fr)] xl:gap-20">
                <div className="xl:sticky xl:top-28 xl:self-start">
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
                    <ProjectCatalogRow
                      key={project.slug}
                      project={project}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <section
          data-scroll-reveal
          aria-labelledby="filtered-projects-title"
          className="border-y border-border bg-surface-subtle"
        >
          <div className="site-container section-space">
            <div className="grid gap-10 xl:grid-cols-[minmax(0,0.62fr)_minmax(0,1.38fr)] xl:gap-20">
              <div className="xl:sticky xl:top-28 xl:self-start">
                <p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-primary">
                  Filtered Work
                </p>

                <h2
                  id="filtered-projects-title"
                  className="mt-4 max-w-xl text-balance text-display font-semibold"
                >
                  {activeFilter}
                </h2>

                <p className="mt-6 max-w-md text-body text-muted-foreground">
                  Showing projects whose primary category matches this filter.
                  Experiments also includes projects currently marked as
                  experimental.
                </p>
              </div>

              <div className="border-t border-border">
                {filteredProjects.length > 0 ? (
                  filteredProjects.map((project, index) => (
                    <ProjectCatalogRow
                      key={project.slug}
                      project={project}
                      index={index}
                    />
                  ))
                ) : (
                  <div className="border-b border-border py-10">
                    <p className="text-body text-muted-foreground">
                      No projects are currently assigned to this category.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
