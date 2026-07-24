import React, { useState } from 'react';
import { cn } from '../lib/utils';
import { MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';

// WhatsApp images from the client
import w1 from '../assets/images/WhatsApp Image 2026-07-23 at 11.52.54 AM.jpeg';
import w2 from '../assets/images/WhatsApp Image 2026-07-23 at 11.52.54 AM (1).jpeg';
import w3 from '../assets/images/WhatsApp Image 2026-07-23 at 11.52.54 AM (2).jpeg';
import w4 from '../assets/images/WhatsApp Image 2026-07-23 at 11.52.55 AM.jpeg';
import w5 from '../assets/images/WhatsApp Image 2026-07-23 at 11.52.55 AM (1).jpeg';
import w6 from '../assets/images/WhatsApp Image 2026-07-23 at 11.52.55 AM (2).jpeg';
import w7 from '../assets/images/WhatsApp Image 2026-07-23 at 11.52.55 AM (3).jpeg';
import w8 from '../assets/images/WhatsApp Image 2026-07-23 at 11.56.56 AM.jpeg';
import w9 from '../assets/images/WhatsApp Image 2026-07-23 at 11.56.57 AM.jpeg';
import w10 from '../assets/images/WhatsApp Image 2026-07-23 at 11.56.58 AM.jpeg';
import w11 from '../assets/images/WhatsApp Image 2026-07-23 at 11.56.59 AM.jpeg';
import w12 from '../assets/images/WhatsApp Image 2026-07-23 at 11.57.01 AM.jpeg';
import w13 from '../assets/images/WhatsApp Image 2026-07-23 at 11.57.02 AM.jpeg';
import w14 from '../assets/images/WhatsApp Image 2026-07-23 at 11.57.04 AM.jpeg';
import w15 from '../assets/images/WhatsApp Image 2026-07-23 at 11.57.05 AM.jpeg';
import w16 from '../assets/images/WhatsApp Image 2026-07-23 at 11.57.06 AM.jpeg';
import w17 from '../assets/images/WhatsApp Image 2026-07-23 at 11.57.06 AM (1).jpeg';
import w18 from '../assets/images/WhatsApp Image 2026-07-23 at 11.57.07 AM.jpeg';
import w19 from '../assets/images/WhatsApp Image 2026-07-23 at 11.57.08 AM.jpeg';

const categories = ['All', 'Buffet', 'Wedding', 'Corporate', 'Private Chef'];

const images = [
  // Client WhatsApp photos (real Agnes Catering images)
  { id: 1, src: w1, category: 'Buffet', alt: 'Gourmet Catering Spread' },
  { id: 2, src: w2, category: 'Wedding', alt: 'Artisanal Bread & Pastry Selection' },
  { id: 3, src: w3, category: 'Wedding', alt: 'Freshly Baked Flatbread Station' },
  { id: 4, src: w4, category: 'Private Chef', alt: 'Live Cooking Chef Station' },
  { id: 5, src: w5, category: 'Buffet', alt: 'Pan-Seared Fish with Herb Garnish' },
  { id: 6, src: w6, category: 'Corporate', alt: 'Creamy Vegetable Curry & Rice' },
  { id: 7, src: w7, category: 'Wedding', alt: 'Signature Roasted Meat Display' },
  { id: 8, src: w8, category: 'Buffet', alt: 'Decadent Swiss Rolls & Dessert Table' },
  { id: 9, src: w9, category: 'Corporate', alt: 'Fresh Salad & Organic Greens Bar' },
  { id: 10, src: w10, category: 'Buffet', alt: 'Artisan Wood-Fired Pizza Station' },
  { id: 11, src: w11, category: 'Wedding', alt: 'Elegant Wedding Reception Setup' },
  { id: 12, src: w12, category: 'Private Chef', alt: 'Fine Dining Private Experience' },
  { id: 13, src: w13, category: 'Corporate', alt: 'Executive Boardroom Lunch Setup' },
  { id: 14, src: w14, category: 'Buffet', alt: 'Traditional Kenyan Heritage Buffet' },
  { id: 15, src: w15, category: 'Wedding', alt: 'Grand Wedding Banquet Table' },
  { id: 16, src: w16, category: 'Private Chef', alt: 'Intimate Home Dining Experience' },
  { id: 17, src: w17, category: 'Corporate', alt: 'Corporate Gala Live Cooking' },
  { id: 18, src: w18, category: 'Buffet', alt: 'Gourmet Platters & Charcuterie' },
  { id: 19, src: w19, category: 'Wedding', alt: 'Luxury Wedding Table Styling' },

  // Expanded food photos — matched to correct labels
  // Buffet
  { id: 20, src: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1913&auto=format&fit=crop', category: 'Buffet', alt: 'Swahili Pilau & Biryani Spread' },
  { id: 21, src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop', category: 'Buffet', alt: 'Gourmet Buffet Carving Station' },
  { id: 22, src: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=2070&auto=format&fit=crop', category: 'Buffet', alt: 'Outdoor Barbecue & Grill Setup' },
  { id: 23, src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop', category: 'Buffet', alt: 'Elegant Fine Dining Presentation' },
  { id: 24, src: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=2070&auto=format&fit=crop', category: 'Buffet', alt: 'Tropical Fruit & Dessert Display' },
  { id: 25, src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=2070&auto=format&fit=crop', category: 'Buffet', alt: 'Artisan Pancakes & Brunch Table' },

  // Wedding
  { id: 26, src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop', category: 'Wedding', alt: 'Elegant Wedding Floral Centerpiece' },
  { id: 27, src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2070&auto=format&fit=crop', category: 'Wedding', alt: 'Grand Wedding Reception Hall' },
  { id: 28, src: 'https://images.unsplash.com/photo-1478146059778-26028b07395a?q=80&w=2069&auto=format&fit=crop', category: 'Wedding', alt: 'Ruracio Traditional Ceremony Feast' },
  { id: 29, src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2070&auto=format&fit=crop', category: 'Wedding', alt: 'Outdoor Garden Wedding Setup' },

  // Corporate
  { id: 30, src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop', category: 'Corporate', alt: 'Corporate Event Dining Room' },
  { id: 31, src: 'https://images.unsplash.com/photo-1555244162-803834f87a41?q=80&w=2070&auto=format&fit=crop', category: 'Corporate', alt: 'Executive Plated Lunch Service' },
  { id: 32, src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop', category: 'Corporate', alt: 'Modern Conference Room Catering' },

  // Private Chef
  { id: 33, src: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1977&auto=format&fit=crop', category: 'Private Chef', alt: 'Chef Preparing Gourmet Steak' },
  { id: 34, src: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?q=80&w=2070&auto=format&fit=crop', category: 'Private Chef', alt: 'Professional Female Chef at Work' },
  { id: 35, src: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop', category: 'Private Chef', alt: 'Private Chef Plating Fine Dish' },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <div className="pt-24 pb-32 md:pb-24 max-w-[1280px] mx-auto px-4 md:px-16">
      <SEO 
        title="Gallery & Portfolio" 
        description="Explore our gallery of past events, culinary creations, and elegant setups by Agnes Catering in Nairobi."
      />
      <div className="text-center mb-12">
        <span className="text-xs text-secondary mb-3 block uppercase tracking-widest font-label-caps">Our Portfolio</span>
        <h1 className="text-[32px] md:text-[56px] text-primary font-display-lg leading-tight">Visual Delights</h1>
        <p className="text-sm md:text-base text-on-surface-variant mt-4 max-w-xl mx-auto">A curated look at our finest events, dishes, and dining experiences across Nairobi.</p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 border font-label-caps",
              activeCategory === category
                ? "bg-primary text-white border-primary shadow-lg"
                : "bg-surface border-surface-variant text-primary hover:bg-surface-container"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <p className="text-center text-xs text-on-surface-variant/60 mb-8">{filteredImages.length} photos</p>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {filteredImages.map((image) => (
          <div key={image.id} className="break-inside-avoid relative group rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <div>
                <span className="text-secondary font-label-caps text-[10px] uppercase tracking-widest block mb-1">{image.category}</span>
                <p className="text-white text-xs font-medium">{image.alt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-xl text-primary mb-4 font-display-lg">See a setup you love?</h3>
        <a 
          href="https://wa.me/254797453969?text=Hello%20Agnes%20Catering%2C%20I%20saw%20your%20gallery%20and%20would%20like%20to%20inquire%20about%20a%20similar%20setup." 
          target="_blank" 
          rel="noreferrer" 
          className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-full text-xs font-bold tracking-widest hover:bg-primary-container transition-colors shadow-lg"
        >
          <MessageCircle className="w-4 h-4" /> Share With Us On WhatsApp
        </a>
      </div>
    </div>
  );
}
