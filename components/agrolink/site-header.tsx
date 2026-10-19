import { RadioTower } from 'lucide-react'

const links = [
  { href: '#problema', label: 'Problema' },
  { href: '#arquitectura', label: 'Arquitectura' },
  { href: '#hardware', label: 'Implementación' },
  { href: '#servicios', label: 'Servicios' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <a href="#inicio" className="flex items-center gap-2 font-semibold">
          <span className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <RadioTower className="size-4" aria-hidden="true" />
          </span>
          <span>
            AgroLink
            <span className="ml-2 hidden font-mono text-xs font-normal text-muted-foreground sm:inline">
              Agrotech LoRa
            </span>
          </span>
        </a>
        <nav aria-label="Secciones">
          <ul className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-primary">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="#arquitectura"
          className="rounded-md border border-primary/40 px-3 py-1.5 font-mono text-xs text-primary transition-colors hover:bg-primary hover:text-primary-foreground md:hidden"
        >
          Explorar
        </a>
      </div>
    </header>
  )
}
