import { Cpu, Repeat, Router, Sprout, type LucideIcon } from 'lucide-react'
import { SectionHeading } from './section-heading'

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
            eyebrow="Arquitectura de solución"
            title="Topología de Red Descentralizada."
          />
          <p className="text-pretty leading-relaxed text-muted-foreground">
            El sistema convierte la red existente o punto de acceso a radiofrecuencia de baja
            frecuencia (LoRa 915 MHz / LoRaWAN). Mediante un microcontrolador Gateway ESP32-S3 que
            opera como puente (Bridge), emite y recibe órdenes a larga distancia hacia nodos de
            campo y repetidores distribuidos para eliminar las zonas de sombra digital en el
            predio.
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

        <div className="grid gap-4 md:grid-cols-2">
          <article className="flex flex-col gap-2 rounded-lg border border-border bg-card p-5 md:p-6">
            <h3 className="font-mono text-xs uppercase tracking-widest text-primary">
              ¿Por qué baja frecuencia?
            </h3>
            <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
              Los nodos utilizan ESP32-S3 como unidad de control y módulos LoRa de baja frecuencia
              para transmitir datos de sensores. Las señales de menor frecuencia tienen mayor
              longitud de onda, lo que favorece su penetración a través de vegetación, desniveles
              y otras obstrucciones del terreno.
            </p>
          </article>
          <article className="flex flex-col gap-2 rounded-lg border border-border bg-card p-5 md:p-6">
            <h3 className="font-mono text-xs uppercase tracking-widest text-primary">
              ¿Qué necesita internet?
            </h3>
            <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
              Solo la Estación AgroLink, ubicada donde ya existe conexión (por ejemplo, el hogar),
              necesita internet para sincronizar con el panel Blynk. Entre la estación, los
              repetidores y los nodos de campo, la comunicación es por radiofrecuencia LoRa y no
              depende de una conexión constante de alta velocidad ni de cobertura móvil.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
