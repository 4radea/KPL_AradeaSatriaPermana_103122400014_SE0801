# Tugas Mandiri 02: Pemrograman JavaScript
Nama: Aradea Satria Permana 
NIM: 103122400014
Kelas: SE-08-01

## Soal
Buatlah sebuah fungsi bernama fizzBuzz yang menerima input larik (array) dan mengembalikan deretan bilangan dan "Fizz" untuk kelipatan 2, "Buzz" untuk kelipatan 7, dan "FizzBuzz" untuk kelipatan 14.

## Kode Sumber
Tersedia di [tm.js](tm.js), [test.js](test.js)

## Output
<img width="1211" height="395" alt="output" src="https://github.com/user-attachments/assets/9e066cde-5908-4806-acbf-59cd8f710ea6" />

## Deskripsi Program
Program ini menggunakan logika percabangan if-else untuk mengevaluasi setiap elemen dalam array:

Prioritas Pertama: Mengecek kelipatan 14 (angka % 14 === 0) untuk menghasilkan "FizzBuzz" agar tidak tertukar dengan kelipatan 2 atau 7 saja.

Kondisi Lain: Mengonversi angka menjadi "Fizz" jika habis dibagi 2 dan "Buzz" jika habis dibagi 7.

Penggabungan: Menggunakan operator penyambungan string untuk menggabungkan hasil evaluasi dengan spasi sebagai pemisah antar elemen.
