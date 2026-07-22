import { promises as fs } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DATA_FILE = path.join(__dirname, '..', 'data', 'inquiries.json')

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_REGEX = /^[0-9+\-\s()]{8,20}$/

function validatePayload({ name, phone, email, message }) {
  const errors = []

  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    errors.push('Nama wajib diisi (minimal 2 karakter).')
  }
  if (!phone || !PHONE_REGEX.test(phone.trim())) {
    errors.push('Nomor telepon tidak valid.')
  }
  if (!email || !EMAIL_REGEX.test(email.trim())) {
    errors.push('Alamat email tidak valid.')
  }
  if (!message || typeof message !== 'string' || message.trim().length < 5) {
    errors.push('Pesan wajib diisi (minimal 5 karakter).')
  }

  return errors
}

async function readInquiries() {
  try {
    const raw = await fs.readFile(DATA_FILE, 'utf-8')
    return JSON.parse(raw)
  } catch (err) {
    if (err.code === 'ENOENT') return []
    throw err
  }
}

async function writeInquiries(inquiries) {
  await fs.writeFile(DATA_FILE, JSON.stringify(inquiries, null, 2), 'utf-8')
}

export async function createContact(req, res) {
  try {
    const { name, phone, email, message } = req.body || {}
    const errors = validatePayload({ name, phone, email, message })

    if (errors.length > 0) {
      return res.status(400).json({ success: false, errors })
    }

    const inquiries = await readInquiries()

    const newInquiry = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 8),
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      message: message.trim(),
      createdAt: new Date().toISOString(),
    }

    inquiries.push(newInquiry)
    await writeInquiries(inquiries)

    return res.status(201).json({
      success: true,
      message: 'Pesan berhasil disimpan.',
      data: newInquiry,
    })
  } catch (err) {
    console.error('createContact error:', err)
    return res.status(500).json({
      success: false,
      errors: ['Terjadi kesalahan pada server. Silakan coba lagi nanti.'],
    })
  }
}
