/* src/Home.jsx */
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PRODUCTS } from './data';

export default function Home() {
  return (
    <div className="bg-[#FAF9F6] text-slate-900 font-sans selection:bg-stone-200 pb-10">
      
      {/* --- HERO SECTION (Mobile Optimized) --- */}
      <section className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop" 
            alt="Hero" 
            className="w-full h-full object-cover object-center brightness-[0.85]"
          />
        </div>
        <div className="absolute inset-0 bg-black/30" />
        
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
          <h2 className="text-sm md:text-xl font-bold tracking-[0.2em] mb-4 md:mb-6 border-b border-white/30 pb-2 md:pb-4 animate-fade-in-up">
            SKEYE ACCESSORIES
          </h2>
          <span className="uppercase tracking-[0.2em] text-[10px] md:text-xs mb-3 animate-fade-in-up delay-100">
            New Collection 2026
          </span>
          {/* Responsive Text Size: 4xl on mobile, 7xl on desktop */}
          <h1 className="text-4xl md:text-7xl font-serif mb-6 md:mb-8 tracking-tight animate-fade-in-up delay-200 leading-tight">
            Elevate Your <br className="md:hidden" /> Everyday
          </h1>
          <button 
            onClick={() => document.getElementById('shop-grid').scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-black px-6 py-3 md:px-8 md:py-4 uppercase tracking-[0.2em] text-[10px] md:text-xs hover:bg-stone-200 transition-colors animate-fade-in-up delay-200 active:scale-95 transform duration-150"
          >
            Shop Now
          </button>
        </div>
      </section>

      {/* --- PRODUCT GRID --- */}
      <section id="shop-grid" className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-12 gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif mb-2">Latest Arrivals</h2>
            <p className="text-stone-500 text-xs md:text-sm">Curated essentials for the modern minimalist.</p>
          </div>
        </div>

        {/* Mobile Grid: 1 column, Tablet: 2, Desktop: 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {PRODUCTS.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id} className="group block cursor-pointer">
              <div className="relative aspect-[4/5] bg-stone-100 overflow-hidden mb-4 shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1 rounded-sm">
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 text-[10px] uppercase tracking-wider z-10">
                  New
                </span>
                <img 
                  src={product.options[0].image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>

              <div className="space-y-1 px-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-base md:text-lg font-serif group-hover:underline decoration-stone-300 underline-offset-4">
                    {product.name}
                  </h3>
                  <span className="text-stone-900 font-medium text-sm md:text-base">
                    ₹{product.basePrice.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex gap-2 pt-2">
                   {product.options.map(opt => (
                      <div key={opt.id} className="w-2.5 h-2.5 rounded-full border border-stone-200" style={{ backgroundColor: opt.hex }} />
                   ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* --- NEWSLETTER --- */}
      <section className="bg-stone-900 text-white py-16 px-6 text-center rounded-t-3xl md:rounded-none mx-2 md:mx-0">
        <h2 className="text-2xl md:text-3xl font-serif mb-4">Join the Inner Circle</h2>
        <p className="text-stone-400 mb-8 max-w-md mx-auto text-sm">Sign up for early access to new drops.</p>
        <div className="flex max-w-md mx-auto border-b border-stone-700 pb-2 mb-12">
          <input type="email" placeholder="ENTER YOUR EMAIL" className="bg-transparent w-full outline-none text-sm placeholder-stone-500 text-white" />
          <button className="uppercase text-xs tracking-widest text-stone-300 hover:text-white">Subscribe</button>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-[10px] md:text-xs uppercase tracking-widest text-stone-500">
          <Link to="/return-refund">Return Policy</Link>
          <Link to="/contact">Contact Us</Link>
          <span>© 2026 Skeye</span>
        </div>
      </section>
    </div>
  );
}