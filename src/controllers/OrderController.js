// controllers/OrderController.js
import Order from '../models/Order';

let orders = [];

export const createOrder = (userEmail, cartItems, total) => {
  const newOrder = new Order(userEmail, cartItems, total);
  orders.push(newOrder);
  return newOrder;
};

export const getOrdersByUser = (userEmail) => {
  return orders.filter(order => order.userEmail === userEmail);
};
