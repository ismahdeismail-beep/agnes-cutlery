import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Wanjiku K.',
    event: 'Private Wedding',
    text: 'Agnes Catering transformed our traditional Ruracio into an unforgettable culinary experience. The Nyama Choma was exceptional, and the service was impeccable.',
    rating: 5,
  },
  {
    id: 2,
    name: 'David O.',
    event: 'Corporate Gala',
    text: 'We hired Agnes for our annual company dinner in Westlands. The presentation of the Swahili Pilau and the professionalism of the staff left all our directors impressed.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Sarah M.',
    event: 'Private Chef Service',
    text: 'Having an Agnes chef at our home for my husband\'s birthday was the best decision. The customized menu featuring local Kenyan ingredients was simply phenomenal.',
    rating: 5,
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-16">
          <span className="text-label-caps text-secondary uppercase tracking-[0.2em] mb-4 block">Reflections of Excellence</span>
          <h2 className="text-headline-md text-primary">Guest Testimonials</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-surface p-8 border border-surface-variant rounded-xl shadow-sm flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-body-md text-on-surface italic mb-8 flex-grow">
                "{testimonial.text}"
              </p>
              <div>
                <p className="text-label-caps text-primary uppercase">{testimonial.name}</p>
                <p className="text-sm text-on-surface-variant mt-1">{testimonial.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
