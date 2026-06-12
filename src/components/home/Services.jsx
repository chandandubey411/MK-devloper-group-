import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaBuilding, FaHome, FaCity, FaDraftingCompass, FaPaintRoller, FaUserShield } from 'react-icons/fa';
import { services } from '../../data/services';
import SectionTitle from '../common/SectionTitle';
import SlideUp from '../animations/SlideUp';
import Button from '../common/Button';

const Services = () => {
  // Mapping names to actual react-icons elements
  const iconMap = {
    FaBuilding: <FaBuilding className="text-2xl" />,
    FaHome: <FaHome className="text-2xl" />,
    FaCity: <FaCity className="text-2xl" />,
    FaDraftingCompass: <FaDraftingCompass className="text-2xl" />,
    FaPaintRoller: <FaPaintRoller className="text-2xl" />,
    FaUserShield: <FaUserShield className="text-2xl" />
  };

  return (
    <section className="relative py-24 bg-dark/95 border-y border-white/5 overflow-hidden font-heading">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <SectionTitle
            subtitle="Premium Capabilities"
            title="Our Real Estate Offerings"
            align="left"
            className="mb-0"
          />
          <Link to="/services" className="shrink-0">
            <Button variant="outline" className="px-6 py-2.5 text-xs flex items-center gap-2">
              All Capabilities <FaArrowRight className="text-[10px]" />
            </Button>
          </Link>
        </div>

        {/* Services List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <SlideUp
              key={service.id}
              delay={idx * 0.08}
              className="glass-dark border border-white/5 p-8 rounded-2xl flex flex-col items-start hover:border-primary/30 transition-all duration-400 group relative overflow-hidden"
            >
              {/* Gold light sheen on card hover */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gold-gradient transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />

              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:bg-gold-gradient group-hover:text-white group-hover:border-transparent transition-all duration-300 transform group-hover:-translate-y-1">
                {iconMap[service.icon] || <FaBuilding className="text-2xl" />}
              </div>

              <h3 className="text-white font-bold text-lg mb-3 tracking-tight group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-white/60 text-xs md:text-sm font-sans font-light leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Bullet points summary preview */}
              <ul className="flex flex-col gap-2 mb-6 font-sans text-xs text-white/50 w-full">
                {service.details.slice(0, 2).map((detail, key) => (
                  <li key={key} className="flex gap-2 items-center">
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/services"
                className="mt-auto inline-flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-widest hover:text-white transition-colors"
              >
                Learn More <FaArrowRight className="text-[9px] group-hover:translate-x-1 transition-transform" />
              </Link>
            </SlideUp>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
