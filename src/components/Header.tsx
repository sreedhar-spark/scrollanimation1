import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update background transparency
      setIsScrolled(currentScrollY > 50);

      // Sticky header logic (hide on scroll down, show on scroll up)
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Free Shipping Banner */}
      {isBannerVisible && (
        <div className="bg-brand-primary text-brand-secondary text-xs md:text-sm py-2 px-4 text-center relative z-50 flex justify-center items-center">
          <span className="font-medium tracking-wider uppercase">Free Shipping on all orders over $75</span>
          <button 
            onClick={() => setIsBannerVisible(false)}
            className="absolute right-4 text-brand-secondary hover:text-white transition-colors"
            aria-label="Dismiss banner"
          >
            <X size={16} />
          </button>
        </div>
      )}

      {/* Main Header */}
      <header 
        className={`fixed w-full z-40 transition-all duration-300 ${
          isBannerVisible ? 'top-[36px] md:top-[40px]' : 'top-0'
        } ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          isScrolled ? 'bg-brand-bg/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          
          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-brand-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-8 items-center">
            <a href="#collections" className="text-sm font-medium tracking-wide text-brand-text hover:text-brand-secondary transition-colors">Shop</a>
            <a href="#story" className="text-sm font-medium tracking-wide text-brand-text hover:text-brand-secondary transition-colors">Our Story</a>
            <a href="#gifts" className="text-sm font-medium tracking-wide text-brand-text hover:text-brand-secondary transition-colors">Gifting</a>
          </nav>

          {/* Logo */}
          <a href="#" className="text-2xl md:text-3xl font-serif font-bold text-brand-primary tracking-tight absolute left-1/2 -translate-x-1/2">
            Cacao Luxe
          </a>

          {/* Icons */}
          <div className="flex items-center gap-6">
            <a href="#" className="hidden lg:block text-sm font-medium tracking-wide text-brand-text hover:text-brand-secondary transition-colors">Account</a>
            <button className="relative text-brand-primary hover:text-brand-secondary transition-colors group" aria-label="Cart">
              <ShoppingBag size={24} />
              <span className="absolute -top-1 -right-2 bg-brand-secondary text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center group-hover:bg-brand-cta-hover transition-colors">
                2
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-brand-bg shadow-lg border-t border-brand-primary/10 py-6 px-6 flex flex-col gap-4">
            <a href="#collections" className="text-lg font-serif text-brand-primary" onClick={() => setIsMobileMenuOpen(false)}>Shop Collections</a>
            <a href="#story" className="text-lg font-serif text-brand-primary" onClick={() => setIsMobileMenuOpen(false)}>Our Story</a>
            <a href="#gifts" className="text-lg font-serif text-brand-primary" onClick={() => setIsMobileMenuOpen(false)}>Gifting</a>
            <a href="#" className="text-lg font-serif text-brand-primary" onClick={() => setIsMobileMenuOpen(false)}>Account</a>
          </div>
        )}
      </header>
    </>
  );
}
