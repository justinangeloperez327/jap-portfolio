import { cn } from "@/lib/utils";

type NoiseOverlayProps = {
  className?: string;
};

export function NoiseOverlay({
  className,
}: NoiseOverlayProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "cinematic-noise pointer-events-none absolute inset-0 hidden opacity-[0.035] sm:block",
        className,
      )}
    />
  );
}
