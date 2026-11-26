---
layout: default
title: "Edisi Horizon GANZ · 2026-11-21"
date: 2026-11-21
lang: id
---

> Dari 17 butir, 7 konten penting dipilih

---

**Berita Teknologi**
1. [Inkling 2 Mini adalah model berbobot terbuka dengan Transformer berulang](#item-tech-news-1) ⭐️ 8.0/10
2. [Singularitas Navier–Stokes dan Hipotesis Riemann Umum memicu perdebatan tentang Lean](#item-tech-news-2) ⭐️ 8.0/10
3. [Alessandro Masullo mengklaim telah membuktikan Hipotesis Riemann Umum](#item-tech-news-3) ⭐️ 7.0/10
4. [Kenaikan Nasdaq sepanjang 2026 terhapus seiring aksi jual saham AI yang menekan Anthropic](#item-tech-news-4) ⭐️ 7.0/10
5. [Makalah ArXiv melaporkan bahwa model bahasa dapat menyunting bobotnya sendiri tanpa gradien](#item-tech-news-5) ⭐️ 7.0/10
6. [Levent Alpöge mengklaim telah membuktikan Hipotesis Riemann Umum](#item-tech-news-6) ⭐️ 7.0/10

**Berita Keuangan**
1. [Perusahaan AS menerbitkan lebih banyak saham daripada yang mereka beli kembali](#item-finance-news-1) ⭐️ 8.0/10

---

## Berita Teknologi

<a id="item-tech-news-1"></a>
### [Inkling 2 Mini adalah model berbobot terbuka dengan Transformer berulang](https://thinkingmachines.ai/news/inkling-2-mini/) ⭐️ 8.0/10

Inkling 2 Mini dari Thinking Machines digambarkan sebagai model bahasa berbobot terbuka yang menggunakan Transformer berulang, dengan memakai kembali sebagian jaringan dalam beberapa lintasan pemrosesan. Pengguna awal melaporkan bahwa mereka menjalankannya secara lokal pada AMD Ryzen dan Apple Silicon, tetapi pengujian tersebut belum menunjukkan bagaimana kinerjanya dibandingkan dengan model lain pada beragam beban kerja.

hackernews · jasondavies · 20 Nov, 20:12 · [Diskusi](https://news.ycombinator.com/item?id=50581260)

**「Cara kerja Transformer berulang」** Transformer standar menjalankan setiap lapisan sekali per token, sedangkan Transformer berulang menggunakan kembali beberapa lapisan sebelum menghasilkan token berikutnya. Inkling 2 Mini menjalankan lapisan-lapisan tengahnya tiga kali per token, sehingga melakukan lebih banyak komputasi tanpa menambahkan seperangkat bobot tersendiri untuk setiap lintasan.

**「Uji coba lokal awal」** Seorang komentator melaporkan kecepatan dekode 27 token per detik pada Ryzen 395 dengan llama.cpp dan Vulkan; komentator lain melaporkan sekitar 10 token per detik dengan versi Q4 XL pada MacBook M1 Pro berkapasitas memori 32 GB. Penguji yang menggunakan Mac mengatakan bahwa model itu mampu menangani tugas CSV sederhana dengan Python, tetapi gagal mengenali sekeping koin. Ini menunjukkan betapa beragamnya hasil antar tugas dalam pengujian terbatas tersebut.

<details><summary>Rujukan</summary>
<ul>
<li><a href="https://thinkingmachines.ai/news/inkling-2-mini/">Memperkenalkan Inkling 2 Mini - Thinking Machines Lab</a></li>

</ul>
</details>

**Tag**: `#model berbobot terbuka`, `#transformer berulang`, `#inferensi lokal`, `#llama.cpp`

---

<a id="item-tech-news-2"></a>
### [Singularitas Navier–Stokes dan Hipotesis Riemann Umum memicu perdebatan tentang Lean](https://terrytao.wordpress.com/2026/11/20/unforced-euler-singularity-unforced-navier-stokes-singularity-and-the-generalized-riemann-hypothesis/) ⭐️ 8.0/10

Sebuah unggahan tentang singularitas pada persamaan Euler dan Navier–Stokes tanpa gaya eksternal serta Hipotesis Riemann Umum memicu diskusi di Hacker News mengenai pembuktian berbantuan AI yang diperiksa dengan Lean. Unggahan itu sendiri tidak disertakan dalam materi yang diberikan, sehingga tidak jelas apakah ada hasil yang dibuktikan dan, jika ada, hasil apa, atau pernyataan apa yang diperiksa oleh Lean.

hackernews · archon1410 · 20 Nov, 17:21 · [Diskusi](https://news.ycombinator.com/item?id=50578358)

**「Apa yang diverifikasi Lean」** Kernel Lean memeriksa apakah suatu bukti benar-benar membuktikan pernyataan formal yang diberikan, dengan menggunakan aksioma yang dipakai dalam bukti tersebut. Kesesuaian hasil dari kernel-kernel independen mengurangi kekhawatiran akan adanya galat pada pemeriksa bukti, tetapi tidak memastikan bahwa pernyataan formal itu mewakili konjektur yang dimaksud. Untuk memastikannya, definisi dan asumsi perlu ditinjau secara terpisah.

**「Apa yang dipastikan oleh verifikasi Lean」** Sebelum menganggap pemeriksaan Lean yang berhasil sebagai bukti bahwa suatu konjektur telah dibuktikan, penelaah perlu membandingkan pernyataan formal beserta asumsi-asumsinya dengan konjektur asli. Sekalipun kernel-kernel independen memberikan hasil yang sama, yang diperiksa adalah bukti atas pernyataan sebagaimana ditulis, bukan apakah pernyataan itu mewakili klaim matematis yang dimaksud.

**「Apa yang dapat diverifikasi Lean」** Seorang komentator melaporkan bahwa dua kernel Lean yang independen tampaknya menerima suatu bukti. Menurutnya, hal ini memperkecil kemungkinan adanya bug pada kernel. Komentator lain mengajukan pertanyaan berbeda: sekalipun kedua kernel menerima bukti tersebut, apakah pernyataan formalnya benar-benar sesuai dengan konjektur yang dimaksud?

**Tag**: `#pembuktian teorema berbantuan AI`, `#Lean`, `#singularitas Navier–Stokes`, `#Hipotesis Riemann Tergeneralisasi`

---

<a id="item-tech-news-3"></a>
### [Alessandro Masullo Mengklaim Telah Membuktikan Hipotesis Riemann Tergeneralisasi](https://math216.wordpress.com/2026/11/20/hurried-announcement-alessandro-masullo-grh/) ⭐️ 7.0/10

Alessandro Masullo mengumumkan bahwa ia mengklaim telah membuktikan Hipotesis Riemann Tergeneralisasi, salah satu masalah terbuka utama dalam teori bilangan. Berita itu juga menautkan klaim pembuktian lain oleh Levent Alpöge, tetapi tidak menyertakan bukti Masullo maupun verifikasi dari pakar.

hackernews · jasondavies · 20 Nov, 18:33 · [Diskusi](https://news.ycombinator.com/item?id=50579568)

**「Isi hipotesis」** Hipotesis Riemann Tergeneralisasi memperluas Hipotesis Riemann dari fungsi zeta ke fungsi L Dirichlet dan menyatakan bahwa semua nol nontrivial fungsi-fungsi tersebut memiliki bagian real 1/2. Pembuktiannya akan menghasilkan batas yang lebih tajam untuk sebaran bilangan prima dalam barisan aritmetika, misalnya dalam barisan bilangan yang bersisa 1 jika dibagi 4.

**「Apa yang akan berubah jika bukti terverifikasi」** Jika salah satu bukti yang diklaim itu terverifikasi, hasil-hasil yang bergantung pada Hipotesis Riemann Tergeneralisasi, seperti batas eksplisit tertentu untuk jumlah bilangan prima dalam barisan aritmetika, tidak lagi bergantung pada asumsi tersebut. Pengumuman itu sendiri tidak mengubah status hasil-hasil tersebut sebagai hasil bersyarat.

**「Diskusi Komunitas」** Seorang komentator menyebut bahwa draf Masullo setebal 940 halaman dan mencatat bahwa subbagian bernomor pertamanya tampak kosong. Komentator lain berspekulasi tentang kaitannya dengan pengumuman Anthropic, tetapi diskusi itu tidak menunjukkan bahwa AI berperan dalam pekerjaan Masullo.

<details><summary>Referensi</summary>
<ul>
<li><a href="https://ui.adsabs.harvard.edu/abs/2020arXiv200301925E/abstract">Batas eksplisit untuk jumlah bilangan prima dalam barisan aritmetika ...</a></li>

</ul>
</details>

**Tag**: `#Hipotesis Riemann Tergeneralisasi`, `#Teori Bilangan Analitik`, `#Verifikasi Bukti`

---

<a id="item-tech-news-4"></a>
### [Kenaikan Nasdaq sepanjang 2026 terhapus, aksi jual saham AI menekan Anthropic](https://www.theguardian.com/business/2026/nov/20/global-stock-markets-slump-anthropic-ipo-ai-sell-off) ⭐️ 7.0/10

Aksi jual saham AI menghapus kenaikan Nasdaq sepanjang 2026 dan menekan saham Anthropic pada hari kedua perdagangannya setelah IPO, menurut laporan The Guardian. Laporan yang tersedia tidak memastikan apa yang memicu aksi jual tersebut.

hackernews · cdrnsf · 20 Nov, 13:29 · [Diskusi](https://news.ycombinator.com/item?id=50574383)

**「Latar belakang」** Anthropic baru saja melantai di bursa, dan Yahoo Finance melaporkan bahwa investor memandang IPO itu sebagai ujian atas minat pasar terhadap saham AI. Harga IPO adalah harga yang ditetapkan untuk penawaran saham; setelah saham mulai diperdagangkan di bursa, harganya dapat bergerak terlepas dari harga penawaran tersebut.

**「Diskusi pembaca」** Seorang komentator di Hacker News bertanya apakah otomatisasi berbasis AI yang lebih murah pada awalnya dapat mengurangi kontribusi suatu industri terhadap PDB meskipun menekan biaya. Komentator lain mempertanyakan apakah aksi jual itu bisa mengurangi minat investor terhadap kemungkinan IPO OpenAI.

<details><summary>Referensi</summary>
<ul>
<li><a href="https://finance.yahoo.com/markets/live/stock-market-today-friday-november-19-dow-sp-500-nasdaq-anthropic-nvidia-141644188.html">Pasar saham hari ini: Dow dan S&amp;P 500 memasuki fase koreksi, Nasdaq merosot...</a></li>

</ul>
</details>

**Tag**: `#IPO Anthropic`, `#Nasdaq`, `#valuasi saham AI`, `#ekonomi otomatisasi`

---

<a id="item-tech-news-5"></a>
### [Makalah ArXiv Melaporkan Model Bahasa Mengubah Bobotnya Sendiri Tanpa Gradien](https://arxiv.org/abs/2611.21885) ⭐️ 7.0/10

Sebuah makalah di arXiv melaporkan bahwa sebuah model bahasa mengubah bobotnya sendiri tanpa menggunakan gradien dan mempertahankan perubahan yang meningkatkan akurasinya dalam mengerjakan soal latihan. Diskusi itu menyebut bahwa akurasi meningkat karena jejak penalaran yang lebih pendek tidak melampaui batas token. Informasi yang tersedia tidak menunjukkan bahwa perubahan itu meningkatkan kemampuan penalaran model secara lebih luas.

hackernews · lwhsiao · 20 Nov, 16:29 · [Diskusi](https://news.ycombinator.com/item?id=50577265)

**「Perubahan bobot dibandingkan pemberian prompt」** Bobot model adalah parameter numerik yang memengaruhi keluarannya. Prompt mengubah masukan tanpa mengubah parameter tersebut, sedangkan perubahan bobot tetap berlaku untuk permintaan berikutnya. Makalah itu menjelaskan bahwa metodenya tidak menggunakan gradien: model menguji usulan perubahan pada soal latihan dan mempertahankan perubahan yang berhasil, alih-alih menggunakan gradien untuk menentukan cara memperbarui bobotnya.

**「Implikasi bagi evaluasi」** Kenaikan akurasi yang dilaporkan tidak membuktikan bahwa model bernalar lebih baik. Seorang komentator menunjuk lampiran makalah sebagai bukti bahwa perubahan bobot mengatasi kegagalan akibat terlampauinya batas token. Untuk membedakan peningkatan kemampuan penalaran dari sekadar berkurangnya keluaran yang terpotong, evaluator sebaiknya melaporkan persentase keluaran yang terpotong bersama angka akurasi, lalu memeriksa apakah peningkatan akurasi itu bertahan ketika jatah token diperbesar.

**「Diskusi Komunitas」** Seorang komentator berpendapat bahwa penyuntingan itu meningkatkan skor hanya karena mencegah jawaban terpotong. Komentator lain mempertanyakan klaim “tanpa pelatihan” dalam makalah tersebut. Menurutnya, menguji berbagai usulan perubahan pada soal latihan dan mempertahankan perubahan yang berhasil dapat dianggap sebagai pelatihan meskipun tidak menggunakan penurunan gradien.

<details><summary>Referensi</summary>
<ul>
<li><a href="https://news.ycombinator.com/item?id=50577265">Model Bahasa Dapat Menulis Ulang Bobotnya Sendiri | Hacker News</a></li>
<li><a href="https://arxiv.org/abs/2611.21885">[2611.21885] Model Bahasa Dapat Menulis Ulang Bobotnya Sendiri</a></li>
<li><a href="https://news.ycombinator.com/item?id=50577265">Model Bahasa Dapat Menulis Ulang Bobotnya Sendiri | Hacker News</a></li>
<li><a href="https://arxiv.org/abs/2611.21885">[2611.21885] Model Bahasa Dapat Menulis Ulang Bobotnya Sendiri</a></li>

</ul>
</details>

**Tag**: `#model bahasa`, `#penyuntingan bobot`, `#optimisasi tanpa gradien`, `#anggaran token penalaran`

---

<a id="item-tech-news-6"></a>
### [Levent Alpöge mengklaim telah membuktikan Hipotesis Riemann yang Digeneralisasi](https://alpo.ge/remark.pdf) ⭐️ 7.0/10

Dalam pengumuman singkat, Levent Alpöge mengatakan bahwa ia dan Claude menemukan bukti Hipotesis Riemann dan memperluas metode tersebut untuk membuktikan Hipotesis Riemann yang Digeneralisasi. Ia mengatakan bahwa mereka memformalkan argumen itu tanpa asumsi, tetapi materi yang disertakan tidak menunjukkan bahwa bukti tersebut telah diverifikasi secara independen. Ia memperkirakan metode itu juga dapat membuktikan Hipotesis Riemann yang Diperluas, tetapi tidak mengklaim telah membuktikannya.

hackernews · iamronaldo · 20 Nov, 14:16 · [Diskusi](https://news.ycombinator.com/item?id=50574968)

**「Dugaan dan verifikasinya」** Hipotesis Riemann menyatakan bahwa semua titik nol nontrivial fungsi zeta Riemann terletak pada garis dengan bagian real 1/2; Hipotesis Riemann yang Digeneralisasi memperluas klaim tersebut ke fungsi L Dirichlet. Formalisasi dalam Lean memungkinkan pemeriksa bukti memverifikasi pernyataan persis sebagaimana dituliskan dalam kode, tetapi penelaah tetap perlu memastikan bahwa pernyataan itu sesuai dengan dugaan yang dimaksud dan bahwa buktinya tidak menggunakan asumsi yang belum dibuktikan.

**「Diskusi komunitas」** Seorang komentator di Hacker News melaporkan bahwa formalisasi yang diklaim dibuat dalam Lean itu berukuran 1.3 GB dan berisi sekitar 15 juta baris kode. Komentar tersebut hanya menyebut ukuran arsip, bukan apakah Lean berhasil memeriksa bukti yang diklaim itu.

<details><summary>Referensi</summary>
<ul>
<li><a href="https://github.com/CocoSgt/riemann-hypothesis-lean">CocoSgt/ riemann - hypothesis - lean : Salinan repositori Lean milik Levent Alpöge ...</a></li>

</ul>
</details>

**Tag**: `#Hipotesis Riemann yang Digeneralisasi`, `#teori bilangan`, `#pembukti teorema Lean`, `#matematika berbantuan AI`

---

## Berita Keuangan

<a id="item-finance-news-1"></a>
### [Perusahaan AS menerbitkan lebih banyak saham daripada yang mereka beli kembali](https://www.cnbc.com/2026/11/20/equity-issuance-bull-market-problem.html) ⭐️ 8.0/10

Menurut Acadian Asset Management, pada 2024 perusahaan AS membeli kembali lebih banyak saham daripada yang mereka terbitkan, tetapi pada 2026 mereka justru menerbitkan lebih banyak saham daripada yang mereka beli kembali. Hingga pertengahan November 2026, Acadian mencatat penerbitan bersih saham sebesar 3.1% dari nilai total pasar saham AS, di bawah tingkat tertinggi pada masa gelembung teknologi dan gelembung era pandemi.

rss · CNBC Finance · 20 Nov, 14:15

**「Latar Belakang」** Pembelian kembali mengurangi jumlah saham yang dapat diperdagangkan investor, sedangkan penerbitan bersih menambahnya.

**Tag**: `#penerbitan saham AS`, `#pembelian kembali saham`, `#pendanaan AI`, `#penawaran umum perdana`

---
