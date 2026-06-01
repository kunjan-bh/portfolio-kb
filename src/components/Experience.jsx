import React from 'react';
import { motion } from 'framer-motion';
import '../component-css/Experience.css';

const experiences = [
  {
    company: 'Jyoti Bikash Bank Limited (JBBL)',
    role: 'AI Engineer Intern',
    period: 'Feb 2026 – Present',
    location: 'Kathmandu, Nepal',
    accent: '#58a6ff',
    points: [
      'Engineered a Python-based automation pipeline to generate NRB-compliant card transaction reports, eliminating a fully manual Excel process and reducing report generation time from hours to minutes.',
      'Built an intelligent merchant and user data aggregation system that pulls, deduplicates, and consolidates records across two external portals (FonePay and NepalPay) — replacing manual reconciliation workflow.',
    ],
  },
  {
    company: 'Moru Digital Wallet',
    role: 'Product Developer Intern',
    period: 'Dec 2025 – Feb 2026',
    location: 'Kathmandu, Nepal',
    accent: '#00bcd4',
    points: [
      'Led full-stack development of a live forex and metal rates product, architecting both the backend data pipeline and the user-facing interface from scratch.',
      'Optimized frontend API consumption by migrating data-fetching logic to server-side rendering, significantly reducing unnecessary client-server round trips and improving page load performance.',
    ],
  },
];

const Experience = () => {
  return (
    <div id="experience" className="experience-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: true, margin: '-80px' }}
      >
        <div className="section-label">— 02 &nbsp; Work</div>
        <h2>
          <span>E</span><span>x</span><span>p</span><span>e</span><span>r</span>
          <span>i</span><span>e</span><span>n</span><span>c</span><span>e</span>
        </h2>
      </motion.div>

      <div className="exp-timeline">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="exp-timeline-item"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.15 }}
            viewport={{ once: true, margin: '-60px' }}
          >
            <div className="exp-dot" style={{ background: exp.accent }} />
            <div className="exp-card" style={{ borderLeftColor: exp.accent }}>
              <div className="exp-header">
                <div className="exp-title">
                  <h3>{exp.company}</h3>
                  <span className="exp-role" style={{ color: exp.accent }}>{exp.role}</span>
                </div>
                <div className="exp-meta">
                  <span className="exp-period">{exp.period}</span>
                  <span className="exp-location">{exp.location}</span>
                </div>
              </div>
              <ul className="exp-points">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
