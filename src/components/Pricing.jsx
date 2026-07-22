import { PRICING_TIERS } from '../data/pricing.js'
import { WA_LINK_PLAN } from '../utils/whatsapp.js'
import Reveal from './motion/Reveal.jsx'
import SpotlightCard from './motion/SpotlightCard.jsx'
import MagneticButton from './motion/MagneticButton.jsx'

export default function Pricing() {
  return (
    <section id="harga" className="relative overflow-hidden mesh-navy py-16 text-cream md:py-24">
      <div className="container-content relative">
        <Reveal className="mb-12 max-w-[640px]">
          <span className="eyebrow-on-navy">Investasi</span>
          <h2 className="mt-3 font-display text-[32px] font-semibold text-cream">
            Paket berlangganan, harga bersahabat
          </h2>
          <p className="mt-3.5 text-[15.5px] text-cream/65">
            Tiga paket disesuaikan dengan skala usaha — dari UMKM yang baru
            merapikan pembukuan hingga perusahaan yang butuh pendampingan
            penuh.
          </p>
        </Reveal>

        <div className="grid gap-[22px] lg:grid-cols-3">
          {PRICING_TIERS.map((plan, i) => (
            <Reveal key={plan.tier} delay={i * 0.1} y={plan.featured ? 0 : 22}>
              <SpotlightCard
                spotlightColor={plan.featured ? 'rgba(228, 199, 122, 0.16)' : 'rgba(228, 199, 122, 0.08)'}
                className={`relative flex h-full flex-col rounded-lg border p-8 ${
                  plan.featured
                    ? 'glass-gold lg:-translate-y-2 lg:scale-[1.02]'
                    : 'border-navy-line bg-cream/[0.03]'
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-7 rounded-[3px] bg-gold px-2.5 py-1 font-mono text-[10.5px] font-bold uppercase tracking-wide text-navy-deep">
                    Paling Dipilih
                  </span>
                )}
                <span className="font-mono text-xs uppercase tracking-wide text-gold-soft">
                  {plan.tier}
                </span>
                <h3 className="mt-2.5 font-display text-[22px] text-cream">
                  {plan.title}
                </h3>
                <p className="mb-5 mt-1 text-[13px] text-cream/55">{plan.who}</p>
                <div className="font-mono text-[32px] font-semibold text-cream">
                  {plan.amount}
                  <span className="text-[13px] font-normal text-cream/55"> {plan.period}</span>
                </div>
                <hr className="ledger-rule on-navy my-5" />
                <ul className="flex-1 space-y-1.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2.5 py-1.5 text-[13.8px] text-cream/[0.82]">
                      <span className="text-gold-soft">—</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <MagneticButton
                  as="a"
                  href={WA_LINK_PLAN(`${plan.tier} (${plan.title})`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-5 text-center ${plan.featured ? 'btn-primary' : 'btn-ghost'}`}
                >
                  {plan.ctaLabel}
                </MagneticButton>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-9 text-center text-[13px] text-cream/65">
            Butuh layanan satu kali seperti pendirian PT atau audit tahunan?
            Lihat daftar harga di bawah.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
