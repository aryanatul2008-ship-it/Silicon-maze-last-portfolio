/**
 * Silicon Maze: Doomsday Edition - Main Terminal Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavObserver();
  initBootSequence();
  initArsenalTabs();
});

/* --------------------------------------------------------------------------
   Navigation Active State Observer
   -------------------------------------------------------------------------- */
function initNavObserver() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  if (!sections.length || !navLinks.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '-40% 0px -55% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('on');
          } else {
            link.classList.remove('on');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
}

/* --------------------------------------------------------------------------
   Terminal Boot Sequence & Hero Glitch Trigger
   -------------------------------------------------------------------------- */
function initBootSequence() {
  const terminalBody = document.getElementById('hero-terminal-body');
  const heroName = document.querySelector('.hero-name');
  if (!terminalBody) return;

  const lines = [
    `&gt; booting <span class="text-ok">survivor_archive.sys</span>`,
    `&gt; scanning network ... <span class="text-ok">0 of 4,812 nodes responding</span>`,
    `&gt; local archive found ... <span class="text-ok">OK</span>`,
    `&gt; <span class="text-ok">identity verified</span>. loading profile`
  ];

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // With prefers-reduced-motion, show all lines immediately without typing delay or glitch
  if (prefersReducedMotion) {
    terminalBody.innerHTML = lines.map(line => `<div class="term-line">${line}</div>`).join('');
    return;
  }

  terminalBody.innerHTML = '';
  let index = 0;

  function printLine() {
    if (index < lines.length) {
      const lineEl = document.createElement('div');
      lineEl.className = 'term-line';
      lineEl.innerHTML = lines[index];
      terminalBody.appendChild(lineEl);
      index++;
      setTimeout(printLine, 550);
    } else {
      // Boot sequence ends: trigger 0.7s glitch on hero name
      if (heroName) {
        heroName.classList.add('glitching');
        setTimeout(() => {
          heroName.classList.remove('glitching');
        }, 700);
      }
    }
  }

  // Initial delay before sequence begins
  setTimeout(printLine, 250);
}

/* --------------------------------------------------------------------------
   The Arsenal: Category Tabs & Animated 6px Progress Bars
   -------------------------------------------------------------------------- */
function initArsenalTabs() {
  const tabsContainer = document.getElementById('arsenal-tabs');
  const gridContainer = document.getElementById('arsenal-grid');

  if (!tabsContainer || !gridContainer || typeof window.PORTFOLIO_DATA === 'undefined') return;

  const skillsData = window.PORTFOLIO_DATA.skills || {};
  const categories = Object.keys(skillsData);

  if (!categories.length) return;

  // Clear tabs container
  tabsContainer.innerHTML = '';

  // Render tab buttons with ARIA semantics
  categories.forEach((category, index) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'tab-btn';
    btn.setAttribute('role', 'tab');
    btn.setAttribute('id', `tab-${category.toLowerCase()}`);
    btn.setAttribute('aria-controls', 'arsenal-grid');
    btn.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
    btn.textContent = category;

    btn.addEventListener('click', () => {
      // Switch active tab
      document.querySelectorAll('#arsenal-tabs .tab-btn').forEach(b => {
        b.setAttribute('aria-selected', 'false');
      });
      btn.setAttribute('aria-selected', 'true');

      // Render selected category skills
      renderCategorySkills(category);
    });

    tabsContainer.appendChild(btn);
  });

  // Render initial category
  renderCategorySkills(categories[0]);

  function renderCategorySkills(category) {
    const items = skillsData[category] || [];
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    gridContainer.innerHTML = items.map((skill, i) => `
      <article class="arsenal-card" aria-label="${escapeHtml(skill.name)}">
        <div class="arsenal-card-header">
          <h3 class="arsenal-card-name">${escapeHtml(skill.name)}</h3>
          <span class="arsenal-card-level">${skill.level}%</span>
        </div>
        <p class="arsenal-card-note">${escapeHtml(skill.note)}</p>
        <div class="progress-track" aria-hidden="true">
          <div class="progress-fill" id="prog-${i}" style="width: 0%;"></div>
        </div>
      </article>
    `).join('');

    // Animate progress bars from 0 to level
    items.forEach((skill, i) => {
      const fillEl = document.getElementById(`prog-${i}`);
      if (!fillEl) return;

      if (prefersReducedMotion) {
        fillEl.style.width = `${skill.level}%`;
      } else {
        requestAnimationFrame(() => {
          setTimeout(() => {
            fillEl.style.width = `${skill.level}%`;
          }, 30 + i * 20);
        });
      }
    });
  }
}

/* --------------------------------------------------------------------------
   Sanitization Utility
   -------------------------------------------------------------------------- */
function escapeHtml(str) {
  if (typeof str !== 'string') return str;
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
