import type { Metadata } from "next";

import {
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
    <main className="bg-background text-foreground">
      <SkillsHero />
      <SkillsIntroduction />
    </main>
  );
}
