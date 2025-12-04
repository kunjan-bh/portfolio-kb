import React, { useEffect, useState } from "react";
// import "./loader.css";

export default function Loader({ duration = 3500, onFinish }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = performance.now();

    const animate = (time) => {
      const elapsed = time - start;
      const percent = Math.min((elapsed / duration) * 100, 100);
      setProgress(percent);

      if (percent < 100) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(() => {
          setDone(true);
          setTimeout(() => {
            if (onFinish) onFinish();
          }, 1500);
        }, 400);
      }
    };

    requestAnimationFrame(animate);
  }, [duration, onFinish]);

  const getWavePath = (progress) => {
    const width = 1400;
    const height = 400;

    // Base water level rising with progress
    const baseLevel = height - (progress / 100) * height;

    const time = Date.now() / 200; // continuous time

    let path = `M0 ${baseLevel}`;

    for (let x = 0; x <= width; x += 5) {
      // Multiple sine waves combined
      const y =
        baseLevel + 
        Math.sin(x * 0.025 + time * 1) * 20 +  // long, big smooth wave (like a C)
        Math.sin(x * 0.1 + time * 1) * 1;     // faster small ripples

      path += ` L${x} ${y}`;
    }

    path += ` L${width} ${height} L0 ${height} Z`;
    return path;
  };


  return (
    <div className="loader-container">
      <div className={`loader-content ${done ? "zoom-in" : ""}`}>
        {/* Main text SVG */}
        <svg
          className="water-text"
          viewBox="0 0 1400 400"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <mask id="water-mask">
              <rect width="1400" height="400" fill="black" />
              <path d={getWavePath(progress)} fill="white" />
            </mask>
          </defs>

          {/* Grey text */}
          <text
            x="50%"
            y="40%"
            dy=".35em"
            textAnchor="middle"
            fontFamily="'Acme', sans-serif"
            fontSize="200"
            fontWeight="900"
            fill="#555555"
          >
            Kunjan B.
          </text>

          {/* White water-revealed text */}
          <text
            x="50%"
            y="40%"
            dy=".35em"
            textAnchor="middle"
            fontFamily="'A', sans-serif"
            fontSize="200"
            fontWeight="900"
            fill="white"
            mask="url(#water-mask)"
          >
            Kunjan B.
          </text>
        </svg>
      </div>
    </div>
  );
}
