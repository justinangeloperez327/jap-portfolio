import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import { BrandMark } from "./brand-mark";

type BrandLockupProps = HTMLAttributes<HTMLDivElement> & {
  compact?: boolean;
};

export function BrandLockup({
  className,
  compact = false,
  ...props
}: BrandLockupProps) {
  return (
    <div
      className={cn("inline-flex items-center gap-3 text-foreground", className)}
      {...props}
    >
      <BrandMark className={compact ? "h-6" : "h-8"} aria-hidden="true" />
      {!compact && (
        <span className="sr-only">Justin Angelo Perez Portfolio</span>
      )}
    </div>
  );
}
