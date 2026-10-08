import type { Metadata } from "next";

import { SkillsMotion } from "@/components/motion";
import {
  SkillsArchitecture,
  SkillsHero,
  SkillsIntroduction,
} from "@/components/sections";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Skills",
  description:
    "Skills and engineering capabilities of Justin Angelo Perez across software architecture, frameworks, full-stack development, and developer tooling.",
  path: "/skills",
  keywords: [
    "Rust",
    "C++",
    "C#",
    "TypeScript",
    "Next.js",
    "software architecture",
    "framework design",
    "compiler design",
  ],
});

export default function SkillsPage() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="bg-background text-foreground outline-none"
    >
      <SkillsHero />
      <SkillsMotion>
        <SkillsIntroduction />
        <SkillsArchitecture />
      </SkillsMotion>
    </main>
  );
}
