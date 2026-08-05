import { useState } from 'react'
import { COMPANY } from '../data/company.js'
import Reveal from './motion/Reveal.jsx'
import MagneticButton from './motion/MagneticButton.jsx'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000'
const initialForm = { name: '', phone: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      setForm(initialForm)
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="kontak" className="pb-16 pt-0 md:pb-24">
      <div className="container-content">
        {/* CTA band */}
        <Reveal className="flex flex-col items-start justify-between gap-8 rounded-[10px] bg-stamp px-8 py-14 text-cream sm:flex-row sm:items-center sm:px-12">
          <div>
            <h2 className="max-w-[480px] font-display text-[28px] font-semibold text-cream">
              Mari bekerja sama
            </h2>
            <p className="mt-2 max-w-[480px] text-[14.5px] text-cream/80">
              Konsultasikan kebutuhan legalitas dan pengembangan bisnis Anda
              bersama kami — konsultasi awal gratis, tanpa kewajiban lanjut.
              Berbasis di Sidoarjo, siap melayani seluruh Jawa Timur dan
              Indonesia.
            </p>
          </div>
          <MagneticButton
            as="a"
            href={`mailto:${COMPANY.email}`}
            className="inline-flex shrink-0 items-center justify-center rounded-[3px] bg-cream px-6 py-3.5 text-sm font-semibold text-stamp"
          >
            Hubungi Kami
          </MagneticButton>
        </Reveal>

        {/* Contact form */}
        <div className="mt-10 grid gap-8 lg:grid-cols-5">
          <Reveal className="flex flex-col gap-5 lg:col-span-2">
            <div className="rounded-lg border border-cream-dim bg-white p-6 transition-shadow duration-300 hover:shadow-card">
              <p className="eyebrow">Email</p>
              <p className="mt-2 text-[14.5px] text-ink/80">{COMPANY.email}</p>
            </div>
            <div className="rounded-lg border border-cream-dim bg-white p-6 transition-shadow duration-300 hover:shadow-card">
              <p className="eyebrow">Lokasi</p>
              <p className="mt-2 text-[14.5px] text-ink/80">
                {COMPANY.address.city}, {COMPANY.address.province}
              </p>
            </div>
            <div className="rounded-lg border border-cream-dim bg-white p-6 transition-shadow duration-300 hover:shadow-card">
              <p className="eyebrow">Jam Operasional</p>
              <p className="mt-2 text-[14.5px] text-ink/80">{COMPANY.hours}</p>
            </div>
          </Reveal>

          <Reveal
            as="form"
            onSubmit={handleSubmit}
            delay={0.12}
            className="flex flex-col gap-4 rounded-lg border border-cream-dim bg-white p-8 lg:col-span-3"
          >
            <h3 className="font-display text-xl font-semibold text-navy-deep">
              Kirim Pertanyaan
            </h3>
            <hr className="ledger-rule light" />
            <div className="mt-2 grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-ink/80">
                  Nama
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="mt-1.5 w-full rounded-[3px] border border-ink/15 px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
                  placeholder="Nama lengkap"
                />
              </div>
              <div>
                <label htmlFor="phone" className="text-sm font-medium text-ink/80">
                  Nomor Telepon
                </label>
                <input
                  id="phone"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  className="mt-1.5 w-full rounded-[3px] border border-ink/15 px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
                  placeholder="0812xxxxxxx"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium text-ink/80">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="mt-1.5 w-full rounded-[3px] border border-ink/15 px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
                placeholder="nama@perusahaan.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium text-ink/80">
                Pesan
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="mt-1.5 w-full rounded-[3px] border border-ink/15 px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
                placeholder="Ceritakan kebutuhan legalitas atau perizinan usaha Anda"
              />
            </div>

            <MagneticButton
              as="button"
              type="submit"
              disabled={status === 'loading'}
              className="btn-primary mt-1 disabled:opacity-60"
            >
              {status === 'loading' ? 'Mengirim...' : 'Kirim Pesan'}
            </MagneticButton>

            <div role="status" aria-live="polite">
              {status === 'success' && (
                <p className="text-sm font-medium text-stamp">
                  Pesan berhasil terkirim. Tim kami akan segera menghubungi Anda.
                </p>
              )}
              {status === 'error' && (
                <p className="text-sm font-medium text-red-700">
                  Gagal mengirim pesan. Silakan coba lagi atau hubungi kami via email.
                </p>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
