import { useRef } from 'react'

/**
 * Card wrapper with a soft radial "spotlight" that follows the cursor —
 * the popular React Bits hover effect. Pure CSS custom-property + pointer
 * events, no animation library needed. No-ops gracefully on touch devices
 * (no pointer to follow, so it just renders as a plain card).
 *
 * `as` controls the rendered tag — use as="a" for clickable cards (pass
 * href/onClick through props) or leave as the default "div".
 *
 * Usage: <SpotlightCard className="rounded-lg border p-8">...</SpotlightCard>
 * Usage (link): <SpotlightCard as="a" href="#akuntansi" className="...">...</SpotlightCard>
 */
export default function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(182, 134, 44, 0.14)', // gold, low opacity
  as = 'div',
  ...props
}) {
  const ref = useRef(null)
  const Tag = as

  const handleMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--spotlight-x', `${e.clientX - rect.left}px`)
    el.style.setProperty('--spotlight-y', `${e.clientY - rect.top}px`)
  }

  return (
    <Tag
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`spotlight-card relative overflow-hidden ${className}`}
      style={{ '--spotlight-color': spotlightColor }}
      {...props}
    >
      <div className="spotlight-card-glow" aria-hidden="true" />
      <div className="relative">{children}</div>
    </Tag>
  )
}
