(() => {
  'use strict';
  // Persisted mode choice. Keep all controls and the browser toolbar in sync.
  const themeToggle = document.getElementById('themeToggle');
  const themeLabel = document.getElementById('themeLabel');
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  const syncTheme = () => {
    const light = document.documentElement.dataset.theme === 'light';
    const next = light ? 'dark' : 'light';
    if (themeToggle) {
      themeToggle.setAttribute('aria-label', `Switch to ${next} mode`);
      themeToggle.setAttribute('aria-pressed', String(light));
      themeToggle.title = `Switch to ${next} mode`;
    }
    if (themeLabel) themeLabel.textContent = `${next[0].toUpperCase()}${next.slice(1)} mode`;
    if (themeMeta) themeMeta.content = light ? '#f1f7f1' : '#070b0d';
  };
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
      document.documentElement.dataset.theme = next;
      try { localStorage.setItem('austurusa-theme', next); } catch(e) { /* Private browsing: toggle still works for this visit. */ }
      syncTheme();
    });
  }
  syncTheme();

  const menuButton = document.getElementById('menuButton');
  const mobileNav = document.getElementById('mobileNav');
  if (menuButton && mobileNav) {
    const close = () => { mobileNav.hidden = true; menuButton.setAttribute('aria-expanded','false'); menuButton.setAttribute('aria-label','Open navigation'); };
    menuButton.addEventListener('click', () => {
      const open = mobileNav.hidden;
      mobileNav.hidden = !open;
      menuButton.setAttribute('aria-expanded',String(open));
      menuButton.setAttribute('aria-label',open?'Close navigation':'Open navigation');
    });
    mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  }
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
  const progress = document.getElementById('readingProgress');
  let ticking = false;
  const progressUpdate = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    if (progress) progress.style.transform = `scaleX(${scrollable > 0 ? Math.max(0, Math.min(1, window.scrollY/scrollable)) : 0})`;
    ticking = false;
  };
  window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(progressUpdate); } }, {passive:true});
  progressUpdate();

  // Values are drawn from the illustrative SIMULATION STUDY; this widget never claims physical measurements.
  const suppliers = {
    a: {label: 'A', worst: 'A-05', worstValue: 214, status: 'MARGINAL / UNCERTAIN', values: [188,173,188,158,214,180]},
    b: {label: 'B', worst: 'B-06', worstValue: 313, status: 'INTEROPERABILITY RISK*', values: [252,225,188,256,259,313]}
  };
  const barsChart = document.getElementById('barsChart');
  const tabs = Array.from(document.querySelectorAll('.tab-button'));
  function drawBars(key) {
    if (!barsChart || !suppliers[key]) return;
    const data = suppliers[key];
    barsChart.innerHTML = '';
    // The reference stripe aligns at 250/360 of chart width.
    const guide = document.createElement('div');
    guide.className = 'bars-guide';
    guide.setAttribute('aria-hidden','true');
    barsChart.appendChild(guide);
    data.values.forEach((value, index) => {
      const row = document.createElement('div'); row.className = 'bar-row';
      const label = document.createElement('span'); label.className = 'bar-id'; label.textContent = `${data.label}-${String(index+1).padStart(2,'0')}`;
      const rail = document.createElement('div'); rail.className = 'bar-rail';
      const fill = document.createElement('div'); fill.className = 'bar-fill';
      fill.style.width = `${100*value/360}%`;
      if (value > 250) fill.classList.add('bar-over');
      const number = document.createElement('span'); number.className = 'bar-number'; number.textContent = `${value}ns`;
      rail.appendChild(fill); row.append(label, rail, number); barsChart.appendChild(row);
    });
    const worstDevice = document.getElementById('worstDevice');
    const worstT99 = document.getElementById('worstT99');
    const chartVerdict = document.getElementById('chartVerdict');
    if (worstDevice) worstDevice.textContent = data.worst;
    if (worstT99) worstT99.innerHTML = `${data.worstValue} <small>ns</small>`;
    if (chartVerdict) { chartVerdict.textContent = data.status; chartVerdict.className = key === 'b' ? 'risk-label' : ''; }
    tabs.forEach(tab => { const active = tab.dataset.supplier === key; tab.classList.toggle('active',active); tab.setAttribute('aria-pressed',String(active)); });
  }
  tabs.forEach(tab => tab.addEventListener('click',() => drawBars(tab.dataset.supplier)));
  drawBars('a');

  // Gentle reveal; respect reduced-motion preferences and gracefully show everything without observer support.
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const targets = document.querySelectorAll('.engine-card, .evidence-card, .protocol-tile, .pilot-stages > div');
    targets.forEach(item => item.classList.add('reveal-ready'));
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if(entry.isIntersecting){ entry.target.classList.add('revealed'); observer.unobserve(entry.target); } });
    },{threshold:0.08, rootMargin:'0px 0px 20px 0px'});
    targets.forEach(item => observer.observe(item));
  }
})();
