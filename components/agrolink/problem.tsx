import { AlertTriangle, ArrowRight, Clock, DatabaseZap, SignalLow, Wallet, type LucideIcon } from 'lucide-react'

type ProblemPoint = {
  icon: LucideIcon
  title: string
  description: string
}

const problems: ProblemPoint[] = [
  {
    icon: SignalLow,
    title: 'Cobertura limitada',
    description: 'El Wi-Fi de la casa no llega a los sectores alejados del predio.',
  },
  {
    icon: DatabaseZap,
    title: 'Información sin acción',
    description: 'Los datos de humedad o clima no se convierten en decisiones claras.',
  },
  {
    icon: Clock,
    title: 'Decisiones tardías o intuitivas',
    description: 'Se riega a ojo, con riesgo de desperdiciar agua o dañar el cultivo.',
  },
  {
    icon: Wallet,
    title: 'Soluciones poco accesibles',
    description: 'Las alternativas actuales son caras, difíciles de instalar o de usar.',
  },
]

export function Problem() {
  return (
    <section
      id="problema"
      aria-labelledby="problema-title"
      className="relative overflow-hidden border-b border-destructive/30 bg-destructive/5 py-20 md:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-destructive to-transparent"
      />
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 md:px-6">
        <div className="flex flex-col gap-5">
          <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-destructive">
            <AlertTriangle className="size-4" aria-hidden="true" />
            <span aria-hidden="true" className="h-px w-8 bg-destructive/60" />
            <span>Problemática</span>
          </p>
          <h2
            id="problema-title"
            className="text-balance text-3xl font-semibold tracking-tight md:text-4xl"
          >
            El problema del monitoreo agrícola tradicional
          </h2>
          <p className="max-w-3xl text-pretty leading-relaxed text-muted-foreground md:text-lg">
            Tener internet en la casa no significa tener control sobre todo el campo. En predios
            rurales, los sensores y cultivos suelen estar lejos de la vivienda, separados por
            cerros, hileras de vegetación, distancias extensas o zonas sin señal estable. Como
            resultado, la información llega incompleta, con retraso o simplemente no llega.
          </p>
        </div>

        <ul className="grid gap-px overflow-hidden rounded-xl border border-destructive/30 bg-destructive/30 sm:grid-cols-2">
          {problems.map(({ icon: Icon, title, description }, i) => (
            <li key={title} className="flex gap-5 bg-card p-6 md:p-8">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-md border border-destructive/40 bg-destructive/10 text-destructive">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-medium">{title}</h3>
                  <span className="font-mono text-xs text-destructive/80">
                    {`P.${String(i + 1).padStart(2, '0')}`}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="flex flex-col items-start gap-4 rounded-xl border border-border bg-card p-6 sm:flex-row sm:items-center sm:justify-between md:p-8">
          <p className="text-pretty text-lg font-medium">
            {'¿Le pasa esto en su predio? '}
            <span className="text-muted-foreground">Conversemos sin compromiso.</span>
          </p>
          <a
            href="#contacto"
            className="inline-flex h-11 shrink-0 items-center gap-2 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Solicitar evaluación
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
