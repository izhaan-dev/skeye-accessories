/* src/Home.jsx */
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PRODUCTS } from './data';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-slate-900 font-sans selection:bg-stone-200">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop" 
            alt="Hero Background" 
            className="w-full h-full object-cover object-center brightness-[0.85]"
          />
        </div>
        <div className="absolute inset-0 bg-black/30" />
        
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
          <h2 className="text-lg md:text-xl font-bold tracking-[0.3em] mb-6 border-b border-white/30 pb-4 animate-fade-in-up">
            SKEYE ACCESSORIES
          </h2>
          <span className="uppercase tracking-[0.4em] text-xs mb-4 animate-fade-in-up delay-100">
            New Collection 2026
          </span>
          <h1 className="text-5xl md:text-7xl font-serif mb-8 tracking-tight animate-fade-in-up delay-200">
            Elevate Your Everyday
          </h1>
          <button 
            onClick={() => document.getElementById('shop-grid').scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-black px-8 py-4 uppercase tracking-[0.2em] text-xs hover:bg-stone-200 transition-colors animate-fade-in-up delay-200"
          >
            Shop Now
          </button>
        </div>
      </section>

      {/* --- PRODUCT GRID --- */}
      <section id="shop-grid" className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-serif mb-2">Latest Arrivals</h2>
            <p className="text-stone-500 text-sm">Curated essentials for the modern minimalist.</p>
          </div>
          <Link to="/" className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest hover:underline underline-offset-4">
            View All <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {PRODUCTS.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id} className="group block cursor-pointer">
              <div className="relative aspect-[4/5] bg-stone-100 overflow-hidden mb-6 shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1">
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-wider z-10">
                  New
                </span>
                <img 
                  src={product.options[0].image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/5" />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-serif group-hover:underline decoration-stone-300 underline-offset-4">
                    {product.name}
                  </h3>
                  {/* UPDATED TO RUPEE HERE */}
                  <span className="text-stone-900 font-medium">
                    ₹{product.basePrice.toLocaleString('en-IN')}
                  </span>
                </div>
                
                <p className="text-xs text-stone-500 uppercase tracking-wider">{product.options.length} Finishes Available</p>
                
                <div className="flex gap-2 pt-2">
                   {product.options.map(opt => (
                      <div 
                        key={opt.id} 
                        className="w-3 h-3 rounded-full border border-stone-200" 
                        style={{ backgroundColor: opt.hex }} 
                      />
                   ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* --- NEWSLETTER & FOOTER --- */}
      <section className="bg-stone-900 text-white pt-24 pb-12 px-6 text-center">
        
        {/* Newsletter Content */}
        <h2 className="text-3xl font-serif mb-4">Join the Inner Circle</h2>
        <p className="text-stone-400 mb-8 max-w-md mx-auto">Sign up for early access to new drops and exclusive offers.</p>
        <div className="flex max-w-md mx-auto border-b border-stone-700 pb-2 mb-20">
          <input 
            type="email" 
            placeholder="ENTER YOUR EMAIL" 
            className="bg-transparent w-full outline-none text-sm placeholder-stone-500 text-white" 
          />
          <button className="uppercase text-xs tracking-widest text-stone-300 hover:text-white">Subscribe</button>
        </div>

        {/* --- NEW FOOTER LINKS --- */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-xs uppercase tracking-widest text-stone-500 border-t border-stone-800 pt-12">
          <Link to="/return-refund" className="hover:text-white transition-colors">
            Return & Refund Policy
          </Link>
          <span className="hidden md:inline text-stone-700">•</span>
          <Link to="/contact" className="hover:text-white transition-colors">
            Contact Us
          </Link>
          <span className="hidden md:inline text-stone-700">•</span>
          <span className="cursor-default">© 2026 SKEYE ACCESSORIES</span>
        </div>
      </section>
      
    </div>
  );
}