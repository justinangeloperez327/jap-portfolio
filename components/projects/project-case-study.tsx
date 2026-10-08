import type { ReactNode } from "react";
import Link from "next/link";

import { CinematicMedia } from "@/components/media";
import { cn } from "@/lib/utils";
import type {
  Project,
  ProjectCaseStudy,
  ProjectCaseStudyPoint,
} from "@/types";

type ProjectCaseStudyProps = {
  project: Project;
  caseStudy: ProjectCaseStudy;
};

function EditorialSection({
  id,
  label,
  title,
  children,
  surface = "default",
}: {
  id: string;
  label: string;
  title: string;
  children: ReactNode;
  surface?: "default" | "subtle";
}) {
  return (
    <section
      aria-labelledby={`${id}-title`}
      className={cn(
        surface === "subtle" && "border-y border-border bg-surface-subtle",
      )}
    >
      <div className="site-container section-space">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,1.38fr)] lg:gap-20">
          <div>
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-primary">
              {label}
            </p>
            <h2
              id={`${id}-title`}
              className="mt-4 max-w-xl text-balance text-heading font-semibold"
            >
              {title}
            </h2>
          </div>

          <div className="max-w-3xl">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

function PointList({
  points,
}: {
  points: readonly ProjectCaseStudyPoint[];
}) {
  return (
    <div className="border-t border-border">
      {points.map((point, index) => (
        <article
          key={point.title}
          className="grid gap-4 border-b border-border py-6 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-7"
        >
          <span className="font-mono text-xs text-primary">
            {String(index + 1).padStart(2, "0")}
          </span>

          <div>
            <h3 className="text-base font-medium text-foreground">
              {point.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {point.body}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}

function TextList({
  items,
}: {
  items: readonly string[];
}) {
  return (
    <ol className="border-t border-border">
      {items.map((item, index) => (
        <li
          key={item}
          className="grid gap-4 border-b border-border py-5 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-7"
        >
          <span className="font-mono text-xs text-primary">
            {String(index + 1).padStart(2, "0")}
          </span>
          <p className="text-sm leading-6 text-muted-foreground">
            {item}
          </p>
        </li>
      ))}
    </ol>
  );
}

export function ProjectCaseStudyView({
  project,
  caseStudy,
}: ProjectCaseStudyProps) {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-border bg-background pt-[var(--header-height)]">
        <div className="site-container py-10 sm:py-14 lg:py-20">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <span
              aria-hidden="true"
              className="text-primary transition-transform duration-200 group-hover:-translate-x-1"
            >
              ←
            </span>
            All Projects
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end lg:gap-16">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-primary">
                  Case Study
                </p>
                <span
                  aria-hidden="true"
                  className="size-1 bg-muted-foreground/35"
                />
                <p className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-muted-foreground/55">
                  {project.category} · {project.status}
                </p>
              </div>

              <h1 className="mt-6 text-balance text-hero font-semibold">
                {project.title}
              </h1>

              <p className="mt-5 font-mono text-[0.75rem] uppercase tracking-[0.16em] text-muted-foreground/70">
                {project.subtitle}
              </p>

              <p className="mt-7 max-w-2xl text-body-lg text-muted-foreground">
                {project.description}
              </p>

              <ul
                aria-label={`${project.title} technologies`}
                className="mt-8 flex flex-wrap gap-x-4 gap-y-2"
              >
                {project.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="font-mono text-[0.6875rem] text-foreground/55"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative aspect-[16/10] overflow-hidden border border-border bg-surface-subtle">
              <CinematicMedia
                src={project.image ?? undefined}
                alt={`${project.title} project artwork`}
                label={`${project.title} case-study artwork coming later`}
                sizes="(min-width: 1024px) 55vw, 100vw"
                position={project.imagePosition}
                className="absolute inset-0"
                imageClassName={cn(
                  project.imageMirror && "-scale-x-100",
                )}
              />

              <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between p-4">
                <span className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-muted-foreground/50">
                  {project.slug}
                </span>
                <span className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-muted-foreground/45">
                  {project.status}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EditorialSection
        id="project-overview"
        label="Overview"
        title="What this project is trying to prove."
      >
        <p className="text-body-lg text-foreground/90">
          {caseStudy.overview}
        </p>
      </EditorialSection>

      <EditorialSection
        id="project-context"
        label="Context"
        title="Why this project exists."
        surface="subtle"
      >
        <p className="text-body-lg text-muted-foreground">
          {caseStudy.context}
        </p>
      </EditorialSection>

      <EditorialSection
        id="project-problem"
        label="Problem"
        title="The engineering problem behind the interface."
      >
        <p className="text-body-lg text-muted-foreground">
          {caseStudy.problem}
        </p>
      </EditorialSection>

      <EditorialSection
        id="project-design-principles"
        label="Design Principles"
        title="The rules that keep the project coherent."
        surface="subtle"
      >
        <PointList points={caseStudy.designPrinciples} />
      </EditorialSection>

      <EditorialSection
        id="project-architecture"
        label="Architecture"
        title="How the system is divided."
      >
        <PointList points={caseStudy.architecture} />
      </EditorialSection>

      <EditorialSection
        id="project-implementation"
        label="Implementation"
        title="How the architecture becomes working software."
        surface="subtle"
      >
        <TextList items={caseStudy.implementation} />
      </EditorialSection>

      <EditorialSection
        id="project-developer-experience"
        label="Developer Experience"
        title="What the system should feel like to build with."
      >
        <TextList items={caseStudy.developerExperience} />
      </EditorialSection>

      <EditorialSection
        id="project-engineering-decisions"
        label="Engineering Decisions"
        title="Trade-offs made deliberately."
        surface="subtle"
      >
        <PointList points={caseStudy.engineeringDecisions} />
      </EditorialSection>

      <EditorialSection
        id="project-technology"
        label="Technology"
        title="The tools supporting the design."
      >
        <div className="grid border-t border-border sm:grid-cols-2">
          {project.technologies.map((technology, index) => (
            <div
              key={technology}
              className="border-b border-border py-5 sm:min-h-28 sm:px-6 sm:odd:border-r sm:odd:pl-0 sm:even:pr-0"
            >
              <span className="font-mono text-[0.625rem] text-muted-foreground/45">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 font-mono text-sm text-foreground/80">
                {technology}
              </p>
            </div>
          ))}
        </div>
      </EditorialSection>

      <EditorialSection
        id="project-challenges"
        label="Challenges"
        title="Where the difficult engineering lives."
        surface="subtle"
      >
        <TextList items={caseStudy.challenges} />
      </EditorialSection>

      <EditorialSection
        id="project-result"
        label="Result"
        title="What the work leaves behind."
      >
        <TextList items={caseStudy.result} />
      </EditorialSection>

      <EditorialSection
        id="project-repository"
        label="Repository"
        title="Code, project status, and external references."
        surface="subtle"
      >
        <div className="border-t border-border">
          <div className="grid gap-3 border-b border-border py-5 sm:grid-cols-[10rem_minmax(0,1fr)]">
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-muted-foreground/55">
              Status
            </p>
            <p className="text-sm text-foreground/80">
              {project.status}
            </p>
          </div>

          <div className="grid gap-3 border-b border-border py-5 sm:grid-cols-[10rem_minmax(0,1fr)]">
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-muted-foreground/55">
              GitHub
            </p>
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="w-fit text-sm text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                View repository ↗
              </a>
            ) : (
              <p className="text-sm text-muted-foreground">
                Public repository link has not been attached to the portfolio metadata yet.
              </p>
            )}
          </div>

          <div className="grid gap-3 border-b border-border py-5 sm:grid-cols-[10rem_minmax(0,1fr)]">
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-muted-foreground/55">
              Website
            </p>
            {project.website ? (
              <a
                href={project.website}
                target="_blank"
                rel="noreferrer"
                className="w-fit text-sm text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Visit project ↗
              </a>
            ) : (
              <p className="text-sm text-muted-foreground">
                No external project URL is attached yet.
              </p>
            )}
          </div>
        </div>

        <Link
          href="/projects"
          className="group mt-9 inline-flex items-center gap-3 text-sm font-medium text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Back to all projects
          <span
            aria-hidden="true"
            className="text-primary transition-transform duration-200 group-hover:translate-x-1"
          >
            →
          </span>
        </Link>
      </EditorialSection>
    </>
  );
}
