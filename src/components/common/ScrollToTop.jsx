import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaChevronUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-[999] p-4 rounded-full bg-gold-gradient text-white shadow-gold hover:shadow-gold-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:scale-95"
        >
          <FaChevronUp className="w-4 h-4" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
