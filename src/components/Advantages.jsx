import ImagePlaceholder from './ImagePlaceholder.jsx'
import Reveal from './motion/Reveal.jsx'
import SpotlightCard from './motion/SpotlightCard.jsx'

const ADVANTAGES = [
  {
    title: 'Jangkauan Jawa Timur',
    description:
      'Berbasis di Surabaya, siap melayani klien di seluruh Jawa Timur secara online maupun kunjungan langsung.',
    icon: (
      <path d="M12 21s7-6.5 7-11.5a7 7 0 10-14 0C5 14.5 12 21 12 21zM12 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: 'Keahlian Terbukti',
    description:
      'Tim akuntan dan konsultan berpengalaman menangani UMKM hingga perusahaan menengah lintas sektor.',
    icon: (
      <path d="M12 2l3 6.5 7 1-5.2 5 1.2 7-6-3.2L6 21.5l1.2-7L2 9.5l7-1L12 2z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: 'Transparan & Berbasis Teknologi',
    description:
      'Laporan dan progres pekerjaan dapat dipantau kapan saja — tidak ada proses yang tersembunyi.',
    icon: (
      <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v10a2 2 0 01-2 2H9m0-14v14m0-14L3 9m6 8l-6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
]

export default function Advantages() {
  return (
    <section className="relative overflow-hidden py-20 text-cream md:py-28" aria-labelledby="advantages-heading">
      <div className="absolute inset-0">
        <ImagePlaceholder assetKey="advantages-map-dummy-1" alt="" />
        <div className="absolute inset-0 bg-navy-deep/[0.85]" aria-hidden="true" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 700px 500px at 15% 15%, rgba(14,110,119,0.24), transparent 60%), radial-gradient(ellipse 600px 500px at 100% 100%, rgba(91,74,138,0.20), transparent 60%)',
            mixBlendMode: 'screen',
          }}
          aria-hidden="true"
        />
      </div>

      <div className="container-content relative">
        <Reveal>
          <p className="eyebrow-on-navy text-center">Keunggulan Kami</p>
          <h2 id="advantages-heading" className="sr-only">
            Keunggulan ANBI Consulting
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {ADVANTAGES.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <SpotlightCard
                spotlightColor="rgba(228, 199, 122, 0.10)"
                className="glass-dark h-full rounded-lg p-7"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-soft/15 text-gold-soft">
                  <svg width="22" height="22" viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-cream">
                  {item.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-cream/80">
                  {item.description}
                </p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
