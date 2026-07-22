import { useState } from 'react'
import logo from '../assets/logo.jpeg'
import { COMPANY } from '../data/company.js'
import { WA_LINK } from '../utils/whatsapp.js'
import MagneticButton from './motion/MagneticButton.jsx'

const NAV_LINKS = [
  { label: 'Akuntansi', href: '#akuntansi' },
  { label: 'Perpajakan', href: '#pajak' },
  { label: 'Audit', href: '#audit' },
  { label: 'Legalitas', href: '#legalitas' },
  { label: 'Harga', href: '#harga' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className="glass-dark sticky top-0 z-50">
      <div className="container-content flex h-[76px] items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 text-cream">
          <img
            src={logo}
            alt="ANBI Consulting"
            className="h-[34px] w-[34px] rounded-full border border-gold-soft object-cover"
          />
          <div>
            <p className="font-display text-[18px] font-semibold leading-tight text-cream">
              ANBI Consulting
            </p>
            <p className="text-[13px] leading-tight text-gold-soft">
              {COMPANY.legalName}
            </p>
          </div>
        </a>

        <nav className="hidden lg:block">
          <ul className="flex gap-[34px]">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[14.5px] font-medium text-cream/85 transition-opacity hover:opacity-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <MagneticButton
          as="a"
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden shrink-0 rounded-[3px] bg-gold px-5 py-2.5 text-sm font-semibold text-navy-deep lg:inline-flex"
        >
          Konsultasi Gratis
        </MagneticButton>

        <button
          className="flex h-10 w-10 items-center justify-center text-cream lg:hidden"
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="glass-dark flex flex-col border-t-0 px-6 pb-5 pt-2 lg:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="border-b border-navy-line py-3 text-[15px] font-medium text-cream last:border-b-0"
            >
              {link.label}
            </a>
          ))}
          <MagneticButton
            as="a"
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="mt-3 inline-flex items-center justify-center rounded-[3px] bg-gold px-5 py-3 text-sm font-semibold text-navy-deep"
          >
            Konsultasi Gratis
          </MagneticButton>
        </nav>
      )}
    </header>
  )
}
