import { motion } from "motion/react";

const galleryItems = [
  { id: 1, title: "Modern Residential", category: "Seamless Gutters" },
  { id: 2, title: "Architectural Detail", category: "Downspouts" },
  { id: 3, title: "Commercial Protection", category: "7-Inch Systems" },
  { id: 4, title: "Premium Copper", category: "Specialty Metals" },
  { id: 5, title: "Estate Installation", category: "Gutter Guards" },
  { id: 6, title: "Pineville Project", category: "Seamless Gutters" },
  { id: 7, title: "Alexandria Custom", category: "Downspouts" },
  { id: 8, title: "Heritage Home", category: "Restoration" },
  { id: 9, title: "Modern Farmhouse", category: "Black Gutters" },
  { id: 10, title: "Lakeside Protection", category: "Gutter Guards" },
  { id: 11, title: "Industrial Grade", category: "Commercial" },
  { id: 12, title: "Copper Accents", category: "Premium" },
];

export default function Gallery() {
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
            {galleryItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1 }}
                className="group relative aspect-[4/5] overflow-hidden liquid-shield cursor-pointer bg-white/5"
              >
                <img 
                  src={`https://picsum.photos/seed/arch-${item.id}/800/1000`} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-onyx via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                  <span className="text-azure font-bold uppercase tracking-widest text-[10px] mb-2">{item.category}</span>
                  <h3 className="text-2xl font-bold text-silver">{item.title}</h3>
                </div>
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
    </main>
  );
}
