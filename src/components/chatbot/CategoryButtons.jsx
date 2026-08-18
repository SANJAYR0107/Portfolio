import React from "react";
import { motion } from "framer-motion";
import chatbotData from "../../data/chatbotData";

export default function CategoryButtons({ onSelectCategory }) {
  return (
    <div className="flex flex-col gap-3 w-full">
      {Object.entries(chatbotData).map(([key, cat], idx) => (
        <motion.button
          key={key}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: idx * 0.05 }}
          onClick={() => onSelectCategory(key)}
          className="w-full text-left p-4 rounded-xl bg-[var(--panel-2)] border border-[var(--border)] hover:border-[var(--violet)] hover:bg-[var(--panel)] transition-all flex items-center justify-between group"
        >
          <span className="font-display font-semibold text-[var(--text)]">{cat.title}</span>
          <span className="text-[var(--violet)] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
        </motion.button>
      ))}
    </div>
  );
}
