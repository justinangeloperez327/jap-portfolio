import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type PageTransitionProps = {
  children: ReactNode;
  className?: string;
};

export function PageTransition({
  children,
  className,
}: PageTransitionProps) {
  return (
    <div
      className={cn("relative min-h-[calc(100svh-var(--header-height))]", className)}
      data-page-transition
    >
      {children}
    </div>
  );
}
