import { ONE_TIME_SERVICES } from '../data/pricing.js'
import Reveal from './motion/Reveal.jsx'

export default function OneTimeServices() {
  return (
    <section id="satuan" className="section-padding bg-cream">
      <div className="container-content">
        <Reveal className="mb-11 max-w-[640px]">
          <span className="eyebrow">Layanan Satuan</span>
          <h2 className="mt-3 font-display text-[32px] font-semibold text-navy-deep">
            Harga transparan untuk kebutuhan sekali jalan
          </h2>
          <p className="mt-3.5 text-[15.5px] text-ink/70">
            Tidak semua kebutuhan berlangganan. Berikut estimasi harga untuk
            layanan yang biasanya diperlukan sekali atau tahunan.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="overflow-hidden rounded-lg border border-cream-dim bg-white">
          {ONE_TIME_SERVICES.map((item, i) => (
            <div
              key={item.name}
              className={`ledger-row px-6 py-5 transition-colors duration-200 hover:bg-cream/50 sm:px-7 ${
                i === ONE_TIME_SERVICES.length - 1 ? '' : 'border-b border-cream-dim'
              }`}
            >
              <div>
                <p className="font-display text-base font-semibold text-navy-deep">
                  {item.name}
                </p>
                <p className="mt-1 text-[13px] text-ink/70">{item.description}</p>
              </div>
              <div className="whitespace-nowrap text-left font-mono text-base font-semibold text-stamp sm:text-right">
                {item.price}
                <span className="mt-0.5 block font-body text-[11px] font-normal text-ink/70">
                  {item.note}
                </span>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
