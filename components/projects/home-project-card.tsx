import Link from "next/link";

import type { Project } from "@/types";

type HomeProjectCardProps = {
  project: Project;
  index: number;
};

export function HomeProjectCard({ project, index }: HomeProjectCardProps) {
  return (
    <article
      data-scroll-reveal
      className="group flex rounded-xl min-h-[16rem] sm:min-h-[18rem] flex-col border border-glass-border bg-glass backdrop-blur-md shadow-lg shadow-black/10 p-5 transition-[border-color,background-color] duration-200 motion-reduce:transition-none hover:border-primary/65 hover:bg-surface-raised/70 sm:p-6"
    >
      <div className="flex flex-wrap items-start justify-between gap-2">
        <p className="font-mono text-[0.625rem] uppercase tracking-[0.14em] text-primary">
          {String(index + 1).padStart(2, "0")} / {project.category}
        </p>
        <span className="font-mono text-[0.625rem] text-muted-foreground/75">{project.status}</span>
      </div>

      <h3 className="mt-7 text-xl font-semibold tracking-[-0.03em]">
        <Link
          href={`/projects/${project.slug}`}
          className="transition-colors motion-reduce:transition-none hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {project.title} <span aria-hidden="true" className="text-primary">↗</span>
        </Link>
      </h3>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{project.description}</p>

      <ul aria-label={`${project.title} technologies`} className="mt-auto flex flex-wrap gap-x-4 gap-y-2 pt-7">
        {project.technologies.slice(0, 3).map((technology) => (
          <li key={technology} className="font-mono text-[0.625rem] text-foreground/65">
            {technology}
          </li>
        ))}
      </ul>
    </article>
  );
}
