# Tugas Pendahuluan 02: Pemrograman JavaScript

## Soal

Kamu sudah menulis fungsi mulOfArray. Ujilah dengan input [2, 0, 26, 28, -2], dengan output yang seharusnya adalah 1456. Jika kamu menemukan bahwa hasilnya berbeda, bisakah kamu memperbaikinya? Jika kamu menemukan bahwa hasilnya sama, bisakah kamu menjelaskan mengapa demikian?

## Jawaban

Setelah dilakukan pengujian menggunakan input `[2, 0, 26, 28, -2]`, program menghasilkan output **0**. Hasil ini berbeda dari output yang diharapkan yaitu **1456**.

Perbedaan ini terjadi karena di dalam fungsi terdapat kondisi `if (arr[i] >= 0)`. Kondisi tersebut membuat angka 0 tetap diproses dan ikut dikalikan ke dalam variabel `result`. Dalam operasi perkalian, keberadaan angka 0 akan menyebabkan seluruh hasil menjadi 0, meskipun angka lainnya bernilai positif.

Jika dianalisis, angka yang memenuhi kondisi tersebut adalah 2, 0, 26, dan 28. Karena terdapat 0 di dalamnya, maka proses perkalian langsung menghasilkan 0.

Untuk mendapatkan hasil 1456, angka 0 tidak boleh ikut dikalikan. Oleh karena itu, kondisi perlu diubah menjadi: 'if (arr[i] > 0);'

## Kode Sumber

Tersedia di [index.js](index.js)

## Output
<img width="946" height="283" alt="image" src="https://github.com/user-attachments/assets/9fb95a31-a75e-44ed-86de-2d4ce797ebaf" />

## Deskripsi Program

Program ini menjalankan perkalian semua bilangan positif dalam larik (array). Ini akan bekerja untuk bilangan positif, nol, dan negatif.
