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
    <section className="border-b border-navy-line bg-navy-deep py-10" aria-label="Segmen klien kami">
      <div className="container-content">
        <Reveal className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-10" y={12}>
          <p className="eyebrow-on-navy shrink-0">Klien Kami</p>
          <p className="shrink-0 text-[13px] text-cream/60 sm:hidden">
            Kami melayani berbagai bentuk dan skala usaha.
          </p>
          <div className="flex flex-wrap gap-2.5">
            {CLIENT_SEGMENTS.map((segment, i) => (
              <Reveal
                key={segment}
                delay={i * 0.04}
                y={8}
                className="rounded-full border border-cream/15 bg-cream/[0.06] px-3.5 py-1.5 text-[12.5px] font-medium text-cream/80 transition-colors duration-200 hover:border-gold-soft hover:text-cream"
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
