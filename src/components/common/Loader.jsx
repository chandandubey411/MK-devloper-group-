import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Loader = ({ onFinish }) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            if (onFinish) onFinish();
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 25);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="loader-container">
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        {/* Glow backdrop behind the logo */}
        <div className="absolute w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none -z-10" />

        {/* Stacked Logo Bars */}
        <div className="flex items-end gap-[6px] h-16 mb-6">
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "64px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-5 bg-primary rounded-md shadow-gold"
          />
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "40px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-5 bg-primary rounded-md shadow-gold"
          />
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "64px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-5 bg-white/80 rounded-md shadow-[0_4px_24px_rgba(255,255,255,0.2)]"
          />
        </div>

        {/* Brand Name stacked underneath */}
        <div className="flex flex-col items-center mb-8 text-center">
          <span className="text-xl md:text-2xl font-heading font-extrabold tracking-[0.25em] text-white uppercase leading-none">
            MK DEVELOPER
          </span>
          <span className="text-xs md:text-sm font-heading font-semibold tracking-[0.18em] text-primary uppercase mt-2">
            GROUP
          </span>
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/40 mt-3.5 font-sans font-medium">
            Building India's Future
          </span>
        </div>
        
        {/* Progress indicator */}
        <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden mb-3 relative">
          <div
            className="h-full bg-gold-gradient transition-all duration-75"
            style={{ width: `${percent}%` }}
          />
        </div>
        
        <span className="font-heading font-semibold text-[10px] text-white/50 tracking-wider">
          {percent}%
        </span>
      </motion.div>
    </div>
  );
};

export default Loader;
