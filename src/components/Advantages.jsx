import ImagePlaceholder from './ImagePlaceholder.jsx'
import Reveal from './motion/Reveal.jsx'
import SpotlightCard from './motion/SpotlightCard.jsx'
import DotGrid from './DotGrid.jsx'

const ADVANTAGES = [
  {
    title: 'Fokus pada Solusi',
    description:
      'Layanan yang dirancang sesuai skala dan anggaran usaha kecil, menengah, hingga tinggi.',
    icon: (
      <path d="M12 2l3 6.5 7 1-5.2 5 1.2 7-6-3.2L6 21.5l1.2-7L2 9.5l7-1L12 2z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: 'Satu Pintu',
    description:
      'Dari pendirian, perizinan, pajak, hingga SDM — cukup satu mitra untuk semuanya.',
    icon: (
      <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v10a2 2 0 01-2 2H9m0-14v14m0-14L3 9m6 8l-6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: 'Kepatuhan Terjaga',
    description:
      'Semua pengurusan mengikuti ketentuan dan regulasi yang berlaku saat ini.',
    icon: (
      <path d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: 'Jaringan Mitra Ahli',
    description:
      'Bekerja sama dengan spesialis berpengalaman di tiap bidang perizinan.',
    icon: (
      <>
        <circle cx="9" cy="7" r="3.5" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="17" cy="9" r="2.5" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M3.5 20a5.5 5.5 0 0111 0M14.5 20a4.2 4.2 0 016.5-3.3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: 'Dekat dengan Anda',
    description:
      'Berbasis di Sidoarjo, melayani Jawa Timur dan seluruh Indonesia.',
    icon: (
      <path d="M12 21s7-6.5 7-11.5a7 7 0 10-14 0C5 14.5 12 21 12 21zM12 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
]

export default function Advantages() {
  return (
    <section id="mengapa" className="relative overflow-hidden py-20 text-cream md:py-28" aria-labelledby="advantages-heading">
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
        <DotGrid id="advantages-dot-grid" className="text-cream/[0.05]" gap={26} dot={1.1} />
      </div>

      <div className="container-content relative">
        <Reveal>
          <p className="eyebrow-on-navy text-center">Mengapa ANBI</p>
          <h2 id="advantages-heading" className="mt-3 text-center font-display text-[32px] font-semibold text-cream sm:text-[36px]">
            Kenapa Klien Memilih Kami
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
