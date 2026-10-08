import { CinematicMedia } from "@/components/media/cinematic-media";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <CinematicMedia
        alt="JAP Portfolio home artwork"
        label="Home artwork coming later"
        priority
        className="absolute inset-0"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />

      <section className="relative z-10 flex min-h-screen items-center px-6 py-24 sm:px-10 lg:px-16">
        <div className="max-w-2xl">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-white/55">
            Portfolio
          </p>

          <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
            Justin Angelo Perez
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-white/65 sm:text-xl">
            Building software, frameworks, and digital systems.
          </p>
        </div>
      </section>
    </main>
  );
}
