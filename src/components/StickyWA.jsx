import { WA_LINK } from '../utils/whatsapp.js'

export default function StickyWA() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat via WhatsApp"
      className="animate-pulse-ring fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_-4px_rgba(37,211,102,0.5)] ring-2 ring-gold-soft/40 transition-transform duration-300 hover:scale-110"
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.85.5 3.58 1.36 5.07L2 22l5.19-1.44a9.9 9.9 0 004.85 1.24h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.44 17.5 2 12.04 2zm5.86 14.03c-.25.7-1.23 1.29-1.93 1.44-.5.1-1.15.19-3.35-.72-2.81-1.16-4.62-4-4.76-4.19-.14-.19-1.14-1.52-1.14-2.9 0-1.38.72-2.05.98-2.33.26-.28.56-.35.75-.35.19 0 .38 0 .54.01.18.01.42-.07.65.5.25.6.85 2.08.92 2.23.07.15.12.32.02.51-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.28.71 1.17 1.53 1.89 1.05.94 1.94 1.23 2.22 1.37.28.14.44.12.61-.07.17-.19.71-.83.9-1.11.19-.28.38-.24.63-.14.26.09 1.65.78 1.93.92.28.14.47.21.53.33.07.12.07.7-.18 1.4z" />
      </svg>
    </a>
  )
}
