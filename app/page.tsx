import {
  HomeAboutPreview,
  HomeContactPreview,
  HomeHero,
  HomeProjectsPreview,
  HomeSkillsPreview,
} from "@/components/sections";

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
