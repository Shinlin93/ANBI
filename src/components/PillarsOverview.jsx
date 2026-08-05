import { CATEGORIES } from '../data/categories.js'
import { CATEGORY_THEME } from '../data/categoryTheme.js'
import Reveal from './motion/Reveal.jsx'
import SpotlightCard from './motion/SpotlightCard.jsx'
import ImagePlaceholder from './ImagePlaceholder.jsx'

export default function PillarsOverview() {
  return (
    <section id="layanan" className="section-padding bg-cream" aria-labelledby="pillars-heading">
      <div className="container-content">
        <Reveal className="mb-12 max-w-[640px]">
          <span className="eyebrow">Layanan Kami</span>
          <h2 id="pillars-heading" className="mt-3 font-display text-[32px] font-semibold text-navy-deep">
            Lima bidang layanan inti kami
          </h2>
          <p className="mt-3.5 text-[15.5px] text-ink/70">
            Solusi satu pintu untuk kebutuhan legalitas dan administrasi
            bisnis Anda — dari pendirian usaha hingga kepatuhan pajak dan
            ketenagakerjaan.
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
                  className="card-lift group relative flex h-full flex-col rounded-lg border border-cream-dim bg-white p-7"
                >
                  <div className={`h-14 w-14 overflow-hidden rounded-md ${theme.badgeBg}`}>
                    <ImagePlaceholder
                      assetKey={`pillar-logo-${cat.id}`}
                      alt=""
                      className="rounded-md border-none bg-transparent p-2"
                    />
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
