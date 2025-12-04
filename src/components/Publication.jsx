import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion'; // 👈 Import this

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
    title: 'Optimizing text-based image retrival algorithms on Unsplash(DRAFT)',
    description:
      "This report explores how to improve image search relevance using OpenAI's CLIP model, particularly for abstract or vague text queries that traditional keyword-based search often fails to handle effectively.",
    authors: 'Kunjan Bhatt',
    link: 'https://github.com/kunjan-bh/image-retrieval-algorithms-on-Unsplash/blob/main/Image_retrival_algorithm_OpenAi_Clip.pdf',
    date: 'Yet to be published',
  },
];

const Publication = () => {

  return (
    <div id="publication" className="publication-container relative">
      <h2 className="sticky top-40">
        <span>P</span><span>u</span><span>b</span><span>l</span><span>i</span>
        <span>c</span><span>a</span><span>t</span><span>i</span><span>o</span>
        <span>n</span><span>s</span>
      </h2>

      {publications.map((pub, index) => (
        <motion.div
          key={index}
          className="publication-content sticky top-70 h-[400px] max-h-[600px] bg-[#1a1a1a] border-t border-white rounded-[40px] text-white"
          // initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <div className="pub-align1"><span>#{pub.id}</span></div>
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
