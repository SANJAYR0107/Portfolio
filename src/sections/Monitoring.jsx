import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Activity, Cpu, HardDrive, Wifi, AlertCircle } from "lucide-react";

// Demo data — clearly labeled as visualization only
const metrics = [
  { label: "CPU Utilization", value: 42, unit: "%", icon: Cpu, color: "#3b82f6", trend: "stable" },
  { label: "Memory Usage", value: 61, unit: "%", icon: HardDrive, color: "#8b5cf6", trend: "stable" },
  { label: "Request Rate", value: 128, unit: "req/s", icon: Wifi, color: "#10b981", trend: "up" },
  { label: "Error Rate", value: 0.8, unit: "%", icon: AlertCircle, color: "#f59e0b", trend: "down" },
];

function SparkLine({ color }) {
  const points = [30, 45, 35, 60, 42, 55, 38, 50, 42].map((v, i) => `${i * 12},${50 - v}`).join(" ");
  return (
    <svg width="90" height="32" viewBox="0 0 96 50" className="opacity-60">
      <polyline points={points} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MetricCard({ metric, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const Icon = metric.icon;
  const trendColor = metric.trend === "up" ? "#10b981" : metric.trend === "down" ? "#f59e0b" : "#94a3b8";
  const trendIcon = metric.trend === "up" ? "↑" : metric.trend === "down" ? "↓" : "→";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-5 rounded-2xl border border-white/8 bg-[#0a0f1e] hover:border-white/12 transition-all"
    >
      <div className="flex items-start justify-between mb-3">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center"
          style={{ background: `${metric.color}15`, border: `1px solid ${metric.color}25` }}
        >
          <Icon size={16} style={{ color: metric.color }} />
        </div>
        <span style={{ color: trendColor }} className="text-xs font-mono">{trendIcon} {metric.trend}</span>
      </div>
      <p className="text-slate-500 text-xs font-mono mb-1">{metric.label}</p>
      <div className="flex items-end justify-between">
        <p className="text-2xl font-bold text-white">
          {metric.value}
          <span className="text-sm text-slate-500 ml-1">{metric.unit}</span>
        </p>
        <SparkLine color={metric.color} />
      </div>
    </motion.div>
  );
}

const tools = [
  { name: "Prometheus", icon: "📊", desc: "Scrapes and stores metrics from services as time-series data.", status: "learning" },
  { name: "Grafana", icon: "📈", desc: "Visualizes Prometheus metrics in real-time dashboards.", status: "learning" },
];

export default function Monitoring() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="monitoring" className="section-wrapper relative bg-[#060a15]" aria-label="Monitoring">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="section-subtitle mb-3">05b — Monitoring</p>
          <h2 className="section-title">Observability</h2>
          <div className="flex items-center gap-2 mt-3">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <p className="text-amber-400 text-xs font-mono">Demo visualization — not real-time data</p>
          </div>
        </motion.div>

        {/* Metric cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {metrics.map((m, i) => <MetricCard key={m.label} metric={m} index={i} />)}
        </div>

        {/* Container health */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="p-5 rounded-2xl border border-white/8 bg-[#0a0f1e] mb-6"
        >
          <div className="flex items-center justify-between mb-4">
            <p className="text-xs text-slate-500 font-mono uppercase tracking-wider">Container Health (Demo)</p>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-green-400 font-mono">All healthy</span>
            </div>
          </div>
          <div className="space-y-2">
            {["frontend-container", "backend-container", "redis-cache"].map((c, i) => (
              <div key={c} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                <span className="font-mono text-xs text-slate-400">{c}</span>
                <div className="flex-1 h-1.5 rounded-full bg-slate-800 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${[42, 61, 28][i]}%` } : {}}
                    transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-violet-500"
                  />
                </div>
                <span className="text-xs text-slate-500 font-mono w-10 text-right">{[42, 61, 28][i]}%</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Monitoring tools */}
        <div className="grid sm:grid-cols-2 gap-4">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              className="p-5 rounded-2xl border border-amber-500/10 bg-amber-500/3"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{tool.icon}</span>
                <div>
                  <p className="text-white font-semibold">{tool.name}</p>
                  <span className="text-xs text-amber-400 font-mono">Currently Learning</span>
                </div>
              </div>
              <p className="text-slate-400 text-sm">{tool.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
