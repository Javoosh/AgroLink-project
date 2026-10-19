import { BarChart3, GraduationCap, Network, Wrench, type LucideIcon } from 'lucide-react'
import { SectionHeading } from './section-heading'

type Service = {
  icon: LucideIcon
  tag: string
  title: string
  description: string
}

const services: Service[] = [
  {
    icon: BarChart3,
    tag: 'Data-Driven',
    title: 'Servicios Informativos',
    description: 'Visualización continua de telemetría y alertas tempranas mediante la plataforma IoT Blynk.',
  },
  {
    icon: Wrench,
    tag: 'Field Action',
    title: 'Servicios Operativos',
    description: 'Automatización física en terreno para la apertura y cierre de válvulas de riego.',
  },
  {
    icon: GraduationCap,
    tag: 'KIAS',
    title: 'Servicios de Consultoría',
    description:
      'Levantamiento de señal en terreno, diseño de la topología de red y capacitación práctico-técnica para asegurar la correcta adopción por parte del productor.',
  },
  {
    icon: Network,
    tag: 'Platform',
    title: 'Ecosistema Abierto',
    description:
      'Plataforma escalable que permite integrar a futuro nuevos sensores o actuadores de terceros bajo el mismo Gateway centralizado.',
  },
]

export function Services() {
  return (
    <section id="servicios" aria-labelledby="servicios-title" className="py-20 md:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 md:px-6">
        <SectionHeading
          id="servicios-title"
          index="04"
          eyebrow="Servicios Agrotech y ecosistema"
          title="Modelo Integral de Servicios."
        />

        <ul className="grid gap-4 sm:grid-cols-2">
          {services.map(({ icon: Icon, tag, title, description }) => (
            <li
              key={title}
              className="relative flex flex-col gap-4 overflow-hidden rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40 md:p-8"
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"
              />
              <div className="flex items-center justify-between gap-4">
                <span className="flex size-11 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="rounded-full border border-border px-2.5 py-0.5 font-mono text-xs text-muted-foreground">
                  {tag}
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
