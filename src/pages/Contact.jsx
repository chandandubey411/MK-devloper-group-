import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle, FaPaperPlane } from 'react-icons/fa';
import Button from '../components/common/Button';
import SlideUp from '../components/animations/SlideUp';
import PageHero from '../components/common/PageHero';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setName('');
    setEmail('');
    setPhone('');
    setSubject('');
    setMessage('');
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  const offices = [
    {
      city: "Indraprastha Yojna — Ghaziabad",
      address: "Ph1/9, Indraprastha Yojna Pocket D, Near SBVM International School, Ghaziabad, UP 201102",
      phone: "+91 80100 29100",
      email: "mkdevelopers2002@gmail.com",
      hours: "Mon - Sat: 9:30 AM - 6:30 PM",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80"
    },
    {
      city: "Rajender Nagar — Sahibabad",
      address: "Shop no -2, Near Major Mohit Sharma Metro station, Rajender Nagar, sector -5, Rajender Nagar Sahibabad, Ghaziabad Uttar Pradesh 201005",
      phone: "+91 93117 01212",
      email: "mkdevelopers2002@gmail.com",
      hours: "Mon - Sat: 9:30 AM - 6:30 PM",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80"
    },
    {
      city: "Ankur Vihar — Ghaziabad",
      address: "E-36 SLF Ved Vihar, Ankur Vihar 201102",
      phone: "+91 80100 29100",
      email: "mkdevelopers2002@gmail.com",
      hours: "Mon - Sat: 9:30 AM - 6:30 PM",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80"
    },
    {
      city: "Dwarika City — Lal Kuan",
      address: "Khasra no. 1220G, Dwarika City, Shop no. 1, Plot no. 295, Lal Kuan, Ghaziabad, Uttar Pradesh 201009",
      phone: "+91 80100 29100",
      email: "mkdevelopers2002@gmail.com",
      hours: "Mon - Sat: 9:30 AM - 6:30 PM",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&q=80"
    },
    {
      city: "Vaishali — Ghaziabad",
      address: "Plot no -9, Near by Shopprix Mall Vaishali sector -5 , Ghaziabad Uttar Pradesh 201010",
      phone: "+91 93117 01212",
      email: "mkdevelopers2002@gmail.com",
      hours: "Mon - Sat: 9:30 AM - 6:30 PM",
      image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=600&q=80"
    },
    {
      city: "Salarpur — Noida",
      address: "Plot -A1 A2 A3 Suman Enclave vill Salarpur 201301 Noida Uttar Pradesh 201301",
      phone: "+91 80100 29100",
      email: "mkdevelopers2002@gmail.com",
      hours: "Mon - Sat: 9:30 AM - 6:30 PM",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80"
    }
  ];

  return (
    <div className="relative w-full bg-dark overflow-hidden font-heading">
      
      {/* 1. Header */}
      <PageHero
        badge="Connect With Advisory"
        title="Initiate Asset"
        titleHighlight="Acquisition"
        subtitle="Secure private consultation with our investment board or report structural infrastructure bids."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80"
        breadcrumb="Contact Us"
      />

      {/* 2. Contact Split Area */}
      <section className="relative py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

          {/* Form — full width centered */}
          <div className="max-w-3xl mx-auto">
            <SlideUp className="glass-dark border border-primary/20 p-8 rounded-2xl shadow-glow text-left">
              <span className="text-[10px] font-bold text-accent uppercase tracking-widest bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-4 inline-block">
                Secure advisory channel
              </span>
              <h3 className="text-white font-bold text-xl uppercase tracking-wider mb-2">
                Advisory Inquiry Sheet
              </h3>
              <p className="text-white/50 text-xs font-sans leading-relaxed mb-8">
                Submit your investment details below. All submitted coordinates are processed through private encrypted servers.
              </p>

              {submitted ? (
                <div className="flex flex-col items-center gap-4 text-center p-8 bg-primary/10 border border-primary/20 rounded-xl">
                  <FaCheckCircle className="text-primary text-5xl animate-bounce-slow" />
                  <h4 className="text-white font-semibold text-lg">Inquiry Sheet Submitted!</h4>
                  <p className="text-xs text-white/50 font-sans leading-relaxed">
                    Thank you. A corporate hospitality coordinator has been assigned. You will receive an initial email confirmation within 15 minutes.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-accent uppercase tracking-wider">Full Name</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter full name"
                        className="w-full px-4 py-3.5 rounded-lg bg-dark/60 text-white placeholder-white/35 border border-white/10 text-xs focus:border-primary font-sans transition-all duration-300"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-accent uppercase tracking-wider">Corporate Email</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. name@corporate.com"
                        className="w-full px-4 py-3.5 rounded-lg bg-dark/60 text-white placeholder-white/35 border border-white/10 text-xs focus:border-primary font-sans transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-accent uppercase tracking-wider">Mobile Number</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +91 XXXXX XXXXX"
                        className="w-full px-4 py-3.5 rounded-lg bg-dark/60 text-white placeholder-white/35 border border-white/10 text-xs focus:border-primary font-sans transition-all duration-300"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-accent uppercase tracking-wider">Inquiry Subject</label>
                      <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                        className="w-full px-4 py-3.5 rounded-lg bg-dark/60 text-white border border-white/10 text-xs focus:border-primary font-sans transition-all duration-300"
                      >
                        <option value="">Select Reason</option>
                        <option value="Residential Acquisition">Residential Acquisition</option>
                        <option value="Commercial Lease/Purchase">Commercial Lease/Purchase</option>
                        <option value="Smart Township Collaboration">Smart Township Collaboration</option>
                        <option value="Career & Leadership Careers">Career & Leadership Careers</option>
                        <option value="Other general inquiry">Other general inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-accent uppercase tracking-wider">Brief Message Context</label>
                    <textarea
                      rows="4"
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Outline details or list property IDs you are interested in..."
                      className="w-full px-4 py-3.5 rounded-lg bg-dark/60 text-white placeholder-white/35 border border-white/10 text-xs focus:border-primary font-sans transition-all duration-300 resize-none"
                    />
                  </div>

                  <Button type="submit" variant="primary" className="w-full py-4 text-xs font-heading mt-2">
                    Submit Private Inquiry Sheet <FaPaperPlane className="text-[10px]" />
                  </Button>

                </form>
              )}
            </SlideUp>
          </div>

          {/* Regional Offices — 3+3 grid below form */}
          <div className="mt-20">
            <div className="text-center mb-10">
              <span className="text-xs font-bold text-accent uppercase tracking-widest bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-4 inline-block">
                Regional Offices
              </span>
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mt-4 mb-3 uppercase">
                Our Corporate Spaces
              </h2>
              <p className="text-white/50 text-xs md:text-sm font-sans font-light leading-relaxed max-w-xl mx-auto">
                Visit our designated executive lounges for portfolio reviews and direct model structural walkthroughs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {offices.map((office, idx) => (
                <SlideUp
                  key={idx}
                  className="glass-dark border border-white/5 rounded-2xl overflow-hidden flex flex-col hover:border-primary/20 transition-all duration-400"
                >
                  {office.image && (
                    <div className="w-full h-44 overflow-hidden shrink-0">
                      <img src={office.image} alt={office.city} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                    </div>
                  )}
                  <div className="flex-grow p-5 flex flex-col justify-between text-left">
                    <div>
                      <h3 className="text-white font-bold text-sm tracking-tight uppercase border-b border-white/5 pb-2 mb-3">
                        {office.city}
                      </h3>
                      <ul className="flex flex-col gap-2.5 font-sans text-xs text-white/70">
                        <li className="flex gap-2">
                          <FaMapMarkerAlt className="text-primary mt-0.5 shrink-0" />
                          <span>{office.address}</span>
                        </li>
                        <li className="flex gap-2 items-center">
                          <FaPhoneAlt className="text-primary shrink-0" />
                          <a href={`tel:${office.phone.replace(/\s+/g, '')}`} className="hover:text-primary transition-colors">{office.phone}</a>
                        </li>
                        <li className="flex gap-2 items-center">
                          <FaEnvelope className="text-primary shrink-0" />
                          <a href={`mailto:${office.email}`} className="hover:text-primary transition-colors">{office.email}</a>
                        </li>
                        <li className="flex gap-2 items-center">
                          <FaClock className="text-primary shrink-0" />
                          <span>{office.hours}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </SlideUp>
              ))}
            </div>
          </div>

          {/* 3. High End Custom Google Map iframe representation */}
          <div className="mt-20 rounded-2xl overflow-hidden border border-white/10 relative h-[450px] shadow-glow">
            <iframe
              title="MK Developer & Group Office - Indraprastha Yojna, Ghaziabad"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56019.2!2d77.41!3d28.67!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1bb4e000001%3A0x1000000000000000!2sGhaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(1.2)" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;
