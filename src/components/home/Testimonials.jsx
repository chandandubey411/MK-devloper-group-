import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { testimonials } from '../../data/testimonials';
import SectionTitle from '../common/SectionTitle';
import SlideUp from '../animations/SlideUp';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section className="relative py-24 bg-dark overflow-hidden font-heading border-b border-white/5">
      {/* Decorative gradient sphere */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Title */}
        <SectionTitle
          subtitle="Satisfied Clientele"
          title="What Our Investors Say"
          align="center"
        />

        {/* Swiper Slider Wrapper */}
        <SlideUp className="w-full relative px-2 md:px-6">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2,
              }
            }}
            className="pb-16"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="h-auto">
                <div className="glass-dark border border-white/5 p-8 md:p-10 rounded-2xl flex flex-col justify-between h-full hover:border-primary/20 transition-all duration-400 group relative">
                  
                  {/* Floating Quote Icon */}
                  <FaQuoteLeft className="absolute top-6 right-6 text-white/5 text-5xl group-hover:text-primary/10 transition-colors pointer-events-none" />

                  {/* Stars Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-accent text-sm" />
                    ))}
                  </div>

                  {/* Feedback text */}
                  <p className="text-white/80 text-sm md:text-base font-sans font-light italic leading-relaxed mb-8">
                    "{testimonial.comment}"
                  </p>

                  {/* Customer details */}
                  <div className="flex items-center gap-4 mt-auto border-t border-white/5 pt-6">
                    <div>
                      <h4 className="text-white font-bold text-sm md:text-base tracking-tight leading-tight">
                        {testimonial.name}
                      </h4>
                      <p className="text-white/40 text-[11px] font-sans font-medium mt-0.5 leading-none">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </SlideUp>

      </div>
    </section>
  );
};

export default Testimonials;
