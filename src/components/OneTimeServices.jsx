import { VALUE_ITEMS } from '../data/pricing.js'
import Reveal from './motion/Reveal.jsx'
import DotGrid from './DotGrid.jsx'

export default function OneTimeServices() {
  return (
    <section id="nilai" className="relative overflow-hidden mesh-navy py-16 text-cream md:py-24">
      <DotGrid id="value-dot-grid" className="text-cream/[0.05]" gap={28} dot={1.2} />
      <div className="container-content relative">
        <Reveal className="mb-11 max-w-[640px]">
          <span className="eyebrow-on-navy">Mengapa Legalitas Usaha Penting</span>
          <h2 className="mt-3 font-display text-[32px] font-semibold text-cream">
            Nilai yang Anda dapatkan
          </h2>
          <p className="mt-3.5 text-[15.5px] text-cream/70">
            Ketika usaha Anda tertib legalitas dan kepatuhan, pintu peluang
            ikut terbuka lebih lebar.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="border border-white/15 bg-white/[0.08] backdrop-blur-xl shadow-[0_8px_32px_-8px_rgba(0,0,0,0.35)] overflow-hidden rounded-lg">
          {VALUE_ITEMS.map((item, i) => (
            <div
              key={item.name}
              className={`ledger-row px-6 py-5 transition-colors duration-200 hover:bg-white/[0.04] sm:px-7 ${
                i === VALUE_ITEMS.length - 1 ? '' : 'border-b border-navy-line'
              }`}
            >
              <div>
                <p className="font-display text-base font-semibold text-cream">
                  {item.name}
                </p>
                <p className="mt-1 text-[13px] text-cream/70">{item.description}</p>
              </div>
              <div className="whitespace-nowrap text-left font-mono text-[13px] font-semibold uppercase tracking-wide text-gold-soft sm:text-right">
                {item.tag}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
