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
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          duration: 1.2, 
          ease: "easeOut",
          type: "spring",
          bounce: 0.5
        }}
        className="relative flex items-center justify-center"
      >
        {/* Glowing backdrop animations */}
        <div className="absolute w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute w-48 h-48 bg-accent/20 rounded-full blur-2xl animate-pulse delay-75" />
        
        {/* Pop-up Logo */}
        <motion.img 
          src="/logo.png" 
          alt="Jaladurga Cold Pressed Coconut Oil" 
          className="w-48 md:w-64 h-auto relative z-10 drop-shadow-2xl"
          animate={{ 
            y: [0, -15, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;
