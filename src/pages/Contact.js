import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_p7oghbe',    // මෙතනට ඔබේ Service ID එක දාන්න
      'template_u8eddqk',   // මෙතනට ඔබේ Template ID එක දාන්න
      form.current, 
      '9cC69p0qGWA51Yoj3'     // මෙතනට ඔබේ Public Key එක දාන්න
    )
    .then((result) => {
        alert("Message Sent Successfully!");
        form.current.reset(); // සාර්ථකව යැවූ පසු Form එක හිස් කරනවා
    }, (error) => {
        alert("Failed to send, please try again.");
    });
  };

  return (
    <section className="container mx-auto px-6 md:px-16 py-20 min-h-[70vh]">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-extrabold text-white mb-4">Get In Touch</h2>
        <p className="text-gray-400">Let's build something amazing together.</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12">
        {/* වම් පැත්ත: Contact Cards */}
        <div className="space-y-6">
          <ContactCard icon={<FaEnvelope />} title="Email" value="Nimanthabandara990@gmail.com" />
          <ContactCard icon={<FaPhoneAlt />} title="Phone" value="+94776400964" />
          <ContactCard icon={<FaMapMarkerAlt />} title="Location" value="Sri Lanka" />
          
          <div className="flex gap-4 pt-6">
            <SocialLink href="https://www.linkedin.com/in/nimantha-bandara-984252312/" icon={<FaLinkedin />} />
            <SocialLink href="https://github.com/NimaB990" icon={<FaGithub />} />
          </div>
        </div>

        {/* දකුණු පැත්ත: Modern Form (EmailJS) */}
        <div className="bg-[#161922] p-8 rounded-3xl border border-[#2a2d3a]">
          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <input 
              type="text" 
              name="user_name" 
              placeholder="Your Name" 
              required 
              className="w-full bg-[#111319] text-white border border-[#2a2d3a] p-4 rounded-xl focus:border-[#ff5d4b] outline-none transition-all" 
            />
            <input 
              type="email" 
              name="user_email" 
              placeholder="Your Email" 
              required 
              className="w-full bg-[#111319] text-white border border-[#2a2d3a] p-4 rounded-xl focus:border-[#ff5d4b] outline-none transition-all" 
            />
            <textarea 
              name="message" 
              rows="4" 
              placeholder="Your Message" 
              required 
              className="w-full bg-[#111319] text-white border border-[#2a2d3a] p-4 rounded-xl focus:border-[#ff5d4b] outline-none transition-all resize-none"
            ></textarea>
            <button 
              type="submit" 
              className="bg-gradient-to-r from-[#ff5d4b] to-[#ff9b4b] text-white py-4 rounded-xl font-bold hover:opacity-90 transition-opacity w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

// Components
const ContactCard = ({ icon, title, value }) => (
  <div className="bg-[#161922] p-6 rounded-2xl border border-[#2a2d3a] flex items-center gap-4 hover:border-[#ff5d4b] transition-all">
    <div className="text-[#ff5d4b] text-2xl">{icon}</div>
    <div>
      <p className="text-gray-500 text-xs uppercase font-bold tracking-widest">{title}</p>
      <p className="text-white font-medium">{value}</p>
    </div>
  </div>
);

const SocialLink = ({ href, icon }) => (
  <a href={href} className="bg-[#161922] p-4 rounded-full text-white text-2xl hover:bg-[#ff5d4b] transition-all">
    {icon}
  </a>
);

export default Contact;