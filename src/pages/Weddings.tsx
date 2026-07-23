import React from 'react';
import { Sparkles, PartyPopper, Gem, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Weddings() {
  return (
    <div className="pt-0">
      <SEO 
        title="Wedding Catering Services" 
        description="Exquisite wedding catering services in Nairobi. From intimate heritage ceremonies to grand celebrations, Agnes Catering offers bespoke culinary experiences for your special day."
      />
      {/* Hero Section */}
      <header className="relative h-[795px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-cover bg-center scale-105 transition-transform duration-[10s] hover:scale-100" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop')` }}></div>
          <div className="absolute inset-0 bg-primary/30 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"></div>
        </div>
        
        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full text-white">
          <span className="text-label-caps tracking-widest uppercase mb-4 block">Established 1984</span>
          <h1 className="text-display-lg-mobile md:text-display-lg mb-8 max-w-3xl leading-[1.1]">
            Exquisite Weddings, <br/><span className="italic font-normal">Timeless Flavors</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#collections" className="bg-primary text-white px-10 py-4 text-label-caps rounded hover:bg-primary-container transition-all duration-300 text-center">Explore Collections</a>
            <Link to="/gallery" className="border border-secondary-fixed text-white px-10 py-4 text-label-caps rounded hover:bg-secondary-fixed/10 transition-all duration-300 text-center">View Gallery</Link>
          </div>
        </div>
      </header>

      {/* Wedding Collections */}
      <section className="py-24 bg-surface" id="collections">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="text-headline-md text-primary mb-4">Wedding Collections</h2>
            <div className="w-16 h-px bg-secondary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Package 1 */}
            <div className="bg-surface/80 glass-panel border border-white/20 p-10 flex flex-col items-center text-center ambient-shadow transition-transform duration-300 hover:-translate-y-2">
              <Sparkles className="text-secondary w-12 h-12 mb-6" />
              <h3 className="text-headline-sm text-primary mb-4">The Intimate Heritage</h3>
              <p className="text-on-surface-variant text-body-md mb-8">Designed for boutique celebrations and traditional Ruracio ceremonies where every detail is magnified. Focuses on seasonal precision.</p>
              
              <ul className="w-full text-left space-y-4 mb-10 border-t border-surface-variant pt-8">
                <li className="flex items-center gap-3 text-body-md"><Check className="text-secondary w-4 h-4" /> Up to 50 Guests</li>
                <li className="flex items-center gap-3 text-body-md"><Check className="text-secondary w-4 h-4" /> 5-Course Plated Dinner</li>
                <li className="flex items-center gap-3 text-body-md"><Check className="text-secondary w-4 h-4" /> Artisanal Bread Service</li>
              </ul>
              <a href="https://wa.me/254797453969?text=Hello%20Agnes%20Catering%2C%20I%20am%20interested%20in%20'The%20Intimate%20Heritage'%20wedding%20package.%20Could%20I%20get%20a%20quote%3F" target="_blank" rel="noreferrer" className="mt-auto w-full border border-secondary text-primary py-4 text-label-caps hover:bg-secondary-container/10 transition-colors rounded block text-center">Request Wedding Quote</a>
            </div>

            {/* Package 2 */}
            <div className="bg-surface/80 glass-panel border-2 border-secondary p-10 flex flex-col items-center text-center ambient-shadow scale-105 z-10 relative transition-transform duration-300 hover:-translate-y-2">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white px-4 py-1 text-[10px] font-bold tracking-widest uppercase">Most Popular</div>
              <PartyPopper className="text-secondary w-12 h-12 mb-6" />
              <h3 className="text-headline-sm text-primary mb-4">The Grand Celebration</h3>
              <p className="text-on-surface-variant text-body-md mb-8">A feast for the senses, featuring our signature live cooking stations and artistic displays.</p>
              
              <ul className="w-full text-left space-y-4 mb-10 border-t border-secondary/20 pt-8">
                <li className="flex items-center gap-3 text-body-md"><Check className="text-secondary w-4 h-4" /> 100 - 300 Guests</li>
                <li className="flex items-center gap-3 text-body-md"><Check className="text-secondary w-4 h-4" /> Full Culinary Buffet</li>
                <li className="flex items-center gap-3 text-body-md"><Check className="text-secondary w-4 h-4" /> 3 Themed Live Stations</li>
              </ul>
              <a href="https://wa.me/254797453969?text=Hello%20Agnes%20Catering%2C%20I%20am%20interested%20in%20'The%20Grand%20Celebration'%20wedding%20package.%20Could%20I%20get%20a%20quote%3F" target="_blank" rel="noreferrer" className="mt-auto w-full bg-primary text-white py-4 text-label-caps hover:bg-primary-container transition-colors rounded shadow-lg">Request Wedding Quote</a>
            </div>

            {/* Package 3 */}
            <div className="bg-surface/80 glass-panel border border-white/20 p-10 flex flex-col items-center text-center ambient-shadow transition-transform duration-300 hover:-translate-y-2">
              <Gem className="text-secondary w-12 h-12 mb-6" />
              <h3 className="text-headline-sm text-primary mb-4">The Bespoke Gala</h3>
              <p className="text-on-surface-variant text-body-md mb-8">Ultimate luxury. A blank canvas for our executive chef to create your personal culinary story.</p>
              
              <ul className="w-full text-left space-y-4 mb-10 border-t border-surface-variant pt-8">
                <li className="flex items-center gap-3 text-body-md"><Check className="text-secondary w-4 h-4" /> Infinite Customization</li>
                <li className="flex items-center gap-3 text-body-md"><Check className="text-secondary w-4 h-4" /> Dedicated Sommelier</li>
                <li className="flex items-center gap-3 text-body-md"><Check className="text-secondary w-4 h-4" /> Late-Night Gourmet Bar</li>
              </ul>
              <a href="https://wa.me/254797453969?text=Hello%20Agnes%20Catering%2C%20I%20am%20interested%20in%20'The%20Bespoke%20Gala'%20wedding%20package.%20Could%20I%20get%20a%20quote%3F" target="_blank" rel="noreferrer" className="mt-auto w-full border border-secondary text-primary py-4 text-label-caps hover:bg-secondary-container/10 transition-colors rounded block text-center">Request Wedding Quote</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
