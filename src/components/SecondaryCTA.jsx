import { WA_LINK } from '../utils/whatsapp.js'
import Reveal from './motion/Reveal.jsx'
import SplitText from './motion/SplitText.jsx'
import MagneticButton from './motion/MagneticButton.jsx'

const TRUST_BADGES = [
  { label: 'Konsultasi Awal Gratis' },
  { label: 'Penawaran Tertulis, Tanpa Biaya Tersembunyi' },
]

export default function SecondaryCTA() {
  const year = new Date().getFullYear()

  return (
    <section className="relative overflow-hidden bg-cream py-20 md:py-28">
      <div
        className="pointer-events-none absolute right-[-60px] top-1/2 h-[280px] w-[280px] -translate-y-1/2 animate-float-slow rounded-full border border-teal/15 sm:h-[360px] sm:w-[360px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-[-10px] top-1/2 h-[200px] w-[200px] -translate-y-1/2 animate-float-slow-reverse rounded-full border border-plum/15 sm:h-[260px] sm:w-[260px]"
        aria-hidden="true"
      />

      <div className="container-content relative text-center">
        <h2 className="mx-auto max-w-[600px] font-display text-[30px] font-semibold text-navy-deep sm:text-[36px]">
          <SplitText
            text={`Siap mengurus legalitas usaha Anda di ${year}?`}
            as="span"
            wordClassName="text-navy-deep"
          />
        </h2>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-4 max-w-[480px] text-[15.5px] text-ink/70">
            Jadikan kami mitra jangka panjang Anda dalam mengurus legalitas
            dan kepatuhan usaha — mulai dari konsultasi awal yang gratis.
          </p>

          <MagneticButton
            as="a"
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8 inline-flex"
          >
            Jadwalkan Konsultasi
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </MagneticButton>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {TRUST_BADGES.map((badge) => (
              <span key={badge.label} className="inline-flex items-center gap-2 text-[13.5px] font-medium text-ink/70">
                <svg className="h-4 w-4 text-accent" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7 7a1 1 0 01-1.4 0l-3-3a1 1 0 111.4-1.4L9 11.6l6.3-6.3a1 1 0 011.4 0z" clipRule="evenodd" />
                </svg>
                {badge.label}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
