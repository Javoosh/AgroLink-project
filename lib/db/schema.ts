import { numeric, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'

export const leads = pgTable('leads', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  contact: text('contact').notNull(),
  location: text('location').notNull(),
  cropType: text('crop_type'),
  hectares: numeric('hectares', { precision: 10, scale: 2 }),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
})
