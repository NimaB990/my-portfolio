import React, { useEffect, useState } from 'react';
import { MotionConfig } from 'framer-motion';
import { FiArrowUpRight, FiArrowUp, FiMenu, FiX } from 'react-icons/fi';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const sections = ['Home', 'About', 'Projects', 'Contact'];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    let frame;
    const updateActive = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const current = sections.map(name => document.getElementById(name.toLowerCase()))
          .filter(section => section && section.getBoundingClientRect().top <= 160).pop();
        const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
        setActive(atBottom ? 'contact' : current?.id || 'home');
      });
    };
    updateActive();
    window.addEventListener('scroll', updateActive, { passive: true });
    window.addEventListener('resize', updateActive);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', updateActive);
      window.removeEventListener('resize', updateActive);
    };
  }, []);

  useEffect(() => {
    const close = event => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        document.getElementById('menu-toggle')?.focus();
      }
    };
    if (isOpen) document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, [isOpen]);

  const links = sections.map(section => (
    <a key={section} href={`#${section.toLowerCase()}`} aria-current={active === section.toLowerCase() ? 'location' : undefined}
      onClick={() => setIsOpen(false)}>{section}</a>
  ));

  return (
    <header className="site-header">
      <nav className="shell nav-inner" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={() => setIsOpen(false)}>Nimantha<span>.</span></a>
        <div className="desktop-links">{links}</div>
        <a className="nav-cta" href="#contact">Let's talk <FiArrowUpRight aria-hidden="true" /></a>
        <button id="menu-toggle" className="menu-toggle" type="button" aria-expanded={isOpen} aria-controls="mobile-navigation"
          aria-label={isOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>
      <nav id="mobile-navigation" aria-label="Mobile navigation" className="mobile-links" hidden={!isOpen}>{links}</nav>
    </header>
  );
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Navbar />
      <main id="main-content" tabIndex="-1">
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="shell site-footer">
        <a className="brand" href="#home">Nimantha<span>.</span></a>
        <p>&copy; {new Date().getFullYear()} Nimantha Bandara. Built with purpose.</p>
        <a href="#home" className="back-top">Back to top <FiArrowUp aria-hidden="true" /></a>
      </footer>
    </MotionConfig>
  );
}