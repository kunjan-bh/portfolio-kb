import React, { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectCard = ({ projectTitle, description, imagePath, link, tools }) => {
  const [hovered, setHovered] = useState(false);
  const overlayRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 500, once: false });
  }, []);

  useEffect(() => {
    let frameId;

    const handleMouseMove = (e) => {
      if (!overlayRef.current) return;
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        overlayRef.current.style.top = `${e.clientY}px`;
        overlayRef.current.style.left = `${e.clientX + 150}px`;
      });
    };

    if (hovered) {
      window.addEventListener('mousemove', handleMouseMove);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
    }

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [hovered]);

  return (
    <div
      className="project-card relative overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="project-image" data-aos="fade-right">
        <img src={imagePath} alt={projectTitle} />
      </div>

      <div className="project-details" data-aos="fade-left">
        <h3>{projectTitle}</h3>
        <p>{description}</p>
        <div className="project-links">
          <a href={link} target="_blank" className="button-icon">
            <div className="icon">
              {/* GitHub icon */}
              <svg viewBox="0 0 24 24">
                <path
                  d="M12 0.297C5.37 0.297 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.297 12 0.297Z"
                  fill="#222229"
                />
              </svg>
            </div>
            <div className="cube">
              <span className="side front">Explore !</span>
              <span className="side top">Github link</span>
            </div>
          </a>
        </div>
      </div>

      {/* Cursor-follow overlay */}
      {hovered && (
        <div
          ref={overlayRef}
          className="cursor-overlay fixed pointer-events-none z-[9999]"
          style={{
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className='flex justify-center items-center'>
            <p className="toolName mb-2 text-sm font-semibold text-gray-800">Tools:</p>
            <div className="tools-logos flex flex-wrap justify-center gap-2">
              {tools.map((tool, index) => (
                <img
                  key={index}
                  src={tool.logo}
                  alt={tool.name}
                  className="w-8 h-8 object-contain"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
