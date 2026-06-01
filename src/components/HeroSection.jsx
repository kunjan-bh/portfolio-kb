import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 600, easing: 'ease-out', once: true });
  }, []);

  return (
    <div id="home" className="hero-section">

      {/* Corner metadata */}
      <div className="hero-meta hero-meta--tl">
        <span className="meta-label">Portfolio</span>
        <span className="meta-value">V1.0 — 2026</span>
      </div>
      <div className="hero-meta hero-meta--tr">
        <span className="meta-label">Status</span>
        <span className="meta-value meta-available">● Available</span>
      </div>

      <div className="hero-inner">
        {/* Display name block */}
        <div className="hero-name-block" data-aos="fade-up">
          <h1 className="hero-name-line">
            <span>K</span><span>U</span><span>N</span><span>J</span><span>A</span><span>N</span>
          </h1>
          <div className="hero-name-row2">
            <p className="hero-descriptor">AI Engineer &amp;<br/>Full-Stack Developer</p>
            <h1 className="hero-name-line hero-name-last">
              <span>B</span><span>H</span><span>A</span><span>T</span><span>T</span><span className="hero-dot">.</span>
            </h1>
          </div>
        </div>

        {/* Divider + bio + buttons */}
        <div className="hero-lower" data-aos="fade-up" data-aos-delay="100">
          <div className="hero-lower-left">
            <p className="hero-bio">
              Building smart and decentralised solutions at the intersection of Blockchain, AI, and Data — with a focus on impactful healthcare systems.
            </p>
          </div>
          <div className="hero-lower-right">
            <div className="btn-group">
              <a
                href="#"
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
              >
                See My Work
              </a>
              <a href="/Kunjan-bhatt-resume.pdf" download="Kunjan-bhatt-resume.pdf" className="btn btn-outline">
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Portrait image — CSS animation only, no AOS (AOS waits for scroll, image would be invisible on load) */}
      <div className="hero-image hero-image--animate">
        <div className="hero-image-container">
          <img src="/me5.png" alt="Kunjan Bhatt" />
        </div>
      </div>

    </div>
  )
}

export default HeroSection
