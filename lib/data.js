// Model data BENUO SMART — Portal Layanan Instansi Kabupaten Penajam Paser Utara.
// Setiap "instansi" punya halaman detail internal yang menampilkan (embed) sistem
// resmi instansi tersebut di dalam portal.
//
// Field:
//   id        : slug URL  → /instansi/<id>
//   name      : nama resmi instansi
//   short     : singkatan / nama pendek
//   card      : judul pada kartu portal ("\n" = pindah baris)
//   category  : kelompok kartu di beranda
//   icon      : nama ikon (lihat lib/icons.js)
//   color     : warna aksen kartu & hero
//   heroTitle : judul besar di halaman detail
//   heroSub   : subjudul di halaman detail
//   url       : alamat sistem instansi yang di-embed. Kosongkan ('') bila belum ada.
//   embed     : false bila situs tidak bisa/tidak layak ditampilkan (mis. situs down)
//               → halaman detail menampilkan panel "Buka Situs". Default true.
//   proxy     : true bila situs memblokir iframe (X-Frame-Options / CSP frame-ancestors);
//               iframe diarahkan ke /api/embed/<id> yang menyajikan ulang tanpa header
//               pemblokir. Default false (iframe langsung ke url).

export const INSTANSI = [
  {
    id: 'dukcapil',
    name: 'Dinas Kependudukan dan Pencatatan Sipil',
    short: 'Disdukcapil',
    card: 'Layanan Administrasi\nKependudukan',
    category: 'Administrasi & Perizinan',
    icon: 'mail',
    color: '#16A34A',
    heroTitle: 'Sistem Informasi Pencatatan Sipil',
    heroSub: 'Akses layanan daerah Kabupaten Penajam Paser Utara secara online',
    url: 'https://serambinusantara.penajamkab.go.id/',
    proxy: true, // XFO/CSP memblokir embed langsung → tampilkan via proxy internal
  },
  {
    id: 'dpmptsp',
    name: 'Dinas Penanaman Modal & Pelayanan Terpadu Satu Pintu',
    short: 'DPMPTSP',
    card: 'Perizinan &\nInvestasi',
    category: 'Administrasi & Perizinan',
    icon: 'briefcase',
    color: '#2563EB',
    heroTitle: 'Pelayanan Perizinan Terpadu',
    heroSub: 'Pengurusan izin usaha, investasi, dan perizinan daerah secara online',
    url: 'https://sipesan.penajamkab.go.id/',
    proxy: true, // CSP frame-ancestors hanya izinkan mpp → tampilkan via proxy internal
  },
  {
    id: 'bapenda',
    name: 'Badan Pendapatan Daerah',
    short: 'Bapenda',
    card: 'Pajak &\nRetribusi Daerah',
    category: 'Administrasi & Perizinan',
    icon: 'cash',
    color: '#EA580C',
    heroTitle: 'Layanan Pajak & Retribusi Daerah',
    heroSub: 'Informasi dan pembayaran pajak daerah Kabupaten Penajam Paser Utara',
    url: 'https://pajakdaerahpenajam.com/',
  },
  {
    id: 'dinkes',
    name: 'Dinas Kesehatan',
    short: 'Dinkes',
    card: 'Layanan\nKesehatan',
    category: 'Kesehatan & Pendidikan',
    icon: 'heart',
    color: '#EF4444',
    heroTitle: 'Sistem Informasi Kesehatan',
    heroSub: 'Informasi fasilitas dan layanan kesehatan daerah',
    url: 'https://dinkes.penajamkab.go.id/',
  },
  {
    id: 'disdik',
    name: 'Dinas Pendidikan dan Kebudayaan',
    short: 'Disdik',
    card: 'Pendidikan &\nPPDB',
    category: 'Kesehatan & Pendidikan',
    icon: 'cap',
    color: '#0891B2',
    heroTitle: 'Layanan Pendidikan Daerah',
    heroSub: 'Penerimaan peserta didik baru dan layanan pendidikan',
    url: 'https://spmb-disdikpora.penajamkab.go.id/',
  },
  {
    id: 'rsud',
    name: 'Rumah Sakit Umum Daerah',
    short: 'RSUD',
    card: 'Rumah Sakit\nUmum Daerah',
    category: 'Kesehatan & Pendidikan',
    icon: 'heart',
    color: '#DB2777',
    heroTitle: 'Layanan Rumah Sakit',
    heroSub: 'Pendaftaran dan informasi layanan rumah sakit daerah',
    url: 'https://rsudrapb.id/',
  },
  {
    id: 'dishub',
    name: 'Dinas Perhubungan',
    short: 'Dishub',
    card: 'Perhubungan &\nTransportasi',
    category: 'Umum',
    icon: 'bus',
    color: '#15803D',
    heroTitle: 'Layanan Perhubungan',
    heroSub: 'Uji KIR, angkutan umum, dan layanan transportasi daerah',
    url: 'https://www.dishubpenajampaserutara.com/informasi.html',
    embed: false, // situs tidak stabil / kerap tidak merespons
  },
  {
    id: 'pdam',
    name: 'Perumda Air Minum Danum Taka',
    short: 'PDAM',
    card: 'Air Bersih\n(PDAM)',
    category: 'Umum',
    icon: 'drop',
    color: '#0EA5E9',
    heroTitle: 'Layanan Air Minum Daerah',
    heroSub: 'Informasi dan pembayaran tagihan air Perumda Danum Taka',
    url: 'https://www.danumtaka.co.id/',
  },
  {
    id: 'diskominfo',
    name: 'Dinas Komunikasi dan Informatika',
    short: 'Diskominfo',
    card: 'Informasi &\nBerita Daerah',
    category: 'Umum',
    icon: 'news',
    color: '#7C3AED',
    heroTitle: 'Kanal Informasi Daerah',
    heroSub: 'Berita, pengumuman, dan informasi resmi Pemerintah Kabupaten PPU',
    url: 'https://diskominfo.penajamkab.go.id/',
  },
];

// Kategori (urut sesuai kemunculan di INSTANSI)
export const CATEGORIES = INSTANSI.reduce((acc, it) => {
  if (!acc.includes(it.category)) acc.push(it.category);
  return acc;
}, []);

export function instansiById(id) {
  return INSTANSI.find((i) => i.id === id) || null;
}

export function instansiByCategory(cat) {
  return INSTANSI.filter((i) => i.category === cat);
}
