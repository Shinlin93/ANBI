import Reveal from './motion/Reveal.jsx'
import SpotlightCard from './motion/SpotlightCard.jsx'
import CategoryBadge from './CategoryBadge.jsx'
import { CATEGORY_THEME } from '../data/categoryTheme.js'

export default function ServiceCategory({ category, isLast }) {
  const theme = CATEGORY_THEME[category.id]

  return (
    <section
      id={category.id}
      className={`${theme.sectionTint} py-16 md:py-[70px] ${isLast ? '' : 'border-b border-cream-dim'}`}
    >
      <div className="container-content">
        <Reveal className="mb-9 flex items-start gap-5">
          <div className="relative h-16 w-16 shrink-0">
            <div className={theme.badgeText}>
              <CategoryBadge id={category.id} size={64} />
            </div>
            <span
              className={`absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full border bg-white font-mono text-[10px] font-bold shadow-sm ${theme.accentBorder} ${theme.badgeText}`}
            >
              {category.num}
            </span>
          </div>
          <div>
            <h2 className="font-display text-[26px] font-semibold text-navy-deep">
              {category.title}
            </h2>
            <p className="mt-1.5 max-w-[560px] text-[14.5px] text-ink/70">
              {category.description}
            </p>
          </div>
        </Reveal>

        <div className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
          {category.services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 0.07}>
              <SpotlightCard
                spotlightColor={theme.spotlight}
                className="card-lift relative h-full overflow-hidden rounded-md border border-cream-dim bg-white px-[22px] py-6"
              >
                <span
                  className={`absolute left-0 top-0 h-full w-[3px] ${theme.accentBg} opacity-70`}
                  aria-hidden="true"
                />
                <span className={`font-mono text-xs font-semibold ${theme.badgeText}`} aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-2.5 mb-2 text-[16.5px] font-semibold text-navy-deep">
                  {service.title}
                </h3>
                <p className="text-[13.5px] leading-relaxed text-ink/70">
                  {service.description}
                </p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
