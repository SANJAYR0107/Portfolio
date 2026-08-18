import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Send, ExternalLink } from "lucide-react";
import { LeetcodeIcon, GithubIcon, LinkedinIcon } from "../components/Icons";
import links from "../data/links";

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, send data to an API here.
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section-wrapper relative bg-[var(--bg)]" aria-label="Contact">
      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="text-violet-400 font-mono text-sm mb-4">05 — CONTACT</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Let's build something useful.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
          
          {/* Left: Socials & Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <p className="text-slate-400 text-lg leading-relaxed mb-4">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out using the form or connect with me directly on my socials.
            </p>
            
            <a href={`mailto:${links.email}`} className="group flex items-center gap-4 p-5 rounded-2xl bg-[#0a0f1e] border border-white/5 hover:border-violet-500/30 transition-colors">
              <div className="p-3 rounded-full bg-white/5 group-hover:bg-violet-500/20 text-slate-400 group-hover:text-violet-400 transition-colors">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-mono mb-1">Email</p>
                <p className="text-white font-medium">{links.email || "hello@example.com"}</p>
              </div>
            </a>

            <div className="grid grid-cols-2 gap-4">
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-[#0a0f1e] border border-white/5 hover:border-violet-500/30 transition-colors text-center">
                <LinkedinIcon size={28} className="text-slate-400 group-hover:text-violet-400 transition-colors" />
                <span className="text-sm text-slate-300 font-medium">LinkedIn</span>
              </a>
              <a href={links.github} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-[#0a0f1e] border border-white/5 hover:border-violet-500/30 transition-colors text-center">
                <GithubIcon size={28} className="text-slate-400 group-hover:text-violet-400 transition-colors" />
                <span className="text-sm text-slate-300 font-medium">GitHub</span>
              </a>
              <a href={links.leetcode} target="_blank" rel="noopener noreferrer" className="group col-span-2 flex items-center justify-center gap-3 p-4 rounded-2xl bg-[#0a0f1e] border border-white/5 hover:border-violet-500/30 transition-colors">
                <LeetcodeIcon size={24} className="text-slate-400 group-hover:text-violet-400 transition-colors" />
                <span className="text-sm text-slate-300 font-medium">LeetCode Profile</span>
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-8 rounded-3xl bg-[#0a0f1e] border border-white/10 shadow-2xl relative overflow-hidden"
          >
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/5 rounded-full blur-[80px]" />
            
            <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-mono text-slate-400 mb-2">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-5 py-3 rounded-xl bg-[var(--panel)] border border-white/10 text-[var(--text)] placeholder-slate-600 focus:outline-none focus:border-[var(--violet)] transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-mono text-slate-400 mb-2">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-5 py-3 rounded-xl bg-[var(--panel)] border border-white/10 text-[var(--text)] placeholder-slate-600 focus:outline-none focus:border-[var(--violet)] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-mono text-slate-400 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="w-full px-5 py-3 rounded-xl bg-[var(--panel)] border border-white/10 text-[var(--text)] placeholder-slate-600 focus:outline-none focus:border-[var(--violet)] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 mt-2 bg-white text-black font-bold rounded-xl hover:bg-slate-200 transition-colors"
              >
                {submitted ? (
                  "Message Sent!"
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
