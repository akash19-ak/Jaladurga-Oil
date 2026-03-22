import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: '/gallery/coconut-oil-1.jpg',
    alt: 'Fresh Coconut Oil Extraction',
    category: 'production',
    title: 'Cold Pressed Process'
  },
  {
    id: 2,
    src: '/gallery/coconut-oil-2.jpg',
    alt: 'Pure Coconut Oil Bottle',
    category: 'product',
    title: '0.5 Litre Bottle'
  },
  {
    id: 3,
    src: '/gallery/coconut-oil-3.jpg',
    alt: 'Coconut Oil Collection',
    category: 'product',
    title: 'Product Range'
  },
  {
    id: 4,
    src: '/gallery/coconut-oil-4.jpg',
    alt: 'Traditional Oil Making',
    category: 'production',
    title: 'Traditional Method'
  },
  {
    id: 5,
    src: '/gallery/coconut-oil-5.jpg',
    alt: 'Fresh Coconuts',
    category: 'ingredients',
    title: 'Fresh Coconuts'
  },
  {
    id: 6,
    src: '/gallery/coconut-oil-6.jpg',
    alt: 'Oil Packaging',
    category: 'packaging',
    title: 'Quality Packaging'
  },
  {
    id: 7,
    src: '/gallery/coconut-oil-7.jpg',
    alt: 'Family Business',
    category: 'team',
    title: 'Our Family'
  },
  {
    id: 8,
    src: '/gallery/coconut-oil-8.jpg',
    alt: 'Customer Happy',
    category: 'customers',
    title: 'Happy Customers'
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const categories = [
    { value: 'all', label: 'All Photos' },
    { value: 'production', label: 'Production' },
    { value: 'product', label: 'Products' },
    { value: 'ingredients', label: 'Ingredients' },
    { value: 'packaging', label: 'Packaging' },
    { value: 'team', label: 'Our Team' },
    { value: 'customers', label: 'Customers' }
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-subtitle">ನಮ್ಮ ಚಿತ್ರಗಳು | Our Gallery</span>
          <h2 className="section-title">Jaladurga Journey</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
            Take a visual tour through our traditional coconut oil making process, 
            from fresh coconuts to pure, cold-pressed oil delivered to your home.
          </p>
          <motion.div 
            className="mt-6 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto w-24"
            initial={{ width: 0 }}
            whileInView={{ width: '6rem' }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.value}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category.value)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === category.value
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          layout
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.5,
                type: "spring"
              }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer bg-gray-100"
              onClick={() => setSelectedImage(image)}
            >
              {/* Image Placeholder */}
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ZoomIn className="text-primary" size={24} />
                  </div>
                  <p className="text-sm font-medium text-gray-700">{image.title}</p>
                  <p className="text-xs text-gray-500 mt-1">Click to view</p>
                </div>
              </div>
              
              {/* Overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-semibold">{image.title}</p>
                  <p className="text-sm opacity-90">{image.alt}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring" }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X size={32} />
              </button>

              {/* Image Content */}
              <div className="bg-white rounded-2xl p-8">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/20 rounded-xl flex items-center justify-center mb-6">
                  <div className="text-center">
                    <ZoomIn className="text-primary mx-auto mb-4" size={48} />
                    <h3 className="text-xl font-semibold text-gray-800">{selectedImage.title}</h3>
                    <p className="text-gray-600 mt-2">{selectedImage.alt}</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{selectedImage.title}</h3>
                    <p className="text-gray-600">{selectedImage.alt}</p>
                  </div>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium capitalize">
                    {selectedImage.category}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
