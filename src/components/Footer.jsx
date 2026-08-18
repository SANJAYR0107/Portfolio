import React from "react";
import { LeetcodeIcon, GithubIcon, LinkedinIcon } from "../components/Icons";
import links from "../data/links";

export default function Footer() {
  return (
    <footer className="bg-[#050810] border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex flex-col items-center md:items-start">
          <p className="text-white font-bold text-xl mb-1">Sanjay R</p>
          <p className="text-slate-500 text-sm font-mono">
            Built with React, Framer Motion & Three.js.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href={links.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors" aria-label="GitHub">
            <GithubIcon size={20} />
          </a>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors" aria-label="LinkedIn">
            <LinkedinIcon size={20} />
          </a>
          <a href={links.leetcode} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors" aria-label="LeetCode">
            <LeetcodeIcon size={20} />
          </a>
        </div>

        <div className="text-slate-600 text-xs text-center md:text-right font-mono">
          © {new Date().getFullYear()} Sanjay R.<br />
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}
