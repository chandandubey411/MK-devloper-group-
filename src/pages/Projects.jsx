import React, { useState } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaAward, FaHourglassHalf, FaCheckCircle, FaBuilding, FaRupeeSign, FaUsers } from 'react-icons/fa';
import { projects } from '../data/projects';
import SectionTitle from '../components/common/SectionTitle';
import SlideUp from '../components/animations/SlideUp';
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';
import PageHero from '../components/common/PageHero';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Ongoing', 'Completed', 'Upcoming'];

  const filteredProjects = activeTab === 'All'
    ? projects
    : projects.filter((p) => p.category === activeTab);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Ongoing': return <FaHourglassHalf className="text-primary text-sm shrink-0 mt-0.5" />;
      case 'Completed': return <FaCheckCircle className="text-emerald-500 text-sm shrink-0 mt-0.5" />;
      case 'Upcoming': return <FaAward className="text-accent text-sm shrink-0 mt-0.5" />;
      default: return <FaAward className="text-primary text-sm shrink-0 mt-0.5" />;
    }
  };

  const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "12", label: "Cities Across India" },
    { value: "₹2000 Cr+", label: "Total Project Value" },
    { value: "10,000+", label: "Happy Families" },
  ];

  const featuredProject = projects.find(p => p.category === 'Ongoing') || projects[0];

  return (
    <div className="relative w-full bg-dark overflow-hidden font-heading">

      {/* 1. Header */}
      <PageHero
        badge="Architectural Landmarks"
        title="Signature Project"
        titleHighlight="Portfolio"
        subtitle="Review our massive completed milestones, premium ongoing structures, and upcoming master townships redefining Indian real estate."
        image="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&q=80"
        breadcrumb="Projects"
      />

      {/* 2. Stats Banner */}
      <section className="relative py-14 bg-dark border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, idx) => (
              <SlideUp key={idx} delay={idx * 0.08} className="text-center glass-dark border border-white/5 rounded-2xl py-8 px-4">
                <div className="text-3xl md:text-4xl font-extrabold text-primary mb-2">{s.value}</div>
                <div className="text-xs text-white/60 uppercase tracking-widest font-sans">{s.label}</div>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Spotlight Project */}
      {featuredProject && (
        <section className="relative py-20 bg-dark/95 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <SectionTitle subtitle="Featured Project" title="Our Signature Landmark" align="left" />
            <SlideUp className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-gold relative group">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent" />
                <span className="absolute bottom-4 left-4 text-[10px] font-bold uppercase tracking-widest bg-gold-gradient text-white px-3 py-1 rounded shadow-md">
                  {featuredProject.category}
                </span>
              </div>
              <div className="flex flex-col gap-5 text-left">
                <span className="text-xs font-bold text-accent tracking-widest uppercase bg-primary/10 border border-primary/20 px-3 py-1 rounded-full w-fit">
                  {featuredProject.type}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight uppercase">{featuredProject.title}</h2>
                <div className="flex gap-4 text-xs text-white/50 font-sans">
                  <span className="flex items-center gap-1"><FaMapMarkerAlt className="text-primary" /> {featuredProject.location}</span>
                  <span className="flex items-center gap-1"><FaCalendarAlt className="text-primary" /> {featuredProject.completionYear}</span>
                </div>
                <p className="text-white/70 text-sm font-sans font-light leading-relaxed">{featuredProject.description}</p>
                <div className="flex flex-col gap-2.5 border-t border-white/5 pt-5">
                  {featuredProject.highlights.map((h, i) => (
                    <div key={i} className="flex gap-2.5 items-start text-xs text-white/60 font-sans">
                      <FaCheckCircle className="text-primary shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact">
                  <Button variant="primary" className="px-8 py-3 text-xs mt-2 w-fit">Enquire About This Project</Button>
                </Link>
              </div>
            </SlideUp>
          </div>
        </section>
      )}

      {/* 4. Portfolio Showcase Grid */}
      <section className="relative py-20 bg-dark min-h-[600px]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionTitle subtitle="All Projects" title="Complete Project Portfolio" align="center" />

          {/* Tabs */}
          <div className="flex justify-center mt-10 mb-16">
            <div className="flex items-center gap-2 p-1.5 rounded-xl border border-white/10 bg-dark-card overflow-x-auto max-w-full">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-300 ${
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <SlideUp
                key={project.id}
                delay={idx * 0.08}
                className="glass-dark border border-white/5 rounded-2xl overflow-hidden group flex flex-col hover:border-primary/20 transition-all duration-400"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="text-[9px] font-bold uppercase tracking-widest bg-gold-gradient text-white px-2.5 py-1 rounded shadow-md">{project.category}</span>
                    <span className="text-[9px] font-semibold uppercase tracking-widest bg-dark/70 backdrop-blur-sm border border-white/15 text-white px-2.5 py-1 rounded">{project.type}</span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow text-left">
                  <div className="flex justify-between items-center text-xs text-white/50 mb-3 font-sans font-light">
                    <span className="flex items-center gap-1"><FaMapMarkerAlt className="text-primary text-[10px]" /> {project.location}</span>
                    <span className="flex items-center gap-1"><FaCalendarAlt className="text-primary text-[10px]" /> {project.completionYear}</span>
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-white mb-3 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                  <p className="text-white/60 text-xs md:text-sm font-sans font-light leading-relaxed mb-6">{project.description}</p>

                  <div className="flex flex-col gap-2.5 border-t border-white/5 pt-4 mt-auto mb-4 font-sans text-xs">
                    {project.highlights.map((highlight, key) => (
                      <div key={key} className="flex gap-2 items-start text-white/70">
                        {getStatusIcon(project.category)}
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Bottom CTA */}
      <section className="relative py-20 border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10 text-center flex flex-col items-center gap-6">
          <span className="text-xs font-bold text-accent uppercase tracking-[0.25em] bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full">
            Be a Part of India's Growth
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Invest in a Landmark Project
          </h2>
          <p className="text-white/60 text-sm font-sans font-light max-w-xl leading-relaxed">
            From residential towers to commercial complexes — our projects are structured for maximum return on investment and unmatched lifestyle quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link to="/contact"><Button variant="primary" className="px-10 py-4 text-xs">Schedule a Site Visit</Button></Link>
            <Link to="/properties"><Button variant="outline" className="px-10 py-4 text-xs">Explore Properties</Button></Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Projects;
