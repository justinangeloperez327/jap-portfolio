"use client";

import type { ReactNode } from "react";
import {
  useLayoutEffect,
  useRef,
} from "react";
import { usePathname } from "next/navigation";

import { ScrollMotion } from "@/components/motion";
import { cn } from "@/lib/utils";

type PageTransitionProps = {
  children: ReactNode;
  className?: string;
};

export function PageTransition({
  children,
  className,
}: PageTransitionProps) {
  const pathname = usePathname();
  const root = useRef<HTMLDivElement>(null);
  const initialRender = useRef(true);

  useLayoutEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }

    requestAnimationFrame(() => {
      document
        .getElementById("main-content")
        ?.focus({ preventScroll: true });
    });

    const rootElement = root.current;

    if (
      !rootElement ||
      window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches
    ) {
      return;
    }

    const animation = rootElement.animate(
      [
        {
          opacity: 0,
          transform: "translateY(8px)",
        },
        {
          opacity: 1,
          transform: "translateY(0)",
        },
      ],
      {
        duration: 360,
        easing: "cubic-bezier(0.16, 1, 0.3, 1)",
        fill: "both",
      },
    );

    return () => {
      animation.cancel();
    };
  }, [pathname]);

  return (
    <div
      ref={root}
      className={cn(
        "relative min-h-[calc(100svh-var(--header-height))]",
        className,
      )}
      data-page-transition
      data-page-path={pathname}
    >
      <ScrollMotion>{children}</ScrollMotion>
    </div>
  );
}
