import Link from "next/link";

import { portfolioSections } from "@/data";

import { SectionLabel } from "./section-label";

const contactSection = portfolioSections.find(
  (section) => section.id === "contact",
);

export function HomeContactPreview() {
  if (!contactSection) {
    return null;
  }

  return (
    <section
      id="contact-preview"
      aria-labelledby="contact-preview-title"
      className="relative isolate overflow-hidden border-t border-border/70 bg-surface-subtle"
    >
      <div
        aria-hidden="true"
        data-scroll-depth="0.65"
        className="pointer-events-none absolute -left-8 bottom-[-2rem] select-none font-mono text-[clamp(9rem,22vw,22rem)] font-semibold leading-none tracking-[-0.08em] text-foreground/[0.015]"
      >
        04
      </div>

      <div data-scroll-reveal className="site-container section-space relative">
        <SectionLabel
          number={contactSection.number}
          label={contactSection.label}
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-20">
          <div className="max-w-4xl">
            <h2
              id="contact-preview-title"
              className="text-balance text-display font-semibold"
            >
              Have something worth building?
              <span className="block text-muted-foreground">
                Let&apos;s talk.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-body-lg text-muted-foreground">
              Whether it is a framework, internal system, product idea, or
              technical collaboration, I am interested in work that benefits
              from thoughtful engineering and clear execution.
            </p>
          </div>

          <Link
            href={contactSection.href}
            className="group inline-flex min-h-12 w-fit items-center gap-4 border border-border bg-background/35 px-5 text-sm font-medium text-foreground backdrop-blur-md transition-[background-color,border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-primary/45 hover:bg-surface-raised focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:mb-1"
          >
            Contact Me
            <span
              aria-hidden="true"
              className="text-primary transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>

        <div
          aria-hidden="true"
          className="mt-16 h-px w-full bg-gradient-to-r from-primary/40 via-border to-transparent"
        />
      </div>
    </section>
  );
}
