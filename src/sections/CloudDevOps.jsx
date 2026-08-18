import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Cloud architecture nodes matching the mockup
const architectureNodes = [
  { id: "github", label: "GitHub", icon: "🐙", color: "#6e5494" },
  { id: "cicd", label: "CI/CD", icon: "♾️", color: "#3b82f6" },
  { id: "docker", label: "Docker Build", icon: "🐳", color: "#0db7ed" },
  { id: "ecr", label: "Amazon ECR", icon: "📦", color: "#f59e0b" },
  { id: "ecs", label: "Amazon ECS\nFargate", icon: "🚢", color: "#f97316" },
  { id: "alb", label: "Application Load\nBalancer", icon: "⚖️", color: "#ec4899" },
  { id: "app", label: "Application\n(Frontend / Backend)", icon: "📦", color: "#10b981" },
  { id: "db", label: "MongoDB Atlas", icon: "🍃", color: "#00ed64" },
];

function NodeCard({ node, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const isLast = index === architectureNodes.length - 1;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex items-center"
    >
      <div className="flex flex-col items-center gap-3 w-28 text-center shrink-0">
        <div 
          className="w-16 h-16 rounded-full flex items-center justify-center text-3xl bg-[#0a0f1e] shadow-lg relative z-10"
          style={{ 
            border: `1px solid ${node.color}40`,
            boxShadow: `0 0 15px ${node.color}15`
          }}
        >
          {node.icon}
          {/* Subtle inner glow */}
          <div className="absolute inset-0 rounded-full opacity-10" style={{ background: node.color }} />
        </div>
        <span className="text-xs font-semibold text-slate-300 leading-tight whitespace-pre-wrap">
          {node.label}
        </span>
      </div>

      {!isLast && (
        <div className="w-12 md:w-20 flex items-center justify-center -ml-4 -mr-4 relative -translate-y-5">
          <div className="w-full h-px" style={{ background: `linear-gradient(90deg, ${node.color}50, ${architectureNodes[index+1].color}50)` }} />
          <div className="absolute right-0 text-[10px]" style={{ color: architectureNodes[index+1].color }}>
            ▶
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default function CloudDevOps() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section id="cloud-devops" className="section-wrapper relative bg-[#050810] py-20" aria-label="Cloud and DevOps">
      <div className="section-container relative z-10" ref={ref}>
        
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-px w-12 sm:w-24 bg-gradient-to-l from-violet-500/50 to-transparent" />
          <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-wide">
            Cloud & DevOps Architecture
          </h2>
          <div className="h-px w-12 sm:w-24 bg-gradient-to-r from-violet-500/50 to-transparent" />
        </div>

        <div className="w-full overflow-x-auto hide-scrollbar pb-10" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <div className="flex items-start min-w-max px-4">
            {architectureNodes.map((node, i) => (
              <NodeCard key={node.id} node={node} index={i} />
            ))}
          </div>
        </div>
        
        <div className="flex justify-center mt-6">
          <button className="px-6 py-2.5 rounded-lg border border-white/10 bg-[#0a0f1e] hover:bg-white/5 text-slate-300 text-sm font-semibold transition-all">
            Explore Architecture
          </button>
        </div>

      </div>
    </section>
  );
}
