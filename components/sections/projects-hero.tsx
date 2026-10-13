import { PageHero } from "@/components/media";
import { portfolioSections } from "@/data";

import { SectionLabel } from "./section-label";

const projectsSection = portfolioSections.find(
  (section) => section.id === "projects",
);

export function ProjectsHero() {
  if (!projectsSection) {
    return null;
  }

  return (
    <PageHero
      sceneLabel="Tokyo night / Projects"
      contentClassName="items-end pb-14 pt-28 sm:pb-20 sm:pt-32 lg:items-center lg:pb-24 lg:pt-28"
    >
      <div className="max-w-4xl">
        <SectionLabel
          number={projectsSection.number}
          label={projectsSection.label}
        />

        <h1 className="mt-7 max-w-4xl break-words text-balance text-[clamp(2.75rem,7vw,7.5rem)] leading-[0.95] tracking-[-0.055em] font-semibold uppercase sm:mt-8">
          Built to solve,
          <span className="block text-muted-foreground">
            designed to last.
          </span>
        </h1>

        <p className="mt-7 max-w-2xl text-body-lg text-muted-foreground">
          A catalog of frameworks, language experiments, full-stack systems,
          and application work—organized around the engineering decisions
          behind them, not just the final interface.
        </p>
      </div>
    </PageHero>
  );
}
