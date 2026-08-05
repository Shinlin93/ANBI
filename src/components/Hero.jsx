import { motion } from 'framer-motion'
import heroImg from '../assets/hero.png'
import Reveal from './motion/Reveal.jsx'
import SplitText from './motion/SplitText.jsx'
import MagneticButton from './motion/MagneticButton.jsx'
import CountUp from './motion/CountUp.jsx'
import DotGrid from './DotGrid.jsx'
import { COMPANY } from '../data/company.js'
import { WA_LINK } from '../utils/whatsapp.js'

const FLOATING_CARDS = [
  {
    id: 'pendirian',
    label: 'Pendirian & Legalitas',
    sublabel: 'Akta, SK Kemenkumham & NPWP',
    position: 'right-[-14px] top-[4%] sm:right-[-38px]',
    floatClass: 'animate-float-slow',
    dotClass: 'bg-teal',
    icon: (
      <path d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    id: 'perizinan',
    label: 'Perizinan Usaha',
    sublabel: 'NIB, OSS-RBA & Sertifikasi',
    position: 'right-[-24px] top-[30%] sm:right-[-54px]',
    floatClass: 'animate-float-slow-reverse',
    dotClass: 'bg-gold',
    icon: (
      <path d="M14.7 6.3a1 1 0 010 1.4L12.4 10l4.9 4.9a3 3 0 11-4.2 4.2L8.2 14.2l-2.3 2.3a1 1 0 01-1.4-1.4l2.3-2.3-1-1a3 3 0 013-3l1 1 2.3-2.3a1 1 0 011.4 0z" fill="currentColor" strokeWidth="0" />
    ),
  },
  {
    id: 'akuntansi',
    label: 'Pajak & Akuntansi',
    sublabel: 'Pembukuan & Pelaporan SPT',
    position: 'right-[-14px] top-[58%] sm:right-[-38px]',
    floatClass: 'animate-float-slow',
    dotClass: 'bg-forest',
    icon: (
      <path d="M4 19V10M10 19V5M16 19v-7M20 19H4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    id: 'audit',
    label: 'Audit & Konsultasi',
    sublabel: 'Kepatuhan & Strategi Bisnis',
    position: 'right-[-24px] bottom-[2%] sm:right-[-54px]',
    floatClass: 'animate-float-slow-reverse',
    dotClass: 'bg-[#3b82c4]',
    icon: (
      <>
        <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M21 21l-4.3-4.3M8.5 11l1.8 1.8L14 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </>
    ),
  },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden mesh-navy py-20 text-cream md:py-24">
      <DotGrid id="hero-dot-grid" className="text-cream/[0.06]" gap={26} dot={1.2} />
      {/* Ambient floating background blobs */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] animate-float-slow rounded-full border border-gold-soft/[0.18]" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-16 -top-16 h-[420px] w-[420px] animate-float-slow-reverse rounded-full border border-gold-soft/[0.12]" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-24 bottom-[-140px] h-[360px] w-[360px] animate-float-slow-reverse rounded-full border border-plum/[0.25]" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-10 top-[18%] h-[140px] w-[140px] animate-float-slow rounded-full border border-teal/[0.2]" aria-hidden="true" />

      <div className="container-content relative grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        {/* Left: text content */}
        <div>
          <Reveal>
            <span className="eyebrow-on-navy inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-soft" aria-hidden="true" />
              {COMPANY.tagline}
            </span>
          </Reveal>

          <h1 className="mt-5 font-display text-[32px] font-semibold leading-[1.15] sm:text-[38px] lg:text-[44px]">
            <SplitText
              text="Legalitas usaha Anda,"
              as="span"
              className="block"
              wordClassName="text-cream"
            />
            <SplitText
              text="kami urus dengan"
              as="span"
              className="block"
              wordClassName="text-cream"
              delay={0.25}
            />{' '}
            <SplitText
              text="satu pintu, tanpa ribet."
              as="span"
              className="inline"
              wordClassName="text-gold-soft"
              delay={0.45}
            />
          </h1>

          <Reveal delay={0.15}>
            <p className="mt-5 max-w-[520px] text-[16.5px] leading-relaxed text-cream/80">
              {COMPANY.about}
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-7 flex flex-wrap gap-3.5">
              <MagneticButton as="a" href="#estimasi" className="btn-primary">
                Dapatkan Penawaran
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
            <img
              src={heroImg}
              alt="Meja kerja konsultan dengan dokumen legalitas dan laptop"
              className="h-full w-full object-cover object-[72%_45%]"
            />
          </div>

          {FLOATING_CARDS.map((card, i) => (
            <div key={card.id} className={`absolute ${card.position} ${card.floatClass}`}>
              <motion.div
                className="flex items-center gap-3 rounded-2xl border border-white/15 bg-navy-deep/35 px-4 py-3 shadow-[0_8px_28px_-6px_rgba(4,12,28,0.55)] backdrop-blur-xl backdrop-saturate-150"
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white ${card.dotClass}`}>
                  <svg width="16" height="16" viewBox="0 0 24 24">
                    {card.icon}
                  </svg>
                </span>
                <span className="whitespace-nowrap">
                  <span className="block text-[13.5px] font-semibold leading-tight text-cream">
                    {card.label}
                  </span>
                  <span className="block text-[11px] leading-tight text-cream/65">
                    {card.sublabel}
                  </span>
                </span>
              </motion.div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
