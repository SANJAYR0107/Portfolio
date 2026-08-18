import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import education from "../data/education";

const journeySteps = [
  { label: "Electrical Engineering", icon: "⚡", color: "#f59e0b" },
  { label: "Programming", icon: "💻", color: "#3b82f6" },
  { label: "Software Development", icon: "🔧", color: "#8b5cf6" },
  { label: "Cloud & DevOps", icon: "☁️", color: "#10b981" },
];

export default function Academics() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const edu = education[0];

  return (
    <section id="academics" className="section-wrapper relative bg-[#060a15]" aria-label="Academics">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(139,92,246,0.05) 1px, transparent 1px)",
          backgroundSize: "25px 25px",
        }}
      />

      <div className="section-container relative z-10" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="section-subtitle mb-3">06 — Academics</p>
          <h2 className="section-title">Education</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Education card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative p-6 rounded-2xl border border-violet-500/15 bg-gradient-to-br from-slate-900/80 to-[#0a0f1e]"
          >
            {/* Glow accent */}
            <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-gradient-to-r from-violet-500 to-blue-500" />

            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 rounded-xl bg-violet-500/15 border border-violet-500/25 flex items-center justify-center text-2xl flex-shrink-0">
                🎓
              </div>
              <div>
                <h3 className="text-white font-bold text-lg leading-tight">
                  {edu?.degree}
                </h3>
                <p className="text-violet-400 text-sm mt-1">{edu?.institution}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-5">
              <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono">
                {edu?.duration}
              </span>
              <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-mono">
                {edu?.status}
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              {edu?.description}
            </p>

            {/* Technical areas */}
            <div>
              <p className="text-xs text-slate-500 font-mono mb-3 uppercase tracking-wider">
                Technical Areas
              </p>
              <div className="flex flex-wrap gap-2">
                {edu?.areas.map((area) => (
                  <span
                    key={area}
                    className="px-2.5 py-1 rounded-lg bg-white/4 border border-white/8 text-slate-300 text-xs font-medium"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Journey progression */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-xs text-slate-500 font-mono mb-6 uppercase tracking-wider">
              Learning Progression
            </p>

            <div className="relative pl-8">
              {/* Vertical line */}
              <div className="absolute left-3 top-4 bottom-4 w-px bg-gradient-to-b from-amber-500/40 via-blue-500/40 via-violet-500/40 to-green-500/40" />

              {journeySteps.map((step, i) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, x: 16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.12 }}
                  className={`relative mb-8 ${i === journeySteps.length - 1 ? "mb-0" : ""}`}
                >
                  {/* Dot */}
                  <div
                    className="absolute -left-[1.35rem] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 flex items-center justify-center text-xs"
                    style={{
                      background: `${step.color}20`,
                      borderColor: step.color,
                    }}
                  />

                  <div
                    className="p-4 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 cursor-default"
                    style={{
                      background: `${step.color}06`,
                      borderColor: `${step.color}20`,
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{step.icon}</span>
                      <span className="text-white font-semibold text-sm">{step.label}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mindset note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="mt-8 p-4 rounded-xl bg-blue-500/5 border border-blue-500/10"
            >
              <p className="text-sm text-slate-400 leading-relaxed">
                <span className="text-blue-400 font-semibold">EEE → DevOps</span> — my electrical
                engineering foundation gives me a systems-thinking mindset that translates
                well to cloud infrastructure and DevOps engineering.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
