// ============================================================
// SKILLS — Categorized, no fake percentages
// ============================================================

export const skillCategories = [
  {
    id: "cloud",
    label: "Cloud",
    icon: "☁️",
    color: "#f59e0b",
    skills: [
      {
        name: "AWS",
        icon: "aws",
        description: "Amazon Web Services — primary cloud platform used for hosting applications and services.",
        usedIn: ["SkillSprint"],
      },
      {
        name: "EC2",
        icon: "server",
        description: "Virtual compute instances for running applications on the AWS cloud.",
        usedIn: ["SkillSprint"],
      },
      {
        name: "ECS",
        icon: "layers",
        description: "Container orchestration service for deploying and managing Docker containers on AWS.",
        usedIn: ["SkillSprint"],
      },
      {
        name: "ECR",
        icon: "package",
        description: "Elastic Container Registry — stores and manages Docker container images on AWS.",
        usedIn: ["SkillSprint"],
      },
      {
        name: "ALB",
        icon: "git-merge",
        description: "Application Load Balancer — routes incoming HTTP/HTTPS traffic to backend targets.",
        usedIn: ["SkillSprint"],
      },
      {
        name: "IAM",
        icon: "shield",
        description: "Identity and Access Management — manages secure access to AWS resources.",
        usedIn: ["SkillSprint"],
      },
      {
        name: "VPC",
        icon: "network",
        description: "Virtual Private Cloud — isolated network environment for AWS resources.",
        usedIn: ["SkillSprint"],
      },
      {
        name: "S3",
        icon: "database",
        description: "Simple Storage Service — scalable object storage for files, backups, and static assets.",
        usedIn: [],
      },
      {
        name: "MongoDB Atlas",
        icon: "database",
        description: "Managed cloud database used as the primary data store for applications.",
        usedIn: ["SkillSprint"],
      },
    ],
  },
  {
    id: "devops",
    label: "DevOps",
    icon: "🔄",
    color: "#3b82f6",
    skills: [
      {
        name: "Docker",
        icon: "box",
        description: "Containerization platform — packages applications with all dependencies for consistent deployments.",
        usedIn: ["SkillSprint"],
      },
      {
        name: "Kubernetes",
        icon: "layers",
        description: "Container orchestration system — currently learning for managing containerized workloads at scale.",
        usedIn: [],
        learning: true,
      },
      {
        name: "Jenkins",
        icon: "tool",
        description: "Open-source automation server for building CI/CD pipelines.",
        usedIn: [],
      },
      {
        name: "GitHub Actions",
        icon: "zap",
        description: "CI/CD automation built into GitHub for automated testing and deployments.",
        usedIn: ["SkillSprint"],
      },
      {
        name: "CI/CD",
        icon: "repeat",
        description: "Continuous Integration / Continuous Delivery — automated build, test, and deploy workflows.",
        usedIn: ["SkillSprint"],
      },
      {
        name: "Linux",
        icon: "terminal",
        description: "Primary operating system for server environments and DevOps tooling.",
        usedIn: ["SkillSprint"],
      },
      {
        name: "Git",
        icon: "git-branch",
        description: "Distributed version control system for tracking source code changes.",
        usedIn: ["SkillSprint"],
      },
      {
        name: "GitHub",
        icon: "github",
        description: "Code hosting platform with collaboration and CI/CD integration capabilities.",
        usedIn: ["SkillSprint"],
      },
    ],
  },
  {
    id: "programming",
    label: "Programming",
    icon: "💻",
    color: "#8b5cf6",
    skills: [
      {
        name: "Java",
        icon: "code",
        description: "Object-oriented language used for backend logic and data structures practice.",
        usedIn: [],
      },
      {
        name: "JavaScript",
        icon: "code",
        description: "Core scripting language for both frontend and backend (Node.js) development.",
        usedIn: ["SkillSprint"],
      },
      {
        name: "HTML",
        icon: "layout",
        description: "Markup language for structuring web content.",
        usedIn: ["SkillSprint"],
      },
      {
        name: "CSS",
        icon: "palette",
        description: "Styling language for designing responsive and visually appealing web interfaces.",
        usedIn: ["SkillSprint"],
      },
    ],
  },
  {
    id: "development",
    label: "Development",
    icon: "🔧",
    color: "#10b981",
    skills: [
      {
        name: "React",
        icon: "atom",
        description: "Frontend JavaScript library for building interactive user interfaces.",
        usedIn: ["SkillSprint"],
      },
      {
        name: "Node.js",
        icon: "server",
        description: "JavaScript runtime for building scalable server-side applications.",
        usedIn: ["SkillSprint"],
      },
      {
        name: "Express",
        icon: "zap",
        description: "Minimal and flexible Node.js web framework for building REST APIs.",
        usedIn: ["SkillSprint"],
      },
      {
        name: "MongoDB",
        icon: "database",
        description: "NoSQL document database used for flexible and scalable data storage.",
        usedIn: ["SkillSprint"],
      },
      {
        name: "REST APIs",
        icon: "globe",
        description: "Architectural style for designing networked application APIs over HTTP.",
        usedIn: ["SkillSprint"],
      },
      {
        name: "Redis",
        icon: "zap",
        description: "In-memory data structure store used for caching and session management.",
        usedIn: ["SkillSprint"],
      },
      {
        name: "Socket.io",
        icon: "radio",
        description: "Library for real-time, bidirectional event-based communication.",
        usedIn: ["SkillSprint"],
      },
    ],
  },
  {
    id: "monitoring",
    label: "Monitoring",
    icon: "📊",
    color: "#f43f5e",
    skills: [
      {
        name: "Prometheus",
        icon: "activity",
        description: "Open-source monitoring and alerting toolkit for collecting metrics from services.",
        usedIn: [],
        learning: true,
      },
      {
        name: "Grafana",
        icon: "bar-chart",
        description: "Visualization and analytics platform for monitoring dashboards.",
        usedIn: [],
        learning: true,
      },
    ],
  },
];

export default skillCategories;
