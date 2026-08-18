import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { X, Award, ExternalLink } from "lucide-react";
import certifications from "../data/certifications";

export default function Certifications() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedCert, setSelectedCert] = useState(null);

  // Fallback data if certifications.js is missing some fields
  const certData = certifications.map((c) => ({
    ...c,
    image: c.image || "PLACEHOLDER_IMAGE",
    issuer: c.issuer || "Issuing Authority",
  }));

  return (
    <section id="certificates" className="section-wrapper relative bg-[var(--bg)]" aria-label="Certifications">
      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="text-[var(--violet)] font-mono text-sm mb-4 uppercase tracking-wider">04 — CERTIFICATIONS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text)] tracking-tight font-display">
            Continuous Learning.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certData.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative flex flex-col p-6 rounded-xl bg-[var(--panel)] border border-[var(--border)] transition-all duration-300 shadow-lg hover:-translate-y-1 hover:border-[var(--violet)] hover:shadow-[0_15px_35px_-15px_rgba(124,108,240,0.3)]"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-[var(--panel-2)] text-[var(--violet)] border border-[var(--border)] group-hover:bg-[var(--violet)] group-hover:text-white transition-colors">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--text)] group-hover:text-[var(--violet)] transition-colors line-clamp-2 font-display">
                    {cert.title}
                  </h3>
                  <p className="text-[var(--text-dim)] text-sm mt-1 font-body">{cert.issuer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#050810]/90 backdrop-blur-md"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-3xl bg-[#0a0f1e] rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black transition-colors z-10"
                onClick={() => setSelectedCert(null)}
              >
                <X size={20} />
              </button>
              
              <div className="aspect-[4/3] sm:aspect-video w-full bg-[#111827] flex items-center justify-center overflow-hidden">
                {selectedCert.image === "PLACEHOLDER_IMAGE" || !selectedCert.image ? (
                  <div className="text-slate-500 font-mono text-sm flex flex-col items-center gap-3">
                    <Award size={48} className="opacity-50" />
                    [ Certificate Preview Placeholder ]
                  </div>
                ) : (
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="w-full h-full object-contain p-4"
                  />
                )}
              </div>
              
              <div className="p-6 md:p-8 bg-gradient-to-t from-[#0a0f1e] to-[#0f1629] border-t border-white/5">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedCert.title}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                  <p><strong>Issuer:</strong> {selectedCert.issuer}</p>
                  <p><strong>Date:</strong> {selectedCert.date}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
