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
        <motion.img 
          src="/logo.png" 
          alt="Jaladurga Cold Pressed Coconut Oil" 
          className="w-48 md:w-64 h-auto relative z-10 drop-shadow-[0_20px_50px_rgba(15,118,110,0.3)]"
          initial={{ y: 40, opacity: 0, rotateX: 30 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          transition={{ 
            duration: 1.4, 
            type: "spring",
            bounce: 0.3,
            delay: 0.2
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;
