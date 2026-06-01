import React from 'react'
import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 30 },
  whileInView:  { opacity: 1, y: 0 },
  transition:  { duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay },
  viewport:    { once: true, margin: '-60px' },
})

const coreSkills = [
  { icon: <i className="devicon-python-plain colored icon-large" />,     label: 'Python' },
  { icon: <i className="devicon-javascript-plain colored icon-large" />, label: 'JavaScript' },
  { icon: <i className="devicon-react-original colored icon-large" />,   label: 'React' },
  { icon: <i className="devicon-django-plain colored icon-large" style={{ color: '#A0C878' }} />, label: 'Django' },
  { icon: <img src="/fast.png" alt="FastAPI" width="40" height="40" />,  label: 'FastAPI' },
  { icon: <i className="devicon-postgresql-plain colored icon-large" />, label: 'PostgreSQL' },
  { icon: <i className="devicon-redis-plain colored icon-large" />,      label: 'Redis' },
  { icon: <i className="devicon-docker-plain colored icon-large" />,     label: 'Docker' },
  { icon: <img src="/pyt.png" alt="PyTorch" width="40" height="40" />,  label: 'PyTorch' },
  { icon: <img src="/ml.png" alt="MLflow" width="40" height="40" />,    label: 'MLflow' },
  { icon: <img src="/air.png" alt="Airflow" width="40" height="40" />,  label: 'Airflow' },
  { icon: <i className="devicon-git-plain colored icon-large" />,        label: 'Git' },
]

const exploringSkills = [
  { icon: <i className="devicon-nextjs-plain colored icon-large" style={{ color: '#fff' }} />, label: 'Next.js' },
  { icon: <i className="devicon-typescript-plain colored icon-large" />, label: 'TypeScript' },
  { icon: <i className="devicon-mongodb-plain colored icon-large" />,    label: 'MongoDB' },
  { icon: <img src="/block.png" alt="Blockchain" width="40" height="40" />, label: 'Blockchain' },
]

const SkillBadge = ({ icon, label, delay }) => (
  <motion.div
    className="skill"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.45, ease: [0.34, 1.56, 0.64, 1], delay }}
    viewport={{ once: true, margin: '-40px' }}
  >
    {icon}
    <p>{label}</p>
  </motion.div>
)

const SkillsSet = () => {
  return (
    <div className="skills-container">
      <div className="skills">
        <motion.div {...fadeUp(0)}>
          <div className="section-label">— 04 &nbsp; Stack</div>
          <h2>
            <span>S</span><span>k</span><span>i</span><span>l</span><span>l</span>{' '}
            <span>S</span><span>e</span><span>t</span>
          </h2>
        </motion.div>

        <div className="category">
          <motion.h3 {...fadeUp(0.05)}>Skills &amp; Tools I Use</motion.h3>
          <div className="icons">
            {coreSkills.map((s, i) => (
              <SkillBadge key={s.label} icon={s.icon} label={s.label} delay={i * 0.04} />
            ))}
          </div>
        </div>

        <div className="category">
          <motion.h3 {...fadeUp(0.05)}>Currently Exploring</motion.h3>
          <div className="icons">
            {exploringSkills.map((s, i) => (
              <SkillBadge key={s.label} icon={s.icon} label={s.label} delay={i * 0.06} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillsSet
