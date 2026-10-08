import { ContactForm } from "@/components/contact";
import { getPublicLinks } from "@/lib/public-links";
import { PageHero } from "@/components/media";
import {
  artwork,
  contactFocusAreas,
  contactResponseNotes,
  portfolioSections,
} from "@/data";

import { SectionLabel } from "./section-label";

const contactSection = portfolioSections.find(
  (section) => section.id === "contact",
);


export function ContactPage() {
  if (!contactSection) {
    return null;
  }

  const publicLinks = getPublicLinks();

  return (
    <PageHero
      artwork={artwork.contact}
      priority
      overlay="left"
      className="min-h-screen"
      contentClassName="items-start pb-14 pt-28 sm:pb-18 sm:pt-32 xl:items-center xl:py-28"
      parallaxDepth={0.7}
    >
      <div className="grid w-full gap-12 xl:grid-cols-[minmax(0,0.9fr)_minmax(28rem,0.85fr)] xl:gap-20 2xl:gap-24">
        <div className="max-w-2xl">
          <SectionLabel
            number={contactSection.number}
            label={contactSection.label}
          />

          <h1 className="mt-8 max-w-3xl text-balance text-hero font-semibold">
            Have something worth building?
            <span className="block text-muted-foreground">
              Let&apos;s talk.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-body-lg text-muted-foreground">
            I am interested in software work where architecture, developer
            experience, maintainability, and the actual product workflow all
            matter.
          </p>

          <div className="mt-10 border-y border-border/80 bg-background/20 px-5 py-6 backdrop-blur-sm">
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-primary">
              Good fit
            </p>

            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {contactFocusAreas.map((area, index) => (
                <li
                  key={area}
                  className="grid grid-cols-[2rem_minmax(0,1fr)] gap-3 text-sm leading-6 text-foreground/75"
                >
                  <span className="font-mono text-[0.625rem] text-muted-foreground/40">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>

          <dl className="mt-8 grid gap-5 sm:grid-cols-2">
            {contactResponseNotes.map((note) => (
              <div
                key={note.label}
                className="border-l border-border pl-4"
              >
                <dt className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-muted-foreground/50">
                  {note.label}
                </dt>
                <dd className="mt-2 text-sm leading-6 text-muted-foreground">
                  {note.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 border-t border-border/70 pt-5">
            <p className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-muted-foreground/45">
              Elsewhere
            </p>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
              {publicLinks.map((link) =>
                link.href ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noreferrer" : undefined}
                    className="group inline-flex min-h-11 touch-manipulation items-center gap-2 text-sm text-foreground/70 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {link.label}
                    <span
                      aria-hidden="true"
                      className="text-primary/70 transition-transform duration-200 group-hover:translate-x-0.5"
                    >
                      {link.external ? "↗" : "→"}
                    </span>
                  </a>
                ) : (
                  <span
                    key={link.label}
                    aria-disabled="true"
                    className="text-sm text-muted-foreground/65"
                  >
                    {link.label}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>

        <div className="border border-border/85 bg-background/70 p-4 sm:bg-background/60 sm:p-7 shadow-2xl shadow-black/15 backdrop-blur-xl lg:p-8">
          <div className="flex items-start justify-between gap-6 border-b border-border pb-5">
            <div>
              <p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-primary">
                Send a message
              </p>
              <h2 className="mt-2 text-heading font-semibold">
                Start with the problem.
              </h2>
            </div>

            <span
              aria-hidden="true"
              className="mt-1 size-2 border border-primary/60"
            />
          </div>

          <ContactForm />
        </div>
      </div>
    </PageHero>
  );
}
