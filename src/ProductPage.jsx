import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingBag, ChevronRight, Star, ArrowLeft, Check } from 'lucide-react';
import { PRODUCTS } from './data';
import { useCart } from './CartContext'; // Import the Cart Hook

export default function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useCart(); // Get the add function from our global state
  const product = PRODUCTS.find((p) => p.id === id);

  // If product not found (e.g. wrong URL)
  if (!product) return <div className="p-20 text-center text-xl">Product not found</div>;

  // --- STATE MANAGEMENT ---
  const [selectedVariant, setSelectedVariant] = useState(product.options[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [isAdding, setIsAdding] = useState(false);

  // Reset state if the user clicks a "Related Product" link
  useEffect(() => {
    setSelectedVariant(product.options[0]);
    setSelectedSize(product.sizes[0]);
    window.scrollTo(0,0); // Force scroll to top
  }, [product]);

  const totalPrice = product.basePrice + selectedVariant.priceModifier;

  const handleAddToCart = () => {
    setIsAdding(true);
    
    // 1. Add item to global cart state
    addToCart(product, selectedVariant, selectedSize);

    // 2. Visual feedback (Reset button after 1 second)
    setTimeout(() => setIsAdding(false), 1000);
  };

  // --- RELATED PRODUCTS LOGIC ---
  // Filter out current product, shuffle, and pick 3
  const relatedProducts = PRODUCTS
    .filter(p => p.id !== product.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-slate-900 font-sans selection:bg-stone-200">
      
      {/* Breadcrumb Navigation */}
      <nav className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
        <ol className="flex items-center space-x-2 text-xs uppercase tracking-widest text-stone-500">
          <li><Link to="/" className="hover:text-black transition">Home</Link></li>
          <ChevronRight size={12} />
          <li><span className="cursor-default">{product.category || 'Shop'}</span></li>
          <ChevronRight size={12} />
          <li className="text-black font-semibold line-clamp-1">{product.name}</li>
        </ol>
        <Link to="/" className="text-xs uppercase tracking-widest text-stone-500 hover:text-black flex items-center gap-2">
           <ArrowLeft size={14} /> Back to Shop
        </Link>
      </nav>

      <main className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 pb-20 border-b border-stone-200">
        
        {/* Left: Dynamic Image Gallery */}
        <section className="space-y-4">
          <div className="aspect-[4/5] overflow-hidden bg-stone-100 rounded-sm shadow-sm relative group">
            <img 
              src={selectedVariant.image} 
              alt={selectedVariant.name}
              className="w-full h-full object-cover transition-all duration-700 ease-in-out hover:scale-105"
            />
          </div>
          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-4">
            {product.options.map((opt) => (
              <button 
                key={opt.id}
                onClick={() => setSelectedVariant(opt)}
                className={`aspect-square overflow-hidden border transition-all ${selectedVariant.id === opt.id ? 'border-black ring-1 ring-black' : 'border-transparent opacity-60 hover:opacity-100'}`}
              >
                <img src={opt.image} className="w-full h-full object-cover" alt={opt.name} />
              </button>
            ))}
          </div>
        </section>

        {/* Right: Product Info */}
        <section className="flex flex-col justify-center">
          <div className="mb-8">
            <div className="flex items-center gap-1 mb-4 text-stone-400">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              <span className="text-xs ml-2 tracking-tighter">(124 Reviews)</span>
            </div>
            <h1 className="text-4xl font-light tracking-tight mb-2 uppercase font-serif">{product.name}</h1>
            <p className="text-2xl font-light text-stone-600 transition-all duration-300">
                ₹{totalPrice.toLocaleString('en-IN')}
            </p>
          </div>

          <p className="text-stone-500 leading-relaxed mb-10 max-w-md">
            {product.description}
          </p>

          {/* Color Selection */}
          <div className="mb-8">
            <span className="text-xs uppercase tracking-widest font-semibold block mb-4">
                Finish: <span className="text-stone-500 font-normal">{selectedVariant.name}</span>
            </span>
            <div className="flex gap-3">
              {product.options.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedVariant(opt)}
                  title={opt.name}
                  className={`w-8 h-8 rounded-full border transition-all p-1 ${selectedVariant.id === opt.id ? 'border-black scale-110' : 'border-stone-200 hover:border-stone-400'}`}
                >
                  <div className="w-full h-full rounded-full shadow-inner" style={{ backgroundColor: opt.hex }} />
                </button>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-10">
            <span className="text-xs uppercase tracking-widest font-semibold block mb-4">Select Option</span>
            <div className="flex flex-wrap gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-6 py-3 text-xs uppercase tracking-wider border transition-all duration-300 ${selectedSize === size ? 'border-black bg-black text-white' : 'border-stone-200 hover:border-black text-stone-600'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button 
            onClick={handleAddToCart}
            disabled={isAdding}
            className={`relative w-full py-4 uppercase tracking-[0.2em] text-sm transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden
              ${isAdding ? 'bg-green-800 text-white' : 'bg-stone-900 text-white hover:bg-black'}`}
          >
            <div className={`flex items-center gap-3 transition-transform duration-300 ${isAdding ? '-translate-y-10' : 'translate-y-0'}`}>
              <ShoppingBag size={18} />
              Add to Cart
            </div>
            
            <div className={`absolute inset-0 flex items-center justify-center gap-2 transition-transform duration-300 ${isAdding ? 'translate-y-0' : 'translate-y-10'}`}>
              <Check size={18} />
              Added to Bag
            </div>
          </button>
        </section>
      </main>

      {/* --- RELATED PRODUCTS SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-serif mb-10 text-center">You Might Also Like</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedProducts.map((relProduct) => (
            <Link to={`/product/${relProduct.id}`} key={relProduct.id} className="group block text-center">
              <div className="aspect-[4/5] bg-stone-100 overflow-hidden mb-4 relative">
                 <img 
                   src={relProduct.options[0].image} 
                   alt={relProduct.name}
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 />
              </div>
              <h3 className="font-serif text-lg group-hover:underline underline-offset-4 decoration-stone-300">{relProduct.name}</h3>
              <p className="text-stone-500 text-sm mt-1">₹{relProduct.basePrice.toLocaleString('en-IN')}</p>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}