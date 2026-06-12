import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Button from '../common/Button';
import SlideUp from '../animations/SlideUp';

const CTA = () => {
  return (
    <section className="relative py-24 bg-dark overflow-hidden font-heading border-b border-white/5">
      {/* Cinematic grid background effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] z-0" />
      
      {/* Decorative large glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10 text-center flex flex-col items-center">
        
        <SlideUp className="flex flex-col items-center">
          <span className="text-xs font-bold text-accent uppercase tracking-[0.25em] bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full mb-6">
            Private Institutional Offerings
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-tight max-w-3xl">
            Acquire an Iconic Address in India's Growth Story
          </h2>
          <p className="text-white/70 text-sm sm:text-base md:text-lg font-sans font-light max-w-2xl mb-12 leading-relaxed">
            MK Developer & Group works directly with HNIs, institutional investors, and global entities to secure prime commercial sites and luxury estates. Discuss your portfolio with our advisory board today.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md">
            <Link to="/contact" className="w-full sm:w-auto">
              <Button variant="primary" className="w-full px-8 py-3.5 text-xs">
                Request Private Advisory
              </Button>
            </Link>
            <a href="tel:+918010029100" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full px-8 py-3.5 text-xs flex items-center justify-center gap-2">
                <FaPhoneAlt className="text-[10px]" /> +91 80100 29100
              </Button>
            </a>
          </div>

          {/* Bottom details */}
          <div className="flex justify-center gap-6 items-center mt-12 text-white/50 text-xs font-sans">
            <span>Minimum Capital Size: ₹1.5 Cr</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span>Dedicated Advisor Allocation</span>
          </div>

        </SlideUp>

      </div>
    </section>
  );
};

export default CTA;
