import './Line.css'
import React, { useEffect, useRef } from 'react';

const Line = () => {
  const lineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-line');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    if (lineRef.current) {
      observer.observe(lineRef.current);
    }

    return () => {
      if (lineRef.current) {
        observer.unobserve(lineRef.current);
      }
    };
  }, []);

  return (
    <div className="line-container">
      <div className="line" ref={lineRef}></div>
    </div>
  );
};

export default Line;
