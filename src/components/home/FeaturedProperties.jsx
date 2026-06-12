import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { properties } from '../../data/properties';
import SectionTitle from '../common/SectionTitle';
import PropertyCard from '../properties/PropertyCard';
import Button from '../common/Button';

const FeaturedProperties = () => {
  // Fetch first 3 featured properties
  const featuredList = properties.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="relative py-24 bg-dark/95 border-y border-white/5 overflow-hidden font-heading">
      {/* Decorative background light blur */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <SectionTitle
            subtitle="Curated Selections"
            title="Our Signature Developments"
            align="left"
            className="mb-0"
          />
          <Link to="/properties" className="shrink-0">
            <Button variant="outline" className="px-6 py-2.5 text-xs flex items-center gap-2">
              Browse Full Catalog <FaArrowRight className="text-[10px]" />
            </Button>
          </Link>
        </div>

        {/* Property cards list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredList.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedProperties;
