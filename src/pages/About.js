import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/my-photo.jpg';

const About = () => {
  const skills = [
    { title: "Frontend", techs: "React.js, Vue.js, Tailwind CSS, JavaScript" },
    { title: "Backend & API", techs: "Go (Golang), SpringBoot, Flask, Java, PHP, Python" },
    { title: "Database & Cloud", techs: "MySQL, MongoDB, Supabase, Cloud Networking" },
    { title: "Tools & DevOps", techs: "Git, Postman, Docker, UML Modeling" }
  ];

  return (
    <section className="container mx-auto px-6 md:px-16 py-20 min-h-screen text-white">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        className="grid md:grid-cols-12 gap-12"
      >
        
        {/* වම් පස - Photo & Philosophy */}
        <div className="md:col-span-4 space-y-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-[#ff5d4b] rounded-2xl rotate-3 opacity-20"></div>
            <img 
              src={profileImage} 
              className="relative w-full rounded-2xl shadow-2xl border border-white/10" 
              alt="Profile" 
            />
          </div>
          <div className="bg-black/60 backdrop-blur-md p-6 rounded-2xl border border-white/10">
            <h4 className="text-[#ff5d4b] font-bold mb-2 uppercase text-xs tracking-widest">My Philosophy</h4>
            <p className="text-gray-200 text-sm italic">"I believe in building systems that aren't just functional, but reliable and secure. Coding is the craft, but problem-solving is the art."</p>
          </div>
        </div>

        {/* දකුණු පස - Glassmorphism Container */}
        <div className="md:col-span-8 bg-black/60 backdrop-blur-md p-10 rounded-3xl border border-white/10 space-y-10 shadow-xl">
          <div>
            <h2 className="text-5xl font-bold mb-6 drop-shadow-lg">About Me</h2>
            <p className="text-gray-100 leading-relaxed text-lg mb-4">
              I am a results-oriented Software Developer with a strong foundation in Cloud Networking. Currently honing my craft at <strong>ITUM (University of Moratuwa)</strong>, I specialize in building full-stack applications that scale.
            </p>
            <p className="text-gray-200 leading-relaxed">
              My journey began with a curiosity for digital systems, leading me to complete my BTEC HND in Digital Technologies. Today, I thrive on solving complex backend challenges, designing secure IoT infrastructure, and ensuring seamless API integration.
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Education</h3>
            <div className="space-y-4">
              <div className="bg-white/10 p-4 rounded-xl border-l-4 border-[#ff5d4b]">
                <h4 className="font-bold">NDT - Software Development & Cloud Networking</h4>
                <p className="text-[#ff5d4b] text-sm">Ongoing • ITUM (University of Moratuwa)</p>
              </div>
              <div className="bg-white/10 p-4 rounded-xl border-l-4 border-gray-500">
                <h4 className="font-bold">Pearson BTEC HND in Digital Technologies</h4>
                <p className="text-gray-200 text-sm">Completed • Specializing in Cloud Networking</p>
              </div>
            </div>
          </div>

          {/* Technical Arsenal */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Technical Arsenal</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {skills.map((s, i) => (
                <div key={i} className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-[#ff5d4b]/50 transition-all">
                  <h4 className="text-[#ff5d4b] font-bold text-xs uppercase mb-1">{s.title}</h4>
                  <p className="text-gray-200 text-sm">{s.techs}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;