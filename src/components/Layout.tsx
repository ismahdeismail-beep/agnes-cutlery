import React, { useState, useEffect } from 'react';
import { Menu, QrCode, Phone, Share2, Globe, Heart, Mail, MapPin, Wine, Utensils, Flower2, Facebook, Instagram } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';
import QuickChat from './QuickChat';
import SearchBar from './SearchBar';

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function Layout({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/';
  const isWeddings = location.pathname === '/weddings';

  return (
    <div className="flex flex-col min-h-screen">
      <header
        className={cn(
          'fixed top-0 w-full z-50 transition-all duration-300 ease-in-out border-b border-surface-variant',
          scrolled ? 'py-2 shadow-sm bg-surface/90 glass-nav' : 'py-4 bg-surface/80 glass-nav',
          (isHome || isWeddings) && !scrolled ? 'bg-transparent border-transparent text-white' : 'text-primary border-surface-variant'
        )}
      >
        <div className="flex justify-between items-center px-4 md:px-margin-desktop py-2 md:py-4 max-w-container-max mx-auto">
          <div className="flex items-center gap-2 md:gap-3">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="lg:hidden p-2 -ml-2 rounded-lg hover:bg-black/5 transition-colors"
              aria-label="Toggle Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-primary flex items-center justify-center shadow-md border border-secondary/40 group-hover:scale-105 transition-transform">
                <span className="text-secondary font-display-lg font-bold text-base md:text-lg">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-2xl font-bold tracking-wider font-display-lg leading-none">AGNES</span>
                <span className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] opacity-75 font-label-caps mt-0.5">Heritage Dining</span>
              </div>
            </Link>
          </div>
          <nav className="hidden xl:flex items-center gap-8">
            <Link to="/" className={cn("font-label-caps transition-colors text-sm uppercase tracking-wider", location.pathname === '/' ? "font-bold" : "hover:text-secondary")}>Home</Link>
            <Link to="/about" className={cn("font-label-caps transition-colors text-sm uppercase tracking-wider", location.pathname === '/about' ? "font-bold" : "hover:text-secondary")}>About</Link>
            <Link to="/services" className={cn("font-label-caps transition-colors text-sm uppercase tracking-wider", location.pathname === '/services' ? "font-bold" : "hover:text-secondary")}>Services</Link>
            <Link to="/gallery" className={cn("font-label-caps transition-colors text-sm uppercase tracking-wider", location.pathname === '/gallery' ? "font-bold" : "hover:text-secondary")}>Gallery</Link>
            <Link to="/testimonials" className={cn("font-label-caps transition-colors text-sm uppercase tracking-wider", location.pathname === '/testimonials' ? "font-bold" : "hover:text-secondary")}>Testimonials</Link>
            <Link to="/faq" className={cn("font-label-caps transition-colors text-sm uppercase tracking-wider", location.pathname === '/faq' ? "font-bold" : "hover:text-secondary")}>FAQ</Link>
            <Link to="/contact" className={cn("font-label-caps transition-colors text-sm uppercase tracking-wider", location.pathname === '/contact' ? "font-bold" : "hover:text-secondary")}>Contact</Link>
          </nav>
          <div className="flex items-center gap-2 md:gap-4">
            <div className={cn(
              "transition-colors",
              (isHome || isWeddings) && !scrolled ? "text-white" : "text-primary"
            )}>
              <SearchBar />
            </div>
            <a href="https://wa.me/254797453969?text=Hello%20Agnes%20Catering%2C%20I%20would%20like%20to%20make%20an%20inquiry." target="_blank" rel="noreferrer" className={cn(
              "px-5 py-2.5 rounded-full transition-all duration-300 hidden md:block font-label-caps tracking-widest text-sm",
              (isHome || isWeddings) && !scrolled ? "bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white hover:text-primary" : "bg-primary text-on-primary hover:bg-primary-container"
            )}>
              BOOK NOW
            </a>
          </div>
        </div>

        {/* Mobile Fullscreen Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-surface/98 glass-nav border-b border-surface-variant p-6 shadow-2xl flex flex-col gap-4 animate-in slide-in-from-top duration-300">
            <Link to="/" className="text-lg font-bold py-2 border-b border-surface-variant/40 text-primary">Home</Link>
            <Link to="/about" className="text-lg font-bold py-2 border-b border-surface-variant/40 text-primary">About</Link>
            <Link to="/services" className="text-lg font-bold py-2 border-b border-surface-variant/40 text-primary">Services</Link>
            <Link to="/menu" className="text-lg font-bold py-2 border-b border-surface-variant/40 text-primary">Menus</Link>
            <Link to="/gallery" className="text-lg font-bold py-2 border-b border-surface-variant/40 text-primary">Gallery</Link>
            <Link to="/private-chef" className="text-lg font-bold py-2 border-b border-surface-variant/40 text-primary">Private Dining</Link>
            <Link to="/weddings" className="text-lg font-bold py-2 border-b border-surface-variant/40 text-primary">Weddings</Link>
            <Link to="/testimonials" className="text-lg font-bold py-2 border-b border-surface-variant/40 text-primary">Testimonials</Link>
            <Link to="/faq" className="text-lg font-bold py-2 border-b border-surface-variant/40 text-primary">FAQ</Link>
            <Link to="/contact" className="text-lg font-bold py-2 text-primary">Contact</Link>
            <a href="https://wa.me/254797453969?text=Hello%20Agnes%20Catering%2C%20I%20would%20like%20to%20make%20an%20inquiry." target="_blank" rel="noreferrer" className="mt-4 bg-primary text-white text-center py-3.5 rounded-xl font-label-caps tracking-widest shadow-lg">
              BOOK VIA WHATSAPP
            </a>
          </div>
        )}
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-surface-container-high border-t border-surface-variant py-20 mt-auto">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="flex flex-col gap-6">
              <h2 className="text-display-lg text-primary">AGNES</h2>
              <p className="text-on-surface-variant">Exceptional catering for those who value the art of dining. Bringing Kenyan heritage to modern celebrations.</p>
              <div className="flex gap-4">
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white transition-all text-primary"><Facebook className="w-5 h-5" /></a>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center hover:bg-gradient-to-tr hover:from-[#fd5949] hover:to-[#d6249f] hover:border-transparent hover:text-white transition-all text-primary"><Instagram className="w-5 h-5" /></a>
                <a href="https://www.tiktok.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center hover:bg-black hover:border-black hover:text-white transition-all text-primary"><TikTokIcon className="w-5 h-5" /></a>
              </div>
            </div>
            
            <div>
              <h5 className="text-label-caps text-primary mb-8 tracking-widest uppercase">Quick Links</h5>
              <nav className="flex flex-col gap-4 text-on-surface-variant">
                <Link to="/about" className="hover:text-secondary transition-colors underline-offset-4 hover:underline">Our Story</Link>
                <Link to="/menu" className="hover:text-secondary transition-colors underline-offset-4 hover:underline">Menus</Link>
                <Link to="/private-chef" className="hover:text-secondary transition-colors underline-offset-4 hover:underline">Private Dining</Link>
                <Link to="/weddings" className="hover:text-secondary transition-colors underline-offset-4 hover:underline">Weddings</Link>
                <a href="#" className="hover:text-secondary transition-colors underline-offset-4 hover:underline">Inquire</a>
              </nav>
            </div>
            
            <div>
              <h5 className="text-label-caps text-primary mb-8 tracking-widest uppercase">Contact</h5>
              <address className="not-italic text-on-surface-variant flex flex-col gap-4">
                <span className="flex items-center gap-3"><MapPin className="text-secondary w-5 h-5" /> Westlands, Nairobi, Kenya</span>
                <span className="flex items-center gap-3"><Phone className="text-secondary w-5 h-5" /> +254 797 453 969</span>
                <span className="flex items-center gap-3"><Mail className="text-secondary w-5 h-5" /> karreyaggie@gmail.com</span>
              </address>
            </div>
            
            <div>
              <h5 className="text-label-caps text-primary mb-8 tracking-widest uppercase">Newsletter</h5>
              <p className="text-on-surface-variant mb-6">Join our list for exclusive recipes and event updates.</p>
              <div className="flex border-b border-primary/20 pb-2 backdrop-blur-sm">
                <input type="email" placeholder="Email address" className="bg-transparent border-none focus:outline-none w-full placeholder:text-on-surface-variant/50" />
                <button className="text-primary hover:text-secondary transition-colors">→</button>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-primary/5 text-sm text-on-surface-variant/60">
            <p>© 2024 Agnes Catering. Modern Heritage Dining.</p>
            <div className="flex gap-8 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary">Privacy Policy</a>
              <a href="#" className="hover:text-primary">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 z-[60] hidden md:flex flex-col gap-4 items-center">
        {scrolled && (
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="bg-surface text-primary w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform border border-surface-variant group relative"
          >
            <span className="text-xl">↑</span>
            <div className="absolute right-16 bg-white/90 px-4 py-2 rounded-xl text-primary text-sm font-semibold whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Back to Top
            </div>
          </button>
        )}
        <a href="tel:+254797453969" className="bg-primary text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform group relative">
          <Phone className="w-6 h-6" />
          <div className="absolute right-16 bg-white/90 px-4 py-2 rounded-xl text-primary text-sm font-semibold whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Call Us
          </div>
        </a>
        <QuickChat />
      </div>

      {/* Mobile Navigation Shell */}
      <nav className="md:hidden glass-nav fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-surface/90 rounded-full flex justify-around items-center h-16 z-50 shadow-2xl border border-secondary/20">
        <Link to="/menu" className="text-on-surface-variant p-4">
          <Utensils className="w-6 h-6" />
        </Link>
        <a href="https://wa.me/254797453969?text=Hello%20Agnes%20Catering%2C%20I%20would%20like%20to%20make%20a%20general%20inquiry." target="_blank" rel="noreferrer" className="bg-secondary-container text-on-secondary-container rounded-full p-4 scale-110 shadow-md">
          <QrCode className="w-6 h-6" />
        </a>
        <a href="tel:+254797453969" className="text-on-surface-variant p-4">
          <Phone className="w-6 h-6" />
        </a>
      </nav>
    </div>
  );
}
