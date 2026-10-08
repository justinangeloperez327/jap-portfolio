import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type ForegroundLayerProps = HTMLAttributes<HTMLDivElement>;

export function ForegroundLayer({
  className,
  children,
  ...props
}: ForegroundLayerProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "layer-content pointer-events-none absolute inset-0",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
