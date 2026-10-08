import type { Metadata } from "next";

import { ProjectsCatalog } from "@/components/projects";
import { ProjectsHero } from "@/components/sections";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected software engineering projects by Justin Angelo Perez across frameworks, languages, full-stack systems, frontend, and backend development.",
};

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
