---
layout: radar
title: Radar berita harian
---
{% assign latest = site.posts.first %}
<header><div class="orbit" aria-hidden="true"><span class="core"><i></i><i></i></span></div><small>REDAKSI DIGITAL</small><h1>Radar berita<br><em>harian.</em></h1>
{% if latest %}<p>Edisi terbaru · {% include date-id.html date=latest.date %}</p><a class="cta" href="{{ latest.url | relative_url }}">Baca edisi terbaru →</a>{% endif %}</header>
{% include team.html edition=latest %}
<section id="arsip"><h2>Arsip berita</h2>
{% for post in site.posts %}<a class="card" href="{{ post.url | relative_url }}"><strong>{% include date-id.html date=post.date %}</strong><span>{% if post.lang == 'id' %}Bahasa Indonesia{% elsif post.lang == 'en' %}Bahasa Inggris{% else %}{{ post.lang | escape }}{% endif %} ↗</span></a>{% endfor %}</section>
