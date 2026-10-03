/**
 * Silicon Maze: Doomsday Edition - Main Terminal Controller
 * Plain Vanilla JavaScript (Zero external dependencies)
 */

document.addEventListener('DOMContentLoaded', () => {
  initLiveClock();
  initSurvivorDossier();
  renderSkills();
  renderProjects();
  initInteractiveTerminal();
  initDispatchForm();
  initActiveNavTracking();
});

/* --------------------------------------------------------------------------
   Live Telemetry Clock
   -------------------------------------------------------------------------- */
function initLiveClock() {
  const clockEl = document.getElementById('live-clock');
  if (!clockEl) return;

  function updateClock() {
    const now = new Date();
    const utcHours = String(now.getUTCHours()).padStart(2, '0');
    const utcMinutes = String(now.getUTCMinutes()).padStart(2, '0');
    const utcSeconds = String(now.getUTCSeconds()).padStart(2, '0');
    clockEl.textContent = `${utcHours}:${utcMinutes}:${utcSeconds} UTC`;
  }

  updateClock();
  setInterval(updateClock, 1000);
}

/* --------------------------------------------------------------------------
   Populate Survivor Dossier Data
   -------------------------------------------------------------------------- */
function initSurvivorDossier() {
  if (typeof window.PORTFOLIO_DATA === 'undefined') return;

  const { survivor, systemStats } = window.PORTFOLIO_DATA;

  const bioEl = document.getElementById('survivor-bio');
  if (bioEl && survivor.bio) {
    bioEl.textContent = survivor.bio;
  }

  const callsignEl = document.getElementById('node-callsign');
  if (callsignEl && survivor.callsign) {
    callsignEl.textContent = survivor.callsign;
  }

  const clearanceEl = document.getElementById('node-clearance');
  if (clearanceEl && systemStats.securityClearance) {
    clearanceEl.textContent = `${systemStats.securityClearance} // VERIFIED`;
  }

  const sectorEl = document.getElementById('node-sector');
  if (sectorEl && survivor.location) {
    sectorEl.textContent = survivor.location;
  }

  const statusEl = document.getElementById('node-status');
  if (statusEl && systemStats.integrity) {
    statusEl.textContent = `${systemStats.integrity} STABLE`;
  }
}

/* --------------------------------------------------------------------------
   Render Skills Grid from Data
   -------------------------------------------------------------------------- */
function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!container || typeof window.PORTFOLIO_DATA === 'undefined') return;

  const skillsData = window.PORTFOLIO_DATA.skills || [];

  container.innerHTML = skillsData.map(group => `
    <article class="skill-card" aria-label="${escapeHtml(group.category)}">
      <div class="skill-card-header">
        <h3 class="skill-category-title">${escapeHtml(group.category)}</h3>
        <span class="skill-code font-heading">[${escapeHtml(group.code)}]</span>
      </div>
      <ul class="skill-list">
        ${group.items.map(item => `
          <li class="skill-item">
            <div class="skill-item-top">
              <span class="text-bone">${escapeHtml(item.name)}</span>
              <span class="skill-level-badge">${escapeHtml(item.level)}</span>
            </div>
            <p class="skill-item-desc">${escapeHtml(item.desc)}</p>
          </li>
        `).join('')}
      </ul>
    </article>
  `).join('');
}

/* --------------------------------------------------------------------------
   Render Projects Grid from Data
   -------------------------------------------------------------------------- */
function renderProjects() {
  const container = document.getElementById('projects-container');
  if (!container || typeof window.PORTFOLIO_DATA === 'undefined') return;

  const projectsData = window.PORTFOLIO_DATA.projects || [];

  container.innerHTML = projectsData.map(project => `
    <article class="project-card" id="${escapeHtml(project.id)}">
      <div class="project-card-header">
        <span class="project-code font-heading">[${escapeHtml(project.code)}] // ${escapeHtml(project.category)}</span>
        <span class="project-status-badge">${escapeHtml(project.status)}</span>
      </div>
      <div class="project-body">
        <h3 class="project-title">${escapeHtml(project.title)}</h3>
        <div class="project-subtitle">${escapeHtml(project.badge)}</div>
        <p class="project-desc">${escapeHtml(project.summary)}</p>
        <p class="project-desc text-dim" style="font-size: 0.82rem;">${escapeHtml(project.details)}</p>
        <div class="project-tech" aria-label="Technologies used">
          ${project.techStack.map(tech => `
            <span class="tech-tag">${escapeHtml(tech)}</span>
          `).join('')}
        </div>
      </div>
      <div class="project-footer">
        <a href="${escapeHtml(project.repoUrl)}" class="project-link" target="_blank" rel="noopener noreferrer">
          SOURCE CODE ↗
        </a>
        <a href="${escapeHtml(project.demoUrl)}" class="project-link text-ok" target="_blank" rel="noopener noreferrer">
          DISPATCH VIEW →
        </a>
      </div>
    </article>
  `).join('');
}

/* --------------------------------------------------------------------------
   Interactive Console / Terminal Shell
   -------------------------------------------------------------------------- */
function initInteractiveTerminal() {
  const outputEl = document.getElementById('console-output');
  const formEl = document.getElementById('console-form');
  const inputEl = document.getElementById('terminal-cli');

  if (!outputEl || !formEl || !inputEl) return;

  // Print initial boot logs
  const logs = window.PORTFOLIO_DATA ? window.PORTFOLIO_DATA.terminalLogs || [] : [];
  logs.forEach(log => {
    appendTerminalLine(outputEl, log.time, log.tag, log.message);
  });

  formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const command = inputEl.value.trim();
    if (!command) return;

    // Display user typed command
    const now = new Date().toTimeString().split(' ')[0];
    appendTerminalLine(outputEl, now, 'CMD', `> ${command}`);
    inputEl.value = '';

    executeCommand(command.toLowerCase(), outputEl);
    outputEl.scrollTop = outputEl.scrollHeight;
  });
}

function appendTerminalLine(outputEl, time, tag, message) {
  const line = document.createElement('div');
  line.className = 'console-line';
  line.innerHTML = `
    <span class="log-time">[${escapeHtml(time)}]</span>
    <span class="log-tag">[${escapeHtml(tag)}]</span>
    <span class="log-msg text-bone">${escapeHtml(message)}</span>
  `;
  outputEl.appendChild(line);
}

function executeCommand(cmd, outputEl) {
  const now = new Date().toTimeString().split(' ')[0];

  switch (cmd) {
    case 'help':
      appendTerminalLine(outputEl, now, 'SYS', 'Available: help, status, projects, skills, whoami, clear, date');
      break;
    case 'status':
      appendTerminalLine(outputEl, now, 'SYS', 'ALL SYSTEMS STABLE. Telemetry: 100% | Vault Integrity: 99.8%');
      break;
    case 'whoami':
      appendTerminalLine(outputEl, now, 'USER', 'Aryan Atul // Operator V-774 // Clearance Level 4');
      break;
    case 'projects':
      appendTerminalLine(outputEl, now, 'QUERY', 'Loading 4 registered artifacts: DOOMSDAY VAULT, SILICON MAZE ESCAPE, RADAR 0.9b, BEACON P2P.');
      break;
    case 'skills':
      appendTerminalLine(outputEl, now, 'QUERY', 'Registered capabilities: JavaScript ES6+, HTML5/CSS3, Node.js, Python, Git, a11y.');
      break;
    case 'clear':
      outputEl.innerHTML = '';
      break;
    case 'date':
      appendTerminalLine(outputEl, now, 'TIME', new Date().toUTCString());
      break;
    default:
      appendTerminalLine(outputEl, now, 'ERR', `Command not recognized: "${cmd}". Type "help" for command matrix.`);
  }
}

/* --------------------------------------------------------------------------
   Dispatch (Contact) Form Simulation
   -------------------------------------------------------------------------- */
function initDispatchForm() {
  const form = document.getElementById('dispatch-form');
  const feedback = document.getElementById('dispatch-feedback');
  if (!form || !feedback) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const callsign = document.getElementById('sender-callsign').value;

    feedback.innerHTML = `
      <div style="border: 1px solid var(--flare); padding: 12px; background: var(--ash); color: var(--flare);">
        [TRANSMISSION SENT] Signal encoded for ${escapeHtml(callsign)}. Dispatch logged to vault archive buffer.
      </div>
    `;
    form.reset();

    setTimeout(() => {
      feedback.innerHTML = '';
    }, 6000);
  });
}

/* --------------------------------------------------------------------------
   Active Navigation Tracking on Scroll
   -------------------------------------------------------------------------- */
function initActiveNavTracking() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
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
