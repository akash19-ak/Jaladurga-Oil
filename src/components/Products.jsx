import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Check } from 'lucide-react';

const products = [
  {
    id: 1,
    name: '0.5 Litre Pure Coconut Oil',
    kannadaName: 'ಅರ್ಧ ಲೀಟರ್ ಕೊಬ್ಬರಿ ಎಣ್ಣೆ',
    price: '₹150',
    description: 'Perfect for small families and trial.',
    capacity: '500ml',
    whatsappMsg: 'Hi! I want to order 0.5 Litre Jaladurga Coconut Oil.'
  },
  {
    id: 2,
    name: '1 Litre Pure Coconut Oil',
    kannadaName: 'ಒಂದು ಲೀಟರ್ ಕೊಬ್ಬರಿ ಎಣ್ಣೆ',
    price: '₹280',
    description: 'Our best-selling home essential.',
    capacity: '1000ml',
    whatsappMsg: 'Hi! I want to order 1 Litre Jaladurga Coconut Oil.'
  },
  {
    id: 3,
    name: '2 Litre Pure Coconut Oil',
    kannadaName: 'ಎರಡು ಲೀಟರ್ ಕೊಬ್ಬರಿ ಎಣ್ಣೆ',
    price: '₹540',
    description: 'Value pack for larger households.',
    capacity: '2000ml',
    whatsappMsg: 'Hi! I want to order 2 Litre Jaladurga Coconut Oil.'
  }
];

const Products = () => {
  const whatsappNumber = '9113570875';

  return (
    <section id="products" className="py-24 bg-bg-light">
      <div className="container">
        <span className="section-subtitle">ನಮ್ಮ ಉತ್ಪನ್ನಗಳು | Our Products</span>
        <h2 className="section-title">Pure Home Made Oil</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl group hover:bg-primary hover:text-white transition-all duration-500 shadow-premium"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                 <ShoppingCart className="text-primary group-hover:text-white" size={32} />
              </div>
              
              <h3 className="text-2xl mb-1">{product.name}</h3>
              <p className="text-sm font-semibold text-accent group-hover:text-secondary mb-4">{product.kannadaName}</p>
              
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold">{product.price}</span>
                <span className="text-sm opacity-60">/ pack</span>
              </div>

              <ul className="space-y-3 mb-8 opacity-80">
                <li className="flex items-center gap-2 text-sm"><Check size={16} /> 100% Cold Pressed</li>
                <li className="flex items-center gap-2 text-sm"><Check size={16} /> No Preservatives</li>
                <li className="flex items-center gap-2 text-sm"><Check size={16} /> Freshly Extracted</li>
              </ul>

              <a 
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(product.whatsappMsg)}`}
                target="_blank"
                rel="noreferrer"
                className="btn-primary w-full justify-center group-hover:bg-secondary group-hover:text-primary"
              >
                Order on WhatsApp
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
