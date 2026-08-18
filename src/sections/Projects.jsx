import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import projectsData from "../data/projects";

const isPlaceholder = (url) => !url || url.includes("_URL") || url.includes("_ADDRESS");

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="projects" className="section-wrapper relative bg-[var(--bg)]" aria-label="Projects">
      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-[var(--violet)] font-mono text-sm mb-4 uppercase tracking-wider">03 — PROJECTS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text)] tracking-tight font-display">
            Featured Work.
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id || project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
              className={`project-card ${project.featured ? "featured" : ""}`}
            >
              {project.featured && (
                <span className="absolute top-6 right-6 font-mono text-[0.65rem] uppercase tracking-wider text-[var(--violet)] border border-[var(--violet)] px-2 py-0.5 rounded">
                  Featured
                </span>
              )}
              
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="chips">
                {project.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              
              {!isPlaceholder(project.githubUrl) && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="repo-link">
                  GitHub Repo <i>&rarr;</i>
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
