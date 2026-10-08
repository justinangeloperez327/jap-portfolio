import Link from "next/link";

import { portfolioSections } from "@/data";

import { SectionLabel } from "./section-label";

const aboutSection = portfolioSections.find(
  (section) => section.id === "about",
);

const focusAreas = [
  "Framework Engineering",
  "Full-Stack Systems",
  "Developer Experience",
] as const;

export function HomeAboutPreview() {
  if (!aboutSection) {
    return null;
  }

  return (
    <section
      id="about-preview"
      aria-labelledby="about-preview-title"
      className="relative isolate overflow-hidden border-t border-border/70 bg-background"
    >
      <div
        aria-hidden="true"
        data-scroll-depth="0.65"
        className="pointer-events-none absolute -right-10 top-4 select-none font-mono text-[clamp(9rem,22vw,22rem)] font-semibold leading-none tracking-[-0.08em] text-foreground/[0.018]"
      >
        01
      </div>

      <div data-scroll-reveal className="site-container section-space relative">
        <SectionLabel
          number={aboutSection.number}
          label={aboutSection.label}
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
          <div>
            <h2
              id="about-preview-title"
              className="text-balance text-display font-semibold"
            >
              I build the systems behind the experience.
            </h2>
          </div>

          <div className="max-w-2xl lg:pt-1">
            <p className="text-body-lg text-foreground/90">
              My work spans framework engineering, application architecture,
              and full-stack product development. I care about the structure
              beneath the interface just as much as the experience people see.
            </p>

            <p className="mt-6 text-body text-muted-foreground">
              That means designing APIs and abstractions that stay understandable,
              choosing architecture that can evolve, and keeping developer
              experience, performance, and maintainability in the same
              conversation.
            </p>

            <div className="mt-10 grid border-y border-border sm:grid-cols-3">
              {focusAreas.map((area, index) => (
                <div
                  key={area}
                  className="flex min-h-20 items-center border-b border-border py-4 last:border-b-0 sm:border-b-0 sm:border-r sm:px-5 sm:first:pl-0 sm:last:border-r-0"
                >
                  <div>
                    <span className="font-mono text-[0.625rem] text-muted-foreground/50">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-1 text-sm text-foreground/80">
                      {area}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href={aboutSection.href}
              className="group mt-10 inline-flex items-center gap-3 text-sm font-medium text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              More About Me
              <span
                aria-hidden="true"
                className="text-primary transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
