import {
  Cpu,
  MousePointerClick,
  PiggyBank,
  Radio,
  Repeat,
  Router,
  Sprout,
  Workflow,
  type LucideIcon,
} from 'lucide-react'
import { SectionHeading } from './section-heading'

const benefits: { icon: LucideIcon; label: string }[] = [
  { icon: PiggyBank, label: 'Menores costos' },
  { icon: Radio, label: 'Mayor cobertura' },
  { icon: Workflow, label: 'Automatización' },
  { icon: MousePointerClick, label: 'Interfaz intuitiva' },
]

type Stage = {
  icon: LucideIcon
  label: string
  detail: string
}

type Link = {
  protocol: string
}

const stages: Stage[] = [
  { icon: Router, label: 'Internet + Blynk', detail: 'Red del hogar / panel IoT' },
  { icon: Cpu, label: 'Estación AgroLink', detail: 'Gateway ESP32-S3 (Bridge)' },
  { icon: Repeat, label: 'Repetidores', detail: 'Extensión de cobertura' },
  { icon: Sprout, label: 'Nodos de campo', detail: 'Sensores y actuadores' },
]

const links: Link[] = [
  { protocol: 'Wi-Fi 2.4 GHz' },
  { protocol: 'LoRa 915 MHz' },
  { protocol: 'LoRaWAN' },
]

function Connector({ protocol }: Link) {
  return (
    <div className="flex items-center gap-3 md:flex-1 md:flex-col md:justify-center md:gap-2">
      <div className="relative ml-6 h-10 w-px bg-primary/30 md:ml-0 md:h-px md:w-full">
        <span
          aria-hidden="true"
          className="animate-packet absolute top-1/2 hidden size-1.5 -translate-y-1/2 rounded-full bg-primary md:block"
        />
      </div>
      <span className="font-mono text-[11px] text-primary md:text-center">{protocol}</span>
    </div>
  )
}

function StageNode({ icon: Icon, label, detail }: Stage) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-3 md:w-40 md:flex-col md:p-4 md:text-center">
      <span className="flex size-12 shrink-0 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-primary">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <div className="flex flex-col gap-0.5">
        <span className="text-sm font-medium">{label}</span>
        <span className="text-xs text-muted-foreground">{detail}</span>
      </div>
    </div>
  )
}

export function Architecture() {
  return (
    <section
      id="arquitectura"
      aria-labelledby="arquitectura-title"
      className="border-b border-border py-20 md:py-28"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 md:items-end">
          <SectionHeading
            id="arquitectura-title"
            index="01"
            eyebrow="La solución"
            title="Nuestra Solución: AgroLink."
          />
          <p className="text-pretty leading-relaxed text-muted-foreground">
            Un sistema que envía información desde zonas alejadas del predio hasta una plataforma
            central. Allí, el agricultor puede visualizar el estado de sus cultivos, recibir
            alertas y controlar el riego desde una interfaz simple.
          </p>
        </div>

        <figure className="bg-grid rounded-xl border border-border bg-card/40 p-5 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center">
            {stages.map((stage, i) => (
              <div key={stage.label} className="contents">
                <StageNode {...stage} />
                {i < links.length && <Connector {...links[i]} />}
              </div>
            ))}
          </div>
          <figcaption className="mt-6 border-t border-border pt-4 font-mono text-xs text-muted-foreground">
            {'Flujo de comunicación: red del hogar → Estación AgroLink (Bridge) → repetidores → nodos de campo'}
          </figcaption>
        </figure>

        <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {benefits.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 md:p-5"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <span className="text-sm font-medium md:text-base">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
