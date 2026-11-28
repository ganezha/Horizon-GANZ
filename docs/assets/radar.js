/* Horizon GANZ — navigasi, data edisi, dan jaringan bot. Bisa berjalan tanpa pustaka. */
(() => {
  'use strict';

  // Nama, posisi (0–1) dan warna node. Titik asal tiap bot selalu tetap, sehingga jalur tetap rapi.
  const roles = [
    { id: 'pemantau', name: 'Pemantau', color: '#77aaff', x: .18, y: .26, short: 'Cari sumber',
      task: 'Mengumpulkan judul, tautan, dan waktu terbit dari sumber berita yang dipantau.',
      next: ['penyaring'] },
    { id: 'penyaring', name: 'Penyaring', color: '#69e3ed', x: .50, y: .14, short: 'Pilah berita',
      task: 'Menggabungkan berita ganda sebelum analisis, lalu memilih berita untuk ditulis berdasarkan hasil penilaian.',
      next: ['analis', 'penulis'] },
    { id: 'analis', name: 'Analis', color: '#b499ff', x: .82, y: .26, short: 'Nilai isi',
      task: 'Membaca bahan sumber, menilai relevansi berita, dan menjelaskan mengapa topik itu penting.',
      next: ['penyaring'] },
    { id: 'penulis', name: 'Penulis', color: '#f48cbd', x: .82, y: .73, short: 'Susun draf',
      task: 'Menyusun draf Bahasa Indonesia dari berita terpilih dan memperbaikinya jika Editor meminta revisi.',
      next: ['editor'] },
    { id: 'editor', name: 'Editor', color: '#87e899', x: .50, y: .85, short: 'Periksa fakta',
      task: 'Mencocokkan nama, angka, tanggal, dan klaim dengan bahan sumber. Draf bisa dikembalikan ke Penulis.',
      next: ['penulis', 'penerbit'] },
    { id: 'penerbit', name: 'Penerbit', color: '#f3ce75', x: .18, y: .73, short: 'Terbitkan edisi',
      task: 'Menyusun berita yang lolos pemeriksaan menjadi edisi harian dan menayangkannya di arsip.',
      next: [] }
  ];
  const byId = new Map(roles.map(role => [role.id, role]));
  const app = document.getElementById('utama');
  const dashboard = document.body.dataset.dashboard === 'yes';
  const offline = document.body.dataset.offline === 'yes';
  const home = dashboard ? '' : document.body.dataset.home;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const dateFormat = new Intl.DateTimeFormat('id-ID', {
    day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC'
  });

  function dateLabel(date) {
    return dateFormat.format(new Date(date + 'T12:00:00Z'));
  }

  function template(id) {
    return document.getElementById(id).content.firstElementChild.cloneNode(true);
  }

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function link(text, href, className) {
    const anchor = element('a', className, text);
    anchor.href = href;
    return anchor;
  }

  function route(path = '', date = '') {
    return home + '#/' + path + (date ? '/' + date : '');
  }

  function metricValue(value) {
    if (value === undefined || value.trim() === '') return null;
    const number = Number(value);
    return Number.isSafeInteger(number) && number >= 0 ? number : null;
  }

  // Satu kartu per tanggal. Utamakan edisi asli "-id" jika tanggal yang sama juga punya arsip terjemahan.
  function readEditions() {
    const perDay = new Map();
    for (const anchor of app.querySelectorAll('[data-edition-date]')) {
      const d = anchor.dataset;
      const date = d.editionDate;
      const priority = (d.lang === 'id' ? 2 : 0) + (anchor.pathname.endsWith('summary-id.html') ? 1 : 0);
      if (perDay.has(date) && perDay.get(date).priority >= priority) continue;
      const stats = {};
      for (const key of ['collected', 'unique', 'analyzed', 'selected', 'approved', 'revised']) {
        stats[key] = metricValue(d[key]);
      }
      perDay.set(date, { date, lang: d.lang, href: anchor.href, priority, stats, trending: d.trending === 'yes' });
    }
    return Array.from(perDay.values()).sort((a, b) => b.date.localeCompare(a.date));
  }

  const editions = readEditions();
  const latest = editions[0];
  function articleURL(edition, anchor = '') {
    if (offline) return route('edisi', edition.date) + (anchor ? '/' + encodeURIComponent(anchor) : '');
    return edition.href + (anchor ? '#' + encodeURIComponent(anchor) : '');
  }

  function numberNote(edition, key, sentence) {
    const value = edition?.stats[key];
    return value === null || value === undefined ? '' : sentence.replace('{n}', String(value));
  }

  function roleResult(role, edition) {
    switch (role.id) {
      case 'pemantau': return numberNote(edition, 'collected', '{n} berita terkumpul.');
      case 'penyaring': return [
        numberNote(edition, 'unique', '{n} berita unik.'),
        numberNote(edition, 'selected', '{n} berita dipilih untuk ditulis.')
      ].filter(Boolean).join(' ');
      case 'analis': return numberNote(edition, 'analyzed', '{n} berita melalui tahap analisis.');
      case 'penulis': return numberNote(edition, 'selected', '{n} berita terpilih masuk tahap penulisan.');
      case 'editor': return [
        numberNote(edition, 'approved', '{n} berita lolos pemeriksaan.'),
        numberNote(edition, 'revised', '{n} di antaranya lolos setelah revisi.')
      ].filter(Boolean).join(' ');
      case 'penerbit': return numberNote(edition, 'approved', '{n} berita masuk edisi ini.');
    }
  }

  function mascot(role) {
    const face = element('span', 'mascot mascot-' + role.id);
    face.setAttribute('aria-hidden', 'true');
    return face;
  }

  function roleCard(role, date) {
    const card = link('', route('bot/' + role.id, date), 'role-card');
    card.style.setProperty('--tint', role.color);
    card.title = role.task;
    const label = element('span');
    label.append(element('strong', '', role.name), element('small', '', role.short));
    card.append(mascot(role), label);
    return card;
  }

  function team(date) {
    const section = template('team-view');
    section.querySelector('.team-note').textContent = (date ? 'Edisi ' + dateLabel(date) + '. ' : '')
      + 'Sentuh bot untuk melihat tugasnya.';
    section.querySelector('.replay-link').href = route('proses', date);
    section.querySelector('.role-strip').append(...roles.map(role => roleCard(role, date)));
    return section;
  }

  function archive(items) {
    const section = template('archive-view');
    section.querySelector('.count').textContent = items.length + ' edisi';
    const list = section.querySelector('.archive-list');
    for (const edition of items) {
      const row = link('', articleURL(edition), 'archive-row');
      const left = element('span', 'row-date');
      const icon = element('span', 'date-icon');
      icon.setAttribute('aria-hidden', 'true');
      const time = element('time', '', dateLabel(edition.date));
      time.dateTime = edition.date;
      left.append(icon, time);
      const language = { id: 'Bahasa Indonesia', en: 'Bahasa Inggris', zh: 'Bahasa Mandarin' };
      const right = element('span', 'row-language', language[edition.lang] || edition.lang || 'Baca edisi');
      right.append(element('span', 'row-arrow', '→'));
      row.append(left, right);
      list.append(row);
    }
    if (!items.length) list.append(element('p', 'archive-row', 'Belum ada edisi terbit.'));
    return section;
  }

  function pageHead(title, eyebrow, lead = '') {
    const head = element('div', 'page-head');
    head.append(link('← Beranda', route(), 'back'));
    if (eyebrow) head.append(element('p', 'eyebrow', eyebrow));
    head.append(element('h1', '', title));
    if (lead) head.append(element('p', 'page-lead', lead));
    return head;
  }

  // Satu loop animasi untuk semua node. Saat ganti halaman, loop, timer, dan pengamat dilepas.
  let leavePage = [];
  function resetPage() {
    for (const clean of leavePage) clean();
    leavePage = [];
    app.replaceChildren();
  }

  const random = (low, high) => low + Math.random() * (high - low);
  let userPaused = reduced.matches;

  function network(mount, date, centerPath = 'redaksi', selectedRole = '') {
    const graph = template('graph-view');
    mount.append(graph);
    const arena = graph.querySelector('.arena');
    const canvas = graph.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    const hub = graph.querySelector('.hub');
    const motion = graph.querySelector('.motion');
    hub.href = route(centerPath, date);
    if (centerPath === 'proses') {
      hub.title = 'Lihat urutan tugas redaksi';
      hub.setAttribute('aria-label', hub.title);
    }

    function point(node, x, y, color, id) {
      return { node, x, y, color, id, dx: 0, dy: 0, vx: 0, vy: 0, tx: 0, ty: 0,
        spring: 22, drag: 8, wake: 0, phase: Math.random(), speed: random(.12, .25),
        light: .6, targetLight: .8, px: 0, py: 0 };
    }
    const center = point(hub, .5, .49, '#9aefd3', 'pusat');
    const outer = roles.map(role => {
      const node = link('', route('bot/' + role.id, date), 'satellite');
      node.setAttribute('aria-label', role.name + ' — ' + role.short);
      node.title = role.task;
      node.style.setProperty('--tint', role.color);
      node.append(mascot(role), element('span', 'satellite-label', role.name));
      arena.append(node);
      return point(node, role.x, role.y, role.color, role.id);
    });
    const points = [center, ...outer];
    let width = 1, height = 1, ratio = 1, frame = 0, previous = 0;
    let visible = true, active = selectedRole;
    const abort = new AbortController();

    function position(p) {
      p.px = width * p.x + p.dx;
      p.py = height * p.y + p.dy;
      p.node.style.left = p.px + 'px';
      p.node.style.top = p.py + 'px';
    }

    function springStep(p, now, dt) {
      // Target acak tetap dekat titik asal agar label antarnode tidak bertabrakan.
      if (now >= p.wake) {
        const radius = p === center ? 2.8 : Math.min(9, width * .021);
        p.tx = random(-radius, radius);
        p.ty = random(-radius, radius);
        p.spring = random(16, 37);
        p.drag = random(5, 9);
        p.targetLight = random(.38, 1);
        p.wake = now + random(950, 3300);
      }
      // Jangan geser target yang sedang disentuh, diarahkan kursor, atau difokuskan.
      if (!p.node.matches(':hover, :focus-visible, :active')) {
        p.vx += ((p.tx - p.dx) * p.spring - p.drag * p.vx) * dt;
        p.vy += ((p.ty - p.dy) * p.spring - p.drag * p.vy) * dt;
        p.dx += p.vx * dt;
        p.dy += p.vy * dt;
      }
      p.light += (p.targetLight - p.light) * Math.min(1, dt * 2);
      p.phase = (p.phase + dt * p.speed) % 1;
    }

    function draw() {
      for (const p of points) position(p);
      if (!ctx) return;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      ctx.clearRect(0, 0, width, height);
      const cx = center.px, cy = center.py;
      ctx.lineWidth = 1;
      for (const scale of [.29, .41]) {
        ctx.beginPath();
        ctx.ellipse(width / 2, height / 2, width * scale, height * scale, 0, 0, Math.PI * 2);
        ctx.strokeStyle = '#29403e';
        ctx.globalAlpha = .65;
        ctx.stroke();
      }
      for (const p of outer) {
        const x = p.px, y = p.py - 7;
        const bx = (cx + x) / 2 + (y - cy) * .13;
        const by = (cy + y) / 2 - (x - cx) * .075;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.quadraticCurveTo(bx, by, x, y);
                // Kabel berwarna yang menghubungkan GANZ ke karakter.
        ctx.strokeStyle = p.color;
        ctx.globalAlpha = active === p.id ? 1 : 0.65;
        ctx.lineWidth = active === p.id ? 3 : 2;
        ctx.stroke();

        // Posisi titik mengikuti lengkungan kabel.
        const t = p.phase;
        const u = 1 - t;
        const dotX = u * u * cx + 2 * u * t * bx + t * t * x;
        const dotY = u * u * cy + 2 * u * t * by + t * t * y;

        // Lingkaran warna lembut dengan titik putih di tengah.
        ctx.beginPath();
        ctx.arc(dotX, dotY, 5, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.45;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(dotX, dotY, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.globalAlpha = 1;
        ctx.fill();
        
      }
      ctx.globalAlpha = 1;
    }

    function tick(now) {
      frame = 0;
      if (userPaused || !visible || document.hidden) return;
      if (!previous || now - previous >= 32) {
        const dt = previous ? Math.min((now - previous) / 1000, .045) : 0;
        previous = now;
        for (const p of points) springStep(p, now, dt);
        draw();
      }
      frame = requestAnimationFrame(tick);
    }

    function sync() {
      cancelAnimationFrame(frame);
      previous = 0;
      graph.classList.toggle('still', userPaused || !visible || document.hidden);
      motion.setAttribute('aria-pressed', String(userPaused));
      motion.title = userPaused ? 'Aktifkan gerakan node' : 'Jeda gerakan node';
      motion.setAttribute('aria-label', motion.title);
      if (!userPaused && visible && !document.hidden) frame = requestAnimationFrame(tick);
    }

    function setActive(id) {
      active = id;
      for (const p of outer) p.node.classList.toggle('lit', p.id === id);
      draw();
    }

    function resize() {
      width = Math.max(1, arena.clientWidth);
      height = Math.max(1, arena.clientHeight);
      ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      draw();
    }

    const size = new ResizeObserver(resize);
    size.observe(arena);
    const view = new IntersectionObserver(entries => { visible = entries[0].isIntersecting; sync(); });
    view.observe(graph);
    motion.addEventListener('click', () => { userPaused = !userPaused; sync(); }, { signal: abort.signal });
    reduced.addEventListener('change', () => { userPaused = reduced.matches; sync(); }, { signal: abort.signal });
    document.addEventListener('visibilitychange', sync, { signal: abort.signal });
    resize();
    setActive(active);
    sync();
    leavePage.push(() => { abort.abort(); size.disconnect(); view.disconnect(); cancelAnimationFrame(frame); });
    return setActive;
  }

  function homePage() {
    const hero = template('home-view');
    if (latest) {
      hero.querySelector('.edition-line').textContent = 'Edisi terbaru · ' + dateLabel(latest.date);
      hero.querySelector('.latest-link').href = articleURL(latest);
    } else {
      hero.querySelector('.edition-line').textContent = 'Menunggu edisi pertama.';
      hero.querySelector('.latest-link').hidden = true;
    }
    const trending = editions.find(edition => edition.trending);
    if (trending) {
      const anchor = hero.querySelector('.trending-link');
      anchor.href = articleURL(trending, 'repository-trending');
      anchor.hidden = false;
    }
    const dates = archive(editions.slice(0, 7));
    if (editions.length > 7) dates.append(link('Lihat seluruh arsip →', route('arsip'), 'more-link'));
    app.append(hero, team(latest?.date), dates);
    network(hero.querySelector('.graph-mount'), latest?.date);
    return 'Radar berita harian.';
  }

  function archivePage() {
    const section = archive(editions);
    section.querySelector('.section-head').remove();
    app.append(pageHead('Arsip berita', '', editions.length + ' edisi, diurutkan dari yang terbaru.'), section);
    return 'Arsip berita';
  }

  function aboutPage(edition) {
    app.append(pageHead('Redaksi Horizon GANZ', 'REDAKSI DIGITAL',
      'Enam bot bekerja bersama untuk mengumpulkan sumber, memeriksa berita, dan menerbitkan edisi harian dalam Bahasa Indonesia.'));
    app.append(team(edition?.date));
    if (edition) app.append(link('Baca edisi ' + dateLabel(edition.date) + ' →', articleURL(edition), 'more-link'));
    return 'Redaksi Horizon GANZ';
  }

  function rolePage(role, edition) {
    app.append(pageHead(role.name, 'Tim redaksi AI', role.task));
    const grid = element('div', 'detail-grid');
    const panel = element('section', 'detail-panel');
    panel.append(element('h2', '', edition ? 'Edisi ' + dateLabel(edition.date) : 'Tugas redaksi'));
    panel.append(element('p', 'metric', roleResult(role, edition) || 'Rincian jumlah per bot belum tercatat untuk edisi ini.'));
    if (role.next.length) {
      panel.append(element('p', '', 'Hasil pekerjaan diteruskan ke'));
      const links = element('div', 'controls');
      for (const id of role.next) links.append(roleCard(byId.get(id), edition?.date));
      panel.append(links);
    } else if (edition) {
      panel.append(link('Buka hasil penerbitan →', articleURL(edition), 'primary'));
    }
    const chart = element('div');
    grid.append(panel, chart);
    app.append(grid, link('Lihat seluruh tim →', route('redaksi', edition?.date), 'more-link'));
    network(chart, edition?.date, 'redaksi', role.id);
    return role.name;
  }

  // Urutan mengikuti pipeline Horizon: Penyaring bekerja sebelum dan sesudah Analis.
  function processPage(edition) {
    const steps = [
      ['pemantau', 'Mengumpulkan berita dari sumber.'],
      ['penyaring', 'Menggabungkan entri yang mengarah ke berita sama.'],
      ['analis', 'Menilai relevansi dan isi berita.'],
      ['penyaring', 'Memilih berita untuk edisi ini.'],
      ['penulis', 'Menyiapkan draf Bahasa Indonesia.'],
      ['editor', 'Mencocokkan klaim draf dengan sumber.']
    ];
    if (edition?.stats.revised > 0) {
      steps.push(['penulis', 'Merevisi draf sesuai catatan Editor.'], ['editor', 'Memeriksa kembali hasil revisi.']);
    }
    steps.push(['penerbit', 'Menerbitkan edisi dan memperbarui arsip.']);
    app.append(pageHead('Putar ulang proses', 'Tim redaksi AI', edition ? 'Edisi ' + dateLabel(edition.date) : 'Alur kerja redaksi'));
    const grid = element('div', 'detail-grid');
    const panel = element('section', 'detail-panel');
    const stepNo = element('p', 'role-label');
    const current = element('h2');
    const desc = element('p', 'step-text');
    const result = element('p', 'metric');
    const controls = element('div', 'controls');
    const play = element('button', 'control');
    const next = element('button', 'control', 'Tahap berikutnya');
    const details = link('', '#', 'more-link');
    controls.append(play, next);
    panel.append(stepNo, current, desc, result, controls, details);
    const chart = element('div');
    grid.append(panel, chart);
    const strip = element('ol', 'step-list');
    const badges = steps.map(([id]) => {
      const badge = element('li', '', byId.get(id).name);
      badge.style.setProperty('--tint', byId.get(id).color);
      return badge;
    });
    strip.append(...badges);
    app.append(grid, strip);
    const light = network(chart, edition?.date);
    let index = 0, timer = null, playing = !reduced.matches && !document.hidden;
    function renderStep() {
      clearTimeout(timer);
      const [id, note] = steps[index];
      const role = byId.get(id);
      const last = index === steps.length - 1;
      if (last) playing = false;
      stepNo.textContent = 'Tahap ' + (index + 1) + ' dari ' + steps.length;
      current.textContent = role.name;
      desc.textContent = note;
      result.textContent = roleResult(role, edition);
      result.hidden = !result.textContent;
      details.textContent = 'Tugas ' + role.name + ' →';
      details.href = route('bot/' + id, edition?.date);
      play.textContent = last ? 'Ulang dari awal' : playing ? 'Jeda' : 'Putar';
      next.disabled = last;
      badges.forEach((badge, i) => {
        if (i === index) badge.setAttribute('aria-current', 'step');
        else badge.removeAttribute('aria-current');
      });
      light(id);
      if (playing) timer = setTimeout(() => { index++; renderStep(); }, 2600);
    }
    play.addEventListener('click', () => {
      if (index === steps.length - 1) index = 0;
      playing = !playing;
      renderStep();
    });
    next.addEventListener('click', () => { playing = false; index++; renderStep(); });
    function pauseHidden() {
      if (document.hidden || reduced.matches) { playing = false; renderStep(); }
    }
    document.addEventListener('visibilitychange', pauseHidden);
    reduced.addEventListener('change', pauseHidden);
    leavePage.push(() => {
      clearTimeout(timer);
      document.removeEventListener('visibilitychange', pauseHidden);
      reduced.removeEventListener('change', pauseHidden);
    });
    renderStep();
    return 'Putar ulang proses';
  }

  function addTopics(reader, hrefFor) {
    const headings = [...reader.querySelectorAll('.story h2[id]')];
    if (!headings.length) return;
    const nav = element('nav', 'topic-nav');
    nav.setAttribute('aria-label', 'Pilih topik');
    nav.append(element('strong', '', 'Pilih topik'));
    headings.forEach(heading => nav.append(link(heading.textContent, hrefFor(heading.id))));
    reader.prepend(nav);
  }

  // Pratinjau HP menyimpan artikel dalam template lokal. Di GitHub Pages artikel memakai URL Jekyll asli.
  function snapshotPage(edition) {
    const source = document.getElementById('edisi-' + edition.date);
    if (!source) return missingPage();
    const title = 'Edisi ' + dateLabel(edition.date);
    const reader = element('article', 'reader');
    const story = element('div', 'story');
    story.append(source.content.cloneNode(true));
    const anchorFor = id => articleURL(edition, id);
    for (const anchor of story.querySelectorAll('a[href^="#"]')) {
      anchor.href = anchorFor(anchor.getAttribute('href').slice(1));
    }
    reader.append(story);
    addTopics(reader, anchorFor);
    app.append(pageHead(title, 'Edisi harian'), reader, team(edition.date));
    return title;
  }

  function missingPage() {
    app.append(pageHead('Halaman tidak ditemukan', '', 'Pilih tanggal yang tersedia di arsip berita.'),
      link('Buka arsip berita →', route('arsip'), 'primary'));
    return 'Halaman tidak ditemukan';
  }

  function navState(homeView, about, inArchive) {
    document.querySelector('.nav-home').hidden = homeView;
    const brand = document.querySelector('.brand');
    brand.href = about ? route() : route('redaksi');
    brand.setAttribute('aria-label', 'HORIZON GANZ — ' + (about ? 'beranda' : 'profil redaksi'));
    const archiveLink = document.querySelector('.nav-archive');
    if (inArchive) archiveLink.setAttribute('aria-current', 'page');
    else archiveLink.removeAttribute('aria-current');
  }

  function render(focus = false) {
    if (location.hash === '#utama') { app.focus(); return; }
    const parts = location.hash.replace(/^#\/?/, '').split('/');
    const [view, key, third, extra] = parts;
    const date = view === 'bot' ? third : key;
    const edition = date ? editions.find(item => item.date === date) : latest;
    resetPage();
    navState(!view, view === 'redaksi', view === 'arsip');
    let title;
    if (!view) title = homePage();
    else if (view === 'arsip') title = archivePage();
    else if (view === 'redaksi' && (!date || edition)) title = aboutPage(edition);
    else if (view === 'bot' && byId.has(key) && (!date || edition)) title = rolePage(byId.get(key), edition);
    else if (view === 'proses' && (!date || edition)) title = processPage(edition);
    else if (offline && view === 'edisi' && edition && !extra) title = snapshotPage(edition);
    else title = missingPage();
    document.title = title + ' · HORIZON GANZ';
    if (focus) app.focus({ preventScroll: true });
    window.scrollTo(0, 0);
    if (offline && view === 'edisi' && third) {
      let id;
      try { id = decodeURIComponent(third); } catch { return; }
      document.getElementById(id)?.scrollIntoView();
    }
  }

  if (dashboard) {
    // Route hash bekerja saat file HTML dibuka langsung, termasuk tombol Kembali pada HP.
    window.addEventListener('hashchange', () => render(true));
    render();
  } else {
    navState(false, false, false);
    const reader = document.querySelector('.reader[data-reader-date]');
    if (reader) addTopics(reader, id => '#' + encodeURIComponent(id));
    const slot = document.querySelector('[data-edition-team]');
    if (slot) slot.replaceChildren(team(slot.dataset.date));
  }
})();
