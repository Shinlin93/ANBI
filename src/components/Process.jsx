import { PROCESS_STEPS } from '../data/process.js'
import Reveal from './motion/Reveal.jsx'
import DotGrid from './DotGrid.jsx'

// Static, complete class strings (not built dynamically) so Tailwind's
// JIT scanner picks them up. Cycled by index for a bit of color rhythm
// across the four steps.
const STEP_STYLES = [
  { number: 'text-teal', hoverBorder: 'hover:border-teal' },
  { number: 'text-gold-soft', hoverBorder: 'hover:border-gold-soft' },
  { number: 'text-plum', hoverBorder: 'hover:border-plum' },
  { number: 'text-forest', hoverBorder: 'hover:border-forest' },
]

export default function Process() {
  return (
    <section id="alur-kerja" className="relative overflow-hidden mesh-navy py-16 text-cream md:py-24">
      <DotGrid id="process-dot-grid" className="text-cream/[0.05]" gap={28} dot={1.2} />
      <div className="container-content relative">
        <Reveal className="mb-11 max-w-[640px]">
          <span className="eyebrow-on-navy">Alur Kerja Kami</span>
          <h2 className="mt-3 font-display text-[32px] font-semibold text-cream">
            Proses yang sederhana, transparan, dan terdokumentasi
          </h2>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step, i) => {
            const style = STEP_STYLES[i % STEP_STYLES.length]
            return (
              <Reveal key={step.idx} delay={i * 0.1}>
                <div className={`border-t-2 border-cream/20 pt-[22px] transition-colors duration-300 ${style.hoverBorder}`}>
                  <span className={`font-mono text-[13px] font-semibold ${style.number}`}>
                    {step.idx}
                  </span>
                  <h3 className="mb-2 mt-2.5 text-[16.5px] font-semibold text-cream">
                    {step.title}
                  </h3>
                  <p className="text-[13.5px] text-cream/70">{step.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
