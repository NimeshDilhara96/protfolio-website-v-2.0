export const siteConfig = {
  personal: {
    name: "Nimesh Dilhara Kulasooriya",
    role: "Full-Stack Developer",
    shortBio: "freelance full-stack developer. I help startups and international clients ship fast, modern products with React, Node.js and AI features.",
    fullBio: [
      "I am a software engineer focused on building scalable, performant, and beautifully designed web applications. I bridge the gap between design and engineering.",
      "With a strong foundation in modern JavaScript frameworks and backend systems, I take products from zero to launch, ensuring they look great and run flawlessly."
    ],
    availability: "Available for freelance worldwide",
    location: "Sri Lanka, working worldwide"
  },
  socials: {
    github: "https://github.com/nimeshdilhara96",
    linkedin: "https://linkedin.com/in/nimeshdilhara",
    instagram: "https://instagram.com/nimeshdilhara_",
    twitter: "https://twitter.com/nimeshdilhara8",
    upwork: "https://www.upwork.com/freelancers/~01...", // Placeholder
    resume: "https://drive.google.com/file/d/1GYmuy_2CMK9ZsAU3Dpf1A65O9hweZ_m-/view?usp=sharing"
  },
  stats: [
    { label: "Projects shipped", value: "10+" },
    { label: "Years building", value: "2+" },
    { label: "Core technologies", value: "5" },
    { label: "Working worldwide", value: "Sri Lanka" } // Special text stat
  ],
  services: [
    { title: "Full-stack web apps", description: "End-to-end development using modern tech." },
    { title: "Business systems", description: "ERP, dashboards, and internal tools." },
    { title: "UI/UX design", description: "Clean, user-centric interfaces built in Figma." },
    { title: "AI features", description: "Integration of modern AI APIs and workflows." }
  ],
  experience: [
    {
      role: "Full-Stack Developer",
      company: "Freelance",
      dates: "2022 - Present",
      summary: "Shipped various web applications and internal tools for international clients.",
      achievements: [
        "Architected and deployed a complete ERP system for a local business.",
        "Integrated AI APIs to automate content generation."
      ],
      stack: ["React", "Node.js", "MongoDB", "Figma"]
    }
  ],
  skills: {
    "Frontend Magic ✨": ["HTML5", "CSS3", "JavaScript", "React", "Vue.js", "Bootstrap"],
    "Backend & Mobile 🔧": ["Node.js", "Express.js", "React Native", "Flutter", "Android"],
    "Languages & Databases 💾": ["Java", "C", "C#", "PHP", "Python", "MongoDB", "MySQL"],
    "Cloud & Tools ☁️": ["Google Cloud", "Firebase", "Figma", "Flask"],
    "AI & Data Science 🤖": ["TensorFlow", "scikit-learn", "Pandas"]
  },
  education: [
    {
      degree: "BIT (Hons.) in Software Engineering",
      school: "Esoft Uni Colombo",
      dates: "Oct 2022 to Sep 2026",
      status: "Graduated"
    },
    {
      degree: "Advanced Level (Technology stream)",
      school: "K/Galigamuwa Central College",
      dates: "Completed",
      status: "Completed"
    }
  ],
  projects: [
    {
      title: "OrderFlow ERP",
      slug: "orderflow-erp",
      type: "development",
      featured: true,
      summary: "A complete business management system.",
      problem: "The client needed a unified system to replace messy spreadsheets.",
      metrics: ["50% faster processing", "10k+ active users"],
      stack: ["React", "Node.js", "MongoDB", "Express"],
      liveUrl: "#",
      githubUrl: "#",
      thumbnail: "/assets/placeholder-thumb.jpg", 
      screenshots: []
    },
    {
      title: "NextGen Sport Club",
      slug: "nextgen-sport-club",
      type: "development",
      featured: false,
      summary: "Modern landing page and management portal.",
      problem: "The club needed a modern digital presence.",
      metrics: ["Custom dashboard", "Secure auth"],
      stack: ["React", "Firebase", "Tailwind"],
      liveUrl: "#",
      githubUrl: "#",
      thumbnail: "/assets/placeholder-thumb.jpg",
      screenshots: []
    },
    {
      title: "SmartMap Pro",
      slug: "smartmap-pro",
      type: "development",
      featured: false,
      summary: "Interactive mapping solution.",
      problem: "Users needed real-time location tracking.",
      metrics: ["Real-time sync", "Mobile responsive"],
      stack: ["React", "Leaflet", "Node.js"],
      liveUrl: "#",
      githubUrl: "#",
      thumbnail: "/assets/placeholder-thumb.jpg",
      screenshots: []
    }
  ]
};
