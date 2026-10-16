"use client";

import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import { createScope, createTimeline, stagger, utils } from "animejs";

type HomeHeroMotionProps = { children: ReactNode };

export function HomeHeroMotion({ children }: HomeHeroMotionProps) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scope = createScope({
      root,
      mediaQueries: {
        reduceMotion: "(prefers-reduced-motion: reduce)",
      },
    }).add((self) => {
      if (!root.current || self?.matches?.reduceMotion) return;

      const intro = "[data-home-eyebrow]";
      const title = "[data-home-title]";
      const copy = "[data-home-copy]";
      const actions = "[data-home-action]";
      const focus = "[data-home-focus]";

      utils.set(intro, { opacity: 0, y: 12 });
      utils.set(title, { opacity: 0, y: 24 });
      utils.set(copy, { opacity: 0, y: 16 });
      utils.set(actions, { opacity: 0, y: 12 });
      utils.set(focus, { opacity: 0, y: 10 });

      createTimeline({ defaults: { ease: "out(3)" } })
        .add(intro, { opacity: 1, y: 0, duration: 450 }, 0)
        .add(title, { opacity: 1, y: 0, duration: 720 }, 100)
        .add(copy, { opacity: 1, y: 0, duration: 600 }, 280)
        .add(actions, { opacity: 1, y: 0, duration: 500, delay: stagger(70) }, 400)
        .add(focus, { opacity: 1, y: 0, duration: 480 }, 540);
    });
    return () => scope.revert();
  }, []);

  return <div ref={root} data-home-motion-root>{children}</div>;
}
