import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type SectionContainerProps = HTMLAttributes<HTMLElement> & {
  contained?: boolean;
};

export function SectionContainer({
  children,
  className,
  contained = true,
  ...props
}: SectionContainerProps) {
  return (
    <section
      className={cn(
        "section-space",
        contained && "site-container",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
