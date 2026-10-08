import type { Metadata } from "next";

import {
  HomeAboutPreview,
  HomeContactPreview,
  HomeHero,
  HomeProjectsPreview,
  HomeSkillsPreview,
} from "@/components/sections";
import { brand } from "@/data";

export const metadata: Metadata = {
  title: {
    absolute: `${brand.title} | ${brand.shortName}`,
  },
  description: brand.description,
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="bg-background text-foreground outline-none"
    >
      <HomeHero />
      <HomeAboutPreview />
      <HomeSkillsPreview />
      <HomeProjectsPreview />
      <HomeContactPreview />
    </main>
  );
}
