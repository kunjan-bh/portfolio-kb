import React, { useEffect, useState, useRef } from "react";
import "../component-css/Loader.css";

export default function Loader({ duration = 3200 }) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const rafRef = useRef(null);

  useEffect(() => {
    const start = performance.now();

    const animate = (time) => {
      const elapsed = time - start;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(pct);

      if (pct < 100) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        // slight pause, then trigger exit fade
        setTimeout(() => setExiting(true), 300);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [duration]);

  /* Water-wave mask path — rises from bottom as progress increases */
  const wavePath = (() => {
    const W = 1000;
    const H = 260;
    const baseY = H - (progress / 100) * H;
    const t = Date.now() / 220;

    let d = `M0 ${baseY}`;
    for (let x = 0; x <= W; x += 6) {
      const y = baseY
        + Math.sin(x * 0.022 + t) * 14
        + Math.sin(x * 0.09  + t * 1.3) * 5;
      d += ` L${x} ${y}`;
    }
    d += ` L${W} ${H} L0 ${H} Z`;
    return d;
  })();

  return (
    <div className={`loader-container${exiting ? " loader-exit" : ""}`}>
      <div className="loader-content">
        <svg
          className="water-text"
          viewBox="0 0 1000 260"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <mask id="wm">
              <rect width="1000" height="260" fill="black" />
              <path d={wavePath} fill="white" />
            </mask>
          </defs>

          {/* dim base text */}
          <text
            x="50%" y="62%"
            textAnchor="middle"
            fontFamily="'Cormorant Garamond', Georgia, serif"
            fontSize="168"
            fontWeight="600"
            letterSpacing="-2"
            fill="rgba(232,227,220,0.18)"
          >
            KUNJAN
          </text>

          {/* yellow water-revealed text */}
          <text
            x="50%" y="62%"
            textAnchor="middle"
            fontFamily="'Cormorant Garamond', Georgia, serif"
            fontSize="168"
            fontWeight="600"
            letterSpacing="-2"
            fill="#ffcc00"
            mask="url(#wm)"
          >
            KUNJAN
          </text>
        </svg>

        {/* thin yellow progress bar */}
        <div className="loader-bar-track">
          <div className="loader-bar-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
}
