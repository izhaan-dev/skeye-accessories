import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react'; // Import icon
import { CartProvider, useCart } from './CartContext'; // Import Context
import Home from './Home';
import ProductPage from './ProductPage';
import ContactUs from './ContactUs';
import ReturnRefund from './ReturnRefund';
import Cart from './Cart';

// Create a separate component for the Floating Button so it can use the Hook
function FloatingCartButton() {
  const { cart } = useCart();
  
  return (
    <Link 
      to="/cart" 
      className="fixed bottom-8 right-8 z-50 bg-black text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group"
    >
      <div className="relative">
        <ShoppingBag size={24} />
        {cart.length > 0 && (
          <span className="absolute -top-3 -right-3 bg-red-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full animate-bounce">
            {cart.length}
          </span>
        )}
      </div>
      {/* Tooltip effect */}
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-black px-3 py-1 text-xs font-bold rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        View Bag
      </span>
    </Link>
  );
}

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/return-refund" element={<ReturnRefund />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        
        {/* The Floating Button lives outside Routes so it's always visible */}
        <FloatingCartButton />
        
      </BrowserRouter>
    </CartProvider>
  );
}