import { RadioTower } from 'lucide-react'

const members = [
  'Nicolás Sanhueza V.',
  'Martín Munizaga J.',
  'Agustín Villegas P.',
  'Javier Vega S.',
  'Javier Cuevas D.',
]

export function SiteFooter() {
  return (
    <footer id="contacto" className="scroll-mt-20 border-t border-border bg-card/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 md:flex-row md:items-start md:justify-between md:px-6">
        <div className="flex flex-col gap-3">
          <p className="flex items-center gap-2 font-semibold">
            <RadioTower className="size-4 text-primary" aria-hidden="true" />
            AgroLink
          </p>
          <p className="max-w-xs text-sm text-muted-foreground">
            Proyecto de innovación en ingeniería y ciencias · CD1201-17 Spring 2026
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Equipo 13</p>
          <ul className="grid grid-cols-1 gap-x-8 gap-y-1 text-sm text-muted-foreground sm:grid-cols-2">
            {members.map((member) => (
              <li key={member}>{member}</li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
