import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type BrandMarkProps = HTMLAttributes<HTMLSpanElement>;

/** Text-only identity until final brand assets are supplied. */
export function BrandMark({ className, ...props }: BrandMarkProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-mono text-lg font-semibold leading-none tracking-[-0.08em] text-foreground",
        className,
      )}
      {...props}
    >
      JAP
    </span>
  );
}
