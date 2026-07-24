import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1555244162-803834f87a41?q=80&w=2070&auto=format&fit=crop',
    title: 'Authentic Taste.',
    subtitle: 'Heritage Reimagined.',
    description: 'Experience the finest Kenyan culinary traditions with a modern touch. From premium Nyama Choma to coastal Pilau, we celebrate Nairobi\'s vibrant food culture.',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1977&auto=format&fit=crop',
    title: 'Culinary Artistry.',
    subtitle: 'Locally Sourced.',
    description: 'Our chefs craft every dish from the freshest seasonal ingredients sourced from local Kenyan farms, ensuring every bite tells a story.',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?q=80&w=2070&auto=format&fit=crop',
    title: 'Private Chef.',
    subtitle: 'Exquisite Service.',
    description: 'Bring the luxury of fine dining to your own home. Our professional private chefs deliver restaurant-grade excellence in the intimacy of your space.',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop',
    title: 'Elegant Weddings.',
    subtitle: 'Unforgettable Moments.',
    description: 'From traditional Ruracio ceremonies to grand white weddings, we provide impeccable service and bespoke culinary experiences for your special day.',
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[85vh] min-h-[500px] flex items-center overflow-hidden bg-primary">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${slides[currentSlide].image}')` }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent z-0"></div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-16 w-full">
        <div className="max-w-2xl text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-[32px] md:text-[56px] mb-4 md:mb-6 leading-[1.1] font-display-lg">
                {slides[currentSlide].title}<br />{slides[currentSlide].subtitle}
              </h2>
              <p className="text-sm md:text-base mb-8 md:mb-10 opacity-90 max-w-lg leading-relaxed">
                {slides[currentSlide].description}
              </p>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex flex-col sm:flex-row gap-3 relative z-20">
            <a 
              href="https://wa.me/254797453969?text=Hello%20Agnes%20Catering%2C%20I%20would%20like%20to%20make%20an%20inquiry." 
              target="_blank" 
              rel="noreferrer" 
              className="bg-white text-primary px-8 py-4 rounded-full text-xs font-bold tracking-widest flex items-center justify-center gap-2 hover:bg-white/90 transition-colors shadow-xl"
            >
              <MessageCircle className="w-4 h-4" />
              BOOK ON WHATSAPP
            </a>
            <Link to="/services" className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full text-xs font-bold tracking-widest flex items-center justify-center hover:bg-white/20 transition-all border border-white/30">
              VIEW SERVICES
            </Link>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-4 md:left-16 z-20 flex gap-2">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 rounded-full transition-all duration-500 ${
              currentSlide === index ? 'bg-secondary w-12' : 'bg-white/30 w-6 hover:bg-white/50'
            }`}
            aria-label={slide.title}
          />
        ))}
      </div>
    </section>
  );
}
