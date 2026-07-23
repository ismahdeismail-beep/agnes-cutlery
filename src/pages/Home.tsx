import React from 'react';
import { CheckCircle2, QrCode, Star, Users, Utensils, Clock, Heart, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import Testimonials from '../components/Testimonials';
import HeroCarousel from '../components/HeroCarousel';
import SEO from '../components/SEO';

import featImg1 from '../assets/images/WhatsApp Image 2026-07-23 at 11.56.57 AM.jpeg';
import featImg2 from '../assets/images/WhatsApp Image 2026-07-23 at 11.57.08 AM.jpeg';
import featImg3 from '../assets/images/WhatsApp Image 2026-07-23 at 11.56.56 AM.jpeg';
import featImg4 from '../assets/images/WhatsApp Image 2026-07-23 at 11.52.54 AM.jpeg';

const whyChooseUs = [
  { icon: Users, title: 'Experienced Team', desc: 'Over a decade of culinary excellence and flawless event execution.' },
  { icon: Utensils, title: 'Fresh Ingredients', desc: 'Locally sourced, organic produce ensuring premium taste and quality.' },
  { icon: Star, title: 'Professional Service', desc: 'Highly trained staff dedicated to providing white-glove hospitality.' },
  { icon: Clock, title: 'On-Time Delivery', desc: 'Punctual setup and service, so your event runs seamlessly.' },
  { icon: Heart, title: 'Customized Menus', desc: 'Bespoke culinary journeys tailored to your unique preferences.' },
  { icon: Award, title: 'Affordable Packages', desc: 'Premium catering solutions that respect your event budget.' }
];

const featuredServices = [
  {
    title: 'Corporate Catering',
    desc: 'Impress your clients and nourish your team with refined boardroom menus.',
    img: featImg1
  },
  {
    title: 'Wedding Catering',
    desc: 'Unforgettable culinary experiences for your special day, from Ruracios to modern receptions.',
    img: featImg2
  },
  {
    title: 'Private Chef',
    desc: 'Restaurant-grade fine dining in the intimacy of your own home.',
    img: featImg3
  },
  {
    title: 'Outdoor Catering',
    desc: 'Premium buffet and live station setups for garden parties and outdoor events.',
    img: featImg4
  }
];

export default function Home() {
  return (
    <div className="pt-0">
      <SEO 
        title="Premium Catering Services in Nairobi" 
        description="Agnes Catering provides premium catering services in Nairobi for weddings, corporate events, and private dining. Experience culinary excellence rooted in Kenyan heritage."
      />
      <HeroCarousel />

      {/* Why Choose Agnes */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <span className="text-label-caps text-secondary uppercase tracking-[0.2em] mb-4 block">The Agnes Difference</span>
          <h2 className="text-headline-md text-primary mb-16">Why Choose Us</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((feature, idx) => (
              <div key={idx} className="bg-surface p-8 border border-surface-variant rounded-xl shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-headline-sm text-primary mb-3">{feature.title}</h3>
                <p className="text-body-md text-on-surface-variant">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="py-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1">
          <div className="relative inline-block mb-4">
            <span className="text-label-caps text-secondary uppercase tracking-[0.2em]">Our Story</span>
            <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-secondary"></div>
          </div>
          <h3 className="text-headline-md text-primary mb-8">Culinary excellence rooted in Kenyan heritage.</h3>
          <p className="text-body-lg text-on-surface-variant mb-6 leading-relaxed">
            At Agnes Catering, we believe that food is more than sustenance; it is a shared language of celebration. Our philosophy merges traditional Kenyan techniques with contemporary flavors, sourcing only the finest seasonal ingredients to craft bespoke menus.
          </p>
          <Link to="/about" className="border-b-2 border-primary text-primary text-label-caps py-2 hover:text-secondary hover:border-secondary transition-all inline-block mt-4">
            READ MORE ABOUT AGNES
          </Link>
        </div>
        
        <div className="order-1 lg:order-2">
          <div className="rounded-2xl overflow-hidden shadow-2xl relative">
            <img src="https://images.unsplash.com/photo-1544025162-81111420d4d9?q=80&w=1976&auto=format&fit=crop" alt="Agnes Catering" className="w-full h-full object-cover aspect-[4/3]" />
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <span className="text-label-caps text-secondary uppercase tracking-widest block mb-4">What We Do</span>
            <h2 className="text-headline-md">Featured Services</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service, idx) => (
              <div key={idx} className="bg-white text-primary rounded-xl overflow-hidden flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <img src={service.img} alt={service.title} className="h-48 w-full object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-headline-sm mb-3">{service.title}</h3>
                  <p className="text-body-md text-on-surface-variant mb-6 flex-grow">{service.desc}</p>
                  <a href={`https://wa.me/254797453969?text=Hello%20Agnes%20Catering%2C%20I%20would%20like%20to%20book%20your%20${encodeURIComponent(service.title)}%20service.`} target="_blank" rel="noreferrer" className="w-full inline-flex items-center justify-center gap-2 border border-secondary text-primary font-label-caps py-3 px-4 rounded hover:bg-secondary-container transition-colors">
                    <QrCode className="w-4 h-4" /> Book on WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="inline-block border border-white text-white px-8 py-4 rounded-full text-label-caps hover:bg-white hover:text-primary transition-colors">
              VIEW ALL SERVICES
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-24">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <span className="text-label-caps text-secondary uppercase tracking-[0.2em] mb-4 block">Visual Delights</span>
          <h2 className="text-headline-md text-primary mb-12">A Taste of Our Events</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <img src={featImg2} alt="Gallery 1" className="rounded-xl w-full h-48 object-cover hover:opacity-80 transition-opacity cursor-pointer" />
            <img src={featImg1} alt="Gallery 2" className="rounded-xl w-full h-48 object-cover hover:opacity-80 transition-opacity cursor-pointer" />
            <img src={featImg4} alt="Gallery 3" className="rounded-xl w-full h-48 object-cover hover:opacity-80 transition-opacity cursor-pointer hidden md:block" />
            <img src={featImg3} alt="Gallery 4" className="rounded-xl w-full h-48 object-cover hover:opacity-80 transition-opacity cursor-pointer hidden md:block" />
          </div>
          
          <Link to="/gallery" className="text-primary font-label-caps hover:text-secondary transition-colors underline underline-offset-4">
            EXPLORE FULL GALLERY
          </Link>
        </div>
      </section>

      <Testimonials />

      {/* CTA Section */}
      <section className="py-24 bg-surface-container-high border-t border-surface-variant">
        <div className="max-w-3xl mx-auto px-margin-mobile text-center">
          <h2 className="text-display-lg-mobile md:text-display-lg text-primary mb-6">Ready to make your event unforgettable?</h2>
          <p className="text-body-lg text-on-surface-variant mb-10">
            Contact us today to discuss your vision, customize your menu, and secure your date. Let us bring the Agnes Catering excellence to your table.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/254797453969?text=Hello%20Agnes%20Catering%2C%20I%20would%20like%20to%20make%20a%20booking%20inquiry." target="_blank" rel="noreferrer" className="bg-primary text-white px-10 py-5 rounded-full text-label-caps uppercase tracking-widest hover:bg-primary-container transition-all shadow-lg flex items-center justify-center gap-2">
              <QrCode className="w-5 h-5" /> Book Now via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
