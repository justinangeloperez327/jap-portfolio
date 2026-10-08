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

type ScrollMotionProps = {
  children: ReactNode;
};

export function ScrollMotion({
  children,
}: ScrollMotionProps) {
  const pathname = usePathname();
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const rootElement = root.current;

    if (!rootElement) {
      return;
    }

    const scope = createScope({
      root,
      mediaQueries: {
        reduceMotion:
          "(prefers-reduced-motion: reduce)",
        compactViewport: "(max-width: 47.999rem)",
      },
    }).add((self) => {
      if (self.matches.reduceMotion) {
        return;
      }

      const revealTargets = new Set<HTMLElement>();
      let depthTargets: HTMLElement[] = [];
      let zoomTargets: HTMLElement[] = [];
      let animationFrame = 0;

      const refreshContinuousTargets = () => {
        if (self.matches.compactViewport) {
          depthTargets = [];
          zoomTargets = [];
          return;
        }

        depthTargets = Array.from(
          rootElement.querySelectorAll<HTMLElement>(
            "[data-scroll-depth]",
          ),
        );
        zoomTargets = Array.from(
          rootElement.querySelectorAll<HTMLElement>(
            "[data-scroll-zoom]",
          ),
        );
      };

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }

            const target = entry.target as HTMLElement;

            animate(target, {
              opacity: 1,
              y: 0,
              duration: 620,
              ease: "out(3)",
            });

            observer.unobserve(target);
          });
        },
        {
          rootMargin: "0px 0px -10% 0px",
          threshold: 0.08,
        },
      );

      const registerReveal = (target: HTMLElement) => {
        if (revealTargets.has(target)) {
          return;
        }

        revealTargets.add(target);

        utils.set(target, {
          opacity: 0,
          y: self.matches.compactViewport ? 10 : 18,
        });

        observer.observe(target);
      };

      const registerTree = (node: ParentNode) => {
        if (
          node instanceof HTMLElement &&
          node.matches("[data-scroll-reveal]")
        ) {
          registerReveal(node);
        }

        node
          .querySelectorAll<HTMLElement>(
            "[data-scroll-reveal]",
          )
          .forEach(registerReveal);

        refreshContinuousTargets();
      };

      const updateDepth = () => {
        const viewportHeight = Math.max(
          window.innerHeight,
          1,
        );

        depthTargets.forEach((target) => {
          const bounds = target.getBoundingClientRect();

          if (
            bounds.bottom < -viewportHeight * 0.2 ||
            bounds.top > viewportHeight * 1.2
          ) {
            return;
          }

          const center =
            bounds.top + bounds.height / 2;
          const normalized = Math.max(
            -1,
            Math.min(
              1,
              (center - viewportHeight / 2) /
                (viewportHeight / 2),
            ),
          );
          const depth = Number(
            target.dataset.scrollDepth ?? "0.5",
          );
          const offset =
            normalized * depth * -14;

          target.style.translate =
            `0 ${offset.toFixed(2)}px`;
        });

        zoomTargets.forEach((target) => {
          const bounds = target.getBoundingClientRect();

          if (
            bounds.bottom < -viewportHeight * 0.2 ||
            bounds.top > viewportHeight * 1.2
          ) {
            return;
          }

          const center =
            bounds.top + bounds.height / 2;
          const normalized = Math.max(
            -1,
            Math.min(
              1,
              (center - viewportHeight / 2) /
                (viewportHeight / 2),
            ),
          );
          const proximity =
            1 - Math.abs(normalized);
          const scale =
            1 + proximity * 0.015;

          target.style.scale = scale.toFixed(4);
        });
      };

      const queueDepthUpdate = () => {
        cancelAnimationFrame(animationFrame);
        animationFrame =
          requestAnimationFrame(updateDepth);
      };

      const handleResize = () => {
        refreshContinuousTargets();
        queueDepthUpdate();
      };

      registerTree(rootElement);
      queueDepthUpdate();

      const mutationObserver = new MutationObserver(
        (records) => {
          records.forEach((record) => {
            record.addedNodes.forEach((node) => {
              if (node instanceof HTMLElement) {
                registerTree(node);
              }
            });
          });

          queueDepthUpdate();
        },
      );

      mutationObserver.observe(rootElement, {
        childList: true,
        subtree: true,
      });

      window.addEventListener(
        "scroll",
        queueDepthUpdate,
        { passive: true },
      );
      window.addEventListener(
        "resize",
        handleResize,
      );

      return () => {
        observer.disconnect();
        mutationObserver.disconnect();
        cancelAnimationFrame(animationFrame);

        window.removeEventListener(
          "scroll",
          queueDepthUpdate,
        );
        window.removeEventListener(
          "resize",
          handleResize,
        );

        depthTargets.forEach((target) => {
          target.style.removeProperty("translate");
        });
        zoomTargets.forEach((target) => {
          target.style.removeProperty("scale");
        });
      };
    });

    return () => {
      scope.revert();
    };
  }, [pathname]);

  return (
    <div ref={root} data-scroll-motion-root>
      {children}
    </div>
  );
}
