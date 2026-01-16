export const PRODUCTS = [
  // --- WATCHES ---
  {
    id: "acc-001",
    name: "Signature Horizon Watch",
    basePrice: 19500,
    category: "Watches",
    description: "A timeless piece blending minimalist geometry with high-grade architectural materials.",
    sizes: ["38mm", "42mm"],
    options: [
      { id: "gold", name: "Champagne Gold", hex: "#D4AF37", priceModifier: 2500, image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=600" },
      { id: "silver", name: "Brushed Silver", hex: "#C0C0C0", priceModifier: 0, image: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&q=80&w=600" },
      { id: "charcoal", name: "Matte Charcoal", hex: "#36454F", priceModifier: 1500, image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&q=80&w=600" }
    ]
  },
  {
    id: "acc-004",
    name: "Chronograph Sport",
    basePrice: 24900,
    category: "Watches",
    description: "Precision engineering meets rugged durability. Features a tachymeter scale and 100m water resistance.",
    sizes: ["40mm", "44mm"],
    options: [
      { id: "navy", name: "Deep Navy", hex: "#000080", priceModifier: 0, image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=600" },
      { id: "black", name: "Onyx Black", hex: "#000000", priceModifier: 1000, image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&q=80&w=600" },
      { id: "steel", name: "Stainless Steel", hex: "#b0b0b0", priceModifier: 2000, image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=600" }
    ]
  },
  
  // --- BAGS ---
  {
    id: "acc-002",
    name: "Voyager Weekender",
    basePrice: 35900,
    category: "Bags",
    description: "Full-grain Italian leather bag designed for the global traveler. Features a laptop compartment and waterproof lining.",
    sizes: ["Standard", "Large (+ ₹4,000)"],
    options: [
      { id: "black", name: "Midnight Black", hex: "#1a1a1a", priceModifier: 0, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=600" },
      { id: "brown", name: "Whiskey Brown", hex: "#8b4513", priceModifier: 0, image: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&q=80&w=600" },
      { id: "olive", name: "Olive Canvas", hex: "#556b2f", priceModifier: -3000, image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=600" } 
    ]
  },
  {
    id: "acc-009",
    name: "Urban Canvas Backpack",
    basePrice: 12500,
    category: "Bags",
    description: "Built for the city commute. Water-resistant waxed canvas with genuine leather trim.",
    sizes: ["15L", "20L"],
    options: [
      { id: "grey", name: "Slate Grey", hex: "#708090", priceModifier: 0, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=600&sat=-100" },
      { id: "tan", name: "Desert Tan", hex: "#d2b48c", priceModifier: 0, image: "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?auto=format&fit=crop&q=80&w=600" },
      { id: "green", name: "Forest Green", hex: "#228b22", priceModifier: 0, image: "https://images.unsplash.com/photo-1622560480605-d83c85265c7c?auto=format&fit=crop&q=80&w=600" }
    ]
  },
  {
    id: "acc-012",
    name: "Executive Laptop Sleeve",
    basePrice: 4500,
    category: "Bags",
    description: "Slim profile protection for your MacBook or ultrabook. Felt interior prevents scratches.",
    sizes: ["13-inch", "15-inch"],
    options: [
      { id: "leather", name: "Cognac Leather", hex: "#8b4513", priceModifier: 1500, image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600" },
      { id: "grey", name: "Heather Grey", hex: "#808080", priceModifier: 0, image: "https://images.unsplash.com/photo-1531936993138-c64603e3a479?auto=format&fit=crop&q=80&w=600" },
      { id: "black", name: "Jet Black", hex: "#000000", priceModifier: 0, image: "https://images.unsplash.com/photo-1605733513597-a8f8341084e6?auto=format&fit=crop&q=80&w=600" }
    ]
  },

  // --- JEWELRY ---
  {
    id: "acc-003",
    name: "Obsidian Cufflinks",
    basePrice: 9500,
    category: "Jewelry",
    description: "Hand-polished volcanic glass set in sterling silver. The perfect understated accent.",
    sizes: ["One Size"],
    options: [
      { id: "onyx", name: "Polished Onyx", hex: "#000000", priceModifier: 0, image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=600" },
      { id: "gold", name: "18k Gold Plated", hex: "#D4AF37", priceModifier: 5500, image: "https://images.unsplash.com/photo-1596944924616-b0e121526fdd?auto=format&fit=crop&q=80&w=600" },
      { id: "silver", name: "Sterling Silver", hex: "#e5e7eb", priceModifier: 1200, image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&q=80&w=600" }
    ]
  },
  {
    id: "acc-007",
    name: "Minimalist Signet Ring",
    basePrice: 6500,
    category: "Jewelry",
    description: "A modern take on a classic heritage piece. Perfect for stacking or wearing solo.",
    sizes: ["Size 7", "Size 8", "Size 9"],
    options: [
      { id: "gold", name: "Gold Vermeil", hex: "#ffd700", priceModifier: 2000, image: "https://images.unsplash.com/photo-1622398925373-3f9162e9d748?auto=format&fit=crop&q=80&w=600" },
      { id: "silver", name: "Sterling Silver", hex: "#c0c0c0", priceModifier: 0, image: "https://images.unsplash.com/photo-1622398925373-3f9162e9d748?auto=format&fit=crop&q=80&w=600&sat=-100" },
      { id: "rose", name: "Rose Gold", hex: "#b76e79", priceModifier: 2000, image: "https://images.unsplash.com/photo-1602752250055-5255ca868134?auto=format&fit=crop&q=80&w=600" }
    ]
  },
  {
    id: "acc-014",
    name: "Cable Knit Bracelet",
    basePrice: 4200,
    category: "Jewelry",
    description: "Industrial chic. Twisted stainless steel cable with a magnetic clasp.",
    sizes: ["Medium", "Large"],
    options: [
      { id: "steel", name: "Steel", hex: "#c0c0c0", priceModifier: 0, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=600" },
      { id: "black", name: "Black PVD", hex: "#000000", priceModifier: 500, image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=600" },
      { id: "gold", name: "Gold Tone", hex: "#ffd700", priceModifier: 500, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=600" }
    ]
  },

  // --- EYEWEAR ---
  {
    id: "acc-004-sun",
    name: "Maverick Aviators",
    basePrice: 14500,
    category: "Eyewear",
    description: "Classic pilot shape updated with polarized lenses and acetate tips.",
    sizes: ["One Size"],
    options: [
      { id: "gold", name: "Gold / Green", hex: "#ffd700", priceModifier: 0, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=600" },
      { id: "black", name: "Black / Grey", hex: "#000000", priceModifier: 0, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=600" },
      { id: "silver", name: "Chrome / Blue", hex: "#c0c0c0", priceModifier: 500, image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&q=80&w=600" }
    ]
  },
  {
    id: "acc-016",
    name: "Wayfarer Classic",
    basePrice: 12500,
    category: "Eyewear",
    description: "Acetate frames with UV400 protection. A staple for any wardrobe.",
    sizes: ["Standard", "Wide"],
    options: [
      { id: "tortoise", name: "Tortoise Shell", hex: "#5e4b35", priceModifier: 1000, image: "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&q=80&w=600" },
      { id: "black", name: "Piano Black", hex: "#000000", priceModifier: 0, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=600" },
      { id: "clear", name: "Crystal Clear", hex: "#e0e0e0", priceModifier: 0, image: "https://images.unsplash.com/photo-1625591342274-013866180475?auto=format&fit=crop&q=80&w=600" }
    ]
  },

  // --- LEATHER GOODS ---
  {
    id: "acc-005",
    name: "Heritage Bi-fold Wallet",
    basePrice: 5500,
    category: "Leather",
    description: "Slim profile wallet with RFID blocking technology. Holds 8 cards and cash.",
    sizes: ["One Size"],
    options: [
      { id: "tan", name: "Saddle Tan", hex: "#8b4513", priceModifier: 0, image: "https://images.unsplash.com/photo-1627123424574-18bd75f72682?auto=format&fit=crop&q=80&w=600" },
      { id: "black", name: "Classic Black", hex: "#000000", priceModifier: 0, image: "https://images.unsplash.com/photo-1627123424574-18bd75f72682?auto=format&fit=crop&q=80&w=600&sat=-100" },
      { id: "navy", name: "Navy Blue", hex: "#000080", priceModifier: 0, image: "https://images.unsplash.com/photo-1601004111310-8bceb03dc958?auto=format&fit=crop&q=80&w=600" }
    ]
  },
  {
    id: "acc-008",
    name: "Classic Leather Belt",
    basePrice: 4800,
    category: "Leather",
    description: "Full-grain leather strap with a solid brass buckle. Gets better with age.",
    sizes: ["32", "34", "36", "38"],
    options: [
      { id: "brown", name: "Espresso", hex: "#3e2723", priceModifier: 0, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=600" },
      { id: "black", name: "Midnight", hex: "#000000", priceModifier: 0, image: "https://images.unsplash.com/photo-1624222244080-6924e03d7522?auto=format&fit=crop&q=80&w=600" },
      { id: "tan", name: "Tan", hex: "#d2b48c", priceModifier: 0, image: "https://images.unsplash.com/photo-1549488497-64c614b8a4d6?auto=format&fit=crop&q=80&w=600" }
    ]
  },
  {
    id: "acc-015",
    name: "Slim Card Holder",
    basePrice: 2500,
    category: "Leather",
    description: "For the minimalist who only carries essentials. 4 card slots and a center pocket.",
    sizes: ["One Size"],
    options: [
      { id: "green", name: "Emerald", hex: "#50c878", priceModifier: 0, image: "https://images.unsplash.com/photo-1601004111310-8bceb03dc958?auto=format&fit=crop&q=80&w=600" },
      { id: "black", name: "Black", hex: "#000000", priceModifier: 0, image: "https://images.unsplash.com/photo-1627123424574-18bd75f72682?auto=format&fit=crop&q=80&w=600&sat=-100" },
      { id: "red", name: "Oxblood", hex: "#800020", priceModifier: 200, image: "https://images.unsplash.com/photo-1627123424574-18bd75f72682?auto=format&fit=crop&q=80&w=600" }
    ]
  },

  // --- APPAREL ---
  {
    id: "acc-006",
    name: "Cashmere Scarf",
    basePrice: 8900,
    category: "Apparel",
    description: "100% Himalayan cashmere. Incredibly soft and warm without the bulk.",
    sizes: ["One Size"],
    options: [
      { id: "beige", name: "Sand", hex: "#f5f5dc", priceModifier: 0, image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&q=80&w=600" },
      { id: "grey", name: "Charcoal", hex: "#36454f", priceModifier: 0, image: "https://images.unsplash.com/photo-1585848245598-6349c258d44c?auto=format&fit=crop&q=80&w=600" },
      { id: "plaid", name: "Classic Plaid", hex: "#cc0000", priceModifier: 500, image: "https://images.unsplash.com/photo-1608649856525-2b47ea5e7d23?auto=format&fit=crop&q=80&w=600" }
    ]
  },
  {
    id: "acc-013",
    name: "Travel Toiletry Bag",
    basePrice: 3800,
    category: "Apparel",
    description: "Water-resistant lining with dual compartments. Keeps your grooming kit organized.",
    sizes: ["Standard"],
    options: [
      { id: "brown", name: "Leather", hex: "#8b4513", priceModifier: 2000, image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600" },
      { id: "black", name: "Nylon Black", hex: "#000000", priceModifier: 0, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=600&sat=-100" },
      { id: "blue", name: "Navy", hex: "#000080", priceModifier: 0, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=600" }
    ]
  }
];