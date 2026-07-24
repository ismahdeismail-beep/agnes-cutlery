import React from 'react';
import { Award, Heart, Clock, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';

export default function About() {
  return (
    <div className="pt-24 pb-32 md:pb-24">
      <SEO 
        title="Our Story" 
        description="Learn about Agnes Catering, our heritage, and our commitment to culinary excellence in Nairobi."
      />
      
      {/* Hero */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-16 mb-16 md:mb-24">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <span className="text-xs text-secondary mb-3 block uppercase tracking-widest font-label-caps">Our Story</span>
            <h1 className="text-[32px] md:text-[56px] text-primary mb-6 font-display-lg leading-tight">Crafting Memories Through Food</h1>
            <p className="text-sm md:text-base text-on-surface-variant mb-4 leading-relaxed">
              Founded on the belief that great food brings people together, Agnes Catering has grown from a passionate home kitchen into one of Nairobi's premier catering services.
            </p>
            <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
              We specialize in blending rich Kenyan heritage with modern culinary techniques, ensuring every dish we serve is a testament to quality, flavor, and elegance.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1977&auto=format&fit=crop" 
              alt="Agnes Catering Chef" 
              className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]" 
            />
            <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-xl shadow-xl">
              <p className="text-2xl font-bold font-display-lg">10+</p>
              <p className="text-xs uppercase tracking-widest opacity-80">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-surface-container-low py-16 md:py-24">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16">
          <div className="text-center mb-12">
            <h2 className="text-[24px] md:text-[28px] text-primary font-display-lg">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Heart, title: 'Passion', desc: 'We pour love into every recipe, ensuring each bite is an experience to remember.' },
              { icon: ShieldCheck, title: 'Quality', desc: 'Only the freshest, locally sourced ingredients make it into our kitchen.' },
              { icon: Clock, title: 'Reliability', desc: 'Punctual execution and seamless service so you can focus on your guests.' },
              { icon: Award, title: 'Professionalism', desc: 'Expert staff trained to deliver discreet, high-end hospitality.' },
            ].map((item, i) => (
              <div key={i} className="bg-surface p-6 rounded-xl border border-surface-variant text-center shadow-sm">
                <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-base text-primary mb-2 font-display-lg">{item.title}</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
