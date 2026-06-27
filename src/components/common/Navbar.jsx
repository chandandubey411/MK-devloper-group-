import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when routing occurs
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Properties", path: "/properties" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Top Bar for sleek Corporate appearance */}
      <div className="hidden lg:flex w-full bg-dark border-b border-white/5 py-2.5 px-8 justify-between text-xs text-white/60 z-[1001] relative font-heading">
        <div className="flex items-center gap-6">
          <a
            href="mailto:mkdevelopers2002@gmail.com"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <FaEnvelope className="text-primary text-[11px]" />{" "}
            mkdevelopers2002@gmail.com
          </a>
          <span className="w-[1px] h-3 bg-white/10" />
          <a
            href="tel:+918010029100"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <FaPhoneAlt className="text-primary text-[11px]" /> +91 80100 29100
          </a>
        </div>
        <div className="tracking-wide">
          BUILDING INDIA'S FUTURE, ONE LANDMARK AT A TIME
        </div>
      </div>

      <nav
        className={`fixed top-0 lg:top-[38px] left-0 w-full z-[1000] py-3 lg:py-4 transition-all duration-500 font-heading ${
          isScrolled
            ? "bg-dark/95 border-b border-primary/20 backdrop-blur-md shadow-glow"
            : "bg-dark/90 backdrop-blur-sm border-b border-white/5 lg:bg-transparent lg:backdrop-blur-none"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 md:gap-3">
            {/* Logo Image */}
            <div className="flex items-center justify-center">
              <img
                src="/logo.png"
                alt="MK Developer Group"
                className="h-9 w-auto md:h-12 lg:h-14 object-contain"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col leading-tight">
              <span className="text-sm md:text-lg lg:text-xl font-extrabold tracking-wider text-white uppercase">
                MK Developer
              </span>
              <span className="text-[10px] md:text-xs lg:text-sm font-medium tracking-[0.2em] text-primary uppercase">
                Group
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-semibold tracking-wider transition-all duration-300 relative py-1 hover:text-primary uppercase ${
                    isActive ? "text-primary" : "text-white/80"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gold-gradient rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <div className="hidden lg:flex">
            <Link to="/contact">
              <Button variant="primary" className="px-6 py-2.5 text-xs">
                Inquire Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-primary transition-colors focus:outline-none p-2 border border-white/10 rounded-md bg-white/5"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FaTimes className="w-5 h-5" />
            ) : (
              <FaBars className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Drawer — Full Screen Overlay */}
        <div
          className={`fixed inset-0 w-full h-screen z-[9999] flex flex-col lg:hidden transition-transform duration-500 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ backgroundColor: "#020617" }}
        >
          {/* Drawer Header with Logo + Close */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3"
            >
              <div className="flex items-end gap-[3px] h-8">
                <div className="w-3 h-8 bg-primary rounded-sm" />
                <div className="w-3 h-6 bg-primary rounded-sm" />
                <div className="w-3 h-8 bg-white/80 rounded-sm" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-base font-extrabold tracking-widest text-white uppercase">
                  MK Developer
                </span>
                <span className="text-[11px] font-light tracking-[0.18em] text-primary uppercase">
                  Group
                </span>
              </div>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-primary transition-colors p-2 border border-white/10 rounded-md bg-white/5"
              aria-label="Close menu"
            >
              <FaTimes className="w-5 h-5" />
            </button>
          </div>

          {/* Nav Links */}
          <div className="flex flex-col flex-1 justify-center gap-2 px-8">
            {navLinks.map((link, idx) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="group flex items-center justify-between py-4 border-b border-white/5 text-white hover:text-primary transition-colors duration-300"
              >
                <span className="text-xl font-bold font-heading uppercase tracking-widest">
                  {link.name}
                </span>
                <span className="text-xs text-white/20 group-hover:text-primary transition-colors">
                  0{idx + 1}
                </span>
              </Link>
            ))}
          </div>

          {/* Bottom Contact Info */}
          <div className="px-8 py-6 border-t border-white/10 flex flex-col gap-3">
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <Button variant="primary" className="w-full py-4 text-sm">
                Inquire Now
              </Button>
            </Link>
            <div className="flex flex-col gap-2 mt-2 text-xs text-white/40 font-sans">
              <a
                href="tel:+918010029100"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <FaPhoneAlt className="text-primary text-[10px]" /> +91 80100
                29100
              </a>
              <a
                href="mailto:mkdevelopers2002@gmail.com"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <FaEnvelope className="text-primary text-[10px]" />{" "}
                mkdevelopers2002@gmail.com
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
