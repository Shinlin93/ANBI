import { motion, useReducedMotion } from 'framer-motion'

/**
 * Word-by-word staggered reveal for headings — the classic React Bits
 * "SplitText" effect. Splits on spaces so JSX line breaks / <span> accents
 * inside `children` still work fine as long as they're passed as a plain
 * string via the `text` prop.
 *
 * Usage: <SplitText text="Kepatuhan usaha Anda" as="h1" className="..." />
 */
export default function SplitText({
  text,
  as = 'span',
  className,
  wordClassName,
  delay = 0,
  staggerDelay = 0.045,
}) {
  const shouldReduceMotion = useReducedMotion()
  const Tag = as
  const words = text.split(' ')

  if (shouldReduceMotion) {
    return <Tag className={className}>{text}</Tag>
  }

  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className={`inline-block will-change-transform ${wordClassName || ''}`}
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: delay + i * staggerDelay,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
            {i < words.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}
