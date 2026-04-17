import React from 'react';
import { Leaf, Award, Package } from 'lucide-react';

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1587245937293-b0510ee4c2be?q=80&w=1200&auto=format&fit=crop";

export default function BrandStory() {
  return (
    <section id="story" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-premium relative z-10 bg-brand-primary/5">
              <img 
                src="https://images.dualite.app/271b5e34-d324-4dac-969a-afc883557276/asset-0b77fcdd-87fc-4e33-86a2-fed6269e7312.webp" 
                alt="Assorted premium dark chocolate bars on a wooden surface" 
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null; // Prevent infinite loop if fallback also fails
                  target.src = FALLBACK_IMAGE;
                }}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative background element */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-brand-secondary/10 z-0 rounded-sm hidden sm:block"></div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Crafted with Passion, Rooted in Tradition
            </h2>
            <p className="text-brand-text-secondary text-lg mb-10 leading-relaxed">
              At Cacao Luxe, we believe that true luxury lies in the details. Our master chocolatiers blend time-honored European techniques with innovative flavor profiles, creating an unparalleled sensory experience in every bite.
            </p>

            <ul className="space-y-6 mb-10">
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-brand-bg p-2 rounded-full text-brand-secondary">
                  <Leaf size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-primary text-lg">Ethically Sourced Beans</h4>
                  <p className="text-brand-text-secondary text-sm mt-1">We partner directly with small farms, ensuring fair wages and sustainable farming practices.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-brand-bg p-2 rounded-full text-brand-secondary">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-primary text-lg">Small-Batch Artisanal Process</h4>
                  <p className="text-brand-text-secondary text-sm mt-1">Every bar is roasted, ground, and tempered in small batches to preserve unique flavor notes.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-brand-bg p-2 rounded-full text-brand-secondary">
                  <Package size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-primary text-lg">Sustainable Packaging</h4>
                  <p className="text-brand-text-secondary text-sm mt-1">Our elegant packaging is 100% recyclable and made from FSC-certified paper.</p>
                </div>
              </li>
            </ul>

            <button className="px-8 py-4 border border-brand-primary text-brand-primary font-medium tracking-wide rounded-sm hover:bg-brand-primary hover:text-white transition-all duration-300">
              Discover Our Process
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
