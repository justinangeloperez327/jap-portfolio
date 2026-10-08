import type { Metadata } from "next";

import { ProjectsCatalog } from "@/components/projects";
import { ProjectsHero } from "@/components/sections";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Projects",
  description:
    "Selected software engineering projects by Justin Angelo Perez across frameworks, languages, full-stack systems, frontend, and backend development.",
  path: "/projects",
  keywords: [
    "software projects",
    "Rust framework",
    "C++ framework",
    "Next.js projects",
    "backend systems",
    "developer tooling",
  ],
});

export default function ProjectsPage() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="bg-background text-foreground outline-none"
    >
      <ProjectsHero />
      <ProjectsCatalog />
    </main>
  );
}
