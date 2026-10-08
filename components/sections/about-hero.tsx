import { PageHero } from "@/components/media";
import { artwork, portfolioSections } from "@/data";

import { SectionLabel } from "./section-label";

const aboutSection = portfolioSections.find(
  (section) => section.id === "about",
);

export function AboutHero() {
  if (!aboutSection) {
    return null;
  }

  return (
    <PageHero
      artwork={artwork.about}
      priority
      overlay="left"
      contentClassName="items-end pb-14 pt-28 sm:pb-18 sm:pt-32 lg:items-center lg:pb-24 lg:pt-28"
      parallaxDepth={0.7}
    >
      <div className="max-w-3xl">
        <SectionLabel
          number={aboutSection.number}
          label={aboutSection.label}
        />

        <h1 className="mt-7 max-w-3xl text-balance text-hero font-semibold uppercase sm:mt-8">
          More than
          <span className="block text-muted-foreground">
            just code.
          </span>
        </h1>

        <p className="mt-7 max-w-2xl text-body-lg text-muted-foreground">
          I approach software as a system of decisions: architecture, naming,
          developer experience, performance, and the people who eventually
          need to use or maintain what gets built.
        </p>
      </div>
    </PageHero>
  );
}
