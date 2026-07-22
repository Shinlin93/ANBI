# ANBI Consulting — Website (Layanan Akuntansi, Pajak, Audit & Legalitas)

Website React + Vite + Tailwind untuk ANBI Consulting (PT Anara Business International) — konsultan akuntansi, perpajakan, audit, dan legalitas usaha di Surabaya, Jawa Timur.

Frontend: React + Vite + Tailwind CSS + Framer Motion
Backend: Node.js + Express (menyimpan pesan kontak ke file JSON)

## Animasi (`src/components/motion/`)

Efek gaya "React Bits" ditulis sendiri di atas `framer-motion` (bukan copy dari reactbits.dev, karena domain itu tidak bisa diakses dari sandbox saat development) — hasilnya setara secara visual dan tetap ringan:

| Komponen | Efek | Dipakai di |
|---|---|---|
| `Reveal.jsx` | Fade + slide-up saat elemen masuk viewport, bisa di-stagger lewat prop `delay` | Hampir semua section |
| `SplitText.jsx` | Reveal per kata untuk heading | Hero, SecondaryCTA |
| `CountUp.jsx` | Angka menghitung naik saat masuk viewport | Stat strip di Hero |
| `SpotlightCard.jsx` | Highlight radial yang mengikuti kursor saat hover | PillarsOverview, ServiceCategory, Advantages, Pricing |
| `MagneticButton.jsx` | Tombol membesar halus saat hover, mengecil saat ditekan | Semua CTA utama |

Semua komponen ini otomatis nonaktif (fallback ke tampilan statis) kalau pengguna mengaktifkan **"reduce motion"** di sistem operasinya — sesuai prinsip aksesibilitas yang sudah dijelaskan di bagian bawah.

## Warna aksen per kategori

Supaya tampilan tidak monoton navy/gold di semua tempat, tiap kategori layanan punya warna aksen sendiri (didefinisikan di `src/data/categoryTheme.js`, dipakai di badge ikon, angka, garis atas kartu, dan efek spotlight):

| Kategori | Warna |
|---|---|
| Akuntansi | Teal (`#0E6E77`) |
| Perpajakan | Terracotta (`#8C3B32`, warna "stempel" yang sudah ada) |
| Audit | Plum (`#5B4A8A`) |
| Legalitas | Forest green (`#355E45`) |

Semua warna ini sudah dicek kontrasnya (≥5.4:1 di atas latar krem/putih) supaya tetap lolos WCAG AA. Section "Cara Kerja" (Process) juga memakai palet yang sama secara bergilir per langkah, biar temanya nyambung.

### Latar lebih berwarna (Hero, Pricing, Keunggulan)

Section navy (Hero, Pricing, Advantages) sekarang tidak lagi gradasi navy polos — ada "mesh" cahaya teal + plum + gold yang berbaur lembut di sudut-sudutnya (`.mesh-navy` di `src/index.css`), dan tiap section kategori layanan punya semburat warna tipis sesuai kategorinya (`.tint-teal`, `.tint-stamp`, dst.) supaya terasa lebih hidup saat di-scroll, bukan berulang datar.

Untuk section Advantages yang punya foto/peta di latar, opacity glow-nya sengaja saya buat lebih rendah dan overlay gelapnya sedikit dipertebal — saya hitung skenario terburuk (glow di atas area foto paling terang) dan tetap lolos AA (5.57:1), karena kontras teks di atas foto itu lebih sulit dipastikan dibanding di atas warna solid.

## Glassmorphism

Tiga utility class di `src/index.css` — `.glass-light`, `.glass-dark`, `.glass-gold` — dipakai di elemen yang memang tampil "melayang" di atas latar lain: navbar, kartu kategori mengambang di Hero, kartu di section Keunggulan, dan kartu paket unggulan di Pricing.

Opacity-nya sengaja dibuat cukup tinggi (bukan gaya "sangat tembus pandang") supaya kontras teks tetap terjaga meski latar di baliknya berubah-ubah — sudah saya hitung skenario terburuknya dan tetap lolos AA. Ada juga fallback lewat `@supports` ke warna solid biasa untuk browser lama yang belum dukung `backdrop-filter`.

## Struktur halaman (hierarki)

Urutan section di `src/pages/Home.jsx`, terinspirasi dari pola landing page korporat (badge → headline → trust signal → ringkasan layanan → detail → keunggulan → harga → CTA):

1. **Hero** — badge kepercayaan, headline dua warna, gambar hero + kartu kategori mengambang
2. **ClientLogos** — strip logo klien
3. **PillarsOverview** — 4 kartu ringkasan kategori layanan (tautan ke section detail di bawah)
4. **ServiceCategory** ×4 — detail lengkap tiap kategori (Akuntansi, Pajak, Audit, Legalitas)
5. **Advantages** — section gelap dengan 3 keunggulan + latar peta/foto
6. **Pricing** — 3 paket berlangganan
7. **OneTimeServices** — tabel harga layanan satuan
8. **Process** — 4 langkah alur kerja
9. **SecondaryCTA** — ajakan dengan grafis lingkaran dekoratif
10. **Contact** — CTA band + form kontak fungsional

## Aksesibilitas (WCAG 2.1 AA)

- Semua kombinasi warna teks/latar sudah dihitung rasio kontrasnya dan lolos AA (4.5:1) — beberapa bahkan AAA (7:1). Lihat komentar di `src/index.css` untuk detail per komponen.
- Skip link ("Lewati ke konten utama") di awal halaman untuk pengguna keyboard/pembaca layar.
- Landmark semantik: `<header>`, `<nav>`, `<main>`, `<footer>` digunakan konsisten.
- Hierarki heading `h1` → `h2` → `h3` tidak melompat level.
- Semua elemen interaktif (link, tombol, input) punya `focus-visible` outline yang terlihat jelas.
- Ikon dekoratif diberi `aria-hidden="true"`; ikon/gambar bermakna diberi label yang sesuai.
- Form kontak: setiap input punya `<label>` terhubung, dan status kirim (`sukses`/`gagal`) diumumkan ke pembaca layar lewat `role="status" aria-live="polite"`.
- Animasi menghormati `prefers-reduced-motion`.
- Menu mobile bisa dioperasikan penuh lewat keyboard, dengan `aria-expanded` yang sinkron.

## Aset placeholder

Semua slot foto (bukan ikon) masih berupa **placeholder bernama** (`hero-dummy-1`, `client-logo-1`…`client-logo-6`, `advantages-map-dummy-1`) — lihat **`ASSETS.md`** di root project untuk daftar lengkap, ukuran yang disarankan, dan cara menggantinya dengan file asli.

## 1. Menjalankan di lokal

### Frontend
```bash
npm install
cp .env.example .env      # atur VITE_API_URL kalau backend tidak di localhost:4000
npm run dev
```

### Backend
```bash
cd backend
npm install
npm run dev                # jalan di http://localhost:4000
```

## 2. Struktur konten

- `src/data/company.js` — identitas perusahaan, email, **nomor WhatsApp marketing**, kota, jam operasional
- `src/data/categories.js` — 4 kategori layanan (Akuntansi, Pajak, Audit, Legalitas) beserta daftar layanan masing-masing
- `src/data/pricing.js` — 3 paket berlangganan + daftar harga layanan satuan
- `src/data/process.js` — 4 langkah alur kerja

Ubah konten website cukup dengan mengedit file-file di atas — tidak perlu menyentuh komponen React.

### WhatsApp funnel

Nomor WA marketing diatur satu tempat di `src/data/company.js` (`whatsapp: '628123456789'`) — **wajib diganti dengan nomor asli** sebelum go-live. Format: kode negara `62` diikuti nomor tanpa tanda `+` dan tanpa angka `0` di depan — contoh nomor `0812-3456-7890` ditulis `6281234567890`.

Setelah diganti, nomor ini otomatis dipakai di semua titik funnel berikut:
- Tombol mengambang (sticky) di pojok kanan bawah, muncul di semua halaman
- Tombol "Konsultasi Gratis" di navbar (desktop & mobile)
- Tombol sekunder di Hero ("Konsultasi Gratis 30 Menit")
- Tombol pilih paket di setiap kartu harga (pesan otomatis menyebutkan nama paket yang dipilih)

Form kontak di section "Kontak" tetap ada sebagai jalur alternatif yang menyimpan data ke backend.

## 3. Sebelum go-live

- Update `src/data/company.js` — email, kota, jam operasional sesuai kondisi asli.
- Update harga di `src/data/pricing.js` sesuai kebijakan terbaru.
- `index.html` — canonical URL, domain di structured data.
- `public/sitemap.xml` dan `public/robots.txt` — ganti dengan domain asli.

## 4. Deployment

### Frontend → Vercel
1. Push repo ini ke GitHub.
2. Import project di Vercel, framework preset: **Vite**.
3. Build command: `npm run build`, output directory: `dist`.
4. Tambahkan environment variable `VITE_API_URL` mengarah ke URL backend yang sudah di-deploy.
5. Deploy.

### Backend → Railway (atau VPS)
1. Buat project baru di Railway dari folder `backend/` (set root directory ke `backend`).
2. Start command: `npm start`.
3. Catat URL backend yang sudah live, lalu set sebagai `VITE_API_URL` di project Vercel, redeploy frontend.

## 5. API

`POST /api/contact`

```json
{
  "name": "Budi Santoso",
  "phone": "0812xxxxxxx",
  "email": "budi@company.com",
  "message": "Saya ingin tanya paket Berkembang."
}
```

Validasi semua field, simpan ke `backend/data/inquiries.json`, dan mengembalikan response sukses/gagal dalam format JSON.
