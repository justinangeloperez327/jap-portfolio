import {
  HomeAboutPreview,
  HomeContactPreview,
  HomeHero,
  HomeProjectsPreview,
  HomeSkillsPreview,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <HomeHero />
      <HomeAboutPreview />
      <HomeSkillsPreview />
      <HomeProjectsPreview />
      <HomeContactPreview />
    </main>
  );
}
