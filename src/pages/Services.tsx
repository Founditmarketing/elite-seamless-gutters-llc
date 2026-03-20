import { motion } from "motion/react";

const colors = [
  { code: "001", name: "30° White" },
  { code: "002", name: "Royal Brown" },
  { code: "003", name: "Antique Ivory" },
  { code: "004", name: "Black" },
  { code: "005", name: "Raffia Beige" },
  { code: "006", name: "Beaver Brown" },
  { code: "007", name: "Classic Cream" },
  { code: "008", name: "Clay" },
  { code: "009", name: "Colonial Blue" },
  { code: "010", name: "Sherwood Green" },
  { code: "011", name: "Musket Brown" },
  { code: "013", name: "Wicker" },
  { code: "014", name: "Dove Gray" },
  { code: "015", name: "Almond" },
  { code: "017", name: "Linen" },
  { code: "018", name: "Light Bronze" },
  { code: "019", name: "Tuxedo Gray" },
  { code: "020", name: "Heritage Cream" },
  { code: "021", name: "Colonial Gray" },
  { code: "022", name: "Buckskin Brown" },
  { code: "023", name: "80° White" },
  { code: "024", name: "Colonial Red" },
  { code: "025", name: "Dark Bronze" },
  { code: "026", name: "Herringbone" },
  { code: "027", name: "Copper Metallic" },
  { code: "028", name: "Paint Grip Metallic" },
];

const premiumColors = [
  { code: "130", name: "Satin White", type: "Armor Tough" },
  { code: "131", name: "Wood Beige", type: "Armor Tough" },
  { code: "132", name: "Cameo", type: "Armor Tough" },
  { code: "129", name: "Rustic Copper", type: "Dual Tone" },
  { code: "890", name: "Solid Copper", type: "Premium Metal" },
  { code: "920", name: "Galvalume Plus Steel", type: "Premium Metal" },
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
                    <div className="aspect-square bg-white/5 liquid-shield mb-4 flex items-center justify-center border border-white/5 group-hover:border-azure/50 transition-colors">
                      <span className="text-azure font-bold text-xl opacity-20 group-hover:opacity-100 transition-opacity">{color.code}</span>
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
                    <div className="aspect-square bg-sapphire/10 liquid-shield mb-4 flex items-center justify-center border border-azure/20 group-hover:bg-sapphire/20 transition-all">
                      <span className="text-azure font-bold text-xl">{color.code}</span>
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
