import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSection = () => {
    useEffect(() => {
        AOS.init({
          duration: 500, 
          easing: 'ease-in-out', 
          once: true, 
        });
      }, []);
  return (
    <div id="home" className="hero-section">
        <div className="hero">
            <div className="hero-text">
                <div className="hero-text-h1-container" data-aos="fade">
                    <h1 className='hero-text1-h1'><span>H</span><span>e</span><span>l</span><span>l</span><span>o</span><span>!</span></h1>
                    <h1 className='hero-text2-h1'>I am <span>K</span><span>u</span><span>n</span><span>j</span><span>a</span><span>n</span>.</h1>
                    <h1 className='hero-text3-h1'>AI & Web Developer</h1>
                </div>
                <p data-aos="fade-up">Hey, I’m Kunjan Bhatt — building smart and decentralized solutions at the intersection of Blockchain, AI, and Data, with a focus on impactful healthcare systems.</p>
                <div className="btn-group" data-aos="fade-up">
                    <a 
                    href="#" 
                    className="btn btn-primary"
                    onClick={(e) => {
                        e.preventDefault(); 
                        const element = document.getElementById('projects');
                        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    >
                        See My Work
                    </a>
                    <a href="/Kunjan_Bhatt_resume.pdf" download="Kunjan_Resume.pdf" className="btn btn-outline">Download Resume</a>
                </div>
            </div>

            <div className="hero-image" data-aos="fade-left">
                <div className="hero-image-container">
                    <img src="/me5.png" alt="Profile Image"/>
                </div>
            </div>
        </div>
    </div>
    )
}

export default HeroSection