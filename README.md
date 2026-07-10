# BENUO SMART

**Superapps Pemerintah Kabupaten Penajam Paser Utara** — satu aplikasi untuk semua layanan publik Organisasi Perangkat Daerah (OPD): administrasi kependudukan, perizinan, kesehatan, pendidikan, transportasi, bantuan sosial, pajak & tagihan, informasi daerah, smart city, hingga profil pengguna.

Terinspirasi model *Jogja Smart Service* dan mengacu pada layanan Mal Pelayanan Publik Penajam Paser Utara, dengan identitas visual sendiri (hijau *emerald* Kalimantan + aksen emas, semangat **"Benuo Taka"**).

Dibangun dengan **Next.js 14 (App Router)** + **React 18**.

---

## Menjalankan

Prasyarat: **Node.js 18.17+**.

```bash
# 1. install dependency
npm install

# 2. jalankan mode pengembangan
npm run dev
# buka http://localhost:3000

# 3. build & jalankan produksi
npm run build
npm start
```

---

## Struktur Proyek

```
benuo-smart/
├── app/
│   ├── layout.jsx                         # Root layout: font, globals, AppShell
│   ├── globals.css                        # Design system (token warna, komponen)
│   ├── page.jsx                           # Beranda
│   ├── cari/page.jsx                      # Pencarian layanan
│   ├── notifikasi/page.jsx                # Notifikasi
│   ├── profil/page.jsx                    # Profil pengguna
│   └── layanan/
│       ├── [category]/page.jsx            # Halaman kategori (7 layanan utama)
│       └── [category]/[service]/page.jsx  # Detail layanan + alur khusus
├── components/
│   ├── AppShell.jsx                       # Kolom aplikasi + BottomNav + Toast
│   ├── TopBar.jsx                         # Header beranda + search
│   ├── SubHeader.jsx                      # Header halaman dalam (tombol kembali)
│   ├── BottomNav.jsx                      # Navigasi bawah (app-like)
│   ├── Icon.jsx                           # Renderer ikon SVG
│   └── Toast.jsx                          # Notifikasi singkat + showToast()
├── lib/
│   ├── data.js                            # Model data (kategori, layanan, berita) + helper
│   └── icons.js                           # Kumpulan path ikon SVG
├── package.json
├── next.config.mjs
└── jsconfig.json
```

## Struktur Layanan (mengikuti sitemap)

1. **Layanan Administrasi** — Administrasi Kependudukan (KTP, KK, Akta Kelahiran, Pindah Domisili), Perizinan (Izin Usaha, IMB/PBG, Izin Konstruksi, Izin Reklame, Surat Domisili), Status & Tracking Pengajuan
2. **Layanan Publik** — Kesehatan, Pendidikan, Transportasi & Perhubungan, Sosial & Bantuan
3. **Pembayaran & Pajak** — Pajak Daerah (PBB, Pajak Kendaraan, Retribusi), Tagihan (Air/PDAM), Riwayat Transaksi
4. **Informasi Daerah** — Berita, Event/Agenda, Pengumuman, Statistik Daerah
5. **Smart City Features** — CCTV Kota
6. **Profil Pengguna** — Data Diri, Dokumen Digital, Notifikasi, Pengaturan
7. **Lainnya** — Tentang Kami, FAQ, Kontak, Bantuan

## Menambah / Mengubah Layanan

Seluruh menu didefinisikan **satu tempat** di `lib/data.js` (array `CATS`). Tambahkan item pada `groups[].items` dengan format `['Nama', 'Deskripsi', 'namaIkon']` — halaman kategori & detail otomatis mengikuti.

Untuk alur khusus (mis. form pembayaran), tambahkan komponen di `app/layanan/[category]/[service]/page.jsx` lalu daftarkan pada objek `FLOWS`. Selain itu layanan memakai form generik `GenericService`.

## Catatan Integrasi

Aplikasi ini adalah **prototype frontend**. Untuk produksi, hubungkan ke backend/API OPD terkait:
- Autentikasi warga (mis. SSO / Identitas Kependudukan Digital)
- Disdukcapil (kependudukan), DPMPTSP (perizinan), Bapenda (pajak), Dinkes (kesehatan), Perumda Air Minum, dll.
- Satu Data PPU untuk statistik & informasi daerah

---

© 2026 Diskominfo Kabupaten Penajam Paser Utara · Prototype v1.0
