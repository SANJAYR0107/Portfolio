import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Layout, Server, Database, Code, Wrench, Cloud } from "lucide-react";

const skillCategories = [
  {
    id: "01",
    title: "Cloud",
    icon: Cloud,
    skills: ["AWS", "ECS", "ECR", "ALB"],
  },
  {
    id: "02",
    title: "DevOps",
    icon: Layout,
    skills: ["Docker", "CI/CD", "Git", "GitHub"],
  },
  {
    id: "03",
    title: "OS",
    icon: Server,
    skills: ["Linux", "Windows"],
  },
  {
    id: "04",
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js"],
  },
  {
    id: "05",
    title: "Database",
    icon: Database,
    skills: ["MongoDB"],
  },
  {
    id: "06",
    title: "Programming",
    icon: Code,
    skills: ["Java", "JavaScript"],
  },
  {
    id: "07",
    title: "Tools",
    icon: Wrench,
    skills: ["VS Code", "Postman", "GitHub"],
  },
];

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="section-wrapper relative bg-[var(--bg)]" aria-label="Skills">
      <div className="section-container relative z-10" ref={ref}>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[var(--violet)] font-mono text-sm mb-4 uppercase tracking-wider">02 — SKILLS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text)] tracking-tight font-display">
            Technical Arsenal.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col p-6 bg-[var(--panel)] border border-[var(--border)] rounded-xl transition-all duration-300 hover:-translate-y-1 hover:border-[var(--violet)] hover:shadow-[0_15px_35px_-15px_rgba(124,108,240,0.3)]"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <category.icon size={22} className="text-[var(--violet)]" />
                  <h3 className="text-lg font-bold text-[var(--text)] font-display">{category.title}</h3>
                </div>
                <span className="text-[var(--text-dim)] font-mono text-xs opacity-60">
                  {category.id}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-[var(--panel-2)] border border-[var(--border)] text-[var(--text-dim)] text-sm font-medium font-body"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
