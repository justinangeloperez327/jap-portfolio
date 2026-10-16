import Link from "next/link";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

/** A typographic project cover using real metadata, with no artwork dependency. */
export function ProjectSignal({ project, className }: { project: Project; className?: string }) {
  return (
    <div className={cn("project-signal flex h-full min-h-64 flex-col rounded-xl border border-border p-6 sm:p-8", className)}>
      <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
        <span className="text-muted-foreground">{project.category}</span>
        <span className="rounded-full border border-border px-3 py-1 text-foreground">{project.status}</span>
      </div>
      <div className="my-auto py-10">
        <p aria-hidden="true" className="signal-glyph text-primary">{project.category === "Languages" ? "{ }" : "</>"}</p>
        <p className="mt-4 break-words font-display text-[clamp(2rem,4vw,3.5rem)] font-bold leading-none tracking-tight">{project.title}</p>
        <p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground">{project.subtitle}</p>
      </div>
      <ul aria-label={`${project.title} stack`} className="flex flex-wrap gap-2 border-t border-border pt-5">
        {project.technologies.slice(0, 4).map(technology => <li key={technology} className="rounded-md bg-background/60 px-2.5 py-1.5 font-mono text-xs text-muted-foreground">{technology}</li>)}
      </ul>
    </div>
  );
}

export function FeaturedSignal({ project }: { project: Project }) {
  return (
    <aside aria-label="Featured project" className="relative lg:rotate-2">
      <p className="mb-4 font-mono text-xs text-muted-foreground">From my workbench</p>
      <ProjectSignal project={project} />
      <Link href={`/projects/${project.slug}`} className="mt-4 flex min-h-12 items-center justify-between rounded-lg border border-border bg-card px-5 text-sm font-medium transition-colors hover:border-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
        Explore {project.title}<span aria-hidden="true" className="text-primary">↗</span>
      </Link>
    </aside>
  );
}
