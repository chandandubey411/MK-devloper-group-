import React, { useRef, useState, useEffect } from 'react';
import { useCounter } from '../../hooks/useCounter';
import SlideUp from '../animations/SlideUp';

const Statistics = () => {
  const containerRef = useRef(null);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { target: "12", suffix: "B+", label: "Assets Delivered", value: 12 },
    { target: "4", suffix: "M+", label: "Sq.Ft Constructed", value: 4 },
    { target: "50", suffix: "+", label: "Premium Projects", value: 50 },
    { target: "15", suffix: "K+", label: "Elite Happy Families", value: 15 }
  ];

  return (
    <section ref={containerRef} className="relative py-20 bg-dark overflow-hidden font-heading border-b border-white/5">
      {/* Visual background overlays */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[150px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="glass-dark gold-border-glow p-8 md:p-12 rounded-2xl grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          
          {stats.map((stat, idx) => {
            const count = useCounter(stat.target, 2000, hasTriggered);

            return (
              <SlideUp
                key={idx}
                delay={idx * 0.08}
                className="flex flex-col items-center justify-center text-center p-4 first:pt-4 pt-8 lg:pt-4"
              >
                <div className="flex items-baseline mb-2">
                  <span className="stat-number">{count}</span>
                  <span className="text-xl md:text-2xl font-extrabold text-accent ml-0.5">{stat.suffix}</span>
                </div>
                <span className="text-white/60 text-xs md:text-sm font-semibold uppercase tracking-wider">
                  {stat.label}
                </span>
              </SlideUp>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Statistics;
