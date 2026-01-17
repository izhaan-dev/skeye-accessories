import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './CartContext';
import Navbar from './Navbar'; // <--- Import New Navbar
import Home from './Home';
import ProductPage from './ProductPage';
import ContactUs from './ContactUs';
import ReturnRefund from './ReturnRefund';
import Cart from './Cart';

// Scroll to top helper
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col"> {/* Wrapper to push footer down */}
          
          <Navbar /> {/* <--- Sticky Navbar on every page */}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/return-refund" element={<ReturnRefund />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}