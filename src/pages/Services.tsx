import React from 'react';
import { Building2, Heart, UtensilsCrossed, TreePine, GraduationCap, Baby, PartyPopper, Cake, ClipboardList, CheckCircle2, QrCode } from 'lucide-react';
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
  {
    icon: Building2,
    title: 'Corporate Catering',
    desc: 'Impress your clients and nourish your team with refined boardroom menus and executive presentation.',
    img: sImg1
  },
  {
    icon: Heart,
    title: 'Wedding Catering',
    desc: 'Whether a traditional Ruracio or a modern white wedding, your special day deserves a bespoke culinary journey.',
    img: sImg2
  },
  {
    icon: Cake,
    title: 'Birthday Parties',
    desc: 'From kids parties to milestone adult birthdays and family gatherings, we create fun, delicious dining experiences.',
    img: sImg3
  },
  {
    icon: GraduationCap,
    title: 'Graduation Ceremonies',
    desc: 'Celebrate academic achievements with family and friends through premium outdoor setups and extensive buffets.',
    img: sImg4
  },
  {
    icon: Baby,
    title: 'Baby Shower',
    desc: 'Elegant buffets, coordinated decorations, and sweet desserts to celebrate the upcoming arrival in style.',
    img: sImg5
  },
  {
    icon: PartyPopper,
    title: 'Bridal Shower',
    desc: 'Sophisticated meals, artisanal cocktails, and delightful desserts perfect for an elegant bridal shower celebration.',
    img: sImg6
  },
  {
    icon: UtensilsCrossed,
    title: 'Private Chef',
    desc: 'The ultimate luxury: a professional Agnes chef in your own home or vacation rental, delivering restaurant-grade meals.',
    img: sImg7
  },
  {
    icon: TreePine,
    title: 'Outdoor Catering',
    desc: 'Expertly managed catering for garden parties, picnics, and outdoor events, bringing the kitchen to nature.',
    img: sImg8
  },
  {
    icon: UtensilsCrossed,
    title: 'Buffet Services',
    desc: 'Extensive spreads featuring traditional Kenyan meals, international cuisine, and interactive live cooking stations.',
    img: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1913&auto=format&fit=crop'
  },
  {
    icon: ClipboardList,
    title: 'Event Planning Support',
    desc: 'Comprehensive support including food planning, professional serving staff, equipment sourcing, and menu consultation.',
    img: sImg10
  }
];

export default function Services() {
  return (
    <div className="pt-32 pb-40">
      <SEO 
        title="Catering Services" 
        description="Explore our catering services including weddings, corporate events, private chef experiences, and outdoor catering in Nairobi."
      />
      <header className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-20 text-center">
        <h1 className="text-display-lg-mobile md:text-display-lg text-primary mb-6">Culinary Excellence for Every Occasion</h1>
        <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">From intimate private dinners to grand corporate galas, we bring the Agnes heritage of fine dining to your chosen venue with meticulous detail and seasonal inspiration.</p>
      </header>

      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {servicesList.map((service, idx) => (
            <article key={idx} className="group border border-surface-variant rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full bg-surface/90">
              <div className="relative h-64 w-full overflow-hidden">
                <div className="bg-cover bg-center w-full h-full transform group-hover:scale-105 transition-transform duration-700" style={{ backgroundImage: `url('${service.img}')` }}></div>
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-8 flex flex-col flex-grow text-center">
                <h2 className="text-headline-sm text-primary mb-4 flex items-center justify-center gap-2"><service.icon className="w-6 h-6" /> {service.title}</h2>
                <p className="text-body-md text-on-surface-variant mb-8 flex-grow">{service.desc}</p>
                <a href={`https://wa.me/254797453969?text=Hello%20Agnes%20Catering%2C%20I%20would%20like%20to%20book%20your%20${encodeURIComponent(service.title)}%20service.`} target="_blank" rel="noreferrer" className="w-full inline-flex items-center justify-center gap-2 border border-secondary text-primary font-label-caps py-4 px-6 rounded-lg hover:bg-secondary-fixed/10 transition-colors tracking-widest text-sm">
                  <QrCode className="w-4 h-4" /> BOOK VIA WHATSAPP
                </a>
              </div>
            </article>
          ))}

        </div>
      </section>

      {/* Signature Experience */}
      <section className="mt-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7 relative z-10 p-8 md:p-20 bg-surface-container-high border border-surface-variant">
          <span className="text-label-caps text-secondary mb-4 block uppercase tracking-widest">The Agnes Standard</span>
          <h2 className="text-display-lg-mobile md:text-headline-md text-primary mb-6">Uncompromising Quality & Service</h2>
          
          <div className="space-y-6">
            <div className="flex items-center">
              <span className="text-body-md text-primary font-bold">Seasonal Menu Curation</span>
              <div className="leader-line"></div>
              <CheckCircle2 className="text-primary w-5 h-5" />
            </div>
            <div className="flex items-center">
              <span className="text-body-md text-primary font-bold">Bespoke Table Styling</span>
              <div className="leader-line"></div>
              <CheckCircle2 className="text-primary w-5 h-5" />
            </div>
            <div className="flex items-center">
              <span className="text-body-md text-primary font-bold">Professional Wait Staff</span>
              <div className="leader-line"></div>
              <CheckCircle2 className="text-primary w-5 h-5" />
            </div>
            <div className="flex items-center">
              <span className="text-body-md text-primary font-bold">Full Cleanup Included</span>
              <div className="leader-line"></div>
              <CheckCircle2 className="text-primary w-5 h-5" />
            </div>
          </div>
          
          <a href="https://wa.me/254797453969?text=Hello%20Agnes%20Catering%2C%20I%20would%20like%20to%20start%20planning%20my%20event." target="_blank" rel="noreferrer" className="mt-12 bg-primary text-on-primary px-10 py-4 rounded-lg text-label-caps hover:bg-primary-container transition-all inline-block">Start Planning Your Event</a>
        </div>
        <div className="md:col-span-5 md:-ml-20 h-[600px] w-full hidden md:block">
          <div className="bg-cover bg-center w-full h-full shadow-2xl" style={{ backgroundImage: `url('${sImg1}')` }}></div>
        </div>
      </section>
    </div>
  );
}
