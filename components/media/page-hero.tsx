import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { SceneSlot } from "./scene-slot";

type PageHeroProps = {
  children: ReactNode;
  sceneLabel?: string;
  className?: string;
  contentClassName?: string;
};

/**
 * Text-first page hero. The companion frame is an empty reserved slot,
 * not a generated or remotely loaded image.
 */
export function PageHero({
  children,
  sceneLabel,
  className,
  contentClassName,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "hero-height relative isolate overflow-hidden border-b border-border/70 bg-background",
        className,
      )}
    >
      <div aria-hidden="true" className="tokyo-ambient absolute inset-0" />
      <div
        className={cn(
          "site-container layer-content relative grid min-h-[var(--hero-min-height)] items-center gap-10 py-28 sm:py-32 lg:gap-14",
          sceneLabel && "lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]",
        )}
      >
        <div className={cn("relative z-10 min-w-0", contentClassName)}>
          {children}
        </div>
        {sceneLabel && (
          <div
            data-parallax-layer
            data-parallax-depth="0.4"
            className="relative min-h-48 sm:min-h-64 lg:min-h-[34rem]"
          >
            <SceneSlot
              label={sceneLabel}
              className="absolute inset-0"
            />
          </div>
        )}
      </div>
    </section>
  );
}
