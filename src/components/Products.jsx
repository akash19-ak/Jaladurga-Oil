
import { motion } from 'framer-motion';
import { ShoppingCart, Check, Star, Droplets } from 'lucide-react';
import SectionHeader from './SectionHeader';

const products = [
  {
    id: 1,
    name: '0.5 Litre Pure Coconut Oil',
    price: '₹150',
    description: 'Perfect for small families and trial.',
    capacity: '500ml',
    image: '/products/500ml-bottle.jpg',
    rating: 4.8,
    reviews: 124,
    badge: 'Best Seller',
    whatsappMsg: 'Hi! I want to order 0.5 Litre Jaladurga Coconut Oil.'
  },
  {
    id: 2,
    name: '1 Litre Pure Coconut Oil',
    price: '₹280',
    description: 'Our best-selling home essential.',
    capacity: '1000ml',
    image: '/products/1litre-bottle.jpg',
    rating: 4.9,
    reviews: 256,
    badge: 'Popular Choice',
    whatsappMsg: 'Hi! I want to order 1 Litre Jaladurga Coconut Oil.'
  },
  {
    id: 3,
    name: '2 Litre Pure Coconut Oil',
    price: '₹540',
    description: 'Value pack for larger households.',
    capacity: '2000ml',
    image: '/products/2litre-bottle.jpg',
    rating: 4.7,
    reviews: 89,
    badge: 'Best Value',
    whatsappMsg: 'Hi! I want to order 2 Litre Jaladurga Coconut Oil.'
  }
];

const Products = () => {
  const whatsappNumber = '9113570875';

  return (
    <section id="products" className="py-24 bg-bg-light">
      <div className="container perspective-1000">
        <SectionHeader 
          subtitle="Our Products"
          title="Pure Home Made Oil"
          description="Experience the purity and goodness of traditionally extracted coconut oil, made with love and care for your family's health."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Badge */}
              <motion.div 
                className="absolute -top-2 -right-2 z-10 bg-accent text-white px-3 py-1 rounded-full text-xs font-bold"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
              >
                {product.badge}
              </motion.div>

              <div className="card-3d glass p-8 rounded-3xl hover:bg-primary hover:text-white transition-all duration-500 shadow-premium cursor-pointer h-full">
                {/* Product Image */}
                <motion.div 
                  className="relative mb-6 overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 aspect-square"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-6">
                      <Droplets className="text-primary mx-auto mb-4" size={48} />
                      <p className="text-sm font-medium text-primary">Product Image</p>
                      <p className="text-xs text-primary/70 mt-1">{product.capacity}</p>
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <ShoppingCart className="text-white" size={32} />
                  </motion.div>
                </motion.div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{product.name}</h3>
                  </div>
                  
                  {/* Rating */}
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
                    <span className="text-sm opacity-60">({product.reviews} reviews)</span>
                  </div>
                  
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">{product.price}</span>
                    <span className="text-sm opacity-60">/ pack</span>
                  </div>

                  <p className="text-sm opacity-80">{product.description}</p>

                  <ul className="space-y-3 opacity-80">
                    <li className="flex items-center gap-2 text-sm"><Check size={16} /> 100% Cold Pressed</li>
                    <li className="flex items-center gap-2 text-sm"><Check size={16} /> No Preservatives</li>
                    <li className="flex items-center gap-2 text-sm"><Check size={16} /> Freshly Extracted</li>
                  </ul>

                  <motion.a 
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(product.whatsappMsg)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary w-full justify-center group-hover:bg-secondary group-hover:text-primary"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Order on WhatsApp
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
