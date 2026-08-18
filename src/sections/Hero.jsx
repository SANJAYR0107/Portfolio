import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import links from "../data/links";
import profilePic from "../assets/profile.png";

export default function Hero({ onOpenResume }) {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 bg-[var(--bg)]">
      <div className="section-container relative z-10 w-full h-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-center min-h-[calc(100vh-8rem)]">
          
          {/* LEFT COLUMN: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start max-w-2xl"
          >
            {/* Top Tagline */}
            <p className="text-[var(--cyan)] font-mono text-sm mb-4">
              // engineering reliable infrastructure
            </p>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-[5rem] font-bold text-[var(--text)] leading-[1.1] mb-6 tracking-tight font-display">
              Hi, I'm <span className="text-[var(--violet)]">Sanjay R</span>
            </h1>

            {/* Sub-headline / Titles */}
            <p className="text-[var(--text-dim)] font-mono text-sm sm:text-base mb-6">
              Cloud / DevOps Engineer • B.E. EEE Student
            </p>

            {/* Description */}
            <p className="text-[var(--text-dim)] text-base sm:text-lg mb-10 leading-relaxed font-body">
              Aspiring DevOps Engineer focused on AWS, Docker, CI/CD, cloud deployment, and automation. Building practical cloud infrastructure and containerized applications while developing strong foundations in Linux, Git, and DevOps engineering.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={onOpenResume}
                className="btn-primary"
              >
                Download CV
              </button>
              
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="btn-secondary"
              >
                View Projects
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 font-mono text-sm">
              <a href={links.github} target="_blank" rel="noopener noreferrer" className="text-[var(--text-dim)] hover:text-[var(--text)] transition-colors">
                GitHub
              </a>
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="text-[var(--text-dim)] hover:text-[var(--text)] transition-colors">
                LinkedIn
              </a>
              <a href={links.leetcode} target="_blank" rel="noopener noreferrer" className="text-[var(--text-dim)] hover:text-[var(--text)] transition-colors">
                LeetCode
              </a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:flex items-center justify-center w-[450px] h-[550px]"
          >
            <div className="hero-visual w-full h-full relative">
              {/* Brush stroke / Blob background placeholder */}
              <div className="absolute inset-0 bg-[var(--violet)] rounded-full mix-blend-screen filter blur-[80px] opacity-20"></div>
              
              {/* Replace src with your actual image */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--panel)] flex items-end justify-center">
                <img src={profilePic} alt="Sanjay R" className="w-[95%] h-auto object-contain relative z-10 drop-shadow-2xl" />
              </div>

              {/* Floating Node Badge */}
              <div className="hero-node">
                <span className="hn-dot"></span>
                Sanjay R
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
