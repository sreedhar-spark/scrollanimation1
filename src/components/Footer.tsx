import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-primary text-brand-bg pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-serif font-bold text-brand-secondary mb-4">Cacao Luxe</h2>
            <p className="text-brand-bg/70 text-sm leading-relaxed mb-6">
              Artisan chocolate crafted with passion. Elevating the everyday into moments of pure indulgence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-brand-bg/70 hover:text-brand-secondary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-brand-bg/70 hover:text-brand-secondary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-brand-bg/70 hover:text-brand-secondary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-brand-bg/70 hover:text-brand-secondary transition-colors text-sm">Shop All</a></li>
              <li><a href="#" className="text-brand-bg/70 hover:text-brand-secondary transition-colors text-sm">Signature Collections</a></li>
              <li><a href="#" className="text-brand-bg/70 hover:text-brand-secondary transition-colors text-sm">Corporate Gifting</a></li>
              <li><a href="#" className="text-brand-bg/70 hover:text-brand-secondary transition-colors text-sm">Our Story</a></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Customer Care</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-brand-bg/70 hover:text-brand-secondary transition-colors text-sm">Contact Us</a></li>
              <li><a href="#" className="text-brand-bg/70 hover:text-brand-secondary transition-colors text-sm">Shipping & Returns</a></li>
              <li><a href="#" className="text-brand-bg/70 hover:text-brand-secondary transition-colors text-sm">FAQ</a></li>
              <li><a href="#" className="text-brand-bg/70 hover:text-brand-secondary transition-colors text-sm">Track Order</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact</h3>
            <ul className="space-y-3 text-sm text-brand-bg/70">
              <li>hello@cacaoluxe.com</li>
              <li>1-800-CHOCOLATE</li>
              <li className="pt-2">
                123 Artisan Way<br />
                Suite 100<br />
                New York, NY 10001
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-bg/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-bg/50 text-xs">
            &copy; {new Date().getFullYear()} Cacao Luxe. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-brand-bg/50">
            <a href="#" className="hover:text-brand-bg transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-bg transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
