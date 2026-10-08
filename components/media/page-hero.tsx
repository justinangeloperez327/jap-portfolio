import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import type {
  CinematicArtwork,
  CinematicOverlayDirection,
} from "@/types";

import { CinematicBackground } from "./cinematic-background";

type PageHeroProps = {
  artwork: CinematicArtwork;
  children: ReactNode;
  priority?: boolean;
  overlay?: CinematicOverlayDirection;
  className?: string;
  contentClassName?: string;
  parallaxDepth?: number;
};

export function PageHero({
  artwork,
  children,
  priority = false,
  overlay = "left",
  className,
  contentClassName,
  parallaxDepth = 1,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "hero-height relative isolate overflow-hidden bg-background",
        className,
      )}
    >
      <CinematicBackground
        artwork={artwork}
        priority={priority}
        overlay={overlay}
        parallaxDepth={parallaxDepth}
      />

      <div
        className={cn(
          "site-container layer-content relative flex min-h-[inherit] items-center py-24",
          contentClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}
