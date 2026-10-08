import {
  HomeAboutPreview,
  HomeHero,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <HomeHero />
      <HomeAboutPreview />
    </main>
  );
}
