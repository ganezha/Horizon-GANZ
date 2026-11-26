---
layout: default
title: "Edisi Horizon GANZ · 2026-11-22"
date: 2026-11-22
lang: id
---

> Dari 7 item, 3 konten penting dipilih

---

**Berita Teknologi**
1. [Lean dan Hipotesis Riemann: Apa yang Diverifikasi?](#item-tech-news-1) ⭐️ 8.0/10
2. [Mengganti adaptor Ethernet USB mengatasi penurunan kecepatan unduh sebesar 75%](#item-tech-news-2) ⭐️ 7.0/10
3. [Muru menyasar ASGI dan WSGI dengan server berbasis Rust](#item-tech-news-3) ⭐️ 7.0/10

---

## Berita Teknologi

<a id="item-tech-news-1"></a>
### [Lean dan Hipotesis Riemann: Apa yang Diverifikasi?](https://leanprover-community.github.io/blog/posts/riemann-hypothesis/) ⭐️ 8.0/10

Sebuah tulisan di blog komunitas Lean berjudul “Verifikasi Hipotesis Riemann dengan Lean” memicu diskusi tentang apa yang telah diformalkan dan bagaimana hasilnya diperiksa. Teks tulisan itu tidak tersedia dalam materi yang diberikan. Judul dan komentar saja tidak cukup untuk memastikan teorema mana yang diperiksa atau apakah Lean memverifikasi sebuah bukti.

hackernews · g-b-r · 21 Nov, 14:36 · [Diskusi](https://news.ycombinator.com/item?id=50589618)

**「Apa yang diperiksa Lean」** Pemeriksa bukti Lean memverifikasi apakah suatu bukti sesuai dengan pernyataan formal yang dirumuskan secara presisi. Jadi, memeriksa bukti dan memastikan bahwa pernyataan itu benar-benar menyatakan konjektur yang dimaksud adalah dua tugas yang berbeda. Blog komunitas Lean mencatat bahwa para pakar Lean dan teori bilangan telah menelaah pernyataan formal Mathlib, \`RiemannHypothesis\`.

**「Diskusi komunitas」** Seorang komentator berpendapat bahwa jika beberapa pemeriksa bukti Lean yang diimplementasikan secara terpisah memberikan hasil yang sama, kemungkinan adanya bug pada pemeriksa akan lebih kecil. Komentator lain mempertanyakan seberapa independen implementasi tersebut sebenarnya, dengan mengutip laporan tentang salah satunya yang menerima sanggahan palsu terhadap konjektur Collatz. Para komentator juga memperdebatkan seberapa besar andil Claude dibandingkan dengan andil pakar manusia yang mengarahkan pekerjaan itu.

<details><summary>Referensi</summary>
<ul>
<li><a href="https://leanprover-community.github.io/blog/posts/riemann-hypothesis/">Verifikasi Hipotesis Riemann dengan Lean | Blog komunitas Lean</a></li>

</ul>
</details>

**Tag**: `#Lean`, `#verifikasi formal`, `#Hipotesis Riemann`, `#kernel pemeriksa bukti`, `#matematika berbantuan AI`

---

<a id="item-tech-news-2"></a>
### [Mengganti adaptor Ethernet USB mengatasi penurunan kecepatan unduh sebesar 75%](https://blog.tymscar.com/posts/studiodisplayethernet/) ⭐️ 7.0/10

Sebuah tulisan blog melaporkan bahwa kecepatan unduh turun 75% ketika adaptor Ethernet USB milik penulis dihubungkan melalui hub USB monitor. Menurut laporan itu, mengganti adaptor mengatasi perlambatan tersebut, tetapi pengalaman itu tidak membuktikan bahwa cacat tersebut umum terjadi pada monitor itu.

hackernews · soheilpro · 21 Nov, 10:36 · [Diskusi](https://news.ycombinator.com/item?id=50587875)

**「Bagaimana hub USB dapat memengaruhi Ethernet」** Ketika adaptor Ethernet dicolokkan ke hub USB Studio Display XDR, paket yang masuk melewati hub sebelum sampai ke komputer. Adaptor menyimpan sementara paket-paket itu di buffer sambil menunggu komputer membacanya. Jika buffer penuh, paket yang baru masuk bisa terbuang sehingga laju transfer data unduhan menurun.

**「Apa yang perlu diuji」** Jika unduhan melambat saat menggunakan hub USB monitor, coba colokkan adaptor yang sama langsung ke komputer. Lalu, coba adaptor lain melalui hub tersebut untuk membantu menentukan penyebabnya.

**「Diskusi komunitas」** Seorang komentator menjelaskan perlambatan itu sebagai reaksi berantai: latensi tambahan saat data melewati hub menunda konfirmasi penerimaan, buffer adaptor terisi penuh, lalu paket terbuang. Komentator lain melaporkan masalah serupa pada MacBook yang terhubung ke dok Thunderbolt dan mengatakan bahwa mengaktifkan kontrol aliran membantu.

<details><summary>Referensi</summary>
<ul>
<li><a href="https://blog.tymscar.com/posts/studiodisplayethernet/">Monitor Saya Memangkas Kecepatan Unduh hingga 75%</a></li>

</ul>
</details>

**Tag**: `#hub USB`, `#adaptor Ethernet`, `#laju transfer data jaringan`, `#diagnosis masalah perangkat keras`

---

<a id="item-tech-news-3"></a>
### [Muru menyasar ASGI dan WSGI dengan server berbasis Rust](https://simonwillison.net/2026/Nov/21/muru/) ⭐️ 7.0/10

Graham Dumpleton sedang mengembangkan Muru, server berbasis Rust yang dikembangkan dengan bantuan AI dan dirancang untuk menjalankan aplikasi web Python berbasis ASGI maupun WSGI di lingkungan pengembangan dan produksi. Seri tulisan publiknya tentang pengembangan Muru membahas berbagai topik, termasuk arsitektur worker, HTTPS lokal, penerapan canary, dan integrasi Kubernetes. Tulisan Simon Willison menjelaskan tujuan proyek tersebut, tetapi tidak memastikan kesiapan Muru untuk penggunaan di lingkungan produksi maupun menyajikan hasil uji kinerja yang membandingkannya dengan server lain.

rss · Simon Willison · 21 Nov, 23:56

**「Latar Belakang」** WSGI adalah antarmuka sinkron yang secara tradisional digunakan untuk menghubungkan aplikasi web Python dengan server, sedangkan ASGI juga mendukung aplikasi asinkron. Sekitar 20 tahun sebelumnya, Dumpleton memulai proyek mod\_wsgi agar aplikasi WSGI dapat dijalankan melalui Apache.

**Tag**: `#Server web Python`, `#Rust`, `#ASGI`, `#WSGI`

---
