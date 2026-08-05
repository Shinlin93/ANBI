import { CATEGORIES } from '../data/categories.js'
import { CATEGORY_THEME } from '../data/categoryTheme.js'
import Reveal from './motion/Reveal.jsx'
import SpotlightCard from './motion/SpotlightCard.jsx'
import CategoryBadge from './CategoryBadge.jsx'

export default function PillarsOverview() {
  return (
    <section id="rincian-layanan" className="section-padding bg-cream" aria-labelledby="pillars-heading">
      <div className="container-content">
        <Reveal className="mb-12 max-w-[640px]">
          <span className="eyebrow">Rincian Layanan</span>
          <h2 id="pillars-heading" className="mt-3 font-display text-[32px] font-semibold text-navy-deep">
            Lima bidang layanan inti kami
          </h2>
          <p className="mt-3.5 text-[15.5px] text-ink/70">
            Setiap bidang layanan kami uraikan lebih detail di bawah —
            pilih kategori untuk melihat cakupan pekerjaannya.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat, i) => {
            const theme = CATEGORY_THEME[cat.id]
            return (
              <Reveal key={cat.id} delay={i * 0.08}>
                <SpotlightCard
                  as="a"
                  href={`#${cat.id}`}
                  spotlightColor={theme.spotlight}
                  className="card-lift group relative flex h-full flex-col overflow-hidden rounded-lg border border-cream-dim bg-white p-7 shadow-[0_1px_3px_rgba(15,23,42,0.05)]"
                >
                  <span
                    className={`absolute inset-x-0 top-0 h-[3px] scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${theme.accentBg}`}
                    aria-hidden="true"
                  />
                  <div className={theme.badgeText}>
                    <CategoryBadge id={cat.id} size={60} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-navy-deep">
                    {cat.name}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-ink/70">
                    {cat.description}
                  </p>

                  <ul className="mt-4 flex-1 space-y-1.5">
                    {cat.services.slice(0, 3).map((service) => (
                      <li key={service.title} className="flex items-start gap-2 text-[12.5px] text-ink/80">
                        <svg className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${theme.badgeText}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7 7a1 1 0 01-1.4 0l-3-3a1 1 0 111.4-1.4L9 11.6l6.3-6.3a1 1 0 011.4 0z" clipRule="evenodd" />
                        </svg>
                        {service.title}
                      </li>
                    ))}
                  </ul>

                  <span
                    className={`absolute bottom-5 right-5 flex h-8 w-8 items-center justify-center rounded-full bg-cream transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${theme.badgeText}`}
                    aria-hidden="true"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H8M17 7v9" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="sr-only">Lihat detail layanan {cat.name}</span>
                </SpotlightCard>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
