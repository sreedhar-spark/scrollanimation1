import React from 'react';

export default function Newsletter() {
  return (
    <section className="py-24 bg-brand-secondary relative overflow-hidden">
      {/* Decorative subtle background pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
      
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary mb-4">
          Join the Cacao Luxe Circle
        </h2>
        <p className="text-brand-primary/80 text-lg mb-10">
          Be the first to taste new seasonal collections and enjoy exclusive member perks.
        </p>

        <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mb-4" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Enter your email address" 
            required
            className="flex-grow px-6 py-4 bg-white/90 border border-transparent focus:border-brand-primary outline-none rounded-sm text-brand-text placeholder:text-brand-text-secondary/60 transition-colors"
          />
          <button 
            type="submit"
            className="px-8 py-4 bg-brand-primary text-brand-secondary font-medium tracking-wide rounded-sm hover:bg-brand-primary/90 transition-colors whitespace-nowrap shadow-md"
          >
            Subscribe
          </button>
        </form>
        <p className="text-brand-primary/70 text-xs">
          We respect your inbox. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
