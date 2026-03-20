import { useState, useCallback } from "react";
import { motion } from "motion/react";
import Lightbox from "../components/Lightbox";

const galleryImages = [
  '/horozantal gutter images/Very close up to gutters.png',
  '/vertical image gutters/Garage door gutters.png',
  '/horozantal gutter images/black gutters good picture.png',
  '/vertical image gutters/close up metal building gutters.png',
  '/horozantal gutter images/brick house black gutters.png',
  '/vertical image gutters/close up black gutters.png',
  '/horozantal gutter images/dark gutters space out.png',
  '/vertical image gutters/metal building gutters.png',
  '/horozantal gutter images/dark gutters.png',
  '/horozantal gutter images/white gutters white house.png',
  '/horozantal gutter images/wood house with black gutters.png',
  '/horozantal gutter images/wood house with white gutters.png',
];

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  }, []);

  return (
    <main className="pt-32">
      <section className="py-24 bg-bg-onyx">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-24 text-center"
          >
            <span className="text-azure font-bold tracking-[0.4em] uppercase text-xs mb-6 block">Our Portfolio</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">Elite Installations</h1>
            <p className="text-xl max-w-2xl mx-auto opacity-80">
              A visual testament to forty-five years of architectural excellence and invincible protection across Central Louisiana.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1 }}
                className="group relative aspect-[4/5] overflow-hidden liquid-shield cursor-pointer bg-white/5"
                onClick={() => openLightbox(i)}
              >
                <img 
                  src={src} 
                  alt={`Project ${i + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-bg-charcoal border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to see your home in our gallery?</h2>
          <p className="mb-12 opacity-80">Join the hundreds of satisfied homeowners who have chosen Elite Seamless Gutters for their architectural protection needs.</p>
          <a href="/contact" className="btn-premium">Schedule Your Installation</a>
        </div>
      </section>

      <Lightbox
        images={galleryImages}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </main>
  );
}
