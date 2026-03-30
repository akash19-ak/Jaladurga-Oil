import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState(window.location.pathname || '/');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handlePathChange = () => setActivePath(window.location.pathname);
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('pathchanged', handlePathChange);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('pathchanged', handlePathChange);
    };
  }, []);

  const handleNavClick = (e, path) => {
    e.preventDefault();
    const id = path === '/' ? 'home' : path.substring(1);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-xl py-3 shadow-premium' : 'bg-transparent py-6'}`}>
      <div className="container flex justify-between items-center">
        {/* Logo Container */}
        <div className="flex-shrink-0">
          <a href="/" onClick={(e) => handleNavClick(e, '/')}>
            <img src="/logo.png" alt="Jaladurga Logo" className={`rounded-full object-cover border-2 border-primary/10 transition-all duration-500 ${isScrolled ? 'w-12 h-12' : 'w-16 h-16'} drop-shadow-md`} />
          </a>
        </div>

        {/* Desktop Links - Centered */}
        <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm font-bold transition-all uppercase tracking-[0.15em] hover:text-secondary ${activePath === link.href ? 'text-secondary' : 'text-primary'}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Contact Button */}
        <div className="hidden md:block">
          <button
            type="button"
            onClick={() => window.open('https://wa.me/919449592782', '_blank', 'noopener,noreferrer')}
            className="btn-primary py-2.5 px-6 rounded-full text-sm tracking-wide cursor-pointer border-0"
          >
            <Phone size={16} />
            Order Now
          </button>
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
              className={`text-lg font-bold ${activePath === link.href ? 'text-secondary' : 'text-primary'}`}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <button
            type="button"
            onClick={() => window.open('https://wa.me/919449592782', '_blank', 'noopener,noreferrer')}
            className="flex items-center gap-2 text-primary font-bold cursor-pointer border-0 bg-transparent"
          >
            <Phone size={20} /> +91 94495 92782
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
