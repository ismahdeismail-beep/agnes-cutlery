import React from 'react';
import { BookOpen, Leaf, ConciergeBell } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

import pcImg1 from '../assets/images/WhatsApp Image 2026-07-23 at 11.56.56 AM.jpeg';
import pcImg2 from '../assets/images/WhatsApp Image 2026-07-23 at 11.52.54 AM.jpeg';
import pcImg3 from '../assets/images/WhatsApp Image 2026-07-23 at 11.57.08 AM.jpeg';
import pcImg4 from '../assets/images/WhatsApp Image 2026-07-23 at 11.57.06 AM.jpeg';

export default function PrivateChef() {
  return (
    <div className="pt-20">
      <SEO 
        title="Private Chef Services" 
        description="Experience the luxury of a private chef in Nairobi. Bespoke fine dining curated specifically for the intimacy of your home by Agnes Catering."
      />
      {/* Hero Section */}
      <section className="relative min-h-[795px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-cover bg-center transition-transform duration-1000 hover:scale-105" style={{ backgroundImage: `url('${pcImg1}')` }}>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full">
          <div className="max-w-2xl">
            <span className="text-label-caps text-secondary uppercase tracking-[0.2em] mb-4 block">Exclusive Heritage Service</span>
            <h1 className="text-display-lg-mobile md:text-display-lg text-primary mb-6 leading-[1.1]">The Luxury of a Private Chef</h1>
            <p className="text-body-lg text-on-surface-variant mb-10 max-w-lg">Bespoke fine dining, curated specifically for the intimacy of your home in Nairobi and its environs. Experience restaurant-grade excellence without leaving your sanctuary.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/254797453969?text=Hello%20Agnes%20Catering%2C%20I%20am%20interested%20in%20hiring%20a%20Private%20Chef." target="_blank" rel="noreferrer" className="bg-primary text-on-primary px-10 py-5 rounded text-label-caps uppercase tracking-widest hover:bg-primary-container transition-all shadow-lg inline-block text-center">Hire Your Private Chef</a>
              <Link to="/menu" className="border border-secondary text-primary px-10 py-5 rounded text-label-caps uppercase tracking-widest hover:bg-secondary-fixed/10 transition-all text-center">View Sample Menus</Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Experience */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] bg-cover bg-center rounded-lg ambient-shadow" style={{ backgroundImage: `url('${pcImg2}')` }}>
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary-fixed p-8 hidden md:flex items-center justify-center rounded-lg">
                <p className="text-headline-sm text-on-primary-fixed text-center leading-tight">Since 1984</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-headline-md text-primary mb-8">Personalized to the Last Detail</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <BookOpen className="text-secondary w-8 h-8 flex-shrink-0" />
                  <div>
                    <h3 className="text-label-caps text-primary uppercase mb-2">Bespoke Menu Planning</h3>
                    <p className="text-on-surface-variant">Every menu is a blank canvas. Our chefs collaborate with you to reflect your dietary preferences, seasonal desires, and personal story.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <Leaf className="text-secondary w-8 h-8 flex-shrink-0" />
                  <div>
                    <h3 className="text-label-caps text-primary uppercase mb-2">Premium Ingredients</h3>
                    <p className="text-on-surface-variant">We source exclusively from heritage farms and local artisans, ensuring that every component of your meal is of the highest provenance.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <ConciergeBell className="text-secondary w-8 h-8 flex-shrink-0" />
                  <div>
                    <h3 className="text-label-caps text-primary uppercase mb-2">Professional Service</h3>
                    <p className="text-on-surface-variant">Beyond the cooking, we provide a seamless hospitality experience, from wine pairings to impeccable table-side etiquette.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal For (Bento Grid) */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="text-headline-md text-primary">Moments Made Extraordinary</h2>
            <p className="text-on-surface-variant mt-4">Elevating every occasion through the lens of modern heritage dining.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
            <div className="md:col-span-8 relative group overflow-hidden rounded-lg min-h-[300px]">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('${pcImg3}')` }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-10">
                <h3 className="text-headline-sm text-white">Romantic Dinners</h3>
              </div>
            </div>
            <div className="md:col-span-4 relative group overflow-hidden rounded-lg min-h-[300px]">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('${pcImg4}')` }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-10">
                <h3 className="text-headline-sm text-white">Family Gatherings</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
