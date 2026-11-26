for (const button of document.querySelectorAll('.replay')) {
  const team = button.closest('.team');
  const nodes = Array.from(team.querySelectorAll('details'));
  const revised = Number(team.dataset.revised || 0);
  const steps = ['Pemantau', 'Penyaring', 'Analis', 'Penyaring', 'Penulis', 'Editor'];
  if (revised > 0) steps.push('Penulis', 'Editor');
  steps.push('Penerbit');
  button.hidden = false;
  button.addEventListener('click', async () => {
    button.disabled = true;
    for (const role of steps) {
      for (const node of nodes) {
        node.open = node.dataset.role === role;
        node.classList.toggle('active', node.open);
      }
      await new Promise(resolve => setTimeout(resolve, 1500));
    }
    nodes.forEach(node => node.classList.remove('active'));
    button.disabled = false;
  });
}
const article = document.querySelector('article[data-edition]');
if (article) {
  const headings = Array.from(article.querySelectorAll('h2')).filter(h => h.id);
  if (headings.length) {
    const menu = document.createElement('section');
    const label = document.createElement('h2');
    label.textContent = 'Pilih topik';
    menu.append(label);
    for (const heading of headings) {
      const link = document.createElement('a');
      link.className = 'topic';
      link.href = '#' + encodeURIComponent(heading.id);
      link.textContent = heading.textContent;
      menu.append(link);
    }
    article.querySelector('h1').after(menu);
  }
}
