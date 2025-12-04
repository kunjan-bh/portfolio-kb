import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import HeroSection from './HeroSection'
import AboutMe from './AboutMe'
import Publication from './Publication'
import SkillsSet from './SkillsSet'
import WorkInfo from './WorkInfo'
import NavBar from './NavBar'
import ScrollToTop from './ScrollToTop'
import Awards from './Awards'

const MyRoutes = () => {
  return (
    <div>
        
        <NavBar />
        
        <Routes>
            <Route path="/home" element={<HeroSection />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/contact" element={<div>Contact section</div>} />
            <Route path="/project" element={<div>Project section</div>} />
            <Route path="/publications" element={<Publication />} />
            <Route path="/awards" element={<Awards />} />
        </Routes>
    </div>
  )
}

export default MyRoutes