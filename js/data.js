/**
 * Silicon Maze: Doomsday Edition - Archival Database
 * Personal Portfolio Data Source
 */

const PORTFOLIO_DATA = {
  survivor: {
    name: "Aryan Partil",
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
  skills: [
    {
      category: "CORE ARCHITECTURE",
      code: "SYS-01",
      items: [
        { name: "JavaScript (ES6+)", level: "ADVANCED", desc: "Core logic, event loops, DOM performance" },
        { name: "HTML5 & Semantic Markup", level: "EXPERT", desc: "Accessible nodes, screen reader compliance" },
        { name: "Modern CSS3 & CSS Grid", level: "EXPERT", desc: "Responsive layouts, variables, zero-drift" },
        { name: "TypeScript", level: "INTERMEDIATE", desc: "Type-safe interfaces, resilient schemas" }
      ]
    },
    {
      category: "BACKEND & INFRASTRUCTURE",
      code: "SYS-02",
      items: [
        { name: "Node.js / Express", level: "ADVANCED", desc: "REST micro-services, stream processing" },
        { name: "Python / Data Wrangling", level: "ADVANCED", desc: "Automation pipelines, parsing fallout telemetry" },
        { name: "SQL & Relational DBs", level: "INTERMEDIATE", desc: "ACID transactions, structured persistence" },
        { name: "Git & Version Control", level: "EXPERT", desc: "Atomic commits, branching, GitHub Pages" }
      ]
    },
    {
      category: "SURVIVAL SPECS & PROTOCOLS",
      code: "SYS-03",
      items: [
        { name: "Web Accessibility (a11y)", level: "EXPERT", desc: "Keyboard nav, WCAG AAA contrast, ARIA" },
        { name: "Performance Optimization", level: "ADVANCED", desc: "Sub-100ms FCP, lightweight payloads" },
        { name: "Terminal UI / UX", level: "EXPERT", desc: "High-contrast telemetry, mono typography" },
        { name: "Responsive Engineering", level: "EXPERT", desc: "Adaptive viewports, zero mobile scroll" }
      ]
    }
  ],
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
    { time: "00:01:16", tag: "SECURITY", message: "Survivor credentials verified: Aryan Partil (Level 4 clearance)." },
    { time: "00:01:17", tag: "STATUS", message: "Portfolio telemetry online. Ready for command execution." }
  ]
};

// Global export for vanilla browser usage without module bundlers
if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
