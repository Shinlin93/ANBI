/**
 * Animated shifting-gradient text — inspired by react-bits' GradientText.
 * Pure CSS (background-clip: text + background-position keyframe), no JS
 * animation loop needed, so it's cheap and respects prefers-reduced-motion
 * automatically via the global CSS override in index.css.
 */
export default function GradientText({ children, className = '', as = 'span' }) {
  const Tag = as
  return (
    <Tag className={`gradient-text ${className}`}>
      {children}
    </Tag>
  )
}
