import { PageHero } from "@/components/media";
import { artwork } from "@/data";

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <PageHero artwork={artwork.home} priority>
        <div className="reading-width">
          <p className="mb-5 text-label font-medium uppercase text-muted-foreground">
            Portfolio
          </p>

          <h1 className="text-balance text-hero font-semibold">
            Justin Angelo Perez
          </h1>

          <p className="mt-6 max-w-xl text-body-lg text-muted-foreground">
            Building software, frameworks, and digital systems.
          </p>
        </div>
      </PageHero>
    </main>
  );
}
