import React from 'react';
import { FiCloud, FiCode, FiDatabase, FiTerminal, FiArrowUpRight, FiBookOpen, FiAward } from 'react-icons/fi';

const skills = [
  { icon: FiCloud, title: 'Cloud & DevOps', techs: ['Cloud Networking', 'Docker', 'Git', 'GitHub'] },
  { icon: FiTerminal, title: 'Backend & APIs', techs: ['Go', 'Spring Boot', 'Flask', 'Java', 'Python', 'PHP'] },
  { icon: FiCode, title: 'Frontend', techs: ['React', 'Vue', 'JavaScript', 'Tailwind CSS'] },
  { icon: FiDatabase, title: 'Data & Tools', techs: ['MySQL', 'MongoDB', 'Supabase', 'Postman', 'UML'] },
];

export default function About() {
  return (
    <section id="about" className="section shell" aria-labelledby="about-title">
      <div className="section-heading"><p className="eyebrow">01 / ABOUT ME</p><h2 id="about-title">Curiosity drives me.<br /><span className="muted-heading">Building defines me.</span></h2></div>
      <div className="about-grid">
        <div className="about-story">
          <p className="lead">A software developer with a cloud mindset.</p>
          <p>I'm Nimantha, a Software Development & Cloud Networking student at <strong>Institute of Technology, University of Moratuwa</strong>. I enjoy connecting thoughtful code with the infrastructure that keeps it running.</p>
          <p>My journey started with a BTEC HND in Digital Technologies. Today, I work on full-stack applications, backend challenges, and IoT systems while deepening my focus on Cloud Engineering and DevOps.</p>
          <blockquote>“Coding is the craft.<br />Problem-solving is the art.”</blockquote>
          <a href="#contact" className="text-link">Get to know me <FiArrowUpRight aria-hidden="true" /></a>
        </div>
        <div className="skills-grid">{skills.map(({ icon: Icon, title, techs }) => (
          <article className="skill-card" key={title}><Icon className="skill-icon" aria-hidden="true" /><h3>{title}</h3><div className="skill-tags">{techs.map(tech => <span key={tech}>{tech}</span>)}</div></article>
        ))}</div>
      </div>
      <section className="education" aria-labelledby="education-title">
        <div className="education-heading"><span className="education-icon"><FiBookOpen aria-hidden="true" /></span><div><p className="eyebrow">ALWAYS LEARNING</p><h3 id="education-title">My education</h3></div></div>
        <div className="education-cards">
          <article className="education-item"><div className="education-card-top"><FiBookOpen aria-hidden="true" /><span className="education-status">IN PROGRESS</span></div><h4>NDT — Information Technology</h4><p>Institute of Technology, University of Moratuwa</p></article>
          <article className="education-item"><div className="education-card-top"><FiAward aria-hidden="true" /><span className="education-status completed">COMPLETED</span></div><h4>Pearson BTEC HND in Digital Technologies</h4><p>Specializing in Cloud Networking (Level 5) at SLT-Nebula Institute of Technology</p></article>
        </div>
      </section>
    </section>
  );
}
