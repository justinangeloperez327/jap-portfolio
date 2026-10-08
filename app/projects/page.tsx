import type { Metadata } from "next";

import {
  ProjectsCatalogIntro,
  ProjectsFeatured,
  ProjectsHero,
} from "@/components/sections";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected software engineering projects by Justin Angelo Perez across frameworks, languages, full-stack systems, frontend, and backend development.",
};

export default function ProjectsPage() {
  return (
    <main className="bg-background text-foreground">
      <ProjectsHero />
      <ProjectsCatalogIntro />
      <ProjectsFeatured />
    </main>
  );
}
