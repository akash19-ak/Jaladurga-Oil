
import { motion } from 'framer-motion';
import { Settings, RefreshCw, MessageCircle } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="py-24 bg-primary text-white overflow-hidden relative">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">ಕಸ್ಟಮ್ ಸೇವೆ | Custom Service</span>
            <h2 className="text-4xl md:text-5xl mb-8 leading-tight">
              Bring Your Coconuts, <br />
              <span className="text-secondary italic">We'll Extract the Oil</span>
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Want your own coconuts turned into pure oil? We offer a specialized cold-pressing service for our customers at a separate attractive rate. 
              <br /><br />
              ನಮ್ಮಲ್ಲಿ ಒಣ ಕೊಬ್ಬರಿ ತಂದರೆ ನಾವು ಅದರ ಎಣ್ಣೆಯನ್ನ ತೆಗೆದು ಕೊಡುತ್ತೇವೆ. ಶುದ್ಧ ಮತ್ತು ಗುಣಮಟ್ಟದ ಕೆಲಸ ನಮ್ಮ ಭರವಸೆ.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                  <RefreshCw className="text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Traditional Method</h4>
                  <p className="text-white/60">Cold pressed, no heat, maximum nutrition retention.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                  <Settings className="text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Separate Rates</h4>
                  <p className="text-white/60">Fair pricing based on quantity of coconuts processed.</p>
                </div>
              </div>
            </div>

            <a 
              href="https://wa.me/9113570875?text=Hi! I want to know the rates for oil extraction from my coconuts." 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-secondary text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-colors"
            >
              <MessageCircle /> Get Quote on WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-12 rounded-[3rem] relative">
               <div className="text-6xl font-playfair mb-8 text-secondary italic">Step-by-Step</div>
               <div className="space-y-8">
                  <div className="flex gap-6 items-start">
                    <span className="text-4xl font-bold opacity-30">01</span>
                    <p className="text-xl">Bring your dried coconuts to our unit.</p>
                  </div>
                  <div className="flex gap-6 items-start">
                    <span className="text-4xl font-bold opacity-30">02</span>
                    <p className="text-xl">We clean and prepare them for extraction.</p>
                  </div>
                  <div className="flex gap-6 items-start">
                    <span className="text-4xl font-bold opacity-30">03</span>
                    <p className="text-xl">Pure oil is extracted using cold press machine.</p>
                  </div>
                  <div className="flex gap-6 items-start">
                    <span className="text-4xl font-bold opacity-30">04</span>
                    <p className="text-xl">Take home your fresh, pure coconut oil!</p>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
