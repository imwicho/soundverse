import { MoodSelector } from "@/components/MoodSelector";
import { featuredMoment, moods } from "@/data/home";

export default function Home() {
  return (
    <section className="mx-auto max-w-4xl">
      <header>
        <p className="text-sm font-semibold tracking-[0.18em] text-brand-secondary uppercase">
          SoundVerse
        </p>
        <p className="mt-6 text-lg text-text-secondary">
          Hola, qué bueno encontrarte hoy.
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
          Tu espacio de hoy
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-7 text-text-secondary">
          Detente un momento y elige cómo quieres habitar tu música hoy.
        </p>
      </header>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold tracking-tight">
          ¿Cómo te sientes hoy?
        </h2>
        <MoodSelector moods={moods} />
      </div>

      <section
        aria-labelledby="featured-moment-title"
        className="mt-12 grid gap-6 rounded-xl border border-border-subtle bg-surface-1 p-6 sm:p-8 md:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)]"
      >
        <div
          aria-label={featuredMoment.coverDescription}
          className="relative aspect-square overflow-hidden rounded-lg border border-border-subtle bg-surface-3"
          role="img"
        >
          <div className="absolute inset-6 rounded-full bg-brand-primary opacity-80" />
          <div className="absolute right-6 bottom-6 size-20 rounded-full bg-brand-secondary opacity-80" />
          <div className="absolute inset-0 bg-surface-1/20" />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold text-brand-secondary">
            Momento destacado
          </p>
          <h2
            className="mt-3 text-3xl font-bold tracking-tight"
            id="featured-moment-title"
          >
            {featuredMoment.title}
          </h2>
          <p className="mt-1 text-lg text-text-secondary">
            {featuredMoment.artist}
          </p>
          <p className="mt-5 inline-flex w-fit rounded-full border border-border-subtle bg-surface-2 px-3 py-1 text-sm font-semibold text-text-primary">
            {featuredMoment.mood}
          </p>
          <p className="mt-5 max-w-xl leading-7 text-text-secondary">
            “{featuredMoment.reflection}”
          </p>
          <button
            className="mt-8 min-h-11 w-full rounded-md bg-brand-primary px-5 py-3 font-semibold text-background transition-colors hover:bg-brand-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring sm:w-fit"
            type="button"
          >
            Guardar este momento
          </button>
        </div>
      </section>
    </section>
  );
}
