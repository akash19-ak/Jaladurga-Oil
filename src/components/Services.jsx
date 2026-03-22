
import { motion } from 'framer-motion';
import { Settings, RefreshCw, MessageCircle } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="py-24 bg-primary text-white overflow-hidden relative">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Custom Service</span>
            <h2 className="text-4xl md:text-5xl mb-8 leading-tight font-bold font-['Montserrat']">
              Bring Your Coconuts, <br />
              <span className="text-accent italic font-playfair font-normal">We'll Extract the Oil</span>
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-lg leading-relaxed">
              Want your own coconuts turned into pure oil? We offer a specialized cold-pressing service for our customers at a separate attractive rate. 
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0 border border-white/10 shadow-sm">
                  <RefreshCw className="text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1 text-white">Traditional Method</h4>
                  <p className="text-white/60 text-sm">Cold pressed, no heat, maximum nutrition retention.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0 border border-white/10 shadow-sm">
                  <Settings className="text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1 text-white">Separate Rates</h4>
                  <p className="text-white/60 text-sm">Fair pricing based on quantity of coconuts processed.</p>
                </div>
              </div>
            </div>

            <a 
              href="https://wa.me/919449592782?text=Hi%20Jaladurga!%20I%20have%20my%20own%20coconuts%20and%20I%20want%20to%20extract%20oil.%20What%20is%20the%20processing%20cost%2C%20and%20is%20the%20rate%20negotiable%3F" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-accent text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-all duration-300 shadow-xl"
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
            <div className="bg-white/5 backdrop-blur-xl border border-white/20 p-12 rounded-[2.5rem] relative shadow-2xl">
               <div className="text-5xl font-playfair mb-10 text-accent italic relative z-10">Step-by-Step</div>
               {/* Decorative accent element */}
               <div className="absolute top-16 left-12 w-20 h-2 bg-accent/20 rounded-full" />
               
               <div className="space-y-8">
                  <div className="flex gap-6 items-start group">
                    <span className="text-4xl font-bold text-accent/40 group-hover:text-accent transition-colors duration-300 font-['Montserrat']">01</span>
                    <p className="text-lg text-white/90 pt-1">Bring your dried coconuts to our unit.</p>
                  </div>
                  <div className="flex gap-6 items-start group">
                    <span className="text-4xl font-bold text-accent/40 group-hover:text-accent transition-colors duration-300 font-['Montserrat']">02</span>
                    <p className="text-lg text-white/90 pt-1">We clean and prepare them for extraction.</p>
                  </div>
                  <div className="flex gap-6 items-start group">
                    <span className="text-4xl font-bold text-accent/40 group-hover:text-accent transition-colors duration-300 font-['Montserrat']">03</span>
                    <p className="text-lg text-white/90 pt-1">Pure oil is extracted using cold press machine.</p>
                  </div>
                  <div className="flex gap-6 items-start group">
                    <span className="text-4xl font-bold text-accent/40 group-hover:text-accent transition-colors duration-300 font-['Montserrat']">04</span>
                    <p className="text-lg text-white/90 pt-1">Take home your fresh, pure coconut oil!</p>
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
