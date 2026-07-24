import React, { useState } from 'react';
import { Download, Utensils, MessageCircle } from 'lucide-react';
import { cn } from '../lib/utils';
import SEO from '../components/SEO';

type Category = 'Traditional Kenyan' | 'International' | 'Breakfast' | 'Desserts' | 'Drinks';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: Category;
  image?: string;
  tag?: string;
}

const menuData: MenuItem[] = [
  // ─── Traditional Kenyan ───────────────────────────────────────────
  {
    id: 'tk1',
    name: 'Swahili Pilau Heritage',
    description: 'Aromatic Basmati rice cooked with our signature spice blend, served with tender beef or chicken.',
    category: 'Traditional Kenyan',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=2070&auto=format&fit=crop',
    tag: 'House Favorite'
  },
  {
    id: 'tk2',
    name: 'Signature Nyama Choma',
    description: 'Prime roast meat (goat or beef), marinated in local herbs, served with kachumbari and ugali.',
    category: 'Traditional Kenyan',
    image: 'https://images.unsplash.com/photo-1544025162-81111420d4d9?q=80&w=1976&auto=format&fit=crop',
    tag: 'Iconic'
  },
  {
    id: 'tk3',
    name: 'Mukimo & Stew',
    description: 'Traditional mashed green peas, potatoes, and corn, served with rich beef stew.',
    category: 'Traditional Kenyan',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=2070&auto=format&fit=crop',
    tag: 'Authentic'
  },
  {
    id: 'tk4',
    name: 'Soft Layered Chapati',
    description: 'Flaky, buttery chapatis served with your choice of savory stews or vegetables.',
    category: 'Traditional Kenyan',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=2071&auto=format&fit=crop',
  },
  {
    id: 'tk5',
    name: 'Coastal Biryani',
    description: 'Rich, spiced rice dish cooked with tender chicken or beef in a thick, flavorful sauce.',
    category: 'Traditional Kenyan',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'tk6',
    name: 'Ugali & Sukuma Wiki',
    description: 'Classic cornmeal mash served with sauteed collard greens and tender braised beef.',
    category: 'Traditional Kenyan',
    image: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'tk7',
    name: 'Samaki Wa Kupaka',
    description: 'Grilled whole fish marinated in coconut-curry sauce, a coastal Swahili delicacy.',
    category: 'Traditional Kenyan',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=2070&auto=format&fit=crop',
    tag: 'Coastal Special'
  },
  {
    id: 'tk8',
    name: 'Kienyeji Chicken Stew',
    description: 'Free-range chicken slow-cooked with traditional herbs and vegetables.',
    category: 'Traditional Kenyan',
    image: 'https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'tk9',
    name: 'Irio',
    description: 'Kikuyu classic: mashed green peas, potatoes, and corn kernels — a hearty, comforting staple.',
    category: 'Traditional Kenyan',
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=2070&auto=format&fit=crop',
    tag: 'Heritage'
  },
  {
    id: 'tk10',
    name: 'Githeri',
    description: 'Hearty mix of boiled maize and beans simmered with onions, tomatoes, and aromatic spices.',
    category: 'Traditional Kenyan',
    image: 'https://images.unsplash.com/photo-1515516969-d4008cc6241a?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'tk11',
    name: 'Wali wa Nazi',
    description: 'Coconut-infused rice, a beloved coastal side dish paired with curries and grilled meats.',
    category: 'Traditional Kenyan',
    image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'tk12',
    name: 'Mchuzi wa Nyama',
    description: 'Slow-simmered beef curry in a rich, tomato-based sauce with coconut and traditional spices.',
    category: 'Traditional Kenyan',
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=2070&auto=format&fit=crop',
    tag: 'Spiced'
  },
  {
    id: 'tk13',
    name: 'Matoke',
    description: 'Steamed green bananas in a savory onion and tomato stew — a beloved Eastern Kenya dish.',
    category: 'Traditional Kenyan',
    image: 'https://images.unsplash.com/photo-1563379091339-03b214917e2e?q=80&w=2070&auto=format&fit=crop',
  },

  // ─── International ────────────────────────────────────────────────
  {
    id: 'i1',
    name: 'Rosemary Roast Chicken',
    description: 'Half-chicken marinated in garlic and rosemary, roasted to golden perfection.',
    category: 'International',
    image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=2070&auto=format&fit=crop',
    tag: 'Classic'
  },
  {
    id: 'i2',
    name: 'Gourmet Pasta & Seafood',
    description: 'Linguine tossed with fresh seafood in a light garlic, white wine, and herb sauce.',
    category: 'International',
    image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'i3',
    name: 'Premium BBQ Ribs',
    description: 'Slow-cooked ribs basted in a smoky barbecue sauce, served with artisan salads.',
    category: 'International',
    image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=1976&auto=format&fit=crop',
  },
  {
    id: 'i4',
    name: 'Artisan Wood-Fired Pizza',
    description: 'Hand-tossed crust with gourmet toppings, baked to crispy perfection.',
    category: 'International',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=2069&auto=format&fit=crop',
  },

  // ─── Breakfast ────────────────────────────────────────────────────
  {
    id: 'b1',
    name: 'Swahili Cardamom Mandazi',
    description: 'Hand-kneaded sweet cardamom fried dough, authentically light and airy.',
    category: 'Breakfast',
    image: 'https://images.unsplash.com/photo-1558326567-98ae2405596b?q=80&w=2070&auto=format&fit=crop',
    tag: 'Classic'
  },
  {
    id: 'b2',
    name: 'Fluffy Pancakes & Syrups',
    description: 'Stack of buttermilk pancakes served with assorted syrups and fresh berries.',
    category: 'Breakfast',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'b3',
    name: 'Full English Setup',
    description: 'Eggs, premium sausages, baked beans, grilled tomatoes, and toast.',
    category: 'Breakfast',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'b4',
    name: 'Mahamri & Chai',
    description: 'Sweet coconut cardamom doughnuts paired with spiced Kenyan masala tea.',
    category: 'Breakfast',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=2070&auto=format&fit=crop',
    tag: 'Swahili Morning'
  },

  // ─── Desserts (PHOTOS FIXED) ──────────────────────────────────────
  {
    id: 'd1',
    name: 'Tropical Fruit Platter',
    description: 'A vibrant selection of seasonal Kenyan coastal fruits — mango, pineapple, passion fruit.',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?q=80&w=2070&auto=format&fit=crop',
    tag: 'Fresh'
  },
  {
    id: 'd2',
    name: 'Decadent Chocolate Cake',
    description: 'Rich, moist chocolate cake with dark chocolate ganache and cocoa dust.',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=2070&auto=format&fit=crop',
    tag: 'Sweet'
  },
  {
    id: 'd3',
    name: 'Artisan Cupcakes & Cookies',
    description: 'An assortment of freshly baked, beautifully decorated sweet treats.',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'd4',
    name: 'Kashata & Coconut Sweets',
    description: 'Traditional Swahili peanut and coconut confections with cardamom.',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=2070&auto=format&fit=crop',
    tag: 'Heritage'
  },
  {
    id: 'd5',
    name: 'Mango Sticky Rice',
    description: 'Sweet coconut sticky rice served with fresh ripe mango slices — a tropical indulgence.',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1621293954908-907159247fc8?q=80&w=2070&auto=format&fit=crop',
    tag: 'Tropical'
  },
  {
    id: 'd6',
    name: 'Creme Brulee Trio',
    description: 'Classic vanilla, passion fruit, and coconut-infused creme brulee with caramelized sugar tops.',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'd7',
    name: 'Tropical Cheesecake',
    description: 'Creamy vanilla cheesecake with a passion fruit coulis and biscuit base.',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'd8',
    name: 'Halwa ya Tanga',
    description: 'Fragrant Swahili gelatinous dessert infused with cardamom, saffron, and rosewater.',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=2070&auto=format&fit=crop',
    tag: 'Swahili Classic'
  },

  // ─── Drinks ───────────────────────────────────────────────────────
  {
    id: 'dr1',
    name: 'Freshly Squeezed Juices',
    description: 'Orange, passion fruit, mango, and mixed tropical blends.',
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'dr2',
    name: 'Signature Mocktails',
    description: 'Refreshing non-alcoholic mixed drinks crafted with fresh herbs and fruit.',
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?q=80&w=2070&auto=format&fit=crop',
    tag: 'Refreshing'
  },
  {
    id: 'dr3',
    name: 'Premium Coffee & Tea Station',
    description: 'Kenyan AA coffee, masala tea, and assorted herbal infusions.',
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'dr4',
    name: 'Dawa & Tamarind Cooler',
    description: 'Classic Kenyan honey-lime-ginger cocktail and sweet tamarind refresher.',
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=2070&auto=format&fit=crop',
    tag: 'Local Favorite'
  },
  {
    id: 'dr5',
    name: 'Passion Fruit Lassi',
    description: 'Creamy yoghurt blended with fresh passion fruit and a hint of honey.',
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 'dr6',
    name: 'Kenyan Chai ya Maziwa',
    description: 'Rich milky Kenyan tea brewed with ginger, cinnamon, and clove.',
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6201f?q=80&w=2070&auto=format&fit=crop',
    tag: 'Soul Warming'
  }
];

const categories: Category[] = ['Traditional Kenyan', 'International', 'Breakfast', 'Desserts', 'Drinks'];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<Category>('Traditional Kenyan');

  const filteredItems = menuData.filter(item => item.category === activeCategory);

  return (
    <div className="pt-24 pb-32 md:pb-24">
      <SEO 
        title="Our Menus" 
        description="Discover our curated culinary heritage. From traditional Kenyan delicacies to contemporary international fare, our menu is a celebration of flavor."
      />
      <section className="px-4 md:px-16 max-w-[1280px] mx-auto py-8 md:py-16 text-center">
        <h1 className="text-[32px] md:text-[56px] mb-4 text-primary font-display-lg leading-tight">Curated Culinary Heritage</h1>
        <p className="text-sm md:text-base text-on-surface-variant max-w-2xl mx-auto mb-10">From traditional Kenyan delicacies to contemporary international fare, our menu is a celebration of flavor, precision, and history.</p>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2.5 rounded-full text-xs font-bold tracking-widest transition-all duration-300 flex items-center gap-2 border font-label-caps",
                activeCategory === category
                  ? "bg-primary text-white border-primary shadow-lg"
                  : "bg-surface border-surface-variant text-primary hover:bg-surface-container"
              )}
            >
              <Utensils className={cn("w-3.5 h-3.5", activeCategory === category ? "text-white" : "text-secondary")} />
              {category}
              <span className={cn(
                "ml-1 px-1.5 py-0.5 rounded-full text-[9px] font-bold",
                activeCategory === category ? "bg-white/20" : "bg-surface-container-variant"
              )}>
                {menuData.filter(item => item.category === category).length}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Menu Items */}
      <section className="px-4 md:px-16 max-w-[1280px] mx-auto pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-surface flex flex-col p-5 rounded-xl border border-surface-variant hover:shadow-xl transition-all duration-300 group">
              {item.image && (
                <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                </div>
              )}
              <div className="flex-grow">
                <h3 className="text-base text-primary mb-1.5 font-display-lg">{item.name}</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed mb-3">{item.description}</p>
              </div>
              <div className="flex justify-between items-center border-t border-surface-variant/50 pt-3 mt-auto">
                {item.tag ? (
                  <span className="text-[10px] text-secondary uppercase tracking-widest font-bold font-label-caps">{item.tag}</span>
                ) : (
                  <span></span>
                )}
                <a 
                  href={`https://wa.me/254797453969?text=Hello%20Agnes%20Catering%2C%20I%20am%20interested%20in%20your%20${encodeURIComponent(item.name)}%20menu.`} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-primary hover:text-secondary transition-colors inline-flex items-center gap-1 text-[11px] font-bold font-label-caps"
                >
                  <MessageCircle className="w-3 h-3" /> INQUIRE
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-16 pt-10 border-t border-surface-variant">
          <a 
            href="https://wa.me/254797453969?text=Hello%20Agnes%20Catering%2C%20I%20would%20like%20to%20request%20your%20full%20menu%20PDF." 
            target="_blank" 
            rel="noreferrer" 
            className="bg-primary text-white px-8 py-3.5 rounded-xl text-xs font-bold tracking-widest hover:bg-primary-container transition-all flex items-center gap-3 shadow-lg"
          >
            <Download className="w-4 h-4" /> Request Full Menu PDF
          </a>
        </div>
      </section>
    </div>
  );
}
