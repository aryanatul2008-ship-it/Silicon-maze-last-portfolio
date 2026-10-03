/**
 * Silicon Maze: Doomsday Edition - Archival Database
 * Personal Portfolio Data Source
 */

const PORTFOLIO_DATA = {
  survivor: {
    name: "Aryan Patil",
    callsign: "OPERATOR // V-774",
    role: "First-year CSE student",
    status: "ACTIVE_SURVIVOR",
    location: "NITK // SURVIVOR SECTOR",
    beacon: "ONLINE",
    bio: "I'm a first-year CSE student at NITK, exploring every opportunity that comes my way. This archive holds my achievements, what I've built, what I know, and how to reach me."
  },
  systemStats: {
    nodeId: "ARCHIVE-NODE-09",
    securityClearance: "LEVEL 4",
    lastSync: "DOOMSDAY EPOCH +142d",
    integrity: "99.8%"
  },
  skills: {
    "Frontend": [
      { name: "HTML", level: 30, note: "Page structure" },
      { name: "CSS", level: 30, note: "Styling" },
      { name: "JavaScript", level: 22, note: "Learning" }
    ],
    "Backend": [
      { name: "Node.js", level: 25, note: "Server" }
    ],
    "Databases": [
      { name: "PostgreSQL", level: 24, note: "Task Tracker" }
    ],
    "Tools": [
      { name: "GitHub", level: 32, note: "Version control" },
      { name: "Antigravity", level: 70, note: "My helper" },
      { name: "VS Code", level: 50, note: "Main code runner" },
      { name: "Vercel", level: 32, note: "Deploys" }
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
