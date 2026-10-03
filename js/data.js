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
      name: "Aroha",
      status: null,
      description: "Aroha bridges the gap between learning and hiring. It gives students a custom AI study roadmap, a live coding arena with a no-spoilers AI mentor, and job matching based on the skills they have actually proven.",
      tech: ["HTML5", "JavaScript", "Tailwind CSS", "Chart.js", "Node.js", "Express.js", "PostgreSQL", "Gemini API"],
      screenshot: "images/aroha.png",
      imageAlt: "Aroha dashboard showing a career compass, readiness score and recommended job matches",
      github: "https://github.com/aryanatul2008-ship-it/Aroha",
      live: null,
      bullets: [
        "Finds your starting point: students pick a target tech role, such as Frontend Developer, and take a quick skill check to see how prepared they are.",
        "Builds a custom AI roadmap: Google Gemini generates a week-by-week study plan based on the student's current skills and pace.",
        "Matches skills to real jobs: solving challenges earns XP and raises the Readiness Score, and verified skills are matched against job openings with a compatibility percentage."
      ]
    },
    {
      id: "project_002",
      archiveTag: "archive/project_002",
      name: "Witness",
      status: null,
      description: "Witness is a privacy-first tool that lets activists, journalists and investigators prove a piece of evidence existed at a specific time and has not been changed since. Files are encrypted on the user's own device, so the server never sees them.",
      tech: ["React", "Vite", "ethers.js", "Solidity", "Hardhat", "IPFS (Pinata)", "Gemini API"],
      screenshot: "images/witness.png",
      imageAlt: "Witness app showing evidence being encrypted and anchored to a blockchain",
      github: "https://github.com/Omega131/Witness.git",
      live: "https://github.com/user-attachments/assets/a5dd2a68-bbc2-43a5-8e3d-8677ed6bb03e",
      bullets: [
        "Encrypts on your device: the browser hashes the evidence (SHA-256) and encrypts it with a random AES-GCM key, so the raw file is never sent to a server.",
        "Anchors proof on a blockchain: the file's hash and its IPFS storage ID are recorded by a smart contract on the Celo Sepolia or Polygon Amoy test networks, giving a tamper-proof timestamp.",
        "Works offline and checks for AI: evidence is encrypted locally with no connection and synced later, and text documents can be scanned with Google Gemini for the likelihood they were AI-generated."
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
