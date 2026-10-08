import { cn } from "@/lib/utils";

type AtmosphereLayerProps = {
  className?: string;
};

export function AtmosphereLayer({
  className,
}: AtmosphereLayerProps) {
  return (
    <div
      data-atmosphere-layer
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0",
        className,
      )}
    >
      <div className="absolute -left-[18%] top-[18%] size-[55vw] max-h-[42rem] max-w-[42rem] rounded-full bg-neon-cyan/[0.045] blur-3xl" />
      <div className="absolute -right-[16%] top-[2%] size-[48vw] max-h-[38rem] max-w-[38rem] rounded-full bg-neon-violet/[0.055] blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-background/45 to-transparent" />
    </div>
  );
}
