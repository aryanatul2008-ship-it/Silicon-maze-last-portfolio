/**
 * Silicon Maze: Doomsday Edition - Archival Database
 * Personal Portfolio Data Source
 */

const PORTFOLIO_DATA = {
  survivor: {
    name: "Aryan Patil",
    callsign: "OPERATOR // V-774",
    role: "Full-Stack Engineer & Systems Builder",
    status: "ACTIVE_SURVIVOR",
    location: "SECTOR 04 // APOCALYPSE VAULT",
    beacon: "ONLINE",
    bio: "Broadcast intercepted. Rebuilding digital infrastructure from the wreckage of the Silicon Maze fallout. Specializing in resilient web applications, robust distributed interfaces, and low-latency frontend architecture. When networks collapse, clean code survives."
  },
  systemStats: {
    nodeId: "ARCHIVE-NODE-09",
    securityClearance: "LEVEL 4",
    lastSync: "DOOMSDAY EPOCH +142d",
    integrity: "99.8%"
  },
  skills: {
    "Languages": [
      { name: "JavaScript (ES6+)", level: 92, note: "Async/await, DOM manipulation, closures, event-driven patterns" },
      { name: "TypeScript", level: 82, note: "Strict type contracts, interfaces, and compile-time verification" },
      { name: "Python", level: 85, note: "System automation scripts, data wrangling, lightweight backends" },
      { name: "C / C++", level: 70, note: "Memory management, data structures, and core algorithmic theory" }
    ],
    "Frontend": [
      { name: "HTML5 & Semantic Nodes", level: 96, note: "Accessible markup, zero div-soup, native element hierarchy" },
      { name: "CSS3 & Modern Layouts", level: 94, note: "CSS Grid, Flexbox, custom variables, performant transitions" },
      { name: "DOM & Native Web APIs", level: 90, note: "IntersectionObserver, Canvas, Web Audio, LocalStorage" },
      { name: "Responsive UI Architecture", level: 92, note: "Fluid viewports, zero horizontal overflow, adaptive spacing" }
    ],
    "Backend": [
      { name: "Node.js Runtime", level: 86, note: "Event loop concurrency, stream piping, file system orchestration" },
      { name: "Express.js", level: 84, note: "RESTful routing, middleware pipelines, error-handling guards" },
      { name: "RESTful API Design", level: 88, note: "Resource endpoints, clean HTTP semantics, payload optimization" },
      { name: "API Security & Auth", level: 78, note: "JWT validation, CORS configuration, headers and rate limits" }
    ],
    "Databases": [
      { name: "PostgreSQL", level: 80, note: "Relational modeling, complex joins, indexes, ACID transactions" },
      { name: "MongoDB", level: 78, note: "Document store schema design, aggregation pipelines, indexing" },
      { name: "SQLite & IndexedDB", level: 84, note: "Offline-first client caching, persistent local data structures" },
      { name: "Redis", level: 70, note: "Key-value caching layers, fast in-memory telemetry buffers" }
    ],
    "Tools": [
      { name: "Git & GitHub Versioning", level: 92, note: "Atomic commits, pull requests, merge conflict resolution, Pages" },
      { name: "Linux & Bash Environment", level: 84, note: "Shell scripting, process management, SSH, terminal pipelines" },
      { name: "Chrome DevTools & Audits", level: 90, note: "Lighthouse, memory leak debugging, network waterfalls" },
      { name: "Build Tooling & Automation", level: 80, note: "Vite, npm workspaces, zero-dependency vanilla workflows" }
    ]
  },
  projects: [
    {
      id: "project_001",
      archiveTag: "archive/project_001",
      name: "Doomsday Vault Kernel",
      status: "STATUS: LIVE",
      description: "A resilient client-side offline storage engine designed to cache, index, and retrieve corrupted database fragments during catastrophic network outages.",
      tech: ["Vanilla JS", "IndexedDB", "Web Workers", "CSS Grid"],
      screenshot: "images/project_001.svg",
      imageAlt: "Schematic view of Doomsday Vault Kernel showing IndexedDB storage sectors, encrypted data records, and offline recovery telemetry",
      github: "https://github.com/aryanatul2008-ship-it",
      live: "https://aryanatul2008-ship-it.github.io/Silicon-maze-last-portfolio/",
      bullets: [
        "Constructs zero-dependency encrypted binary partitions within IndexedDB storage.",
        "Executes automatic background reconciliation when network pings are detected.",
        "Maintains instant sub-50ms data retrieval across 10,000+ localized telemetry records."
      ]
    },
    {
      id: "project_002",
      archiveTag: "archive/project_002",
      name: "Silicon Maze Navigator",
      status: "STATUS: DEPLOYED",
      description: "A heuristic labyrinth navigator and pathfinder computing safe traversal corridors across dynamic hazard grids in the Silicon Maze.",
      tech: ["JavaScript", "HTML5 Canvas", "A* Search", "CSS Variables"],
      screenshot: "images/project_002.svg",
      imageAlt: "Tactical radar display of Silicon Maze Navigator rendering A* heuristic path traversal, dynamic fallout obstacles, and route coordinates",
      github: "https://github.com/aryanatul2008-ship-it",
      live: "https://aryanatul2008-ship-it.github.io/Silicon-maze-last-portfolio/",
      bullets: [
        "Visualizes real-time A* heuristic search and shortest-path calculations on 60fps HTML5 Canvas.",
        "Simulates dynamic fallout hazards with adaptive obstacle rerouting algorithms.",
        "Allows full keyboard-driven maze generation and custom corridor seed loading."
      ]
    },
    {
      id: "project_003",
      archiveTag: "archive/project_003",
      name: "Signal Radar Spectrogram",
      status: "STATUS: PROTOTYPE",
      description: "An audio spectrogram visualizer analyzing ambient radio signals to intercept and decode broadcast spikes across fallout zones.",
      tech: ["Web Audio API", "Pure JS", "SVG Telemetry", "Mono Audio"],
      screenshot: "images/project_003.svg",
      imageAlt: "Digital radio spectrogram of Signal Radar showing real-time FFT frequency waterfall, decibel spikes, and signal intercept monitoring",
      github: "https://github.com/aryanatul2008-ship-it",
      live: null,
      bullets: [
        "Interfaces directly with the Web Audio API AnalyserNode for fast FFT spectrum analysis.",
        "Renders dynamic frequency waterfall charts with low CPU overhead and zero dependencies.",
        "Provides threshold alert indicators when anomalous frequency spikes occur."
      ]
    }
  ],
  terminalLogs: [
    { time: "00:01:14", tag: "BOOT", message: "Kernel initialization complete. Mounting archival storage..." },
    { time: "00:01:15", tag: "NETWORK", message: "Connecting to Silicon Maze relay nodes... connection acquired." },
    { time: "00:01:16", tag: "SECURITY", message: "Survivor credentials verified: Aryan Patil (Level 4 clearance)." },
    { time: "00:01:17", tag: "STATUS", message: "Portfolio telemetry online. Ready for command execution." }
  ]
};

// Global export for vanilla browser usage without module bundlers
if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
