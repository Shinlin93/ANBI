// NOTE: color tokens (teal, gold, gold-soft, plum, forest, stamp, navy-deep, cream)
// are assumed to already exist in tailwind.config.js since they're used throughout
// Hero.jsx, Pricing.jsx, Advantages.jsx, Process.jsx, and Contact.jsx. Adjust the
// rgba() spotlight values below if your actual token hex values differ.

export const CATEGORY_THEME = {
  pendirian: {
    badgeBg: 'bg-teal/10',
    badgeText: 'text-teal',
    accentBorder: 'border-teal',
    sectionTint: 'bg-cream',
    spotlight: 'rgba(14, 110, 119, 0.14)',
  },
  perizinan: {
    badgeBg: 'bg-gold/15',
    badgeText: 'text-gold',
    accentBorder: 'border-gold',
    sectionTint: 'bg-white',
    spotlight: 'rgba(228, 199, 122, 0.16)',
  },
  akuntansi: {
    badgeBg: 'bg-forest/10',
    badgeText: 'text-forest',
    accentBorder: 'border-forest',
    sectionTint: 'bg-cream',
    spotlight: 'rgba(45, 106, 79, 0.14)',
  },
  hr: {
    badgeBg: 'bg-plum/10',
    badgeText: 'text-plum',
    accentBorder: 'border-plum',
    sectionTint: 'bg-white',
    spotlight: 'rgba(91, 74, 138, 0.16)',
  },
  audit: {
    badgeBg: 'bg-stamp/10',
    badgeText: 'text-stamp',
    accentBorder: 'border-stamp',
    sectionTint: 'bg-cream',
    spotlight: 'rgba(178, 66, 46, 0.14)',
  },
}
