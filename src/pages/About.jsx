import React from 'react';
import { FaEye, FaBullseye, FaAward, FaUsers, FaHistory, FaCheckCircle, FaBuilding, FaLeaf, FaHandshake, FaChartLine } from 'react-icons/fa';
import { team, timeline } from '../data/testimonials';
import SectionTitle from '../components/common/SectionTitle';
import SlideUp from '../components/animations/SlideUp';
import ZoomIn from '../components/animations/ZoomIn';
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';
import PageHero from '../components/common/PageHero';

const About = () => {
  const stats = [
    { value: "25+", label: "Years of Excellence" },
    { value: "10,000+", label: "Happy Families" },
    { value: "50+", label: "Projects Delivered" },
    { value: "12", label: "Cities Across India" },
  ];

  const values = [
    { icon: <FaCheckCircle />, title: "Integrity", desc: "We operate with complete transparency, zero hidden charges, and full legal compliance in every transaction." },
    { icon: <FaLeaf />, title: "Sustainability", desc: "Green-certified construction practices, rainwater harvesting, and solar energy integration in all new projects." },
    { icon: <FaHandshake />, title: "Client First", desc: "Every decision is made with our buyers and investors' long-term wealth and happiness as the top priority." },
    { icon: <FaChartLine />, title: "Innovation", desc: "Constantly adopting new technologies in construction, design, and smart home systems to stay ahead." },
  ];

  return (
    <div className="relative w-full bg-dark overflow-hidden font-heading">

      {/* 1. Header */}
      <PageHero
        badge="Our Legacy & Blueprint"
        title="Legacy of Landmark"
        titleHighlight="Horizons"
        subtitle="Discover the values, leadership, and milestones that make MK Developer & Group India's trusted real estate consultants — for over two decades."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80"
        breadcrumb="About Us"
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

      {/* 3. Story Section */}
      <section className="relative py-24 bg-dark/95">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SlideUp>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-gold relative group">
                <img
                  src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80"
                  alt="Our Story"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
              </div>
            </SlideUp>
            <SlideUp className="flex flex-col gap-6 text-left">
              <span className="text-xs font-bold text-accent uppercase tracking-widest bg-primary/10 border border-primary/20 px-3 py-1 rounded-full w-fit">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight uppercase">
                Building Trust Since Day One
              </h2>
              <p className="text-white/70 text-sm font-sans font-light leading-relaxed">
                MK Developer & Group was founded with a single vision — to make premium real estate accessible, transparent, and rewarding for every Indian family. Starting from humble beginnings in Ghaziabad, we have grown into one of North India's most recognized real estate consultancies.
              </p>
              <p className="text-white/70 text-sm font-sans font-light leading-relaxed">
                From luxury high-rise apartments to Grade-A commercial complexes, we have guided over 10,000 families to their dream properties. Our deep market expertise, honest advisory, and unwavering commitment to quality have built us a legacy that speaks for itself.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-2 font-sans">
                {["RERA Registered", "25+ Years Experience", "Pan India Presence", "Zero Hidden Charges"].map((pt, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-white/70">
                    <FaCheckCircle className="text-primary shrink-0" /> {pt}
                  </div>
                ))}
              </div>
            </SlideUp>
          </div>
        </div>
      </section>

      {/* 4. Vision and Mission */}
      <section className="relative py-24 bg-dark border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionTitle subtitle="Purpose & Direction" title="Vision & Mission" align="center" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
            <SlideUp className="glass-dark border border-white/5 p-8 md:p-12 rounded-2xl flex flex-col items-start text-left relative group hover:border-primary/25 transition-all duration-400">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:bg-gold-gradient group-hover:text-white group-hover:border-transparent transition-all duration-300">
                <FaEye className="text-xl" />
              </div>
              <h3 className="text-white font-bold text-2xl mb-4 tracking-tight uppercase">Our Corporate Vision</h3>
              <p className="text-white/70 text-sm font-sans font-light leading-relaxed">
                To redefine urban living by erecting biophilic, sustainable architectural landmarks that enrich generations. We envision a future where structural durability meets artistic elegance to empower zero-emission environments across India's emerging skylines.
              </p>
            </SlideUp>

            <SlideUp className="glass-dark border border-white/5 p-8 md:p-12 rounded-2xl flex flex-col items-start text-left relative group hover:border-primary/25 transition-all duration-400">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:bg-gold-gradient group-hover:text-white group-hover:border-transparent transition-all duration-300">
                <FaBullseye className="text-xl" />
              </div>
              <h3 className="text-white font-bold text-2xl mb-4 tracking-tight uppercase">Our Corporate Mission</h3>
              <p className="text-white/70 text-sm font-sans font-light leading-relaxed">
                To construct state-of-the-art residential and Grade-A commercial properties with total compliance, legal transparency, and zero-compromise engineering — prioritizing our investors' wealth and buyers' happiness through continuous innovation.
              </p>
            </SlideUp>
          </div>
        </div>
      </section>

      {/* 5. Core Values */}
      <section className="relative py-24 bg-dark/95">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[130px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <SectionTitle subtitle="What We Stand For" title="Our Core Values" align="center" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
            {values.map((v, idx) => (
              <SlideUp key={idx} delay={idx * 0.08} className="glass-dark border border-white/5 rounded-2xl p-8 flex flex-col gap-4 hover:border-primary/25 transition-all duration-400 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-xl group-hover:bg-gold-gradient group-hover:text-white group-hover:border-transparent transition-all duration-300">
                  {v.icon}
                </div>
                <h3 className="text-white font-bold text-lg tracking-tight uppercase">{v.title}</h3>
                <p className="text-white/60 text-sm font-sans font-light leading-relaxed">{v.desc}</p>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Timeline — Unique Horizontal Grid Style */}
      <section className="relative py-24 bg-dark border-y border-white/5 overflow-hidden">
        {/* Decorative glows */}
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-primary/8 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <SectionTitle subtitle="The Journey" title="Milestones of Our Legacy" align="center" />

          {/* Desktop: 3+3 grid with connector lines */}
          <div className="mt-16 hidden md:block">
            {/* Top row — odd items */}
            <div className="grid grid-cols-3 gap-px relative">
              {/* Horizontal connector line */}
              <div className="absolute top-full left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-transparent via-primary to-transparent mt-0" />
              {timeline.slice(0, 3).map((item, idx) => (
                <SlideUp
                  key={idx}
                  delay={idx * 0.1}
                  className="group flex flex-col p-8 border border-white/5 rounded-2xl bg-dark-card hover:border-primary/30 hover:bg-dark-card/80 transition-all duration-400 relative mx-3"
                >
                  {/* Large faded year bg */}
                  <span className="absolute bottom-2 right-4 text-7xl font-extrabold text-white/[0.03] select-none font-heading leading-none">
                    {item.year}
                  </span>
                  {/* Year badge */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_#B59455] shrink-0" />
                    <span className="text-sm font-extrabold text-primary tracking-widest font-heading">{item.year}</span>
                    <div className="flex-1 h-px bg-gradient-to-r from-primary/40 to-transparent" />
                  </div>
                  <h4 className="text-white font-bold text-base md:text-lg mb-3 tracking-tight uppercase group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-white/55 text-xs md:text-sm font-sans font-light leading-relaxed">
                    {item.description}
                  </p>
                  {/* Bottom connector dot */}
                  <div className="absolute -bottom-[22px] left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
                    <div className="w-px h-5 bg-primary/40" />
                    <div className="w-4 h-4 rounded-full border-2 border-primary bg-dark shadow-[0_0_10px_#B59455]" />
                    <div className="w-px h-5 bg-primary/40" />
                  </div>
                </SlideUp>
              ))}
            </div>

            {/* Middle horizontal connector */}
            <div className="relative h-10 flex items-center justify-center mx-3">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            </div>

            {/* Bottom row — even items */}
            <div className="grid grid-cols-3 gap-px relative">
              {timeline.slice(3, 6).map((item, idx) => (
                <SlideUp
                  key={idx + 3}
                  delay={(idx + 3) * 0.1}
                  className="group flex flex-col p-8 border border-white/5 rounded-2xl bg-dark-card hover:border-primary/30 hover:bg-dark-card/80 transition-all duration-400 relative mx-3"
                >
                  <span className="absolute bottom-2 right-4 text-7xl font-extrabold text-white/[0.03] select-none font-heading leading-none">
                    {item.year}
                  </span>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-3 h-3 rounded-full bg-accent shadow-[0_0_12px_#F59E0B] shrink-0" />
                    <span className="text-sm font-extrabold text-accent tracking-widest font-heading">{item.year}</span>
                    <div className="flex-1 h-px bg-gradient-to-r from-accent/40 to-transparent" />
                  </div>
                  <h4 className="text-white font-bold text-base md:text-lg mb-3 tracking-tight uppercase group-hover:text-accent transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-white/55 text-xs md:text-sm font-sans font-light leading-relaxed">
                    {item.description}
                  </p>
                </SlideUp>
              ))}
            </div>
          </div>

          {/* Mobile: vertical stacked */}
          <div className="flex flex-col gap-0 mt-12 md:hidden relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
            {timeline.map((item, idx) => (
              <SlideUp key={idx} delay={idx * 0.08} className="flex gap-6 pb-10 relative">
                <div className="shrink-0 flex flex-col items-center z-10">
                  <div className="w-10 h-10 rounded-full bg-dark-card border-2 border-primary flex items-center justify-center shadow-[0_0_14px_#B59455]">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                  </div>
                </div>
                <div className="glass-dark border border-white/5 rounded-2xl p-5 flex-1 hover:border-primary/20 transition-all duration-300">
                  <span className="text-xs font-bold text-primary tracking-widest font-heading bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-3 inline-block">
                    {item.year}
                  </span>
                  <h4 className="text-white font-bold text-base mb-2 tracking-tight uppercase">{item.title}</h4>
                  <p className="text-white/60 text-xs font-sans font-light leading-relaxed">{item.description}</p>
                </div>
              </SlideUp>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Leadership Grid */}
      <section className="relative py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionTitle subtitle="Executive Board" title="The Leadership behind MK Developer & Group" align="center" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
            {team.map((member, idx) => (
              <ZoomIn key={idx} delay={idx * 0.08} className="glass-dark border border-white/5 rounded-2xl overflow-hidden flex flex-col items-center text-center p-6 hover:border-primary/20 transition-all duration-400 group">
                <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-primary/20 mb-6 shrink-0 group-hover:border-primary transition-colors">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="text-white font-bold text-base tracking-tight uppercase mb-1">{member.name}</h4>
                <span className="text-xs font-semibold text-accent uppercase tracking-widest font-heading mb-4 block">{member.role}</span>
                <p className="text-white/50 text-xs font-sans font-light leading-relaxed">{member.bio}</p>
              </ZoomIn>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Bottom CTA */}
      <section className="relative py-20 border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10 text-center flex flex-col items-center gap-6">
          <span className="text-xs font-bold text-accent uppercase tracking-[0.25em] bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full">
            Partner with Us
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Ready to Make Your Move?
          </h2>
          <p className="text-white/60 text-sm font-sans font-light max-w-xl leading-relaxed">
            Join thousands of satisfied investors and homebuyers who trusted MK Developer & Group to secure their future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link to="/contact"><Button variant="primary" className="px-10 py-4 text-xs">Contact Our Team</Button></Link>
            <Link to="/properties"><Button variant="outline" className="px-10 py-4 text-xs">Browse Properties</Button></Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
