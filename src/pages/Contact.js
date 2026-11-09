import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiArrowUpRight, FiArrowRight, FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

export default function Contact() {
  const form = useRef(null);
  const sending = useRef(false);
  const [status, setStatus] = useState('idle');

  const sendEmail = async event => {
    event.preventDefault();
    if (sending.current) return;
    sending.current = true;
    setStatus('sending');
    try {
      await emailjs.sendForm('service_p7oghbe', 'template_u8eddqk', form.current, '9cC69p0qGWA51Yoj3');
      form.current.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    } finally {
      sending.current = false;
    }
  };

  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-title">
      <div className="shell contact-grid">
        <div className="contact-copy"><p className="eyebrow">03 / GET IN TOUCH</p><h2 id="contact-title">Great things start<br />with a <span className="accent-text">conversation.</span></h2>
          <p className="contact-intro">Have a project in mind, an opportunity to share, or just want to talk tech? I'd love to hear from you.</p>
          <div className="contact-details">
            <a href="mailto:Nimanthabandara990@gmail.com"><FiMail aria-hidden="true" /><span><small>EMAIL ME</small>Nimanthabandara990@gmail.com</span><FiArrowUpRight aria-hidden="true" /></a>
            <a href="tel:+94776400964"><FiPhone aria-hidden="true" /><span><small>GIVE ME A CALL</small>+94 77 640 0964</span><FiArrowUpRight aria-hidden="true" /></a>
            <div><FiMapPin aria-hidden="true" /><span><small>BASED IN</small>Sri Lanka</span></div>
          </div>
          <div className="contact-socials"><a href="https://github.com/NimaB990" target="_blank" rel="noopener noreferrer"><FiGithub aria-hidden="true" /> GitHub <FiArrowUpRight aria-hidden="true" /></a><a href="https://www.linkedin.com/in/nimantha-bandara-984252312/" target="_blank" rel="noopener noreferrer"><FiLinkedin aria-hidden="true" /> LinkedIn <FiArrowUpRight aria-hidden="true" /></a></div>
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact-form" aria-busy={status === 'sending'}>
          <h3>Send a message<span>.</span></h3><p>Tell me a little about what you're working on.</p>
          <label htmlFor="contact-name">Your name</label><input id="contact-name" name="user_name" autoComplete="name" placeholder="How should I call you?" required disabled={status === 'sending'} />
          <label htmlFor="contact-email">Email address</label><input id="contact-email" name="user_email" type="email" autoComplete="email" placeholder="you@example.com" required disabled={status === 'sending'} />
          <label htmlFor="contact-message">Your message</label><textarea id="contact-message" name="message" rows="5" placeholder="A project, an idea, or a simple hello..." required disabled={status === 'sending'} />
          <button type="submit" className="button button-primary" disabled={status === 'sending'}>{status === 'sending' ? 'Sending message...' : 'Send message'}<FiArrowRight aria-hidden="true" /></button>
          <div className={`form-status ${status}`} role="status" aria-live="polite">
            {status === 'success' && <><FiCheckCircle aria-hidden="true" /> Thanks! Your message has been sent.</>}
            {status === 'error' && <><FiAlertCircle aria-hidden="true" /> Your message couldn't be sent. Please try again or email me directly.</>}
          </div>
        </form>
      </div>
    </section>
  );
}