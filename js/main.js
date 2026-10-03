/**
 * Silicon Maze: Doomsday Edition - Main Terminal Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavObserver();
  initBootSequence();
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
