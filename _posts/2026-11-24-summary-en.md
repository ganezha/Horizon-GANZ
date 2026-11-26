---
layout: default
title: "Edisi Horizon GANZ · 2026-11-24"
date: 2026-11-24
lang: id
---

> Dari 15 item, 6 konten penting dipilih

---

**Berita Teknologi**
1. [Nvidia dikabarkan mengangkat kembali Jensen Huang sebagai CEO](#item-tech-news-1) ⭐️ 8.0/10
2. [Ladybird merilis versi alfa pertamanya untuk macOS dan Linux](#item-tech-news-2) ⭐️ 8.0/10
3. [Stalwart memosisikan diri sebagai pengganti Microsoft Exchange yang bisa langsung digunakan](#item-tech-news-3) ⭐️ 7.0/10
4. [New York membatasi sejumlah layanan berlangganan kendaraan dan biaya pascapembelian](#item-tech-news-4) ⭐️ 7.0/10
5. [Z.ai merilis GLM-5.4, model transformer berulang pertamanya](#item-tech-news-5) ⭐️ 7.0/10

**Berita Keuangan**
1. [Nvidia mengangkat kembali Jensen Huang sebagai CEO](#item-finance-news-1) ⭐️ 8.0/10

---

## Berita Teknologi

<a id="item-tech-news-1"></a>
### [Nvidia dikabarkan mengangkat kembali Jensen Huang sebagai CEO](https://www.cnbc.com/2026/11/23/nvidia-jensen-huang-ceo.html) ⭐️ 8.0/10

Dewan direksi Nvidia dikabarkan mengangkat kembali Jensen Huang sebagai CEO. Dalam pernyataan yang dikutip di Hacker News, dewan mengatakan bahwa mereka menerima masukan dari pejabat senior AS sebelum mengambil keputusan dan menyimpulkan bahwa kembalinya Huang tidak menimbulkan risiko terhadap keamanan nasional. Kutipan sumber yang tersedia tidak menjelaskan mengapa Huang diberhentikan atau saran apa yang diberikan para pejabat tersebut.

hackernews · jaz · 23 Nov, 14:00 · [Diskusi](https://news.ycombinator.com/item?id=50611576)

**「Sebelum pengangkatan kembali」** Dewan direksi Nvidia mengatakan bahwa mereka menerima masukan dari pejabat senior AS sebelum mengambil keputusan. NBC News melaporkan bahwa Presiden Donald Trump menelepon dewan dan menyampaikan bahwa perekonomian AS membutuhkan Huang.

**「Independensi dewan direksi」** Seorang komentator menilai bahwa pengakuan dewan atas masukan dari pemerintah AS merupakan bagian yang paling mengungkapkan dari pernyataan tersebut. Komentator lain membandingkannya dengan pembalikan keputusan kepemimpinan OpenAI pada 2023 dan berpendapat bahwa kewenangan formal suatu dewan tidak selalu menunjukkan siapa yang memengaruhi keputusannya.

<details><summary>Referensi</summary>
<ul>
<li><a href="https://www.cnbc.com/2026/11/23/nvidia-jensen-huang-ceo.html">Jensen Huang diangkat kembali sebagai CEO Nvidia. Saham melonjak 31%</a></li>
<li><a href="https://www.nbcnews.com/tech/tech-news/nvidia-reinstates-jensen-huang-rcna610864">Jensen Huang diangkat kembali sebagai CEO Nvidia setelah Trump menelepon dewan direksi</a></li>

</ul>
</details>

**Tag**: `#Nvidia`, `#perangkat keras AI`, `#tata kelola perusahaan`, `#keamanan nasional AS`

---

<a id="item-tech-news-2"></a>
### [Ladybird merilis versi alfa pertamanya untuk macOS dan Linux](https://ladybird.org/posts/alpha/) ⭐️ 8.0/10

Ladybird merilis versi alfa pertamanya untuk macOS dan Linux, sehingga pengguna dapat memasang peramban independen ini tanpa harus mengompilasinya dari kode sumber. Saat mengujinya langsung, Simon Willison menjalankan sejumlah aplikasi WebAssembly, termasuk aplikasi kompresi video FFmpeg dan REPL Python berbasis Pyodide. Namun, Datasette Lite gagal berjalan karena peramban tersebut belum mengimplementasikan \`navigator.serviceWorker.startMessages\(\)\`. Tim proyek memperingatkan bahwa beberapa situs tidak akan berfungsi dan peramban bisa tiba-tiba berhenti bekerja.

hackernews · janvdberg · 23 Nov, 16:13 · [Diskusi](https://news.ycombinator.com/item?id=50614249)

**「Mesin peramban independen」** Ladybird berawal dari SerenityOS dan mengimplementasikan sendiri penguraian HTML, CSS, tata letak, JavaScript, dan WebAssembly, alih-alih menggunakan mesin peramban yang sudah ada. Ladybird masih mengandalkan pustaka eksternal seperti HarfBuzz untuk pembentukan glif teks dan Skia untuk grafis 2D.

**「Yang bisa dilakukan penguji」** Penguji dapat melaporkan situs yang tidak berfungsi langsung dari peramban dan meninjau laporan kegagalan sebelum memutuskan apakah akan mengirimkannya.

**「Laporan awal kompatibilitas」** Seorang komentator di Hacker News melaporkan bahwa antarmuka noVNC Proxmox berfungsi dan terasa lebih responsif daripada di Firefox. Komentator lain mengatakan bahwa semua situs yang dicobanya tampil dengan benar, tetapi pengguliran halaman agak tersendat. Ini adalah pengalaman masing-masing pengguna, bukan hasil pengukuran kompatibilitas atau kinerja secara luas.

**Tag**: `#Ladybird`, `#mesin peramban`, `#kompatibilitas web`, `#rilis alfa`

---

<a id="item-tech-news-3"></a>
### [Stalwart memosisikan diri sebagai pengganti Microsoft Exchange tanpa perlu mengubah konfigurasi](https://stalw.art/blog/microsoft-exchange-replacement/) ⭐️ 7.0/10

Stalwart mengatakan bahwa server email yang dihosting sendiri kini dapat menggantikan Microsoft Exchange tanpa mengharuskan administrator mengubah konfigurasi yang sudah ada. Judul pengumumannya menyebut Stalwart sebagai “pengganti yang bisa langsung digunakan”, tetapi materi yang tersedia tidak menyebutkan versi Stalwart yang diperlukan, klien Outlook mana yang didukung, atau fitur Exchange mana yang tetap tersedia.

hackernews · shaunpud · 23 Nov, 22:32 · [Diskusi](https://news.ycombinator.com/item?id=50620349)

**「Kompatibilitas klien Exchange」** Agar server Exchange bisa diganti tanpa mengganti klien email, server pengganti harus mendukung protokol yang digunakan klien tersebut, bukan sekadar menyediakan akses ke kotak surat. Pengumuman Stalwart menyebut MAPI melalui HTTP, Exchange Web Services \(EWS\), dan Exchange ActiveSync sebagai beberapa protokol yang ditambahkan pada versi 1.2.0.

**「Hal yang perlu diperiksa sebelum migrasi」** Stalwart mencantumkan dukungan untuk Microsoft Exchange, tetapi itu tidak membuktikan kompatibilitas penuh dengan Outlook. Sebelum bermigrasi, administrator email sebaiknya menguji versi Outlook dan alur kerja yang mereka gunakan. Jika retensi arsip yang tahan terhadap manipulasi diperlukan, mereka juga perlu memastikan apakah fitur itu tersedia dalam paket Stalwart mereka atau apakah diperlukan arsip terpisah.

**「Diskusi komunitas」** Para komentator mempertanyakan apakah pengguna Outlook bisa mempertahankan alur kerja Exchange yang sama. Menurut mereka, akses IMAP saja tidak sama dengan integrasi Exchange. Komentator lain mengatakan bahwa paket reguler dan edisi sumber terbuka Stalwart tidak menyediakan pengarsipan tahan manipulasi yang menurutnya diperlukan untuk mematuhi aturan penyimpanan catatan di Jerman.

<details><summary>Referensi</summary>
<ul>
<li><a href="https://stalw.art/blog/microsoft-exchange-replacement/">Stalwart kini bisa langsung menggantikan Microsoft Exchange</a></li>
<li><a href="https://stalw.art/">Server Email &amp; Kolaborasi Stalwart</a></li>

</ul>
</details>

**Tag**: `#Stalwart`, `#Microsoft Exchange`, `#kompatibilitas Outlook`, `#email yang dihosting sendiri`, `#pengarsipan email`

---

<a id="item-tech-news-4"></a>
### [New York membatasi beberapa jenis langganan kendaraan dan biaya pascapembelian](https://www.governor.ny.gov/news/money-your-pockets-governor-hochul-signs-bill-restricting-exploitative-vehicle-subscription) ⭐️ 7.0/10

Gubernur New York Kathy Hochul menandatangani undang-undang yang membatasi jenis langganan kendaraan tertentu dan biaya yang dikenakan setelah pembelian. Undang-undang ini tidak melarang semuanya: pengecualian yang dilaporkan mencakup radio satelit, layanan terhubung yang memerlukan jaringan data agar tetap berfungsi, serta fitur bantuan pengemudi yang bergantung pada perangkat lunak.

hackernews · DeepLogin · 24 Nov, 02:27 · [Diskusi](https://news.ycombinator.com/item?id=50622774)

**「Cara kerja langganan kendaraan」** Membeli mobil tidak selalu berarti pembeli bisa terus menggunakan semua fiturnya. Produsen atau dealer dapat mengenakan biaya berkala setelah mobil terjual. Biaya itu bisa dikenakan untuk mengakses fitur yang sudah tertanam di mobil atau untuk membayar layanan berkelanjutan seperti radio satelit dan konektivitas di dalam mobil.

**「Diskusi komunitas」** Seorang komentator mengutip pengecualian dalam rancangan undang-undang Senat untuk mendukung pendapatnya bahwa SiriusXM dan fitur kendali jelajah canggih Tesla tampaknya tidak terdampak. Komentator lain mempertanyakan apakah produsen mobil bisa memanfaatkan pengecualian untuk layanan terhubung agar tetap dapat mengenakan biaya atas fitur seperti pemanas jok dengan membuatnya bergantung pada koneksi seluler.

<details><summary>Referensi</summary>
<ul>
<li><a href="https://www.governor.ny.gov/news/money-your-pockets-governor-hochul-signs-bill-restricting-exploitative-vehicle-subscription">Uang di Kantong Anda: Gubernur Hochul Menandatangani Rancangan Undang-Undang yang Membatasi ...</a></li>

</ul>
</details>

**Tag**: `#perangkat-lunak-otomotif`, `#harga-langganan`, `#kendaraan-terhubung`, `#perlindungan-konsumen`

---

<a id="item-tech-news-5"></a>
### [Z.ai merilis GLM-5.4, transformer berulang pertamanya](https://simonwillison.net/2026/Nov/23/glm-54/) ⭐️ 7.0/10

Z.ai merilis GLM-5.4, transformer berulang pertamanya, untuk pelanggan Coding Plan. Untuk saat ini, model itu tidak tersedia melalui akses API reguler maupun sebagai model dengan bobot terbuka. Simon Willison mengonfirmasi bahwa kunci Coding Plan berfungsi dengan Responses API Z.ai yang sudah tersedia dan kompatibel dengan OpenAI. Model ini menjalankan kelompok lapisan transformer yang sama berulang kali untuk menyempurnakan representasi internalnya, sehingga kedalaman efektifnya bertambah tanpa menambah parameter. Laporan Willison tidak menyertakan tolok ukur pemrograman yang menunjukkan apakah perubahan ini meningkatkan kinerja.

rss · Simon Willison · 23 Nov, 23:40

**「Cara kerja pengulangan pada transformer」** Transformer standar menjalankan setiap lapisan satu kali pada setiap lintasan maju. Transformer berulang memasukkan kembali keluaran sekelompok lapisan ke kelompok lapisan yang sama. Cara ini menambah komputasi saat inferensi tanpa menambah parameter model.

**「Akses API」** Pengembang yang menggunakan API reguler Z.ai dapat tetap memakai endpoint Responses API yang kompatibel dengan OpenAI untuk mencoba GLM-5.4, tetapi saat ini mereka memerlukan langganan Coding Plan beserta kunci API-nya.

**Tag**: `#GLM-5.4`, `#transformer berulang`, `#berbagi bobot`, `#model pemrograman`

---

## Berita Keuangan

<a id="item-finance-news-1"></a>
### [Nvidia kembali mengangkat Jensen Huang sebagai CEO](https://www.cnbc.com/2026/11/23/nvidia-jensen-huang-ceo-market-rally.html) ⭐️ 8.0/10

Saham AS menguat pada Senin setelah Nvidia kembali mengangkat Jensen Huang sebagai CEO, lapor CNBC. S&amp;P 500 telah turun lebih dari 9% sejak pengumuman pengunduran dirinya pada 12 November hingga penutupan perdagangan Jumat.

rss · CNBC Finance · 23 Nov, 18:00

**「Latar belakang」** S&amp;P 500 turun lebih dari 9% sejak Nvidia mengumumkan pada 12 November bahwa Jensen Huang telah mengundurkan diri sebagai CEO hingga penutupan perdagangan Jumat. Penurunan itu memperpanjang aksi jual yang bermula di tengah kekhawatiran atas belanja untuk pusat data AI.

<details><summary>Referensi</summary>
<ul>
<li><a href="https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Announces-CEO-Transition/">NVIDIA Corporation - NVIDIA Mengumumkan Pergantian CEO</a></li>

</ul>
</details>

**Tag**: `#pengangkatan kembali CEO Nvidia`, `#koreksi pasar saham AS`, `#belanja infrastruktur AI`, `#valuasi sektor teknologi`

---
