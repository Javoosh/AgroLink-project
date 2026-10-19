'use client'

import { useActionState } from 'react'
import { CheckCircle2, Loader2, Send } from 'lucide-react'
import { submitLead, type LeadFormState } from '@/app/actions/leads'
import { cn } from '@/lib/utils'

const initialState: LeadFormState = { status: 'idle' }

type FieldProps = {
  id: keyof NonNullable<LeadFormState['fieldErrors']>
  label: string
  placeholder: string
  optional?: boolean
  type?: string
  inputMode?: 'text' | 'decimal'
  autoComplete?: string
  error?: string
  className?: string
}

function Field({ id, label, placeholder, optional, type = 'text', inputMode, autoComplete, error, className }: FieldProps) {
  const errorId = `${id}-error`
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <label htmlFor={id} className="text-sm font-medium">
        {label}
        {optional && <span className="ml-1.5 font-normal text-muted-foreground">(opcional)</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        inputMode={inputMode}
        autoComplete={autoComplete}
        placeholder={placeholder}
        required={!optional}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className="h-11 rounded-md border border-input bg-background px-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-primary/25 aria-invalid:border-destructive"
      />
      {error && (
        <p id={errorId} className="text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  )
}

export function LeadForm() {
  const [state, formAction, pending] = useActionState(submitLead, initialState)

  if (state.status === 'success') {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-4 rounded-xl border border-primary/40 bg-primary/10 p-10 text-center"
      >
        <CheckCircle2 className="size-10 text-primary" aria-hidden="true" />
        <p className="text-lg font-medium">Solicitud recibida</p>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">{state.message}</p>
      </div>
    )
  }

  const errors = state.fieldErrors ?? {}

  return (
    <form action={formAction} noValidate className="flex flex-col gap-5 rounded-xl border border-border bg-card p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Nombre" placeholder="Juan Pérez" autoComplete="name" error={errors.name} className="sm:col-span-2" />
        <Field
          id="contact"
          label="Correo o teléfono"
          placeholder="juan@correo.cl o +56 9 1234 5678"
          autoComplete="email"
          error={errors.contact}
        />
        <Field id="location" label="Ubicación del predio" placeholder="Comuna, región" error={errors.location} />
        <Field id="cropType" label="Tipo de cultivo" placeholder="Viñedo, frutales, hortalizas…" optional error={errors.cropType} />
        <Field id="hectares" label="Hectáreas" placeholder="Ej: 12" inputMode="decimal" optional error={errors.hectares} />
      </div>

      {state.status === 'error' && state.message && (
        <p role="alert" className="text-sm text-destructive">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 font-medium text-primary-foreground transition-colors hover:bg-primary/85 disabled:opacity-60"
      >
        {pending ? (
          <Loader2 className="size-4 animate-spin" aria-hidden="true" />
        ) : (
          <Send className="size-4" aria-hidden="true" />
        )}
        {pending ? 'Enviando…' : 'Solicitar evaluación gratuita'}
      </button>
      <p className="text-center text-xs text-muted-foreground">Sin compromiso. Te respondemos en menos de 48 horas.</p>
    </form>
  )
}
