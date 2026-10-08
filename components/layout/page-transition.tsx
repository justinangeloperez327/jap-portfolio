"use client";

import type { ReactNode } from "react";
import {
  useLayoutEffect,
  useRef,
} from "react";
import { usePathname } from "next/navigation";
import {
  animate,
  createScope,
  utils,
} from "animejs";

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

    const rootElement = root.current;

    if (!rootElement) {
      return;
    }

    const scope = createScope({
      root,
      mediaQueries: {
        reduceMotion:
          "(prefers-reduced-motion: reduce)",
      },
    }).add((self) => {
      if (self.matches.reduceMotion) {
        utils.set(rootElement, {
          opacity: 1,
          y: 0,
        });

        return;
      }

      utils.set(rootElement, {
        opacity: 0,
        y: 8,
      });

      animate(rootElement, {
        opacity: 1,
        y: 0,
        duration: 360,
        ease: "out(3)",
      });
    });

    return () => {
      scope.revert();
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
      {children}
    </div>
  );
}
