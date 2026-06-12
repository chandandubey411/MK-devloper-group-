import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt, FaHeart, FaRegHeart, FaArrowRight } from 'react-icons/fa';
import ZoomIn from '../animations/ZoomIn';

const PropertyCard = ({ property }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Formatting currency in Indian format
  const formatPrice = (num) => {
    return num.toLocaleString('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    });
  };

  return (
    <ZoomIn>
      <div className="property-card group flex flex-col h-full font-heading overflow-hidden relative">
        {/* Card Image Wrapper */}
        <div className="relative property-image overflow-hidden aspect-[4/3] z-0">
          <img
            src={property.images[0]}
            alt={property.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out"
          />

          {/* Badges Overlay */}
          <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
            <span className="text-[10px] font-bold uppercase tracking-wider bg-gold-gradient text-white px-3 py-1 rounded shadow-md">
              {property.badge || 'Premium'}
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-wider bg-dark/80 backdrop-blur-sm text-white px-3 py-1 rounded shadow-md border border-white/10 self-start">
              {property.type}
            </span>
          </div>

          {/* Wishlist Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsWishlisted(!isWishlisted);
            }}
            className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-dark/60 backdrop-blur-sm border border-white/15 flex items-center justify-center text-white hover:text-primary transition-all duration-300 transform active:scale-90"
            aria-label="Wishlist property"
          >
            {isWishlisted ? (
              <FaHeart className="w-4 h-4 text-primary" />
            ) : (
              <FaRegHeart className="w-4 h-4" />
            )}
          </button>

          {/* Price Glass Overlay */}
          <div className="absolute bottom-4 left-4 z-10 bg-dark/70 backdrop-blur-sm border border-white/10 px-3.5 py-1.5 rounded-lg">
            <span className="text-sm font-bold text-accent font-heading tracking-wide">
              {property.priceLabel}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 flex flex-col flex-grow relative z-10 bg-dark-card border-x border-b border-white/5 group-hover:border-primary/20 transition-all duration-400">
          <div className="flex items-center gap-1.5 text-xs text-white/50 mb-3 font-sans font-light">
            <FaMapMarkerAlt className="text-primary text-[10px]" />
            <span>{property.address}</span>
          </div>

          <h3 className="text-lg md:text-xl font-bold tracking-tight text-white mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-1">
            <Link to={`/properties/${property.slug}`}>{property.title}</Link>
          </h3>

          <p className="text-white/60 text-xs md:text-sm font-sans font-light line-clamp-2 mb-6 leading-relaxed">
            {property.description}
          </p>

          {/* Amenities Grid */}
          <div className="grid grid-cols-3 gap-2 py-4 border-t border-white/5 text-white/80 text-xs mb-6 font-heading">
            {property.bedrooms > 0 && (
              <div className="flex flex-col items-center justify-center p-2 rounded bg-white/5 border border-white/5">
                <FaBed className="text-primary mb-1 text-[13px]" />
                <span className="font-semibold">{property.bedrooms} Beds</span>
              </div>
            )}
            {property.bathrooms > 0 && (
              <div className="flex flex-col items-center justify-center p-2 rounded bg-white/5 border border-white/5">
                <FaBath className="text-primary mb-1 text-[13px]" />
                <span className="font-semibold">{property.bathrooms} Baths</span>
              </div>
            )}
            <div className="flex flex-col items-center justify-center p-2 rounded bg-white/5 border border-white/5">
              <FaRulerCombined className="text-primary mb-1 text-[13px]" />
              <span className="font-semibold text-center leading-none mt-0.5">{property.area} <span className="text-[9px] block uppercase font-light text-white/40">{property.areaUnit}</span></span>
            </div>
          </div>

          {/* Action button */}
          <div className="mt-auto">
            <Link
              to={`/properties/${property.slug}`}
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg border border-primary/20 text-white/80 font-semibold text-xs uppercase tracking-wider bg-white/5 group-hover:bg-gold-gradient group-hover:text-white group-hover:border-transparent transition-all duration-300 transform active:scale-[0.98]"
            >
              View Property <FaArrowRight className="text-[10px] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </ZoomIn>
  );
};

export default PropertyCard;
