import Link from "next/link";

import { CinematicMedia } from "@/components/media";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

type HomeProjectCardProps = {
  project: Project;
  index: number;
};

export function HomeProjectCard({
  project,
  index,
}: HomeProjectCardProps) {
  return (
    <article
      data-scroll-reveal
      className="glass-surface group overflow-hidden rounded-2xl transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_22px_70px_rgb(2_6_23/38%)]"
    >
      <div className="grid min-h-full sm:grid-cols-[8.5rem_minmax(0,1fr)] lg:grid-cols-1 xl:grid-cols-[9.5rem_minmax(0,1fr)]">
        <div className="relative min-h-40 overflow-hidden border-b border-border/70 sm:min-h-full sm:border-b-0 sm:border-r lg:min-h-44 lg:border-b lg:border-r-0 xl:min-h-full xl:border-b-0 xl:border-r">
          <CinematicMedia
            src={project.image ?? undefined}
            alt={`${project.title} project artwork`}
            label={`${project.title} artwork`}
            sizes="(min-width: 1280px) 10rem, (min-width: 640px) 9rem, 100vw"
            position={project.imagePosition}
            className="absolute inset-0"
            imageClassName={cn(
              "transition-transform duration-700 group-hover:scale-[1.025]",
              project.imageMirror && "-scale-x-100",
            )}
          />
        </div>

        <div className="flex min-w-0 flex-col p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-[0.625rem] uppercase tracking-[0.15em] text-primary">
                {String(index + 1).padStart(2, "0")} · {project.category}
              </p>
              <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em]">
                {project.title}
              </h3>
            </div>

            <Link
              href={`/projects/${project.slug}`}
              aria-label={`Open ${project.title} case study`}
              className="grid size-9 shrink-0 place-items-center rounded-lg border border-border/80 bg-background/35 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">
            {project.description}
          </p>

          <ul
            aria-label={`${project.title} technologies`}
            className="mt-auto flex flex-wrap gap-2 pt-5"
          >
            {project.technologies.slice(0, 3).map((technology) => (
              <li
                key={technology}
                className="rounded-full border border-border/80 bg-background/28 px-3 py-1 font-mono text-[0.625rem] text-foreground/66"
              >
                {technology}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
