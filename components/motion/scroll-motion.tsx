"use client";

import type { ReactNode } from "react";
import {
  useLayoutEffect,
  useRef,
} from "react";
import { usePathname } from "next/navigation";

type ScrollMotionProps = {
  children: ReactNode;
};

const revealEasing =
  "cubic-bezier(0.16, 1, 0.3, 1)";

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

    const reduceMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (reduceMotionQuery.matches) {
      return;
    }

    const compactViewportQuery = window.matchMedia(
      "(max-width: 47.999rem)",
    );

    const revealTargets = new Set<HTMLElement>();
    const continuousTargets = new Set<HTMLElement>();
    const activeDepthTargets = new Set<HTMLElement>();
    const activeZoomTargets = new Set<HTMLElement>();
    let animationFrame = 0;
    let scrollListening = false;

    const queueDepthUpdate = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame =
        requestAnimationFrame(updateDepth);
    };

    const syncScrollListener = () => {
      const shouldListen =
        !compactViewportQuery.matches &&
        document.visibilityState === "visible" &&
        (activeDepthTargets.size > 0 ||
          activeZoomTargets.size > 0);

      if (shouldListen && !scrollListening) {
        window.addEventListener(
          "scroll",
          queueDepthUpdate,
          { passive: true },
        );
        scrollListening = true;
      } else if (!shouldListen && scrollListening) {
        window.removeEventListener(
          "scroll",
          queueDepthUpdate,
        );
        scrollListening = false;
      }
    };

    const resetContinuousStyles = () => {
      continuousTargets.forEach((target) => {
        target.style.removeProperty("translate");
        target.style.removeProperty("scale");
      });
    };

    const updateDepth = () => {
      if (compactViewportQuery.matches) {
        resetContinuousStyles();
        return;
      }

      const viewportHeight = Math.max(
        window.innerHeight,
        1,
      );

      activeDepthTargets.forEach((target) => {
        const bounds = target.getBoundingClientRect();
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

        target.style.translate =
          `0 ${(normalized * depth * -14).toFixed(2)}px`;
      });

      activeZoomTargets.forEach((target) => {
        const bounds = target.getBoundingClientRect();
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

        target.style.scale =
          (1 + proximity * 0.015).toFixed(4);
      });
    };

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const target = entry.target as HTMLElement;
          const startY =
            compactViewportQuery.matches ? 10 : 18;

          const animation = target.animate(
            [
              {
                opacity: 0,
                transform: `translateY(${startY}px)`,
              },
              {
                opacity: 1,
                transform: "translateY(0)",
              },
            ],
            {
              duration: 620,
              easing: revealEasing,
              fill: "both",
            },
          );

          animation.addEventListener(
            "finish",
            () => {
              target.style.opacity = "";
              target.style.transform = "";
              animation.cancel();
            },
            { once: true },
          );

          revealObserver.unobserve(target);
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.08,
      },
    );

    const continuousObserver =
      new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const target =
              entry.target as HTMLElement;

            if (entry.isIntersecting) {
              if (
                target.hasAttribute(
                  "data-scroll-depth",
                )
              ) {
                activeDepthTargets.add(target);
              }

              if (
                target.hasAttribute(
                  "data-scroll-zoom",
                )
              ) {
                activeZoomTargets.add(target);
              }
            } else {
              activeDepthTargets.delete(target);
              activeZoomTargets.delete(target);
            }
          });

          syncScrollListener();
          queueDepthUpdate();
        },
        {
          rootMargin: "20% 0px",
          threshold: 0,
        },
      );

    const registerReveal = (
      target: HTMLElement,
    ) => {
      if (revealTargets.has(target)) {
        return;
      }

      revealTargets.add(target);
      revealObserver.observe(target);
    };

    const registerContinuous = (
      target: HTMLElement,
    ) => {
      if (continuousTargets.has(target)) {
        return;
      }

      continuousTargets.add(target);
      continuousObserver.observe(target);
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

      if (
        node instanceof HTMLElement &&
        node.matches(
          "[data-scroll-depth], [data-scroll-zoom]",
        )
      ) {
        registerContinuous(node);
      }

      node
        .querySelectorAll<HTMLElement>(
          "[data-scroll-depth], [data-scroll-zoom]",
        )
        .forEach(registerContinuous);
    };

    const handleResize = () => {
      if (compactViewportQuery.matches) {
        resetContinuousStyles();
      }

      queueDepthUpdate();
      syncScrollListener();
    };

    const handleVisibilityChange = () => {
      syncScrollListener();

      if (document.visibilityState === "visible") {
        queueDepthUpdate();
      }
    };

    registerTree(rootElement);

    const mutationObserver = new MutationObserver(
      (records) => {
        records.forEach((record) => {
          record.addedNodes.forEach((node) => {
            if (node instanceof HTMLElement) {
              registerTree(node);
            }
          });
        });
      },
    );

    mutationObserver.observe(rootElement, {
      childList: true,
      subtree: true,
    });

    window.addEventListener("resize", handleResize);
    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange,
    );
    compactViewportQuery.addEventListener(
      "change",
      handleResize,
    );

    return () => {
      revealObserver.disconnect();
      continuousObserver.disconnect();
      mutationObserver.disconnect();
      cancelAnimationFrame(animationFrame);

      if (scrollListening) {
        window.removeEventListener(
          "scroll",
          queueDepthUpdate,
        );
      }

      window.removeEventListener(
        "resize",
        handleResize,
      );
      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange,
      );
      compactViewportQuery.removeEventListener(
        "change",
        handleResize,
      );

      resetContinuousStyles();
    };
  }, [pathname]);

  return (
    <div ref={root} data-scroll-motion-root>
      {children}
    </div>
  );
}
