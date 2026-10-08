import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type ParallaxLayerProps = HTMLAttributes<HTMLDivElement> & {
  depth?: number;
};

export function ParallaxLayer({
  depth = 1,
  className,
  children,
  ...props
}: ParallaxLayerProps) {
  return (
    <div
      data-parallax-layer
      data-parallax-depth={depth}
      className={cn(className)}
      {...props}
    >
      {children}
    </div>
  );
}
