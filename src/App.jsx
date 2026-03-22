
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

function App() {
  return (
    <main className="overflow-x-hidden">
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
