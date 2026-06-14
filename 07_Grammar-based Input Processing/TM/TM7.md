# Tugas Mandiri 07: Grammar-based Input Processing
Nama: Aradea Satria Permana
NIM: 103122400014
Kelas: SE-08-01

## Tugas
Tugas pada kesempatan kali ini adalah membuat fungsi yang menguraikan isi robots.txt menjadi POJO (plain old JavaScript object). Empat properti yang perlu diuraikan dijabarkan di bawah berikut.

User-agent adalah nama robot perayapnya Allow adalah daftar halaman-halaman yang boleh dirayap Disallow adalah daftar halaman-halaman yang tidak boleh dirayap Sitemap adalah sebuah pranala yang menunjuk pada "denah" situs web (biasanya berformat XML)

## Kode Sumber
Tersedia di [index.js](index.js), [test.js](test.js), [structure.d.ts](structure.d.ts)

## Output
<img width="573" height="467" alt="image1" src="https://github.com/user-attachments/assets/6d1f798c-5b26-48e1-849d-a10c77d7af30" />
<img width="304" height="107" alt="image2" src="https://github.com/user-attachments/assets/c754280d-90c7-4d9d-b01e-5f98430e4ee6" />

## Deskripsi Program
Dalam tugas mandiri ini, saya mengimplementasikan teknik Text Processing dan State Management untuk menguraikan berkas konfigurasi robots.txt menjadi sebuah Plain Old JavaScript Object (POJO).
Fokus utamanya adalah menjaga akurasi pemetaan aturan akses robot perayap (crawler) dari berbagai format teks mentah.
