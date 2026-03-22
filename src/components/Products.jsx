import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Check, Star, Droplets, Plus, Minus } from 'lucide-react';
import SectionHeader from './SectionHeader';

const products = [
  {
    id: 1,
    name: '0.5 Litre Pure Coconut Oil',
    basePrice: 200,
    priceStr: '₹200*',
    description: 'Perfect for small families and trial.',
    capacity: '500ml',
    rating: 4.8,
    reviews: 124,
    badge: 'Best Seller'
  },
  {
    id: 2,
    name: '1 Litre Pure Coconut Oil',
    basePrice: 390,
    priceStr: '₹390*',
    description: 'Our best-selling home essential.',
    capacity: '1000ml',
    rating: 4.9,
    reviews: 256,
    badge: 'Popular Choice'
  },
  {
    id: 3,
    name: '2 Litre Pure Coconut Oil',
    basePrice: 780,
    priceStr: '₹780*',
    description: 'Value pack for larger households.',
    capacity: '2000ml',
    rating: 4.7,
    reviews: 89,
    badge: 'Best Value'
  },
  {
    id: 4,
    name: '5 Litre Pure Coconut Oil',
    basePrice: 1950,
    priceStr: '₹1950*',
    description: 'Bulk canister. Highly economical.',
    capacity: '5000ml',
    rating: 4.9,
    reviews: 112,
    badge: 'Bulk Saver'
  }
];

const ProductCard = ({ product, index }) => {
  const [quantity, setQuantity] = useState(1);
  const whatsappNumber = '9113570875';

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    if (quantity < 20) setQuantity(quantity + 1);
  };

  const totalPrice = product.basePrice * quantity;
  const message = `Hi! I would like to order ${quantity} quantity of ${product.name}. (Approx ₹${totalPrice}). Please confirm the final negotiated rate and delivery details.`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative h-full"
    >
      <motion.div 
        className="absolute -top-2 -right-2 z-10 bg-accent text-white px-3 py-1 rounded-full text-xs font-bold shadow-md"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
      >
        {product.badge}
      </motion.div>

      <div className="card-3d glass p-6 md:p-8 rounded-3xl hover:bg-primary hover:text-white transition-all duration-500 shadow-premium flex flex-col h-full bg-white">
        <motion.div 
          className="relative mb-6 overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 aspect-square"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-6">
              <Droplets className="text-primary mx-auto mb-4 drop-shadow-sm group-hover:text-white transition-colors" size={48} />
              <p className="text-sm font-medium text-primary group-hover:text-white/90">Premium Oil</p>
              <p className="text-xs text-primary/70 mt-1 group-hover:text-white/70">{product.capacity}</p>
            </div>
          </div>
        </motion.div>
        
        <div className="flex-grow space-y-4 flex flex-col">
          <h3 className="text-xl font-bold mb-1 leading-snug">{product.name}</h3>
          
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={16} 
                  className={i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'} 
                />
              ))}
            </div>
            <span className="text-sm font-medium">{product.rating}</span>
          </div>
          
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-accent group-hover:text-white transition-colors">{product.priceStr}</span>
            <span className="text-sm opacity-60">/ pack</span>
          </div>

          <p className="text-sm opacity-80 flex-grow">{product.description}</p>

          <ul className="space-y-2 opacity-80 text-xs font-semibold mb-4">
            <li className="flex items-center gap-2"><Check size={14} /> 100% Cold Pressed</li>
            <li className="flex items-center gap-2"><Check size={14} /> Freshly Extracted</li>
          </ul>

          {/* Quantity Selector */}
          <div className="flex items-center justify-between bg-bg-light group-hover:bg-primary/50 text-text-dark group-hover:text-white rounded-full p-1 mt-auto transition-colors">
            <button onClick={decreaseQuantity} className="p-2 hover:bg-white hover:text-primary rounded-full transition-colors focus:outline-none">
              <Minus size={16} />
            </button>
            <span className="font-bold px-4">{quantity}</span>
            <button onClick={increaseQuantity} className="p-2 hover:bg-white hover:text-primary rounded-full transition-colors focus:outline-none">
              <Plus size={16} />
            </button>
          </div>

          {/* Action Button */}
          <motion.a 
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noreferrer"
            className="block w-full py-3 mt-4 text-center border-2 border-primary text-primary hover:bg-primary hover:text-white group-hover:bg-white group-hover:text-primary group-hover:border-white font-bold rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Order ₹{totalPrice}
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const Products = () => {
  return (
    <section id="products" className="py-24 bg-bg-light/50">
      <div className="container perspective-1000">
        <SectionHeader 
          subtitle="Our Products"
          title="Pure Home Made Oil"
          description="Experience the purity and goodness of traditionally extracted coconut oil. Premium quality delivered right to you."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-16 max-w-3xl mx-auto p-6 rounded-2xl bg-white border border-primary/10 shadow-sm relative overflow-hidden">
           <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
           <p className="text-sm md:text-base text-gray-600 font-medium leading-relaxed">
             <span className="font-bold text-accent uppercase tracking-wider block mb-2">* Important Pricing Disclaimer</span> 
             Since our oil is 100% pure, natural, and cold-pressed fresh from whole coconuts, <span className="text-primary font-bold">our rates are not rigidly fixed</span>. The listed prices are approximations and are negotiable. Final rates may vary depending on current raw coconut market prices and your total bulk quantity. We guarantee our uncompromising purity over generic market brands!
           </p>
        </div>
      </div>
    </section>
  );
};

export default Products;
