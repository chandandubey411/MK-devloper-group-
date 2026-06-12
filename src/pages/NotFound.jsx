import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSearch } from 'react-icons/fa';
import Button from '../components/common/Button';

const NotFound = () => {
  return (
    <div className="relative w-full min-h-screen bg-dark py-24 flex items-center justify-center font-heading">
      
      {/* Background radial overlays */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-md mx-auto text-center px-4 relative z-10">
        
        {/* Error Code visual badge */}
        <span className="text-8xl font-black tracking-widest text-primary/10 select-none block mb-4">
          404
        </span>

        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-3 uppercase">
          Horizon Lost in Transit
        </h2>
        
        <p className="text-white/60 text-xs md:text-sm font-sans font-light leading-relaxed mb-8">
          The structural pathway or catalog page you requested does not exist or may have been restricted to private listings.
        </p>

        {/* Back triggers */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Link to="/" className="w-full sm:w-auto">
            <Button variant="primary" className="w-full px-6 py-2.5 text-xs">
              <FaHome className="text-[10px]" /> Back Home
            </Button>
          </Link>
          <Link to="/properties" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full px-6 py-2.5 text-xs">
              <FaSearch className="text-[10px]" /> Search Properties
            </Button>
          </Link>
        </div>

      </div>

    </div>
  );
};

export default NotFound;
