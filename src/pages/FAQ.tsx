import React, { useState } from 'react';
import { Plus, Minus, MessageCircle } from 'lucide-react';
import { cn } from '../lib/utils';
import SEO from '../components/SEO';

const faqs = [
  {
    question: "How do I book your catering services?",
    answer: "The fastest way to book is by clicking any 'Book via WhatsApp' button on our website. This opens a direct chat with Agnes where we discuss your event details, menu preferences, and secure your date."
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
    answer: "Absolutely. Our catering packages can include professional waitstaff, chefs, and bartenders. We also provide all necessary catering equipment, serving dishes, and can assist with sourcing tables, chairs, and linens."
  },
  {
    question: "Can menus be customized?",
    answer: "Yes! We pride ourselves on creating bespoke menus. Whether you have specific dietary requirements, a particular theme, or favorite family recipes, we will work with you to design the perfect culinary experience."
  },
  {
    question: "How early should I book?",
    answer: "For large events like weddings and corporate functions, we recommend booking 3-6 months in advance. For smaller events or private chef services, 2-4 weeks notice is ideal, though we accommodate short-notice requests when possible."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-24 pb-32 md:pb-24 max-w-3xl mx-auto px-4 md:px-8">
      <SEO 
        title="Frequently Asked Questions" 
        description="Find answers to common questions about our catering services, pricing, availability, and more."
      />
      <div className="text-center mb-12">
        <span className="text-xs text-secondary mb-3 block uppercase tracking-widest font-label-caps">Questions & Answers</span>
        <h1 className="text-[32px] md:text-[56px] text-primary font-display-lg leading-tight">Frequently Asked Questions</h1>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-surface-variant rounded-xl overflow-hidden bg-surface">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-5 py-4 flex items-center justify-between text-left focus:outline-none active:bg-surface-container-low/50 transition-colors"
            >
              <span className="text-sm text-primary font-medium pr-4">{faq.question}</span>
              {openIndex === index ? (
                <Minus className="w-4 h-4 text-secondary flex-shrink-0" />
              ) : (
                <Plus className="w-4 h-4 text-primary flex-shrink-0" />
              )}
            </button>
            <div
              className={cn(
                "px-5 overflow-hidden transition-all duration-300 ease-in-out",
                openIndex === index ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0"
              )}
            >
              <p className="text-xs text-on-surface-variant pt-3 border-t border-surface-variant/50 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center bg-surface-container-low p-6 md:p-8 rounded-xl border border-surface-variant">
        <h3 className="text-lg text-primary mb-3 font-display-lg">Still have questions?</h3>
        <p className="text-xs text-on-surface-variant mb-5">We're here to help make your event planning seamless.</p>
        <a 
          href="https://wa.me/254797453969?text=Hello%20Agnes%20Catering%2C%20I%20have%20a%20question%20about%20your%20services." 
          target="_blank" 
          rel="noreferrer" 
          className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full text-xs font-bold tracking-widest hover:bg-primary-container transition-all shadow-lg"
        >
          <MessageCircle className="w-4 h-4" /> Ask via WhatsApp
        </a>
      </div>
    </div>
  );
}
