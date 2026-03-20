import { useState, useCallback } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Award, Clock } from "lucide-react";
import Lightbox from "../components/Lightbox";

const miniGalleryImages = [
  '/vertical image gutters/Garage door gutters.png',
  '/vertical image gutters/close up black gutters.png',
  '/vertical image gutters/close up metal building gutters.png',
  '/vertical image gutters/metal building gutters.png',
  '/horozantal gutter images/dark gutters.png',
  '/horozantal gutter images/white gutters white house.png',
  '/horozantal gutter images/wood house with white gutters.png',
  '/horozantal gutter images/white house black gutters.png',
];

export default function Home() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? miniGalleryImages.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === miniGalleryImages.length - 1 ? 0 : prev + 1));
  }, []);

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-bg-onyx">
        <div className="absolute inset-0 z-0 opacity-40">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/Rainfall.mp4" type="video/mp4" />
          </video>
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
                Decades of<br />
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
                src="/horozantal gutter images/black gutters good picture.png" 
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
                img: "/horozantal gutter images/white house black gutters.png"
              },
              { 
                title: "Gutter Guards", 
                desc: "Elite protection systems that eliminate maintenance and prevent debris accumulation.",
                icon: <Award className="text-azure" size={32} />,
                img: "/horozantal gutter images/Very close up to gutters.png"
              },
              { 
                title: "Custom Downspouts", 
                desc: "Available in round and square profiles to match your home's architectural aesthetic.",
                icon: <Clock className="text-azure" size={32} />,
                img: "/horozantal gutter images/custom-downspouts.jpg"
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
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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
        
        {(() => {
          const reviews = [
            { name: "Shonda Morgan", text: "He went above and beyond helping me find the perfect color for my gutters. I couldn't be more satisfied by the job they did. It makes my house look amazing!" },
            { name: "Ben Credeur", text: "We are extremely pleased with the quality, price, product, and workmanship of Elite Seamless Gutters! Not only is their work and price excellent, you will not find friendlier people." },
            { name: "Sadie Akinkugbe", text: "If I could give 10 stars I would! Elite Seamless Gutters LLC exceeded my expectations in every way possible! Five stars without a doubt!" },
            { name: "Loni Jean Harding", text: "Jerry Morgan made me feel like I was not only a priority, but he also took time to educate me on the differences and importance that these gutters have on maintaining your home." },
            { name: "Jared Welch", text: "Great guys, great company. They charged what they quoted unlike some contractors. Excellent work, very honest guys. Highly recommend!" },
            { name: "Chad Luke", text: "Jerry was very responsive. Color was matched perfectly. Installation was done quickly, without any issues, with all mess cleaned up!" },
            { name: "Jarrod Antley", text: "They were Prompt, Honest, Trustworthy and Transparent. I am a VERY SATISFIED CUSTOMER and will recommend them to anyone needing gutters!" },
            { name: "Jason Perrotti", text: "Great company, ran by a stand up guy. Jerry will treat you right." },
          ];
          return (
            <div className="flex space-x-8 animate-marquee whitespace-nowrap">
              {reviews.map((review, i) => (
                <div key={i} className="inline-block p-10 bg-white/5 liquid-shield min-w-[400px]">
                  <div className="flex text-azure mb-4">
                    {[1, 2, 3, 4, 5].map(s => <span key={s} className="text-xl">★</span>)}
                  </div>
                  <p className="text-silver text-lg italic mb-6 whitespace-normal">"{review.text}"</p>
                  <p className="text-azure font-bold uppercase tracking-widest text-xs">— {review.name}</p>
                </div>
              ))}
              {reviews.map((review, i) => (
                <div key={`dup-${i}`} className="inline-block p-10 bg-white/5 liquid-shield min-w-[400px]">
                  <div className="flex text-azure mb-4">
                    {[1, 2, 3, 4, 5].map(s => <span key={s} className="text-xl">★</span>)}
                  </div>
                  <p className="text-silver text-lg italic mb-6 whitespace-normal">"{review.text}"</p>
                  <p className="text-azure font-bold uppercase tracking-widest text-xs">— {review.name}</p>
                </div>
              ))}
            </div>
          );
        })()}
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
            {miniGalleryImages.map((src, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 0.98 }}
                className="aspect-[3/4] overflow-hidden liquid-shield cursor-pointer"
                onClick={() => openLightbox(i)}
              >
                <img 
                  src={src} 
                  alt={`Project ${i + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
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
      <Lightbox
        images={miniGalleryImages}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </main>
  );
}
