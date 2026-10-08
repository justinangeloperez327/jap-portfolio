import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionContainerProps<T extends ElementType = "section"> = {
  as?: T;
  children: ReactNode;
  className?: string;
  contained?: boolean;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function SectionContainer<T extends ElementType = "section">({
  as,
  children,
  className,
  contained = true,
  ...props
}: SectionContainerProps<T>) {
  const Component = as ?? "section";

  return (
    <Component
      className={cn(
        "section-space",
        contained && "site-container",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
