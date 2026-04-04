# Tugas Pendahuluan 06

**Nama** : Aradea Satria Permana  
**NIM** : 103122400014  
**Kelas** : SE-08-01  

---

## Soal

Diberikan dua kode yang sama-sama melakukan operasi pembagian. Pertama menggunakan asersi, kedua menggunakan eksepsi.

<img width="959" height="672" alt="image" src="https://github.com/user-attachments/assets/59c4dd8e-7b5e-4646-81a0-383822444502" />
Menurutmu, kapankah kita saatnya menggunakan asersi atau eksepsi untuk fungsi seperti ini di atas? Apakah kita harus sepenuhnya asersi, atau sepenuhnya eksepsi? Lakukan riset dan berikan jawabannya dalam bentuk esai minimal 300 kata.

## Jawaban
Dalam pemrograman, baik asersi (assert) maupun eksepsi (exception) merupakan mekanisme untuk menangani kondisi kesalahan. Meskipun keduanya terlihat mirip, sebenarnya memiliki tujuan dan konteks penggunaan yang berbeda. Oleh karena itu, penting untuk memahami kapan sebaiknya menggunakan masing-masing.

Asersi digunakan untuk memeriksa kondisi yang seharusnya selalu benar dalam program. Biasanya, asersi dipakai oleh programmer untuk memastikan bahwa logika internal program berjalan sesuai harapan. Jika kondisi asersi tidak terpenuhi, maka program akan langsung berhenti. Hal ini membantu dalam menemukan bug lebih cepat karena kesalahan langsung terdeteksi saat itu juga. Selain itu, asersi juga dapat berfungsi sebagai dokumentasi yang menjelaskan asumsi dalam kode.

Namun, asersi tidak cocok digunakan untuk menangani kesalahan yang berasal dari input pengguna atau kondisi eksternal. Hal ini karena dalam beberapa kasus, asersi dapat dinonaktifkan pada lingkungan produksi. Jika hal tersebut terjadi, maka pengecekan yang dilakukan oleh asersi tidak akan berjalan, sehingga berpotensi menimbulkan kesalahan yang tidak terdeteksi.

Sebaliknya, eksepsi digunakan untuk menangani kesalahan yang memang mungkin terjadi saat program dijalankan. Contohnya adalah kesalahan input, seperti memasukkan tipe data yang tidak sesuai atau melakukan pembagian dengan nol. Dengan menggunakan eksepsi, program dapat memberikan pesan kesalahan yang jelas dan tetap dapat dikendalikan menggunakan blok try...catch. Hal ini membuat eksepsi lebih aman dan lebih cocok digunakan dalam aplikasi nyata.

Pada fungsi divide(a, b), penggunaan eksepsi lebih tepat untuk memvalidasi tipe data dan mencegah pembagian dengan nol. Hal ini karena kesalahan tersebut bisa saja terjadi akibat input pengguna. Sementara itu, asersi lebih cocok digunakan untuk memastikan kondisi internal yang tidak seharusnya dilanggar oleh program.

Kesimpulannya, kita tidak harus memilih antara menggunakan asersi atau eksepsi secara sepenuhnya. Keduanya memiliki peran yang berbeda dan saling melengkapi. Asersi digunakan untuk mendeteksi bug dan memastikan asumsi internal program, sedangkan eksepsi digunakan untuk menangani kesalahan yang mungkin terjadi saat program berjalan. Dengan menggunakan keduanya secara tepat, kita dapat menghasilkan kode yang lebih aman, jelas, dan mudah dipelihara.
