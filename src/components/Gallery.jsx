import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Image as ImageIcon, Plus, X } from 'lucide-react';
import SectionHeader from './SectionHeader';

const allImages = [
  { id: 1, title: 'Fresh Coconuts', desc: 'Premium quality coconuts sourced directly from organic farms.', span: 'md:col-span-2 md:row-span-2', height: 'h-80 md:h-full', featured: true },
  { id: 2, title: 'Cold Press Machine', desc: 'Our traditional wooden extraction process maintaining 100% purity.', span: 'md:col-span-1 md:row-span-1', height: 'h-64', featured: true },
  { id: 3, title: 'Pure Extraction', desc: 'Zero heat applied to keep vital nutrients intact.', span: 'md:col-span-1 md:row-span-1', height: 'h-64', featured: true },
  { id: 4, title: 'Quality Check', desc: '', span: 'md:col-span-2 md:row-span-1', height: 'h-64', featured: true },
  { id: 5, title: 'Bottle Packaging', desc: 'Eco-friendly and hygienic packaging process.', span: 'md:col-span-1 md:row-span-1', height: 'h-64', featured: true },
  // Additional images for the expanded view
  { id: 6, title: 'Factory View', desc: '', span: 'md:col-span-1 md:row-span-2', height: 'h-80' },
  { id: 7, title: 'Sun Drying', desc: 'Coconuts are sun-dried naturally without artificial roasting.', span: 'md:col-span-2 md:row-span-1', height: 'h-64' },
  { id: 8, title: 'Filtering Process', desc: '', span: 'md:col-span-1 md:row-span-1', height: 'h-64' },
  { id: 9, title: 'Final Product', desc: 'Crystal clear, pure coconut aroma in every drop.', span: 'md:col-span-3 md:row-span-1', height: 'h-80' },
];

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when full-page modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const featuredImages = allImages.filter(img => img.featured);

  return (
    <section id="gallery" className="py-24 bg-white relative">
      <div className="container perspective-1000">
        <SectionHeader 
          subtitle="Our Factory"
          title="See Our Process"
          description="Take a visual journey through our traditional cold-pressing process. We maintain the highest standards of hygiene and purity at every step."
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-auto">
          {featuredImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative group rounded-3xl overflow-hidden cursor-pointer bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center border border-primary/5 ${item.span} ${item.height}`}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center text-primary/40 group-hover:scale-110 transition-transform duration-700">
                <ImageIcon size={48} className="mb-2 opacity-50" />
                <p className="text-sm font-medium">Add Photo</p>
              </div>

              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 px-4">
                  <Camera size={32} className="mx-auto mb-3 text-accent" />
                  <h3 className="text-xl font-bold font-['Montserrat'] tracking-wide">{item.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Plus Option / View All Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: featuredImages.length * 0.1 }}
            viewport={{ once: true }}
            onClick={() => setIsOpen(true)}
            className="relative group rounded-3xl overflow-hidden cursor-pointer bg-bg-light flex items-center justify-center border-2 border-dashed border-primary/20 hover:border-primary/50 md:col-span-1 md:row-span-1 h-64 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <div className="flex flex-col items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-3 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Plus size={32} />
              </div>
              <p className="font-bold tracking-wide uppercase text-sm">View Gallery</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Full Page Gallery Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-0 z-[100] bg-gray-50 overflow-y-auto"
            style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh' }}
          >
            <div className="sticky top-0 z-[110] bg-white/90 backdrop-blur-xl border-b border-gray-200 px-4 md:px-8 py-4 flex justify-between items-center shadow-sm">
              <h2 className="text-2xl font-bold font-['Montserrat'] text-primary">Complete Gallery</h2>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 bg-gray-100 hover:bg-red-500 hover:text-white text-gray-800 rounded-full flex items-center justify-center transition-colors focus:outline-none shadow-sm"
              >
                <X size={24} />
              </button>
            </div>

            <div className="container py-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allImages.map((img, i) => (
                  <motion.div
                    key={img.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden group flex flex-col h-full hover:shadow-xl transition-shadow duration-300"
                  >
                    {/* Image Area */}
                    <div className="h-64 bg-gradient-to-br from-primary/5 to-accent/10 flex items-center justify-center relative overflow-hidden">
                      <ImageIcon size={48} className="text-primary/20 group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute top-2 right-2 bg-black/40 text-white text-xs px-2 py-1 rounded backdrop-blur-md">Add Photo</div>
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors pointer-events-none" />
                    </div>
                    
                    {/* Description Area */}
                    <div className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-bold font-['Montserrat'] mb-2">{img.title}</h3>
                      {img.desc ? (
                        <p className="text-gray-600 text-sm leading-relaxed">{img.desc}</p>
                      ) : (
                        <p className="text-gray-400 text-sm italic">No description provided.</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
