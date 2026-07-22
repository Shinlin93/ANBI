# Daftar Aset Visual (Placeholder → Asli)

Semua slot gambar di website ini masih berupa **placeholder** (kotak putus-putus
dengan nama di tengahnya) sampai kamu mengisinya dengan aset asli. Setiap
placeholder punya nama unik (`assetKey`) yang bisa kamu cari langsung di kode:

```bash
grep -r "hero-dummy-1" src/
```

## Cara mengganti placeholder dengan gambar asli

1. Simpan file gambar di `src/assets/`, beri nama sesuai `assetKey` di tabel
   bawah (misalnya `src/assets/hero-dummy-1.jpg`).
2. Di komponen terkait, import gambarnya lalu ganti `<ImagePlaceholder ... />`
   dengan tag `<img>` biasa. Contoh di `src/components/Hero.jsx`:

   ```jsx
   // sebelum
   import ImagePlaceholder from './ImagePlaceholder.jsx'
   ...
   <ImagePlaceholder assetKey="hero-dummy-1" alt="Konsultan ANBI berdiskusi dengan klien" />

   // sesudah
   import heroImg from '../assets/hero-dummy-1.jpg'
   ...
   <img src={heroImg} alt="Konsultan ANBI berdiskusi dengan klien" className="h-full w-full object-cover" />
   ```

3. Pastikan `alt` text tetap deskriptif (bukan kosong) untuk aset yang
   bermakna, dan gunakan `alt=""` hanya untuk aset yang murni dekoratif
   (misalnya `advantages-map-dummy-1`, karena informasinya sudah diwakili
   teks di sekitarnya).

## Manifest aset

| assetKey | Dipakai di | Ukuran disarankan | Alt text |
|---|---|---|---|
| `hero-dummy-1` | `Hero.jsx` | 800×1000px (4:5) atau 800×800px (1:1) — foto konsultan/tim sedang bekerja atau berdiskusi | Deskriptif (bukan dekoratif) |
| `client-logo-1` … `client-logo-6` | `ClientLogos.jsx` | 160×40px, logo monokrom/PNG transparan (strip otomatis abu-abu → warna penuh saat hover) | `Logo klien [nama perusahaan]` — ganti dengan nama asli tiap klien |
| `advantages-map-dummy-1` | `Advantages.jsx` | 1600×900px, foto/peta Jawa Timur atau kantor — akan ditimpa overlay navy gelap | `alt=""` (dekoratif, overlay sudah cukup gelap sehingga detail gambar tidak krusial) |

## Catatan khusus logo klien

Karena ini adalah logo *perusahaan lain* (bukan aset milik ANBI Consulting sendiri), pastikan sudah dapat izin dari masing-masing klien sebelum menampilkan logo mereka di website. Simpan file di `src/assets/clients/` (bukan langsung di `src/assets/`) supaya terorganisir terpisah dari aset milik sendiri, misal `src/assets/clients/client-logo-1.png`.

## Aset lain yang bukan placeholder komponen

- `src/assets/logo.jpeg` — logo ANBI Consulting, sudah terisi dari file asli yang kamu unggah sebelumnya.
- Favicon memakai file logo yang sama (`index.html` → `<link rel="icon">`).
- Kalau nanti butuh gambar Open Graph untuk share link (`og-image.jpg`, 1200×630px), tambahkan filenya dan hubungkan lewat tag `<meta property="og:image">` di `index.html`.

## Ikon

Ikon (checklist, kategori layanan, panah, dsb.) sengaja dibuat sebagai SVG
langsung di kode — bukan file gambar — supaya tetap tajam di semua ukuran
layar dan tidak perlu diganti manual. Kalau kamu punya set ikon custom,
beri tahu saya dan saya bantu gantikan.
