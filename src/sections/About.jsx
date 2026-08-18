import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  
  // Terminal typing effect logic
  const [typedText, setTypedText] = useState("");
  const fullText = "who is sanjay?";
  
  useEffect(() => {
    if (inView) {
      let i = 0;
      const timer = setInterval(() => {
        setTypedText(fullText.substring(0, i + 1));
        i++;
        if (i >= fullText.length) clearInterval(timer);
      }, 100);
      return () => clearInterval(timer);
    }
  }, [inView]);

  const facts = [
    { label: "Education", value: "B.E. EEE — Sri Eshwar College of Engineering, Coimbatore (Graduating 2027)" },
    { label: "Role", value: "Aspiring Cloud & DevOps Engineer focused on reliable infrastructure." },
    { label: "Core Tools", value: "AWS, Docker, CI/CD, Git, Linux, Node.js" },
    { label: "Goal", value: "Automating repetitive processes and improving deployment reliability." },
  ];

  return (
    <section id="about" className="section-wrapper relative bg-[var(--bg)]" aria-label="About">
      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-[var(--violet)] font-mono text-sm mb-4 uppercase tracking-wider">01 — About me</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text)] tracking-tight font-display mb-10">
            Engineering reliable infrastructure.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Terminal Card */}
          <div className="terminal-card max-w-4xl">
            {/* Header Chrome */}
            <div className="pipeline-header">
              <span className="pdot red"></span>
              <span className="pdot yellow"></span>
              <span className="pdot green"></span>
              <span className="pipeline-title">sanjay.dev</span>
            </div>
            
            {/* Query Section */}
            <div className="terminal-query">
              <span className="spark">✦</span>
              <span>{typedText}</span>
              <span className="blink">▌</span>
            </div>
            
            {/* Response Section */}
            <div className="terminal-response">
              <p className="mb-4">
                I am a final year Electrical and Electronics Engineering student passionate about <strong>Cloud Computing, DevOps,</strong> and modern software infrastructure.
              </p>
              <p className="mb-4">
                My focus is on building, deploying, and maintaining reliable applications using DevOps practices and cloud technologies. I have hands-on experience working with <strong>AWS, Docker, Git, CI/CD concepts</strong>, containerized applications, and cloud deployment workflows.
              </p>
              <p>
                My goal is to contribute to scalable, reliable, and automated infrastructure while continuously learning and improving my cloud and DevOps expertise.
              </p>
            </div>
          </div>

          {/* Fact Cards */}
          <div className="about-facts">
            {facts.map((fact, idx) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + (idx * 0.1) }}
                className="fact"
              >
                <span className="fact-label">{fact.label}</span>
                <span>{fact.value}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
