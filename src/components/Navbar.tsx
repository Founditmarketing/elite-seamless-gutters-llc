import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services & Colors", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact Us", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-bg-onyx/90 backdrop-blur-md py-4 border-b border-white/5" : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex flex-col">
          <span className="text-silver font-bold text-2xl tracking-tighter leading-none">ELITE</span>
          <span className="text-azure text-[10px] tracking-[0.3em] font-medium uppercase">Seamless Gutters</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-10">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path} 
              className={`nav-link ${location.pathname === item.path ? "text-azure" : ""}`}
            >
              {item.name}
            </Link>
          ))}
          <a 
            href="tel:3187094447" 
            className="flex items-center space-x-2 bg-white/5 px-4 py-2 liquid-shield hover:bg-white/10"
          >
            <Phone size={14} className="text-azure" />
            <span className="text-xs font-medium text-silver">318-709-4447</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-silver" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-bg-onyx border-b border-white/10 p-8 flex flex-col space-y-6 lg:hidden"
        >
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path} 
              onClick={() => setIsOpen(false)}
              className="text-xl text-silver uppercase tracking-widest hover:text-azure"
            >
              {item.name}
            </Link>
          ))}
          <a href="tel:3187094447" className="text-azure font-bold text-lg">318-709-4447</a>
        </motion.div>
      )}
    </nav>
  );
}
