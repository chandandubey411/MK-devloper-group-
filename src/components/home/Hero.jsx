import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaMapMarkerAlt, FaHome, FaArrowRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../common/Button';

const Hero = () => {
  const navigate = useNavigate();
  const [city, setCity] = useState('');
  const [type, setType] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&q=80",
      tagline: "India's Finest Penthouses & Estates",
      title: "Building Landmark Properties Across India",
    },
    {
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1600&q=80",
      tagline: "High-End Grade-A Offices & Hubs",
      title: "Redefining Corporate Infrastructure",
    },
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80",
      tagline: "Zero-Carbon Smart Townships",
      title: "Building India's Smart Future",
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    let queryParams = [];
    if (city) queryParams.push(`city=${encodeURIComponent(city)}`);
    if (type) queryParams.push(`type=${encodeURIComponent(type)}`);
    
    navigate(`/properties${queryParams.length > 0 ? `?${queryParams.join('&')}` : ''}`);
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center font-heading overflow-hidden bg-dark">
      {/* Background Images with Slide Overlay Fade */}
      <div className="absolute inset-0 w-full h-full z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 1.5, ease: 'easeOut' } }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroSlides[currentSlide].image})` }}
          />
        </AnimatePresence>
        
        {/* Dark Premium Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/75 to-dark/40 z-10" />
      </div>

      {/* Floating Graphic Blurs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-primary/10 blur-[80px] z-0 animate-float pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-accent/5 blur-[120px] z-0 animate-float-delay pointer-events-none" />

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-24 md:pt-32 pb-20 relative z-20 w-full text-center flex flex-col items-center">
        
        {/* Tagline Badge */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-accent bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full mb-6"
        >
          Building India's Future, One Landmark at a Time
        </motion.span>

        {/* Dynamic Changing Main Header Title */}
        <AnimatePresence mode="wait">
          <motion.h1
            key={currentSlide}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 max-w-5xl leading-tight"
          >
            {heroSlides[currentSlide].title}
          </motion.h1>
        </AnimatePresence>

        {/* Static Corporate Description Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-white/70 text-sm sm:text-base md:text-lg font-sans font-light max-w-2xl mb-12 leading-relaxed"
        >
          MK Developer & Group delivers premium residential, luxury commercial and core infrastructure projects with world-class quality and innovation.
        </motion.p>

        {/* Interactive Luxury Search Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="w-full max-w-4xl glass-dark gold-border-glow p-4 md:p-6 rounded-2xl shadow-glow relative z-30 mb-10"
        >
          <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
            
            {/* Select Location */}
            <div className="flex flex-col gap-2 text-left">
              <label className="text-[10px] font-bold text-accent uppercase tracking-wider flex items-center gap-1.5">
                <FaMapMarkerAlt className="text-[9px]" /> Location / City
              </label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-dark/60 text-white border border-white/10 text-xs focus:border-primary font-sans transition-all duration-300"
              >
                <option value="">Select City</option>
                <option value="Indraprastha Yojna Pocket D">Indraprastha Yojna Pocket D</option>
                <option value="Rajender Nagar Sahibabad">Rajender Nagar Sahibabad</option>
                <option value="Shalimar garden Ghaziabad">Shalimar garden Ghaziabad</option>
                <option value="Vaishali">Vaishali</option>
                <option value="Indirapuram">Indirapuram</option>
                <option value="Vasundhara">Vasundhara</option>
                <option value="Noida">Noida</option>
                <option value="Dwarika City Lal Kuan">Dwarika City Lal Kuan</option>
                <option value="DLF Ankur Vihar Ghaziabad">DLF Ankur Vihar Ghaziabad</option>
              </select>
            </div>

            {/* Select Property Type */}
            <div className="flex flex-col gap-2 text-left">
              <label className="text-[10px] font-bold text-accent uppercase tracking-wider flex items-center gap-1.5">
                <FaHome className="text-[9px]" /> Property Category
              </label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-dark/60 text-white border border-white/10 text-xs focus:border-primary font-sans transition-all duration-300"
              >
                <option value="">Select Category</option>
                <option value="Flats">Flats</option>
                <option value="Independent floor">Independent floor</option>
                <option value="Apartments">Apartments</option>
                <option value="Commercial Space">Commercial Space</option>
                <option value="Villas">Villas</option>
              </select>
            </div>

            {/* Search Button */}
            <div className="w-full">
              <Button type="submit" variant="primary" className="w-full py-3.5 text-xs">
                Inquire Properties <FaSearch className="text-[10px]" />
              </Button>
            </div>

          </form>
        </motion.div>

        {/* Interactive Floating Quick Actions CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-wrap justify-center items-center gap-6 mt-2"
        >
          <a href="/properties" className="text-white/60 text-xs font-semibold uppercase tracking-wider hover:text-primary transition-colors flex items-center gap-2">
            Explore Premium Catalog <FaArrowRight className="text-[9px]" />
          </a>
          <span className="hidden sm:inline w-[1px] h-3 bg-white/15" />
          <a href="/about" className="text-white/60 text-xs font-semibold uppercase tracking-wider hover:text-primary transition-colors">
            Our Legacy
          </a>
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;
