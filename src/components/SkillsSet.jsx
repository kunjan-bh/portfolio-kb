import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const SkillsSet = () => {
    useEffect(() => {
        AOS.init({
          duration: 500, 
          once: false,
        });
      }, []);
  return (
    <div className="skills-container">
        <div className="skills">
            <h2><span>S</span><span>k</span><span>i</span><span>l</span><span>l</span> <span>S</span><span>e</span><span>t</span></h2>

            <div className="category">
                <h3 data-aos="fade-up">Skills & Tools I Use</h3>
                <div className="icons">
                    <div className="skill" data-aos="zoom-in-up"><i className="devicon-html5-plain colored icon-large"></i><p>HTML</p></div>
                    <div className="skill" data-aos="zoom-in-up"><i className="devicon-css3-plain colored icon-large"></i><p>CSS</p></div>
                    <div className="skill" data-aos="zoom-in-up"><i className="devicon-javascript-plain colored icon-large"></i><p>JavaScript</p></div>
                    <div className="skill" data-aos="zoom-in-up"><i className="devicon-react-original colored icon-large"></i><p>React.js</p></div>
                    <div className="skill" data-aos="zoom-in-up"><i className="devicon-python-plain colored icon-large"></i><p>Python</p></div>
                    <div className="skill" data-aos="zoom-in-up"><i className="devicon-tailwindcss-plain colored icon-large"></i><p>Tailwind</p></div>
                    <div className="skill" data-aos="zoom-in-up"><i className="devicon-django-plain colored icon-large" style={{color: '#A0C878'}}></i><p>Django</p></div>
                    <div className="skill" data-aos="zoom-in-up"><img src="/power-bi-icon.png" alt="Power BI" width="50" height="50" /><p>Power BI</p></div>
                    <div className="skill" data-aos="zoom-in-up"><i className="devicon-mysql-plain colored icon-large"></i><p>SQL</p></div>
                    <div className="skill" data-aos="zoom-in-up"><i className="devicon-git-plain colored icon-large"></i><p>Git</p></div>
                    <div className="skill" data-aos="zoom-in-up"><i className="devicon-github-original colored icon-large" style={{color: '#ffffff'}}></i><p>GitHub</p></div>
                </div>
            </div>

            <div className="category">
                <h3 data-aos="fade-up">Expanding My Knowledge In</h3>
                <div className="icons">
                    <div className="skill" data-aos="flip-up"><i className="devicon-nodejs-plain colored icon-large"></i><p>Node.js</p></div>
                    <div className="skill" data-aos="flip-up"><i className="devicon-nextjs-plain colored icon-large" style={{color: '#ffffff'}}></i><p>Next.js</p></div>
                    <div className="skill" data-aos="flip-up"><i className="devicon-express-original colored icon-large" style={{color: '#ffffff'}}></i><p>Express.js</p></div>
                    <div className="skill" data-aos="flip-up"><i className="devicon-mongodb-plain colored icon-large"></i><p>MongoDB</p></div>
                </div>
            </div>

            <div className="category">
                <h3 data-aos="fade-up">Future Skills to Learn</h3>
                <div className="icons">
                    <div className="skill" data-aos="flip-up"><i className="devicon-typescript-plain colored icon-large"></i><p>TypeScript</p></div>
                    <div className="skill" data-aos="flip-up"><i className="devicon-graphql-plain colored icon-large"></i><p>GraphQL</p></div>
                    <div className="skill" data-aos="flip-up"><i className="devicon-rust-plain colored icon-large" style={{color: '#ffffff'}}></i><p>Rust</p></div>
                    <div className="skill" data-aos="flip-up"><i className="devicon-go-plain colored icon-large"></i><p>Go</p></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SkillsSet