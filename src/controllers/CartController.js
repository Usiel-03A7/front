import Cart from './../models/Card';

const cart = new Cart();

export const addToCart = (product, quantity) => {
  cart.addItem(product, quantity);
};

export const getCartItems = () => {
  return cart.items;
};

export const getCartTotal = () => {
  return cart.getTotal();
};

export const removeFromCart = (productId) => {
  cart.removeItem(productId);
};
