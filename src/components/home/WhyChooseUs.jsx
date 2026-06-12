import React from 'react';
import { FaShieldAlt, FaLeaf, FaHandsHelping, FaClock } from 'react-icons/fa';
import SectionTitle from '../common/SectionTitle';
import SlideUp from '../animations/SlideUp';

const WhyChooseUs = () => {
  const pillars = [
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: "Ultra-Premium Standards",
      description: "We use high-grade earthquake resistant structures, premium Italian marble linings, custom modular kitchens, and high solar-reflectivity glass panels."
    },
    {
      icon: <FaLeaf className="text-2xl" />,
      title: "Sustainable Smart Designs",
      description: "We focus on green architecture. Our properties incorporate solar grids, dynamic greywater filtering, and premium EV docking stations."
    },
    {
      icon: <FaHandsHelping className="text-2xl" />,
      title: "Absolute Transparency",
      description: "Clear and honest dealing. Absolute legal compliance with RERA, environmental, and corporate parameters. No hidden clauses, ever."
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: "Committed Execution Timelines",
      description: "We leverage state-of-the-art automated construction machinery to complete mega structures on schedule, without sacrificing visual details."
    }
  ];

  return (
    <section className="relative py-24 bg-dark overflow-hidden font-heading">
      {/* Decorative blurred backgrounds */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section title */}
        <SectionTitle
          subtitle="Corporate Pillars"
          title="Why Choose MK Developer & Group"
          align="center"
        />

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => (
            <SlideUp
              key={idx}
              delay={idx * 0.1}
              className="glass-dark gold-border-glow p-6 md:p-8 rounded-2xl flex flex-col items-start hover:border-primary/45 transition-all duration-400 group"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:bg-gold-gradient group-hover:text-white group-hover:border-transparent transition-all duration-300 transform group-hover:-translate-y-1">
                {pillar.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-3 tracking-tight group-hover:text-primary transition-colors">
                {pillar.title}
              </h3>
              <p className="text-white/60 text-xs md:text-sm font-sans font-light leading-relaxed">
                {pillar.description}
              </p>
            </SlideUp>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
