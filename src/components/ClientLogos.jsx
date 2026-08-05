import Reveal from './motion/Reveal.jsx'

const CLIENT_SEGMENTS = [
  'UMKM & Usaha Perorangan',
  'Startup & Usaha Rintisan',
  'CV & Firma',
  'Perseroan Terbatas (PT)',
  'Yayasan & Perkumpulan',
  'Koperasi',
  'Perusahaan Dagang',
  'Manufaktur & Industri',
  'Profesional & Ekspatriat',
]

export default function ClientLogos() {
  return (
    <section className="border-b border-cream-dim bg-white py-10" aria-label="Segmen klien kami">
      <div className="container-content">
        <Reveal className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-10" y={12}>
          <p className="eyebrow shrink-0">Klien Kami</p>
          <p className="shrink-0 text-[13px] text-ink/60 sm:hidden">
            Kami melayani berbagai bentuk dan skala usaha.
          </p>
          <div className="flex flex-wrap gap-2.5">
            {CLIENT_SEGMENTS.map((segment, i) => (
              <Reveal
                key={segment}
                delay={i * 0.04}
                y={8}
                className="rounded-full border border-cream-dim bg-cream/60 px-3.5 py-1.5 text-[12.5px] font-medium text-ink/75 transition-colors duration-200 hover:border-gold hover:text-navy-deep"
              >
                {segment}
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
