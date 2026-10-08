import type { Metadata } from "next";

import {
  AboutContent,
  AboutHero,
} from "@/components/sections";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Justin Angelo Perez — software engineer, framework builder, and systems thinker.",
};

export default function AboutPage() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="bg-background text-foreground outline-none"
    >
      <AboutHero />
      <AboutContent />
    </main>
  );
}
