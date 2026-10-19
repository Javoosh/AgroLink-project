import Image from 'next/image'
import {
  Activity,
  BatteryFull,
  CircuitBoard,
  ExternalLink,
  Hand,
  Radio,
  Router,
  Smartphone,
  Wrench,
  type LucideIcon,
} from 'lucide-react'
import { SectionHeading } from './section-heading'

type Item = {
  icon: LucideIcon
  title: string
  description: string
}

const equipment: Item[] = [
  {
    icon: Router,
    title: 'Estación AgroLink',
    description: 'Se conecta al Wi-Fi de la casa y lleva la señal hasta el campo.',
  },
  {
    icon: Radio,
    title: 'Nodo de campo',
    description: 'Mide la humedad del suelo y abre o cierra la válvula de riego.',
  },
  {
    icon: Activity,
    title: 'Monitoreo y alertas',
    description: 'Lecturas en tiempo real y control remoto del riego desde el celular.',
  },
  {
    icon: BatteryFull,
    title: 'Autonomía en terreno',
    description: 'Gabinete resistente al clima, baterías propias y antena de largo alcance.',
  },
]

const noDisruption: Item[] = [
  {
    icon: Wrench,
    title: 'Sin obras ni cortes',
    description:
      'Los nodos se acoplan a las válvulas y mangueras existentes. El riego sigue funcionando durante la instalación.',
  },
  {
    icon: Hand,
    title: 'El control manual se mantiene',
    description:
      'Si lo prefiere, el agricultor puede seguir regando como siempre. AgroLink suma información, no reemplaza su forma de trabajar.',
  },
  {
    icon: Smartphone,
    title: 'Listo para usar',
    description:
      'Un panel simple en el celular, sin capacitaciones largas ni equipos adicionales que operar.',
  },
]

const simulations = [
  { label: 'Circuito 01', href: 'https://wokwi.com/projects/478257026964389889' },
  { label: 'Circuito 02', href: 'https://wokwi.com/projects/477164042464801793' },
]

export function Hardware() {
  return (
    <section
      id="hardware"
      aria-labelledby="hardware-title"
      className="border-b border-border py-20 md:py-28"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 md:px-6">
        <div className="flex flex-col gap-4">
          <SectionHeading
            id="hardware-title"
            index="02"
            eyebrow="Equipos e implementación"
            title="Tecnología simple que se suma a su día a día."
          />
          <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            Pocos equipos, instalación rápida y control desde el celular, sin detener las
            labores del predio.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-5">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border lg:col-span-2 lg:aspect-auto">
            <Image
              src="/images/nodo-campo.png"
              alt="Representación de un nodo de campo en gabinete estanco con microcontrolador, módulo de radio, baterías y antena."
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-4">
              <p className="font-mono text-xs text-primary">{'// Imagen referencial'}</p>
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:col-span-3">
            <ul className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
              {equipment.map(({ icon: Icon, title, description }) => (
                <li key={title} className="flex flex-col gap-3 bg-card p-5">
                  <span className="flex size-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <h3 className="font-medium">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-5 rounded-xl border border-primary/30 bg-primary/5 p-5 md:p-6">
              <h3 className="text-lg font-semibold">
                <span className="text-primary">Sin interrupciones:</span> su operación diaria
                sigue igual
              </h3>
              <ul className="flex flex-col gap-4">
                {noDisruption.map(({ icon: Icon, title, description }) => (
                  <li key={title} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-md border border-primary/30 bg-background text-primary">
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                    <div className="flex flex-col gap-1">
                      <p className="font-medium">{title}</p>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 rounded-xl border border-border bg-card p-5 md:flex-row md:items-center md:justify-between md:p-6">
          <div className="flex items-start gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-primary">
              <CircuitBoard className="size-5" aria-hidden="true" />
            </span>
            <div className="flex flex-col gap-1">
              <h3 className="font-medium">Estructura del microcontrolador</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Explore los circuitos de AgroLink en simulaciones interactivas de Wokwi.
              </p>
            </div>
          </div>
          <ul className="flex flex-col gap-3 sm:flex-row">
            {simulations.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-md border border-primary/40 px-4 text-sm font-medium text-primary transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {label}
                  <ExternalLink className="size-4" aria-hidden="true" />
                  <span className="sr-only">(abre Wokwi en una pestaña nueva)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
