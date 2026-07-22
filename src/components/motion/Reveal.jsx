import { motion, useReducedMotion } from 'framer-motion'

/**
 * Fade + slide-up wrapper triggered once when scrolled into view.
 * Respects prefers-reduced-motion (falls back to an instant, static render).
 *
 * Usage: <Reveal><YourSection /></Reveal>
 * Usage with stagger: <Reveal delay={i * 0.08}><Card /></Reveal>
 */
export default function Reveal({
  children,
  delay = 0,
  y = 22,
  duration = 0.55,
  as = 'div',
  className,
  once = true,
  amount = 0.2,
  ...rest
}) {
  const shouldReduceMotion = useReducedMotion()
  const MotionTag = motion[as] || motion.div

  if (shouldReduceMotion) {
    const Tag = as
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    )
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
