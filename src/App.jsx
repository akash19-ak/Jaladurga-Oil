import { useState } from 'react';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import { AnimatePresence } from 'framer-motion';

import Hero from './components/Hero';
import Products from './components/Products';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Location from './components/Location';
import useScrollSpy from './hooks/useScrollSpy';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useScrollSpy();

  return (
    <>
      <h1 className="sr-only">Jaladurga Pure Cold Pressed Coconut Oil in Karkala, Udupi & Mangalore - 100% Organic, Authentic South Indian Home Made Oil for Cooking, Hair, and Massage</h1>
      <div className="sr-only">
        Buy the best natural, unrefined, chemical-free, and traditional wood pressed coconut oil directly from the manufacturer in Karkala, Karnataka.
      </div>
      <CustomCursor />
      <AnimatePresence>
        {isLoading && <SplashScreen finishLoading={() => setIsLoading(false)} />}
      </AnimatePresence>
      
      <main className={`overflow-x-hidden min-h-screen flex flex-col transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        <div className="flex-grow">
          <Hero />
          <Products />
          <Services />
          <Gallery />
          <Reviews />
          <Location />
        </div>
        <Footer />
      </main>
    </>
  );
}

export default App;
