import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutMe = () => {
    useEffect(() => {
        AOS.init({
          duration: 500, 
          once: false,
        });
      }, []);
  return (
    <div id="aboutme" className="about-container">
        <h2><span>A</span><span>b</span><span>o</span><span>u</span><span>t</span> <span>M</span><span>e</span></h2>
        <div className="about-content">
            <div className="about-text left" data-aos="fade-right">
                <p>Hey there! I’m <span className="highlight">Kunjan Bhatt</span>, a 19-year-old passionate <span className ="highlight">Web Developer</span> who loves creating sleek and efficient digital experiences.</p>
            </div>
            <div className="about-image" data-aos="flip-left">
                <img src="/myphoto.jpeg" alt="Kunjan Bhatt" />
            </div>
            <div className="about-text right" data-aos="fade-left">
                <p>Currently pursuing my <span className="highlight">Bachelor’s degree</span>, I am consistently working on projects to level up my skills and explore new technologies.</p>
            </div>
        </div>
    </div>
  )
}

export default AboutMe