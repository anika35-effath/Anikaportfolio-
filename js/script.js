/**
 * =========================================================================
 * EFFATH ANIKA — PORTFOLIO INTERACTIVITY ENGINE
 * Zero External Dependencies — Pure Vanilla Modern JavaScript (ES6+)
 * =========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Dynamic Data Rendering
  hydratePersonalData();
  initTypewriter();
  renderDomains();
  renderProjects("all");
  initProjectFilters();
  renderProblemSolving();
  renderEducation();
  
  // 2. Interactive Features
  initConstellationCanvas();
  initTerminal();
  initBattleshipSimulator();
  initNavbarBehavior();
  initBackToTop();
  initClipboardActions();
});

/**
 * ---------------------------------------------------------------------------
 * Hydrate DOM with data from data.js
 * ---------------------------------------------------------------------------
 */
function hydratePersonalData() {
  if (typeof portfolioData === "undefined") return;

  const { personal, links, stats } = portfolioData;

  // Name & Title
  document.querySelectorAll(".dynamic-name").forEach(el => el.textContent = personal.name);
  document.querySelectorAll(".dynamic-fullname").forEach(el => el.textContent = personal.fullName);
  document.querySelectorAll(".dynamic-title").forEach(el => el.textContent = personal.title);
  document.querySelectorAll(".dynamic-subtitle").forEach(el => el.textContent = personal.subtitle);
  document.querySelectorAll(".dynamic-location").forEach(el => el.textContent = personal.location);
  document.querySelectorAll(".dynamic-bio").forEach(el => el.textContent = personal.bio);
  document.querySelectorAll(".dynamic-email").forEach(el => {
    el.textContent = links.email;
    if (el.tagName === "A") el.href = `mailto:${links.email}`;
  });

  // Links
  const cfLinks = document.querySelectorAll(".link-cf");
  cfLinks.forEach(el => el.href = links.codeforces);

  const tophLinks = document.querySelectorAll(".link-toph");
  tophLinks.forEach(el => el.href = links.toph);

  const ghLinks = document.querySelectorAll(".link-github");
  ghLinks.forEach(el => el.href = links.github);

  const waLinks = document.querySelectorAll(".link-whatsapp");
  waLinks.forEach(el => el.href = links.whatsapp);

  const fbLinks = document.querySelectorAll(".link-facebook");
  fbLinks.forEach(el => el.href = links.facebook);

  // Avatar
  const avatarImg = document.getElementById("heroAvatar");
  if (avatarImg && personal.avatar) {
    avatarImg.src = personal.avatar;
    avatarImg.alt = `${personal.name} Profile Avatar`;
  }
}

/**
 * ---------------------------------------------------------------------------
 * Rotating Typewriter Header Effect
 * ---------------------------------------------------------------------------
 */
function initTypewriter() {
  const el = document.getElementById("typewriterText");
  if (!el || !portfolioData.rotatingRoles) return;

  const roles = portfolioData.rotatingRoles;
  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typingSpeed = 70;

  function typeLoop() {
    const currentRole = roles[roleIdx];

    if (isDeleting) {
      charIdx--;
      el.textContent = currentRole.substring(0, charIdx);
      typingSpeed = 35;
    } else {
      charIdx++;
      el.textContent = currentRole.substring(0, charIdx);
      typingSpeed = 75;
    }

    if (!isDeleting && charIdx === currentRole.length) {
      typingSpeed = 1800; // Pause at full word
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      typingSpeed = 400; // Pause before typing new word
    }

    setTimeout(typeLoop, typingSpeed);
  }

  typeLoop();
}

/**
 * ---------------------------------------------------------------------------
 * About & Domains Interactive Tabs
 * ---------------------------------------------------------------------------
 */
function renderDomains() {
  const tabsNav = document.getElementById("domainTabsNav");
  const contentContainer = document.getElementById("domainContentContainer");
  if (!tabsNav || !contentContainer || !portfolioData.domains) return;

  const domainKeys = Object.keys(portfolioData.domains);
  tabsNav.innerHTML = "";

  domainKeys.forEach((key, idx) => {
    const domain = portfolioData.domains[key];
    const btn = document.createElement("button");
    btn.className = `domain-tab-btn ${idx === 0 ? "active" : ""}`;
    btn.textContent = domain.title.split("(")[0].trim();
    btn.dataset.domainKey = key;
    btn.addEventListener("click", () => {
      document.querySelectorAll(".domain-tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderDomainDetail(key);
    });
    tabsNav.appendChild(btn);
  });

  // Render initial tab
  if (domainKeys.length > 0) {
    renderDomainDetail(domainKeys[0]);
  }
}

function renderDomainDetail(key) {
  const container = document.getElementById("domainContentContainer");
  const domain = portfolioData.domains[key];
  if (!container || !domain) return;

  let categoriesHtml = "";
  domain.categories.forEach(cat => {
    const itemsHtml = cat.items.map(item => `<div class="domain-item-entry">${item}</div>`).join("");
    categoriesHtml += `
      <div class="domain-subcat-card">
        <h4 class="domain-subcat-title">${cat.name}</h4>
        <div class="domain-items-list">${itemsHtml}</div>
      </div>
    `;
  });

  container.innerHTML = `
    <div class="domain-content-card">
      <div class="domain-header-box">
        <div>
          <h3 class="domain-card-title">${domain.title}</h3>
        </div>
        <span class="domain-badge-level">${domain.level}</span>
      </div>
      <p class="domain-summary-text">${domain.summary}</p>
      <div class="domain-categories-grid">${categoriesHtml}</div>
    </div>
  `;
}

/**
 * ---------------------------------------------------------------------------
 * Projects Rendering & Category Filtering
 * ---------------------------------------------------------------------------
 */
function renderProjects(filter = "all") {
  const grid = document.getElementById("projectsGrid");
  if (!grid || !portfolioData.projects) return;

  grid.innerHTML = "";

  const filtered = portfolioData.projects.filter(p => {
    if (filter === "all") return true;
    return p.category === filter;
  });

  filtered.forEach(p => {
    const tagsHtml = p.tags.map(t => `<span class="project-tag">${t}</span>`).join("");
    const highlightsHtml = p.architecturalHighlights
      ? p.architecturalHighlights.map(h => `<div class="project-highlight-item">${h}</div>`).join("")
      : "";

    const card = document.createElement("div");
    card.className = "glass-card project-card";
    card.innerHTML = `
      <div>
        <div class="project-top-row">
          <span class="project-badge ${p.badge.includes('Featured') ? 'featured' : ''}">${p.badge}</span>
          <div class="project-links-row">
            ${p.github ? `
              <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="project-icon-link" title="Source Code">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>
            ` : ""}
          </div>
        </div>

        <h3 class="project-title">${p.title}</h3>
        <div class="project-subtitle">${p.subtitle}</div>
        <p class="project-desc">${p.description}</p>

        ${p.complexity ? `<div class="project-complexity-tag">⚡ Asymptotic Bound: ${p.complexity}</div>` : ""}

        ${highlightsHtml ? `
          <div class="project-highlights-box">
            <div class="project-highlights-label">System Architecture Notes</div>
            <div class="project-highlights-list">${highlightsHtml}</div>
          </div>
        ` : ""}
      </div>

      <div class="project-tags-row">${tagsHtml}</div>
    `;

    grid.appendChild(card);
  });
}

function initProjectFilters() {
  const btns = document.querySelectorAll(".filter-btn");
  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      btns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderProjects(btn.dataset.filter);
    });
  });
}

/**
 * ---------------------------------------------------------------------------
 * Problem Solving Showcase
 * ---------------------------------------------------------------------------
 */
function renderProblemSolving() {
  const psGrid = document.getElementById("psPlatformsGrid");
  const topicsGrid = document.getElementById("psTopicsGrid");
  if (!portfolioData.problemSolving) return;

  const { platforms, categories } = portfolioData.problemSolving;

  if (psGrid) {
    psGrid.innerHTML = "";
    platforms.forEach(p => {
      const isCf = p.name.toLowerCase().includes("codeforces");
      const card = document.createElement("div");
      card.className = `ps-platform-card ${isCf ? 'cf' : 'toph'}`;
      card.innerHTML = `
        <div class="ps-card-top">
          <div class="ps-platform-name">
            <span>${p.name}</span>
          </div>
          <span class="ps-platform-badge" style="background: ${isCf ? 'rgba(251,113,133,0.18)' : 'rgba(168,85,247,0.18)'}; color: ${p.color}; border: 1px solid ${p.color};">${p.badge}</span>
        </div>
        <div class="ps-platform-handle">
          <span>@${p.handle}</span>
        </div>
        <p class="ps-platform-desc">${p.desc}</p>
        <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
          <span>Inspect Contest Profile</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </a>
      `;
      psGrid.appendChild(card);
    });
  }

  if (topicsGrid && categories) {
    topicsGrid.innerHTML = "";
    categories.forEach(c => {
      const row = document.createElement("div");
      row.className = "ps-topic-row";
      row.innerHTML = `
        <div class="ps-topic-header">
          <span class="ps-topic-name">${c.name}</span>
          <span class="ps-topic-rating">${c.rating}</span>
        </div>
        <div class="ps-topic-note">${c.note}</div>
      `;
      topicsGrid.appendChild(row);
    });
  }
}

/**
 * ---------------------------------------------------------------------------
 * Education Rendering
 * ---------------------------------------------------------------------------
 */
function renderEducation() {
  const container = document.getElementById("eduTimeline");
  if (!container || !portfolioData.education) return;

  container.innerHTML = "";
  portfolioData.education.forEach(item => {
    const bulletsHtml = item.details.map(d => `<li class="edu-bullet-item">${d}</li>`).join("");

    const entry = document.createElement("div");
    entry.className = "edu-timeline-item";
    entry.innerHTML = `
      <div class="edu-timeline-dot"></div>
      <div class="edu-card-body">
        <div class="edu-card-top">
          <h3 class="edu-institution">${item.institution}</h3>
          <span class="edu-duration">${item.duration}</span>
        </div>
        <div class="edu-degree">${item.degree} • <span class="mono">${item.location}</span></div>
        <ul class="edu-bullets-list">${bulletsHtml}</ul>
      </div>
    `;
    container.appendChild(entry);
  });
}

/**
 * ---------------------------------------------------------------------------
 * Interactive Developer Terminal Simulator
 * ---------------------------------------------------------------------------
 */
function initTerminal() {
  const input = document.getElementById("terminalInput");
  const output = document.getElementById("terminalOutput");
  if (!input || !output || !portfolioData.terminal) return;

  const { welcome, commands } = portfolioData.terminal;

  // Print welcome banners
  output.innerHTML = "";
  welcome.forEach(line => {
    const div = document.createElement("div");
    div.className = "terminal-line welcome";
    div.innerHTML = line.replace(/\x1b\[35m/g, '<span style="color:#c084fc;font-weight:bold;">').replace(/\x1b\[0m/g, '</span>');
    output.appendChild(div);
  });

  function executeCommand(rawCmd) {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    // Append echo
    const echoLine = document.createElement("div");
    echoLine.className = "terminal-line cmd-echo";
    echoLine.textContent = `anika@workstation:~$ ${rawCmd}`;
    output.appendChild(echoLine);

    if (cmd === "clear") {
      output.innerHTML = "";
      return;
    }

    const responseDiv = document.createElement("div");
    responseDiv.className = "terminal-line";

    if (commands[cmd]) {
      responseDiv.textContent = commands[cmd];
    } else {
      responseDiv.innerHTML = `<span style="color:#f43f5e;">Command not found: "${cmd}". Type <span style="color:#c084fc;font-weight:bold;">'help'</span> for available commands.</span>`;
    }

    output.appendChild(responseDiv);

    // Auto scroll to bottom
    const body = document.querySelector(".terminal-body");
    if (body) body.scrollTop = body.scrollHeight;
  }

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const val = input.value;
      input.value = "";
      executeCommand(val);
    }
  });

  // Chip buttons
  document.querySelectorAll(".terminal-chip-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const cmd = btn.dataset.cmd;
      executeCommand(cmd);
      input.focus();
    });
  });
}

/**
 * ---------------------------------------------------------------------------
 * Interactive Battleship Tactical Grid Mini-Game
 * ---------------------------------------------------------------------------
 */
function initBattleshipSimulator() {
  const gridEl = document.getElementById("battleshipGrid");
  const logEl = document.getElementById("simStatusLog");
  const resetBtn = document.getElementById("simResetBtn");
  const aiScanBtn = document.getElementById("simAiScanBtn");
  if (!gridEl || !logEl) return;

  const GRID_SIZE = 5;
  const TOTAL_SHIPS = 4; // 4 hidden ship coordinate cells
  let shipCoordinates = new Set();
  let hits = 0;
  let shots = 0;
  let gameOver = false;

  function placeShips() {
    shipCoordinates.clear();
    hits = 0;
    shots = 0;
    gameOver = false;

    // Random placement of 4 ship cells in 5x5 grid
    while (shipCoordinates.size < TOTAL_SHIPS) {
      const r = Math.floor(Math.random() * GRID_SIZE);
      const c = Math.floor(Math.random() * GRID_SIZE);
      shipCoordinates.add(`${r},${c}`);
    }
  }

  function renderGrid() {
    gridEl.innerHTML = "";
    for (let r = 0; r < GRID_SIZE; r++) {
      for (let c = 0; c < GRID_SIZE; c++) {
        const cell = document.createElement("div");
        cell.className = "grid-cell";
        cell.dataset.coord = `${r},${c}`;
        cell.dataset.r = r;
        cell.dataset.c = c;
        cell.textContent = "·";

        cell.addEventListener("click", () => handleCellClick(cell, r, c));
        gridEl.appendChild(cell);
      }
    }
    logEl.innerHTML = `Battleship Engine initialized. Grid: 5x5 | Target vessels deployed: ${TOTAL_SHIPS}.<br>Select any coordinate to launch tactical sonar torpedo.`;
  }

  function handleCellClick(cell, r, c) {
    if (gameOver || cell.classList.contains("hit") || cell.classList.contains("miss")) return;

    shots++;
    const coordKey = `${r},${c}`;

    if (shipCoordinates.has(coordKey)) {
      cell.classList.add("hit");
      cell.textContent = "✕";
      hits++;

      if (hits === TOTAL_SHIPS) {
        gameOver = true;
        logEl.innerHTML = `<span class="highlight-win">🎯 VICTORY! ALL FLEETS NEUTRALIZED!</span><br>Fleet destroyed in ${shots} salvos. Engine State: TERMINATED.`;
      } else {
        logEl.innerHTML = `<span class="highlight-hit">💥 DIRECT HIT at [${r}, ${c}]!</span><br>Vessel compromised. ${TOTAL_SHIPS - hits} ship cells remaining in matrix.`;
      }
    } else {
      cell.classList.add("miss");
      cell.textContent = "○";
      logEl.innerHTML = `<span class="highlight-miss">🌊 SPLASH / MISS at [${r}, ${c}].</span><br>No naval signature detected. Salvos fired: ${shots}.`;
    }
  }

  function aiAutoScan() {
    if (gameOver) return;
    // Find an unclicked cell with priority to ships or heuristic parity pattern
    const cells = Array.from(gridEl.querySelectorAll(".grid-cell:not(.hit):not(.miss)"));
    if (cells.length === 0) return;

    // Prefer hitting a ship if scanning with heuristic cheat, or scan by parity
    const targetCell = cells.find(c => shipCoordinates.has(c.dataset.coord)) || cells[0];
    if (targetCell) {
      const r = parseInt(targetCell.dataset.r, 10);
      const c = parseInt(targetCell.dataset.c, 10);
      handleCellClick(targetCell, r, c);
    }
  }

  placeShips();
  renderGrid();

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      placeShips();
      renderGrid();
    });
  }

  if (aiScanBtn) {
    aiScanBtn.addEventListener("click", () => {
      aiAutoScan();
    });
  }
}

/**
 * ---------------------------------------------------------------------------
 * High-Performance Constellation Canvas (Violet & Rose Particles)
 * ---------------------------------------------------------------------------
 */
function initConstellationCanvas() {
  const canvas = document.getElementById("bg-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width, height;
  let particles = [];
  const particleCount = 42;
  const maxDistance = 120;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  window.addEventListener("resize", resize);
  resize();

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.45;
      this.vy = (Math.random() - 0.5) * 0.45;
      this.radius = Math.random() * 1.8 + 1;
      this.color = Math.random() > 0.4 ? "rgba(192, 132, 252," : "rgba(244, 63, 94,";
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `${this.color} 0.8)`;
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistance) {
          const alpha = (1 - dist / maxDistance) * 0.16;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(168, 85, 247, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}

/**
 * ---------------------------------------------------------------------------
 * Navbar Scroll & Mobile Menu Logic
 * ---------------------------------------------------------------------------
 */
function initNavbarBehavior() {
  const navbar = document.getElementById("navbar");
  const toggle = document.getElementById("mobileToggle");
  const menu = document.getElementById("navMenu");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("open");
    });

    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.remove("open");
      });
    });
  }
}

/**
 * ---------------------------------------------------------------------------
 * Back to Top Button
 * ---------------------------------------------------------------------------
 */
function initBackToTop() {
  const btn = document.getElementById("backToTop");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/**
 * ---------------------------------------------------------------------------
 * Clipboard Copy & Toast Notice
 * ---------------------------------------------------------------------------
 */
function showToast(msg = "✓ Copied to clipboard!") {
  const toast = document.getElementById("toastNotice");
  if (!toast) return;

  toast.textContent = msg;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2400);
}

function initClipboardActions() {
  document.querySelectorAll("[data-copy]").forEach(el => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const textToCopy = el.dataset.copy;
      if (navigator.clipboard && textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`✓ Copied: ${textToCopy}`);
        });
      }
    });
  });
}
