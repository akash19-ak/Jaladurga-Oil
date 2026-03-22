
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import Products from './components/Products';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

function App() {
  return (
    <main className="overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      <Hero />
      <Products />
      <Gallery />
      <Services />
      <Reviews />
      <Footer />
    </main>
  );
}

export default App;
