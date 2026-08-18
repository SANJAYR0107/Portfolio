// ============================================================
// AI PORTFOLIO ASSISTANT — Knowledge Base & Guardrails
// ============================================================
// The assistant answers ONLY based on this data.
// Do NOT add anything unverified.
// ============================================================

import links from "./links";
import profile from "./profile";
import projects from "./projects";
import skillCategories from "./skills";
import education from "./education";
import certifications from "./certifications";
import achievements from "./achievements";

// ─── GUARDRAIL RESPONSES ───────────────────────────────────
const guardrails = {
  noInfo:
    "I don't have verified information about that in Sanjay's portfolio.",
  private:
    "I can help with Sanjay's professional information and public contact options, but I can't provide private information.",
  offtopic:
    "I'm Sanjay's portfolio assistant. I can help you explore his skills, projects, certifications, academics, resume, and professional profiles.",
  noInvention:
    "I only share verified information about Sanjay. I don't have data on that specific topic.",
};

// ─── STARTER QUESTIONS ─────────────────────────────────────
export const starterQuestions = [
  "Who is Sanjay R?",
  "What cloud services does he know?",
  "Explain his projects",
  "How to contact Sanjay?",
  "View certifications",
];

// ─── CORE KNOWLEDGE BASE ──────────────────────────────────
const knowledgeBase = {
  identity: {
    name: profile.name,
    role: profile.role,
    tagline: profile.tagline,
    bio: profile.shortBio,
  },
  education: education,
  skills: skillCategories,
  projects: projects,
  certifications: certifications,
  achievements: achievements,
  links: links,
};

// ─── RESPONSE ENGINE ──────────────────────────────────────
// A simple rule-based responder grounded ONLY in the knowledge base.
// No LLM hallucination. Only verified responses.

export function getAIResponse(message) {
  const q = message.toLowerCase().trim();

  // WHO IS / ABOUT SANJAY
  if (q.match(/who is sanjay|about sanjay|tell me about|introduce/)) {
    return {
      type: "text",
      content: `**${knowledgeBase.identity.name}** is a Cloud & DevOps Engineer and ${education[0]?.degree} student at ${education[0]?.institution} (${education[0]?.duration}).

${knowledgeBase.identity.bio}

**Core technologies:** ${profile.coreTechnologies.join(", ")}`,
    };
  }

  // INTERNSHIP SUITABILITY
  if (q.match(/suitable|internship|hire|fresher|entry.?level|junior/)) {
    return {
      type: "text",
      content: `Sanjay is a Cloud & DevOps-focused engineering student/fresher with practical, hands-on experience:

✅ **AWS** — Deployed applications using ECS, ECR, ALB, IAM, VPC
✅ **Docker** — Containerized full-stack applications
✅ **CI/CD** — Built GitHub Actions pipelines
✅ **Real Projects** — SkillSprint deployed on AWS
✅ **Currently Learning** — Kubernetes, Prometheus, Grafana

He is actively building cloud infrastructure skills and is well-suited for Cloud/DevOps internship roles.`,
    };
  }

  // AWS SERVICES
  if (q.match(/aws|amazon web|ec2|ecs|ecr|alb|iam|vpc|s3|cloud service/)) {
    const cloudSkills = skillCategories.find((c) => c.id === "cloud");
    const skillList = cloudSkills?.skills
      .map((s) => `• **${s.name}** — ${s.description}`)
      .join("\n");
    return {
      type: "text",
      content: `Sanjay has worked with the following **AWS services**:\n\n${skillList}`,
    };
  }

  // DEVOPS TOOLS
  if (q.match(/devops|docker|kubernetes|jenkins|ci.?cd|pipeline|github action|linux/)) {
    const devSkills = skillCategories.find((c) => c.id === "devops");
    const skillList = devSkills?.skills
      .map((s) => `• **${s.name}**${s.learning ? " *(Learning)*" : ""} — ${s.description}`)
      .join("\n");
    return {
      type: "text",
      content: `Sanjay's **DevOps** toolkit:\n\n${skillList}`,
    };
  }

  // KUBERNETES
  if (q.match(/kubernetes|k8s|pod|deployment|ingress|namespace/)) {
    return {
      type: "text",
      content: `Sanjay is **actively learning Kubernetes** — the container orchestration system for managing containerized workloads at scale.

**Kubernetes concepts he's studying:**
• Pods — smallest deployable units
• Deployments — manage replicated application Pods
• Services — stable networking access to Pods
• Ingress — routes external HTTP/HTTPS traffic
• Namespaces — logical cluster isolation

⚠️ He does not yet claim production Kubernetes experience — he is building this skill through hands-on learning.`,
    };
  }

  // SKILLSPRINT PROJECT
  if (q.match(/skillsprint|job prep|mock interview/)) {
    return {
      type: "text",
      content: `SkillSprint\nJob Prep & Mock Interview Platform\n\n<a href="https://github.com/SANJAYR0107/Skill-Sprint" target="_blank" rel="noopener noreferrer" class="btn-primary mt-4 inline-flex items-center gap-2">[ View GitHub ↗ ]</a>`,
    };
  }

  // RESUMESPHERE AI
  if (q.match(/resumesphere ai|resume analyzer|ai career/)) {
    return {
      type: "text",
      content: `ResumeSphere AI\nAI-powered ATS Resume Analyzer\n\n<a href="https://github.com/SANJAYR0107/ResumeSphere-AI" target="_blank" rel="noopener noreferrer" class="btn-primary mt-4 inline-flex items-center gap-2">[ View GitHub ↗ ]</a>`,
    };
  }

  // ALL PROJECTS
  if (q.match(/project|built|created|developed|work/)) {
    const projectList = projects
      .map((p) => `• **${p.title}** — ${p.subtitle}\n  _${p.description}_\n  **Tech:** ${p.tech.slice(0, 4).join(", ")}`)
      .join("\n\n");
    return {
      type: "text",
      content: `Sanjay has built the following projects:\n\n${projectList}\n\nAsk me about any specific project for more details!`,
    };
  }

  // ACADEMICS
  if (q.match(/academic|education|college|university|degree|study|student|eee|electrical/)) {
    const edu = education[0];
    return {
      type: "text",
      content: `**Academic Background:**

🎓 **${edu?.degree}**
🏛️ ${edu?.institution}
📅 ${edu?.duration} (${edu?.status})

${edu?.description}

**Technical areas studied:**
${edu?.areas.map((a) => `• ${a}`).join("\n")}`,
    };
  }

  // CERTIFICATIONS
  if (q.match(/certif|credential/)) {
    if (!certifications || certifications.length === 0) {
      return {
        type: "text",
        content:
          "Sanjay's certifications section is being updated. Please check back soon, or visit his LinkedIn profile for the latest.",
      };
    }
    const certList = certifications
      .map((c) => `• **${c.title}** — ${c.issuer} (${c.date})`)
      .join("\n");
    return { type: "text", content: `Sanjay's Certifications:\n\n${certList}` };
  }

  // CONTACT
  if (q.match(/contact|email|reach|connect|linkedin|github/)) {
    return {
      type: "text",
      content: `--------------------------------

📧 Email

sanjai8651@gmail.com

<a href="mailto:sanjai8651@gmail.com" class="btn-primary mt-2 mb-4 inline-block">[ Email Sanjay ]</a>

--------------------------------

💼 LinkedIn

<a href="https://www.linkedin.com/in/sanjay-r-7b6960374/" target="_blank" rel="noopener noreferrer" class="btn-primary mt-2 mb-4 inline-block">[ Open LinkedIn ]</a>

--------------------------------

💻 GitHub

<a href="https://github.com/SANJAYR0107" target="_blank" rel="noopener noreferrer" class="btn-primary mt-2 inline-block">[ Open GitHub ]</a>

--------------------------------`,
    };
  }

  // RESUME
  if (q.match(/resume|cv/)) {
    return {
      type: "resume",
      content: `Sanjay's resume is available for viewing. Click the button to open it.`,
      resumeUrl: "/Sanjay_R_Optimized_Aivar_Resume_Crct.pdf",
    };
  }

  // SKILLS (general)
  if (q.match(/skill|technology|tech|know|language|framework/)) {
    const allSkills = skillCategories
      .map(
        (cat) =>
          `**${cat.label}:** ${cat.skills.map((s) => s.name).join(", ")}`
      )
      .join("\n");
    return {
      type: "text",
      content: `Sanjay's technical skills by category:\n\n${allSkills}`,
    };
  }

  // MONITORING
  if (q.match(/monitor|prometheus|grafana|metric|dashboard/)) {
    return {
      type: "text",
      content: `Sanjay is learning **monitoring and observability** using:

• **Prometheus** — Open-source metrics collection and alerting
• **Grafana** — Visualization dashboards for monitoring data

These are part of his ongoing DevOps learning path.`,
    };
  }

  // LEETCODE / CODING
  if (q.match(/leetcode|coding|algorithm|problem.?solv/)) {
    return {
      type: "text",
      content: `Sanjay practices problem-solving on **LeetCode**.

Visit his profile for coding statistics: ${links.leetcode !== "LEETCODE_URL" ? links.leetcode : "(URL to be added)"}`,
    };
  }

  // OFFOPIC / UNKNOWN
  return {
    type: "text",
    content: guardrails.offtopic,
  };
}

export { guardrails, knowledgeBase };
export default knowledgeBase;
