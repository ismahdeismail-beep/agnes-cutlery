import React, { useState } from 'react';
import { cn } from '../lib/utils';
import { QrCode } from 'lucide-react';
import SEO from '../components/SEO';

import img1 from '../assets/images/WhatsApp Image 2026-07-23 at 11.52.54 AM.jpeg';
import img2 from '../assets/images/WhatsApp Image 2026-07-23 at 11.52.54 AM (1).jpeg';
import img3 from '../assets/images/WhatsApp Image 2026-07-23 at 11.52.54 AM (2).jpeg';
import img4 from '../assets/images/WhatsApp Image 2026-07-23 at 11.52.55 AM.jpeg';
import img5 from '../assets/images/WhatsApp Image 2026-07-23 at 11.52.55 AM (1).jpeg';
import img6 from '../assets/images/WhatsApp Image 2026-07-23 at 11.52.55 AM (2).jpeg';
import img7 from '../assets/images/WhatsApp Image 2026-07-23 at 11.52.55 AM (3).jpeg';
import img8 from '../assets/images/WhatsApp Image 2026-07-23 at 11.56.56 AM.jpeg';
import img9 from '../assets/images/WhatsApp Image 2026-07-23 at 11.56.57 AM.jpeg';
import img10 from '../assets/images/WhatsApp Image 2026-07-23 at 11.56.58 AM.jpeg';
import img11 from '../assets/images/WhatsApp Image 2026-07-23 at 11.56.59 AM.jpeg';
import img12 from '../assets/images/WhatsApp Image 2026-07-23 at 11.57.01 AM.jpeg';
import img13 from '../assets/images/WhatsApp Image 2026-07-23 at 11.57.02 AM.jpeg';
import img14 from '../assets/images/WhatsApp Image 2026-07-23 at 11.57.04 AM.jpeg';
import img15 from '../assets/images/WhatsApp Image 2026-07-23 at 11.57.05 AM.jpeg';
import img16 from '../assets/images/WhatsApp Image 2026-07-23 at 11.57.06 AM.jpeg';
import img17 from '../assets/images/WhatsApp Image 2026-07-23 at 11.57.06 AM (1).jpeg';
import img18 from '../assets/images/WhatsApp Image 2026-07-23 at 11.57.07 AM.jpeg';
import img19 from '../assets/images/WhatsApp Image 2026-07-23 at 11.57.08 AM.jpeg';

const categories = ['All', 'Wedding', 'Corporate', 'Private Chef', 'Buffet'];

const images = [
  { id: 1, src: img1, category: 'Buffet', alt: 'Gourmet Chicken Casserole Spread' },
  { id: 2, src: img2, category: 'Wedding', alt: 'Artisanal Garlic Naan & Bread Selection' },
  { id: 3, src: img3, category: 'Wedding', alt: 'Freshly Baked Flatbread Station' },
  { id: 4, src: img4, category: 'Private Chef', alt: 'Live Stir-Fry & Chef Station' },
  { id: 5, src: img5, category: 'Buffet', alt: 'Pan-Seared Herb Fish with Lemon' },
  { id: 6, src: img6, category: 'Corporate', alt: 'Creamy Eggplant & Vegetable Curry' },
  { id: 7, src: img7, category: 'Wedding', alt: 'Signature Roasted Meat & Bone Marrow Choma' },
  { id: 8, src: img8, category: 'Buffet', alt: 'Decadent Swiss Rolls & Dessert Spreads' },
  { id: 9, src: img9, category: 'Corporate', alt: 'Fresh Salad & Organic Vegetable Bar' },
  { id: 10, src: img10, category: 'Buffet', alt: 'Artisan Wood-Fired Pizza Station' },
  { id: 11, src: img11, category: 'Wedding', alt: 'Exquisite Wedding Reception Setup' },
  { id: 12, src: img12, category: 'Private Chef', alt: 'Private Dining Fine Cuisines' },
  { id: 13, src: img13, category: 'Corporate', alt: 'Executive Boardroom Catering' },
  { id: 14, src: img14, category: 'Buffet', alt: 'Traditional Kenyan Heritage Buffet' },
  { id: 15, src: img15, category: 'Wedding', alt: 'Grand Wedding Celebration Banquet' },
  { id: 16, src: img16, category: 'Private Chef', alt: 'Intimate Home Dining Experience' },
  { id: 17, src: img17, category: 'Corporate', alt: 'Corporate Gala & Live Cooking' },
  { id: 18, src: img18, category: 'Buffet', alt: 'Gourmet Platters & Salads' },
  { id: 19, src: img19, category: 'Wedding', alt: 'Luxury Wedding Table Styling' },
  { id: 20, src: 'https://images.unsplash.com/photo-1555244162-803834f87a41?q=80&w=2070&auto=format&fit=crop', category: 'Buffet', alt: 'Swahili Pilau & Coconut Rice Spread' },
  { id: 21, src: 'https://images.unsplash.com/photo-1544025162-81111420d4d9?q=80&w=1976&auto=format&fit=crop', category: 'Wedding', alt: 'Traditional Ruracio Feast Presentation' },
  { id: 22, src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop', category: 'Corporate', alt: 'Executive Luncheon & Plated Service' },
  { id: 23, src: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1977&auto=format&fit=crop', category: 'Private Chef', alt: 'Master Chef Preparing Flame-Kissed Steak' },
  { id: 24, src: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=2070&auto=format&fit=crop', category: 'Buffet', alt: 'Garden Party Live Barbecue Station' },
  { id: 25, src: 'https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?q=80&w=2070&auto=format&fit=crop', category: 'Wedding', alt: 'Golden Roasted Herb Chicken Platter' },
  { id: 26, src: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=2070&auto=format&fit=crop', category: 'Buffet', alt: 'Tropical Coastal Fruit & Dessert Bar' },
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
