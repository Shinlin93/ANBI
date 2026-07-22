import { motion } from 'framer-motion'
import ImagePlaceholder from './ImagePlaceholder.jsx'
import Reveal from './motion/Reveal.jsx'
import SplitText from './motion/SplitText.jsx'
import MagneticButton from './motion/MagneticButton.jsx'
import CountUp from './motion/CountUp.jsx'
import { COMPANY } from '../data/company.js'
import { CATEGORY_THEME } from '../data/categoryTheme.js'
import { WA_LINK } from '../utils/whatsapp.js'

const FLOATING_CARDS = [
  {
    id: 'akuntansi',
    label: 'Akuntansi',
    position: 'right-[-14px] top-6 sm:right-[-24px]',
    floatClass: 'animate-float-slow',
    icon: (
      <path d="M4 19V10M10 19V5M16 19v-7M20 19H4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    id: 'pajak',
    label: 'Perpajakan',
    position: 'left-[-14px] top-[38%] sm:left-[-28px]',
    floatClass: 'animate-float-slow-reverse',
    icon: (
      <path d="M14.7 6.3a1 1 0 010 1.4L12.4 10l4.9 4.9a3 3 0 11-4.2 4.2L8.2 14.2l-2.3 2.3a1 1 0 01-1.4-1.4l2.3-2.3-1-1a3 3 0 013-3l1 1 2.3-2.3a1 1 0 011.4 0z" fill="currentColor" strokeWidth="0" />
    ),
  },
  {
    id: 'legalitas',
    label: 'Legalitas',
    position: 'right-[-10px] bottom-4 sm:right-[-20px]',
    floatClass: 'animate-float-slow',
    icon: (
      <path d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden mesh-navy py-20 text-cream md:py-24">
      {/* Ambient floating background blobs */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] animate-float-slow rounded-full border border-gold-soft/[0.18]" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-16 -top-16 h-[420px] w-[420px] animate-float-slow-reverse rounded-full border border-gold-soft/[0.12]" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-24 bottom-[-140px] h-[360px] w-[360px] animate-float-slow-reverse rounded-full border border-plum/[0.25]" aria-hidden="true" />

      <div className="container-content relative grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        {/* Left: text content */}
        <div>
          <Reveal>
            <span className="eyebrow-on-navy inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-soft" aria-hidden="true" />
              Dipercaya 100+ UMKM &amp; Perusahaan di Jawa Timur
            </span>
          </Reveal>

          <h1 className="mt-5 font-display text-[32px] font-semibold leading-[1.15] sm:text-[38px] lg:text-[44px]">
            <SplitText
              text="Kepatuhan usaha Anda,"
              as="span"
              className="block"
              wordClassName="text-cream"
            />
            <SplitText
              text="ditangani dengan"
              as="span"
              className="block"
              wordClassName="text-cream"
              delay={0.25}
            />{' '}
            <SplitText
              text="presisi seorang akuntan."
              as="span"
              className="inline"
              wordClassName="text-gold-soft"
              delay={0.45}
            />
          </h1>

          <Reveal delay={0.15}>
            <p className="mt-5 max-w-[520px] text-[16.5px] leading-relaxed text-cream/80">
              ANBI Consulting mendampingi UMKM dan perusahaan menengah di Jawa
              Timur dalam akuntansi, perpajakan, audit, dan perizinan usaha —
              dengan harga yang transparan dan bersahabat untuk skala bisnis
              Anda.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-7 flex flex-wrap gap-3.5">
              <MagneticButton as="a" href="#harga" className="btn-primary">
                Lihat Paket Harga
              </MagneticButton>
              <MagneticButton
                as="a"
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Konsultasi Gratis 30 Menit
              </MagneticButton>
            </div>
          </Reveal>

          {/* Animated stat strip */}
          <Reveal delay={0.35}>
            <div className="mt-9 grid max-w-[420px] grid-cols-4 gap-4 border-t border-navy-line pt-6">
              {COMPANY.heroStats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-lg font-semibold text-cream sm:text-xl">
                    <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                  </p>
                  <p className="mt-0.5 text-[10.5px] leading-tight text-cream/55">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <p className="mt-6 max-w-[480px] text-[12.5px] leading-relaxed text-cream/65">
            {COMPANY.disclaimer}
          </p>
        </div>

        {/* Right: hero image + floating category chips */}
        <Reveal delay={0.2} className="relative mx-auto w-full max-w-[440px] lg:max-w-none">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-lg shadow-card sm:aspect-square">
            <ImagePlaceholder
              assetKey="hero-dummy-1"
              alt="Konsultan ANBI berdiskusi dengan klien"
            />
          </div>

          {FLOATING_CARDS.map((card, i) => (
            <div key={card.id} className={`absolute ${card.position} ${card.floatClass}`}>
              <motion.div
                className="glass-light flex items-center gap-2.5 rounded-md px-4 py-3"
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${CATEGORY_THEME[card.id]?.badgeBg || 'bg-gold-soft/25'} ${CATEGORY_THEME[card.id]?.badgeText || 'text-navy-deep'}`}>
                  <svg width="16" height="16" viewBox="0 0 24 24">
                    {card.icon}
                  </svg>
                </span>
                <span className="text-[13px] font-semibold text-navy-deep">
                  {card.label}
                </span>
              </motion.div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
