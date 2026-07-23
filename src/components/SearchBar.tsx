import React, { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const searchData = [
  { title: 'Weddings', category: 'Service', path: '/weddings', description: 'Catering for your special day' },
  { title: 'Corporate Events', category: 'Service', path: '/services', description: 'Professional catering for businesses' },
  { title: 'Private Chef', category: 'Service', path: '/private-chef', description: 'Bespoke fine dining at home' },
  { title: 'Traditional Kenyan', category: 'Menu', path: '/menu', description: 'Nyama Choma, Ugali, Sukuma Wiki' },
  { title: 'International Cuisine', category: 'Menu', path: '/menu', description: 'Global flavors and dishes' },
  { title: 'Breakfast & Brunch', category: 'Menu', path: '/menu', description: 'Morning delights' },
  { title: 'Desserts', category: 'Menu', path: '/menu', description: 'Sweet treats to finish your meal' },
  { title: 'Gallery', category: 'Page', path: '/gallery', description: 'View our past events' },
  { title: 'Contact Us', category: 'Page', path: '/contact', description: 'Get in touch for inquiries' },
  { title: 'FAQ', category: 'Page', path: '/faq', description: 'Frequently asked questions' },
];

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const results = query
    ? searchData.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) || 
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleSelect = (path: string) => {
    navigate(path);
    setIsOpen(false);
    setQuery('');
  };

  return (
    <div className="relative" ref={containerRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface-variant/50 transition-colors"
        aria-label="Search"
      >
        <Search className="w-5 h-5" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-full mt-2 w-[300px] md:w-[400px] bg-surface rounded-2xl shadow-xl border border-surface-variant overflow-hidden z-50"
          >
            <div className="p-4 border-b border-surface-variant flex items-center gap-3 text-on-surface">
              <Search className="w-5 h-5 text-on-surface-variant" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search services, menu, or pages..."
                className="flex-1 bg-transparent border-none outline-none text-body-md"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              {query && (
                <button onClick={() => setQuery('')}>
                  <X className="w-4 h-4 text-on-surface-variant hover:text-on-surface" />
                </button>
              )}
            </div>

            <div className="max-h-[300px] overflow-y-auto">
              {query && results.length === 0 ? (
                <div className="p-6 text-center text-on-surface-variant">
                  No results found for "{query}"
                </div>
              ) : (
                <div className="flex flex-col">
                  {results.map((result, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelect(result.path)}
                      className="w-full text-left p-4 hover:bg-surface-variant/30 transition-colors flex flex-col gap-1 border-b border-surface-variant/50 last:border-0"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-primary">{result.title}</span>
                        <span className="text-xs uppercase tracking-wider text-secondary font-label-caps">{result.category}</span>
                      </div>
                      <span className="text-sm text-on-surface-variant">{result.description}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
