import React from 'react';
import Testimonials from '../components/Testimonials';
import SEO from '../components/SEO';

export default function TestimonialsPage() {
  return (
    <div className="pt-24 pb-32 md:pb-24">
      <SEO 
        title="Client Testimonials" 
        description="Read what our clients have to say about their experiences with Agnes Catering."
      />
      <div className="max-w-[1280px] mx-auto px-4 md:px-16 mb-8 pt-8">
        <h1 className="text-[32px] md:text-[56px] text-primary text-center font-display-lg leading-tight">Client Stories</h1>
        <p className="text-sm md:text-base text-on-surface-variant text-center max-w-2xl mx-auto mt-4 leading-relaxed">
          Read what our clients have to say about their experiences with Agnes Catering.
        </p>
      </div>
      <Testimonials />
    </div>
  );
}
