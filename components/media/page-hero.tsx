import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  children: ReactNode;
  sceneLabel?: string;
  companion?: ReactNode;
  className?: string;
  contentClassName?: string;
};

export function PageHero({ children, sceneLabel, companion, className, contentClassName }: PageHeroProps) {
  const home = sceneLabel?.includes("Home");
  return (
    <section className={cn("page-hero relative isolate overflow-hidden border-b border-border bg-background", home && "page-hero-home", className)}>
      <div aria-hidden="true" className="tokyo-ambient pointer-events-none absolute inset-0" />
      <div className={cn("site-container relative grid items-center gap-12 pb-16 pt-36 sm:pb-20 sm:pt-40 lg:gap-16", companion && "lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]", home && "lg:min-h-[min(880px,100svh)]")}>
        <div className={cn("relative min-w-0", contentClassName)}>{children}</div>
        {companion && <div className="min-w-0">{companion}</div>}
      </div>
    </section>
  );
}
