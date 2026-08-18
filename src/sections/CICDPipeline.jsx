import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle2 } from "lucide-react";

const pipelineStages = [
  {
    id: "code",
    label: "Code",
    icon: "📝",
    color: "#6e5494",
    description: "Developer writes code locally and commits changes to a feature branch.",
    tools: ["VS Code", "Git"],
  },
  {
    id: "push",
    label: "Push",
    icon: "⬆️",
    color: "#3b82f6",
    description: "Code is pushed to GitHub, triggering the CI/CD workflow via a webhook.",
    tools: ["GitHub"],
  },
  {
    id: "build",
    label: "Build",
    icon: "🔨",
    color: "#8b5cf6",
    description: "GitHub Actions runner checks out the code and installs dependencies.",
    tools: ["GitHub Actions", "npm"],
  },
  {
    id: "test",
    label: "Test",
    icon: "🧪",
    color: "#06b6d4",
    description: "Automated tests run to verify code quality before proceeding.",
    tools: ["Jest", "Linting"],
  },
  {
    id: "docker",
    label: "Docker",
    icon: "🐳",
    color: "#0db7ed",
    description: "Application is packaged into a Docker container image with all dependencies.",
    tools: ["Docker", "Dockerfile"],
  },
  {
    id: "ecr",
    label: "Push to ECR",
    icon: "📦",
    color: "#f59e0b",
    description: "Docker image is tagged and pushed to Amazon ECR for versioned storage.",
    tools: ["Amazon ECR", "AWS CLI"],
  },
  {
    id: "deploy",
    label: "Deploy",
    icon: "🚀",
    color: "#f97316",
    description: "ECS Fargate pulls the new image and rolls out the updated containers.",
    tools: ["ECS Fargate", "Task Definition"],
  },
  {
    id: "live",
    label: "Live",
    icon: "✅",
    color: "#10b981",
    description: "Application is live. ALB routes traffic to healthy container instances.",
    tools: ["ALB", "Route 53"],
  },
];

function PipelineStage({ stage, index, isActive, onClick, isAnimating }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08 }}
      className="flex flex-col items-center"
    >
      <motion.button
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => onClick(stage)}
        className="relative flex flex-col items-center gap-2 p-4 rounded-2xl border transition-all duration-300 w-24 text-center focus-visible:outline-blue-500"
        style={{
          background: isActive ? `${stage.color}18` : "rgba(10,15,30,0.8)",
          borderColor: isActive ? `${stage.color}60` : `${stage.color}25`,
          boxShadow: isActive ? `0 0 20px ${stage.color}25` : "none",
        }}
        aria-label={`${stage.label} pipeline stage`}
      >
        {/* Animated ring for active */}
        {isAnimating && isActive && (
          <motion.div
            className="absolute inset-0 rounded-2xl border-2"
            style={{ borderColor: stage.color }}
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        )}

        <span className="text-2xl">{stage.icon}</span>
        <span className="text-xs font-semibold text-white leading-tight">{stage.label}</span>
      </motion.button>

      {/* Connector with animated packet */}
      {index < pipelineStages.length - 1 && (
        <div className="relative h-8 flex flex-col items-center justify-center">
          <div
            className="w-px h-full"
            style={{ background: `linear-gradient(180deg, ${stage.color}40, ${pipelineStages[index+1]?.color}40)` }}
          />
          <motion.div
            className="absolute w-2 h-2 rounded-full"
            style={{ background: stage.color }}
            animate={{ y: ["-12px", "12px"], opacity: [0, 1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, delay: index * 0.1, ease: "linear" }}
          />
        </div>
      )}
    </motion.div>
  );
}

export default function CICDPipeline() {
  const [activeStage, setActiveStage] = useState(null);
  const [isAnimating] = useState(true);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleStageClick = (stage) => {
    setActiveStage(activeStage?.id === stage.id ? null : stage);
  };

  return (
    <section id="cicd" className="section-wrapper relative bg-[#050810]" aria-label="CI/CD Pipeline">
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(59,130,246,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.05) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="section-subtitle mb-3">05 — CI/CD</p>
          <h2 className="section-title">Deployment Pipeline</h2>
          <p className="text-slate-400 mt-3 max-w-lg text-sm">
            An interactive CI/CD flow — from code commit to live deployment. Click any stage to learn what happens.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Pipeline visualization */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center py-6"
          >
            {pipelineStages.map((stage, i) => (
              <PipelineStage
                key={stage.id}
                stage={stage}
                index={i}
                isActive={activeStage?.id === stage.id}
                onClick={handleStageClick}
                isAnimating={isAnimating}
              />
            ))}
          </motion.div>

          {/* Stage details panel */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-5"
          >
            <AnimatePresence mode="wait">
              {activeStage ? (
                <motion.div
                  key={activeStage.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="p-6 rounded-2xl border"
                  style={{ background: `${activeStage.color}08`, borderColor: `${activeStage.color}30` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{activeStage.icon}</span>
                    <div>
                      <h3 className="text-white font-bold text-xl">{activeStage.label}</h3>
                      <p className="text-xs font-mono mt-0.5" style={{ color: activeStage.color }}>
                        Stage {pipelineStages.findIndex(s => s.id === activeStage.id) + 1} of {pipelineStages.length}
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-5">
                    {activeStage.description}
                  </p>

                  <div>
                    <p className="text-xs text-slate-500 font-mono mb-2 uppercase tracking-wider">Tools</p>
                    <div className="flex flex-wrap gap-2">
                      {activeStage.tools.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium"
                          style={{ background: `${activeStage.color}15`, color: activeStage.color, border: `1px solid ${activeStage.color}25` }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="hint"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-6 rounded-2xl border border-blue-500/10 bg-blue-500/4"
                >
                  <p className="text-slate-400 text-sm">
                    👈 Click any stage in the pipeline to see what happens at that step.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Full pipeline summary */}
            <div className="p-5 rounded-2xl border border-white/6 bg-[#0a0f1e]">
              <p className="text-xs text-slate-500 font-mono mb-4 uppercase tracking-wider">Pipeline Summary</p>
              <div className="space-y-2">
                {pipelineStages.map((stage, i) => (
                  <div key={stage.id} className="flex items-center gap-3">
                    <CheckCircle2 size={14} style={{ color: stage.color }} />
                    <span className="text-sm text-slate-400">{stage.label}</span>
                    <span className="ml-auto text-xs text-slate-600">{stage.tools[0]}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
