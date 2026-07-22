/**
 * Reusable placeholder for real photos/illustrations you'll drop in later.
 *
 * USAGE — once you have the real asset:
 *   import heroImg from '../assets/hero-dummy-1.jpg'
 *   <img src={heroImg} alt="Deskripsi gambar" className="..." />
 *
 * `assetKey` doubles as: (1) a visible label so it's obvious what goes where,
 * and (2) a `data-asset` attribute you can grep for (`grep -r "hero-dummy-1" src/`)
 * to find every spot referencing that asset name.
 */
export default function ImagePlaceholder({ assetKey, alt, className = '' }) {
  const isDecorative = alt === ''
  const a11yProps = isDecorative
    ? { 'aria-hidden': true }
    : { role: 'img', 'aria-label': alt || `Placeholder gambar: ${assetKey}` }

  return (
    <div
      data-asset={assetKey}
      {...a11yProps}
      className={`flex h-full w-full items-center justify-center border-2 border-dashed border-navy-deep/25 bg-navy-deep/[0.05] ${className}`}
    >
      <div className="flex flex-col items-center gap-2 px-4 text-center">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-navy-deep/40" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="9" r="1.5" />
          <path d="M21 15l-5-5-9 9" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="font-mono text-[11px] font-semibold uppercase tracking-wide text-navy-deep/50">
          {assetKey}
        </span>
      </div>
    </div>
  )
}
