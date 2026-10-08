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
        "relative overflow-hidden bg-slate-950",
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
          <div className="absolute inset-0 bg-[linear-gradient(120deg,#020617_0%,#0f172a_48%,#111827_100%)]" />

          <div className="absolute -left-[10%] top-[18%] h-[38%] w-[52%] rounded-full bg-cyan-400/8 blur-3xl" />
          <div className="absolute right-[4%] top-[8%] h-[52%] w-[36%] rounded-full bg-violet-500/10 blur-3xl" />
          <div className="absolute bottom-[-12%] left-[28%] h-[34%] w-[58%] rounded-full bg-fuchsia-500/8 blur-3xl" />

          <div className="absolute inset-x-0 bottom-0 h-[46%] bg-gradient-to-t from-black/80 to-transparent" />

          <div className="absolute bottom-[10%] right-[12%] h-[48%] w-[24%] min-w-28 max-w-72">
            <div className="absolute left-1/2 top-0 h-[24%] aspect-square -translate-x-1/2 rounded-full bg-white/8 ring-1 ring-white/8" />
            <div className="absolute bottom-0 left-1/2 h-[78%] w-full -translate-x-1/2 rounded-t-[45%] bg-white/6 ring-1 ring-white/8" />
          </div>

          <div className="absolute left-[5%] top-[12%] h-20 w-14 border border-white/8 bg-white/[0.025]" />
          <div className="absolute left-[14%] top-[24%] h-28 w-20 border border-white/8 bg-white/[0.025]" />
          <div className="absolute right-[4%] top-[18%] h-24 w-16 border border-white/8 bg-white/[0.025]" />

          <div className="absolute inset-x-[6%] bottom-[7%] flex items-center gap-3">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/30">
              {label}
            </span>
            <div className="h-px flex-1 bg-white/10" />
          </div>
        </div>
      )}
    </div>
  );
}
