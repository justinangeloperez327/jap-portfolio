import { CinematicMedia } from "@/components/media/cinematic-media";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <CinematicMedia
        alt="JAP Portfolio home artwork"
        label="Home artwork coming later"
        priority
        className="absolute inset-0"
      />

      <div className="cinematic-overlay-left absolute inset-0" />

      <section className="hero-height site-container relative z-20 flex items-center py-24">
        <div className="reading-width">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-muted-foreground">
            Portfolio
          </p>

          <h1 className="text-balance text-5xl font-semibold tracking-[-0.04em] sm:text-7xl">
            Justin Angelo Perez
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl">
            Building software, frameworks, and digital systems.
          </p>
        </div>
      </section>
    </main>
  );
}
