import React from 'react';
import { motion } from 'framer-motion';

const cards = [
  {
    icon: '⚡',
    title: 'AI & Automation',
    accent: '#ffcc00',
    body: 'End-to-end automation systems — NRB-compliant pipelines, intelligent data aggregation, and ML-powered workflows that eliminate manual processes.',
  },
  {
    icon: '🛠',
    title: 'Full-Stack Engineering',
    accent: '#58a6ff',
    body: 'React frontends with server-side rendering, Django and FastAPI backends, PostgreSQL and Redis data layers — complete products built for performance.',
  },
  {
    icon: '📊',
    title: 'Data & MLOps',
    accent: '#00bcd4',
    body: 'MLflow experiment tracking, Airflow orchestration, Docker containerisation, and stacking ensemble models — I build the infrastructure around ML, not just the models.',
  },
];

const WorkInfo = () => {
  return (
    <div className='about1-container'>
      <div className='about'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <div className="section-label">— 03 &nbsp; Expertise</div>
          <h2>What I Build</h2>
          <p className='intro-text'>
            From intelligent automation pipelines to full-stack products — I build things
            that actually ship and make a measurable difference.
          </p>
        </motion.div>

        <div className="about-grid">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="about-card"
              style={{ borderTopColor: card.accent }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.12 }}
              viewport={{ once: true, margin: '-60px' }}
            >
              <span className="about-card-icon">{card.icon}</span>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkInfo;
