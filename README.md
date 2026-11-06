# UTS Teknologi Web — Aplikasi Pemesanan Vila Permai

## Identitas Proyek

| Informasi | Keterangan |
|---|---|
| Nama proyek | Vila Permai — Aplikasi Pemesanan Vila |
| Jenis proyek | Ujian/latihan Teknologi Web — aplikasi front-end statis |
| ID proyek | `uts-vila-permai` |
| NIM | `24011130519` |
| Repository GitHub | [saktiju/SachtiJuliansya_24011130519_UTS_VillaPermai](https://github.com/saktiju/SachtiJuliansya_24011130519_UTS_VillaPermai) |

Nama mahasiswa dan kelas tidak dicantumkan karena informasinya belum tersedia.

## Deskripsi Aplikasi

Website katalog dan simulasi pemesanan vila di kawasan Puncak, Kabupaten Bogor. Pengunjung dapat melihat informasi vila, mencari berdasarkan nama atau fasilitas, menghitung perkiraan biaya menginap, dan melihat ringkasan pesanan.

Aplikasi ini berjalan sepenuhnya di browser menggunakan HTML, CSS, dan JavaScript. Data vila disimpan sebagai array di dalam kode; aplikasi belum terhubung ke server atau basis data.

## Cara Menjalankan

1. Clone repository:

   ```bash
   git clone https://github.com/saktiju/SachtiJuliansya_24011130519_UTS_VillaPermai.git uts-vila-permai
   ```

2. Buka folder `uts-vila-permai`.
3. Buka `index.html` di browser, atau gunakan ekstensi Live Server di Visual Studio Code.

Tidak perlu memasang paket atau menjalankan proses build. Koneksi internet diperlukan untuk memuat gambar latar dari Unsplash.

## Status Fitur

- [x] Menampilkan katalog vila, harga, fasilitas, dan status ketersediaan.
- [x] Merender kartu vila secara dinamis dengan JavaScript.
- [x] Mencari vila berdasarkan nama atau fasilitas.
- [x] Mengisi pilihan pemesanan hanya dengan vila yang tersedia.
- [x] Memvalidasi tanggal menginap dan jumlah tamu (1–10 orang).
- [x] Menghitung perkiraan biaya berdasarkan jumlah malam dan harga per malam.
- [x] Menampilkan ringkasan pesanan di halaman.
- [x] Menyimpan nama tamu terakhir di `localStorage`.
- [x] Menyesuaikan tata letak untuk layar tablet dan ponsel.

## Teknologi

- HTML
- CSS
- JavaScript (tanpa framework)
- `localStorage` browser

## Struktur Proyek

```text
uts-vila-permai/
├── index.html   # Struktur halaman katalog dan formulir pemesanan
├── script.js    # Data vila dan interaksi aplikasi
├── style.css    # Gaya dan tata letak responsif
└── README.md    # Dokumentasi proyek
```

## Batasan

Proyek ini merupakan demo front-end. Pemesanan hanya menghasilkan ringkasan di browser dan belum dikirim atau disimpan ke server. Status ketersediaan vila menggunakan data contoh tetap; tidak ada pemeriksaan jadwal, pembayaran, atau konfirmasi WhatsApp otomatis.

Data vila dapat diubah pada array `dataVila` di `script.js`.
