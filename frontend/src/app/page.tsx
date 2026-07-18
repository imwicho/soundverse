export default function Home() {
  return (
    <main className="min-h-screen bg-background px-6 py-12 text-text-primary sm:px-10">
      <section className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold tracking-[0.18em] text-brand-secondary uppercase">
          SoundVerse
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Sistema visual inicial
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-text-secondary sm:text-lg">
          Una muestra temporal para validar colores, superficies, tipografía y
          estados de interacción.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-border-subtle bg-surface-1 p-5">
            <p className="text-sm font-semibold">Superficie 1</p>
            <p className="mt-2 text-sm leading-6 text-text-muted">
              Contenido principal sobre el fondo oscuro.
            </p>
          </div>
          <div className="rounded-lg border border-border-subtle bg-surface-2 p-5">
            <p className="text-sm font-semibold">Superficie 2</p>
            <p className="mt-2 text-sm leading-6 text-text-muted">
              Un nivel adicional de profundidad visual.
            </p>
          </div>
          <div className="rounded-lg border border-border-subtle bg-surface-3 p-5">
            <p className="text-sm font-semibold">Superficie 3</p>
            <p className="mt-2 text-sm leading-6 text-text-muted">
              Contraste gradual sin depender de sombras.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-border-subtle bg-surface-1 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Jerarquía y acciones
          </h2>
          <p className="mt-3 max-w-xl leading-7 text-text-secondary">
            El morado guía la acción principal; el naranja se reserva para
            acentos que aportan energía.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button className="min-h-11 rounded-md bg-brand-primary px-5 py-3 font-semibold text-background transition-colors hover:bg-brand-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring">
              Acción principal
            </button>
            <button className="min-h-11 rounded-md border border-border-subtle bg-surface-2 px-5 py-3 font-semibold text-text-primary transition-colors hover:bg-surface-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring">
              Acción secundaria
            </button>
          </div>
          <p className="mt-5 text-sm text-text-muted">
            Usa la tecla Tab para comprobar el foco visible de ambos botones.
          </p>
        </div>
      </section>
    </main>
  );
}
