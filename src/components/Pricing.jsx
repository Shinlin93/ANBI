import { PRICING_PRINCIPLES } from '../data/pricing.js'
import { WA_LINK } from '../utils/whatsapp.js'
import Reveal from './motion/Reveal.jsx'
import SpotlightCard from './motion/SpotlightCard.jsx'
import MagneticButton from './motion/MagneticButton.jsx'
import DotGrid from './DotGrid.jsx'

export default function Pricing() {
  return (
    <section id="estimasi" className="relative overflow-hidden mesh-navy py-16 text-cream md:py-24">
      <DotGrid id="pricing-dot-grid" className="text-cream/[0.05]" gap={30} dot={1.2} />
      <div className="pointer-events-none absolute -left-28 top-1/3 h-[300px] w-[300px] animate-float-slow-reverse rounded-full border border-gold-soft/[0.14]" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-16 bottom-[-100px] h-[260px] w-[260px] animate-float-slow rounded-full border border-teal/[0.16]" aria-hidden="true" />

      <div className="container-content relative">
        <Reveal className="mb-12 max-w-[640px]">
          <span className="eyebrow-on-navy">Estimasi Biaya</span>
          <h2 className="mt-3 font-display text-[32px] font-semibold text-cream">
            Penawaran tertulis, tanpa biaya tersembunyi
          </h2>
          <p className="mt-3.5 text-[15.5px] text-cream/65">
            Setiap usaha punya kebutuhan berbeda, jadi biaya kami tentukan
            lewat konsultasi awal — bukan paket satu-ukuran-untuk-semua.
            Anda menerima rincian biaya tertulis sebelum pekerjaan dimulai.
          </p>
        </Reveal>

        <div className="grid gap-[22px] lg:grid-cols-3">
          {PRICING_PRINCIPLES.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <SpotlightCard
                spotlightColor="rgba(228, 199, 122, 0.10)"
                className="relative flex h-full flex-col overflow-hidden rounded-lg border border-navy-line bg-cream/[0.03] p-8"
              >
                <span
                  className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full border border-gold-soft/20"
                  aria-hidden="true"
                />
                <span className="font-mono text-xs uppercase tracking-wide text-gold-soft">
                  0{i + 1}
                </span>
                <h3 className="mt-2.5 font-display text-[20px] text-cream">
                  {item.title}
                </h3>
                <hr className="ledger-rule on-navy my-4" />
                <p className="flex-1 text-[13.8px] leading-relaxed text-cream/[0.82]">
                  {item.description}
                </p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.25} className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="max-w-[480px] text-[14.5px] text-cream/70">
            Ceritakan kebutuhan usaha Anda, dan tim kami akan menyusun
            penawaran tertulis dalam waktu singkat — tanpa kewajiban lanjut.
          </p>
          <MagneticButton
            as="a"
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Minta Penawaran Sekarang
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  )
}
