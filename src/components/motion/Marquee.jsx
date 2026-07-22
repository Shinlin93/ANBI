/**
 * Infinite horizontal scroll strip — inspired by react-bits' LogoLoop.
 * Duplicates children once so the loop is seamless, pauses on hover/focus,
 * and falls back to a static wrapped row when prefers-reduced-motion is set
 * (handled by the global CSS override in index.css, which freezes the
 * animation — the duplicated set is hidden via aria-hidden so screen
 * readers only see one copy either way).
 */
export default function Marquee({ children, speed = 32, className = '' }) {
  return (
    <div className={`marquee ${className}`}>
      <div className="marquee-track" style={{ animationDuration: `${speed}s` }}>
        <div className="marquee-group">{children}</div>
        <div className="marquee-group" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  )
}
