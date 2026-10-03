/**
 * Silicon Maze: Doomsday Edition - Main Terminal Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavObserver();
  initBootSequence();
  initArsenalTabs();
  initArchives();
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
   The Archives: Project File Panels & Collapsible Details
   -------------------------------------------------------------------------- */
function initArchives() {
  const container = document.getElementById('archives-container');
  if (!container || typeof window.PORTFOLIO_DATA === 'undefined') return;

  const projects = window.PORTFOLIO_DATA.projects || [];
  if (!projects.length) return;

  container.innerHTML = projects.map((project, index) => {
    const isOpen = index === 0; // The first project starts open
    const bulletsId = `bullets-${project.id}`;

    return `
      <article class="archive-panel" id="${escapeHtml(project.id)}">
        <!-- Top bar -->
        <div class="archive-panel-top">
          <span class="archive-tag">${escapeHtml(project.archiveTag || `archive/${project.id}`)}</span>
          <span class="archive-status">${escapeHtml(project.status || 'STATUS: ARCHIVED')}</span>
        </div>

        <!-- Body: two-column grid (stacked under 720px) -->
        <div class="archive-panel-body">
          <!-- Screenshot in 16:10 bordered frame -->
          <div class="archive-frame">
            <img 
              src="${escapeHtml(project.screenshot)}" 
              alt="${escapeHtml(project.name)} interface screenshot" 
              loading="lazy"
            >
          </div>

          <!-- Project details & actions -->
          <div class="archive-info">
            <h3 class="archive-name">${escapeHtml(project.name)}</h3>
            <p class="archive-desc">${escapeHtml(project.description)}</p>

            <div class="archive-tech-list" aria-label="Technologies used">
              ${(project.tech || []).map(t => `<span class="archive-tech-tag">${escapeHtml(t)}</span>`).join('')}
            </div>

            <!-- "What it does" list (toggled by button) -->
            <ul class="archive-bullets ${isOpen ? 'open' : ''}" id="${bulletsId}">
              ${(project.bullets || []).map(b => `<li>${escapeHtml(b)}</li>`).join('')}
            </ul>

            <!-- Action buttons -->
            <div class="archive-actions">
              <button 
                type="button" 
                class="btn btn-sm btn-toggle" 
                aria-expanded="${isOpen ? 'true' : 'false'}" 
                aria-controls="${bulletsId}"
              >
                ${isOpen ? 'Collapse file' : 'Open file'}
              </button>

              <a 
                href="${escapeHtml(project.github)}" 
                class="btn btn-sm btn-outlined" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                GitHub repo ↗
              </a>

              ${project.live ? `
                <a 
                  href="${escapeHtml(project.live)}" 
                  class="btn btn-sm btn-solid" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Live demo →
                </a>
              ` : ''}
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');

  // Add event listeners to toggle buttons
  container.querySelectorAll('.btn-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      const targetId = btn.getAttribute('aria-controls');
      const bulletsEl = document.getElementById(targetId);

      if (bulletsEl) {
        if (isExpanded) {
          bulletsEl.classList.remove('open');
          btn.setAttribute('aria-expanded', 'false');
          btn.textContent = 'Open file';
        } else {
          bulletsEl.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
          btn.textContent = 'Collapse file';
        }
      }
    });
  });
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
