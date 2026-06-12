import React, { useState } from 'react';
import { FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import Button from './Button';
import SlideUp from '../animations/SlideUp';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail('');
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section className="relative py-24 bg-dark overflow-hidden font-heading">
      {/* Dynamic glow overlays */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
        <SlideUp className="glass-dark gold-border-glow p-8 md:p-16 rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <span className="text-xs font-bold text-accent uppercase tracking-widest bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-3 inline-block">
              Exclusive Insights
            </span>
            <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4 mt-2">
              Subscribe to Our Private Catalog
            </h3>
            <p className="text-white/60 text-sm md:text-base font-sans font-light max-w-lg leading-relaxed">
              Stay ahead of the market. Get access to pre-launch offerings, private investment reports and elite real estate opportunities in India.
            </p>
          </div>

          <div className="w-full lg:w-auto shrink-0 flex-1">
            {submitted ? (
              <div className="flex flex-col items-center gap-3 text-center p-6 bg-primary/10 border border-primary/25 rounded-xl">
                <FaCheckCircle className="text-primary text-4xl animate-bounce-slow" />
                <h4 className="text-white font-semibold text-lg">Thank You for Subscribing!</h4>
                <p className="text-xs text-white/60 font-sans">You have been enrolled in our private elite investor catalog circle.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto lg:mx-0">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your corporate email address"
                  required
                  className="flex-1 px-5 py-4 rounded-lg bg-dark/60 text-white placeholder-white/40 border border-white/10 focus:border-primary text-sm transition-all duration-300 font-sans"
                />
                <Button type="submit" variant="primary" className="py-4 shrink-0 font-heading">
                  Join Elite Circle <FaPaperPlane className="text-xs" />
                </Button>
              </form>
            )}
          </div>
        </SlideUp>
      </div>
    </section>
  );
};

export default Newsletter;
