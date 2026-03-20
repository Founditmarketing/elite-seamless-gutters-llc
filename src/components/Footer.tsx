import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-bg-onyx pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="text-silver font-bold text-3xl tracking-tighter leading-none">ELITE</span>
              <span className="text-azure text-xs tracking-[0.3em] font-medium uppercase">Seamless Gutters</span>
            </div>
            <p className="text-sm max-w-xs">
              Invincible protection from the truly elite. Decades of architectural excellence in Central Louisiana.
            </p>

          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-silver uppercase tracking-widest text-sm font-bold">Navigation</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-azure">Home</Link></li>
              <li><Link to="/about" className="hover:text-azure">About Us</Link></li>
              <li><Link to="/services" className="hover:text-azure">Services & Colors</Link></li>
              <li><Link to="/gallery" className="hover:text-azure">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-azure">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-silver uppercase tracking-widest text-sm font-bold">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <Phone size={16} className="text-azure mt-1 shrink-0" />
                <div>
                  <a href="tel:3187094447" className="text-silver font-medium hover:text-azure transition-colors">318-709-4447</a>
                  <p className="text-xs opacity-60">Primary, 24/7 Support</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={16} className="text-azure mt-1 shrink-0" />
                <div>
                  <a href="tel:3184428509" className="text-silver font-medium hover:text-azure transition-colors">318-442-8509</a>
                  <p className="text-xs opacity-60">Office, M-F 8-5</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={16} className="text-azure mt-1 shrink-0" />
                <a href="mailto:Jmorgan@eliteseamlessgutterllc.com" className="break-all hover:text-azure transition-colors">Jmorgan@eliteseamlessgutterllc.com</a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div className="space-y-6">
            <h4 className="text-silver uppercase tracking-widest text-sm font-bold">Headquarters</h4>
            <div className="flex items-start space-x-3 text-sm">
              <MapPin size={16} className="text-azure mt-1 shrink-0" />
              <p>P.O. Box 3401<br />Pineville, LA 71361</p>
            </div>
            <div className="p-6 bg-white/5 liquid-shield">
              <p className="text-xs text-silver font-bold uppercase tracking-widest mb-2">Service Area</p>
              <p className="text-xs">Alexandria, Pineville, and surrounding Central Louisiana parishes.</p>
            </div>
          </div>
        </div>

        <div className="ui-line !my-0 mb-8 opacity-50"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] opacity-40">
          <p>© 2026 Elite Seamless Gutters LLC. All Rights Reserved.</p>
          <p className="mt-4 md:mt-0">Architectural Protection Systems</p>
        </div>
      </div>
    </footer>
  );
}
