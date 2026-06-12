import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  onClick,
  type = 'button',
  className = '',
  disabled = false,
}) => {
  const baseStyle = "relative overflow-hidden inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-heading text-sm font-semibold tracking-wider transition-all duration-300 transform uppercase active:scale-95";
  
  const variants = {
    primary: "bg-gold-gradient text-white shadow-gold hover:shadow-gold-lg hover:-translate-y-0.5 border border-transparent",
    outline: "bg-transparent text-primary hover:text-white border border-primary/60 hover:bg-gold-gradient hover:border-transparent hover:-translate-y-0.5 hover:shadow-gold",
    glass: "glass text-white hover:bg-white/10 border border-white/20 hover:-translate-y-0.5",
    accent: "bg-secondary text-white hover:bg-primary border border-primary/20 hover:-translate-y-0.5 shadow-dark",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000" />
    </button>
  );
};

export default Button;
