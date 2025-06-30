import Cart from './../models/Card';

const cart = new Cart();

const savedCart = localStorage.getItem('cart');
if (savedCart) {
  cart.items = JSON.parse(savedCart);
}

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

export const clearCart = () => {
  cart.items = [];
};
