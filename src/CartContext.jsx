import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  // Load cart from local storage so data persists on refresh
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('skeye_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save to local storage whenever cart changes
  useEffect(() => {
    localStorage.setItem('skeye_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, variant, size) => {
    const newItem = {
      cartId: Date.now(), // Unique ID for this specific addition
      ...product,
      selectedVariant: variant,
      selectedSize: size,
      finalPrice: product.basePrice + variant.priceModifier
    };
    setCart([...cart, newItem]);
  };

  const removeFromCart = (cartId) => {
    setCart(cart.filter(item => item.cartId !== cartId));
  };

  const cartTotal = cart.reduce((total, item) => total + item.finalPrice, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}