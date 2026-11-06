# uts-vila-permai

Website katalog dan simulasi pemesanan vila untuk **Vila Permai**, penginapan di kawasan Puncak, Kabupaten Bogor. Pengunjung dapat melihat pilihan vila, mencari fasilitas, menghitung perkiraan biaya, dan mengisi formulir pemesanan.

## Fitur

- Menampilkan katalog vila beserta tipe, lokasi, fasilitas, harga per malam, dan status ketersediaan.
- Mencari vila berdasarkan nama atau fasilitas.
- Memilih vila yang tersedia dan menghitung biaya berdasarkan tanggal check-in dan check-out.
- Memvalidasi nama pemesan, tanggal menginap, dan jumlah tamu (1–10 orang).
- Menampilkan ringkasan pemesanan di halaman.
- Mengingat nama tamu terakhir menggunakan `localStorage` browser.

## Teknologi

- HTML
- CSS
- JavaScript tanpa framework atau dependensi tambahan

## Menjalankan proyek

1. Unduh atau clone repository ini.
2. Buka `index.html` di browser, atau jalankan folder proyek dengan ekstensi seperti Live Server di Visual Studio Code.

Tidak diperlukan instalasi paket atau proses build.

## Struktur berkas

```text
uts-vila-permai/
├── index.html   # Struktur halaman katalog dan formulir pemesanan
├── style.css    # Gaya dan tata letak halaman
├── script.js    # Data vila dan interaksi aplikasi
└── README.md    # Dokumentasi proyek
```

## Mengubah data vila

Data contoh vila berada di array `dataVila` pada `script.js`. Setiap vila memiliki `id`, `nama`, `tipe`, `lokasi`, `harga`, `fasilitas`, dan `tersedia`. Ubah data tersebut untuk memperbarui katalog dan pilihan vila pada formulir.

## Batasan

Proyek ini merupakan demo front-end. Pemesanan hanya ditampilkan sebagai ringkasan di browser; tidak ada backend, basis data, pembayaran, atau konfirmasi pemesanan sungguhan. Nama tamu terakhir disimpan hanya di browser yang digunakan.
