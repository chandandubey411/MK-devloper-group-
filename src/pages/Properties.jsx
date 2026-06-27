import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { properties } from '../data/properties';
import SectionTitle from '../components/common/SectionTitle';
import PropertyFilter from '../components/properties/PropertyFilter';
import PropertyGrid from '../components/properties/PropertyGrid';
import PageHero from '../components/common/PageHero';

const Properties = () => {
  const [searchParams] = useSearchParams();

  // Search filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedBeds, setSelectedBeds] = useState('');
  const [priceRange, setPriceRange] = useState(100000000); // 10 Cr max
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [loading, setLoading] = useState(false);

  // Extract unique cities & categories for dropdown selectors
  const uniqueCities = [...new Set(properties.map((p) => p.city))].sort();
  const uniqueTypes = [...new Set(properties.map((p) => p.type))].sort();

  // Load URL parameters on mount
  useEffect(() => {
    const urlCity = searchParams.get('city');
    const urlType = searchParams.get('type');

    if (urlCity) setSelectedCity(urlCity);
    if (urlType) setSelectedType(urlType);
  }, [searchParams]);

  // Handle active filter computations
  useEffect(() => {
    setLoading(true);
    const delayTimer = setTimeout(() => {
      let results = properties;

      // Filter by Search Query (title or description)
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        results = results.filter(
          (p) =>
            p.title.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query)
        );
      }

      // Filter by City
      if (selectedCity) {
        results = results.filter((p) => p.city === selectedCity);
      }

      // Filter by Category Type
      if (selectedType) {
        results = results.filter((p) => p.type === selectedType);
      }

      // Filter by Budget
      if (priceRange < 100000000) {
        results = results.filter((p) => p.price <= priceRange);
      }

      // Filter by Bedrooms Space
      if (selectedBeds) {
        if (selectedBeds === 'commercial') {
          results = results.filter((p) => p.bedrooms === 0);
        } else if (selectedBeds === '5') {
          results = results.filter((p) => p.bedrooms >= 5);
        } else {
          results = results.filter((p) => p.bedrooms === Number(selectedBeds));
        }
      }

      setFilteredProperties(results);
      setLoading(false);
    }, 300);

    return () => clearTimeout(delayTimer);
  }, [searchQuery, selectedCity, selectedType, priceRange, selectedBeds]);

  // Clear all filters action
  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCity('');
    setSelectedType('');
    setSelectedBeds('');
    setPriceRange(100000000);
  };

  return (
    <div className="relative w-full bg-dark overflow-hidden font-heading">
      
      {/* 1. Header Banner */}
      <PageHero
        badge="Elite Listings Circle"
        title="Signature Luxury"
        titleHighlight="Properties"
        subtitle="Acquire bespoke apartments, signature penthouses and futuristic corporate sites across India's premier hubs."
        image="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1600&q=80"
        breadcrumb="Properties"
      />

      {/* 2. Interactive Filtering catalog list */}
      <section className="relative py-20 bg-dark min-h-[600px]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <PropertyFilter
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedCity={selectedCity}
            setSelectedCity={setSelectedCity}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            selectedBeds={selectedBeds}
            setSelectedBeds={setSelectedBeds}
            cities={uniqueCities}
            types={uniqueTypes}
            onClearFilters={handleClearFilters}
          />

          {/* Catalog grid results */}
          <div className="mb-10 text-left">
            <span className="text-xs font-semibold text-white/50 font-sans">
              Showing elite estates matching your specifications
            </span>
          </div>

          <PropertyGrid properties={filteredProperties} loading={loading} />

        </div>
      </section>

    </div>
  );
};

export default Properties;
