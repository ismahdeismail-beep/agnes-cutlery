import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { cn } from '../lib/utils';
import SEO from '../components/SEO';

const faqs = [
  {
    question: "How do I book your catering services?",
    answer: "The fastest and most direct way to book is by clicking any of the 'Book via WhatsApp' buttons on our website. This will open a direct chat with Agnes where we can discuss your event details, menu preferences, and secure your date."
  },
  {
    question: "How much do you charge?",
    answer: "Our pricing varies depending on the type of event, guest count, and menu selection. We offer custom quotes tailored to your specific needs. Please contact us via WhatsApp with your event details for a precise estimate."
  },
  {
    question: "How many guests can you serve?",
    answer: "We cater to a wide range of event sizes, from intimate private dinners for 2 to large corporate galas and weddings for over 1000 guests. We have the team and equipment to scale our services appropriately."
  },
  {
    question: "Do you travel outside Nairobi?",
    answer: "Yes, while we are based in Nairobi, we frequently travel to cater events in surrounding areas and other parts of Kenya. Travel and logistical fees may apply depending on the distance."
  },
  {
    question: "Do you provide serving staff and equipment?",
    answer: "Absolutely. Our catering packages can include professional waitstaff, chefs, and bartenders. We also provide all necessary catering equipment, serving dishes, and can assist with sourcing tables, chairs, and linens if required."
  },
  {
    question: "Can menus be customized?",
    answer: "Yes! We pride ourselves on creating bespoke menus. Whether you have specific dietary requirements, a particular theme, or favorite family recipes, we will work with you to design the perfect culinary experience."
  },
  {
    question: "How early should I book?",
    answer: "For large events like weddings and corporate functions, we recommend booking at least 3-6 months in advance to secure your preferred date. For smaller events or private chef services, 2-4 weeks notice is ideal, though we do our best to accommodate short-notice requests when our schedule permits."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-32 pb-24 max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop">
      <SEO 
        title="Frequently Asked Questions" 
        description="Find answers to common questions about our catering services, pricing, availability, and more."
      />
      <div className="text-center mb-16">
        <span className="text-label-caps text-secondary mb-4 block uppercase tracking-widest">Questions & Answers</span>
        <h1 className="text-display-lg-mobile md:text-display-lg text-primary">Frequently Asked Questions</h1>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-surface-variant rounded-lg overflow-hidden bg-surface">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
            >
              <span className="text-headline-sm text-primary">{faq.question}</span>
              {openIndex === index ? (
                <Minus className="w-5 h-5 text-secondary flex-shrink-0" />
              ) : (
                <Plus className="w-5 h-5 text-primary flex-shrink-0" />
              )}
            </button>
            <div
              className={cn(
                "px-6 overflow-hidden transition-all duration-300 ease-in-out",
                openIndex === index ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
              )}
            >
              <p className="text-body-md text-on-surface-variant pt-2 border-t border-surface-variant">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center bg-surface-container-low p-8 rounded-xl border border-surface-variant">
        <h3 className="text-headline-sm text-primary mb-4">Still have questions?</h3>
        <p className="text-body-md text-on-surface-variant mb-6">We're here to help make your event planning seamless.</p>
        <a href="https://wa.me/254797453969?text=Hello%20Agnes%20Catering%2C%20I%20have%20a%20question%20about%20your%20services." target="_blank" rel="noreferrer" className="inline-block bg-primary text-on-primary px-8 py-3 rounded text-label-caps uppercase tracking-widest hover:bg-primary-container transition-all">
          Ask via WhatsApp
        </a>
      </div>
    </div>
  );
}
