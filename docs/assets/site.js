(() => {
  'use strict';
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#main-nav');
  const mobile = window.matchMedia('(max-width: 720px)');
  function syncMenu() {
    if (!toggle || !nav) return;
    toggle.hidden = !mobile.matches;
    toggle.setAttribute('aria-expanded', 'false');
    nav.hidden = mobile.matches;
  }
  if (toggle && nav) {
    syncMenu();
    mobile.addEventListener('change', syncMenu);
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      nav.hidden = !open;
    });
    nav.addEventListener('click', event => {
      if (event.target.closest('a') && mobile.matches) {
        toggle.setAttribute('aria-expanded', 'false');
        nav.hidden = true;
      }
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && mobile.matches && !nav.hidden) {
        nav.hidden = true;
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }
  document.querySelectorAll('[data-year]').forEach(el => { el.textContent = String(new Date().getFullYear()); });
  const search = document.querySelector('#manual-search');
  if (search) {
    const sections = [...document.querySelectorAll('.manual-content section')];
    const links = [...document.querySelectorAll('.manual-nav a')];
    search.addEventListener('input', () => {
      const query = search.value.trim().toLocaleLowerCase();
      let visible = 0;
      sections.forEach(section => {
        const matches = section.textContent.toLocaleLowerCase().includes(query);
        section.hidden = !matches;
        links.find(link => link.getAttribute('href') === '#' + section.id).hidden = !matches;
        if (matches) visible++;
      });
      document.querySelector('#manual-results').textContent = visible + (visible === 1 ? ' section' : ' sections') + (visible === 0 ? ' — try a different search.' : '');
    });
  }
  const tabs = [...document.querySelectorAll('[role="tab"]')];
  const tablist = document.querySelector('[role="tablist"]');
  if (tablist) {
    const horizontalTabs = window.matchMedia('(max-width: 720px)');
    const updateOrientation = () => tablist.setAttribute('aria-orientation', horizontalTabs.matches ? 'horizontal' : 'vertical');
    updateOrientation();
    horizontalTabs.addEventListener('change', updateOrientation);
  }
  function activate(tab, focus = false) {
    tabs.forEach(item => {
      const selected = item === tab;
      item.setAttribute('aria-selected', String(selected));
      item.tabIndex = selected ? 0 : -1;
      document.getElementById(item.getAttribute('aria-controls')).hidden = !selected;
    });
    if (focus) tab.focus();
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activate(tab));
    tab.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next !== undefined) { event.preventDefault(); activate(tabs[next], true); }
    });
  });
})();
