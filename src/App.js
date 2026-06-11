import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import bgImage from './assets/background3.jpg'; // නිවැරදි මාවත

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="w-full py-8 z-50">
      <div className="container mx-auto px-6 md:px-16 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white tracking-tighter">
          Nimantha<span className="text-[#ff5d4b]">.</span>
        </Link>
        <ul className="hidden md:flex space-x-12 text-sm font-bold text-white uppercase tracking-widest">
          <li><Link to="/" className="hover:text-[#ff5d4b] transition-colors">Home</Link></li>
          <li><Link to="/about" className="hover:text-[#ff5d4b] transition-colors">About</Link></li>
          <li><Link to="/projects" className="hover:text-[#ff5d4b] transition-colors">Projects</Link></li>
          <li><Link to="/contact" className="hover:text-[#ff5d4b] transition-colors">Contacts</Link></li>
        </ul>
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />}
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black/60 py-6 text-center space-y-4 text-white font-bold uppercase tracking-widest text-sm">
          <Link to="/" onClick={() => setIsOpen(false)} className="block hover:text-[#ff5d4b]">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block hover:text-[#ff5d4b]">About</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)} className="block hover:text-[#ff5d4b]">Projects</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block hover:text-[#ff5d4b]">Contacts</Link>
        </div>
      )}
    </nav>
  );
};

function App() {
  return (
    <Router>
      {/* මෙතන තමයි Global Background එක තියෙන්නේ */}
      <div 
        className="min-h-screen bg-fixed bg-cover bg-center font-sans" 
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="min-h-screen bg-black/40"> {/* පසුබිම මත අඳුරු Overlay එකක් */}
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <footer className="py-8 text-center text-gray-400 text-sm mt-auto border-t border-white/10">
            &copy; {new Date().getFullYear()} Chathuranga.Never Give Up.
          </footer>
        </div>
      </div>
    </Router>
  );
}

export default App;