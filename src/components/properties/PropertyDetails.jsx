import React, { useState } from 'react';
import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt, FaCheckCircle, FaPaperPlane, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Button from '../common/Button';
import SlideUp from '../animations/SlideUp';

const PropertyDetails = ({ property }) => {
  const [activeImage, setActiveImage] = useState(property.images[0]);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryMsg, setInquiryMsg] = useState('I am interested in acquiring more details on Skyline Residences. Please assign a premium advisor.');
  const [submitted, setSubmitted] = useState(false);

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setInquiryName('');
    setInquiryEmail('');
    setInquiryPhone('');
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className="font-heading">
      
      {/* Upper Area: Dynamic Interactive Image Gallery */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        
        {/* Main large active view */}
        <div className="lg:col-span-2 relative aspect-[16/10] md:aspect-[16/9] rounded-2xl overflow-hidden border border-white/5 shadow-glow">
          <img
            src={activeImage}
            alt={property.title}
            className="w-full h-full object-cover transition-all duration-500"
          />
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wider bg-gold-gradient text-white px-3 py-1 rounded">
              {property.badge || 'Premium'}
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-wider bg-dark/80 backdrop-blur-sm border border-white/10 text-white px-3 py-1 rounded">
              {property.type}
            </span>
          </div>
        </div>

        {/* Vertical/Horizontal grid of other thumbnails */}
        <div className="flex flex-row lg:flex-col gap-4 overflow-x-auto lg:overflow-x-visible shrink-0 lg:max-h-[480px]">
          {property.images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImage(img)}
              className={`relative aspect-[3/2] w-24 md:w-32 lg:w-full rounded-xl overflow-hidden border-2 shrink-0 transition-all duration-300 ${
                activeImage === img ? 'border-primary shadow-gold' : 'border-white/10 opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={img}
                alt={`${property.title} gallery thumbnail ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

      </div>

      {/* Main split details area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        
        {/* Left 2 columns: Complete features list */}
        <div className="lg:col-span-2 flex flex-col gap-10">
          
          {/* Header titles */}
          <div className="flex flex-col text-left">
            <div className="flex items-center gap-1.5 text-xs text-white/50 mb-3 font-sans">
              <FaMapMarkerAlt className="text-primary" />
              <span>{property.address}, {property.city}, {property.state}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
              {property.title}
            </h1>
            <span className="text-2xl md:text-3xl font-extrabold text-accent font-sans">
              {property.priceLabel}
            </span>
          </div>

          {/* Quick Specifications */}
          <div className="grid grid-cols-3 gap-4 p-4 rounded-xl border border-white/5 bg-dark-card text-white text-xs md:text-sm font-heading">
            {property.bedrooms > 0 && (
              <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-white/5 border border-white/5">
                <FaBed className="text-primary text-lg mb-1.5" />
                <span className="text-white/60 text-[10px] uppercase font-sans mb-0.5">Bedrooms</span>
                <span className="font-bold text-sm">{property.bedrooms} Beds</span>
              </div>
            )}
            {property.bathrooms > 0 && (
              <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-white/5 border border-white/5">
                <FaBath className="text-primary text-lg mb-1.5" />
                <span className="text-white/60 text-[10px] uppercase font-sans mb-0.5">Bathrooms</span>
                <span className="font-bold text-sm">{property.bathrooms} Baths</span>
              </div>
            )}
            <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-white/5 border border-white/5">
              <FaRulerCombined className="text-primary text-lg mb-1.5" />
              <span className="text-white/60 text-[10px] uppercase font-sans mb-0.5">Total Area</span>
              <span className="font-bold text-sm">{property.area} {property.areaUnit}</span>
            </div>
          </div>

          {/* Description */}
          <div className="flex flex-col items-start text-left border-t border-white/5 pt-8">
            <h3 className="text-white font-bold text-lg uppercase tracking-wider mb-4">
              Executive Description
            </h3>
            <p className="text-white/70 text-sm md:text-base font-sans font-light leading-relaxed mb-6">
              {property.description}
            </p>
          </div>

          {/* Highlights & Features */}
          <div className="flex flex-col items-start text-left border-t border-white/5 pt-8">
            <h3 className="text-white font-bold text-lg uppercase tracking-wider mb-6">
              Executive Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full font-sans">
              {property.features.map((feature, idx) => (
                <div key={idx} className="flex gap-3 items-center">
                  <FaCheckCircle className="text-primary shrink-0 text-sm" />
                  <span className="text-white/70 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Amenities details */}
          <div className="flex flex-col items-start text-left border-t border-white/5 pt-8">
            <h3 className="text-white font-bold text-lg uppercase tracking-wider mb-6">
              Exclusive Amenities
            </h3>
            <div className="flex flex-wrap gap-3">
              {property.amenities.map((amenity, idx) => (
                <span key={idx} className="amenity-tag">
                  {amenity}
                </span>
              ))}
            </div>
          </div>

          {/* Luxury Floor Plan Layout section */}
          <div className="flex flex-col items-start text-left border-t border-white/5 pt-8 mb-4">
            <h3 className="text-white font-bold text-lg uppercase tracking-wider mb-6">
              Executive Floor Plan Overview
            </h3>
            <div className="glass-dark border border-white/5 p-6 rounded-2xl w-full flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-48 aspect-square rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/30 text-xs font-sans shrink-0 uppercase tracking-widest">
                [ 2D Plan View Mockup ]
              </div>
              <div className="flex-grow text-left">
                <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-2">Architectural Blueprint Scheme</h4>
                <p className="text-white/50 text-xs font-sans leading-relaxed mb-4">
                  Includes master suite blueprint with biophilic vents, spacious double-height balconies, centralized smart lighting duct, and modular Italian pantry allocation.
                </p>
                <div className="flex gap-6 text-[11px] text-accent uppercase font-bold tracking-wide font-sans">
                  <span>Balcony: 180 sq.ft</span>
                  <span>Living Lobby: 420 sq.ft</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right 1 column: Corporate Inquiry Form Panel */}
        <SlideUp className="glass-dark border border-primary/20 p-6 md:p-8 rounded-2xl relative lg:sticky lg:top-28 shadow-glow">
          <span className="text-[10px] font-bold text-accent uppercase tracking-widest bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-4 inline-block">
            Secure Advisory Call
          </span>
          <h3 className="text-white font-bold text-lg uppercase tracking-wider mb-2 text-left">
            Inquire Asset Details
          </h3>
          <p className="text-white/50 text-xs font-sans leading-relaxed mb-6 text-left">
            Enlist your details to connect with a senior portfolio advisor on the acquisition details.
          </p>

          {submitted ? (
            <div className="flex flex-col items-center gap-3 text-center p-6 bg-primary/10 border border-primary/20 rounded-xl">
              <FaCheckCircle className="text-primary text-4xl animate-bounce-slow" />
              <h4 className="text-white font-semibold text-sm">Advisory Registered!</h4>
              <p className="text-[11px] text-white/50 font-sans">A designated advisor will email or call you within 1 hour.</p>
            </div>
          ) : (
            <form onSubmit={handleInquirySubmit} className="flex flex-col gap-4 text-left">
              
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-accent uppercase tracking-wider">Full Name</label>
                <input
                  type="text"
                  required
                  value={inquiryName}
                  onChange={(e) => setInquiryName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-lg bg-dark/60 text-white placeholder-white/35 border border-white/10 text-xs focus:border-primary font-sans transition-all duration-300"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-accent uppercase tracking-wider">Corporate Email</label>
                <input
                  type="email"
                  required
                  value={inquiryEmail}
                  onChange={(e) => setInquiryEmail(e.target.value)}
                  placeholder="Enter corporate email"
                  className="w-full px-4 py-3 rounded-lg bg-dark/60 text-white placeholder-white/35 border border-white/10 text-xs focus:border-primary font-sans transition-all duration-300"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-accent uppercase tracking-wider">Phone / WhatsApp</label>
                <input
                  type="tel"
                  required
                  value={inquiryPhone}
                  onChange={(e) => setInquiryPhone(e.target.value)}
                  placeholder="e.g. +91 98765-XXXXX"
                  className="w-full px-4 py-3 rounded-lg bg-dark/60 text-white placeholder-white/35 border border-white/10 text-xs focus:border-primary font-sans transition-all duration-300"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-accent uppercase tracking-wider">Message Description</label>
                <textarea
                  rows="3"
                  value={inquiryMsg}
                  onChange={(e) => setInquiryMsg(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-dark/60 text-white placeholder-white/35 border border-white/10 text-xs focus:border-primary font-sans transition-all duration-300 resize-none"
                />
              </div>

              <Button type="submit" variant="primary" className="w-full py-3.5 text-xs font-heading">
                Acquire Advisory Call <FaPaperPlane className="text-[10px]" />
              </Button>

            </form>
          )}

          {/* Quick contact direct dials */}
          <div className="mt-6 pt-6 border-t border-white/5 flex flex-col gap-2.5 text-[10px] text-white/50 font-sans text-left">
            <span className="flex items-center gap-2"><FaPhoneAlt className="text-primary" /> +91 80100 29100</span>
            <span className="flex items-center gap-2"><FaEnvelope className="text-primary" /> mkdevelopers2002@gmail.com</span>
          </div>

        </SlideUp>

      </div>

    </div>
  );
};

export default PropertyDetails;
