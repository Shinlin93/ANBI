import { PROCESS_STEPS } from '../data/process.js'
import Reveal from './motion/Reveal.jsx'

// Static, complete class strings (not built dynamically) so Tailwind's
// JIT scanner picks them up. Cycled by index for a bit of color rhythm
// across the four steps.
const STEP_STYLES = [
  { border: 'border-teal', number: 'text-teal', hoverBorder: 'hover:border-teal' },
  { border: 'border-stamp', number: 'text-stamp', hoverBorder: 'hover:border-stamp' },
  { border: 'border-plum', number: 'text-plum', hoverBorder: 'hover:border-plum' },
  { border: 'border-forest', number: 'text-forest', hoverBorder: 'hover:border-forest' },
]

export default function Process() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-content">
        <Reveal className="mb-11 max-w-[640px]">
          <span className="eyebrow">Cara Kerja</span>
          <h2 className="mt-3 font-display text-[32px] font-semibold text-navy-deep">
            Empat langkah menuju kepatuhan yang tenang
          </h2>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step, i) => {
            const style = STEP_STYLES[i % STEP_STYLES.length]
            return (
              <Reveal key={step.idx} delay={i * 0.1}>
                <div className={`border-t-2 border-navy-deep/20 pt-[22px] transition-colors duration-300 ${style.hoverBorder}`}>
                  <span className={`font-mono text-[13px] font-semibold ${style.number}`}>
                    {step.idx}
                  </span>
                  <h3 className="mb-2 mt-2.5 text-[16.5px] font-semibold text-navy-deep">
                    {step.title}
                  </h3>
                  <p className="text-[13.5px] text-ink/70">{step.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
