import React from 'react'
import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay },
  viewport:   { once: true, margin: '-80px' },
})

const AboutMe = () => {
  return (
    <div id="aboutme" className="about-container">
      <motion.div {...fadeUp(0)}>
        <div className="section-label">— 01 &nbsp; About</div>
        <h2>
          <span>A</span><span>b</span><span>o</span><span>u</span><span>t</span>{' '}
          <span>M</span><span>e</span>
        </h2>
      </motion.div>

      <div className="about-content">
        <motion.div className="about-text left" {...fadeUp(0.1)}>
          <p>
            Hey there! I'm <span className="highlight">Kunjan Bhatt</span> — an{' '}
            <span className="highlight">AI &amp; full-stack developer</span> who builds
            intelligent systems and ships real products that make a difference.
          </p>
        </motion.div>

        <motion.div
          className="about-image"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <img src="/myphoto.jpeg" alt="Kunjan Bhatt" />
        </motion.div>

        <motion.div className="about-text right" {...fadeUp(0.2)}>
          <p>
            Currently pursuing my{' '}
            <span className="highlight">BSc in Computer Science with AI</span> at Sunway
            College, while building production-grade automation and ML systems in the real
            world.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutMe
