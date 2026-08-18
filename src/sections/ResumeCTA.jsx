import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Download } from "lucide-react";

export default function ResumeCTA({ onOpenResume }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section-wrapper relative bg-[var(--bg)]" aria-label="Resume">
      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-violet-600/10 to-cyan-600/10 border border-white/10 p-10 md:p-16 text-center shadow-2xl relative overflow-hidden"
        >
          {/* Subtle bg glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-violet-500/20 rounded-full blur-[80px]" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Want to know more about me?
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
              Explore my resume, technical skills, projects, and experience in detail.
            </p>
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-slate-200 transition-colors shadow-lg shadow-white/5"
            >
              <Download size={20} />
              Download Resume
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
