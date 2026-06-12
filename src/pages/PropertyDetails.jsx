import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { properties } from '../data/properties';
import PropertyDetailsComponent from '../components/properties/PropertyDetails';
import Button from '../components/common/Button';

const PropertyDetails = () => {
  const { slug } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const item = properties.find((p) => p.slug === slug);
    if (item) {
      setProperty(item);
    }
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <div className="relative w-full min-h-screen bg-dark py-24 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full border-4 border-primary border-t-transparent animate-spin" />
      </div>
    );
  }

  if (!property) {
    return (
      <div className="relative w-full min-h-screen bg-dark py-24 flex items-center justify-center font-heading">
        <div className="max-w-md mx-auto text-center px-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-2xl mx-auto mb-6">
            ⚠️
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-white mb-2 uppercase">
            Luxury Estate Not Found
          </h2>
          <p className="text-white/60 text-xs md:text-sm font-sans font-light leading-relaxed mb-8">
            The private offering you are attempting to review may have been archived or successfully acquired. Explore other active listings.
          </p>
          <Link to="/properties">
            <Button variant="primary" className="px-6 py-2.5 text-xs">
              <FaArrowLeft className="text-[10px]" /> Back to Catalog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full bg-dark overflow-hidden py-12 md:py-16">
      
      {/* Dynamic Background spheres */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Navigation back */}
        <div className="flex justify-start mb-8 text-left">
          <Link to="/properties" className="inline-flex items-center gap-2 text-xs font-semibold text-white/50 hover:text-primary transition-colors uppercase tracking-widest">
            <FaArrowLeft className="text-[9px]" /> Back to Catalog
          </Link>
        </div>

        {/* Detailed reusable information template */}
        <PropertyDetailsComponent property={property} />

      </div>

    </div>
  );
};

export default PropertyDetails;
