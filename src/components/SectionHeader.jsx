import { motion } from 'framer-motion';

const SectionHeader = ({ 
  subtitle, 
  title, 
  description, 
  centered = true,
  subtitleFirst = true 
}) => {
  return (
    <motion.div 
      className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {subtitle && (
        <motion.span 
          className="section-subtitle inline-block"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
        >
          {subtitle}
        </motion.span>
      )}
      
      <motion.h2 
        className="section-title mt-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>
      
      {description && (
        <motion.p 
          className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          {description}
        </motion.p>
      )}
      
      {/* Decorative underline */}
      <motion.div 
        className={`mt-6 h-1 bg-gradient-to-r from-primary to-accent rounded-full ${centered ? 'mx-auto' : 'ml-0'} w-24`}
        initial={{ width: 0 }}
        whileInView={{ width: '6rem' }}
        transition={{ delay: 0.4, duration: 0.8 }}
        viewport={{ once: true }}
      />
    </motion.div>
  );
};

export default SectionHeader;
