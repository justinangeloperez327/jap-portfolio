import { PageHero } from "@/components/media";
import { artwork, portfolioSections } from "@/data";

import { SectionLabel } from "./section-label";

const skillsSection = portfolioSections.find(
  (section) => section.id === "skills",
);

export function SkillsHero() {
  if (!skillsSection) {
    return null;
  }

  return (
    <PageHero
      artwork={artwork.skills}
      priority
      overlay="left"
      contentClassName="items-end pb-16 pt-28 sm:pb-20 lg:items-center lg:pb-24"
      parallaxDepth={0.75}
    >
      <div className="max-w-4xl">
        <SectionLabel
          number={skillsSection.number}
          label={skillsSection.label}
        />

        <h1 className="mt-8 max-w-4xl text-balance text-hero font-semibold uppercase">
          Tools, tech
          <span className="block text-muted-foreground">
            and more.
          </span>
        </h1>

        <p className="mt-7 max-w-2xl text-body-lg text-muted-foreground">
          I use technology as a set of engineering choices, not a collection of
          badges. The important part is understanding where each tool fits,
          what trade-offs it introduces, and how it contributes to the system
          around it.
        </p>
      </div>
    </PageHero>
  );
}
