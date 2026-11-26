---
layout: default
title: "Edisi Horizon GANZ · 2026-11-25"
date: 2026-11-25
lang: id
---

> Dari 10 item, 7 berita penting dipilih

---

**Berita Teknologi**
1. [Pracetak OpenAI mengklaim bahwa eksponen perkalian matriks tepat 9/4](#item-tech-news-1) ⭐️ 9.0/10
2. [GreyNoise melaporkan kampanye intrusi aktif yang menyasar server manajemen Check Point](#item-tech-news-2) ⭐️ 8.0/10
3. [Ternary Bonsai 2.5 27B menjalani uji awal di Mac Mini](#item-tech-news-3) ⭐️ 8.0/10
4. [OpenAI melaporkan bahwa GPT-6.2 mengusulkan struktur minibinder untuk lima target](#item-tech-news-4) ⭐️ 7.0/10
5. [GPT-6.2 Astra menelusuri asal-usul buku sketsa anonim dari tahun 1808 hingga mengaitkannya dengan Vicomte de Chabot](#item-tech-news-5) ⭐️ 7.0/10

**Berita Keuangan**
1. [Jensen Huang kembali menjabat sebagai CEO Nvidia](#item-finance-news-1) ⭐️ 7.0/10
2. [Utah mencabut dakwaan pidana terhadap Kalshi dan para pendirinya](#item-finance-news-2) ⭐️ 7.0/10

---

## Berita Teknologi

<a id="item-tech-news-1"></a>
### [Pracetak OpenAI mengklaim bahwa eksponen perkalian matriks tepat 9/4](https://github.com/openai/math/blob/main/preprints/The-matrix-multiplication-exponent-is-nine-fourths-November-24-2026/paper.pdf) ⭐️ 9.0/10

Sebuah pracetak yang dipublikasikan di repositori GitHub OpenAI mengklaim bahwa eksponen yang menentukan biaya aritmetika untuk mengalikan dua matriks persegi tepat 9/4 \(2.25\). Jika benar, hasil ini akan membantah dugaan bahwa eksponennya adalah 2. Materi yang tersedia tidak memastikan apakah pembuktiannya telah diverifikasi secara independen.

hackernews · E-Reverance · 25 Nov, 01:19 · [Diskusi](https://news.ycombinator.com/item?id=50637220)

**「Eksponen perkalian matriks」** Eksponen perkalian matriks adalah infimum dari semua nilai pangkat α yang memungkinkan dua matriks n × n dikalikan dalam O\(n^α\) operasi aritmetika. Dugaan bahwa eksponennya adalah 2 memungkinkan waktu eksekusi O\(n^\(2+ε\)\) untuk setiap ε tetap dengan ε &gt; 0; dugaan ini tidak mensyaratkan algoritma dengan waktu eksekusi yang tepat kuadratik.

**「Batas bagi algoritma yang lebih cepat」** Jika batas bawah dalam pracetak itu terbukti benar, tidak mungkin ada algoritma dalam model aritmetika yang memiliki eksponen perkalian matriks di bawah 2.25. Hal itu akan membantah dugaan bahwa eksponennya adalah 2, tetapi tidak menunjukkan algoritma mana yang paling cepat dalam praktik.

**「Diskusi komunitas」** Para komentator di Hacker News menunjukkan bahwa batas atas 2.25 saja masih menyisakan kemungkinan bahwa eksponennya adalah 2. Menurut mereka, klaim utamanya adalah adanya batas bawah dengan nilai yang sama, yang akan menutup kemungkinan eksponen yang lebih kecil.

<details><summary>Referensi</summary>
<ul>
<li><a href="https://raw.githubusercontent.com/openai/math/main/preprints/The-matrix-multiplication-exponent-is-nine-fourths-November-24-2026/paper.pdf">Eksponen perkalian matriks adalah sembilan per empat</a></li>

</ul>
</details>

**Tag**: `#perkalian matriks`, `#kompleksitas aljabar`, `#batas bawah komputasi`, `#ilmu komputer teoretis`

---

<a id="item-tech-news-2"></a>
### [GreyNoise melaporkan kampanye intrusi aktif yang menyasar server manajemen Check Point](https://www.greynoise.io/blog/check-point-security-management-servers-intrusion-campaign) ⭐️ 8.0/10

GreyNoise melaporkan kampanye intrusi yang sedang berlangsung dan menyasar Check Point Security Management Servers. Kutipan dalam diskusi Hacker News menjelaskan kelemahan pada sesi HFS: HFS menggunakan Math.random\(\), fungsi JavaScript yang tidak dirancang untuk kriptografi, untuk membuat ID sesi, dan pelaku dilaporkan memalsukan kuki administrator yang bertanda tangan. Materi yang tersedia tidak memastikan bagaimana pelaku pertama kali memperoleh akses atau seberapa luas kampanye tersebut.

hackernews · louiereederson · 24 Nov, 16:32 · [Diskusi](https://news.ycombinator.com/item?id=50630594)

**「Tambalan Check Point sebelumnya」** Menurut Cybersecurity Dive, Check Point mengungkap dan menambal CVE-2026-16232 pada Juli 2026. Celah tersebut dapat memberikan akses administratif penuh melalui SmartConsole, tetapi bukti yang tersedia tidak memastikan apakah celah itu merupakan jalur masuk awal dalam kampanye ini.

**「Pertanyaan yang Belum Terjawab」** Seorang komentator bertanya apakah akses awal melibatkan CVE-2026-16232 dan apakah server Check Point yang menjadi sasaran dapat diakses dari internet; kedua hal itu belum terkonfirmasi dalam materi yang diberikan. Komentator lain mempertanyakan apakah JavaScript seharusnya membuat Math.random\(\) lebih aman secara bawaan, alih-alih menyerahkan pilihan alternatif yang aman secara kriptografis kepada tiap aplikasi.

<details><summary>Referensi</summary>
<ul>
<li><a href="https://www.cybersecuritydive.com/news/ai-enabled-campaign-targets-check-point-security-management-servers/875622/">Kampanye berbantuan AI menyasar Check Point Security Management ...</a></li>

</ul>
</details>

**Tag**: `#Check Point`, `#kampanye intrusi`, `#HFS`, `#keamanan sesi`, `#generator bilangan acak semu`

---

<a id="item-tech-news-3"></a>
### [Ternary Bonsai 2.5 27B Menjalani Uji Awal di Mac Mini](https://prismml.com/news/bonsai-2-5-27b) ⭐️ 8.0/10

Seorang komentator Hacker News yang menguji Ternary Bonsai 2.5 27B dalam format Q2 GGUF melaporkan laju generasi 22–25 token per detik di Mac Mini M5 Pro dengan RAM 24 GB, termasuk 22.3 token per detik saat diminta menghasilkan kode Python. Komentator itu mengatakan bahwa konteks sepanjang 128K token muat di memori, tetapi tidak melaporkan pengujian tugas pemrograman dengan konteks sepanjang itu. Hasil ini dilaporkan oleh pengguna dan belum diverifikasi secara independen.

hackernews · b0m · 24 Nov, 20:08 · [Diskusi](https://news.ycombinator.com/item?id=50633922)

**「Latar Belakang」** Kuantisasi terner merepresentasikan bobot model dengan hanya tiga kemungkinan nilai, sehingga mengurangi kebutuhan memori untuk menyimpan bobot saat menjalankan inferensi lokal. Ternary Bonsai 2 adalah versi pendahulunya; PrismML mengatakan bahwa versi 2.5 menyelesaikan tugas dalam lebih sedikit giliran interaksi dan menggunakan lebih sedikit token daripada versi 2.

**「Apa yang ditunjukkan oleh tolok ukur pemrograman」** Seorang komentator mempertanyakan apakah hasil SWE-bench Verified yang tampak setara dengan Claude Opus 4.6 juga berarti kinerja yang sebanding pada tugas pemrograman nyata. Dalam pengujian terpisah yang mencakup delapan tugas dan dirancang oleh komentator lain, Bonsai 2.5 dan Bonsai 2 masing-masing lulus lima tugas, tetapi versi 2.5 membutuhkan 76 menit, sedangkan pendahulunya membutuhkan 107 menit.

<details><summary>Referensi</summary>
<ul>
<li><a href="https://prismml.com/news/bonsai-2-5-27b">PrismML — Memperkenalkan Ternary Bonsai 2 . 5 27 B : Mendukung sistem berbasis agen...</a></li>

</ul>
</details>

**Tag**: `#kuantisasi terner`, `#inferensi LLM lokal`, `#Apple Silicon`, `#tolok ukur pemrograman`

---

<a id="item-tech-news-4"></a>
### [OpenAI Melaporkan GPT-6.2 Mengusulkan Struktur Minibinder untuk Lima Sasaran](https://openai.com/index/gpt-6-models-demonstrate-intrinsic-protein-design-capabilities/) ⭐️ 7.0/10

OpenAI mengatakan GPT-6.2 menulis kode yang mengusulkan struktur tiga dimensi minibinder untuk lima protein sasaran tanpa menggunakan model khusus protein pada tahap itu. Model khusus tetap digunakan untuk menghasilkan urutan asam amino dan memilih kandidat yang diprediksi akan melipat dan berikatan sesuai rancangan. Kutipan yang diberikan tidak membuktikan bahwa kandidat tersebut bekerja di laboratorium atau bahwa GPT-6.2 mengungguli metode khusus.

hackernews · acossta · 24 Nov, 21:02 · [Diskusi](https://news.ycombinator.com/item?id=50634658)

**「Bentuk dan urutan protein」** Minibinder adalah protein kecil yang dirancang untuk berikatan dengan bagian tertentu pada molekul lain. Mengusulkan bentuk tiga dimensinya berbeda dengan menentukan urutan asam amino yang akan melipat menjadi bentuk tersebut. Prediksi komputasional juga tidak membuktikan bahwa pengikatan benar-benar terjadi di laboratorium.

**「Diskusi komunitas」** Para komentator memperdebatkan apa yang layak disebut sebagai perancangan protein. Seorang komentator mempertanyakan seberapa besar kontribusi yang patut diakui dari GPT-6.2 ketika urutannya dihasilkan oleh model lain. Komentator lain menilai bahwa penggunaan model serbaguna untuk menghubungkan berbagai alat khusus tetap bermanfaat, tanpa menyimpulkan bahwa model itu telah mengungguli alat-alat tersebut.

**Tag**: `#perancangan protein`, `#GPT-6.2`, `#pembuatan kode dengan AI`, `#biologi komputasional`

---

<a id="item-tech-news-5"></a>
### [GPT-6.2 Astra Menelusuri Buku Sketsa Anonim dari 1808 hingga ke Vicomte de Chabot](https://simonwillison.net/2026/Nov/24/astra-historical-mystery/) ⭐️ 7.0/10

Sejarawan Mark Humphries melaporkan bahwa dalam 22 menit dengan arahan minimal, GPT-6.2 Astra mengidentifikasi vicomte de Chabot sebagai sosok yang kemungkinan besar membuat buku sketsa anonim dari tahun 1808 yang disimpan di Perpustakaan Beinecke, Yale. Model itu menemukan entri buku harian yang menunjukkan bahwa Chabot berada di sekitar lokasi tersebut lima hari sebelum tanggal yang tercatat di buku sketsa. Model itu kemudian memperkirakan bahwa jurnal perjalanan Chabot, yang dapat diperoleh dengan mengajukan permintaan kepada Cleveland State University, akan menguatkan atribusi tersebut. Humphries mengatakan penelaahan jurnal itu kemudian mendukung atribusi tersebut. Laporan ini hanya menggambarkan satu kasus, bukan ukuran seberapa andal model dapat mengulangi hasil itu.

rss · Simon Willison · 24 Nov, 16:53

**「Jejak arsip」** Perpustakaan Beinecke, Yale, telah mendigitalkan buku sketsa anonim dari tahun 1808 itu, tetapi jurnal perjalanan vicomte de Chabot hanya dapat diakses dengan mengajukan permintaan kepada Cleveland State University. Sebuah buku harian lain menunjukkan bahwa Chabot berada di dekat sungai yang disebutkan dalam buku sketsa, lima hari sebelum tanggal pada entri buku sketsa tersebut. Ini memberi peneliti petunjuk yang dapat diperiksa silang dengan jurnal perjalanannya.

**Tag**: `#GPT-6.2 Astra`, `#agen riset AI`, `#penelitian arsip`, `#atribusi historis`

---

## Berita Keuangan

<a id="item-finance-news-1"></a>
### [Jensen Huang kembali menjabat sebagai CEO Nvidia](https://www.cnbc.com/2026/11/25/jensen-huang-nvidia-ai-talent-race.html) ⭐️ 7.0/10

CNBC melaporkan bahwa Jensen Huang kembali menjabat sebagai CEO Nvidia pada 23 November setelah mengundurkan diri pada 12 November. Kembalinya Huang menyoroti persaingan untuk merekrut insinyur dan peneliti AI: menurut riset Carnegie Endowment, porsi China dalam kelompok talenta AI global telah melampaui porsi Amerika Serikat.

rss · CNBC Finance · 25 Nov, 01:13

**「Latar Belakang」** Huang mengundurkan diri pada 12 November, dan Nvidia menunjuk kepala keuangan Colette Kress sebagai CEO sementara.

<details><summary>Referensi</summary>
<ul>
<li><a href="https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Announces-CEO-Transition/">NVIDIA Corporation - NVIDIA Mengumumkan Pergantian CEO</a></li>

</ul>
</details>

**Tag**: `#Nvidia`, `#Pergantian CEO`, `#Persaingan AI AS–China`, `#Pasar talenta AI`

---

<a id="item-finance-news-2"></a>
### [Utah mencabut dakwaan pidana terhadap Kalshi dan para pendirinya](https://www.cnbc.com/2026/11/24/utah-drops-charges-against-kalshi-after-it-halted-operations-in-state.html) ⭐️ 7.0/10

Utah mencabut seluruh 14 dakwaan pidana terhadap Kalshi dan dua pendirinya setelah perusahaan itu menghentikan sementara operasinya di negara bagian tersebut. Kantor jaksa agung Utah mengatakan bahwa jaksa dapat mengajukan kembali dakwaan itu jika Kalshi kembali beroperasi di sana.

rss · CNBC Finance · 24 Nov, 20:45

**「Latar Belakang」** Sehari sebelum Utah mengajukan dakwaan bahwa Kalshi menjalankan usaha perjudian ilegal, Komisi Perdagangan Berjangka Komoditas (CFTC), sebuah lembaga federal, menggugat Utah dengan alasan bahwa hanya pemerintah federal yang berwenang mengatur pasar tempat pengguna bertransaksi berdasarkan hasil suatu peristiwa.

**「Dampak」** Pengguna di Utah tidak dapat lagi bertransaksi di Kalshi selama penghentian sementara operasi itu masih berlaku.

<details><summary>Referensi</summary>
<ul>
<li><a href="https://www.cftc.gov/PressRoom/PressReleases/9315-26">CFTC Menggugat untuk Menghentikan Penegakan Hukum oleh Negara Bagian Utah di Tengah ... yang Masih Berlangsung</a></li>
<li><a href="https://finance.yahoo.com/markets/options/articles/utah-went-kalshi-now-federal-133717455.html?fr=sycsrp_catchall">Utah Menindak Kalshi — Kini Regulator Federal Mengambil ...</a></li>

</ul>
</details>

**Tag**: `#Kalshi`, `#Pasar prediksi`, `#Penegakan hukum perjudian di Utah`, `#Yurisdiksi CFTC`

---
