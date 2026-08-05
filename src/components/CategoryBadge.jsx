import { CATEGORY_ICONS } from './categoryIcons.jsx'

/**
 * Badge kategori bergaya "segel resmi" — cocok dengan tema konsultan
 * legalitas/perizinan. Warna sepenuhnya mengikuti `currentColor`, jadi
 * tinggal bungkus dengan className warna (mis. theme.badgeText).
 */
export default function CategoryBadge({ id, size = 64, className = '' }) {
  const iconSize = size * 0.42
  const offset = (size - iconSize) / 2

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      width={size}
      height={size}
      aria-hidden="true"
    >
      {/* fill lembut */}
      <circle cx={size / 2} cy={size / 2} r={size / 2 - 2} fill="currentColor" opacity="0.08" />
      {/* cincin luar putus-putus, kesan "segel" */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={size / 2 - 2}
        fill="none"
        stroke="currentColor"
        strokeWidth={size * 0.022}
        strokeDasharray={`${size * 0.02} ${size * 0.055}`}
        opacity="0.55"
      />
      {/* cincin dalam tipis */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={size / 2 - size * 0.14}
        fill="none"
        stroke="currentColor"
        strokeWidth={size * 0.012}
        opacity="0.3"
      />
      <svg x={offset} y={offset} width={iconSize} height={iconSize} viewBox="0 0 24 24">
        {CATEGORY_ICONS[id]}
      </svg>
    </svg>
  )
}
