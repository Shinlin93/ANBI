import { COMPANY } from '../data/company.js'

const SERVICE_LINKS = [
  { label: 'Pendirian & Legalitas', href: '#pendirian' },
  { label: 'Perizinan Usaha', href: '#perizinan' },
  { label: 'Akuntansi & Pajak', href: '#akuntansi' },
  { label: 'HR & Ekspatriat', href: '#hr' },
  { label: 'Audit & Konsultasi', href: '#audit' },
]

const COMPANY_LINKS = [
  { label: 'Layanan', href: '#layanan' },
  { label: 'Mengapa Kami', href: '#mengapa' },
  { label: 'Alur Kerja', href: '#alur-kerja' },
  { label: 'Estimasi Biaya', href: '#estimasi' },
  { label: 'Kontak', href: '#kontak' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-deep py-14 text-[13.5px] text-cream/65">
      <div className="container-content">
        <div className="mb-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="mb-3.5 font-display text-lg font-semibold text-cream">
              {COMPANY.brandName}
            </p>
            <p className="max-w-xs leading-relaxed">
              {COMPANY.legalName} — konsultan legalitas, perizinan, pajak,
              dan SDM usaha berbasis di Sidoarjo, Jawa Timur.
            </p>
          </div>

          <div>
            <p className="mb-3.5 text-sm font-semibold text-cream">Layanan</p>
            <ul className="space-y-2">
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-gold-soft">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3.5 text-sm font-semibold text-cream">Perusahaan</p>
            <ul className="space-y-2">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors hover:text-gold-soft">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3.5 text-sm font-semibold text-cream">Kontak</p>
            <ul className="space-y-2">
              <li>{COMPANY.email}</li>
              <li>{COMPANY.website}</li>
              <li>{COMPANY.address.city}, {COMPANY.address.province}</li>
              <li>{COMPANY.hours}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-3 border-t border-navy-line pt-6 text-[12.5px]">
          <span>&copy; {year} {COMPANY.legalName}. Seluruh hak cipta dilindungi.</span>
          <span>Konsultan independen — bukan bagian dari instansi pemerintah manapun.</span>
        </div>
      </div>
    </footer>
  )
}
