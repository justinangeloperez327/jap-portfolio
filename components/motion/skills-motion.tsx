"use client";

import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import {
  animate,
  createScope,
  stagger,
  utils,
} from "animejs";

type SkillsMotionProps = {
  children: ReactNode;
};

export function SkillsMotion({
  children,
}: SkillsMotionProps) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scope = createScope({
      root,
      mediaQueries: {
        reduceMotion: "(prefers-reduced-motion: reduce)",
      },
    }).add((self) => {
      const matches = self?.matches;
      const rootElement = root.current;

      if (!rootElement) {
        return;
      }

      const introCopy = rootElement.querySelector<HTMLElement>(
        "[data-skills-intro-copy]",
      );
      const introPrinciples = Array.from(
        rootElement.querySelectorAll<HTMLElement>(
          "[data-skills-principle]",
        ),
      );
      const architectureCopy = rootElement.querySelector<HTMLElement>(
        "[data-skills-architecture-copy]",
      );
      const categories = Array.from(
        rootElement.querySelectorAll<HTMLElement>(
          "[data-skills-category]",
        ),
      );

      const allTargets = [
        introCopy,
        architectureCopy,
        ...introPrinciples,
        ...categories,
        ...Array.from(
          rootElement.querySelectorAll<HTMLElement>(
            "[data-skill-item]",
          ),
        ),
      ].filter(Boolean) as HTMLElement[];

      if (matches?.reduceMotion) {
        utils.set(allTargets, {
          opacity: 1,
          x: 0,
          y: 0,
        });

        return;
      }

      if (introCopy) {
        utils.set(introCopy, {
          opacity: 0,
          y: 20,
        });
      }

      utils.set(introPrinciples, {
        opacity: 0,
        y: 16,
      });

      if (architectureCopy) {
        utils.set(architectureCopy, {
          opacity: 0,
          y: 18,
        });
      }

      categories.forEach((category) => {
        utils.set(category, {
          opacity: 0,
          y: 24,
        });

        utils.set(
          category.querySelectorAll<HTMLElement>("[data-skill-item]"),
          {
            opacity: 0,
            y: 14,
          },
        );
      });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }

            const target = entry.target as HTMLElement;

            if (target.hasAttribute("data-skills-intro-copy")) {
              animate(target, {
                opacity: 1,
                y: 0,
                duration: 620,
                ease: "out(3)",
              });

              if (introPrinciples.length > 0) {
                animate(introPrinciples, {
                  opacity: 1,
                  y: 0,
                  duration: 520,
                  delay: stagger(90),
                  ease: "out(3)",
                });
              }
            }

            if (target.hasAttribute("data-skills-architecture-copy")) {
              animate(target, {
                opacity: 1,
                y: 0,
                duration: 620,
                ease: "out(3)",
              });
            }

            if (target.hasAttribute("data-skills-category")) {
              animate(target, {
                opacity: 1,
                y: 0,
                duration: 640,
                ease: "out(3)",
              });

              const items = target.querySelectorAll<HTMLElement>(
                "[data-skill-item]",
              );

              if (items.length > 0) {
                animate(items, {
                  opacity: 1,
                  y: 0,
                  duration: 460,
                  delay: stagger(55),
                  ease: "out(3)",
                });
              }
            }

            observer.unobserve(target);
          });
        },
        {
          rootMargin: "0px 0px -12% 0px",
          threshold: 0.12,
        },
      );

      if (introCopy) {
        observer.observe(introCopy);
      }

      if (architectureCopy) {
        observer.observe(architectureCopy);
      }

      categories.forEach((category) => {
        observer.observe(category);
      });

      return () => {
        observer.disconnect();
      };
    });

    return () => {
      scope.revert();
    };
  }, []);

  return (
    <div ref={root} data-skills-motion-root>
      {children}
    </div>
  );
}
