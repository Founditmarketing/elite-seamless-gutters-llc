import { motion } from "motion/react";
import { ShieldCheck, Users, BadgePercent, Heart } from "lucide-react";

export default function About() {
  return (
    <main className="pt-32">
      {/* Hero */}
      <section className="py-24 bg-bg-onyx">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-azure font-bold tracking-[0.4em] uppercase text-xs mb-6 block">Our Legacy</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-none tracking-tighter">
              Forty-five years of<br />
              <span className="text-titanium">uncompromising quality.</span>
            </h1>
            <p className="text-xl opacity-80">
              Founded on the principles of architectural integrity and elite craftsmanship, Elite Seamless Gutters LLC has been Central Louisiana's trusted protector since 1981.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="ui-line !my-0"></div>

      {/* Content */}
      <section className="py-32 bg-bg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">The Elite Standard</h2>
                <p>
                  Based in Pineville, Louisiana, we specialize in high-end seamless gutter systems that provide more than just water diversion—they provide peace of mind. Our team brings decades of technical expertise to every project, ensuring that your home is equipped with a "Liquid Shield" that stands the test of time.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="p-8 bg-white/5 liquid-shield">
                  <ShieldCheck className="text-azure mb-4" size={32} />
                  <h3 className="text-silver font-bold mb-2">Architectural Grade</h3>
                  <p className="text-sm">We use only the highest quality metals and precision fabrication techniques.</p>
                </div>
                <div className="p-8 bg-white/5 liquid-shield">
                  <Heart className="text-azure mb-4" size={32} />
                  <h3 className="text-silver font-bold mb-2">Local Commitment</h3>
                  <p className="text-sm">Deeply rooted in the Alexandria and Pineville communities for 45+ years.</p>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <div className="p-12 bg-sapphire/20 border border-azure/20 liquid-shield">
                <h3 className="text-2xl font-bold mb-6 text-silver">Exclusive Benefits</h3>
                <ul className="space-y-6">
                  <li className="flex items-start space-x-4">
                    <BadgePercent className="text-azure shrink-0" size={24} />
                    <div>
                      <h4 className="text-silver font-bold">0% Financing</h4>
                      <p className="text-sm">Take advantage of our 12-month 0% interest financing options for qualified homeowners.</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4">
                    <Users className="text-azure shrink-0" size={24} />
                    <div>
                      <h4 className="text-silver font-bold">Honoring Heroes</h4>
                      <p className="text-sm">We proudly offer exclusive discounts for Military members and First Responders.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="aspect-video liquid-shield overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/office-building/800/450" 
                  alt="Headquarters" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team/Values */}
      <section className="py-32 bg-bg-onyx">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-16">The Values That Drive Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-azure text-5xl font-bold mb-4 italic">01</h3>
              <h4 className="text-xl font-bold mb-4">Precision</h4>
              <p className="text-sm">Every measurement is exact. Every cut is perfect. We don't believe in "close enough."</p>
            </div>
            <div>
              <h3 className="text-azure text-5xl font-bold mb-4 italic">02</h3>
              <h4 className="text-xl font-bold mb-4">Integrity</h4>
              <p className="text-sm">We stand behind our work with industry-leading warranties and honest communication.</p>
            </div>
            <div>
              <h3 className="text-azure text-5xl font-bold mb-4 italic">03</h3>
              <h4 className="text-xl font-bold mb-4">Service</h4>
              <p className="text-sm">From the first call to the final inspection, your experience is our top priority.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
