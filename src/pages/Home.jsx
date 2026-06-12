import React from 'react';

// Sub-sections
import Hero from '../components/home/Hero';
import AboutSection from '../components/home/AboutSection';
import FeaturedProperties from '../components/home/FeaturedProperties';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Services from '../components/home/Services';
import Statistics from '../components/home/Statistics';
import Testimonials from '../components/home/Testimonials';
import LatestProjects from '../components/home/LatestProjects';
import CTA from '../components/home/CTA';
import Newsletter from '../components/common/Newsletter';

const Home = () => {
  return (
    <div className="relative w-full bg-dark overflow-hidden">
      {/* Dynamic SEO Meta title/headings handled cleanly */}
      <h1 className="sr-only">Hindustan Buildwell - Premium Real Estate Developer in India</h1>
      
      {/* Page layout components */}
      <Hero />
      <FeaturedProperties />
      <AboutSection />
      <Statistics />
      <WhyChooseUs />
      <Services />
      <LatestProjects />
      <Testimonials />
      <CTA />
      <Newsletter />
    </div>
  );
};

export default Home;
