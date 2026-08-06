// Warna aksen per kategori — dipakai untuk badge, ikon, dan garis aksen
// supaya tiap section tetap punya identitas visual. Semua class Tailwind
// ditulis LENGKAP (bukan digabung dari variabel/string manipulation)
// supaya tetap terdeteksi oleh Tailwind JIT scanner saat build.
//
// sectionTint SENGAJA diseragamkan (bukan ikut warna kategori) — versi
// sebelumnya yang ikut warna kategori (misal merah muda untuk Audit)
// terlihat kurang harmonis. Nuansa biru-abu netral ini kontras jelas
// dengan kartu putih di semua section, dan terasa lebih profesional &
// konsisten dipakai berulang.

const NEUTRAL_SECTION_TINT = 'bg-navy-deep/[0.035]'

export const CATEGORY_THEME = {
  pendirian: {
    badgeBg: 'bg-teal/10',
    badgeText: 'text-teal',
    accentBorder: 'border-teal',
    accentBg: 'bg-teal',
    sectionTint: NEUTRAL_SECTION_TINT,
    spotlight: 'rgba(14, 110, 119, 0.14)',
  },
  perizinan: {
    badgeBg: 'bg-gold/15',
    badgeText: 'text-gold',
    accentBorder: 'border-gold',
    accentBg: 'bg-gold',
    sectionTint: NEUTRAL_SECTION_TINT,
    spotlight: 'rgba(228, 199, 122, 0.16)',
  },
  akuntansi: {
    badgeBg: 'bg-forest/10',
    badgeText: 'text-forest',
    accentBorder: 'border-forest',
    accentBg: 'bg-forest',
    sectionTint: NEUTRAL_SECTION_TINT,
    spotlight: 'rgba(45, 106, 79, 0.14)',
  },
  hr: {
    badgeBg: 'bg-plum/10',
    badgeText: 'text-plum',
    accentBorder: 'border-plum',
    accentBg: 'bg-plum',
    sectionTint: NEUTRAL_SECTION_TINT,
    spotlight: 'rgba(91, 74, 138, 0.16)',
  },
  audit: {
    badgeBg: 'bg-stamp/10',
    badgeText: 'text-stamp',
    accentBorder: 'border-stamp',
    accentBg: 'bg-stamp',
    sectionTint: NEUTRAL_SECTION_TINT,
    spotlight: 'rgba(178, 66, 46, 0.14)',
  },
}
