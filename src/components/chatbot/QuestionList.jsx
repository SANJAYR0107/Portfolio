import React from "react";
import { motion } from "framer-motion";

export default function QuestionList({ category, onSelectQuestion, onBack }) {
  if (!category) return null;

  return (
    <div className="flex flex-col gap-3 w-full">
      <button 
        onClick={onBack}
        className="text-[var(--text-dim)] hover:text-[var(--violet)] text-sm mb-2 flex items-center gap-2 transition-colors self-start"
      >
        ← Back to Categories
      </button>
      
      <div className="mb-4">
        <h3 className="text-lg font-bold text-[var(--text)] font-display">{category.title}</h3>
        <p className="text-sm text-[var(--text-dim)] font-mono">Select a question</p>
      </div>

      <div className="flex flex-col gap-2">
        {category.questions.map((q, idx) => (
          <motion.button
            key={q.id || idx}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: idx * 0.05 }}
            onClick={() => onSelectQuestion(q.question, q.answer)}
            className="w-full text-left p-3 rounded-lg bg-[var(--panel)] border border-[var(--border)] hover:border-[var(--violet)] text-sm text-[var(--text-dim)] hover:text-[var(--text)] transition-all"
          >
            {q.question}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
