import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaLinkedinIn />, url: "https://linkedin.com" },
    { icon: <FaTwitter />, url: "https://twitter.com" },
    { icon: <FaFacebookF />, url: "https://facebook.com" },
    { icon: <FaInstagram />, url: "https://instagram.com" },
  ];

  return (
    <footer className="relative bg-dark pt-20 pb-8 border-t border-white/5 font-heading z-10 overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -top-48 -left-48 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo and Intro */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-3">
              {/* Logo Image */}
              <div className="flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="MK Developer Group"
                  className="h-10 w-auto md:h-12 object-contain"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col leading-tight">
                <span className="text-md md:text-md font-extrabold tracking-wider text-white uppercase">
                  MK Developer
                </span>
                <span className="text-xs md:text-sm font-medium tracking-[0.25em] text-primary uppercase">
                  Group
                </span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mt-4 font-sans font-light">
              Building India's Future, One Landmark at a Time. Delivering
              high-end residential, premium commercial and investment real
              estate consulting across the nation.
            </p>
            {/* Social handles */}
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-gold-gradient hover:border-transparent transition-all duration-300 transform hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-semibold text-lg tracking-wider relative pb-2 uppercase border-b border-white/10 self-start">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-white/70 font-sans font-light">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/properties"
                  className="hover:text-primary transition-colors"
                >
                  Properties
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="hover:text-primary transition-colors"
                >
                  Our Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-semibold text-lg tracking-wider relative pb-2 uppercase border-b border-white/10 self-start">
              Services
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-white/70 font-sans font-light">
              <li>
                <Link
                  to="/services"
                  className="hover:text-primary transition-colors"
                >
                  Construction
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-primary transition-colors"
                >
                  Property Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-primary transition-colors"
                >
                  Commercial Buildings
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-primary transition-colors"
                >
                  Residential Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-primary transition-colors"
                >
                  Architecture & Planning
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-primary transition-colors"
                >
                  Luxury Interior Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-semibold text-lg tracking-wider relative pb-2 uppercase border-b border-white/10 self-start">
              Get in touch
            </h4>
            <ul className="flex flex-col gap-4 text-sm text-white/70 font-sans font-light">
              <li className="flex gap-3">
                <FaMapMarkerAlt className="text-primary mt-1 shrink-0" />
                <span>
                  1, ph 1/9, indraprastha yojna, Near SBVM School, Ghaziabad,
                  Uttar Pradesh 201102
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <FaPhoneAlt className="text-primary shrink-0" />
                <a
                  href="tel:+918010029100"
                  className="hover:text-primary transition-colors"
                >
                  +91 80100 29100
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <FaEnvelope className="text-primary shrink-0" />
                <a
                  href="mailto:mkdevelopergroup@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  mkdevelopergroup@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Separator */}
        <div className="w-full h-[1px] bg-white/10 mb-8" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50 font-sans">
          <p>MK Developer & Group &copy; 2026. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
