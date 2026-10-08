import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type PageContainerProps = HTMLAttributes<HTMLDivElement>;

export function PageContainer({
  children,
  className,
  ...props
}: PageContainerProps) {
  return (
    <div className={cn("site-container", className)} {...props}>
      {children}
    </div>
  );
}
