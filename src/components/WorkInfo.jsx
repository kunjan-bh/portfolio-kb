import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WorkInfo = () => {
  useEffect(() => {
    AOS.init({ duration: 500, once: false });
  }, []);

  return (
    <div className='about1-container'>
      <div className='about'>
        <h2 data-aos="fade-up">You’re Safe and in Good Hands</h2>
        <p className='intro-text' data-aos="fade-up">
          I focus on building real, working solutions. From full-stack development to AI and machine learning, everything I make is functional, scalable, and impactful.
        </p>

        <div className="about-grid">
          <div className="about-card" data-aos="fade-right">
            <h3>What I Can Offer</h3>
            <p>
              I deliver complete solutions that combine intelligent systems with practical web applications.  
              Projects are designed to work seamlessly, integrate AI where needed, and provide measurable results.
            </p>
          </div>

          <div className="about-card" data-aos="fade-up">
            <h3>Frontend & Backend Development</h3>
            <p>
              I build full-stack applications using React, Django, and modern tools.  
              Interactive UIs, robust APIs, and optimized backend logic make each project fast, reliable, and scalable.
            </p>
          </div>

          <div className="about-card" data-aos="fade-left">
            <h3>Decision-Making & Data Analysis</h3>
            <p>
              I leverage Python, machine learning, and data analytics to extract insights, automate processes, and make smarter systems.  
              Every project benefits from data-driven decisions and AI-powered enhancements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkInfo;
