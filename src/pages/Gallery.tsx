import React, { useState } from 'react';
import { cn } from '../lib/utils';
import { QrCode } from 'lucide-react';
import SEO from '../components/SEO';

const categories = ['All', 'Wedding', 'Corporate', 'Private Chef', 'Buffet'];

const images = [
  { id: 1, src: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop', category: 'Wedding', alt: 'Elegant wedding table setup' },
  { id: 2, src: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1913&auto=format&fit=crop', category: 'Corporate', alt: 'Corporate buffet catering' },
  { id: 3, src: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1977&auto=format&fit=crop', category: 'Private Chef', alt: 'Private chef preparing meal' },
  { id: 4, src: 'https://images.unsplash.com/photo-1555244162-803834f87a41?q=80&w=2070&auto=format&fit=crop', category: 'Buffet', alt: 'Gourmet buffet spread' },
  { id: 5, src: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=2070&auto=format&fit=crop', category: 'Corporate', alt: 'Breakfast pastry selection' },
  { id: 6, src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop', category: 'Wedding', alt: 'Wedding reception dining' },
  { id: 7, src: 'https://images.unsplash.com/photo-1544025162-81111420d4d9?q=80&w=1976&auto=format&fit=crop', category: 'Buffet', alt: 'Traditional Kenyan dishes' },
  { id: 8, src: 'https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?q=80&w=2070&auto=format&fit=crop', category: 'Private Chef', alt: 'Roasted chicken main course' },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <div className="pt-32 pb-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      <SEO 
        title="Gallery & Portfolio" 
        description="Explore our gallery of past events, culinary creations, and elegant setups by Agnes Catering."
      />
      <div className="text-center mb-16">
        <span className="text-label-caps text-secondary mb-4 block uppercase tracking-widest">Our Portfolio</span>
        <h1 className="text-display-lg-mobile md:text-display-lg text-primary">Visual Delights</h1>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "px-6 py-2 rounded-full text-label-caps transition-all duration-300 border",
              activeCategory === category
                ? "bg-primary text-on-primary border-primary"
                : "bg-surface border-surface-variant text-primary hover:bg-surface-variant"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {filteredImages.map((image) => (
          <div key={image.id} className="break-inside-avoid relative group rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <div>
                <span className="text-secondary font-label-caps text-xs uppercase tracking-widest block mb-1">{image.category}</span>
                <p className="text-white text-body-md font-medium">{image.alt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <h3 className="text-headline-sm text-primary mb-6">See a setup you love?</h3>
        <a href="https://wa.me/254797453969?text=Hello%20Agnes%20Catering%2C%20I%20saw%20your%20gallery%20and%20would%20like%20to%20inquire%20about%20a%20similar%20setup." target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-secondary text-on-secondary px-8 py-4 rounded text-label-caps uppercase tracking-widest hover:opacity-90 transition-opacity shadow-lg">
          <QrCode className="w-5 h-5" /> Share With Us On WhatsApp
        </a>
      </div>
    </div>
  );
}
