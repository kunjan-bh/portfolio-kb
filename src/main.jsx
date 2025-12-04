import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import './component-css/NavBar.css'
import './component-css/HeroSection.css'
import './component-css/SkillsSet.css'
import './component-css/WorkInfo.css'
import './component-css/AboutMe.css'
import './component-css/Projects.css'
import './component-css/ProjectCard.css'
import './component-css/Footer.css'
import './component-css/CustomCursor.css'
import './component-css/GlitterSection.css'
import './component-css/FloatingRope.css'
import './component-css/Publication.css'
import './component-css/Awards.css'
import './component-css/Loader.css'

import App from './App.jsx'
import "@fontsource/poppins"; 
import "@fontsource/nova-cut";
import ScrollToTop from './components/ScrollToTop';
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <ScrollToTop />
      <App />
  </BrowserRouter>

)
