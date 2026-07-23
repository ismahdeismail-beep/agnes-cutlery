import React from 'react';
import { Award, Heart, Clock, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';

import aboutImg from '../assets/images/WhatsApp Image 2026-07-23 at 11.57.07 AM.jpeg';

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <SEO 
        title="Our Story" 
        description="Learn about Agnes Catering, our heritage, and our commitment to culinary excellence in Nairobi."
      />
      {/* Hero */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-label-caps text-secondary mb-4 block uppercase tracking-widest">Our Story</span>
            <h1 className="text-display-lg-mobile md:text-display-lg text-primary mb-8">Crafting Memories Through Food</h1>
            <p className="text-body-lg text-on-surface-variant mb-6">
              Founded on the belief that great food brings people together, Agnes Catering has grown from a passionate home kitchen into one of Nairobi's premier catering services.
            </p>
            <p className="text-body-lg text-on-surface-variant">
              We specialize in blending rich Kenyan heritage with modern culinary techniques, ensuring every dish we serve is a testament to quality, flavor, and elegance.
            </p>
          </div>
          <div className="relative">
            <img src={aboutImg} alt="Agnes Catering Chef" className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/5]" />
            <div className="absolute -bottom-8 -left-8 bg-surface p-8 rounded-xl shadow-xl border border-surface-variant">
              <p className="text-display-sm text-secondary font-bold">10+</p>
              <p className="text-label-caps text-primary uppercase tracking-widest">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="text-headline-md text-primary">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-surface p-8 rounded-xl border border-surface-variant text-center shadow-sm">
              <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-headline-sm text-primary mb-4">Passion</h3>
              <p className="text-body-md text-on-surface-variant">We pour love into every recipe, ensuring each bite is an experience to remember.</p>
            </div>
            <div className="bg-surface p-8 rounded-xl border border-surface-variant text-center shadow-sm">
              <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-headline-sm text-primary mb-4">Quality</h3>
              <p className="text-body-md text-on-surface-variant">Only the freshest, locally sourced ingredients make it into our kitchen.</p>
            </div>
            <div className="bg-surface p-8 rounded-xl border border-surface-variant text-center shadow-sm">
              <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-headline-sm text-primary mb-4">Reliability</h3>
              <p className="text-body-md text-on-surface-variant">Punctual execution and seamless service so you can focus on your guests.</p>
            </div>
            <div className="bg-surface p-8 rounded-xl border border-surface-variant text-center shadow-sm">
              <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-headline-sm text-primary mb-4">Professionalism</h3>
              <p className="text-body-md text-on-surface-variant">Expert staff trained to deliver discreet, high-end hospitality.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
