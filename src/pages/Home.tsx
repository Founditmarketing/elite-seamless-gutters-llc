import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Award, Clock } from "lucide-react";

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-bg-onyx">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://picsum.photos/seed/modern-architecture/1920/1080" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-onyx/20 via-transparent to-bg-onyx"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-azure font-bold tracking-[0.4em] uppercase text-xs mb-6 block">
              Central Louisiana's Premier Choice
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold mb-10 leading-[1.1] md:leading-[1] tracking-tighter">
              Invincible protection<br />
              <span className="text-titanium block mt-2">from the truly elite.</span>
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
              <Link to="/contact" className="btn-premium w-full sm:w-auto">
                Request a Quote
              </Link>
              <Link to="/services" className="text-silver uppercase tracking-widest text-sm font-bold flex items-center group">
                Explore Products 
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-2" size={18} />
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4 opacity-30">
          <span className="text-[10px] uppercase tracking-[0.5em] vertical-text">Scroll</span>
          <div className="w-[1px] h-16 bg-silver"></div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-32 bg-bg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                Forty-five years of<br />
                <span className="text-azure">architectural mastery.</span>
              </h2>
              <p className="text-lg mb-10 max-w-xl">
                Elite Seamless Gutters LLC isn't just a service provider; we are the standard for architectural protection in Alexandria and Pineville. For over four decades, we've blended rigid metal strength with elite craftsmanship to safeguard the region's finest homes.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold text-azure">45+</h3>
                  <p className="text-xs uppercase tracking-widest font-bold">Years Experience</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold text-azure">100%</h3>
                  <p className="text-xs uppercase tracking-widest font-bold">Seamless Quality</p>
                </div>
              </div>
              <Link to="/about" className="btn-premium">
                Learn Our Story
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square liquid-shield overflow-hidden"
            >
              <img 
                src="https://picsum.photos/seed/construction-detail/800/800" 
                alt="Craftsmanship" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32 bg-bg-onyx">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-azure font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Our Expertise</span>
            <h2 className="text-4xl md:text-6xl font-bold">Precision Engineered Systems</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { 
                title: "Seamless Gutters", 
                desc: "Custom-fabricated 6\" and 7\" K-Style systems designed for maximum water diversion.",
                icon: <Shield className="text-azure" size={32} />,
                img: "https://placehold.co/600x400/1A1A1C/0A84FF.png?text=6-Inch+Gutter+System"
              },
              { 
                title: "Gutter Guards", 
                desc: "Elite protection systems that eliminate maintenance and prevent debris accumulation.",
                icon: <Award className="text-azure" size={32} />,
                img: "https://placehold.co/600x400/1A1A1C/0A84FF.png?text=Gutter+Guard+Detail"
              },
              { 
                title: "Custom Downspouts", 
                desc: "Available in round and square profiles to match your home's architectural aesthetic.",
                icon: <Clock className="text-azure" size={32} />,
                img: "https://placehold.co/600x400/1A1A1C/0A84FF.png?text=Square+Downspout+Profile"
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white/5 liquid-shield hover:bg-white/10 group overflow-hidden"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={`https://picsum.photos/seed/${['gutter-system', 'protection-detail', 'architectural-metal'][i]}/600/400`} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-12">
                  <div className="mb-8">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="mb-8 opacity-80">{service.desc}</p>
                  <Link to="/services" className="text-azure font-bold uppercase tracking-widest text-xs flex items-center">
                    View Details <ArrowRight className="ml-2 transition-transform group-hover:translate-x-2" size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scrolling Reviews */}
      <section className="py-32 bg-bg-charcoal overflow-hidden border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <span className="text-azure font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Client Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold">The Elite Experience</h2>
        </div>
        
        <div className="flex space-x-8 animate-marquee whitespace-nowrap">
          {[
            { name: "Robert M.", text: "The 7-inch gutters handled the last storm perfectly. Elite work." },
            { name: "Sarah L.", text: "Most professional crew I've ever had at my home. Highly recommend." },
            { name: "James T.", text: "45 years of experience really shows in the final product. Flawless." },
            { name: "Linda K.", text: "The copper metallic color is stunning. It changed the whole look of our house." },
            { name: "Michael P.", text: "Fast, clean, and the gutter guards are a game changer. No more ladders!" }
          ].map((review, i) => (
            <div key={i} className="inline-block p-10 bg-white/5 liquid-shield min-w-[400px]">
              <div className="flex text-azure mb-4">
                {[1, 2, 3, 4, 5].map(s => <span key={s} className="text-xl">★</span>)}
              </div>
              <p className="text-silver text-lg italic mb-6 whitespace-normal">"{review.text}"</p>
              <p className="text-azure font-bold uppercase tracking-widest text-xs">— {review.name}</p>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {[
            { name: "Robert M.", text: "The 7-inch gutters handled the last storm perfectly. Elite work." },
            { name: "Sarah L.", text: "Most professional crew I've ever had at my home. Highly recommend." },
            { name: "James T.", text: "45 years of experience really shows in the final product. Flawless." },
            { name: "Linda K.", text: "The copper metallic color is stunning. It changed the whole look of our house." },
            { name: "Michael P.", text: "Fast, clean, and the gutter guards are a game changer. No more ladders!" }
          ].map((review, i) => (
            <div key={`dup-${i}`} className="inline-block p-10 bg-white/5 liquid-shield min-w-[400px]">
              <div className="flex text-azure mb-4">
                {[1, 2, 3, 4, 5].map(s => <span key={s} className="text-xl">★</span>)}
              </div>
              <p className="text-silver text-lg italic mb-6 whitespace-normal">"{review.text}"</p>
              <p className="text-azure font-bold uppercase tracking-widest text-xs">— {review.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-32 bg-bg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <span className="text-azure font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Portfolio</span>
              <h2 className="text-4xl md:text-6xl font-bold">Elite Installations</h2>
            </div>
            <Link to="/gallery" className="btn-premium">View Full Gallery</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 0.98 }}
                className="aspect-[3/4] overflow-hidden liquid-shield cursor-pointer"
              >
                <img 
                  src={`https://picsum.photos/seed/installation-${item}/600/800`} 
                  alt={`Project ${item}`} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-azure relative overflow-hidden">
        <div className="absolute inset-0 bg-bg-onyx/10"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-7xl font-bold text-silver mb-12 tracking-tighter">
            Ready for invincible protection?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Link to="/contact" className="px-12 py-6 bg-silver text-bg-onyx font-bold uppercase tracking-widest text-sm liquid-shield hover:bg-white transition-colors">
              Get a Free Estimate
            </Link>
            <a href="tel:3187094447" className="text-silver text-2xl font-bold hover:text-white transition-colors">
              318-709-4447
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
