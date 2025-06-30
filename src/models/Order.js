// models/Order.js
class Order {
  constructor(userEmail, items, total, date = new Date()) {
    this.userEmail = userEmail;
    this.items = items; // [{ product, quantity }]
    this.total = total;
    this.date = date;
    this.id = Date.now().toString(); // ID único
  }
}

export default Order;
