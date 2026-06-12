import React from 'react';
import SlideUp from '../animations/SlideUp';

const SectionTitle = ({
  subtitle,
  title,
  align = 'center',
  className = '',
}) => {
  const alignClasses = {
    center: 'text-center mx-auto items-center',
    left: 'text-left items-start',
    right: 'text-right items-end',
  };

  return (
    <SlideUp className={`flex flex-col mb-12 md:mb-16 max-w-3xl ${alignClasses[align]} ${className}`}>
      {subtitle && (
        <span className="text-xs md:text-sm font-heading font-bold text-accent uppercase tracking-widest mb-3 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-white mb-4">
        {title}
      </h2>
      <div className="w-20 h-1 bg-gold-gradient rounded-full" />
    </SlideUp>
  );
};

export default SectionTitle;
