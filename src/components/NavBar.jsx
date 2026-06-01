import React from 'react'

const NavLink = ({ label, targetId, onClick }) => (
  <li>
    <a
      href="#"
      className="nav-link"
      onClick={(e) => {
        e.preventDefault()
        const el = document.getElementById(targetId)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        if (onClick) onClick()
      }}
    >
      <span className="nl-inner">
        <span>{label}</span>
        <span>{label}</span>
      </span>
    </a>
  </li>
)

const NavBar = () => {
  return (
    <div id="home" className="navigation-bar">
      <div className="nav-container">

        <a
          href="#"
          className="logo-link"
          onClick={(e) => {
            e.preventDefault()
            document.getElementById('home')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }}
        >
          <div className="logo">
            <img src="/logo.png" style={{ height: '26px', marginRight: '8px' }} alt="logo" />
            <span>Kunjan</span>
          </div>
        </a>

        <nav className="nav-links">
          <ul>
            <NavLink label="About me"    targetId="aboutme"     />
            <NavLink label="Experience"  targetId="experience"  />
            <NavLink label="Projects"    targetId="projects"    />
            <NavLink label="Publications" targetId="publication" />
          </ul>
        </nav>

        <div className="headlink">
          <a href="https://www.linkedin.com/in/kunjan-bhatt/" target="_blank" rel="noreferrer">
            <img src="/linkedin.png" alt="LinkedIn" width="36" />
          </a>
          <a href="https://github.com/kunjan-bh" target="_blank" rel="noreferrer">
            <img src="/github.png" alt="GitHub" width="36" />
          </a>
        </div>

        <div className="menu-box">
          <a href="#menu" id="showmenu"></a>
          <div id="menu" className="menu">
            <a href="#showmenu" className="menu-background"></a>
            <div className="menu-content">
              <div className="menu-logo">
                <img src="/logo.png" alt="logo" />
              </div>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#aboutme">About me</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#publication">Publications</a></li>
                <li><a href="#awards">Recognitions</a></li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default NavBar
