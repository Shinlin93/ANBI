import { VALUE_ITEMS } from '../data/pricing.js'
import Reveal from './motion/Reveal.jsx'

export default function OneTimeServices() {
  return (
    <section id="nilai" className="section-padding bg-cream">
      <div className="container-content">
        <Reveal className="mb-11 max-w-[640px]">
          <span className="eyebrow">Mengapa Legalitas Usaha Penting</span>
          <h2 className="mt-3 font-display text-[32px] font-semibold text-navy-deep">
            Nilai yang Anda dapatkan
          </h2>
          <p className="mt-3.5 text-[15.5px] text-ink/70">
            Ketika usaha Anda tertib legalitas dan kepatuhan, pintu peluang
            ikut terbuka lebih lebar.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="overflow-hidden rounded-lg border border-cream-dim bg-white">
          {VALUE_ITEMS.map((item, i) => (
            <div
              key={item.name}
              className={`ledger-row px-6 py-5 transition-colors duration-200 hover:bg-cream/50 sm:px-7 ${
                i === VALUE_ITEMS.length - 1 ? '' : 'border-b border-cream-dim'
              }`}
            >
              <div>
                <p className="font-display text-base font-semibold text-navy-deep">
                  {item.name}
                </p>
                <p className="mt-1 text-[13px] text-ink/70">{item.description}</p>
              </div>
              <div className="whitespace-nowrap text-left font-mono text-[13px] font-semibold uppercase tracking-wide text-stamp sm:text-right">
                {item.tag}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
