/**
 * Tekstur titik-titik halus untuk memberi kedalaman pada background section
 * tanpa mengganggu keterbacaan teks. Warna & opacity dikontrol lewat class
 * teks di parent (mis. className="text-cream/[0.05]"), bukan lewat prop,
 * supaya konsisten dengan konvensi Tailwind di project ini.
 *
 * `id` WAJIB unik per pemakaian dalam satu halaman (dipakai sebagai id
 * <pattern> SVG) — jika dua instance memakai id yang sama, browser hanya
 * akan merender definisi pattern yang pertama.
 */
export default function DotGrid({ id, className = '', gap = 28, dot = 1.3 }) {
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
    >
      <defs>
        <pattern id={id} width={gap} height={gap} patternUnits="userSpaceOnUse">
          <circle cx={dot} cy={dot} r={dot} fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  )
}
