---
layout: default
title: Horizon GANZ
---

<style>
  body {
    background-color: #0f172a;
    color: #e2e8f0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, sans-serif;
  }
  .page-header {
    background: linear-gradient(135deg, #1e293b 0%, #312e81 50%, #0f172a 100%) !important;
    padding: 3rem 1.5rem !important;
    border-bottom: 1px solid rgba(255,255,255,0.08);
  }
  .project-name {
    font-weight: 800 !important;
    letter-spacing: -0.02em;
  }
  .project-tagline {
    color: #cbd5e1 !important;
    opacity: 0.9 !important;
  }
  .btn {
    background: rgba(255,255,255,0.08) !important;
    border: 1px solid rgba(255,255,255,0.18) !important;
    border-radius: 999px !important;
    color: #f8fafc !important;
    padding: 0.55rem 1.2rem !important;
    transition: all 0.2s ease;
  }
  .btn:hover {
    background: rgba(255,255,255,0.16) !important;
    transform: translateY(-1px);
  }
  .main-content {
    max-width: 820px !important;
    margin: 0 auto;
    padding: 2rem 1.25rem 4rem !important;
  }
  .main-content h1, .main-content h2, .main-content h3 {
    color: #f8fafc !important;
    border-bottom: none !important;
  }
  .hero-badge {
    display: inline-block;
    background: rgba(99, 102, 241, 0.18);
    color: #a5b4fc;
    border: 1px solid rgba(99, 102, 241, 0.35);
    padding: 4px 12px;
    border-radius: 999px;
    font-size: 0.85rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
  }
  .digest-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 14px;
    margin-top: 1.25rem;
  }
  .digest-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #1e293b;
    border: 1px solid rgba(148, 163, 184, 0.15);
    border-radius: 16px;
    padding: 1.25rem;
    text-decoration: none !important;
    transition: all 0.2s ease;
    box-shadow: 0 4px 20px rgba(0,0,0,0.2);
  }
  .digest-card:hover {
    transform: translateY(-3px);
    border-color: #818cf8;
    background: #253349;
  }
  .digest-date {
    font-size: 1.15rem;
    font-weight: 700;
    color: #f8fafc;
    margin-bottom: 6px;
  }
  .digest-sub {
    font-size: 0.85rem;
    color: #94a3b8;
  }
  .digest-arrow {
    margin-top: 12px;
    font-size: 0.85rem;
    font-weight: 600;
    color: #818cf8;
  }
  .site-footer {
    border-top: 1px solid rgba(148, 163, 184, 0.15) !important;
    color: #64748b !important;
  }
  .site-footer a {
    color: #94a3b8 !important;
  }
</style>

<div class="hero-badge">📡 AI News Radar</div>

## Edisi Berita Harian

Selamat datang di koran AI pribadi kamu. Pilih tanggal di bawah ini untuk membaca rangkuman berita pilihan hari ini:

<div class="digest-grid">
  {% assign en_posts = site.posts | where: "lang", "en" %}
  {% for post in en_posts limit:30 %}
    <a class="digest-card" href="{{ post.url | relative_url }}">
      <div>
        <div class="digest-date">📅 {{ post.date | date: "%d %b %Y" }}</div>
        <div class="digest-sub">Rangkuman Harian AI</div>
      </div>
      <div class="digest-arrow">Baca sekarang →</div>
    </a>
  {% else %}
    <p style="color:#94a3b8;">Belum ada edisi berita. Jalankan workflow di GitHub Actions untuk membuat edisi pertama.</p>
  {% endfor %}
</div>
