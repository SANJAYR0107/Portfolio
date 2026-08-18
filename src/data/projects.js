// ============================================================
// PROJECTS — Add real GitHub & live URLs when available
// ============================================================

const projects = [
  {
    id: "skillsprint",
    featured: true,
    title: "SkillSprint",
    subtitle: "Cloud-Deployed Web Platform",
    description:
      "Containerized a full-stack application using Docker and deployed application components on AWS using ECS, ECR and Application Load Balancer. Implemented production-oriented configuration, cloud networking and container-based deployment workflows.",
    problem:
      "Job seekers and engineering students need a centralized platform that combines mock interview practice, coding challenges, and skill tracking — without jumping between multiple disconnected tools.",
    solution:
      "SkillSprint consolidates job prep into one platform: coding challenges via an integrated judge, real-time mock interview capabilities, and AI-guided learning paths.",
    keyFeatures: [
      "In-browser code editor with Judge0 execution engine",
      "Real-time collaborative features via Socket.io",
      "Caching and session management with Redis",
      "RESTful API backend with Express & Node.js",
      "Fully containerized with Docker",
      "Deployed on AWS (ECS, ECR, ALB)",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Docker", "Judge0", "Redis", "Socket.io", "AWS"],
    architecture: [
      { label: "React Frontend", type: "frontend" },
      { label: "Express Backend", type: "backend" },
      { label: "MongoDB Atlas", type: "database" },
      { label: "Redis Cache", type: "cache" },
      { label: "Docker", type: "container" },
      { label: "Amazon ECR", type: "registry" },
      { label: "Amazon ECS", type: "orchestration" },
      { label: "Application Load Balancer", type: "network" },
    ],
    githubUrl: "https://github.com/SANJAYR0107/Skill-Sprint",
    liveUrl: null,
    status: "completed",
    category: "Full Stack + Cloud",
  },
  {
    id: "tneb-billing",
    featured: false,
    title: "TNEB Billing System",
    subtitle: "Electricity Bill Management System",
    description:
      "A billing management system for Tamil Nadu Electricity Board operations, streamlining meter readings, bill generation, and payment tracking.",
    problem: "Manual billing processes are error-prone and slow. A digital solution is needed for accurate and efficient electricity bill management.",
    solution: "Developed a web-based billing system with user management, meter reading entry, automatic bill calculation, and payment tracking.",
    keyFeatures: [
      "User & admin management",
      "Meter reading entry and history",
      "Automatic bill generation",
      "Payment tracking",
    ],
    tech: ["Java", "HTML", "CSS", "JavaScript"],
    architecture: [],
    githubUrl: "https://github.com/SANJAYR0107/TNEB-Billing-System",
    liveUrl: null,
    status: "completed",
    category: "Web Application",
  },
  {
    id: "ai-career",
    featured: false,
    title: "ResumeSphere AI",
    subtitle: "AI-powered ATS Resume Analyzer",
    description:
      "AI-powered ATS resume analyzer for resume scoring, skill extraction, grammar analysis and report generation.",
    problem: "Students often lack clear guidance on which career paths align with their current skills and interests.",
    solution: "Built a recommendation engine that maps user inputs to career profiles using rule-based and ML approaches.",
    keyFeatures: [
      "Skill & interest assessment",
      "Career path matching",
      "Learning resource recommendations",
      "User-friendly interface",
    ],
    tech: ["Python", "JavaScript", "HTML", "CSS"],
    architecture: [],
    githubUrl: "https://github.com/SANJAYR0107/ResumeSphere-AI",
    liveUrl: null,
    status: "completed",
    category: "AI / ML",
  },
  {
    id: "mood-task",
    featured: false,
    title: "Mood Task Fun Engagement Management System",
    subtitle: "Employee Engagement Platform",
    description: "An engagement management system designed to track tasks, manage moods, and add fun activities for employee well-being.",
    problem: "Remote and hybrid work environments often lack proper tools for tracking employee mood and engagement.",
    solution: "Developed an integrated platform that combines task management with mood tracking and engagement activities.",
    keyFeatures: ["Task management", "Mood tracking", "Engagement activities", "User dashboard"],
    tech: ["JavaScript", "HTML", "CSS"],
    architecture: [],
    githubUrl: "https://github.com/SANJAYR0107/Mood-Task-Fun-Engagement-System",
    liveUrl: null,
    status: "completed",
    category: "Web Application",
  }
];

export default projects;
