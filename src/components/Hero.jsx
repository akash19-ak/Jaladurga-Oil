
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
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="relative perspective-1000"
        >
          <div className="relative z-10 floating">
            <div className="card-3d w-[300px] h-[400px] md:w-[400px] md:h-[500px] bg-primary rounded-3xl overflow-hidden shadow-2xl transform rotate-3 relative cursor-pointer">
               {/* Image placeholder or 3D element */}
               <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary flex items-center justify-center p-8 text-center text-white transform-3d">
                 <div className="translate-z-[30px]">
                    <Droplet size={120} className="mb-4 text-secondary mx-auto" />
                    <h3 className="text-3xl font-playfair">100% Homemade</h3>
                    <p className="opacity-80">Premium Quality</p>
                 </div>
               </div>
            </div>
            {/* Accent elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary rounded-full -z-10 blur-2xl opacity-50" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent rounded-full -z-10 blur-2xl opacity-20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
