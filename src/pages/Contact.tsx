import React from 'react';
import { Mail, MapPin, Phone, Clock, QrCode } from 'lucide-react';
import SEO from '../components/SEO';

export default function Contact() {
  return (
    <div className="pt-32 pb-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      <SEO 
        title="Contact Us" 
        description="Get in touch with Agnes Catering in Nairobi. Contact us via phone, email, or WhatsApp to discuss your next event."
      />
      <div className="text-center mb-16">
        <span className="text-label-caps text-secondary mb-4 block uppercase tracking-widest">Get In Touch</span>
        <h1 className="text-display-lg-mobile md:text-display-lg text-primary">Contact Agnes Catering</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-headline-md text-primary mb-8">Let's discuss your next event.</h2>
          <div className="space-y-8 mb-12">
            <div className="flex items-start gap-4">
              <div className="p-4 bg-secondary-container rounded-full text-on-secondary-container">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-label-caps text-primary uppercase">Phone / WhatsApp</p>
                <p className="text-body-lg text-on-surface-variant">+254 797 453 969</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-4 bg-secondary-container rounded-full text-on-secondary-container">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-label-caps text-primary uppercase">Email</p>
                <p className="text-body-lg text-on-surface-variant">karreyaggie@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-4 bg-secondary-container rounded-full text-on-secondary-container">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-label-caps text-primary uppercase">Location</p>
                <p className="text-body-lg text-on-surface-variant">Westlands, Nairobi, Kenya</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-4 bg-secondary-container rounded-full text-on-secondary-container">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <p className="text-label-caps text-primary uppercase">Business Hours</p>
                <p className="text-body-lg text-on-surface-variant">Mon - Sat: 8:00 AM - 6:00 PM<br/>Sun: Events Only</p>
              </div>
            </div>
          </div>
          
          <a href="https://wa.me/254797453969?text=Hello%20Agnes%20Catering%2C%20I%20would%20like%20to%20make%20an%20inquiry." target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-primary text-on-primary px-8 py-4 rounded text-label-caps uppercase tracking-widest hover:bg-primary-container transition-all shadow-lg">
            <QrCode className="w-5 h-5" /> Message on WhatsApp
          </a>
        </div>

        <div className="bg-surface p-8 border border-surface-variant rounded-xl shadow-lg">
          <h3 className="text-headline-sm text-primary mb-6">Send us a message</h3>
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("For the fastest response, please contact us via WhatsApp!"); }}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-on-surface-variant mb-2">Full Name</label>
              <input type="text" id="name" className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-on-surface-variant mb-2">Email Address</label>
              <input type="email" id="email" className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" required />
            </div>
            <div>
              <label htmlFor="eventType" className="block text-sm font-medium text-on-surface-variant mb-2">Event Type</label>
              <select id="eventType" className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary">
                <option>Wedding</option>
                <option>Corporate Event</option>
                <option>Private Dining</option>
                <option>Birthday</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-on-surface-variant mb-2">Message</label>
              <textarea id="message" rows={4} className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" required></textarea>
            </div>
            <button type="submit" className="w-full bg-secondary text-on-secondary px-8 py-4 rounded text-label-caps uppercase tracking-widest hover:opacity-90 transition-all shadow-md">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
