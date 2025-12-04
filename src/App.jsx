import React, { useState, useEffect, useRef } from 'react'
import MyNavlink from './components/MyNavlink'
import MyRoutes from './components/MyRoutes'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import SkillsSet from './components/SkillsSet'
import WorkInfo from './components/WorkInfo'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import GlitterSection from './components/GlitterSection'
import FloatingRope from './components/FloatingRope'
import Publication from './components/Publication'
import Awards from './components/Awards'
import Loader from './components/Loader'


const App = () => {
  const [loading, setLoading] = useState(true)
  const [isSticky, setIsSticky] = useState(true)
  const heroRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500)
    return () => clearTimeout(timer)
  }, [])

  // 🧭 Sticky scroll logic
  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        // When hero is no longer fully visible
        if (entry.intersectionRatio < 1) {
          setIsSticky(false)
        } else {
          setIsSticky(true)
        }
      },
      { threshold: 1.0 } // fully visible
    )

    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  if (loading) return <Loader />

  return (
    <div>
      <CustomCursor />
      <NavBar />
      <FloatingRope />

      <div
        ref={heroRef}
        className={`sticky-container ${isSticky ? 'sticky' : 'unlocked'}`}
      >
        <GlitterSection>
          <HeroSection />
        </GlitterSection>
      </div>

      <AboutMe />
      <GlitterSection>
        <SkillsSet />
      </GlitterSection>
      <WorkInfo />
      <GlitterSection>
        <Projects />
      </GlitterSection>
      <Publication />
      <GlitterSection>
        <Awards />
      </GlitterSection>
      <Footer />
    </div>
  )
}

export default App
