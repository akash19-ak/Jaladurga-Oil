import { useEffect } from 'react';
import { motion } from 'framer-motion';

const SplashScreen = ({ finishLoading }) => {
  useEffect(() => {
    // Lock body scroll while splash screen is active
    document.body.style.overflow = 'hidden';
    
    const timer = setTimeout(() => {
      document.body.style.overflow = 'unset';
      finishLoading();
    }, 2800); // 2.8 seconds total splash duration
    
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, [finishLoading]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-white flex items-center justify-center overflow-hidden"
    >
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          duration: 1.5, 
          ease: "easeOut"
        }}
        className="relative flex items-center justify-center perspective-1000"
      >
        {/* Glowing backdrop animations */}
        <div className="absolute w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute w-48 h-48 bg-accent/20 rounded-full blur-2xl animate-pulse delay-75" />
        
        {/* Pop-up Logo */}
        <motion.div
           initial={{ opacity: 0, scale: 0.5 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
           className="relative z-10 drop-shadow-[0_20px_50px_rgba(15,118,110,0.3)]"
        >
          <motion.img 
            src="/logo.png" 
            alt="Jaladurga Cold Pressed Coconut Oil" 
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-white"
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;
