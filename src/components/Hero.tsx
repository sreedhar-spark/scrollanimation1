import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-brand-primary">
      
      {/* 
        README: SCROLL_ANIMATION_CONTAINER
        This div is the placeholder for the future scroll-triggered image sequence animation.
        Integrate your canvas or WebGL renderer here.
      */}
      <div className="absolute inset-0 z-0 opacity-60">
        {/* SCROLL_ANIMATION_CONTAINER */}
        <img 
          src="https://images.unsplash.com/photo-1614088665112-bca396c15a84?q=80&w=2574&auto=format&fit=crop" 
          alt="Pouring liquid chocolate" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark Gradient Overlay for Text Contrast */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-brand-primary/80 via-brand-primary/50 to-brand-primary/90"></div>

      {/* Hero Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto mt-16">
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-brand-bg font-bold mb-6 text-balance opacity-0 animate-fade-in-up">
          Artisan Chocolate, Crafted for Moments That Matter
        </h1>
        <p className="text-lg md:text-xl text-brand-bg/90 font-light mb-10 max-w-2xl mx-auto opacity-0 animate-fade-in-up animation-delay-200">
          Single-origin cocoa. Small-batch perfection. Delivered directly to your door.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up animation-delay-400">
          <a 
            href="#collections" 
            className="w-full sm:w-auto px-8 py-4 bg-brand-secondary text-white font-medium tracking-wide rounded-sm hover:bg-brand-cta-hover hover:scale-[1.02] transition-all duration-300 shadow-lg"
          >
            Explore Collections
          </a>
          <a 
            href="#story" 
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-brand-bg/50 text-brand-bg font-medium tracking-wide rounded-sm hover:bg-brand-bg/10 transition-all duration-300"
          >
            Our Story
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-0 animate-fade-in-up animation-delay-400">
        <span className="text-brand-bg/70 text-xs tracking-widest uppercase font-medium">Scroll to Discover</span>
        <ChevronDown className="text-brand-secondary animate-bounce" size={24} />
      </div>
    </section>
  );
}
