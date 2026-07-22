export const PRICING_TIERS = [
  {
    tier: 'Rintisan',
    title: 'Untuk UMKM',
    who: 'Usaha kecil yang baru mulai tertib administrasi',
    amount: 'Rp 750rb',
    period: '/bulan',
    featured: false,
    features: [
      'Pembukuan dasar bulanan',
      'Lapor SPT Masa (PPh 21/25)',
      'Rekonsiliasi kas & bank',
      'Konsultasi via WhatsApp/email',
      'Laporan keuangan triwulanan',
    ],
    ctaLabel: 'Pilih Paket',
  },
  {
    tier: 'Berkembang',
    title: 'Untuk Usaha Menengah',
    who: 'Usaha dengan transaksi lebih aktif dan tim yang bertumbuh',
    amount: 'Rp 2,5jt',
    period: '/bulan',
    featured: true,
    features: [
      'Pembukuan lengkap bulanan',
      'Lapor SPT Masa & Tahunan',
      'Laporan manajemen bulanan',
      'Konsultasi tak terbatas',
      'Pendampingan e-Faktur/Coretax',
      'Review kepatuhan tahunan',
    ],
    ctaLabel: 'Pilih Paket',
  },
  {
    tier: 'Korporat',
    title: 'Untuk Perusahaan',
    who: 'Kebutuhan multi-entitas, audit, dan advisory strategis',
    amount: 'Custom',
    period: '— sesuai skala',
    featured: false,
    features: [
      'Semua fitur paket Berkembang',
      'Virtual CFO & advisory keuangan',
      'Liaison audit laporan keuangan',
      'Tax planning & pendampingan pemeriksaan',
      'Prioritas SLA & kunjungan rutin',
    ],
    ctaLabel: 'Diskusikan Kebutuhan',
  },
]

export const ONE_TIME_SERVICES = [
  {
    name: 'Pendirian PT (Perseroan Terbatas)',
    description: 'Akta notaris, pengesahan Kemenkumham, NPWP badan, NIB',
    price: 'mulai Rp 4.500.000',
    note: 'proses ±14 hari kerja',
  },
  {
    name: 'Pendirian CV',
    description: 'Akta notaris dan pendaftaran badan usaha perseorangan',
    price: 'mulai Rp 3.000.000',
    note: 'proses ±10 hari kerja',
  },
  {
    name: 'Pengurusan NIB & Izin Usaha (OSS)',
    description: 'Termasuk konsultasi KBLI yang sesuai bidang usaha',
    price: 'mulai Rp 1.500.000',
    note: 'proses ±5 hari kerja',
  },
  {
    name: 'Penyusunan Laporan Keuangan Tahunan',
    description: 'Neraca, laba rugi, arus kas — siap untuk bank atau pajak',
    price: 'mulai Rp 2.000.000',
    note: 'tergantung volume transaksi',
  },
  {
    name: 'Audit Laporan Keuangan',
    description:
      'Audit independen oleh auditor berlisensi, opini wajar tanpa pengecualian',
    price: 'mulai Rp 8.000.000',
    note: 'tergantung skala & kompleksitas',
  },
  {
    name: 'Pelaporan SPT Tahunan Badan',
    description: 'Termasuk rekonsiliasi fiskal dan perhitungan PPh Badan',
    price: 'mulai Rp 1.750.000',
    note: 'per tahun pajak',
  },
]
