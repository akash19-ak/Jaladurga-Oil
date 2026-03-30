import { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { Check, Star, Droplets } from 'lucide-react';
import SectionHeader from './SectionHeader';

const products = [
  {
    id: 1,
    name: '0.5 Litre Pure Coconut Oil',
    basePrice: 200,
    priceStr: '₹200*',
    description: 'Perfect for small families and trial.',
    capacity: '500ml',
    image: '/products/500ml.jpg',
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
    image: '/products/1ltr.jpg',
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
    image: '/products/2ltr.jpg',
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
    image: '/products/5ltr.jpg',
    rating: 4.9,
    reviews: 112,
    badge: 'Bulk Saver'
  }
];

/* ─────────────────────────────────────────────
   Quantity Bottom Sheet — rendered at document
   root level so overflow:hidden never clips it
───────────────────────────────────────────── */
const QuantitySheet = ({ isOpen, onClose, quantity, onSelect, productName }) => {
  if (!isOpen) return null;

  return createPortal(
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 99999,
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
      }}
    >
      {/* Backdrop */}
      <div
        style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(2px)' }}
        onClick={onClose}
      />

      {/* Sheet panel — centered on desktop, full-width on mobile */}
      <div style={{
        position: 'relative',
        background: '#fff',
        borderRadius: '24px 24px 0 0',
        maxHeight: '72vh',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 1,
        /* Center on wider screens */
        margin: '0 auto',
        width: '100%',
        maxWidth: '480px',
      }}>
        {/* Drag handle */}
        <div style={{ display: 'flex', justifyContent: 'center', padding: '12px 0 4px' }}>
          <div style={{ width: 44, height: 4, background: '#e5e7eb', borderRadius: 99 }} />
        </div>

        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '8px 20px 14px', borderBottom: '1px solid #f3f4f6',
        }}>
          <div>
            <p style={{ fontSize: 12, fontWeight: 600, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 2 }}>
              Select Quantity
            </p>
            <p style={{ fontSize: 15, fontWeight: 800, color: '#111827' }}>{productName}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            style={{
              width: 34, height: 34, borderRadius: 99,
              background: '#f3f4f6', border: 'none',
              fontWeight: 700, fontSize: 16, cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#6b7280',
            }}
          >
            ✕
          </button>
        </div>

        {/* Options list */}
        <div style={{ overflowY: 'auto', flex: 1, padding: '6px 0' }}>
          {[...Array(50)].map((_, i) => {
            const val = i + 1;
            const selected = quantity === val;
            return (
              <button
                key={val}
                type="button"
                onClick={() => { onSelect(val); onClose(); }}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  width: '100%', padding: '13px 20px',
                  background: selected ? '#fff7ed' : 'transparent',
                  border: 'none', borderBottom: '1px solid #f9fafb',
                  fontWeight: 700, fontSize: 16,
                  color: selected ? '#c47f17' : '#374151',
                  cursor: 'pointer', textAlign: 'left',
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{
                    width: 32, height: 32, borderRadius: 8,
                    background: selected ? '#fff7ed' : '#f9fafb',
                    border: selected ? '2px solid #c47f17' : '1px solid #e5e7eb',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 800, fontSize: 14, color: selected ? '#c47f17' : '#6b7280',
                    flexShrink: 0,
                  }}>
                    {val}
                  </span>
                  {val === 1 ? 'Pack' : 'Packs'}
                </span>
                {selected && (
                  <svg style={{ fill: '#c47f17', width: 20, height: 20, flexShrink: 0 }} viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>,
    document.body
  );
};

/* ─────────────────────────────────────
   Product Card
───────────────────────────────────── */
const ProductCard = ({ product, index }) => {
  const [quantity, setQuantity] = useState(1);
  const [sheetOpen, setSheetOpen] = useState(false);
  const whatsappNumber = '919449592782';

  const totalPrice = product.basePrice * quantity;
  const message = `Hi! I would like to order ${quantity} ${quantity === 1 ? 'pack' : 'packs'} of *${product.name}* (${product.capacity}).

🛒 *Order Details:*
• Product: ${product.name}
• Quantity: ${quantity} ${quantity === 1 ? 'Pack' : 'Packs'}
• Approx. Total: ₹${totalPrice}

Kindly confirm the final negotiated rate and delivery details. Thank you!`;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        viewport={{ once: true }}
        className="group relative h-full"
      >
        {/* Badge */}
        <motion.div
          className="absolute -top-2 -right-2 z-10 bg-accent text-white px-3 py-1 rounded-full text-xs font-bold shadow-md"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: index * 0.1 + 0.3, type: 'spring' }}
        >
          {product.badge}
        </motion.div>

        <div className="card-3d glass p-5 md:p-6 rounded-3xl hover:bg-primary hover:text-white transition-all duration-500 shadow-premium flex flex-col h-full bg-white">
          {/* Image */}
          <motion.div
            className="relative mb-4 overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 aspect-[4/3]"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {product.image ? (
              <>
                <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500" />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors pointer-events-none" />
              </>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-6">
                  <Droplets className="text-primary mx-auto mb-4 drop-shadow-sm group-hover:text-white transition-colors" size={48} />
                  <p className="text-sm font-medium text-primary group-hover:text-white/90">Premium Oil</p>
                  <p className="text-xs text-primary/70 mt-1 group-hover:text-white/70">{product.capacity}</p>
                </div>
              </div>
            )}
          </motion.div>

          <div className="flex-grow flex flex-col gap-3">
            <h3 className="text-xl font-bold leading-snug">{product.name}</h3>

            {/* Stars */}
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className={i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'} />
                ))}
              </div>
              <span className="text-sm font-medium">{product.rating}</span>
            </div>

            {/* Dynamic price */}
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-accent group-hover:text-white transition-colors">₹{totalPrice}</span>
              {quantity > 1
                ? <span className="text-sm opacity-60">total ({product.priceStr}/pk)</span>
                : <span className="text-sm opacity-60">/ pack</span>
              }
            </div>

            <p className="text-sm opacity-80 flex-grow">{product.description}</p>

            <ul className="space-y-1 opacity-80 text-xs font-semibold">
              <li className="flex items-center gap-2"><Check size={14} /> 100% Cold Pressed</li>
              <li className="flex items-center gap-2"><Check size={14} /> Freshly Extracted</li>
            </ul>

            {/* Quantity trigger button */}
            <div className="pt-4 border-t border-gray-100">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Quantity</p>
              <button
                type="button"
                onClick={() => setSheetOpen(true)}
                className="w-full flex items-center justify-between gap-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-primary/40 text-gray-800 font-bold text-sm rounded-xl px-4 py-3 shadow-sm focus:outline-none transition-all touch-manipulation"
              >
                <span className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-sm font-black text-primary">{quantity}</span>
                  {quantity === 1 ? 'Pack' : 'Packs'}
                </span>
                <svg className="fill-current h-4 w-4 text-gray-400 shrink-0" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
                </svg>
              </button>
            </div>

            {/* Order button */}
            <motion.a
              href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`}
              target="_blank"
              rel="noreferrer"
              className="block w-full py-3 text-center border-2 border-primary text-primary hover:bg-primary hover:text-white group-hover:bg-white group-hover:text-primary group-hover:border-white font-bold rounded-full transition-all duration-300 shadow-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Order ₹{totalPrice}
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Bottom Sheet — sibling outside overflow:hidden card */}
      <QuantitySheet
        isOpen={sheetOpen}
        onClose={() => setSheetOpen(false)}
        quantity={quantity}
        onSelect={setQuantity}
        productName={product.name}
      />
    </>
  );
};

/* ─────────────────────────────────────
   Products Section
───────────────────────────────────── */
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
