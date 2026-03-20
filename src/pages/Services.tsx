import { motion } from "motion/react";

const colors = [
  { code: "001", name: "30° White", hex: "#E4E5DF" },
  { code: "002", name: "Royal Brown", hex: "#4A3A2F" },
  { code: "003", name: "Antique Ivory", hex: "#D9C3A3" },
  { code: "004", name: "Black", hex: "#1E201F" },
  { code: "005", name: "Raffia Beige", hex: "#D0BFA4" },
  { code: "006", name: "Beaver Brown", hex: "#584433" },
  { code: "007", name: "Classic Cream", hex: "#DCCFA9" },
  { code: "008", name: "Clay", hex: "#999587" },
  { code: "009", name: "Colonial Blue", hex: "#577888" },
  { code: "010", name: "Sherwood Green", hex: "#295642" },
  { code: "011", name: "Musket Brown", hex: "#3B3224" },
  { code: "013", name: "Wicker", hex: "#CEBC9A" },
  { code: "014", name: "Dove Gray", hex: "#8B9093" },
  { code: "015", name: "Almond", hex: "#E0D9C1" },
  { code: "017", name: "Linen", hex: "#EEEEDD" },
  { code: "018", name: "Light Bronze", hex: "#7F6D5A" },
  { code: "019", name: "Tuxedo Gray", hex: "#EDE2C0" },
  { code: "020", name: "Heritage Cream", hex: "#D0BFA1" },
  { code: "021", name: "Colonial Gray", hex: "#ADB1AF" },
  { code: "022", name: "Buckskin Brown", hex: "#9B815D" },
  { code: "023", name: "80° White", hex: "#F0F2EA" },
  { code: "024", name: "Colonial Red", hex: "#883F2F" },
  { code: "025", name: "Dark Bronze", hex: "#3F403B" },
  { code: "026", name: "Herringbone", hex: "#D9CDBA" },
  { code: "027", name: "Copper Metallic", hex: "#EA8828" },
  { code: "028", name: "Paint Grip Metallic", hex: "#7A7F7C" },
];

const premiumColors = [
  { code: "130", name: "Satin White", type: "Armor Tough", hex: "#E6E7E1" },
  { code: "131", name: "Wood Beige", type: "Armor Tough", hex: "#9A896F" },
  { code: "132", name: "Cameo", type: "Armor Tough", hex: "#E5DDCA" },
  { code: "129", name: "Rustic Copper", type: "Dual Tone", hex: "#B8733D" },
  { code: "890", name: "Solid Copper", type: "Premium Metal", hex: "#B87333" },
  { code: "920", name: "Galvalume Plus Steel", type: "Premium Metal", hex: "#A8ACAA" },
];

export default function Services() {
  return (
    <main className="pt-32">
      {/* Products Section */}
      <section className="py-24 bg-bg-onyx">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-24"
          >
            <span className="text-azure font-bold tracking-[0.4em] uppercase text-xs mb-6 block">Our Solutions</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">Architectural Systems</h1>
            <p className="text-xl max-w-2xl opacity-80">
              We offer a comprehensive suite of water management products engineered for the unique climate of Central Louisiana.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-12 bg-white/5 liquid-shield space-y-8">
              <h2 className="text-3xl font-bold">Seamless Gutter Systems</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-silver font-bold uppercase tracking-widest text-xs mb-2">K-Style Profiles</h3>
                  <p>Available in 6" and 7" configurations to handle even the heaviest tropical downpours.</p>
                </div>
                <div>
                  <h3 className="text-silver font-bold uppercase tracking-widest text-xs mb-2">Gutter Guards</h3>
                  <p>Premium leaf protection that keeps your system flowing freely year-round without the need for dangerous ladder work.</p>
                </div>
              </div>
              <div className="aspect-video liquid-shield overflow-hidden">
                <img 
                  src="/horozantal gutter images/white gutters white house.png" 
                  alt="Gutter System" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="p-12 bg-white/5 liquid-shield space-y-8">
              <h2 className="text-3xl font-bold">Downspout Solutions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-silver font-bold uppercase tracking-widest text-xs mb-2">Round Downspouts</h3>
                  <p>Classic 4" round profiles for a timeless, architectural look.</p>
                </div>
                <div>
                  <h3 className="text-silver font-bold uppercase tracking-widest text-xs mb-2">Square Downspouts</h3>
                  <p>High-capacity 3"x4" and 4"x5" rectangular profiles for maximum drainage efficiency.</p>
                </div>
              </div>
              <div className="aspect-video liquid-shield overflow-hidden">
                <img 
                  src="/horozantal gutter images/dark gutters.png" 
                  alt="Downspouts" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Color Catalog */}
      <section className="py-32 bg-bg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-azure font-bold tracking-[0.4em] uppercase text-xs mb-4 block">The Color Studio</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">A Palette for Every Home</h2>
            <p className="text-sm italic opacity-60">*The Colors Shown May Vary. Please consult with our specialists for physical samples.*</p>
          </div>

          <div className="space-y-24">
            {/* Standard Colors */}
            <div>
              <h3 className="text-2xl font-bold mb-12 flex items-center">
                Standard Selection
                <div className="ml-6 flex-1 h-[1px] bg-white/10"></div>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {colors.map((color) => (
                  <div key={color.code} className="group">
                    <div className="aspect-square liquid-shield mb-4 flex items-center justify-center border border-white/10 group-hover:border-azure/50 transition-colors" style={{ backgroundColor: color.hex }}>
                      <span className="font-bold text-xl opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: ['004','002','006','010','011','018','025'].includes(color.code) ? '#fff' : '#1E201F' }}>{color.code}</span>
                    </div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-silver">{color.name}</p>
                    <p className="text-[9px] opacity-40">Code: {color.code}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Premium Metals */}
            <div>
              <h3 className="text-2xl font-bold mb-12 flex items-center">
                Premium & Specialty Metals
                <div className="ml-6 flex-1 h-[1px] bg-white/10"></div>
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {premiumColors.map((color) => (
                  <div key={color.code} className="group">
                    <div className="aspect-square liquid-shield mb-4 flex items-center justify-center border border-azure/20 transition-all" style={{ backgroundColor: color.hex }}>
                      <span className="font-bold text-xl opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: ['131'].includes(color.code) ? '#fff' : '#1E201F' }}>{color.code}</span>
                    </div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-silver">{color.name}</p>
                    <p className="text-[9px] text-azure uppercase tracking-tighter">{color.type}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
