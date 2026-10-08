import type { SVGProps } from "react";

import { cn } from "@/lib/utils";

type BrandMarkProps = SVGProps<SVGSVGElement> & {
  className?: string;
  title?: string;
};

export function BrandMark({
  className,
  title,
  ...props
}: BrandMarkProps) {
  const labelled = Boolean(title);

  return (
    <svg
      viewBox="0 0 72 32"
      role={labelled ? "img" : undefined}
      aria-label={title}
      aria-hidden={labelled ? undefined : true}
      focusable="false"
      className={cn("h-8 w-auto", className)}
      {...props}
    >
      <path
        d="M4 5h15v14c0 5-3 8-8 8H6"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      <path
        d="M27 27 36 5l9 22M31 18h10"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      <path
        d="M52 27V5h9c5 0 7 3 7 7s-2 7-7 7h-9"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}
