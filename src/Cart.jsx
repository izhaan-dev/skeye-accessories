/* src/Cart.jsx */
import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ArrowLeft, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from './CartContext';

export default function Cart() {
  const { cart, removeFromCart, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-[#FAF9F6] p-4 text-center">
        <ShoppingBag size={48} className="text-stone-300 mb-4" />
        <h2 className="text-2xl font-serif mb-2">Your Bag is Empty</h2>
        <Link to="/" className="mt-4 bg-black text-white px-8 py-3 uppercase text-xs tracking-widest hover:bg-stone-800 transition rounded-sm">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-slate-900 font-sans selection:bg-stone-200 pb-32 md:pb-12">
      <div className="max-w-6xl mx-auto p-4 md:p-12">
        <h1 className="text-2xl md:text-3xl font-serif mb-6 md:mb-12">Shopping Bag ({cart.length})</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Items List */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div key={item.cartId} className="flex gap-4 md:gap-6 bg-white p-3 md:p-4 rounded-sm shadow-sm">
                <div className="w-20 h-24 md:w-24 md:h-32 bg-stone-100 flex-shrink-0 overflow-hidden rounded-sm">
                  <img src={item.selectedVariant.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="font-serif text-base md:text-lg line-clamp-1">{item.name}</h3>
                      <p className="font-medium text-sm md:text-base">₹{item.finalPrice.toLocaleString('en-IN')}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 md:gap-4 mt-2 text-[10px] md:text-xs uppercase tracking-wider text-stone-500">
                      <span className="bg-stone-100 px-2 py-1 rounded">Size: {item.selectedSize}</span>
                      <span className="bg-stone-100 px-2 py-1 rounded flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.selectedVariant.hex }} />
                        {item.selectedVariant.name}
                      </span>
                    </div>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.cartId)}
                    className="text-red-400 self-start flex items-center gap-1 mt-2 text-[10px] uppercase tracking-widest p-2 -ml-2 active:bg-red-50 rounded"
                  >
                    <Trash2 size={12} /> Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Summary (Hidden on Mobile) */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="bg-white p-8 rounded-sm shadow-sm sticky top-24">
              <h2 className="font-serif text-xl mb-6">Order Summary</h2>
              <div className="flex justify-between font-medium text-lg mb-8">
                <span>Total</span>
                <span>₹{cartTotal.toLocaleString('en-IN')}</span>
              </div>
              <button className="w-full bg-black text-white py-4 uppercase tracking-[0.2em] text-xs hover:bg-stone-800 transition-colors">
                Checkout Now
              </button>
              <p className="text-xs text-stone-400 text-center mt-4">Free Shipping & Returns</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- MOBILE STICKY CHECKOUT BAR --- */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-stone-200 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] lg:hidden z-40">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs uppercase tracking-widest text-stone-500">Total</span>
          <span className="text-lg font-serif font-bold">₹{cartTotal.toLocaleString('en-IN')}</span>
        </div>
        <button className="w-full bg-black text-white py-3.5 uppercase tracking-[0.2em] text-xs font-bold active:scale-[0.98] transition-transform rounded-sm flex items-center justify-center gap-2">
          Checkout <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}