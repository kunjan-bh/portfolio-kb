import React, { useState, useEffect } from 'react';

const awardsData = {
  2025: [
    {
      title: 'DAV Codefest 2025 – Runnerup',
      description:
        'Selected as top 2 for federated learning in healthcare innovation challenge.',
      image: './dav.jpeg',
      link: 'https://www.linkedin.com/posts/kunjan-bhatt_hackathonjourney-fromideatoimpact-teamwork-activity-7355648602083356675-GFXw?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE6O06MBGGcH5tR-rGJaWuFsuwtcw_3lqTE',
    },
    {
      title: 'ICT Awards 2025 – Semifinalist',
      description:
        'Our team NeuroNode Participated with federated Learning innovation project and become semifinalist in the ICT rising star innovation competition, showcasing innovative solution for healthcare.',
      image: './ict.jpeg',
      link: 'https://www.linkedin.com/posts/ashok-koirala_honored-to-share-that-our-team-has-been-selected-share-7390762098059976704-6yjb?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE6O06MBGGcH5tR-rGJaWuFsuwtcw_3lqTE',
    },
  ],
};

const Awards = () => {
  const [selectedYear, setSelectedYear] = useState('2025');
  const [fade, setFade] = useState(false);

  const handleYearChange = (year) => {
    if (year === selectedYear) return;
    setFade(true);
    setTimeout(() => {
      setSelectedYear(year);
      setFade(false);
    }, 300); // duration matches CSS transition
  };

  const years = Object.keys(awardsData).sort((a, b) => b - a);

  return (
    <div id="awards" className="awards-container">
      <div className="section-label">— 07 &nbsp; Recognition</div>
      <h2>Achievements & Recognitions</h2>

      <div className="year-selector">
        {years.map((year) => (
          <button
            key={year}
            className={`year-btn ${selectedYear === year ? 'active' : ''}`}
            onClick={() => handleYearChange(year)}
          >
            {year}
          </button>
        ))}
      </div>

      <div className={`awards-grid ${fade ? 'fade-out' : 'fade-in'}`}>
        {awardsData[selectedYear].map((award, index) => (
          <div key={index} className="award-card">
            <img src={award.image} alt={award.title} />
            <div className="award-text">
              <h3>{award.title}</h3>
              <p>{award.description}</p>
              {award.link && (
                <a href={award.link} target="_blank" rel="noopener noreferrer">
                  View →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
