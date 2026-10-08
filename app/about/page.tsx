import type { Metadata } from "next";

import {
  AboutContent,
  AboutHero,
} from "@/components/sections";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description:
    "About Justin Angelo Perez — software engineer, framework builder, and systems thinker.",
  path: "/about",
  keywords: [
    "Justin Angelo Perez",
    "software engineer",
    "framework builder",
    "software architecture",
  ],
});

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
