import React from "react";
import { motion } from "framer-motion";

export default function TypingIndicator() {
  return (
    <div className="flex w-full mb-4 justify-start">
      <div className="max-w-[85%] rounded-2xl rounded-bl-sm px-4 py-3 bg-[var(--panel-2)] border border-[var(--border)] text-[var(--text-dim)] flex items-center gap-1.5 h-10">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-1.5 h-1.5 bg-[var(--violet)] rounded-full"
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.15,
            }}
          />
        ))}
      </div>
    </div>
  );
}
