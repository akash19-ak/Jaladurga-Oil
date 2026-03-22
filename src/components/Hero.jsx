
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
          <span className="section-subtitle block mb-4">Pure & Natural</span>
          <h1 className="text-5xl md:text-7xl mb-6 leading-[1.1] text-3d text-primary font-playfair tracking-tight">
            Jaladurga <br />
            <span className="text-secondary italic">Cold Pressed</span> <br />
            Coconut Oil
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
          <motion.div 
            className="relative z-10 floating"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* 3D Image */}
            <img 
              src="/coconut-3d.png" 
              alt="Fresh Coconut Breaking" 
              className="w-[350px] md:w-[500px] h-auto object-contain drop-shadow-2xl z-20 relative mix-blend-multiply"
            />
            {/* Glowing Backdrop behind the image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-secondary/30 rounded-full blur-[60px] -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] bg-white/50 rounded-full blur-[40px] -z-10" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
