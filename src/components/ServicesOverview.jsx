import Reveal from './motion/Reveal.jsx'
import SpotlightCard from './motion/SpotlightCard.jsx'

const SERVICES = [
  {
    title: 'Pendirian Perusahaan',
    description: 'PT, CV, firma, hingga yayasan — akta, SK Kemenkumham, NPWP badan.',
    accent: 'teal',
    icon: (
      <path d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: 'Perizinan Usaha',
    description: 'NIB / OSS-RBA, izin sektor usaha, sertifikat standar, PBG & SLF.',
    accent: 'gold',
    icon: (
      <path d="M14.7 6.3a1 1 0 010 1.4L12.4 10l4.9 4.9a3 3 0 11-4.2 4.2L8.2 14.2l-2.3 2.3a1 1 0 01-1.4-1.4l2.3-2.3-1-1a3 3 0 013-3l1 1 2.3-2.3a1 1 0 011.4 0z" fill="currentColor" strokeWidth="0" />
    ),
  },
  {
    title: 'Akuntansi & Pajak',
    description: 'Pembukuan, laporan keuangan, SPT masa & tahunan, kepatuhan pajak.',
    accent: 'forest',
    icon: (
      <path d="M4 19V10M10 19V5M16 19v-7M20 19H4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: 'HR & Payroll',
    description: 'Kontrak kerja, penggajian, BPJS, dan administrasi kepegawaian.',
    accent: 'plum',
    icon: (
      <>
        <circle cx="9" cy="7" r="3.5" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M2.5 20a6.5 6.5 0 0113 0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 8h5M16 12h5M16 16h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: 'Layanan Ekspatriat',
    description: 'Visa kerja, KITAS, dan perizinan tenaga kerja asing.',
    accent: 'stamp',
    icon: (
      <path d="M12 21s7-6.5 7-11.5a7 7 0 10-14 0C5 14.5 12 21 12 21zM12 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: 'Audit & Kepatuhan',
    description: 'Audit internal, review kepatuhan, dan pembenahan administrasi.',
    accent: 'teal',
    icon: (
      <>
        <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M21 21l-4.3-4.3M8.5 11l1.8 1.8L14 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </>
    ),
  },
  {
    title: 'Konsultasi Bisnis',
    description: 'Pendampingan strategi, struktur usaha, dan pengembangan bisnis.',
    accent: 'gold',
    icon: (
      <path d="M12 2l3 6.5 7 1-5.2 5 1.2 7-6-3.2L6 21.5l1.2-7L2 9.5l7-1L12 2z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: 'Legal & Dokumen',
    description: 'Perjanjian kerja sama, kontrak bisnis, dan dokumen korporasi.',
    accent: 'forest',
    icon: (
      <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v10a2 2 0 01-2 2H9m0-14v14m0-14L3 9m6 8l-6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
]

// Class Tailwind ditulis LENGKAP per warna (bukan digabung dari variabel)
// supaya terdeteksi Tailwind JIT scanner saat build.
const ACCENT_STYLES = {
  teal: { bar: 'bg-teal', badgeBg: 'bg-teal/10', badgeText: 'text-teal' },
  gold: { bar: 'bg-gold', badgeBg: 'bg-gold/15', badgeText: 'text-gold' },
  forest: { bar: 'bg-forest', badgeBg: 'bg-forest/10', badgeText: 'text-forest' },
  plum: { bar: 'bg-plum', badgeBg: 'bg-plum/10', badgeText: 'text-plum' },
  stamp: { bar: 'bg-stamp', badgeBg: 'bg-stamp/10', badgeText: 'text-stamp' },
}

export default function ServicesOverview() {
  return (
    <section id="layanan" className="section-padding bg-cream" aria-labelledby="services-heading">
      <div className="container-content">
        <Reveal className="mb-12 max-w-[640px]">
          <span className="eyebrow">Layanan Kami</span>
          <h2 id="services-heading" className="mt-3 font-display text-[32px] font-semibold text-navy-deep">
            Solusi satu pintu untuk kebutuhan bisnis Anda
          </h2>
          <p className="mt-3.5 text-[15.5px] text-ink/70">
            Solusi satu pintu untuk kebutuhan legalitas dan administrasi
            bisnis Anda.
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => {
            const style = ACCENT_STYLES[service.accent]
            return (
              <Reveal key={service.title} delay={i * 0.06}>
                <SpotlightCard
                  spotlightColor="rgba(228, 199, 122, 0.10)"
                  className="card-lift group relative h-full overflow-hidden rounded-lg border border-cream-dim bg-white p-6"
                >
                  <span
                    className={`absolute inset-x-0 top-0 h-[3px] scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${style.bar}`}
                    aria-hidden="true"
                  />
                  <span className={`flex h-11 w-11 items-center justify-center rounded-full ${style.badgeBg} ${style.badgeText}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24">
                      {service.icon}
                    </svg>
                  </span>
                  <h3 className="mt-4 text-[15.5px] font-semibold text-navy-deep">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink/70">
                    {service.description}
                  </p>
                </SpotlightCard>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
