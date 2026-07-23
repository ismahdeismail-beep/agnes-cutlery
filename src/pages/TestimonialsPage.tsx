import React from 'react';
import Testimonials from '../components/Testimonials';
import SEO from '../components/SEO';

export default function TestimonialsPage() {
  return (
    <div className="pt-24 pb-24">
      <SEO 
        title="Client Testimonials" 
        description="Read what our clients have to say about their experiences with Agnes Catering. We take pride in delivering unforgettable culinary moments."
      />
      {/* We reuse the Testimonials component but could expand it for a dedicated page */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-8 pt-8">
        <h1 className="text-display-lg-mobile md:text-display-lg text-primary text-center">Client Stories</h1>
        <p className="text-body-lg text-on-surface-variant text-center max-w-2xl mx-auto mt-6">
          Read what our clients have to say about their experiences with Agnes Catering. We take pride in delivering unforgettable culinary moments.
        </p>
      </div>
      <Testimonials />
    </div>
  );
}
