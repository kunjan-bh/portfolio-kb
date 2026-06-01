import React from 'react';
import { motion } from 'framer-motion';

const publications = [
  {
    id: '1',
    title: 'Early Stroke Risk Prediction Using ML',
    description:
      'Machine learning models, including CatBoost, Random Forest, and XGBoost ensembles, predict stroke risk early, emphasizing high recall and interpretability using LIME.',
    authors: 'Kunjan Bhatt, Bishnu Upadhyaya',
    link: 'https://zenodo.org/records/16624483',
    date: 'Published July 31, 2025',
  },
  {
    id: '2',
    title: 'Blockchain & Smart Contracts in Federated Learning',
    description:
      'Proposes a framework integrating blockchain and smart contracts into federated learning to improve trust, privacy, and transparency in decentralized AI systems.',
    authors: 'Kunjan Bhatt',
    link: 'https://zenodo.org/records/15857313',
    date: 'Published July 10, 2025',
  },
  {
    id: '3',
    title: 'Optimizing Text-Based Image Retrieval Algorithms on Unsplash (Draft)',
    description:
      "Explores how to improve image search relevance using OpenAI's CLIP model, particularly for abstract or vague text queries that traditional keyword-based search often fails to handle.",
    authors: 'Kunjan Bhatt',
    link: 'https://github.com/kunjan-bh/image-retrieval-algorithms-on-Unsplash/blob/main/Image_retrival_algorithm_OpenAi_Clip.pdf',
    date: 'Yet to be published',
  },
];

const Publication = () => {
  return (
    <div id="publication" className="publication-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: true, margin: '-80px' }}
      >
        <div className="section-label">— 06 &nbsp; Research</div>
        <h2>
          <span>P</span><span>u</span><span>b</span><span>l</span><span>i</span>
          <span>c</span><span>a</span><span>t</span><span>i</span><span>o</span>
          <span>n</span><span>s</span>
        </h2>
      </motion.div>

      {publications.map((pub, index) => (
        <motion.div
          key={index}
          className="publication-content"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.1 }}
          viewport={{ once: true, margin: '-50px' }}
        >
          <div className="pub-align1">#{pub.id}</div>
          <div className="pub-align2">
            <div className="publication-text">
              <h3>{pub.title}</h3>
              <p><strong>Authors:</strong> {pub.authors}</p>
              <p>{pub.description}</p>
              <p><em>{pub.date}</em></p>
              <a href={pub.link} target="_blank" rel="noopener noreferrer" className="read-more">
                Read Publication →
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Publication;
