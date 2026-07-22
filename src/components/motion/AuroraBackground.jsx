/**
 * Soft, slowly-drifting gradient blobs used behind hero/dark sections —
 * inspired by react-bits' Aurora/Beams backgrounds. Pure CSS animation,
 * absolutely positioned, aria-hidden since it's purely decorative.
 */
export default function AuroraBackground({ variant = 'light' }) {
  const palette =
    variant === 'dark'
      ? ['rgba(228,199,122,0.16)', 'rgba(140,59,50,0.14)', 'rgba(228,199,122,0.10)']
      : ['rgba(182,134,44,0.14)', 'rgba(140,59,50,0.08)', 'rgba(182,134,44,0.08)']

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <span
        className="aurora-blob"
        style={{
          background: palette[0],
          width: '520px',
          height: '520px',
          top: '-160px',
          right: '-140px',
          animationDuration: '18s',
        }}
      />
      <span
        className="aurora-blob"
        style={{
          background: palette[1],
          width: '380px',
          height: '380px',
          bottom: '-140px',
          left: '-100px',
          animationDuration: '22s',
          animationDelay: '-6s',
        }}
      />
      <span
        className="aurora-blob"
        style={{
          background: palette[2],
          width: '300px',
          height: '300px',
          top: '30%',
          left: '45%',
          animationDuration: '26s',
          animationDelay: '-12s',
        }}
      />
    </div>
  )
}
