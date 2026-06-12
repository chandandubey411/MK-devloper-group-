import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { projects } from '../../data/projects';
import SectionTitle from '../common/SectionTitle';
import SlideUp from '../animations/SlideUp';
import Button from '../common/Button';

const LatestProjects = () => {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'Ongoing', 'Completed', 'Upcoming'];

  const filteredProjects = activeTab === 'All'
    ? projects.slice(0, 3)
    : projects.filter(p => p.category === activeTab).slice(0, 3);

  return (
    <section className="relative py-24 bg-dark/95 border-b border-white/5 overflow-hidden font-heading">
      {/* Decorative background light blur */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <SectionTitle
            subtitle="Architectural Marvels"
            title="Our Latest Projects"
            align="left"
            className="mb-0"
          />
          
          {/* Tabs selector */}
          <div className="flex items-center gap-2 p-1.5 rounded-xl border border-white/10 bg-dark-card overflow-x-auto max-w-full shrink-0">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-gold-gradient text-white shadow-gold'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Projects cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <SlideUp
              key={project.id}
              delay={idx * 0.08}
              className="glass-dark border border-white/5 rounded-2xl overflow-hidden group flex flex-col hover:border-primary/20 transition-all duration-400"
            >
              {/* Image Container */}
              <div className="relative aspect-[3/2] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 text-[9px] font-bold uppercase tracking-widest bg-gold-gradient text-white px-2.5 py-1 rounded shadow-md">
                  {project.category}
                </span>
                <span className="absolute top-4 right-4 text-[9px] font-semibold uppercase tracking-widest bg-dark/70 backdrop-blur-sm border border-white/15 text-white px-2.5 py-1 rounded">
                  {project.type}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center text-xs text-white/50 mb-3 font-sans font-light">
                  <span className="flex items-center gap-1"><FaMapMarkerAlt className="text-primary text-[10px]" /> {project.location}</span>
                  <span className="flex items-center gap-1"><FaCalendarAlt className="text-primary text-[10px]" /> {project.completionYear}</span>
                </div>

                <h3 className="text-lg md:text-xl font-bold tracking-tight text-white mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-white/60 text-xs md:text-sm font-sans font-light leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Highlights tags */}
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.highlights.map((highlight, key) => (
                    <span key={key} className="text-[10px] font-sans font-medium text-white/70 bg-white/5 border border-white/5 px-2.5 py-1 rounded">
                      {highlight}
                    </span>
                  ))}
                </div>

                <Link
                  to="/projects"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg border border-white/10 text-white/80 font-semibold text-xs uppercase tracking-wider bg-white/5 hover:bg-gold-gradient hover:text-white hover:border-transparent transition-all duration-300 transform active:scale-[0.98]"
                >
                  View Details <FaArrowRight className="text-[9px]" />
                </Link>

              </div>
            </SlideUp>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LatestProjects;
