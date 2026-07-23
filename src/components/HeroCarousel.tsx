import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { QrCode } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1555244162-803834f87a41?q=80&w=2070&auto=format&fit=crop',
    title: 'Authentic Taste.',
    subtitle: 'Heritage Reimagined.',
    description: 'Experience the finest Kenyan culinary traditions with a modern touch. From premium Nyama Choma to authentic coastal Pilau, we celebrate Nairobi\'s vibrant food culture in every plate.',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1544025162-81111420d4d9?q=80&w=1976&auto=format&fit=crop',
    title: 'Culinary Artistry.',
    subtitle: 'Locally Sourced.',
    description: 'Our dishes are crafted from the freshest seasonal ingredients sourced from local Kenyan farms, ensuring every bite tells a story of our land.',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop',
    title: 'Elegant Dining.',
    subtitle: 'Unforgettable Events.',
    description: 'Whether an intimate private dinner or a grand corporate gala, we provide impeccable service and bespoke menus tailored to your event.',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1977&auto=format&fit=crop',
    title: 'Private Chefs.',
    subtitle: 'Exquisite Service.',
    description: 'Bring the luxury of a fine-dining restaurant to your own home with our professional private chef services in Nairobi and its environs.',
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
    <section className="relative h-[85vh] flex items-center overflow-hidden px-margin-mobile md:px-margin-desktop bg-primary">
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

      <div className="relative z-10 max-w-2xl text-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-display-lg-mobile md:text-display-lg mb-6 leading-tight">
              {slides[currentSlide].title}<br />{slides[currentSlide].subtitle}
            </h2>
            <p className="text-body-lg mb-10 opacity-90 max-w-lg">
              {slides[currentSlide].description}
            </p>
          </motion.div>
        </AnimatePresence>
        
        <div className="flex flex-col sm:flex-row gap-4 relative z-20">
          <a href="https://wa.me/254797453969?text=Hello%20Agnes%20Catering%2C%20I%20would%20like%20to%20make%20an%20inquiry." target="_blank" rel="noreferrer" className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-full text-label-caps flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-xl">
            <QrCode className="w-5 h-5" />
            BOOK ON WHATSAPP
          </a>
          <Link to="/services" className="glass-panel text-white px-8 py-4 rounded-full text-label-caps flex items-center justify-center hover:bg-white/20 transition-all border border-white/30">
            VIEW SERVICES
          </Link>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-margin-mobile md:left-margin-desktop z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-12 h-1 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-secondary' : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
