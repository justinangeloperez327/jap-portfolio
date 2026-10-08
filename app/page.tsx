import { CinematicMedia } from "@/components/media/cinematic-media";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <CinematicMedia
        alt="JAP Portfolio home artwork"
        label="Home artwork coming later"
        priority
        className="layer-background absolute inset-0"
      />

      <div className="cinematic-overlay-left layer-atmosphere absolute inset-0" />

      <section className="hero-height site-container layer-content relative flex items-center py-24">
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
      </section>
    </main>
  );
}
