import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

function App() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Products />
      <Services />
      <Reviews />
      <Footer />
    </main>
  );
}

export default App;
