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

const fieldClassName =
  "mt-2 w-full border border-border bg-background/45 px-4 py-3 text-sm text-foreground outline-none backdrop-blur-md transition-colors placeholder:text-muted-foreground/35 focus:border-primary/55 focus:ring-1 focus:ring-primary/35";

export function ContactPage() {
  if (!contactSection) {
    return null;
  }

  return (
    <PageHero
      artwork={artwork.contact}
      priority
      overlay="left"
      className="min-h-screen"
      contentClassName="items-start pb-14 pt-28 sm:pb-18 sm:pt-32 lg:items-center lg:py-28"
      parallaxDepth={0.7}
    >
      <div className="grid w-full gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(28rem,0.85fr)] lg:gap-16 xl:gap-24">
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
        </div>

        <div className="border border-border/85 bg-background/60 p-5 shadow-2xl shadow-black/15 backdrop-blur-xl sm:p-7 lg:p-8">
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

          <form
            aria-label="Contact form preview"
            className="mt-6"
          >
            <fieldset disabled className="grid gap-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-foreground/65"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className={fieldClassName}
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-email"
                    className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-foreground/65"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className={fieldClassName}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-foreground/65"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    placeholder="Project or idea"
                    className={fieldClassName}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-foreground/65"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  placeholder="Tell me what you are trying to build, improve, or solve."
                  className={fieldClassName}
                />
              </div>

              <button
                type="submit"
                className="mt-1 inline-flex min-h-12 w-full items-center justify-between border border-border bg-foreground px-5 text-sm font-medium text-background disabled:cursor-not-allowed disabled:opacity-60"
              >
                <span>Send Message</span>
                <span aria-hidden="true">→</span>
              </button>
            </fieldset>
          </form>

          <p className="mt-4 text-xs leading-5 text-muted-foreground/55">
            Form delivery and validation are being wired in the next
            implementation step.
          </p>
        </div>
      </div>
    </PageHero>
  );
}
