import { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'

/**
 * Animates a number counting up from 0 once it scrolls into view.
 * Only the numeric portion animates — `prefix`/`suffix` render as static text
 * so things like "Rp " or "+" or "%" don't get mangled mid-count.
 *
 * Usage: <CountUp value={100} suffix="+" />
 */
export default function CountUp({
  value,
  prefix = '',
  suffix = '',
  duration = 1.4,
  className,
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const shouldReduceMotion = useReducedMotion()
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  })

  useEffect(() => {
    if (inView && !shouldReduceMotion) {
      motionValue.set(value)
    }
  }, [inView, value, shouldReduceMotion, motionValue])

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Math.round(latest)}${suffix}`
      }
    })
    return unsubscribe
  }, [springValue, prefix, suffix])

  if (shouldReduceMotion) {
    return (
      <span className={className}>
        {prefix}
        {value}
        {suffix}
      </span>
    )
  }

  return (
    <motion.span ref={ref} className={className}>
      {prefix}0{suffix}
    </motion.span>
  )
}
