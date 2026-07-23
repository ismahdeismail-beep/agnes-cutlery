import React, { useState } from 'react';
import { MessageCircle, X, Send, Calendar, FileText, User } from 'lucide-react';
import { cn } from '../lib/utils';

export default function QuickChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);

  const handleOpen = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setHasUnread(false);
    }
  };

  const quickOptions = [
    {
      label: "Check Availability",
      icon: Calendar,
      message: "Hello Agnes Catering, I would like to check your availability for an upcoming event."
    },
    {
      label: "Request Menu",
      icon: FileText,
      message: "Hello Agnes Catering, could you please share your full catering menu?"
    },
    {
      label: "Talk to Human",
      icon: User,
      message: "Hello Agnes Catering, I would like to speak to someone about your services."
    }
  ];

  return (
    <div className="relative">
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 bg-surface border border-surface-variant rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 transform origin-bottom-right">
          <div className="bg-primary text-on-primary p-4 flex justify-between items-center">
            <div>
              <h4 className="font-bold">Agnes Catering</h4>
              <p className="text-xs opacity-90">Typically replies instantly</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-primary-container p-1 rounded-full transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="p-4 bg-surface-container-low h-[300px] overflow-y-auto flex flex-col gap-3">
            <div className="bg-surface p-3 rounded-lg rounded-tl-none border border-surface-variant max-w-[85%] self-start shadow-sm">
              <p className="text-sm text-on-surface-variant">Hello! 👋 Planning an event? How can we help you today?</p>
            </div>
            
            <div className="flex flex-col gap-2 mt-2">
              <p className="text-xs text-on-surface-variant text-center mb-1 uppercase tracking-wider font-semibold">Quick Options</p>
              {quickOptions.map((opt, i) => (
                <a 
                  key={i}
                  href={`https://wa.me/254797453969?text=${encodeURIComponent(opt.message)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-primary/5 hover:bg-primary/10 text-primary text-sm p-3 rounded-lg border border-primary/20 transition-colors text-left font-medium flex items-center gap-3"
                >
                  <opt.icon className="w-4 h-4" />
                  {opt.label}
                </a>
              ))}
            </div>
          </div>
          <div className="p-4 border-t border-surface-variant bg-surface flex gap-2">
            <a 
              href="https://wa.me/254797453969?text=Hello%20Agnes%20Catering%2C%20I%20have%20a%20question."
              target="_blank"
              rel="noreferrer"
              className="w-full bg-secondary text-on-secondary py-3 rounded-lg text-sm font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity uppercase tracking-widest"
            >
              <Send className="w-4 h-4" /> Custom Message
            </a>
          </div>
        </div>
      )}

      <button 
        onClick={handleOpen}
        className={cn(
          "w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-transform group relative",
          isOpen ? "bg-surface-variant text-on-surface border border-outline-variant" : "bg-secondary-container text-on-secondary-container hover:scale-110"
        )}
      >
        {isOpen ? <X className="w-8 h-8" /> : <MessageCircle className="w-8 h-8" />}
        
        {!isOpen && hasUnread && (
          <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 border-2 border-white rounded-full animate-pulse"></span>
        )}
        
        {!isOpen && (
          <div className="absolute right-20 bg-white/90 px-4 py-2 rounded-xl text-primary text-sm font-semibold whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Quick Chat
          </div>
        )}
      </button>
    </div>
  );
}
