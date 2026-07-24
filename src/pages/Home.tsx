import React from 'react';
import { QrCode, Star, Users, Utensils, Clock, Heart, Award, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Testimonials from '../components/Testimonials';
import HeroCarousel from '../components/HeroCarousel';
import SEO from '../components/SEO';

import featImg1 from '../assets/images/WhatsApp Image 2026-07-23 at 11.56.57 AM.jpeg';
import featImg2 from '../assets/images/WhatsApp Image 2026-07-23 at 11.57.08 AM.jpeg';
import featImg3 from '../assets/images/WhatsApp Image 2026-07-23 at 11.56.56 AM.jpeg';
import featImg4 from '../assets/images/WhatsApp Image 2026-07-23 at 11.52.54 AM.jpeg';

const whyChooseUs = [
  { icon: Users, title: 'Experienced Team', desc: 'Over a decade of culinary excellence and flawless event execution across Nairobi.' },
  { icon: Utensils, title: 'Fresh Ingredients', desc: 'Locally sourced, seasonal produce ensuring premium taste and quality in every dish.' },
  { icon: Star, title: 'Professional Service', desc: 'Highly trained staff dedicated to providing white-glove hospitality at your event.' },
  { icon: Clock, title: 'On-Time Delivery', desc: 'Punctual setup and service, so your event runs seamlessly from start to finish.' },
  { icon: Heart, title: 'Customized Menus', desc: 'Bespoke culinary journeys tailored to your unique preferences and dietary needs.' },
  { icon: Award, title: 'Affordable Packages', desc: 'Premium catering solutions that respect your event budget without compromise.' }
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
      <section className="py-16 md:py-24 bg-surface-container-low">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16 text-center">
          <span className="text-xs text-secondary uppercase tracking-[0.2em] mb-3 block font-label-caps">The Agnes Difference</span>
          <h2 className="text-[24px] md:text-[28px] text-primary mb-12 font-display-lg">Why Choose Us</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((feature, idx) => (
              <div key={idx} className="bg-surface p-6 md:p-8 border border-surface-variant rounded-xl shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-14 h-14 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg text-primary mb-2 font-display-lg">{feature.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="py-16 md:py-24 max-w-[1280px] mx-auto px-4 md:px-16 grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="order-2 lg:order-1">
          <span className="text-xs text-secondary uppercase tracking-[0.2em] mb-3 block font-label-caps">Our Story</span>
          <h3 className="text-[24px] md:text-[28px] text-primary mb-6 font-display-lg leading-tight">Culinary excellence rooted in Kenyan heritage.</h3>
          <p className="text-sm md:text-base text-on-surface-variant mb-4 leading-relaxed">
            At Agnes Catering, we believe that food is more than sustenance — it is a shared language of celebration. Our philosophy merges traditional Kenyan techniques with contemporary flavors, sourcing only the finest seasonal ingredients.
          </p>
          <p className="text-sm md:text-base text-on-surface-variant mb-6 leading-relaxed">
            From our humble beginnings in a home kitchen to becoming one of Nairobi's most trusted catering services, every dish we create carries the warmth of our heritage.
          </p>
          <Link to="/about" className="text-xs text-primary font-bold uppercase tracking-widest hover:text-secondary transition-colors inline-flex items-center gap-2 border-b-2 border-primary hover:border-secondary pb-1 font-label-caps">
            READ MORE ABOUT AGNES →
          </Link>
        </div>
        
        <div className="order-1 lg:order-2">
          <div className="rounded-2xl overflow-hidden shadow-2xl relative">
            <img 
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1977&auto=format&fit=crop" 
              alt="Agnes Catering Chef" 
              className="w-full object-cover aspect-[4/3]" 
            />
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16">
          <div className="text-center mb-12">
            <span className="text-xs text-secondary uppercase tracking-widest block mb-3 font-label-caps">What We Do</span>
            <h2 className="text-[24px] md:text-[28px] font-display-lg">Featured Services</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {featuredServices.map((service, idx) => (
              <div key={idx} className="bg-white text-primary rounded-xl overflow-hidden flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <img src={service.img} alt={service.title} className="h-40 md:h-48 w-full object-cover" />
                <div className="p-5 md:p-6 flex flex-col flex-grow">
                  <h3 className="text-base md:text-lg mb-2 font-display-lg">{service.title}</h3>
                  <p className="text-xs md:text-sm text-on-surface-variant mb-5 flex-grow leading-relaxed">{service.desc}</p>
                  <a 
                    href={`https://wa.me/254797453969?text=Hello%20Agnes%20Catering%2C%20I%20would%20like%20to%20book%20your%20${encodeURIComponent(service.title)}%20service.`} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="w-full inline-flex items-center justify-center gap-2 border border-secondary text-primary font-label-caps py-3 px-4 rounded-lg hover:bg-secondary-container transition-colors text-xs tracking-widest"
                  >
                    <MessageCircle className="w-3.5 h-3.5" /> Book via WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-block border border-white text-white px-8 py-3.5 rounded-full text-xs font-bold tracking-widest hover:bg-white hover:text-primary transition-colors">
              VIEW ALL SERVICES
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16 text-center">
          <span className="text-xs text-secondary uppercase tracking-[0.2em] mb-3 block font-label-caps">Visual Delights</span>
          <h2 className="text-[24px] md:text-[28px] text-primary mb-10 font-display-lg">A Taste of Our Events</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            <img src={featImg2} alt="Gallery 1" className="rounded-xl w-full h-36 md:h-48 object-cover hover:opacity-80 transition-opacity cursor-pointer" />
            <img src={featImg1} alt="Gallery 2" className="rounded-xl w-full h-36 md:h-48 object-cover hover:opacity-80 transition-opacity cursor-pointer" />
            <img src={featImg4} alt="Gallery 3" className="rounded-xl w-full h-36 md:h-48 object-cover hover:opacity-80 transition-opacity cursor-pointer hidden md:block" />
            <img src={featImg3} alt="Gallery 4" className="rounded-xl w-full h-36 md:h-48 object-cover hover:opacity-80 transition-opacity cursor-pointer hidden md:block" />
          </div>
          
          <Link to="/gallery" className="text-xs text-primary font-bold uppercase tracking-widest hover:text-secondary transition-colors inline-flex items-center gap-1 font-label-caps">
            EXPLORE FULL GALLERY →
          </Link>
        </div>
      </section>

      <Testimonials />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-[28px] md:text-[40px] text-white mb-4 font-display-lg leading-tight">Ready to make your event unforgettable?</h2>
          <p className="text-sm md:text-base text-white/70 mb-8 leading-relaxed">
            Contact us today to discuss your vision, customize your menu, and secure your date. Let us bring Agnes Catering excellence to your table.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a 
              href="https://wa.me/254797453969?text=Hello%20Agnes%20Catering%2C%20I%20would%20like%20to%20make%20a%20booking%20inquiry." 
              target="_blank" 
              rel="noreferrer" 
              className="bg-white text-primary px-8 py-4 rounded-full text-xs font-bold tracking-widest hover:bg-white/90 transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" /> Book Now via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
