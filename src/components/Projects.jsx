import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProjectCard from './ProjectCard'

const Projects = () => {
    useEffect(() => {
        AOS.init({
          duration: 500, 
          once: false,
        });
      }, []);
  return (
    <div id="projects" className='projects-container'>
      
        <div className="section-label">— 05 &nbsp; Selected Work</div>
        <h2 data-aos="fade-up"><span>P</span><span>r</span><span>o</span><span>j</span><span>e</span><span>c</span><span>t</span><span>s</span></h2>
        <div className="projects-grid">
           

            <ProjectCard projectTitle="Vision Park: AI-Powered Car Parking Solution" description="Developed an innovative smart parking system where users can book parking slots online. Integrated OCR and Raspberry Pi to verify license plates, enhancing security and automation in urban parking spaces." imagePath="/VP.png" link="https://github.com/kunjan-bh/VisionPark" tools={[ { name: "Django", logo: "/dj.png" }, { name: "python", logo: "/py.png" }, { name: "chatbot", logo: "/chatbot.png" }, { name: "js", logo: "/js.png" }, { name: "html", logo: "/ht.png" }, { name: "css", logo: "/css.png" }, { name: "api", logo: "/api.png" }  ]}></ProjectCard>

            <ProjectCard projectTitle="SunwayFood (Digital Canteen Pool)" description="Digital Canteen Pool is a web application for managing canteen services efficiently. It allows users to browse items, place orders, and interact with the system through a clean web interface." imagePath="/food.png" link="https://github.com/kunjan-bh/Digital-canteen-pool" tools={[ { name: "php", logo: "/php.png" }, { name: "mysql", logo: "/sql.png" }, { name: "Bootstrap", logo: "/bo.png" }, { name: "js", logo: "/js.png" }, { name: "html", logo: "/ht.png" } ]}></ProjectCard>

            <ProjectCard projectTitle="Semantic Image Search with CLIP" description="This project improves image search accuracy by using OpenAI’s CLIP model to understand the real meaning behind user queries, delivering more relevant and context-aware image results compared to traditional keyword-based methods used on sites like Unsplash." imagePath="/clip.png" link="https://github.com/kunjan-bh/image-retrieval-algorithms-on-Unsplash" tools={[ { name: "python", logo: "/py.png" }, { name: "sl", logo: "/sl.png" }, { name: "pyt", logo: "/pyt.png" } ]}></ProjectCard>

            <ProjectCard projectTitle="Phishing Site Detection with MLOps Pipeline" description="Developed a full MLOps pipeline for automated phishing site detection, covering data ingestion, preprocessing, model training, evaluation, and deployment. The system uses Redis for caching, MariaDB for storage, Great Expectations for data validation, and Apache Airflow for orchestrating workflows. The entire pipeline is containerized with Docker." imagePath="/mlops.png" link="https://github.com/kunjan-bh/Phishing-Site-Detection-with-MLOps-Pipeline/" tools={[ { name: "airflow", logo: "/air.png" }, { name: "mlflow", logo: "/ml.png" }, { name: "redis", logo: "/redis.png" }, { name: "ge", logo: "/ge.png" }, { name: "fastapi", logo: "/fast.png" }, { name: "mariadb", logo: "/maria.png" }, { name: "docker", logo: "/doc.png" } ]}></ProjectCard>

            {/* <ProjectCard projectTitle="Ultimate AI Guide: Smart Travel Assistant(Working)" description=" Building a full-stack AI-powered platform using React and Django to provide personalized travel recommendations. The system analyzes user preferences, location, and real-time data to suggest the best travel experiences." imagePath="/yavya.png"></ProjectCard> */}
        </div>
    </div>
  )
}

export default Projects