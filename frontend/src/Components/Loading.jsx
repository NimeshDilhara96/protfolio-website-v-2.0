import React, { useState, useEffect } from 'react';
import styles from './Loading.module.css';

const text = 'Nimesh';
const dot = '.';

function Loading() {
  const [activeIdx, setActiveIdx] = useState(-1);
  const [showDot, setShowDot] = useState(false);

  useEffect(() => {
    if (activeIdx < text.length - 1) {
      const timer = setTimeout(() => setActiveIdx(activeIdx + 1), 120);
      return () => clearTimeout(timer);
    } else if (!showDot) {
      const timer = setTimeout(() => setShowDot(true), 300);
      return () => clearTimeout(timer);
    }
  }, [activeIdx, showDot]);

  return (
    <div className={styles.loadingWrapper}>
      <span className={styles.netflixText}>
        {[...text].map((char, idx) => (
          <span
            key={idx}
            className={`${styles.letter} ${activeIdx >= idx ? styles.letterActive : ''}`}
            style={{ color: '#6366f1' }}
          >
            {char}
          </span>
        ))}
        {showDot && <span className={styles.logoDot}>{dot}</span>}
      </span>
    </div>
  );
}

export default Loading;