import { Phone, Mail, Instagram, Facebook, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-white pt-24 pb-12 relative overflow-hidden">
      {/* Decorative Wave styling in background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
         <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full"><path fill="#ffffff" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>

      <div className="container relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-4xl font-playfair mb-4 text-secondary">Jaladurga <br/> <span className="text-white italic text-3xl">Homemade Oil</span></h3>
            <p className="text-white/60 max-w-sm mb-8 leading-relaxed">
              Premium quality cold-pressed coconut oil, extracted with tradition and care. Delivering health and purity to your doorstep.
              <br /><br />
              <span className="font-semibold text-accent/80">ಶುದ್ಧ ಮತ್ತು ನೈಸರ್ಗಿಕ ಕೊಬ್ಬರಿ ಎಣ್ಣೆ ಪ್ರತಿ ಮನೆಗೆ.</span>
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary hover:text-primary hover:border-transparent transition-all"><Instagram size={20} /></a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary hover:text-primary hover:border-transparent transition-all"><Facebook size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-6 text-white uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#home" className="hover:text-secondary hover:pl-2 transition-all block">Home</a></li>
              <li><a href="#products" className="hover:text-secondary hover:pl-2 transition-all block">Products</a></li>
              <li><a href="#services" className="hover:text-secondary hover:pl-2 transition-all block">Custom Extract</a></li>
              <li><a href="#reviews" className="hover:text-secondary hover:pl-2 transition-all block">Reviews</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-6 text-white uppercase tracking-widest text-sm">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-4 text-white/60 items-start">
                 <Phone className="text-secondary shrink-0 mt-1" size={20} />
                 <div>
                    <span className="block text-xs uppercase tracking-wider mb-1">WhatsApp / Call</span>
                    <a href="https://wa.me/9113570875" className="hover:text-secondary text-white font-semibold">9113570875</a>
                 </div>
              </li>
              <li className="flex gap-4 text-white/60 items-start">
                 <Mail className="text-secondary shrink-0 mt-1" size={20} />
                 <div>
                    <span className="block text-xs uppercase tracking-wider mb-1">Email Support</span>
                    <a href="mailto:akashn20402@gmail.com" className="hover:text-secondary text-white font-semibold break-all">akashn20402@gmail.com</a>
                 </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Live Location Section */}
        <div className="mb-16 rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative bg-primary/50">
           <div className="grid md:grid-cols-3">
              <div className="p-8 md:p-12 md:col-span-1 flex flex-col justify-center">
                 <MapPin size={40} className="text-secondary mb-6" />
                 <h4 className="text-2xl font-playfair font-bold mb-4">Visit Our Fast-Press Unit</h4>
                 <p className="text-white/60 mb-6 font-semibold">
                    We are located in the heart of Karnataka, sourcing the best coastal coconuts.
                 </p>
                 <a href="https://maps.google.com/?q=Karnataka,India" target="_blank" rel="noreferrer" className="text-secondary hover:text-white transition-colors uppercase tracking-wider text-sm font-bold flex items-center gap-2">
                    Open in Maps →
                 </a>
              </div>
              <div className="md:col-span-2 h-64 md:h-auto">
                 <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.518606554553!2d74.8354724!3d12.9157209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a4c37bf488f%3A0x827bbc7a74fcfe64!2sKarnataka!5e0!3m2!1sen!2sin!4v1703248384950!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, minHeight: '300px' }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Jaladurga Factory Location"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                 ></iframe>
              </div>
           </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/40 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Jaladurga Coconut Oil. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
