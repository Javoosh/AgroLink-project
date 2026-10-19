import { GraduationCap, Headset, MapPinned, type LucideIcon } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { LeadForm } from './lead-form'

type Guarantee = {
  icon: LucideIcon
  title: string
  description: string
}

const guarantees: Guarantee[] = [
  {
    icon: MapPinned,
    title: 'Visita técnica al predio',
    description: 'Medimos la señal en terreno y diseñamos la red según tu topografía.',
  },
  {
    icon: GraduationCap,
    title: 'Capacitación en terreno',
    description: 'Te enseñamos a usar el panel y las alertas, al ritmo de tu equipo.',
  },
  {
    icon: Headset,
    title: 'Acompañamiento continuo',
    description: 'Soporte técnico directo después de la instalación, sin intermediarios.',
  },
]

export function Contact() {
  return (
    <section id="contacto" aria-labelledby="contacto-title" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div className="flex flex-col gap-10">
          <SectionHeading
            id="contacto-title"
            index="03"
            eyebrow="Comienza hoy"
            title="Lleva el control a todo tu campo."
            description="Cuéntanos sobre tu predio y te propondremos una solución a la medida. La evaluación inicial es gratuita."
          />

          <ul className="flex flex-col gap-5">
            {guarantees.map(({ icon: Icon, title, description }) => (
              <li key={title} className="flex gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary/15 text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div className="flex flex-col gap-1">
                  <p className="font-medium">{title}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <LeadForm />
      </div>
    </section>
  )
}
