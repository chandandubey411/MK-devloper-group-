import React from 'react';
import { FaSearch, FaMapMarkerAlt, FaHome, FaRupeeSign, FaSlidersH } from 'react-icons/fa';
import Button from '../common/Button';

const PropertyFilter = ({
  searchQuery,
  setSearchQuery,
  selectedCity,
  setSelectedCity,
  selectedType,
  setSelectedType,
  priceRange,
  setPriceRange,
  selectedBeds,
  setSelectedBeds,
  cities = [],
  types = [],
  onClearFilters
}) => {
  return (
    <div className="glass-dark gold-border-glow p-6 md:p-8 rounded-2xl relative z-20 font-heading mb-12 shadow-glow">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Keyword Search */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-accent uppercase tracking-wider flex items-center gap-1.5">
            <FaSearch className="text-[10px]" /> Search Keyword
          </label>
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="e.g. Skyline Residences, Penthouse"
              className="w-full pl-5 pr-4 py-3 rounded-lg bg-dark/60 text-white placeholder-white/30 border border-white/10 text-sm focus:border-primary font-sans transition-all duration-300"
            />
          </div>
        </div>

        {/* City Filter */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-accent uppercase tracking-wider flex items-center gap-1.5">
            <FaMapMarkerAlt className="text-[10px]" /> Location / City
          </label>
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="w-full px-5 py-3 rounded-lg bg-dark/60 text-white border border-white/10 text-sm focus:border-primary font-sans transition-all duration-300"
          >
            <option value="">All Indian Cities</option>
            {cities.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>

        {/* Property Type Filter */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-accent uppercase tracking-wider flex items-center gap-1.5">
            <FaHome className="text-[10px]" /> Property Category
          </label>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full px-5 py-3 rounded-lg bg-dark/60 text-white border border-white/10 text-sm focus:border-primary font-sans transition-all duration-300"
          >
            <option value="">All Categories</option>
            {types.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        {/* Bedrooms Filter */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-accent uppercase tracking-wider flex items-center gap-1.5">
            🛏️ Bedrooms Space
          </label>
          <select
            value={selectedBeds}
            onChange={(e) => setSelectedBeds(e.target.value)}
            className="w-full px-5 py-3 rounded-lg bg-dark/60 text-white border border-white/10 text-sm focus:border-primary font-sans transition-all duration-300"
          >
            <option value="">Any Bedrooms</option>
            <option value="2">2 Bedrooms</option>
            <option value="3">3 Bedrooms</option>
            <option value="4">4 Bedrooms</option>
            <option value="5">5+ Bedrooms</option>
            <option value="commercial">Commercial (No Beds)</option>
          </select>
        </div>

      </div>

      {/* Expanded Filters Bottom Area (Budgets Slider) */}
      <div className="mt-8 pt-6 border-t border-white/5 flex flex-col lg:flex-row items-center justify-between gap-6">
        
        {/* Budget Selector */}
        <div className="flex flex-col gap-2 w-full lg:w-[60%]">
          <div className="flex justify-between items-center text-xs font-bold text-accent uppercase tracking-wider mb-1">
            <span className="flex items-center gap-1"><FaRupeeSign className="text-[9px]" /> Max Investment Budget</span>
            <span className="text-white font-sans tracking-wide">
              {priceRange === 150000000 ? 'Any Budget' : `Under ₹${(priceRange / 10000000).toFixed(2)} Cr`}
            </span>
          </div>
          <input
            type="range"
            min="5000000"
            max="150000000"
            step="5000000"
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
            className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <div className="flex justify-between text-[10px] text-white/40 mt-1 font-sans">
            <span>₹50 Lakhs</span>
            <span>₹5 Crore</span>
            <span>₹10 Crore</span>
            <span>₹15 Crore+</span>
          </div>
        </div>

        {/* Clear Actions */}
        <div className="w-full lg:w-auto flex justify-end gap-3 self-end">
          <Button
            variant="outline"
            onClick={onClearFilters}
            className="px-6 py-2.5 text-xs tracking-wider"
          >
            Clear Filters
          </Button>
        </div>

      </div>
    </div>
  );
};

export default PropertyFilter;
