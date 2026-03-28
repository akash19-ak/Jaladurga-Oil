
import { motion } from 'framer-motion';
import { ArrowRight, Droplet } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 relative overflow-hidden bg-white">
      {/* Animated Background Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px]" />

      <div className="container grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="perspective-1000"
        >
          <span className="section-subtitle block mb-4 animate-pulse">Pure & Natural</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 leading-[1.1] font-['Montserrat'] tracking-tighter font-black">
            <span className="text-primary block drop-shadow-lg">Jaladurga</span>
            <span className="text-secondary block -mt-2">Cold Pressed</span>
            <span className="text-primary/80 block -mt-2">Coconut Oil</span>
          </h1>
          <p className="text-text-muted text-lg mb-8 max-w-md">
            Experience the essence of tradition with our 100% homemade, pure cold-pressed oil. Nature's goodness, harvested for your health.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#products" className="btn-primary text-lg">
              Explore Products <ArrowRight size={20} />
            </a>
            <a href="#services" className="px-8 py-3 rounded-full border-2 border-primary text-primary font-bold hover:bg-primary/5 transition-all">
              Our Services
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
          className="relative perspective-1000 flex justify-center items-center"
        >
          {/* Image with Advanced Hover Effect */}
          <motion.div 
            className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full overflow-hidden border-8 border-white/20 shadow-[0_0_50px_rgba(255,165,0,0.3)] relative z-20 mix-blend-normal bg-white cursor-pointer group"
            whileHover={{ 
              scale: 1.05,
              rotate: -3,
              boxShadow: "0px 0px 100px rgba(0,250,154,0.3)" 
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
             {/* Base Full Coconut Image */}
             <img 
               src="/full-coconut.png" 
               alt="A whole, intact brown coconut"
               className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 ease-in-out group-hover:opacity-0 z-10"
             />
             {/* Flying Cracked Coconut on Hover */}
             <img 
               src="/cracked-coconut.png" 
               alt="A cracked coconut breaking apart"
               className="w-full h-full object-cover absolute inset-0 opacity-0 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-110 z-20"
             />
          </motion.div>
          {/* Glowing Backdrop behind the video */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-accent/30 rounded-full blur-[70px] -z-10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-white/60 rounded-full blur-[50px] -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
