import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import profilePic from '../assets/portfolio.jpeg';
import bgImage from '../assets/background3.jpg'; // මෙය නිවැරදිව import කර ඇත

const Home = () => {
  return (
    // bgImage එක මෙහි භාවිතා කර ඇත
    <div className="w-full min-h-screen bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="w-full bg-black/60 min-h-screen">
        
        {/* Hero Section */}
        <section className="container mx-auto px-6 md:px-16 pt-12 pb-20 grid md:grid-cols-2 gap-12 items-center min-h-[70vh]">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 z-10 order-2 md:order-1 text-center md:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center justify-center md:justify-start">
              Hello <span className="text-[#ff5d4b] ml-1">.</span>
            </h2>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <div className="w-12 h-[2px] bg-[#ff5d4b]"></div>
              <h3 className="text-2xl md:text-3xl font-medium text-gray-300">I'm Nimantha</h3>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-wide">
              Architecting Scalable Digital Solutions & Robust Cloud Systems.
            </h1>
            <div className="flex flex-wrap gap-4 pt-6 justify-center md:justify-start">
              <Link to="/contact" className="bg-[#ff5d4b] text-white px-8 py-3 text-sm font-semibold hover:bg-[#e04f3d] transition-colors shadow-lg shadow-[#ff5d4b]/20">
                Get a Project?
              </Link>
              <a href="/" className="border border-[#ff5d4b] text-[#ff5d4b] px-8 py-3 text-sm font-semibold hover:bg-[#ff5d4b]/10 transition-colors">
                My Resume
              </a>
            </div>
          </motion.div>
          
          {/* 3D Look Image Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center items-center order-1 md:order-2"
          >
            <div className="absolute w-[280px] h-[280px] md:w-[380px] md:h-[380px] border-[12px] border-[#ff5d4b] rounded-full opacity-90 blur-[2px]"></div>
            <div className="absolute w-[300px] h-[300px] bg-[#ff5d4b]/20 rounded-full blur-[60px]"></div>
            <img 
              src={profilePic} 
              alt="Nimantha" 
              className="relative z-10 w-64 h-64 md:w-80 md:h-80 object-cover rounded-full 
                        border-[6px] border-[#161922] 
                        shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_-10px_20px_rgba(255,255,255,0.2)] 
                        hover:shadow-[0_30px_60px_rgba(255,93,75,0.4)] 
                        transition-all duration-500 ease-in-out transform hover:-translate-y-2" 
            />
          </motion.div>
        </section>

        {/* Tech Stack Bar */}
        <div className="w-full bg-black/40 backdrop-blur-md py-8">
          <div className="container mx-auto px-6 md:px-16 flex justify-between items-center overflow-x-auto text-gray-200 uppercase text-xs md:text-sm font-bold tracking-widest gap-8 whitespace-nowrap">
            <span>Python</span><span>Java</span><span>PHP</span><span>React.js</span><span>Tailwind</span><span>UML Design</span><span>GitHub</span>
          </div>
        </div>

        About Section
        {/* <section className="container mx-auto px-6 md:px-16 py-24 grid md:grid-cols-12 gap-16">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="md:col-span-5 relative"
          >
            <div className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-[#2a2d3a]"></div>
            <div className="space-y-12">
              {[ "Software Development", "App Architecture (UML)", "Database Integration" ].map((text, i) => (
                <motion.div whileHover={{ x: 10 }} key={i} className="flex items-center gap-6 relative">
                  <div className="w-10 h-10 rounded bg-[#161922] flex items-center justify-center border border-[#2a2d3a] z-10 text-[#ff5d4b] font-bold">
                    {i + 1}
                  </div>
                  <h4 className="text-gray-200 font-medium">{text}</h4>
                  <div className="absolute left-[15px] top-1/2 w-2 h-2 rounded-full bg-[#ff5d4b] z-20"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="md:col-span-7 space-y-8"
          >
            <h2 className="text-4xl font-bold text-white">About me</h2>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">I started my software journey with a deep curiosity for how digital systems function. Through that, I learned the process of building applications from scratch. Since then, this has led me to software development as it fulfills my love for solving complex problems and creating robust solutions like the 'RailPay' ecosystem.</p>
            <div className="flex gap-12 pt-6">
              {[ { val: "3+", label: "Completed Projects" }, { val: "100%", label: "Dedication" }, { val: "6+", label: "Technologies" } ].map((item, i) => (
                <motion.div key={i} whileHover={{ scale: 1.1 }}>
                  <h3 className="text-3xl font-bold text-white mb-1">{item.val}</h3>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section> */}
      </div>
    </div>
  );
};
export default Home;