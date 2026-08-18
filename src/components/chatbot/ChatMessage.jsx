import React from "react";
import { motion } from "framer-motion";

// Helper to convert simple markdown links [text](url) and newlines to HTML
const renderContent = (text) => {
  if (!text) return null;
  // Replace [text](url) with <a> tags
  let html = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-white underline hover:text-[var(--cyan)] transition-colors">$1</a>');
  // Replace newlines with <br/>
  html = html.replace(/\n/g, '<br/>');
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
};

export default function ChatMessage({ message }) {
  const isUser = message.role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex w-full mb-4 ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm font-body leading-relaxed ${
          isUser
            ? "bg-[var(--violet)] text-white rounded-br-sm"
            : "bg-[var(--panel-2)] border border-[var(--border)] text-[var(--text)] rounded-bl-sm"
        }`}
      >
        {renderContent(message.content)}
      </div>
    </motion.div>
  );
}
