import type { ReactNode } from 'react'

type SectionHeadingProps = {
  index: string
  eyebrow: string
  title: ReactNode
  id: string
  description?: string
}

export function SectionHeading({ index, eyebrow, title, id, description }: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-3">
      <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-primary">
        <span>{index}</span>
        <span aria-hidden="true" className="h-px w-8 bg-primary/60" />
        <span>{eyebrow}</span>
      </p>
      <h2 id={id} className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">{description}</p>
      )}
    </div>
  )
}
