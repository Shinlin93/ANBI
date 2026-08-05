// Ikon per kategori layanan — dipakai bersama oleh PillarsOverview.jsx dan
// ServiceCategory.jsx lewat komponen CategoryBadge. Disimpan sebagai .jsx
// (bukan di folder data/) karena berisi elemen JSX.

export const CATEGORY_ICONS = {
  pendirian: (
    <path
      d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  perizinan: (
    <path
      d="M14.7 6.3a1 1 0 010 1.4L12.4 10l4.9 4.9a3 3 0 11-4.2 4.2L8.2 14.2l-2.3 2.3a1 1 0 01-1.4-1.4l2.3-2.3-1-1a3 3 0 013-3l1 1 2.3-2.3a1 1 0 011.4 0z"
      fill="currentColor"
      strokeWidth="0"
    />
  ),
  akuntansi: (
    <path
      d="M4 19V10M10 19V5M16 19v-7M20 19H4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  hr: (
    <>
      <circle cx="9" cy="7" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M2.8 19.5a6.2 6.2 0 0112.4 0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M16 8h5M16 12h5M16 16h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
  audit: (
    <>
      <circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M20 20l-4-4M8.7 11l1.6 1.6L13.3 9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </>
  ),
}
