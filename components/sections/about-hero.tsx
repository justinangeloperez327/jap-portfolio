import Link from "next/link";
import { PageHero } from "@/components/media";
import { SectionLabel } from "./section-label";

export function AboutHero() {
  return <PageHero sceneLabel="Tokyo night / About" companion={
    <aside className="rounded-xl border border-border bg-card p-6 sm:p-8">
      <p className="font-mono text-xs text-primary">The way I work</p>
      <p className="mt-6 font-display text-3xl font-semibold leading-tight">Make the complexity useful.</p>
      <dl className="mt-8 divide-y divide-border">
        {[["Architecture", "Clear boundaries. Room to evolve."], ["Experience", "Conventions people can understand."], ["Performance", "Decisions grounded in the workload."]].map(([label, value]) => <div key={label} className="py-4"><dt className="text-sm font-medium">{label}</dt><dd className="mt-1 text-sm leading-6 text-muted-foreground">{value}</dd></div>)}
      </dl>
    </aside>
  }>
    <SectionLabel number="01" label="About me" />
    <h1 className="hero-title mt-7">Curious about<br /><span className="text-primary">what’s underneath.</span></h1>
    <p className="mt-7 max-w-xl text-body-lg text-muted-foreground">I’m Justin Angelo Perez. I build applications—and explore the frameworks, languages, and tools that make them possible.</p>
    <Link href="/projects" className="text-link mt-8">See what I build <span aria-hidden="true">↗</span></Link>
  </PageHero>;
}
