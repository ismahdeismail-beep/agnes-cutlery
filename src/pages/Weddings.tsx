import React from 'react';
import { Sparkles, PartyPopper, Gem, Check, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

import wImg1 from '../assets/images/WhatsApp Image 2026-07-23 at 11.57.08 AM.jpeg';
import wImg2 from '../assets/images/WhatsApp Image 2026-07-23 at 11.52.54 AM.jpeg';
import wImg3 from '../assets/images/WhatsApp Image 2026-07-23 at 11.56.56 AM.jpeg';

export default function Weddings() {
  return (
    <div className="pt-0">
      <SEO 
        title="Wedding Catering Services" 
        description="Exquisite wedding catering services in Nairobi. From intimate heritage ceremonies to grand celebrations, Agnes Catering offers bespoke culinary experiences."
      />
      
      {/* Hero Section */}
      <header className="relative min-h-[60vh] md:min-h-[795px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-cover bg-center scale-105 transition-transform duration-[10s] hover:scale-100" style={{ backgroundImage: `url('${wImg1}')` }} />
          <div className="absolute inset-0 bg-primary/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"></div>
        </div>
        
        <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-16 w-full text-white">
          <span className="text-xs tracking-widest uppercase mb-4 block font-label-caps opacity-80">Established 1984</span>
          <h1 className="text-[32px] md:text-[56px] mb-6 md:mb-8 max-w-3xl leading-[1.1] font-display-lg">
            Exquisite Weddings, <br/><span className="italic font-normal">Timeless Flavors</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#collections" className="bg-white text-primary px-8 py-3.5 text-xs font-bold tracking-widest rounded-full hover:bg-white/90 transition-all duration-300 text-center shadow-lg inline-flex items-center justify-center gap-2">
              <MessageCircle className="w-4 h-4" /> Explore Collections
            </a>
            <Link to="/gallery" className="border border-white/40 text-white px-8 py-3.5 text-xs font-bold tracking-widest rounded-full hover:bg-white/10 transition-all duration-300 text-center">
              View Gallery
            </Link>
          </div>
        </div>
      </header>

      {/* Wedding Collections */}
      <section className="py-16 md:py-24 bg-surface" id="collections">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16">
          <div className="text-center mb-12">
            <h2 className="text-[24px] md:text-[28px] text-primary mb-3 font-display-lg">Wedding Collections</h2>
            <div className="w-12 h-px bg-secondary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {/* Package 1 */}
            <div className="bg-surface border border-surface-variant p-6 md:p-8 flex flex-col items-center text-center rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <Sparkles className="text-secondary w-10 h-10 mb-4" />
              <h3 className="text-lg text-primary mb-3 font-display-lg">The Intimate Heritage</h3>
              <p className="text-on-surface-variant text-xs mb-6 leading-relaxed">Designed for boutique celebrations and traditional Ruracio ceremonies where every detail is magnified.</p>
              
              <ul className="w-full text-left space-y-3 mb-6 border-t border-surface-variant/50 pt-5">
                <li className="flex items-center gap-2.5 text-xs"><Check className="text-secondary w-4 h-4 flex-shrink-0" /> Up to 50 Guests</li>
                <li className="flex items-center gap-2.5 text-xs"><Check className="text-secondary w-4 h-4 flex-shrink-0" /> 5-Course Plated Dinner</li>
                <li className="flex items-center gap-2.5 text-xs"><Check className="text-secondary w-4 h-4 flex-shrink-0" /> Artisanal Bread Service</li>
              </ul>
              <a href="https://wa.me/254797453969?text=Hello%20Agnes%20Catering%2C%20I%20am%20interested%20in%20'The%20Intimate%20Heritage'%20wedding%20package." target="_blank" rel="noreferrer" className="mt-auto w-full border border-primary text-primary py-3 text-xs font-bold tracking-widest hover:bg-primary hover:text-white transition-colors rounded-lg block text-center">
                Request Quote
              </a>
            </div>

            {/* Package 2 */}
            <div className="bg-surface border-2 border-secondary p-6 md:p-8 flex flex-col items-center text-center rounded-xl shadow-lg relative hover:shadow-xl transition-all duration-300 hover:-translate-y-1 md:scale-105">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-white px-4 py-1 text-[10px] font-bold tracking-widest uppercase rounded-full">Most Popular</div>
              <PartyPopper className="text-secondary w-10 h-10 mb-4" />
              <h3 className="text-lg text-primary mb-3 font-display-lg">The Grand Celebration</h3>
              <p className="text-on-surface-variant text-xs mb-6 leading-relaxed">A feast for the senses, featuring our signature live cooking stations and artistic displays.</p>
              
              <ul className="w-full text-left space-y-3 mb-6 border-t border-secondary/20 pt-5">
                <li className="flex items-center gap-2.5 text-xs"><Check className="text-secondary w-4 h-4 flex-shrink-0" /> 100 - 300 Guests</li>
                <li className="flex items-center gap-2.5 text-xs"><Check className="text-secondary w-4 h-4 flex-shrink-0" /> Full Culinary Buffet</li>
                <li className="flex items-center gap-2.5 text-xs"><Check className="text-secondary w-4 h-4 flex-shrink-0" /> 3 Themed Live Stations</li>
              </ul>
              <a href="https://wa.me/254797453969?text=Hello%20Agnes%20Catering%2C%20I%20am%20interested%20in%20'The%20Grand%20Celebration'%20wedding%20package." target="_blank" rel="noreferrer" className="mt-auto w-full bg-primary text-white py-3 text-xs font-bold tracking-widest hover:bg-primary-container transition-colors rounded-lg shadow-lg">
                Request Quote
              </a>
            </div>

            {/* Package 3 */}
            <div className="bg-surface border border-surface-variant p-6 md:p-8 flex flex-col items-center text-center rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <Gem className="text-secondary w-10 h-10 mb-4" />
              <h3 className="text-lg text-primary mb-3 font-display-lg">The Bespoke Gala</h3>
              <p className="text-on-surface-variant text-xs mb-6 leading-relaxed">Ultimate luxury. A blank canvas for our executive chef to create your personal culinary story.</p>
              
              <ul className="w-full text-left space-y-3 mb-6 border-t border-surface-variant/50 pt-5">
                <li className="flex items-center gap-2.5 text-xs"><Check className="text-secondary w-4 h-4 flex-shrink-0" /> Infinite Customization</li>
                <li className="flex items-center gap-2.5 text-xs"><Check className="text-secondary w-4 h-4 flex-shrink-0" /> Dedicated Sommelier</li>
                <li className="flex items-center gap-2.5 text-xs"><Check className="text-secondary w-4 h-4 flex-shrink-0" /> Late-Night Gourmet Bar</li>
              </ul>
              <a href="https://wa.me/254797453969?text=Hello%20Agnes%20Catering%2C%20I%20am%20interested%20in%20'The%20Bespoke%20Gala'%20wedding%20package." target="_blank" rel="noreferrer" className="mt-auto w-full border border-primary text-primary py-3 text-xs font-bold tracking-widest hover:bg-primary hover:text-white transition-colors rounded-lg block text-center">
                Request Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
