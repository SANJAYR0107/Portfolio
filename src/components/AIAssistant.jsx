import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Sparkles,
  X,
  Send,
  RotateCcw,
  Mail,
  FileText,
  Bot,
  User,
  MessageCircle,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { getAIResponse, starterQuestions } from "../data/aiKnowledge";
import links from "../data/links";

const isPlaceholder = (url) => !url || url.includes("_URL") || url.includes("_ADDRESS");

function ContactResponseCard({ contacts }) {
  return (
    <div className="mt-3 space-y-2">
      {contacts.map((c) => {
        const placeholder = isPlaceholder(c.href);
        const Icon = c.icon === "email" ? Mail : c.icon === "linkedin" ? LinkedinIcon : GithubIcon;
        return placeholder ? (
          <div
            key={c.label}
            className="flex items-center gap-2 p-2.5 rounded-xl bg-white/3 border border-white/5 opacity-50 cursor-not-allowed"
          >
            <Icon size={14} className="text-slate-500 flex-shrink-0" />
            <span className="text-slate-500 text-xs">{c.label} (not configured)</span>
          </div>
        ) : (
          <a
            key={c.label}
            href={c.href}
            target={c.icon !== "email" ? "_blank" : undefined}
            rel={c.icon !== "email" ? "noopener noreferrer" : undefined}
            className="flex items-center gap-2 p-2.5 rounded-xl bg-blue-500/8 border border-blue-500/15 hover:border-blue-500/30 hover:bg-blue-500/12 transition-all group"
          >
            <Icon size={14} className="text-blue-400 flex-shrink-0" />
            <span className="text-blue-300 text-xs font-medium group-hover:text-white transition-colors">
              {c.label} — {c.value}
            </span>
          </a>
        );
      })}
    </div>
  );
}

function ResumeCard({ onOpenResume }) {
  return (
    <div className="mt-3">
      <button
        onClick={onOpenResume}
        className="flex items-center gap-2 p-3 rounded-xl bg-blue-500/8 border border-blue-500/15 hover:border-blue-500/30 transition-all w-full text-left"
      >
        <FileText size={14} className="text-blue-400" />
        <span className="text-blue-300 text-sm font-medium">View Resume</span>
      </button>
    </div>
  );
}

function ProjectCard({ project }) {
  if (!project) return null;
  return (
    <div className="mt-3 p-3 rounded-xl bg-slate-800/60 border border-white/8">
      <p className="text-white font-semibold text-sm">{project.title}</p>
      <p className="text-slate-400 text-xs mt-0.5">{project.subtitle}</p>
      <div className="flex flex-wrap gap-1 mt-2">
        {project.tech.slice(0, 4).map((t) => (
          <span key={t} className="px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 text-xs font-mono">
            {t}
          </span>
        ))}
      </div>
      {!isPlaceholder(project.githubUrl) && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 mt-2 text-xs text-blue-400 hover:text-blue-300"
        >
          <GithubIcon size={12} />
          GitHub
        </a>
      )}
    </div>
  );
}

function Message({ msg, onOpenResume }) {
  const isBot = msg.role === "bot";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.25 }}
      className={`flex gap-3 ${isBot ? "" : "flex-row-reverse"}`}
    >
      {/* Avatar */}
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1 ${
          isBot
            ? "bg-indigo-500/10 border border-indigo-500/20"
            : "bg-slate-700/50 border border-slate-600/50"
        }`}
      >
        {isBot ? (
          <Bot size={16} className="text-indigo-400" />
        ) : (
          <User size={16} className="text-slate-300" />
        )}
      </div>

      {/* Bubble */}
      <div className={`max-w-[85%] ${isBot ? "" : "text-right"}`}>
        <div
          className={`inline-block px-4 py-3 rounded-2xl text-[15px] leading-relaxed shadow-sm ${
            isBot
              ? "bg-slate-800/60 border border-white/5 text-slate-200 rounded-tl-sm"
              : "bg-indigo-600 text-white rounded-tr-sm"
          }`}
        >
          {/* Render markdown-like bold */}
          <div
            className="whitespace-pre-wrap"
            dangerouslySetInnerHTML={{
              __html: msg.content
                .replace(/\*\*(.*?)\*\*/g, "<strong class='font-semibold text-white'>$1</strong>")
                .replace(/✅/g, '<span style="color:#10b981">✅</span>')
                .replace(/⚠️/g, '<span>⚠️</span>'),
            }}
          />
        </div>

        {/* Rich content */}
        {isBot && msg.type === "contact" && msg.contacts && (
          <ContactResponseCard contacts={msg.contacts} />
        )}
        {isBot && msg.type === "resume" && (
          <ResumeCard onOpenResume={onOpenResume} />
        )}
        {isBot && msg.type === "project" && msg.project && (
          <ProjectCard project={msg.project} />
        )}
      </div>
    </motion.div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex gap-3">
      <div className="w-8 h-8 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-1">
        <Bot size={16} className="text-indigo-400" />
      </div>
      <div className="bg-slate-800/60 border border-white/5 px-4 py-4 rounded-2xl rounded-tl-sm shadow-sm flex items-center h-[46px]">
        <div className="flex gap-1.5 items-center">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-slate-400"
              animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const WELCOME_MSG = {
  id: "welcome",
  role: "bot",
  type: "text",
  content: `Hi! I'm Sanjay's AI portfolio assistant. 👋\n\nI can answer questions about his skills, projects, cloud experience, academics, and how to contact him.\n\nWhat would you like to know?`,
};

export default function AIAssistant({ onOpenResume }) {
  const [messages, setMessages] = useState([WELCOME_MSG]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = (text) => {
    if (!text.trim()) return;
    const userMsg = { id: Date.now(), role: "user", type: "text", content: text };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate brief thinking delay
    setTimeout(() => {
      const response = getAIResponse(text);
      setMessages((m) => [...m, { id: Date.now() + 1, role: "bot", ...response }]);
      setIsTyping(false);
    }, 600 + Math.random() * 400);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  const resetChat = () => {
    setMessages([WELCOME_MSG]);
    setInput("");
  };

  return (
    <section id="chat" className="section-wrapper relative bg-[#0d1117] py-24" aria-label="AI Assistant">
      <div className="section-container relative z-10 max-w-4xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="text-violet-400 font-mono text-sm mb-4">
            04 · ai-assistant
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Ask Sanjay AI
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Interact with my digital twin to learn more about my experience, skills, and projects.
          </p>
        </motion.div>

        {/* Chat window */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full h-[600px] flex flex-col rounded-2xl border border-white/10 bg-[#050810] shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-white/5 bg-white/5 flex-shrink-0">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center shadow-inner">
                <Sparkles size={18} className="text-white" />
              </div>
              <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#050810]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-medium text-base">Sanjay AI</p>
              <p className="text-slate-400 text-xs mt-0.5">Online</p>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={resetChat}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-all"
                aria-label="Reset chat"
              >
                <RotateCcw size={16} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-5 py-5 space-y-6 min-h-0 custom-scrollbar">
            {messages.map((msg) => (
              <Message key={msg.id} msg={msg} onOpenResume={onOpenResume} />
            ))}

            {/* Starter questions (shown only after welcome message) */}
            {messages.length === 1 && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-2 pl-11"
              >
                <p className="text-[11px] text-slate-500 font-medium uppercase tracking-wider mb-3">
                  Suggested questions
                </p>
                <div className="flex flex-wrap gap-2">
                  {starterQuestions.slice(0, 5).map((q) => (
                    <motion.button
                      key={q}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => sendMessage(q)}
                      className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-indigo-500/20 hover:border-indigo-500/30 text-slate-300 hover:text-white text-[13px] transition-all text-left"
                    >
                      {q}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {isTyping && <TypingIndicator />}
            <div ref={bottomRef} className="h-2" />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-3 px-5 py-4 border-t border-white/5 bg-[#0a0f1e] flex-shrink-0"
          >
            <div className="relative flex-1">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask anything about Sanjay..."
                className="w-full pl-4 pr-10 py-3 rounded-full bg-white/5 border border-white/10 text-white text-[15px] placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all shadow-inner"
                aria-label="Message input"
              />
            </div>
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="w-11 h-11 flex flex-shrink-0 items-center justify-center rounded-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white transition-all shadow-lg shadow-indigo-900/20"
              aria-label="Send"
            >
              <Send size={18} className="ml-0.5" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
