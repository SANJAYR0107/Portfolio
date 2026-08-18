import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Cloud, BookOpen, Brain } from "lucide-react";

const stats = [
  {
    icon: <GraduationCap size={28} className="text-violet-500" />,
    value: "06+",
    label: "Projects Built",
  },
  {
    icon: <Cloud size={28} className="text-blue-500" />,
    value: "10+",
    label: "Cloud Technologies",
  },
  {
    icon: <BookOpen size={28} className="text-blue-400" />,
    value: "Continuous",
    label: "Learning",
  },
  {
    icon: <Brain size={28} className="text-violet-400" />,
    value: "Problem Solver",
    label: "Mindset",
  },
];

export default function Achievements() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="achievements" className="w-full bg-[#050810] py-12 border-t border-b border-white/5" aria-label="Highlights">
      <div className="section-container" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-12 divide-x divide-white/5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center justify-center gap-4 px-2"
            >
              <div className="flex-shrink-0">
                {stat.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-bold text-white leading-tight">
                  {stat.value}
                </span>
                <span className="text-xs md:text-sm text-slate-400 leading-tight">
                  {stat.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
