import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaAward, FaBuilding } from 'react-icons/fa';
import Button from '../common/Button';
import SlideUp from '../animations/SlideUp';

const AboutSection = () => {
  return (
    <section className="relative py-24 bg-dark overflow-hidden font-heading">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Premium Legacy Information */}
          <SlideUp className="flex flex-col items-start text-left">
            <span className="text-xs font-bold text-accent uppercase tracking-widest bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-4">
              Our Legacy
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
              Pioneering Luxury & Structural Engineering
            </h2>
            <div className="w-20 h-1 bg-gold-gradient rounded-full mb-6" />
            
            <p className="text-white/70 text-sm md:text-base font-sans font-light leading-relaxed mb-6">
              MK Developer & Group has established itself as one of the premier luxury corporate developers in India. For over a decade, we have created architectural masterpieces that elegantly balance futuristic design, zero-emission sustainability, and structural integrity.
            </p>
            <p className="text-white/60 text-sm font-sans font-light leading-relaxed mb-8">
              We collaborate with globally recognized award-winning design consultants and engineering agencies to deliver premium residential penthouses, Class-A corporate blocks, and extensive smart townscapes across major hubs like Delhi, Gurgaon, Mumbai, and Bangalore.
            </p>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8 font-sans">
              <div className="flex gap-3">
                <FaCheckCircle className="text-primary mt-1 shrink-0 text-sm" />
                <div>
                  <h4 className="text-white font-semibold text-sm">Transparency First</h4>
                  <p className="text-xs text-white/50 mt-0.5">Absolute clarity in corporate deals and execution timelines.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <FaCheckCircle className="text-primary mt-1 shrink-0 text-sm" />
                <div>
                  <h4 className="text-white font-semibold text-sm">IGBC Sustainability</h4>
                  <p className="text-xs text-white/50 mt-0.5">Focus on zero-waste, energy-saving smart designs.</p>
                </div>
              </div>
            </div>

            <Link to="/about">
              <Button variant="outline" className="px-6 py-2.5 text-xs">
                Learn Our Legacy
              </Button>
            </Link>
          </SlideUp>

          {/* Right Column: Premium overlapping image layouts with luxury details */}
          <div className="relative flex justify-center items-center h-[400px] md:h-[500px]">
            {/* Background Blur Sphere */}
            <div className="absolute w-80 h-80 rounded-full bg-primary/10 blur-[60px] -z-10 pointer-events-none" />

            {/* Top/Main Image */}
            <SlideUp className="w-[70%] aspect-[3/4] rounded-2xl overflow-hidden shadow-gold border border-white/10 transform -translate-x-6 -translate-y-6 z-10 hover:scale-[1.02] transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80"
                alt="Luxury architectural structure"
                className="w-full h-full object-cover"
              />
            </SlideUp>

            {/* Overlapping Secondary Image */}
            <SlideUp className="absolute bottom-6 right-6 w-[55%] aspect-square rounded-2xl overflow-hidden shadow-dark border border-primary/20 hover:scale-[1.05] transition-transform duration-500 z-20">
              <img
                src="https://images.unsplash.com/photo-1613977257363-707ba9348227?w=500&q=80"
                alt="Bespoke luxury interior"
                className="w-full h-full object-cover"
              />
            </SlideUp>

            {/* Achievement floating badge */}
            <div className="absolute top-1/2 right-0 transform translate-x-4 -translate-y-12 z-30 glass-dark gold-border-glow p-4 rounded-xl flex items-center gap-3.5 shadow-glow max-w-[180px]">
              <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-lg shrink-0">
                <FaAward />
              </div>
              <div>
                <h4 className="text-white text-xs font-bold uppercase tracking-wider">Top Brand</h4>
                <p className="text-[10px] text-white/50 mt-0.5">Luxury corporate builder of the year.</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
