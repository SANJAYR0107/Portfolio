import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Certifications from "./sections/Certifications";
import ResumeCTA from "./sections/ResumeCTA";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import ResumeViewer from "./components/ResumeViewer";
import Chatbot from "./components/chatbot/Chatbot";

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen selection:bg-[var(--violet)] selection:text-white">
      <Navbar />

      <main>
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <ResumeCTA onOpenResume={() => setResumeOpen(true)} />
        <Contact />
      </main>

      <Footer />

      <ResumeViewer isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
      <Chatbot />
    </div>
  );
}
