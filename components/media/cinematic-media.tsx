import Image from "next/image";

import { cn } from "@/lib/utils";

type CinematicMediaProps = {
  src?: string;
  alt: string;
  label?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  imageClassName?: string;
};

export function CinematicMedia({
  src,
  alt,
  label = "Artwork placeholder",
  priority = false,
  sizes = "100vw",
  className,
  imageClassName,
}: CinematicMediaProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-background",
        className,
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={cn("object-cover", imageClassName)}
        />
      ) : (
        <div
          aria-hidden="true"
          className="absolute inset-0 isolate overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(120deg,var(--background)_0%,oklch(0.14_0.03_262)_48%,oklch(0.17_0.035_278)_100%)]" />

          <div className="absolute -left-[10%] top-[18%] h-[38%] w-[52%] rounded-full bg-neon-cyan/[0.08] blur-3xl" />
          <div className="absolute right-[4%] top-[8%] h-[52%] w-[36%] rounded-full bg-neon-violet/10 blur-3xl" />
          <div className="absolute bottom-[-12%] left-[28%] h-[34%] w-[58%] rounded-full bg-neon-magenta/[0.08] blur-3xl" />

          <div className="absolute inset-x-0 bottom-0 h-[46%] bg-gradient-to-t from-background via-background/70 to-transparent" />

          <div className="absolute bottom-[10%] right-[12%] h-[48%] w-[24%] min-w-28 max-w-72">
            <div className="absolute left-1/2 top-0 h-[24%] aspect-square -translate-x-1/2 rounded-full bg-foreground/[0.08] ring-1 ring-foreground/[0.08]" />
            <div className="absolute bottom-0 left-1/2 h-[78%] w-full -translate-x-1/2 rounded-t-[45%] bg-foreground/[0.06] ring-1 ring-foreground/[0.08]" />
          </div>

          <div className="absolute left-[5%] top-[12%] h-20 w-14 border border-border bg-foreground/[0.025]" />
          <div className="absolute left-[14%] top-[24%] h-28 w-20 border border-border bg-foreground/[0.025]" />
          <div className="absolute right-[4%] top-[18%] h-24 w-16 border border-border bg-foreground/[0.025]" />

          <div className="absolute inset-x-[6%] bottom-[7%] flex items-center gap-3">
            <div className="h-px flex-1 bg-border" />
            <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-muted-foreground/55">
              {label}
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>
        </div>
      )}
    </div>
  );
}
