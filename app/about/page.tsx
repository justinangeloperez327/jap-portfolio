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
    <main className="bg-background text-foreground">
      <AboutHero />
      <AboutContent />
    </main>
  );
}
