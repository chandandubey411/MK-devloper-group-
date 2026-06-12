import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight, FaHome } from 'react-icons/fa';

const PageHero = ({ badge, title, titleHighlight, subtitle, image, breadcrumb, children }) => {
  return (
    <section className="relative min-h-[420px] md:min-h-[480px] flex items-end pb-16 overflow-hidden border-b border-white/10">

      {/* Background Image — clearly visible */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url('${image}')` }}
      />

      {/* Multi-layer overlay for premium dark feel */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/75 to-dark/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent" />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Gold glow bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="absolute -bottom-20 left-1/4 w-96 h-40 bg-primary/15 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">

        {/* Breadcrumb */}
        {breadcrumb && (
          <div className="flex items-center gap-2 text-[11px] text-white/40 font-sans mb-5 uppercase tracking-widest">
            <Link to="/" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <FaHome className="text-[10px]" /> Home
            </Link>
            <FaChevronRight className="text-[8px]" />
            <span className="text-primary">{breadcrumb}</span>
          </div>
        )}

        {/* Badge */}
        {badge && (
          <span className="inline-flex items-center gap-2 text-[11px] font-bold text-accent uppercase tracking-[0.22em] bg-primary/10 border border-primary/25 px-4 py-1.5 rounded-full mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            {badge}
          </span>
        )}

        {/* Title */}
        <h1 className="font-heading font-extrabold uppercase tracking-tight leading-none mb-5">
          <span className="block text-4xl md:text-6xl lg:text-7xl text-white">{title}</span>
          {titleHighlight && (
            <span className="block text-4xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gold-gradient mt-1">
              {titleHighlight}
            </span>
          )}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-white/60 text-sm md:text-base font-sans font-light max-w-xl leading-relaxed">
            {subtitle}
          </p>
        )}

        {/* Render children (like call to action buttons) */}
        {children && (
          <div className="mt-8 relative z-20">
            {children}
          </div>
        )}

        {/* Decorative line */}
        {!children && (
          <div className="flex items-center gap-4 mt-8">
            <div className="w-12 h-[3px] bg-gold-gradient rounded-full" />
            <div className="w-4 h-[3px] bg-primary/40 rounded-full" />
            <div className="w-2 h-[3px] bg-primary/20 rounded-full" />
          </div>
        )}

      </div>
    </section>
  );
};

export default PageHero;
