import { motion } from 'framer-motion';
import { Camera, Image as ImageIcon } from 'lucide-react';
import SectionHeader from './SectionHeader';

const galleryItems = [
  { id: 1, title: 'Fresh Coconuts', span: 'md:col-span-2 md:row-span-2', height: 'h-80 md:h-full' },
  { id: 2, title: 'Cold Press Machine', span: 'md:col-span-1 md:row-span-1', height: 'h-64' },
  { id: 3, title: 'Pure Extraction', span: 'md:col-span-1 md:row-span-1', height: 'h-64' },
  { id: 4, title: 'Quality Check', span: 'md:col-span-2 md:row-span-1', height: 'h-64' },
  { id: 5, title: 'Bottle Packaging', span: 'md:col-span-1 md:row-span-1', height: 'h-64' },
  { id: 6, title: '100% Homemade', span: 'md:col-span-1 md:row-span-1', height: 'h-64' },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container perspective-1000">
        <SectionHeader 
          subtitle="Our Factory"
          title="See Our Process"
          description="Take a visual journey through our traditional cold-pressing process. We maintain the highest standards of hygiene and purity at every step."
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-auto">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative group rounded-3xl overflow-hidden cursor-pointer bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center border border-primary/5 ${item.span} ${item.height}`}
            >
              {/* Image Placeholder - User will replace this with actual <img> tags */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-primary/40 group-hover:scale-110 transition-transform duration-700">
                <ImageIcon size={48} className="mb-2 opacity-50" />
                <p className="text-sm font-medium">Add Photo</p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 px-4">
                  <Camera size={32} className="mx-auto mb-3 text-accent" />
                  <h3 className="text-xl font-bold font-['Montserrat'] tracking-wide">{item.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
