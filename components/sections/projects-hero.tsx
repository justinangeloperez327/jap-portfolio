import { PageHero } from "@/components/media";
import { projects } from "@/data/projects";
import { SectionLabel } from "./section-label";

export function ProjectsHero() {
  return <PageHero sceneLabel="Tokyo night / Projects">
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] lg:items-end lg:gap-20">
      <div><SectionLabel number="03" label="Projects" /><h1 className="hero-title mt-7">Ideas made<br /><span className="text-primary">into systems.</span></h1></div>
      <div><p className="max-w-lg text-body-lg text-muted-foreground">Frameworks, language experiments, and everyday applications. Explore the work and the decisions behind it.</p><a href="#projects-catalog-title" className="text-link mt-7">Browse {projects.length} projects <span aria-hidden="true">↓</span></a></div>
    </div>
  </PageHero>;
}
