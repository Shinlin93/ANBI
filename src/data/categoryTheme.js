// Warna aksen per kategori — supaya tiap section terasa punya identitas
// sendiri. Semua class Tailwind ditulis LENGKAP (bukan digabung dari
// variabel/string manipulation) supaya tetap terdeteksi oleh Tailwind JIT
// scanner saat build.
//
// sectionTint sengaja dibuat sebagai tint warna kategori yang sangat lembut
// (bukan bg-cream/bg-white polos) supaya kartu putih di atasnya terlihat
// kontras dan lebih fokus bagi pengguna, bukan menyatu dengan background.

export const CATEGORY_THEME = {
  pendirian: {
    badgeBg: 'bg-teal/10',
    badgeText: 'text-teal',
    accentBorder: 'border-teal',
    accentBg: 'bg-teal',
    sectionTint: 'bg-teal/[0.045]',
    spotlight: 'rgba(14, 110, 119, 0.14)',
  },
  perizinan: {
    badgeBg: 'bg-gold/15',
    badgeText: 'text-gold',
    accentBorder: 'border-gold',
    accentBg: 'bg-gold',
    sectionTint: 'bg-gold/[0.06]',
    spotlight: 'rgba(228, 199, 122, 0.16)',
  },
  akuntansi: {
    badgeBg: 'bg-forest/10',
    badgeText: 'text-forest',
    accentBorder: 'border-forest',
    accentBg: 'bg-forest',
    sectionTint: 'bg-forest/[0.045]',
    spotlight: 'rgba(45, 106, 79, 0.14)',
  },
  hr: {
    badgeBg: 'bg-plum/10',
    badgeText: 'text-plum',
    accentBorder: 'border-plum',
    accentBg: 'bg-plum',
    sectionTint: 'bg-plum/[0.05]',
    spotlight: 'rgba(91, 74, 138, 0.16)',
  },
  audit: {
    badgeBg: 'bg-stamp/10',
    badgeText: 'text-stamp',
    accentBorder: 'border-stamp',
    accentBg: 'bg-stamp',
    sectionTint: 'bg-stamp/[0.045]',
    spotlight: 'rgba(178, 66, 46, 0.14)',
  },
}
