import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Award, ChevronRight } from "lucide-react";
import education from "../data/education";
import certifications from "../data/certifications";

function AcademicsColumn() {
  const edu = education[0];
  return (
    <div className="flex flex-col h-full bg-[#0d1117] rounded-2xl border border-white/10 p-8 relative overflow-hidden group hover:border-violet-500/50 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20 shadow-inner">
          <GraduationCap size={24} />
        </div>
        <h3 className="text-2xl font-bold text-white tracking-tight">Academics</h3>
      </div>
      
      <div className="flex flex-col flex-1">
        <h4 className="text-lg font-bold text-white leading-tight mb-2 group-hover:text-cyan-400 transition-colors">{edu.degree}</h4>
        <p className="text-sm text-slate-400 mb-8">{edu.institution}</p>
        
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-4">
          <span className="text-violet-400">{'//'}</span> timeline: {edu.duration}
        </div>
        
        {/* Progress bar representing timeline */}
        <div className="w-full h-1.5 bg-white/10 rounded-full mb-10 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-violet-500 to-cyan-500 w-[60%] rounded-full shadow-[0_0_15px_rgba(139,92,246,0.5)]" />
        </div>
        
        <p className="text-xs font-bold text-slate-500 mb-4 uppercase tracking-widest">Key Subjects</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {["Data Structures", "DBMS", "Computer Networks", "Operating Systems", "Cloud Computing", "Embedded Systems"].map((subject) => (
            <span key={subject} className="px-3 py-1.5 bg-transparent border border-white/10 rounded-full text-xs font-mono text-slate-300 hover:bg-white/5 transition-colors">
              {subject}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function CertificationsColumn() {
  const topCerts = certifications.slice(0, 5);
  
  return (
    <div className="flex flex-col h-full bg-[#0d1117] rounded-2xl border border-white/10 p-8 relative overflow-hidden group hover:border-violet-500/50 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shadow-inner">
            <Award size={24} />
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight">Certifications</h3>
        </div>
      </div>
      
      <div className="flex flex-col gap-6 flex-1">
        {topCerts.map((cert) => (
          <div key={cert.id} className="flex gap-4 items-start group/cert">
            <div className="w-2 h-2 rounded-full bg-white/20 mt-2 group-hover/cert:bg-cyan-400 transition-colors shrink-0 shadow-[0_0_10px_rgba(34,211,238,0)] group-hover/cert:shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
            <div className="flex flex-col">
              <h4 className="text-sm font-bold text-slate-200 leading-tight mb-1 group-hover/cert:text-white transition-colors">{cert.title}</h4>
              <p className="text-xs text-slate-400 font-mono">{cert.issuer}</p>
            </div>
          </div>
        ))}
        
        <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-500">and {certifications.length - 5} more...</span>
          <ChevronRight size={16} className="text-slate-600" />
        </div>
      </div>
    </div>
  );
}

export default function FooterGrid() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section-wrapper relative bg-transparent py-24 pb-32" aria-label="Academics & Certifications">
      <div className="section-container relative z-10 max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-violet-400 font-mono text-sm mb-4">
            03 · background
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Academics & Certifications
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            className="h-full flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <AcademicsColumn />
          </motion.div>
          
          <motion.div
            className="h-full flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <CertificationsColumn />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
