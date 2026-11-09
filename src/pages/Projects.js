import React from 'react';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';
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
      githubLink: null,
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
    <section id="projects" className="section projects-section" aria-labelledby="projects-title">
      <div className="shell">
        <div className="section-heading section-heading-row"><div><p className="eyebrow">02 / SELECTED WORK</p><h2 id="projects-title">Ideas turned into<br /><span className="muted-heading">working solutions.</span></h2></div><p>A selection of projects across full-stack development, connected systems, and reliable APIs.</p></div>
        <div className="projects-grid">
          {projectData.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className="project-image"><img src={project.image} alt={project.title} loading="lazy" width="640" height="400" /><span className="project-number">{String(index + 1).padStart(2, '0')}</span></div>
              <div className="project-body"><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><h3>{project.title}</h3><p>{project.desc}</p>
                {project.githubLink ? <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link" aria-label={'View ' + project.title + ' on GitHub (opens in a new tab)'}><span><FiGithub aria-hidden="true" /> View project</span><FiArrowUpRight aria-hidden="true" /></a> : <span className="project-unavailable">Repository not published</span>}
              </div>
            </article>
          ))}
        </div>
        <a className="button button-secondary more-projects" href="https://github.com/NimaB990" target="_blank" rel="noopener noreferrer">More on GitHub <FiArrowUpRight aria-hidden="true" /></a>
      </div>
    </section>
  );
};

export default Projects;
