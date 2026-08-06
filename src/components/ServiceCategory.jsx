import Reveal from './motion/Reveal.jsx'
import SpotlightCard from './motion/SpotlightCard.jsx'
import CategoryBadge from './CategoryBadge.jsx'
import DotGrid from './DotGrid.jsx'
import { CATEGORY_THEME } from '../data/categoryTheme.js'

export default function ServiceCategory({ category, isLast }) {
  const theme = CATEGORY_THEME[category.id]

  return (
    <section
      id={category.id}
      className={`relative overflow-hidden mesh-navy py-16 text-cream md:py-[70px] ${isLast ? '' : 'border-b border-navy-line'}`}
    >
      <DotGrid id={`${category.id}-dot-grid`} className="text-cream/[0.045]" gap={26} dot={1.1} />
      <div className="container-content relative">
        <Reveal className="mb-9 flex items-start gap-5">
          <div className="relative h-16 w-16 shrink-0">
            <div className={theme.badgeText}>
              <CategoryBadge id={category.id} size={64} />
            </div>
            <span
              className={`absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full border bg-navy-deep font-mono text-[10px] font-bold shadow-sm ${theme.accentBorder} ${theme.badgeText}`}
            >
              {category.num}
            </span>
          </div>
          <div>
            <h2 className="font-display text-[26px] font-semibold text-cream">
              {category.title}
            </h2>
            <p className="mt-1.5 max-w-[560px] text-[14.5px] text-cream/70">
              {category.description}
            </p>
          </div>
        </Reveal>

        <div className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
          {category.services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 0.07}>
              <SpotlightCard
                spotlightColor={theme.spotlight}
                className="glass-dark card-lift flex h-full gap-5 rounded-md py-7 pl-6 pr-6"
              >
                {/* Garis aksen sebagai elemen flex biasa (bukan absolute)
                    supaya tidak pernah menabrak teks di sebelahnya. */}
                <span
                  className={`w-[3px] shrink-0 self-stretch rounded-full ${theme.accentBg} opacity-70`}
                  aria-hidden="true"
                />
                <div className="min-w-0">
                  <span className={`font-mono text-xs font-semibold ${theme.badgeText}`} aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-2.5 mb-2 text-[16.5px] font-semibold text-cream">
                    {service.title}
                  </h3>
                  <p className="text-[13.5px] leading-relaxed text-cream/70">
                    {service.description}
                  </p>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
