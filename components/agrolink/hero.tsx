import Image from 'next/image'
import { ArrowRight, Mountain, Workflow } from 'lucide-react'

const highlights = [
  {
    icon: Mountain,
    title: 'Llega donde la señal no llega',
    text: 'Señal de baja frecuencia que atraviesa vegetación, desniveles y otras obstrucciones del terreno.',
  },
  {
    icon: Workflow,
    title: 'Automatización accesible',
    text: 'Humedad, clima y estado del riego en un panel simple. En el campo, los nodos siguen comunicándose por LoRa aunque no haya señal móvil.',
  },
]

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden border-b border-border"
    >
      <Image
        src="/images/campo-nocturno.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover opacity-25"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-background/70 via-background/85 to-background"
      />
      <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10 opacity-60" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-16 md:px-6 md:pb-24 md:pt-24 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
        <div className="flex flex-col gap-8">
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
            <span className="relative flex size-2">
              <span className="animate-signal absolute inline-flex size-full rounded-full bg-primary" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Proyecto de innovación en ingeniería y ciencias
          </p>

          <h1
            id="hero-title"
            className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.4rem]"
          >
            Automatiza, controla y optimiza tu campo{' '}
            <span className="text-primary">hasta donde no llega la señal.</span>
          </h1>

          <ul className="flex flex-col gap-4">
            {highlights.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-4">
                <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-md bg-primary/15 text-primary">
                  <Icon className="size-4" aria-hidden="true" />
                </span>
                <div className="flex flex-col gap-1">
                  <h2 className="font-medium">{title}</h2>
                  <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                    {text}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contacto"
              className="glow-primary group inline-flex items-center justify-center gap-3 rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Solicitar una demostración
              <ArrowRight
                className="size-5 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
            <a
              href="#arquitectura"
              className="inline-flex items-center justify-center px-2 py-2 text-sm font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
            >
              Descubre cómo funciona
            </a>
          </div>

          <ul className="flex flex-wrap gap-2 font-mono text-xs text-muted-foreground">
            {['LoRa 915 MHz', 'LoRaWAN', 'ESP32-S3', 'Blynk IoT', 'IP65'].map((tag) => (
              <li key={tag} className="rounded border border-border bg-background/60 px-2.5 py-1">
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <figure className="relative">
          <div
            aria-hidden="true"
            className="absolute -inset-4 -z-10 rounded-2xl bg-primary/10 blur-2xl"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-primary/30 bg-card shadow-2xl sm:aspect-[4/3] lg:aspect-[4/5]">
            <Image
              src="/images/nodo-campo.png"
              alt="Nodo de campo AgroLink instalado en el predio con antena LoRa y gabinete estanco"
              fill
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/90 to-transparent"
            />
            <figcaption className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-lg border border-border bg-background/80 px-4 py-3 backdrop-blur-sm">
              <span className="relative flex size-2.5 shrink-0">
                <span className="animate-signal absolute inline-flex size-full rounded-full bg-primary" />
                <span className="relative inline-flex size-2.5 rounded-full bg-primary" />
              </span>
              <span className="font-mono text-xs text-foreground/90">
                Nodo de campo · LoRa 915 MHz · Gabinete IP65
              </span>
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  )
}
