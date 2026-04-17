import React from 'react';
import { ShoppingBag } from 'lucide-react';

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1587245937293-b0510ee4c2be?q=80&w=800&auto=format&fit=crop";

const products = [
  {
    id: 1,
    name: "Midnight Dark 85%",
    description: "Intense single-origin Ecuadorian cocoa with notes of espresso.",
    price: "$14.00",
    image: "https://images.unsplash.com/photo-1548907040-4baa42d10919?q=80&w=800&auto=format&fit=crop",
    badge: "Bestseller"
  },
  {
    id: 2,
    name: "Sea Salt Caramel Truffles",
    description: "Velvety caramel encased in 70% dark chocolate, dusted with sea salt.",
    price: "$24.00",
    image: "https://images.unsplash.com/photo-1604514628550-37477afdf4e3?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Ruby Rose & Pistachio",
    description: "Naturally pink ruby chocolate studded with roasted pistachios.",
    price: "$16.00",
    image: "https://images.unsplash.com/photo-1623625434462-e5e42318ae49?q=80&w=800&auto=format&fit=crop",
    badge: "New"
  },
  {
    id: 4,
    name: "Madagascar Vanilla Bean",
    description: "Creamy white chocolate infused with real Madagascar vanilla.",
    price: "$14.00",
    // Updated with a reliable white chocolate image
    image: "https://images.unsplash.com/photo-1629115916087-7e8c114a24ed?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Hazelnut Praline Bar",
    description: "Smooth milk chocolate blended with caramelized hazelnut paste.",
    price: "$15.00",
    // Updated with a reliable chocolate with nuts image
    image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "The Connoisseur's Box",
    description: "A curated selection of our finest 12 artisanal truffles.",
    price: "$48.00",
    image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=800&auto=format&fit=crop",
    badge: "Gift"
  }
];

export default function FeaturedProducts() {
  return (
    <section id="collections" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Our Signature Collections</h2>
        <p className="text-brand-text-secondary max-w-2xl mx-auto text-lg">
          Discover our meticulously crafted chocolates, made from the world's finest ethically sourced cocoa beans.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {products.map((product) => (
          <article 
            key={product.id} 
            className="group flex flex-col cursor-pointer"
          >
            {/* Image Container with 3:4 Aspect Ratio */}
            <div className="relative w-full aspect-[3/4] overflow-hidden bg-brand-primary/5 mb-6 rounded-sm">
              {product.badge && (
                <span className="absolute top-4 left-4 z-10 bg-brand-bg text-brand-primary text-xs font-bold tracking-wider uppercase px-3 py-1 shadow-sm">
                  {product.badge}
                </span>
              )}
              <img 
                src={product.image} 
                alt={product.name} 
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null; // Prevent infinite loop if fallback also fails
                  target.src = FALLBACK_IMAGE;
                }}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <button className="bg-brand-secondary text-white px-6 py-3 rounded-sm font-medium tracking-wide flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-brand-cta-hover shadow-lg">
                  <ShoppingBag size={18} />
                  Quick Add
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-brand-primary group-hover:text-brand-secondary transition-colors">
                  {product.name}
                </h3>
                <span className="text-lg font-medium text-brand-primary">{product.price}</span>
              </div>
              <p className="text-brand-text-secondary text-sm line-clamp-2 leading-relaxed">
                {product.description}
              </p>
            </div>
          </article>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <button className="inline-block border-b-2 border-brand-secondary text-brand-primary font-medium tracking-wide pb-1 hover:text-brand-secondary transition-colors">
          View All Products
        </button>
      </div>
    </section>
  );
}
