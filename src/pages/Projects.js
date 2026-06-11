import React from 'react';
import { motion } from 'framer-motion';
import busImg from '../assets/bus.png';
import attendanceImg from '../assets/attendence.jpg';
import eventImg from '../assets/event.jpg';
import crmImg from '../assets/crm.jpg';
import taskImg from '../assets/task.jpg';
import containerImg from '../assets/container.jpg';

const Projects = () => {
  const projectData = [
    {
      title: "Smart Bus Tracking System",
      desc: "Real-time GPS tracking system with WebSocket support for passengers, drivers, and admins.",
      tags: ["Flask", "Socket.IO", "Leaflet"],
      githubLink: "https://github.com/NimaB990/Smart-Bus-Tracking-System.git",
      image: busImg
    },
    {
      title: "Smart Attendance System",
      desc: "Automated RFID and Face Recognition attendance logging with cloud database integration.",
      tags: ["Python", "OpenCV", "Cloud"],
      githubLink: "https://github.com/NimaB990/Smart-Attendance-system.git",
      image: attendanceImg
    },
    {
      title: "Uni Event Management",
      desc: "A centralized platform for student event registration, scheduling, and automated notifications.",
      tags: ["Java", "SQL", "Web"],
      githubLink: "https://github.com/NimaB990/UniEvent_Management_System.git",
      image: eventImg
    },
    {
      title: "CRM User Management",
      desc: "Developed secure RBAC modules and dynamic interfaces for a CRM ecosystem in a team environment.",
      tags: ["Go (Golang)", "Vue.js"],
      githubLink: "https://github.com/thanusha-bandara/user-management-module.git",
      image: crmImg
    },
    {
      title: "Task Management Testing",
      desc: "Implemented global exception handling and rigorous API testing to ensure system reliability.",
      tags: ["SpringBoot", "Postman"],
      githubLink: "https://github.com/your-username/task-testing",
      image: taskImg
    },
    {
      title: "Container Smart Tracking",
      desc: "IoT-based container tracking for Sri Lanka Customs with smart seal monitoring to ensure cargo security.",
      tags: ["IoT", "GPS", "Real-time"],
      githubLink: "https://github.com/Hasitha123456789/CGO.git",
      image: containerImg
    },
  ];

  return (
    <section className="container mx-auto px-6 md:px-16 py-20 min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl font-bold text-white mb-6">My Projects</h2>
        <div className="w-20 h-1.5 bg-[#ff5d4b] mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {projectData.map((p, i) => (
          <a 
            key={i}
            href={p.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-black/60 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden 
                         hover:border-[#ff5d4b]/50 transition-all duration-300 shadow-xl h-full flex flex-col"
            >
              {/* පින්තූරය */}
              <img 
                src={p.image} 
                alt={p.title} 
                className="w-full h-48 object-cover border-b border-white/10" 
              />
              
              <div className="p-8 flex-grow">
                <h3 className="text-xl font-bold text-white mb-4">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">{p.desc}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {p.tags.map(t => (
                    <span key={t} className="text-[10px] uppercase tracking-widest font-bold bg-[#ff5d4b]/10 text-[#ff5d4b] px-3 py-1 rounded-full border border-[#ff5d4b]/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;