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
      id: "proj-01",
      code: "EXP-01",
      title: "DOOMSDAY VAULT KERNEL",
      category: "OFFLINE ARCHIVE",
      status: "OPERATIONAL",
      badge: "MISSION CRITICAL",
      summary: "A resilient client-side offline storage engine designed to cache, index, and retrieve corrupted database fragments during catastrophic network outages.",
      details: "Engineered with zero external dependencies using raw IndexedDB primitives and custom binary packing algorithms to minimize memory footprint.",
      techStack: ["Vanilla JS", "IndexedDB", "Web Workers", "CSS Grid"],
      demoUrl: "https://github.com/aryanatul2008-ship-it",
      repoUrl: "https://github.com/aryanatul2008-ship-it"
    },
    {
      id: "proj-02",
      code: "EXP-02",
      title: "SILICON MAZE ESCAPE VECTOR",
      category: "ALGORITHMIC NAVIGATION",
      status: "STABLE",
      badge: "HACKATHON BUILD",
      summary: "A heuristic labyrinth navigator and pathfinder computing safe traversal corridors across dynamic hazard grids in the Silicon Maze.",
      details: "Implements A* search and Dijkstra's algorithm rendered over high-performance HTML5 Canvas with real-time visual telemetry and obstacle avoidance.",
      techStack: ["JavaScript", "HTML5 Canvas", "A* Search", "CSS Variables"],
      demoUrl: "https://github.com/aryanatul2008-ship-it",
      repoUrl: "https://github.com/aryanatul2008-ship-it"
    },
    {
      id: "proj-03",
      code: "EXP-03",
      title: "ANOMALY FREQUENCY RADAR",
      category: "TELEMETRY SCANNER",
      status: "CALIBRATING",
      badge: "EXPERIMENTAL",
      summary: "Spectrogram visualizer that analyzes ambient audio signals to intercept and decode low-frequency broadcast spikes across radiation zones.",
      details: "Utilizes the Web Audio API AnalyserNode to construct a live FFT spectrum waterfall display, rendering fast 60fps telemetry without framework overhead.",
      techStack: ["Web Audio API", "Pure JS", "SVG Telemetry", "Mono Audio"],
      demoUrl: "https://github.com/aryanatul2008-ship-it",
      repoUrl: "https://github.com/aryanatul2008-ship-it"
    },
    {
      id: "proj-04",
      code: "EXP-04",
      title: "TERMINAL DISPATCH // P2P BEACON",
      category: "COMMUNICATIONS",
      status: "DEPLOYED",
      badge: "LIGHTWEIGHT",
      summary: "Ultra-low-bandwidth emergency messaging terminal designed to exchange distress logs over encrypted payloads when bandwidth is rationed.",
      details: "Features keyboard-first commands, local storage persistence, automatic message retry queues, and responsive terminal layout.",
      techStack: ["HTML5", "CSS3", "Local Storage", "Vanilla JS"],
      demoUrl: "https://github.com/aryanatul2008-ship-it",
      repoUrl: "https://github.com/aryanatul2008-ship-it"
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
