import React, { useState } from 'react';
import PropertyCard from './PropertyCard';
import SlideUp from '../animations/SlideUp';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const INITIAL_COUNT = 8;

const PropertyGrid = ({ properties = [], loading = false }) => {
  const [showAll, setShowAll] = useState(false);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-dark-card rounded-2xl overflow-hidden border border-white/5 h-[480px] skeleton" />
        ))}
      </div>
    );
  }

  if (properties.length === 0) {
    return (
      <SlideUp className="flex flex-col items-center justify-center py-20 text-center max-w-md mx-auto">
        <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-2xl mb-6">
          🔍
        </div>
        <h3 className="text-xl font-bold tracking-tight text-white mb-2 uppercase font-heading">
          No Luxury Estates Found
        </h3>
        <p className="text-white/60 text-sm font-sans font-light leading-relaxed">
          We couldn't find any premium properties matching your exact search parameters. Try adjusting your location, price slider, or property type filters.
        </p>
      </SlideUp>
    );
  }

  const visibleProperties = showAll ? properties : properties.slice(0, INITIAL_COUNT);
  const hasMore = properties.length > INITIAL_COUNT;

  return (
    <div className="flex flex-col gap-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      {/* Show More / Show Less */}
      {hasMore && (
        <div className="flex flex-col items-center gap-3 mt-4">
          {/* Progress bar */}
          <div className="w-full max-w-xs h-1 bg-white/5 rounded-full overflow-hidden">
            <div
              className="h-full bg-gold-gradient rounded-full transition-all duration-500"
              style={{ width: `${Math.min((visibleProperties.length / properties.length) * 100, 100)}%` }}
            />
          </div>
          <button
            onClick={() => {
              setShowAll(!showAll);
              if (showAll) window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group mt-2 flex items-center gap-3 px-10 py-4 rounded-xl border border-primary/30 text-primary font-heading font-bold text-xs uppercase tracking-widest hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-glow"
          >
            {showAll ? (
              <>
                <FaChevronUp className="group-hover:-translate-y-0.5 transition-transform" />
                Show Less
              </>
            ) : (
              <>
                Show More Properties
                <FaChevronDown className="group-hover:translate-y-0.5 transition-transform" />
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default PropertyGrid;
