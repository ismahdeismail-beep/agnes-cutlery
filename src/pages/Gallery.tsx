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

const categories = ['All', 'Kenyan Heritage', 'Buffet', 'Wedding', 'Corporate', 'Private Chef'];

const images = [
  // ─── Real Agnes Catering WhatsApp Photos (19) ─────────────────────
  // Kenyan Heritage
  { id: 1, src: w1, category: 'Kenyan Heritage', alt: 'Authentic Kenyan Buffet Spread' },
  { id: 2, src: w6, category: 'Kenyan Heritage', alt: 'Traditional Pilau & Rice Station' },
  { id: 3, src: w14, category: 'Kenyan Heritage', alt: 'Heritage Kenyan Curry & Stew Display' },
  { id: 4, src: w7, category: 'Kenyan Heritage', alt: 'Signature Roasted Nyama Choma' },
  // Buffet
  { id: 5, src: w5, category: 'Buffet', alt: 'Pan-Seared Fish with Herb Garnish' },
  { id: 6, src: w8, category: 'Buffet', alt: 'Decadent Swiss Rolls & Dessert Table' },
  { id: 7, src: w9, category: 'Buffet', alt: 'Fresh Salad & Organic Greens Bar' },
  { id: 8, src: w10, category: 'Buffet', alt: 'Artisan Wood-Fired Pizza Station' },
  { id: 9, src: w18, category: 'Buffet', alt: 'Gourmet Platters & Charcuterie' },
  // Wedding
  { id: 10, src: w2, category: 'Wedding', alt: 'Artisanal Bread & Pastry Selection' },
  { id: 11, src: w3, category: 'Wedding', alt: 'Freshly Baked Flatbread Station' },
  { id: 12, src: w11, category: 'Wedding', alt: 'Elegant Wedding Reception Setup' },
  { id: 13, src: w15, category: 'Wedding', alt: 'Grand Wedding Banquet Table' },
  { id: 14, src: w19, category: 'Wedding', alt: 'Luxury Wedding Table Styling' },
  // Corporate
  { id: 15, src: w13, category: 'Corporate', alt: 'Executive Boardroom Lunch Setup' },
  { id: 16, src: w17, category: 'Corporate', alt: 'Corporate Gala Live Cooking' },
  // Private Chef
  { id: 17, src: w4, category: 'Private Chef', alt: 'Live Cooking Chef Station' },
  { id: 18, src: w12, category: 'Private Chef', alt: 'Fine Dining Private Experience' },
  { id: 19, src: w16, category: 'Private Chef', alt: 'Intimate Home Dining Experience' },

  // ─── Pinterest-Quality Kenya & African Food Photos ─────────────────
  // Kenyan Heritage (Pinterest-quality)
  { id: 20, src: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=2070&auto=format&fit=crop', category: 'Kenyan Heritage', alt: 'Swahili Pilau Rice & Spiced Meats' },
  { id: 21, src: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?q=80&w=2070&auto=format&fit=crop', category: 'Kenyan Heritage', alt: 'Nyama Choma Grilled Meat Platter' },
  { id: 22, src: 'https://images.unsplash.com/photo-1544025162-81111420d4d9?q=80&w=2070&auto=format&fit=crop', category: 'Kenyan Heritage', alt: 'Heritage Roasted Meat & Kachumbari' },
  { id: 23, src: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=2070&auto=format&fit=crop', category: 'Kenyan Heritage', alt: 'Spiced Pilau Rice Close-Up' },
  { id: 24, src: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=2070&auto=format&fit=crop', category: 'Kenyan Heritage', alt: 'Coastal Biryani with Saffron' },
  { id: 25, src: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=2070&auto=format&fit=crop', category: 'Kenyan Heritage', alt: 'Samaki — Grilled Fish Swahili Style' },
  { id: 26, src: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=2070&auto=format&fit=crop', category: 'Kenyan Heritage', alt: 'Soft Layered Chapati Stack' },
  { id: 27, src: 'https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=2070&auto=format&fit=crop', category: 'Kenyan Heritage', alt: 'Mukimo & Traditional Stew' },

  // Buffet (Pinterest-quality)
  { id: 28, src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop', category: 'Buffet', alt: 'Gourmet Buffet Carving Station' },
  { id: 29, src: 'https://images.unsplash.com/photo-1555244162-803834f87a41?q=80&w=2070&auto=format&fit=crop', category: 'Buffet', alt: 'Elegant Catering Spread' },
  { id: 30, src: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=2070&auto=format&fit=crop', category: 'Buffet', alt: 'Outdoor Barbecue & Grill Setup' },
  { id: 31, src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop', category: 'Buffet', alt: 'Elegant Fine Dining Presentation' },
  { id: 32, src: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=2070&auto=format&fit=crop', category: 'Buffet', alt: 'Premium Buffet Spread' },
  { id: 33, src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop', category: 'Buffet', alt: 'Event Planning & Setup' },

  // Wedding (Pinterest-quality, Kenya-prioritized)
  { id: 34, src: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2070&auto=format&fit=crop', category: 'Wedding', alt: 'Elegant Wedding Reception Tables' },
  { id: 35, src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2070&auto=format&fit=crop', category: 'Wedding', alt: 'Wedding Floral Centerpiece Display' },
  { id: 36, src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2070&auto=format&fit=crop', category: 'Wedding', alt: 'Grand Wedding Reception Hall' },
  { id: 37, src: 'https://images.unsplash.com/photo-1478146059778-26028b07395a?q=80&w=2070&auto=format&fit=crop', category: 'Wedding', alt: 'Ruracio Traditional Ceremony Feast' },
  { id: 38, src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2070&auto=format&fit=crop', category: 'Wedding', alt: 'Outdoor Garden Wedding Setup' },
  { id: 39, src: 'https://images.unsplash.com/photo-1550005809-91ad75fb315f?q=80&w=2070&auto=format&fit=crop', category: 'Wedding', alt: 'Wedding Cake & Dessert Table' },

  // Corporate (Pinterest-quality)
  { id: 40, src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop', category: 'Corporate', alt: 'Corporate Event Dining Room' },
  { id: 41, src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2070&auto=format&fit=crop', category: 'Corporate', alt: 'Executive Plated Lunch Service' },
  { id: 42, src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop', category: 'Corporate', alt: 'Modern Conference Room Catering' },
  { id: 43, src: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop', category: 'Corporate', alt: 'Upscale Corporate Dining Setup' },

  // Private Chef (Pinterest-quality)
  { id: 44, src: 'https://images.unsplash.com/photo-1583394293214-22aed6e6afc1?q=80&w=2070&auto=format&fit=crop', category: 'Private Chef', alt: 'Professional Chef at Work' },
  { id: 45, src: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop', category: 'Private Chef', alt: 'Private Chef Plating Fine Dish' },
  { id: 46, src: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?q=80&w=2070&auto=format&fit=crop', category: 'Private Chef', alt: 'Chef Preparing Gourmet Steak' },
  { id: 47, src: 'https://images.unsplash.com/photo-1581349485608-5a3c6b03c6bc?q=80&w=2070&auto=format&fit=crop', category: 'Private Chef', alt: 'Chef Crafting Signature Dish' },
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
        <p className="text-sm md:text-base text-on-surface-variant mt-4 max-w-xl mx-auto">A curated look at our finest Kenyan dishes, elegant events, and dining experiences across Nairobi.</p>
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
