'use server'

import { z } from 'zod'
import { db } from '@/lib/db'
import { leads } from '@/lib/db/schema'

export type LeadFormState = {
  status: 'idle' | 'success' | 'error'
  message?: string
  fieldErrors?: Partial<Record<'name' | 'contact' | 'location' | 'cropType' | 'hectares', string>>
}

const optionalText = z
  .string()
  .trim()
  .max(80)
  .transform((value) => (value === '' ? null : value))

const leadSchema = z.object({
  name: z.string().trim().min(2, 'Ingresa tu nombre.').max(120),
  contact: z
    .string()
    .trim()
    .min(6, 'Ingresa un correo o teléfono.')
    .max(120)
    .refine(
      (value) => z.email().safeParse(value).success || /^\+?[\d\s()-]{8,20}$/.test(value),
      'Ingresa un correo o teléfono válido.',
    ),
  location: z.string().trim().min(2, 'Indica la comuna o región.').max(120),
  cropType: optionalText,
  hectares: z
    .string()
    .trim()
    .transform((value) => (value === '' ? null : Number(value.replace(',', '.'))))
    .refine((value) => value === null || (Number.isFinite(value) && value > 0 && value < 100000), {
      message: 'Ingresa un número válido de hectáreas.',
    }),
})

export async function submitLead(_prev: LeadFormState, formData: FormData): Promise<LeadFormState> {
  const parsed = leadSchema.safeParse({
    name: formData.get('name') ?? '',
    contact: formData.get('contact') ?? '',
    location: formData.get('location') ?? '',
    cropType: formData.get('cropType') ?? '',
    hectares: formData.get('hectares') ?? '',
  })

  if (!parsed.success) {
    const fieldErrors: LeadFormState['fieldErrors'] = {}
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof NonNullable<LeadFormState['fieldErrors']>
      fieldErrors[key] ??= issue.message
    }
    return { status: 'error', message: 'Revisa los campos marcados.', fieldErrors }
  }

  const { hectares, ...rest } = parsed.data

  try {
    await db.insert(leads).values({ ...rest, hectares: hectares === null ? null : hectares.toFixed(2) })
  } catch {
    return { status: 'error', message: 'No pudimos enviar tu solicitud. Intenta nuevamente.' }
  }

  return {
    status: 'success',
    message: '¡Gracias! Te contactaremos dentro de las próximas 48 horas para coordinar una visita.',
  }
}
