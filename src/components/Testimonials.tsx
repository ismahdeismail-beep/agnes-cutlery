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
    text: "Having an Agnes chef at our home for my husband's birthday was the best decision. The customized menu featuring local Kenyan ingredients was simply phenomenal.",
    rating: 5,
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-surface-container-low">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16">
        <div className="text-center mb-12">
          <span className="text-xs text-secondary uppercase tracking-[0.2em] mb-3 block font-label-caps">Reflections of Excellence</span>
          <h2 className="text-[24px] md:text-[28px] text-primary font-display-lg">Guest Testimonials</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-surface p-6 md:p-8 border border-surface-variant rounded-xl shadow-sm flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-xs text-on-surface italic mb-6 flex-grow leading-relaxed">
                "{testimonial.text}"
              </p>
              <div>
                <p className="text-[10px] text-primary uppercase tracking-widest font-bold font-label-caps">{testimonial.name}</p>
                <p className="text-[11px] text-on-surface-variant mt-1">{testimonial.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
