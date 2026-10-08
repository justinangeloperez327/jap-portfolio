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
      className="grid gap-8 border-b border-border py-10 lg:grid-cols-2 lg:items-center lg:gap-14 lg:py-16"
    >
      <div
        className={cn(
          "relative aspect-[16/10] overflow-hidden border border-border",
          surface === "subtle" ? "bg-surface-subtle" : "bg-background",
          contentOnRight ? "lg:order-1" : "lg:order-2",
        )}
      >
        <CinematicMedia
          src={project.image ?? undefined}
          alt={`${project.title} project artwork`}
          label={`${project.title} artwork coming later`}
          sizes="(min-width: 1024px) 50vw, 100vw"
          position={project.imagePosition}
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
          {project.title}
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
            href="/projects"
            className="group mt-8 inline-flex items-center gap-3 text-sm font-medium text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Explore project catalog
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
