import { useState, useEffect } from 'react';

export const useCounter = (target, duration = 2000, trigger = true) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = 0;
    const end = parseInt(target, 10);
    if (start === end) return;

    const totalMiliseconds = duration;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 1);
    
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const currentCount = Math.min(Math.floor((progress / totalMiliseconds) * end), end);
      
      setCount(currentCount);

      if (progress < totalMiliseconds) {
        window.requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    window.requestAnimationFrame(animate);
  }, [target, duration, trigger]);

  return count;
};
