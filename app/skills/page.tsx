import type { Metadata } from "next";

import { SkillsMotion } from "@/components/motion";
import {
  SkillsArchitecture,
  SkillsHero,
  SkillsIntroduction,
} from "@/components/sections";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Skills and engineering capabilities of Justin Angelo Perez across software architecture, frameworks, full-stack development, and developer tooling.",
};

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
