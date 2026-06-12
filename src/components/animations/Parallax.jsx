import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Parallax = ({ children, speed = 0.5, className = '', bgImage = '' }) => {
  const containerRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const bg = bgRef.current;
    if (!bg) return;

    const t = gsap.to(bg, {
      yPercent: 30 * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => {
      if (t) t.kill();
    };
  }, [speed]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {bgImage && (
        <div
          ref={bgRef}
          className="absolute inset-0 w-full h-[140%] -top-[20%] bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      )}
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
};

export default Parallax;
