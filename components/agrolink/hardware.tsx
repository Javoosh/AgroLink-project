import Image from 'next/image'
import { BatteryFull, Cpu, Radio, type LucideIcon } from 'lucide-react'
import { SectionHeading } from './section-heading'

type Component = {
  icon: LucideIcon
  code: string
  title: string
  description: string
  specs: string[]
}

const components: Component[] = [
  {
    icon: Cpu,
    code: 'GW-01',
    title: 'Estación AgroLink (Gateway ESP32-S3)',
    description:
      'Procesa la lógica central, se conecta a internet para enlazarse con la plataforma IoT Blynk y empaqueta las tramas de comunicación LoRa hacia el campo.',
    specs: ['Wi-Fi 2.4 GHz', 'Blynk IoT', 'Tramas LoRa'],
  },
  {
    icon: Radio,
    code: 'ND-02',
    title: 'Nodo de Campo Receptor',
    description:
      'Integra transceptores LoRaWAN, sensor de humedad de suelo y módulos de relé/servomotores para el accionamiento mecánico y control de válvulas de riego.',
    specs: ['LoRaWAN 915 MHz', 'Sensor capacitivo v1.2', 'Relé / servomotor'],
  },
  {
    icon: BatteryFull,
    code: 'PR-03',
    title: 'Protección y Autonomía',
    description:
      'Ensamblaje en gabinetes estancos, baterías y antenas omnidireccionales de alta ganancia adaptadas a la topografía agrícola real.',
    specs: ['Gabinete IP65', 'Baterías 18650', 'Antena omnidireccional'],
  },
]

export function Hardware() {
  return (
    <section
      id="hardware"
      aria-labelledby="hardware-title"
      className="border-b border-border py-20 md:py-28"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 md:px-6">
        <SectionHeading
          id="hardware-title"
          index="02"
          eyebrow="Tecnología de campo y hardware"
          title="Componentes de Ingeniería en Terreno."
        />

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

          <ul className="flex flex-col gap-4 lg:col-span-3">
            {components.map(({ icon: Icon, code, title, description, specs }) => (
              <li
                key={code}
                className="group flex flex-col gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40 md:p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-lg font-medium">{title}</h3>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">{code}</span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
                <ul className="flex flex-wrap gap-2" aria-label={`Especificaciones de ${title}`}>
                  {specs.map((spec) => (
                    <li
                      key={spec}
                      className="rounded border border-primary/25 bg-primary/5 px-2 py-0.5 font-mono text-xs text-primary"
                    >
                      {spec}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
