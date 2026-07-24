import React from 'react';
import { BookOpen, Leaf, ConciergeBell, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import VideoBackground from '../components/VideoBackground';

import pcImg1 from '../assets/images/WhatsApp Image 2026-07-23 at 11.52.55 AM.jpeg';
import pcImg2 from '../assets/images/WhatsApp Image 2026-07-23 at 11.56.56 AM.jpeg';
import pcImg3 from '../assets/images/WhatsApp Image 2026-07-23 at 11.52.54 AM (1).jpeg';
import pcImg4 from '../assets/images/WhatsApp Image 2026-07-23 at 11.52.54 AM (2).jpeg';

export default function PrivateChef() {
  return (
    <div className="pt-16 md:pt-20 pb-32 md:pb-24">
      <SEO 
        title="Private Chef Services" 
        description="Experience the luxury of a private chef in Nairobi. Bespoke fine dining curated for the intimacy of your home by Agnes Catering."
      />
      
      {/* Hero Section — Autoplay muted cooking video */}
      <VideoBackground
        videoSrc="https://cdn.pixabay.com/video/2024/01/18/197205-904265109_large.mp4"
        posterSrc="https://images.unsplash.com/photo-1581349485608-9469926a8e5e?q=80&w=2070&auto=format&fit=crop"
        className="min-h-[60vh] md:min-h-[795px]"
        overlayClassName="bg-gradient-to-r from-primary/90 via-primary/60 to-transparent"
      >
        
        <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-16 w-full">
          <div className="max-w-2xl text-white">
            <span className="text-xs text-secondary uppercase tracking-[0.2em] mb-4 block font-label-caps">Exclusive Heritage Service</span>
            <h1 className="text-[32px] md:text-[56px] font-display-lg mb-4 md:mb-6 leading-[1.1]">
              The Luxury of a Private Chef
            </h1>
            <p className="text-sm md:text-base text-white/80 mb-8 md:mb-10 max-w-lg leading-relaxed">
              Bespoke fine dining, curated specifically for the intimacy of your home in Nairobi and its environs. Experience restaurant-grade excellence without leaving your sanctuary.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a 
                href="https://wa.me/254797453969?text=Hello%20Agnes%20Catering%2C%20I%20am%20interested%20in%20hiring%20a%20Private%20Chef." 
                target="_blank" 
                rel="noreferrer" 
                className="bg-white text-primary px-8 py-4 rounded-full text-xs font-bold tracking-widest hover:bg-white/90 transition-all shadow-lg inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" /> Hire Your Private Chef
              </a>
              <Link to="/menu" className="border border-white/40 text-white px-8 py-4 rounded-full text-xs font-bold tracking-widest hover:bg-white/10 transition-all text-center">
                View Sample Menus
              </Link>
            </div>
          </div>
        </div>
      </VideoBackground>

      {/* The Experience */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] bg-cover bg-center rounded-xl ambient-shadow" style={{ backgroundImage: `url('${pcImg2}')` }} />
              <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-primary text-white p-6 md:p-8 rounded-xl shadow-xl">
                <p className="text-2xl md:text-3xl font-bold font-display-lg">40+</p>
                <p className="text-xs uppercase tracking-widest opacity-80">Years of Excellence</p>
              </div>
            </div>
            
            <div>
              <span className="text-xs text-secondary uppercase tracking-widest mb-3 block font-label-caps">The Experience</span>
              <h2 className="text-[24px] md:text-[28px] text-primary mb-6 md:mb-8 font-display-lg">Personalized to the Last Detail</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <BookOpen className="text-secondary w-7 h-7 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs text-primary uppercase mb-1 font-bold tracking-widest">Bespoke Menu Planning</h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed">Every menu is a blank canvas. Our chefs collaborate with you to reflect your dietary preferences, seasonal desires, and personal story.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Leaf className="text-secondary w-7 h-7 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs text-primary uppercase mb-1 font-bold tracking-widest">Premium Ingredients</h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed">We source exclusively from heritage farms and local artisans, ensuring every component of your meal is of the highest provenance.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <ConciergeBell className="text-secondary w-7 h-7 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs text-primary uppercase mb-1 font-bold tracking-widest">Professional Service</h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed">Beyond the cooking, we provide a seamless hospitality experience, from wine pairings to impeccable table-side etiquette.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid — Moments Made Extraordinary */}
      <section className="py-16 md:py-24 bg-surface-container-low">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16">
          <div className="text-center mb-12">
            <h2 className="text-[24px] md:text-[28px] text-primary font-display-lg">Moments Made Extraordinary</h2>
            <p className="text-on-surface-variant mt-3 text-sm">Elevating every occasion through the lens of modern heritage dining.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            <div className="md:col-span-8 relative group overflow-hidden rounded-xl min-h-[250px] md:min-h-[350px]">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                style={{ backgroundImage: `url('${pcImg3}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent flex items-end p-6 md:p-10">
                <div>
                  <span className="text-xs text-secondary uppercase tracking-widest block mb-1 font-label-caps">Romantic</span>
                  <h3 className="text-lg md:text-xl text-white font-display-lg">Romantic Dinners</h3>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 relative group overflow-hidden rounded-xl min-h-[250px] md:min-h-[350px]">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                style={{ backgroundImage: `url('${pcImg4}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent flex items-end p-6 md:p-10">
                <div>
                  <span className="text-xs text-secondary uppercase tracking-widest block mb-1 font-label-caps">Family</span>
                  <h3 className="text-lg md:text-xl text-white font-display-lg">Family Gatherings</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16 text-center">
          <h2 className="text-[24px] md:text-[32px] text-white font-display-lg mb-4">Ready for an extraordinary dining experience?</h2>
          <p className="text-white/70 text-sm mb-8 max-w-lg mx-auto">Let us bring the Agnes Catering excellence directly to your table. Custom menus, professional chefs, unforgettable memories.</p>
          <a 
            href="https://wa.me/254797453969?text=Hello%20Agnes%20Catering%2C%20I%20am%20interested%20in%20your%20Private%20Chef%20service." 
            target="_blank" 
            rel="noreferrer" 
            className="bg-white text-primary px-10 py-4 rounded-full text-xs font-bold tracking-widest hover:bg-white/90 transition-all shadow-xl inline-flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" /> Book Your Private Chef
          </a>
        </div>
      </section>
    </div>
  );
}
