export const projects = [
  {
    title: "The World's Most Accurate* AI Text Detector",
    link: "https://detectai.ossner.com",
    year: 2025,
    tags: ["Article"],
  },
  {
    title: "Why do Buttons Beep?",
    link: "https://ossner.github.io/DTMF",
    year: 2024,
    tags: ["Article"],
  },
  {
    title: "Do You Know Your MEPs? (Outdated)",
    link: "https://ossner.github.io/meproulette",
    year: 2023,
    tags: ["Game"],
  },
  {
    title:
      "RCIT: A Robust Catadioptric-based Instrument 3D Tracking Method For Microsurgical Instruments In a Single-Camera System",
    link: "https://ieeexplore.ieee.org/abstract/document/10340955",
    year: 2023,
    tags: ["Research"],
  },
  {
    title: "Algorithms and Datastructures",
    link: "https://ossner.github.io/TUMGAD/src/routes",
    year: 2020,
    tags: ["Tool"],
  },
  {
    title: "Binary Signal Encoding Visualizer",
    link: "https://ossner.github.io/signalizer",
    year: 2022,
    tags: ["Tool"],
  },
];

export const sortedProjects = projects.sort((a, b) => b.year - a.year);
