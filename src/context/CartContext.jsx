import React, { createContext, useContext, useState } from 'react';
import { addToCart, getCartItems, getCartTotal, removeFromCart } from '../controllers/CartController';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(getCartItems());
  const [total, setTotal] = useState(getCartTotal());

  const updateCart = () => {
    setCart([...getCartItems()]);
    setTotal(getCartTotal());
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        addToCart: (product, quantity) => {
          addToCart(product, quantity);
          updateCart();
        },
        removeFromCart: (productId) => {
          removeFromCart(productId);
          updateCart();
        },
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === null || context === undefined) {
    throw new Error('useCart debe ser usado dentro de un CartProvider');
  }
  return context;
};
