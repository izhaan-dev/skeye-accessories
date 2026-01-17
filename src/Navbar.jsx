import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, X, Phone, RefreshCcw } from 'lucide-react';
import { useCart } from './CartContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();

  return (
    <>
      {/* --- STICKY TOP BAR --- */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-100 h-16 px-6 flex items-center justify-between transition-all">
        
        {/* Left: Mobile Menu Button */}
        <button onClick={() => setIsOpen(true)} className="md:hidden p-1 text-stone-600">
          <Menu size={24} />
        </button>

        {/* Center: Logo */}
        <Link to="/" className="text-xl font-bold tracking-[0.2em] font-serif uppercase">
          Skeye
        </Link>

        {/* Right: Cart Icon */}
        <Link to="/cart" className="relative p-1 text-stone-800">
          <ShoppingBag size={24} />
          {cart.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full animate-bounce">
              {cart.length}
            </span>
          )}
        </Link>

        {/* Desktop Links (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest text-stone-500">
          <Link to="/" className="hover:text-black transition">Home</Link>
          <Link to="/contact" className="hover:text-black transition">Contact</Link>
          <Link to="/return-refund" className="hover:text-black transition">Returns</Link>
        </div>
      </nav>

      {/* --- MOBILE SLIDE-OUT MENU --- */}
      {/* Background Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />
      
      {/* Menu Drawer */}
      <div className={`fixed top-0 left-0 h-full w-[80%] max-w-sm bg-[#FAF9F6] z-[70] shadow-2xl transform transition-transform duration-300 ease-out md:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-10">
            <span className="text-lg font-bold tracking-widest font-serif">MENU</span>
            <button onClick={() => setIsOpen(false)}><X size={24} /></button>
          </div>

          <div className="flex flex-col gap-6 text-sm uppercase tracking-widest font-medium">
            <Link to="/" onClick={() => setIsOpen(false)} className="border-b border-stone-200 pb-4">Home</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="flex items-center gap-3 border-b border-stone-200 pb-4">
              <Phone size={16} /> Contact Us
            </Link>
            <Link to="/return-refund" onClick={() => setIsOpen(false)} className="flex items-center gap-3 border-b border-stone-200 pb-4">
              <RefreshCcw size={16} /> Returns Policy
            </Link>
          </div>

          <div className="mt-auto text-stone-400 text-xs text-center">
            © 2026 Skeye Accessories
          </div>
        </div>
      </div>
    </>
  );
}
