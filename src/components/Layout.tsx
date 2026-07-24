import React, { useState, useEffect } from 'react';
import { Menu, Phone, Utensils, MessageCircle, Search, X, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
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
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isHome = location.pathname === '/';
  const isWeddings = location.pathname === '/weddings';
  const isTransparent = (isHome || isWeddings) && !scrolled;

  return (
    <div className="flex flex-col min-h-screen">
      <header
        className={cn(
          'fixed top-0 left-0 w-full z-50 transition-all duration-300',
          scrolled ? 'py-2 shadow-md glass-nav' : 'py-3 bg-surface/80 backdrop-blur-sm',
          isTransparent ? 'bg-transparent text-white' : 'text-primary border-b border-surface-variant/30'
        )}
      >
        <div className="flex justify-between items-center px-4 md:px-16 py-1 md:py-2 max-w-[1280px] mx-auto">
          {/* Left: Hamburger + Logo */}
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="lg:hidden p-2 -ml-2 rounded-lg active:bg-black/5 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <Link to="/" className="flex items-center gap-2.5 group">
              <img src="/icon.svg" alt="Agnes Catering" className="w-9 h-9 rounded-xl shadow-md transition-transform group-hover:scale-105" />
              <div className="flex flex-col leading-none">
                <span className="text-lg md:text-xl font-bold tracking-wider font-display-lg">AGNES</span>
                <span className="text-[8px] uppercase tracking-[0.15em] opacity-70 font-label-caps">Heritage Dining</span>
              </div>
            </Link>
          </div>

          {/* Center: Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-6">
            {[
              { to: '/', label: 'Home' },
              { to: '/about', label: 'About' },
              { to: '/services', label: 'Services' },
              { to: '/menu', label: 'Menus' },
              { to: '/gallery', label: 'Gallery' },
              { to: '/weddings', label: 'Weddings' },
              { to: '/testimonials', label: 'Testimonials' },
              { to: '/contact', label: 'Contact' },
            ].map(item => (
              <Link key={item.to} to={item.to} className={cn(
                "font-label-caps transition-colors text-xs uppercase tracking-widest py-2",
                location.pathname === item.to ? "font-bold border-b-2 border-secondary" : "opacity-80 hover:opacity-100"
              )}>
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right: Search + Book */}
          <div className="flex items-center gap-2 md:gap-3">
            <div className={cn("transition-colors", isTransparent ? "text-white" : "text-primary")}>
              <SearchBar />
            </div>
            <a 
              href="https://wa.me/254797453969?text=Hello%20Agnes%20Catering%2C%20I%20would%20like%20to%20make%20an%20inquiry." 
              target="_blank" 
              rel="noreferrer" 
              className={cn(
                "px-4 py-2.5 rounded-full transition-all duration-300 hidden md:inline-flex items-center gap-2 font-label-caps tracking-widest text-xs",
                isTransparent 
                  ? "bg-white text-primary hover:bg-white/90 shadow-lg" 
                  : "bg-primary text-white hover:bg-primary-container shadow-lg"
              )}
            >
              BOOK NOW
            </a>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <>
            <div className="lg:hidden fixed inset-0 bg-black/40 z-40" onClick={() => setMobileMenuOpen(false)} />
            <div className="lg:hidden fixed top-0 left-0 w-[280px] h-full bg-surface z-50 shadow-2xl animate-slide-down overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <Link to="/" className="flex items-center gap-2.5" onClick={() => setMobileMenuOpen(false)}>
                    <img src="/icon.svg" alt="Agnes Catering" className="w-9 h-9 rounded-xl" />
                    <span className="text-lg font-bold tracking-wider font-display-lg">AGNES</span>
                  </Link>
                  <button onClick={() => setMobileMenuOpen(false)} className="p-2">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <nav className="flex flex-col gap-1">
                  {[
                    { to: '/', label: 'Home' },
                    { to: '/about', label: 'About Us' },
                    { to: '/services', label: 'Services' },
                    { to: '/menu', label: 'Our Menus' },
                    { to: '/gallery', label: 'Gallery' },
                    { to: '/private-chef', label: 'Private Chef' },
                    { to: '/weddings', label: 'Weddings' },
                    { to: '/testimonials', label: 'Testimonials' },
                    { to: '/faq', label: 'FAQ' },
                    { to: '/contact', label: 'Contact' },
                  ].map(item => (
                    <Link 
                      key={item.to} 
                      to={item.to} 
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "py-3 px-4 rounded-lg text-sm font-medium transition-colors",
                        location.pathname === item.to 
                          ? "bg-primary text-white" 
                          : "text-on-surface hover:bg-surface-container"
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                
                <a 
                  href="https://wa.me/254797453969?text=Hello%20Agnes%20Catering%2C%20I%20would%20like%20to%20make%20an%20inquiry." 
                  target="_blank" 
                  rel="noreferrer" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-6 w-full bg-primary text-white text-center py-3.5 rounded-xl font-label-caps tracking-widest text-xs shadow-lg flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" /> BOOK VIA WHATSAPP
                </a>
              </div>
            </div>
          </>
        )}
      </header>

      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white pt-16 pb-8 mt-auto">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div className="flex flex-col gap-4">
              <Link to="/" className="flex items-center gap-2.5">
                <img src="/icon.svg" alt="Agnes Catering" className="w-10 h-10 rounded-xl border border-white/20" />
                <div>
                  <span className="text-xl font-bold tracking-wider font-display-lg block leading-none">AGNES</span>
                  <span className="text-[9px] uppercase tracking-[0.15em] text-white/60 font-label-caps">Heritage Dining</span>
                </div>
              </Link>
              <p className="text-white/70 text-sm leading-relaxed">Exceptional catering for those who value the art of dining. Bringing Kenyan heritage to modern celebrations.</p>
              <div className="flex gap-3">
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#1877F2] hover:border-[#1877F2] transition-all"><Facebook className="w-4 h-4" /></a>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gradient-to-tr hover:from-[#fd5949] hover:to-[#d6249f] hover:border-transparent transition-all"><Instagram className="w-4 h-4" /></a>
                <a href="https://www.tiktok.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-black hover:border-white transition-all"><TikTokIcon className="w-4 h-4" /></a>
              </div>
            </div>
            
            <div>
              <h5 className="text-xs font-bold mb-6 tracking-widest uppercase text-secondary">Quick Links</h5>
              <nav className="flex flex-col gap-3">
                {[
                  { to: '/about', label: 'Our Story' },
                  { to: '/menu', label: 'Menus' },
                  { to: '/private-chef', label: 'Private Dining' },
                  { to: '/weddings', label: 'Weddings' },
                  { to: '/gallery', label: 'Gallery' },
                ].map(item => (
                  <Link key={item.to} to={item.to} className="text-white/70 hover:text-secondary text-sm transition-colors">{item.label}</Link>
                ))}
              </nav>
            </div>
            
            <div>
              <h5 className="text-xs font-bold mb-6 tracking-widest uppercase text-secondary">Contact</h5>
              <address className="not-italic text-white/70 flex flex-col gap-3 text-sm">
                <span className="flex items-center gap-3"><MapPin className="text-secondary w-4 h-4 flex-shrink-0" /> Westlands, Nairobi, Kenya</span>
                <a href="tel:+254797453969" className="flex items-center gap-3 hover:text-secondary transition-colors"><Phone className="text-secondary w-4 h-4 flex-shrink-0" /> +254 797 453 969</a>
                <a href="mailto:karreyaggie@gmail.com" className="flex items-center gap-3 hover:text-secondary transition-colors"><Mail className="text-secondary w-4 h-4 flex-shrink-0" /> karreyaggie@gmail.com</a>
              </address>
            </div>
            
            <div>
              <h5 className="text-xs font-bold mb-6 tracking-widest uppercase text-secondary">Opening Hours</h5>
              <div className="text-white/70 text-sm flex flex-col gap-2">
                <p>Monday - Friday: 8AM - 8PM</p>
                <p>Saturday: 9AM - 6PM</p>
                <p>Sunday: 10AM - 4PM</p>
              </div>
              <a href="https://wa.me/254797453969?text=Hello%20Agnes%20Catering%2C%20I%20would%20like%20to%20make%20a%20booking." target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 bg-secondary text-white px-5 py-2.5 rounded-full text-xs font-bold tracking-widest hover:bg-secondary/90 transition-colors shadow-lg">
                <MessageCircle className="w-3.5 h-3.5" /> BOOK NOW
              </a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-white/40">
            <p>&copy; {new Date().getFullYear()} Agnes Catering. All rights reserved.</p>
            <div className="flex gap-6 mt-3 md:mt-0">
              <a href="#" className="hover:text-white/70 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white/70 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Desktop FABs */}
      <div className="fixed bottom-6 right-6 z-[60] hidden md:flex flex-col gap-3 items-end">
        {scrolled && (
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="bg-surface text-primary w-11 h-11 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform border border-surface-variant"
          >
            ↑
          </button>
        )}
        <a href="tel:+254797453969" className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
          <Phone className="w-5 h-5" />
        </a>
        <QuickChat />
      </div>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-surface/95 backdrop-blur-md z-50 border-t border-surface-variant/50 safe-area-bottom">
        <div className="flex justify-around items-center h-16 px-2">
          <Link to="/" className={cn("flex flex-col items-center gap-1 py-2 px-3 rounded-xl transition-colors", location.pathname === '/' ? "text-primary" : "text-on-surface-variant")}>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>
            <span className="text-[10px] font-medium">Home</span>
          </Link>
          <Link to="/menu" className={cn("flex flex-col items-center gap-1 py-2 px-3 rounded-xl transition-colors", location.pathname === '/menu' ? "text-primary" : "text-on-surface-variant")}>
            <Utensils className="w-5 h-5" />
            <span className="text-[10px] font-medium">Menu</span>
          </Link>
          <a 
            href="https://wa.me/254797453969?text=Hello%20Agnes%20Catering%2C%20I%20would%20like%20to%20make%20an%20inquiry." 
            target="_blank" 
            rel="noreferrer"
            className="flex flex-col items-center gap-1 -mt-5"
          >
            <div className="bg-primary w-14 h-14 rounded-full flex items-center justify-center shadow-xl border-4 border-surface">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <span className="text-[10px] font-medium text-primary">Book</span>
          </a>
          <Link to="/gallery" className={cn("flex flex-col items-center gap-1 py-2 px-3 rounded-xl transition-colors", location.pathname === '/gallery' ? "text-primary" : "text-on-surface-variant")}>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
            <span className="text-[10px] font-medium">Gallery</span>
          </Link>
          <Link to="/contact" className={cn("flex flex-col items-center gap-1 py-2 px-3 rounded-xl transition-colors", location.pathname === '/contact' ? "text-primary" : "text-on-surface-variant")}>
            <Phone className="w-5 h-5" />
            <span className="text-[10px] font-medium">Contact</span>
          </Link>
        </div>
      </nav>
      
      {/* Spacer for mobile bottom nav */}
      <div className="md:hidden h-16" />
    </div>
  );
}
