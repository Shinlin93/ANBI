import Reveal from './motion/Reveal.jsx'
import SpotlightCard from './motion/SpotlightCard.jsx'
import DotGrid from './DotGrid.jsx'

const FOCUS_BLOCKS = [
  {
    label: 'Fokus Kami',
    title: 'Mitra jangka panjang untuk legalitas usaha',
    description:
      'Menjadi mitra jangka panjang bagi UMKM dan perusahaan di Indonesia dalam mengurus legalitas dan kepatuhan usaha.',
    icon: (
      <path d="M12 2l3 6.5 7 1-5.2 5 1.2 7-6-3.2L6 21.5l1.2-7L2 9.5l7-1L12 2z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    label: 'Cara Kami Bekerja',
    title: 'Melampaui sekadar perizinan',
    description:
      'Pendampingan personal, kesepakatan tertulis yang jelas, dan pembaruan progres secara berkala di setiap penugasan.',
    icon: (
      <path d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    label: 'Jaringan Mitra',
    title: 'Didukung spesialis lintas bidang',
    description:
      'Didukung jaringan konsultan dan spesialis mulai dari perizinan industri hingga layanan konsultan profesional lainnya.',
    icon: (
      <>
        <circle cx="9" cy="7" r="3.5" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="17" cy="9" r="2.5" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M3.5 20a5.5 5.5 0 0111 0M14.5 20a4.2 4.2 0 016.5-3.3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </>
    ),
  },
]

export default function About() {
  return (
    <section id="tentang" className="relative overflow-hidden mesh-navy py-20 text-cream md:py-28" aria-labelledby="about-heading">
      <DotGrid id="about-dot-grid" className="text-cream/[0.05]" gap={30} dot={1.1} />
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-[280px] w-[280px] rounded-full border border-gold-soft/15"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-[-80px] h-[220px] w-[220px] rounded-full border border-teal/20"
        aria-hidden="true"
      />

      <div className="container-content relative">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <span className="eyebrow-on-navy">Tentang ANBI</span>
            <h2 id="about-heading" className="mt-3 font-display text-[32px] font-semibold text-cream">
              Melampaui sekadar perizinan —
              <br />
              membangun fondasi bisnis yang kuat
            </h2>
            <p className="mt-4 max-w-[480px] text-[15.5px] leading-relaxed text-cream/75">
              PT Anara Business International (ANBI Consulting) adalah
              perusahaan konsultan bisnis dan perizinan yang berbasis di
              Sidoarjo, Jawa Timur. Kami membantu pelaku usaha dari UMKM
              hingga perusahaan internasional mengurus legalitas, kepatuhan,
              dan administrasi bisnis secara lengkap dalam satu pintu.
            </p>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-1">
            {FOCUS_BLOCKS.map((block, i) => (
              <Reveal key={block.label} delay={i * 0.1}>
                <SpotlightCard
                  spotlightColor="rgba(228, 199, 122, 0.10)"
                  className="border border-white/15 bg-white/[0.08] backdrop-blur-xl shadow-[0_8px_32px_-8px_rgba(0,0,0,0.35)] card-lift flex items-start gap-5 rounded-lg p-6"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-soft/15 text-gold-soft">
                    <svg width="20" height="20" viewBox="0 0 24 24">
                      {block.icon}
                    </svg>
                  </span>
                  <div>
                    <p className="font-mono text-[11px] font-semibold uppercase tracking-wide text-gold-soft">
                      {block.label}
                    </p>
                    <h3 className="mt-1 font-display text-[17px] font-semibold text-cream">
                      {block.title}
                    </h3>
                    <p className="mt-1.5 text-[13.5px] leading-relaxed text-cream/75">
                      {block.description}
                    </p>
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
