import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import BrandStory from './components/BrandStory';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <FeaturedProducts />
        <BrandStory />
        <Testimonials />
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}

export default App;
