import { motion, useReducedMotion } from 'framer-motion'

/**
 * Wraps a button/link so it lifts + slightly scales on hover and presses
 * down on tap — the "give it some life" React Bits micro-interaction.
 * Pass any anchor/button props through; `as` controls the rendered tag.
 *
 * Usage: <MagneticButton as="a" href={WA_LINK} className="btn-primary">Chat</MagneticButton>
 */
export default function MagneticButton({
  as = 'a',
  children,
  className,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion()
  const MotionTag = motion[as] || motion.a

  if (shouldReduceMotion) {
    const Tag = as
    return (
      <Tag className={className} {...props}>
        {children}
      </Tag>
    )
  }

  return (
    <MotionTag
      className={className}
      whileHover={{ scale: 1.035, y: -2 }}
      whileTap={{ scale: 0.97, y: 0 }}
      transition={{ type: 'spring', stiffness: 400, damping: 22 }}
      {...props}
    >
      {children}
    </MotionTag>
  )
}
