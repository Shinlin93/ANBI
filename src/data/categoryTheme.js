// Warna aksen per kategori — supaya tiap section terasa punya identitas
// sendiri, bukan navy/gold berulang di semua tempat. Class Tailwind ditulis
// LENGKAP (bukan digabung dari variabel) supaya tetap terdeteksi oleh
// Tailwind JIT scanner saat build.

export const CATEGORY_THEME = {
  akuntansi: {
    badgeBg: 'bg-teal/10',
    badgeText: 'text-teal',
    accentBorder: 'border-teal',
    spotlight: 'rgba(14, 110, 119, 0.14)',
    sectionTint: 'tint-teal',
  },
  pajak: {
    badgeBg: 'bg-stamp/10',
    badgeText: 'text-stamp',
    accentBorder: 'border-stamp',
    spotlight: 'rgba(140, 59, 50, 0.14)',
    sectionTint: 'tint-stamp',
  },
  audit: {
    badgeBg: 'bg-plum/10',
    badgeText: 'text-plum',
    accentBorder: 'border-plum',
    spotlight: 'rgba(91, 74, 138, 0.14)',
    sectionTint: 'tint-plum',
  },
  legalitas: {
    badgeBg: 'bg-forest/10',
    badgeText: 'text-forest',
    accentBorder: 'border-forest',
    spotlight: 'rgba(53, 94, 69, 0.14)',
    sectionTint: 'tint-forest',
  },
}
