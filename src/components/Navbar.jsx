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
    { name: 'Gallery', href: '#gallery' },
    { name: 'Services', href: '#services' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Jaladurga Logo" className="h-10 w-10 object-contain" />
          <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-primary' : 'text-primary'}`}>Jaladurga</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-semibold hover:text-accent transition-colors uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
          <a href="https://wa.me/9113570875" target="_blank" rel="noreferrer" className="btn-primary py-2 px-5">
            <Phone size={18} />
            Connect
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
