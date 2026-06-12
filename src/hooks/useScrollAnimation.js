import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = (options = {}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const {
      animationType = 'fadeInUp',
      duration = 1,
      delay = 0,
      stagger = 0,
      start = 'top 85%',
      toggleActions = 'play none none none',
    } = options;

    let animConfig = {};

    switch (animationType) {
      case 'fadeInUp':
        animConfig = {
          y: 50,
          opacity: 0,
          duration,
          delay,
          stagger,
          ease: 'power3.out',
        };
        break;
      case 'fadeInLeft':
        animConfig = {
          x: -50,
          opacity: 0,
          duration,
          delay,
          stagger,
          ease: 'power3.out',
        };
        break;
      case 'fadeInRight':
        animConfig = {
          x: 50,
          opacity: 0,
          duration,
          delay,
          stagger,
          ease: 'power3.out',
        };
        break;
      case 'zoomIn':
        animConfig = {
          scale: 0.85,
          opacity: 0,
          duration,
          delay,
          stagger,
          ease: 'power3.out',
        };
        break;
      default:
        animConfig = {
          opacity: 0,
          duration,
          delay,
          ease: 'power3.out',
        };
    }

    const t = gsap.from(el, {
      ...animConfig,
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions,
      },
    });

    return () => {
      if (t) t.kill();
    };
  }, [options]);

  return elementRef;
};
export default useScrollAnimation;
