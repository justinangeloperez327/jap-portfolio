import Link from "next/link";

import { CinematicMedia } from "@/components/media";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

type FeaturedProjectProps = {
  project: Project;
  index: number;
  surface?: "default" | "subtle";
  showCatalogMeta?: boolean;
  showProjectLink?: boolean;
};

export function FeaturedProject({
  project,
  index,
  surface = "default",
  showCatalogMeta = false,
  showProjectLink = false,
}: FeaturedProjectProps) {
  const contentOnRight = project.contentSide === "right";

  return (
    <article
      data-scroll-reveal
      className="grid gap-8 border-b border-border py-10 lg:grid-cols-2 lg:items-center lg:gap-10 xl:gap-14 lg:py-16"
    >
      <div
        data-scroll-depth="0.45"
        className={cn(
          "relative aspect-[4/3] overflow-hidden border border-border sm:aspect-[16/10]",
          surface === "subtle" ? "bg-surface-subtle" : "bg-background",
          contentOnRight ? "lg:order-1" : "lg:order-2",
        )}
      >
        <CinematicMedia
          src={project.image ?? undefined}
          alt={`${project.title} project artwork`}
          label={`${project.title} artwork coming later`}
          sizes="(min-width: 1280px) 50vw, (min-width: 1024px) 52vw, 100vw"
          position={project.imagePosition}
          scrollZoom
          className="absolute inset-0"
          imageClassName={cn(
            "transition-transform duration-700",
            project.imageMirror && "-scale-x-100",
          )}
        />

        <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between p-4">
          <span className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-muted-foreground/55">
            Project {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-muted-foreground/45">
            {project.status}
          </span>
        </div>
      </div>

      <div
        className={cn(
          "max-w-xl",
          contentOnRight
            ? "lg:order-2 lg:justify-self-end"
            : "lg:order-1",
        )}
      >
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-primary">
            {project.subtitle}
          </p>

          {showCatalogMeta && (
            <>
              <span
                aria-hidden="true"
                className="size-1 bg-muted-foreground/35"
              />
              <p className="font-mono text-[0.625rem] uppercase tracking-[0.15em] text-muted-foreground/50">
                {project.category}
              </p>
            </>
          )}
        </div>

        <h3 className="mt-4 text-display font-semibold">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex min-h-11 touch-manipulation items-center transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {project.title}
          </Link>
        </h3>

        <p className="mt-5 text-body-lg text-muted-foreground">
          {project.description}
        </p>

        <ul
          aria-label={`${project.title} technologies`}
          className="mt-7 flex flex-wrap gap-x-4 gap-y-2"
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

        {showProjectLink && (
          <Link
            href={`/projects/${project.slug}`}
            className="group mt-7 inline-flex min-h-11 touch-manipulation items-center gap-3 text-sm font-medium sm:mt-8 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Explore {project.title}
            <span
              aria-hidden="true"
              className="text-primary transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        )}
      </div>
    </article>
  );
}
