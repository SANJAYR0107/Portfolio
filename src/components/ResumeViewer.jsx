import React from "react";
import { X, Download, Maximize2, Minimize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import links from "../data/links";

export default function ResumeViewer({ isOpen, onClose }) {
  const resumeUrl = links.resume;
  const [isFullscreen, setIsFullscreen] = React.useState(false);

  // Close on Escape key
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scrolling when open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className={`relative z-10 flex flex-col bg-[#0f1629] border border-blue-500/20 shadow-2xl transition-all duration-300 ${isFullscreen ? "w-full h-full" : "w-[95%] h-[90%] md:w-[85%] md:h-[90%] lg:w-[1000px] lg:h-[85vh] rounded-xl overflow-hidden"
            }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#0a0f1e]">
            <h2 className="text-white font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              Sanjay_R_Optimized_Aivar_Resume_Crct.pdf
            </h2>
            <div className="flex items-center gap-2">
              <a
                href={resumeUrl}
                download
                className="p-2 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-md transition-colors tooltip"
                title="Download PDF"
              >
                <Download size={18} />
              </a>
              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="p-2 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-md transition-colors hidden md:block"
                title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
              >
                {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
              </button>
              <button
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-red-400 bg-white/5 hover:bg-white/10 rounded-md transition-colors"
                title="Close"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* PDF Viewer */}
          <div className="flex-1 w-full bg-white relative overflow-hidden">
            <iframe
              src={`${resumeUrl}#view=FitH`}
              title="Sanjay R Resume"
              className="w-full h-full border-none"
            />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
