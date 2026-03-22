import { Phone, Mail, Instagram, Facebook, Droplets } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-white pt-20 pb-12 relative overflow-hidden">
      {/* Decorative Wave styling in background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
         <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full"><path fill="#ffffff" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>

      <div className="container relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Droplets className="text-secondary" size={36} />
              <h3 className="text-3xl font-['Montserrat'] font-black tracking-tight text-white">
                Jaladurga <span className="text-secondary font-light italic">Oil</span>
              </h3>
            </div>
            <p className="text-white/70 max-w-sm mb-8 leading-relaxed">
              Premium quality cold-pressed coconut oil, extracted with tradition and care. Delivering pure health and natural aroma directly to your doorstep.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-3 text-white/70">
              <li><a href="#home" className="hover:text-secondary hover:pl-2 transition-all block">Home</a></li>
              <li><a href="#products" className="hover:text-secondary hover:pl-2 transition-all block">Products</a></li>
              <li><a href="#services" className="hover:text-secondary hover:pl-2 transition-all block">Custom Extract</a></li>
              <li><a href="#gallery" className="hover:text-secondary hover:pl-2 transition-all block">Gallery</a></li>
              <li><a href="#reviews" className="hover:text-secondary hover:pl-2 transition-all block">Reviews</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white uppercase tracking-widest">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-4 text-white/70 items-start">
                 <Phone className="text-secondary shrink-0 mt-1" size={20} />
                 <div>
                    <span className="block text-[10px] uppercase tracking-widest mb-1 text-white/50">WhatsApp / Call</span>
                    <a href="https://wa.me/9113570875" target="_blank" rel="noreferrer" className="hover:text-secondary text-white font-medium">9113570875</a>
                 </div>
              </li>
              <li className="flex gap-4 text-white/70 items-start">
                 <Mail className="text-secondary shrink-0 mt-1" size={20} />
                 <div>
                    <span className="block text-[10px] uppercase tracking-widest mb-1 text-white/50">Email Support</span>
                    <a href="mailto:akashn20402@gmail.com" className="hover:text-secondary text-white font-medium break-all">akashn20402@gmail.com</a>
                 </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-12 text-center text-white/50 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Jaladurga Coconut Oil. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
