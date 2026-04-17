import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Eleanor V.",
    location: "New York, NY",
    quote: "The Sea Salt Caramel truffles are an absolute revelation. The perfect balance of rich dark chocolate and buttery caramel. A true luxury experience.",
  },
  {
    id: 2,
    name: "James M.",
    location: "London, UK",
    quote: "I consider myself a chocolate connoisseur, and Cacao Luxe's single-origin bars are among the finest I've ever tasted. The depth of flavor is extraordinary.",
  },
  {
    id: 3,
    name: "Sophia L.",
    location: "San Francisco, CA",
    quote: "Received the Connoisseur's Box as a gift and was blown away. The packaging is gorgeous, and the chocolates are literal works of art.",
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-primary/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by Chocolate Connoisseurs</h2>
          <div className="flex justify-center gap-1 text-brand-secondary">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} fill="currentColor" />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-8 rounded-sm shadow-sm hover:shadow-premium transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="flex gap-1 text-brand-secondary mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <blockquote className="text-brand-text-secondary text-lg italic mb-8 flex-grow">
                "{testimonial.quote}"
              </blockquote>
              <div className="mt-auto">
                <p className="font-semibold text-brand-primary">{testimonial.name}</p>
                <p className="text-sm text-brand-text-secondary">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
