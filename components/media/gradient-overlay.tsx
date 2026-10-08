import { cn } from "@/lib/utils";
import type { CinematicOverlayDirection } from "@/types";

type GradientOverlayProps = {
  direction?: CinematicOverlayDirection;
  className?: string;
};

const directionClass: Record<CinematicOverlayDirection, string> = {
  left: "cinematic-overlay-left",
  right: "cinematic-overlay-right",
  bottom: "cinematic-overlay-bottom",
  none: "",
};

export function GradientOverlay({
  direction = "left",
  className,
}: GradientOverlayProps) {
  if (direction === "none") {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0",
        directionClass[direction],
        className,
      )}
    />
  );
}
