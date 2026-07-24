import React from 'react';
import { Mail, MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';

export default function Contact() {
  return (
    <div className="pt-24 pb-32 md:pb-24 max-w-[1280px] mx-auto px-4 md:px-16">
      <SEO 
        title="Contact Us" 
        description="Get in touch with Agnes Catering in Nairobi. Contact us via phone, email, or WhatsApp to discuss your next event."
      />
      <div className="text-center mb-12">
        <span className="text-xs text-secondary mb-3 block uppercase tracking-widest font-label-caps">Get In Touch</span>
        <h1 className="text-[32px] md:text-[56px] text-primary font-display-lg leading-tight">Contact Agnes Catering</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
        <div>
          <h2 className="text-xl md:text-2xl text-primary mb-6 font-display-lg">Let's discuss your next event.</h2>
          <div className="space-y-5 mb-8">
            {[
              { icon: Phone, label: 'Phone / WhatsApp', value: '+254 797 453 969', href: 'tel:+254797453969' },
              { icon: Mail, label: 'Email', value: 'karreyaggie@gmail.com', href: 'mailto:karreyaggie@gmail.com' },
              { icon: MapPin, label: 'Location', value: 'Westlands, Nairobi, Kenya', href: null },
              { icon: Clock, label: 'Business Hours', value: 'Mon - Sat: 8:00 AM - 6:00 PM', href: null },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-[10px] text-primary uppercase tracking-widest font-bold font-label-caps">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-sm text-on-surface-variant hover:text-secondary transition-colors">{item.value}</a>
                  ) : (
                    <p className="text-sm text-on-surface-variant">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <a 
            href="https://wa.me/254797453969?text=Hello%20Agnes%20Catering%2C%20I%20would%20like%20to%20make%20an%20inquiry." 
            target="_blank" 
            rel="noreferrer" 
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-full text-xs font-bold tracking-widest hover:bg-primary-container transition-all shadow-lg"
          >
            <MessageCircle className="w-4 h-4" /> Message on WhatsApp
          </a>
        </div>

        <div className="bg-surface p-6 md:p-8 border border-surface-variant rounded-xl shadow-lg">
          <h3 className="text-lg text-primary mb-5 font-display-lg">Send us a message</h3>
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("For the fastest response, please contact us via WhatsApp!"); }}>
            <div>
              <label htmlFor="name" className="block text-xs font-bold text-on-surface-variant mb-1.5 tracking-wider uppercase">Full Name</label>
              <input type="text" id="name" className="w-full px-4 py-3 bg-surface-container-low border border-surface-variant rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-bold text-on-surface-variant mb-1.5 tracking-wider uppercase">Email Address</label>
              <input type="email" id="email" className="w-full px-4 py-3 bg-surface-container-low border border-surface-variant rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" required />
            </div>
            <div>
              <label htmlFor="eventType" className="block text-xs font-bold text-on-surface-variant mb-1.5 tracking-wider uppercase">Event Type</label>
              <select id="eventType" className="w-full px-4 py-3 bg-surface-container-low border border-surface-variant rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary">
                <option>Wedding</option>
                <option>Corporate Event</option>
                <option>Private Dining</option>
                <option>Birthday</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-bold text-on-surface-variant mb-1.5 tracking-wider uppercase">Message</label>
              <textarea id="message" rows={4} className="w-full px-4 py-3 bg-surface-container-low border border-surface-variant rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" required></textarea>
            </div>
            <button type="submit" className="w-full bg-primary text-white px-8 py-3.5 rounded-lg text-xs font-bold tracking-widest hover:bg-primary-container transition-all shadow-md">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
