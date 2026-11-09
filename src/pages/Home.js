import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiArrowUpRight, FiCloud, FiGitBranch, FiGithub, FiLinkedin } from 'react-icons/fi';
import TypingHeadline from '../components/TypingHeadline';
import profilePic from '../assets/portfolio.jpeg';

export default function Home() {
  return (
    <section id="home" className="hero" aria-label="Introduction">
      <div className="shell hero-grid">
        <motion.div className="hero-copy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <p className="eyebrow"><span className="accent-line" /> SOFTWARE. INFRASTRUCTURE. POSSIBILITY.</p>
          <p className="hero-intro">Hello, I'm Nimantha.</p>
          <TypingHeadline />
          <p className="hero-description">I turn ideas into reliable digital experiences and explore the intersection of software development, cloud infrastructure, and DevOps.</p>
          <div className="hero-actions">
            <a href="#projects" className="button button-primary">Explore my work <FiArrowUpRight aria-hidden="true" /></a>
            <a href="#contact" className="button button-secondary">Let's connect <FiArrowUpRight aria-hidden="true" /></a>
          </div>
          <div className="hero-socials">
            <span>FIND ME ON</span>
            <a href="https://github.com/NimaB990" target="_blank" rel="noopener noreferrer" aria-label="Nimantha on GitHub (opens in a new tab)"><FiGithub /></a>
            <a href="https://www.linkedin.com/in/nimantha-bandara-984252312/" target="_blank" rel="noopener noreferrer" aria-label="Nimantha on LinkedIn (opens in a new tab)"><FiLinkedin /></a>
            <span className="social-divider" /><span>BASED IN SRI LANKA</span>
          </div>
        </motion.div>
        <motion.div className="hero-visual" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.15 }}>
          <div className="portrait-frame">
            <div className="portrait-topline"><span>THE PERSON BEHIND THE CODE</span><span>01 / NB</span></div>
            <img src={profilePic} alt="Nimantha Bandara" width="520" height="600" fetchPriority="high" className="hero-portrait" />
            <div className="portrait-caption"><div><strong>Nimantha Bandara</strong><span>Software Developer & Cloud Enthusiast</span></div><FiArrowUpRight aria-hidden="true" /></div>
          </div>
          <div className="focus-card"><span className="focus-icon"><FiCloud aria-hidden="true" /></span><div><span className="micro-label">MY FOCUS</span><strong>Build. Automate. Scale.</strong></div><FiGitBranch className="focus-branch" aria-hidden="true" /></div>
        </motion.div>
      </div>
      <div className="shell hero-bottom"><a href="#about" className="scroll-hint"><FiArrowDown aria-hidden="true" /> SCROLL TO EXPLORE</a><span>Code with intention. Build for reliability.</span></div>
      <div className="tech-strip"><div className="shell tech-inner"><span className="micro-label">MY TOOLKIT</span>{['Python', 'Docker', 'Git', 'React', 'Spring Boot', 'Cloud Networking'].map(tech => <span key={tech} className="tech-item">{tech}</span>)}</div></div>
    </section>
  );
}