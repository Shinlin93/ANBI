import { COMPANY } from '../data/company.js'

/**
 * Builds a wa.me link with an optional prefilled message.
 * @param {string} [message] - custom text to prefill in WhatsApp
 * @returns {string} full wa.me URL
 */
export function buildWhatsAppLink(message) {
  const defaultMessage =
    'Halo ANBI Consulting, saya ingin konsultasi terkait layanan akuntansi/pajak/audit/legalitas.'
  const text = encodeURIComponent(message || defaultMessage)
  return `https://wa.me/${COMPANY.whatsapp}?text=${text}`
}

export const WA_LINK = buildWhatsAppLink()

export const WA_LINK_CATEGORY = (categoryName) =>
  buildWhatsAppLink(
    `Halo ANBI Consulting, saya ingin bertanya tentang layanan ${categoryName}.`
  )

export const WA_LINK_PLAN = (planTier) =>
  buildWhatsAppLink(
    `Halo ANBI Consulting, saya tertarik dengan paket ${planTier}.`
  )
