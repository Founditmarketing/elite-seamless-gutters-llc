import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export default function Contact() {
  return (
    <main className="pt-32">
      <section className="py-24 bg-bg-onyx">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-24"
          >
            <span className="text-azure font-bold tracking-[0.4em] uppercase text-xs mb-6 block">Connect With Us</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">Request a Quote</h1>
            <p className="text-xl max-w-2xl opacity-80">
              Speak with an architectural specialist today about your home's protection needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Contact Form Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative aspect-[4/5] lg:aspect-auto lg:h-full overflow-hidden liquid-shield bg-white/5"
            >
              <img 
                src="https://picsum.photos/seed/modern-home-detail/800/1000" 
                alt="Contact Form Placeholder" 
                className="w-full h-full object-cover opacity-50"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center p-12 text-center">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-silver">Interactive Quote System</h3>
                  <p className="text-sm max-w-xs mx-auto">Our digital estimation portal is currently undergoing maintenance. Please use the direct contact information provided to request your architectural quote.</p>
                  <a href="tel:3187094447" className="btn-premium">Call Now</a>
                </div>
              </div>
            </motion.div>

            {/* Contact Info */}
            <div className="space-y-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-azure">
                    <Phone size={20} />
                    <h3 className="text-silver font-bold uppercase tracking-widest text-xs">Call Us</h3>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xl font-bold text-silver">318-709-4447</p>
                    <p className="text-xs opacity-60">Primary Support (24/7)</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xl font-bold text-silver">318-442-8509</p>
                    <p className="text-xs opacity-60">Office (M-F 8-5)</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-azure">
                    <Mail size={20} />
                    <h3 className="text-silver font-bold uppercase tracking-widest text-xs">Email Us</h3>
                  </div>
                  <p className="text-lg break-all text-silver">Jmorgan@eliteseamlessgutterllc.com</p>
                </div>
              </div>

              <div className="ui-line !my-0"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-azure">
                    <MapPin size={20} />
                    <h3 className="text-silver font-bold uppercase tracking-widest text-xs">Headquarters</h3>
                  </div>
                  <p className="text-lg text-silver">P.O. Box 3401<br />Pineville, LA 71361</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-azure">
                    <Clock size={20} />
                    <h3 className="text-silver font-bold uppercase tracking-widest text-xs">Service Hours</h3>
                  </div>
                  <p className="text-lg text-silver">Monday – Friday<br />8:00 AM – 5:00 PM</p>
                </div>
              </div>

              <div className="p-12 bg-sapphire/10 border border-azure/20 liquid-shield">
                <h4 className="text-silver font-bold mb-4 uppercase tracking-widest text-xs">Serving Central Louisiana</h4>
                <p className="text-sm">We provide expert installation and service to Alexandria, Pineville, and all surrounding parishes. Contact us to confirm service availability in your specific area.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
