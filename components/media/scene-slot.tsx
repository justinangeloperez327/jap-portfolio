import { cn } from "@/lib/utils";

type SceneSlotProps = {
  label: string;
  className?: string;
  compact?: boolean;
};

/**
 * An intentionally empty composition frame. It has no image source,
 * decorative particles, mock buildings, or runtime media requests.
 * Actual artwork will be introduced in a separate pass.
 */
export function SceneSlot({
  label,
  className,
  compact = false,
}: SceneSlotProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "scene-slot relative isolate flex h-full min-h-48 flex-col justify-between overflow-hidden border border-border/70 bg-surface-subtle p-5 sm:p-7",
        compact && "min-h-36 p-4",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-muted-foreground/75">
          {label}
        </span>
        <span className="font-mono text-[0.625rem] tracking-[0.12em] text-muted-foreground/40">
          VISUAL / RESERVED
        </span>
      </div>

      <div className="flex items-end justify-between gap-4 border-t border-border/60 pt-3">
        <span className="max-w-[14rem] font-mono text-[0.625rem] uppercase leading-5 tracking-[0.12em] text-muted-foreground/55">
          Image-free placeholder
        </span>
        <span className="font-mono text-xs text-muted-foreground/35">
          +
        </span>
      </div>
    </div>
  );
}
