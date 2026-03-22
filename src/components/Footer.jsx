import React from 'react';
import { Phone, Mail, Instagram, Facebook, MapPin } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-white pt-24 pb-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Jaladurga" className="h-10 w-10 brightness-0 invert" />
              <h3 className="text-2xl font-playfair">Jaladurga Homemade Oil</h3>
            </div>
            <p className="text-white/60 max-w-sm mb-8">
              Premium quality cold pressed coconut oil, extracted with tradition and care. Delivering health and purity to your doorstep.
              <br /><br />
              ಶುದ್ಧ ಮತ್ತು ನೈಸರ್ಗಿಕ ಕೊಬ್ಬರಿ ಎಣ್ಣೆ ಪ್ರತಿ ಮನೆಗೆ.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all"><Instagram size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all"><Facebook size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-6">Quick Links</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#home" className="hover:text-secondary">Home</a></li>
              <li><a href="#products" className="hover:text-secondary">Products</a></li>
              <li><a href="#services" className="hover:text-secondary">Custom Extract</a></li>
              <li><a href="#reviews" className="hover:text-secondary">Reviews</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-white/60">
                 <MapPin className="text-secondary shrink-0" size={20} />
                 <span>Factory Unit, Karnataka, India</span>
              </li>
              <li className="flex gap-3 text-white/60">
                 <Phone className="text-secondary shrink-0" size={20} />
                 <a href="https://wa.me/9113570875" className="hover:text-secondary">9113570875</a>
              </li>
              <li className="flex gap-3 text-white/60">
                 <Mail className="text-secondary shrink-0" size={20} />
                 <a href="mailto:akashn20402@gmail.com" className="hover:text-secondary">akashn20402@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/40 text-sm">
          <p>© {new Date().getFullYear()} Jaladurga Coconut Oil. All rights reserved. Designed with ❤️ in India.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
