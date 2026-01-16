import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ArrowLeft, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from './CartContext';

export default function Cart() {
  const { cart, removeFromCart, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAF9F6] p-4 text-center">
        <ShoppingBag size={48} className="text-stone-300 mb-4" />
        <h2 className="text-2xl font-serif mb-2">Your Bag is Empty</h2>
        <p className="text-stone-500 mb-8">Looks like you haven't found your perfect match yet.</p>
        <Link to="/" className="bg-black text-white px-8 py-3 uppercase text-xs tracking-widest hover:bg-stone-800 transition">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-slate-900 font-sans selection:bg-stone-200 p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-3xl font-serif">Shopping Bag ({cart.length})</h1>
          <Link to="/" className="text-xs uppercase tracking-widest text-stone-500 hover:text-black flex items-center gap-2">
            <ArrowLeft size={14} /> Continue Shopping
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items List */}
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item) => (
              <div key={item.cartId} className="flex gap-6 bg-white p-4 rounded-sm shadow-sm hover:shadow-md transition-shadow group">
                {/* Image */}
                <div className="w-24 h-32 bg-stone-100 flex-shrink-0 overflow-hidden">
                  <img src={item.selectedVariant.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                
                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="font-serif text-lg">{item.name}</h3>
                      <p className="font-medium">₹{item.finalPrice.toLocaleString('en-IN')}</p>
                    </div>
                    <p className="text-stone-500 text-sm mt-1">{item.category}</p>
                    
                    <div className="flex gap-4 mt-4 text-xs uppercase tracking-wider text-stone-500">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full border border-stone-200" style={{ backgroundColor: item.selectedVariant.hex }} />
                        {item.selectedVariant.name}
                      </div>
                      <div className="border-l border-stone-200 pl-4">
                        Size: {item.selectedSize}
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => removeFromCart(item.cartId)}
                    className="text-stone-400 hover:text-red-500 text-xs uppercase tracking-widest self-start flex items-center gap-2 mt-4 transition-colors"
                  >
                    <Trash2 size={14} /> Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-sm shadow-sm sticky top-10">
              <h2 className="font-serif text-xl mb-6">Order Summary</h2>
              
              <div className="space-y-4 text-sm text-stone-600 mb-8 border-b border-stone-100 pb-8">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{cartTotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxes</span>
                  <span>Calculated at checkout</span>
                </div>
              </div>

              <div className="flex justify-between font-medium text-lg mb-8">
                <span>Total</span>
                <span>₹{cartTotal.toLocaleString('en-IN')}</span>
              </div>

              <button className="w-full bg-black text-white py-4 uppercase tracking-[0.2em] text-xs hover:bg-stone-800 transition-colors flex items-center justify-center gap-2 group">
                Checkout <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <p className="text-xs text-stone-400 text-center mt-4">
                Secure Checkout • Free Returns within 14 days
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}