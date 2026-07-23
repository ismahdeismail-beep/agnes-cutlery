import React, { useState } from 'react';
import { Download, Utensils, QrCode } from 'lucide-react';
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
  // Traditional Kenyan
  {
    id: 'tk1',
    name: 'Swahili Pilau Heritage',
    description: 'Aromatic Basmati rice cooked with our signature spice blend, served with tender beef or chicken.',
    category: 'Traditional Kenyan',
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1913&auto=format&fit=crop',
    tag: 'House Favorite'
  },
  {
    id: 'tk2',
    name: 'Signature Nyama Choma',
    description: 'Prime roast meat (goat or beef), marinated in local herbs, served with kachumbari.',
    category: 'Traditional Kenyan',
  },
  {
    id: 'tk3',
    name: 'Mukimo & Stew',
    description: 'Traditional mashed green peas, potatoes, and corn, served with rich beef stew.',
    category: 'Traditional Kenyan',
    tag: 'Authentic'
  },
  {
    id: 'tk4',
    name: 'Soft Layered Chapati',
    description: 'Flaky, buttery chapatis served with your choice of savory stews or vegetables.',
    category: 'Traditional Kenyan',
  },
  {
    id: 'tk5',
    name: 'Coastal Biryani',
    description: 'Rich, spiced rice dish cooked with tender chicken or beef in a thick, flavorful sauce.',
    category: 'Traditional Kenyan',
  },
  {
    id: 'tk6',
    name: 'Ugali & Sukuma Wiki',
    description: 'Classic cornmeal mash served with sautéed collard greens and tender braised beef.',
    category: 'Traditional Kenyan',
    image: 'https://images.unsplash.com/photo-1544025162-81111420d4d9?q=80&w=1976&auto=format&fit=crop',
  },

  // International
  {
    id: 'i1',
    name: 'Rosemary Roast Chicken',
    description: 'Half-chicken marinated in garlic and rosemary, roasted to golden perfection.',
    category: 'International',
    image: 'https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?q=80&w=2070&auto=format&fit=crop',
    tag: 'Classic'
  },
  {
    id: 'i2',
    name: 'Gourmet Pasta & Seafood',
    description: 'Linguine tossed with fresh seafood in a light garlic, white wine, and herb sauce.',
    category: 'International',
  },
  {
    id: 'i3',
    name: 'Premium BBQ Ribs',
    description: 'Slow-cooked ribs basted in a smoky barbecue sauce, served with artisan salads.',
    category: 'International',
  },
  {
    id: 'i4',
    name: 'Artisan Wood-Fired Pizza',
    description: 'Hand-tossed crust with gourmet toppings, baked to perfection.',
    category: 'International',
  },

  // Breakfast
  {
    id: 'b1',
    name: 'Swahili Cardamom Mandazi',
    description: 'Hand-kneaded sweet cardamom fried dough, authentically light and airy.',
    category: 'Breakfast',
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=2070&auto=format&fit=crop',
    tag: 'Classic'
  },
  {
    id: 'b2',
    name: 'Fluffy Pancakes & Syrups',
    description: 'Stack of buttermilk pancakes served with assorted syrups and fresh berries.',
    category: 'Breakfast',
  },
  {
    id: 'b3',
    name: 'Full English Setup',
    description: 'Eggs, premium sausages, baked beans, grilled tomatoes, and toast.',
    category: 'Breakfast',
  },
  
  // Desserts
  {
    id: 'd1',
    name: 'Tropical Fruit Platter',
    description: 'A vibrant selection of seasonal Kenyan coastal fruits.',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'd2',
    name: 'Decadent Chocolate Cake',
    description: 'Rich, moist chocolate cake with dark chocolate ganache.',
    category: 'Desserts',
    tag: 'Sweet'
  },
  {
    id: 'd3',
    name: 'Artisan Cupcakes & Cookies',
    description: 'An assortment of freshly baked, beautifully decorated sweet treats.',
    category: 'Desserts'
  },

  // Drinks
  {
    id: 'dr1',
    name: 'Freshly Squeezed Juices',
    description: 'Orange, passion fruit, mango, and mixed tropical blends.',
    category: 'Drinks',
  },
  {
    id: 'dr2',
    name: 'Signature Mocktails',
    description: 'Refreshing non-alcoholic mixed drinks crafted with fresh herbs and fruit.',
    category: 'Drinks',
    tag: 'Refreshing'
  },
  {
    id: 'dr3',
    name: 'Premium Coffee & Tea Station',
    description: 'Kenyan AA coffee, masala tea, and assorted herbal infusions.',
    category: 'Drinks',
  }
];

const categories: Category[] = ['Traditional Kenyan', 'International', 'Breakfast', 'Desserts', 'Drinks'];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<Category>('Traditional Kenyan');

  const filteredItems = menuData.filter(item => item.category === activeCategory);

  return (
    <div className="pt-24 pb-32">
      <SEO 
        title="Our Menus" 
        description="Discover our curated culinary heritage. From traditional Kenyan delicacies to contemporary international fare, our menu is a celebration of flavor."
      />
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-12 md:py-20 text-center">
        <h1 className="text-display-lg-mobile md:text-display-lg mb-4 text-primary">Curated Culinary Heritage</h1>
        <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">From traditional Kenyan delicacies to contemporary international fare, our menu is a celebration of flavor, precision, and history.</p>
        
        {/* Dynamic Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-3 rounded-full text-label-caps transition-all duration-300 flex items-center gap-2 border",
                activeCategory === category
                  ? "bg-primary text-on-primary border-primary shadow-lg"
                  : "bg-surface border-surface-variant text-primary hover:bg-surface-variant"
              )}
            >
              <Utensils className={cn("w-4 h-4", activeCategory === category ? "text-on-primary" : "text-secondary")} />
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Dynamic Menu Display */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 min-h-[500px]">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-surface flex flex-col p-6 rounded-xl border border-surface-variant hover:shadow-xl transition-all duration-500 group">
              {item.image && (
                <div className="aspect-[4/3] rounded-lg overflow-hidden mb-6">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
              )}
              <div className="flex-grow">
                <h3 className="text-headline-sm text-primary mb-2">{item.name}</h3>
                <p className="text-body-md text-on-surface-variant mb-4">{item.description}</p>
              </div>
              <div className="flex justify-between items-center border-t border-surface-variant pt-4 mt-auto">
                {item.tag ? (
                  <span className="text-label-caps text-secondary uppercase text-xs tracking-widest">{item.tag}</span>
                ) : (
                  <span></span>
                )}
                <a href={`https://wa.me/254797453969?text=Hello%20Agnes%20Catering%2C%20I%20am%20interested%20in%20your%20${encodeURIComponent(item.name)}%20menu.`} target="_blank" rel="noreferrer" className="text-primary hover:text-secondary transition-colors inline-flex items-center gap-1 text-sm font-label-caps">
                  <QrCode className="w-4 h-4" /> INQUIRE
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-20 pt-10 border-t border-surface-variant">
          <a href="https://wa.me/254797453969?text=Hello%20Agnes%20Catering%2C%20I%20would%20like%20to%20request%20your%20full%20menu%20PDF." target="_blank" rel="noreferrer" className="bg-primary text-on-primary px-10 py-4 rounded-lg text-label-caps hover:bg-primary-container transition-all flex items-center gap-3 shadow-lg">
            <Download className="w-5 h-5" /> Request Full Menu PDF
          </a>
        </div>
      </section>
    </div>
  );
}
