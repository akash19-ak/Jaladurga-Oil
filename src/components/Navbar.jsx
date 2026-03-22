import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'Services', href: '#services' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-xl py-3 shadow-premium' : 'bg-transparent py-6'}`}>
      <div className="container flex justify-between items-center">
        {/* Logo Container */}
        <div className="flex-shrink-0">
          <img src="/logo.png" alt="Jaladurga Logo" className={`w-auto transition-all duration-500 ${isScrolled ? 'h-12' : 'h-16'} drop-shadow-md`} />
        </div>

        {/* Desktop Links - Centered */}
        <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-bold transition-all uppercase tracking-[0.15em] hover:text-secondary ${isScrolled ? 'text-primary' : 'text-primary'}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Contact Button */}
        <div className="hidden md:block">
          <a href="https://wa.me/9113570875" target="_blank" rel="noreferrer" className="btn-primary py-2.5 px-6 rounded-full text-sm tracking-wide">
            <Phone size={16} />
            Order Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass absolute top-full left-0 w-full p-8 shadow-2xl flex flex-col gap-6 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg font-bold text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a href="tel:9113570875" className="flex items-center gap-2 text-primary font-bold">
            <Phone size={20} /> 9113570875
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
