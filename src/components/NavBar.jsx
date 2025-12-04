import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div id="home" className="navigation-bar">
      <div className="nav-container">
        <a 
        href="#"
        onClick={(e) => {
          e.preventDefault(); // prevent default link jump
          const element = document.getElementById('home');
          if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }}
        >
          <div className="logo">
              <img src="/logo.png" style={{ height: '30px', marginRight: '8px' }} />
              <span>Kunjan</span>
          </div>
        </a>
        <div className="nav-links">
            <ul>
                
                <li>
                  <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault(); // prevent default link jump
                    const element = document.getElementById('aboutme');
                    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}>
                  About me
                  </a>
                </li>
                <li>
                  <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault(); // prevent default link jump
                    const element = document.getElementById('projects');
                    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}>
                  Projects
                  </a>
                </li>
                <li>
                  <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault(); // prevent default link jump
                    const element = document.getElementById('publication');
                    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}>
                  Publications
                  </a>
                </li>
            </ul>
        </div>
        <div className='headlink'>
          <a href="https://www.linkedin.com/in/kunjan-bhatt/"><img src="/linkedin.png" alt="" width="40"/></a>
          <a href="https://github.com/kunjan-bh"><img src="/github.png" alt="" width="40"/></a>
        </div>
        <div className="menu-box">
						<a href="#menu" id="showmenu"></a>
						<div id="menu" className="menu">
							<a href="#showmenu" className="menu-background"></a>
							<div className="menu-content">
								<div className="menu-logo">
									<img src="/logo.png" alt="logo" />
								</div>
								<div>
									<ul>
										<li><a href="#home">Home</a></li>
										<li><a href="#aboutme">About me</a></li>
										<li><a href="#projects">Projects</a></li>
										<li><a href="#publication">Publications</a></li>
										<li><a href="#awards">Recognitions</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
      </div>
    </div>
  )
}

export default NavBar