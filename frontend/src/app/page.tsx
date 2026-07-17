export default function Home() {
  return (
    <main className="min-h-screen bg-violet-950 px-6 py-10 text-white sm:px-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-16">
        <header className="flex items-center justify-between">
          <p className="text-xl font-semibold tracking-tight">SoundVerse</p>
          <span className="rounded-full border border-violet-300/40 px-3 py-1 text-sm text-violet-100">
            Música y emociones
          </span>
        </header>

        <section className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-medium tracking-[0.2em] text-violet-200 uppercase">
              Tu espacio musical
            </p>
            <h1 className="max-w-xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Tu música cuenta tu historia.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-violet-100">
              Expresa lo que sientes, guarda los recuerdos que viven en una
              canción y conecta con personas que escuchan el mundo como tú.
            </p>
            <button className="mt-8 rounded-full bg-white px-6 py-3 font-medium text-violet-950 transition-colors hover:bg-violet-100">
              Explorar emociones
            </button>
          </div>

          <article className="rounded-3xl bg-white p-6 text-violet-950 shadow-2xl shadow-violet-950/40 sm:p-8">
            <p className="text-sm font-medium text-violet-600">Ahora suena</p>
            <div className="mt-6 flex items-center gap-4">
              <div className="flex size-16 items-center justify-center rounded-2xl bg-violet-200 text-2xl">
                ♫
              </div>
              <div>
                <h2 className="text-xl font-semibold">Midnight City</h2>
                <p className="text-violet-700">M83</p>
              </div>
            </div>
            <div className="mt-8 border-t border-violet-100 pt-6">
              <span className="rounded-full bg-violet-100 px-3 py-1 text-sm font-medium text-violet-700">
                Nostalgia
              </span>
              <p className="mt-4 text-lg leading-7 text-violet-900">
                “Hay canciones que guardan una versión de nosotros que todavía
                queremos recordar.”
              </p>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
