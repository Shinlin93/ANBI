import ImagePlaceholder from './ImagePlaceholder.jsx'
import Reveal from './motion/Reveal.jsx'

const LOGO_SLOTS = [1, 2, 3, 4, 5, 6]

export default function ClientLogos() {
  return (
    <section className="border-b border-cream-dim bg-white py-10" aria-label="Klien kami">
      <div className="container-content">
        <Reveal className="flex flex-col items-center gap-6 sm:flex-row sm:gap-10" y={12}>
          <p className="eyebrow shrink-0">Klien Kami</p>
          <div className="grid w-full grid-cols-3 gap-6 sm:grid-cols-6 sm:gap-8">
            {LOGO_SLOTS.map((n, i) => (
              <Reveal
                key={n}
                delay={i * 0.05}
                y={10}
                className="h-10 w-full grayscale opacity-70 transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              >
                <ImagePlaceholder
                  assetKey={`client-logo-${n}`}
                  alt={`Logo klien ${n}`}
                />
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
