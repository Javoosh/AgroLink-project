import { SiteHeader } from '@/components/agrolink/site-header'
import { Hero } from '@/components/agrolink/hero'
import { Problem } from '@/components/agrolink/problem'
import { Architecture } from '@/components/agrolink/architecture'
import { Hardware } from '@/components/agrolink/hardware'
import { Contact } from '@/components/agrolink/contact'
import { SiteFooter } from '@/components/agrolink/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Problem />
        <Architecture />
        <Hardware />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
