import React from 'react';
import { Building2, Heart, UtensilsCrossed, TreePine, GraduationCap, Baby, PartyPopper, Cake, ClipboardList, CheckCircle2, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';

import sImg1 from '../assets/images/WhatsApp Image 2026-07-23 at 11.56.57 AM.jpeg';
import sImg2 from '../assets/images/WhatsApp Image 2026-07-23 at 11.57.08 AM.jpeg';
import sImg3 from '../assets/images/WhatsApp Image 2026-07-23 at 11.57.06 AM.jpeg';
import sImg4 from '../assets/images/WhatsApp Image 2026-07-23 at 11.57.07 AM.jpeg';
import sImg5 from '../assets/images/WhatsApp Image 2026-07-23 at 11.56.58 AM.jpeg';
import sImg6 from '../assets/images/WhatsApp Image 2026-07-23 at 11.57.04 AM.jpeg';
import sImg7 from '../assets/images/WhatsApp Image 2026-07-23 at 11.56.56 AM.jpeg';
import sImg8 from '../assets/images/WhatsApp Image 2026-07-23 at 11.52.54 AM.jpeg';
import sImg9 from '../assets/images/WhatsApp Image 2026-07-23 at 11.52.55 AM (1).jpeg';
import sImg10 from '../assets/images/WhatsApp Image 2026-07-23 at 11.57.05 AM.jpeg';

const servicesList = [
  { icon: Building2, title: 'Corporate Catering', desc: 'Impress your clients and nourish your team with refined boardroom menus and executive presentation.', img: sImg1 },
  { icon: Heart, title: 'Wedding Catering', desc: 'Whether a traditional Ruracio or a modern white wedding, your special day deserves a bespoke culinary journey.', img: sImg2 },
  { icon: Cake, title: 'Birthday Parties', desc: 'From kids parties to milestone adult birthdays and family gatherings, we create fun, delicious dining experiences.', img: sImg3 },
  { icon: GraduationCap, title: 'Graduation Ceremonies', desc: 'Celebrate academic achievements with family and friends through premium outdoor setups and extensive buffets.', img: sImg4 },
  { icon: Baby, title: 'Baby Shower', desc: 'Elegant buffets, coordinated decorations, and sweet desserts to celebrate the upcoming arrival in style.', img: sImg5 },
  { icon: PartyPopper, title: 'Bridal Shower', desc: 'Sophisticated meals, artisanal cocktails, and delightful desserts for an elegant bridal shower celebration.', img: sImg6 },
  { icon: UtensilsCrossed, title: 'Private Chef', desc: 'The ultimate luxury: a professional Agnes chef in your own home, delivering restaurant-grade meals.', img: sImg7 },
  { icon: TreePine, title: 'Outdoor Catering', desc: 'Expertly managed catering for garden parties, picnics, and outdoor events, bringing the kitchen to nature.', img: sImg8 },
  { icon: UtensilsCrossed, title: 'Buffet Services', desc: 'Extensive spreads featuring traditional Kenyan meals, international cuisine, and interactive live cooking stations.', img: sImg9 },
  { icon: ClipboardList, title: 'Event Planning Support', desc: 'Comprehensive support including food planning, professional serving staff, equipment, and menu consultation.', img: sImg10 },
];

export default function Services() {
  return (
    <div className="pt-24 pb-32 md:pb-24">
      <SEO 
        title="Catering Services" 
        description="Explore our catering services including weddings, corporate events, private chef experiences, and outdoor catering in Nairobi."
      />
      <header className="px-4 md:px-16 max-w-[1280px] mx-auto mb-12 md:mb-16 text-center">
        <h1 className="text-[32px] md:text-[56px] text-primary mb-4 font-display-lg leading-tight">Culinary Excellence for Every Occasion</h1>
        <p className="text-sm md:text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed">From intimate private dinners to grand corporate galas, we bring the Agnes heritage of fine dining to your chosen venue.</p>
      </header>

      <section className="px-4 md:px-16 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, idx) => (
            <article key={idx} className="group border border-surface-variant rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full bg-surface">
              <div className="relative h-48 md:h-56 w-full overflow-hidden">
                <div className="bg-cover bg-center w-full h-full transform group-hover:scale-105 transition-transform duration-700" style={{ backgroundImage: `url('${service.img}')` }} />
              </div>
              <div className="p-5 md:p-6 flex flex-col flex-grow text-center">
                <h2 className="text-base text-primary mb-2 flex items-center justify-center gap-2 font-display-lg">
                  <service.icon className="w-5 h-5 text-secondary" /> {service.title}
                </h2>
                <p className="text-xs text-on-surface-variant mb-5 flex-grow leading-relaxed">{service.desc}</p>
                <a 
                  href={`https://wa.me/254797453969?text=Hello%20Agnes%20Catering%2C%20I%20would%20like%20to%20book%20your%20${encodeURIComponent(service.title)}%20service.`} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary text-white font-label-caps py-3 px-4 rounded-lg hover:bg-primary-container transition-colors tracking-widest text-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" /> BOOK VIA WHATSAPP
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Signature Experience */}
      <section className="mt-16 md:mt-24 px-4 md:px-16 max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
        <div className="md:col-span-7 relative z-10 p-6 md:p-12 lg:p-16 bg-surface-container-high border border-surface-variant rounded-xl">
          <span className="text-xs text-secondary mb-3 block uppercase tracking-widest font-label-caps">The Agnes Standard</span>
          <h2 className="text-[24px] md:text-[28px] text-primary mb-6 font-display-lg leading-tight">Uncompromising Quality & Service</h2>
          
          <div className="space-y-4">
            {['Seasonal Menu Curation', 'Bespoke Table Styling', 'Professional Wait Staff', 'Full Cleanup Included'].map((item, i) => (
              <div key={i} className="flex items-center">
                <span className="text-sm text-primary font-medium">{item}</span>
                <div className="leader-line"></div>
                <CheckCircle2 className="text-secondary w-5 h-5" />
              </div>
            ))}
          </div>
          
          <a 
            href="https://wa.me/254797453969?text=Hello%20Agnes%20Catering%2C%20I%20would%20like%20to%20start%20planning%20my%20event." 
            target="_blank" 
            rel="noreferrer" 
            className="mt-8 bg-primary text-white px-8 py-3.5 rounded-xl text-xs font-bold tracking-widest hover:bg-primary-container transition-all inline-flex items-center gap-2 shadow-lg"
          >
            <MessageCircle className="w-4 h-4" /> Start Planning Your Event
          </a>
        </div>
        <div className="md:col-span-5 hidden md:block">
          <div className="bg-cover bg-center w-full h-[400px] rounded-xl shadow-2xl" style={{ backgroundImage: `url('${sImg1}')` }} />
        </div>
      </section>
    </div>
  );
}
