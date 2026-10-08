"use client";

import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import {
  createScope,
  createTimeline,
  stagger,
  utils,
} from "animejs";

type HomeHeroMotionProps = {
  children: ReactNode;
};

export function HomeHeroMotion({
  children,
}: HomeHeroMotionProps) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scope = createScope({
      root,
      mediaQueries: {
        reduceMotion: "(prefers-reduced-motion: reduce)",
        finePointer: "(pointer: fine)",
        compactViewport: "(max-width: 47.999rem)",
      },
    }).add((self) => {
      const reduceMotion = self.matches.reduceMotion;
      const rootElement = root.current;

      if (!rootElement) {
        return;
      }

      const header = document.querySelector<HTMLElement>(
        "[data-site-header]",
      );
      const artworkLayer =
        rootElement.querySelector<HTMLElement>("[data-parallax-layer]");
      const atmosphereLayer =
        rootElement.querySelector<HTMLElement>("[data-atmosphere-layer]");

      if (reduceMotion) {
        utils.set(
          [
            "[data-home-eyebrow]",
            "[data-home-title]",
            "[data-home-copy]",
            "[data-home-action]",
            "[data-home-focus]",
            "[data-home-scroll]",
            "[data-atmosphere-layer]",
            "[data-parallax-layer]",
          ],
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
          },
        );

        if (header) {
          utils.set(header, {
            opacity: 1,
            y: 0,
          });
        }

        return;
      }

      utils.set("[data-parallax-layer]", {
        opacity: 0,
        x: 18,
        scale: 1.035,
      });
      utils.set("[data-atmosphere-layer]", {
        opacity: 0,
      });
      utils.set("[data-home-eyebrow]", {
        opacity: 0,
        y: 14,
      });
      utils.set("[data-home-title]", {
        opacity: 0,
        y: 28,
      });
      utils.set("[data-home-copy]", {
        opacity: 0,
        y: 20,
      });
      utils.set("[data-home-action]", {
        opacity: 0,
        y: 16,
      });
      utils.set("[data-home-focus]", {
        opacity: 0,
        x: 14,
      });
      utils.set("[data-home-scroll]", {
        opacity: 0,
        y: -8,
      });

      if (header) {
        utils.set(header, {
          opacity: 0,
          y: -12,
        });
      }

      const timeline = createTimeline({
        defaults: {
          ease: "out(3)",
        },
      });

      timeline
        .add(
          "[data-parallax-layer]",
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1050,
          },
          0,
        )
        .add(
          "[data-atmosphere-layer]",
          {
            opacity: 1,
            duration: 900,
          },
          100,
        );

      if (header) {
        timeline.add(
          header,
          {
            opacity: 1,
            y: 0,
            duration: 600,
          },
          180,
        );
      }

      timeline
        .add(
          "[data-home-eyebrow]",
          {
            opacity: 1,
            y: 0,
            duration: 520,
          },
          260,
        )
        .add(
          "[data-home-title]",
          {
            opacity: 1,
            y: 0,
            duration: 720,
          },
          340,
        )
        .add(
          "[data-home-copy]",
          {
            opacity: 1,
            y: 0,
            duration: 620,
          },
          500,
        )
        .add(
          "[data-home-action]",
          {
            opacity: 1,
            y: 0,
            duration: 500,
            delay: stagger(85),
          },
          620,
        )
        .add(
          "[data-home-focus]",
          {
            opacity: 1,
            x: 0,
            duration: 520,
          },
          730,
        )
        .add(
          "[data-home-scroll]",
          {
            opacity: 1,
            y: 0,
            duration: 480,
          },
          860,
        );

      if (!artworkLayer) {
        return;
      }

      let animationFrame = 0;
      let pointerX = 0;
      let pointerY = 0;
      let scrollOffset = 0;

      const renderDepth = () => {
        const depth = Number(
          artworkLayer.dataset.parallaxDepth ?? "1",
        );

        artworkLayer.style.transform =
          `translate3d(${pointerX * depth}px, ${pointerY * depth + scrollOffset}px, 0) scale(1.012)`;

        if (atmosphereLayer) {
          atmosphereLayer.style.transform =
            `translate3d(0, ${scrollOffset * 0.45}px, 0)`;
        }
      };

      const queueDepthRender = () => {
        cancelAnimationFrame(animationFrame);
        animationFrame = requestAnimationFrame(renderDepth);
      };

      const applyPointerDepth = (event: PointerEvent) => {
        const bounds = rootElement.getBoundingClientRect();
        const normalizedX =
          (event.clientX - bounds.left) / bounds.width - 0.5;
        const normalizedY =
          (event.clientY - bounds.top) / bounds.height - 0.5;

        pointerX = normalizedX * -10;
        pointerY = normalizedY * -7;

        artworkLayer.style.transition =
          "transform 180ms cubic-bezier(0.2, 0.8, 0.2, 1)";
        queueDepthRender();
      };

      const resetPointerDepth = () => {
        pointerX = 0;
        pointerY = 0;
        artworkLayer.style.transition =
          "transform 650ms cubic-bezier(0.2, 0.8, 0.2, 1)";
        queueDepthRender();
      };

      const applyScrollDepth = () => {
        const heroHeight = Math.max(rootElement.offsetHeight, 1);
        const progress = Math.min(
          Math.max(window.scrollY / heroHeight, 0),
          1,
        );

        scrollOffset = progress * 18;
        queueDepthRender();
      };

      if (self.matches.finePointer) {
        rootElement.addEventListener(
          "pointermove",
          applyPointerDepth,
        );
        rootElement.addEventListener(
          "pointerleave",
          resetPointerDepth,
        );
      }

      if (!self.matches.compactViewport) {
        window.addEventListener("scroll", applyScrollDepth, {
          passive: true,
        });
      }

      return () => {
        cancelAnimationFrame(animationFrame);

        rootElement.removeEventListener(
          "pointermove",
          applyPointerDepth,
        );
        rootElement.removeEventListener(
          "pointerleave",
          resetPointerDepth,
        );
        window.removeEventListener("scroll", applyScrollDepth);

        artworkLayer.style.removeProperty("transition");
        artworkLayer.style.removeProperty("transform");
        atmosphereLayer?.style.removeProperty("transform");
      };
    });

    return () => {
      scope.revert();
    };
  }, []);

  return (
    <div ref={root} data-home-motion-root>
      {children}
    </div>
  );
}
