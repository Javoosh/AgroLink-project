import { Activity, Gauge, Router, type LucideIcon } from 'lucide-react'
import { SectionHeading } from './section-heading'

type Feature = {
  icon: LucideIcon
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: Router,
    title: 'Estación AgroLink',
    description:
      'Equipo de conexión intuitivo pensado para el agricultor, de baja fricción, que permite accionar el riego a distancia de forma intuitiva y sin requerir conocimientos técnicos avanzados.',
  },
  {
    icon: Activity,
    title: 'Telemetría Predial en Tiempo Real',
    description:
      'Captura continua de variables ambientales de suelo y despliegue de alertas mediante la plataforma IoT Blynk para la toma oportuna de decisiones.',
  },
  {
    icon: Gauge,
    title: 'Baja Latencia',
    description:
      'Comunicación de rápida respuesta para la conmutación y enclavamiento de actuadores en campo con alta confiabilidad.',
  },
]

export function Features() {
  return (
    <section
      id="funciones"
      aria-labelledby="funciones-title"
      className="border-b border-border py-20 md:py-28"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 md:px-6">
        <SectionHeading
          id="funciones-title"
          index="03"
          eyebrow="Prestaciones y funciones del sistema"
          title="Monitoreo Continuo y Control Remoto."
        />

        <ul className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
          {features.map(({ icon: Icon, title, description }, i) => (
            <li key={title} className="flex flex-col gap-5 bg-card p-6 md:p-8">
              <div className="flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  {`F.${String(i + 1).padStart(2, '0')}`}
                </span>
              </div>
              <h3 className="text-xl font-medium">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
