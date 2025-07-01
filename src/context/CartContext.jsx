import { createContext, useContext, useState, useEffect } from 'react';
import { addToCart, getCartItems, getCartTotal, removeFromCart, clearCart as clearCartController } from '../controllers/CartController';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    setTotal(getCartTotal());
  }, [cart]);

  const updateCart = () => {
    setCart([...getCartItems()]);
  };

  const clearCart = () => {
    clearCartController();
    setCart([]);
    localStorage.removeItem('cart');
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        addToCart: (product, quantity) => {
          const productToAdd = {
            ...product,
            selectedMonths: product.selectedMonths || null
          };
          addToCart(productToAdd, quantity);
          updateCart();
        },
        removeFromCart: (productId) => {
          removeFromCart(productId);
          updateCart();
        },
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
