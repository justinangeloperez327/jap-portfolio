import { PageHero } from "@/components/media";
import { skillArchitecture } from "@/data";
import { SectionLabel } from "./section-label";

export function SkillsHero() {
  return <PageHero sceneLabel="Tokyo night / Skills" companion={
    <nav aria-label="Explore skill categories" className="rounded-xl border border-border bg-card p-6 sm:p-8">
      <p className="mb-5 font-mono text-xs text-primary">Explore the toolkit</p>
      {skillArchitecture.map(category => <a key={category.id} href={`#skills-${category.id}`} className="group flex min-h-14 items-center justify-between gap-4 border-t border-border py-3 text-sm transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-primary"><span>{category.label}</span><span aria-hidden="true" className="text-primary">↓</span></a>)}
    </nav>
  }>
    <SectionLabel number="02" label="Skills" />
    <h1 className="hero-title mt-7">Across the stack.<br /><span className="text-primary">Down to the details.</span></h1>
    <p className="mt-7 max-w-xl text-body-lg text-muted-foreground">From a React interface to a Rust runtime. These are the tools I use, where they fit, and how I put them to work.</p>
  </PageHero>;
}
