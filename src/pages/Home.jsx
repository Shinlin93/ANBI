import Hero from '../components/Hero.jsx'
import ClientLogos from '../components/ClientLogos.jsx'
import PillarsOverview from '../components/PillarsOverview.jsx'
import ServiceCategory from '../components/ServiceCategory.jsx'
import Advantages from '../components/Advantages.jsx'
import Pricing from '../components/Pricing.jsx'
import OneTimeServices from '../components/OneTimeServices.jsx'
import Process from '../components/Process.jsx'
import SecondaryCTA from '../components/SecondaryCTA.jsx'
import Contact from '../components/Contact.jsx'
import { CATEGORIES } from '../data/categories.js'

export default function Home() {
  return (
    <>
      {/* 1. Hero — badge, two-tone headline, hero image + floating category chips */}
      <Hero />

      {/* 2. Trust strip — client logo row */}
      <ClientLogos />

      {/* 3. Pillars — high-level summary cards linking to detailed sections below */}
      <PillarsOverview />

      {/* 4. Full detail per category (anchors targeted by Pillars + Navbar) */}
      {CATEGORIES.map((category, i) => (
        <ServiceCategory
          key={category.id}
          category={category}
          isLast={i === CATEGORIES.length - 1}
        />
      ))}

      {/* 5. Dark feature/advantages section with map background */}
      <Advantages />

      {/* 6. Pricing + one-time services + process */}
      <Pricing />
      <OneTimeServices />
      <Process />

      {/* 7. Secondary circular-graphic CTA before final contact */}
      <SecondaryCTA />

      {/* 8. Contact — CTA band + working form */}
      <Contact />
    </>
  )
}
