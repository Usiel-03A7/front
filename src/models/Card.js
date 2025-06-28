class Cart {
  constructor() {
    this.items = [];
  }

  addItem(product, quantity = 1) {
    const existingItem = this.items.find(item => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({ product, quantity });
    }
  }

  removeItem(productId) {
    this.items = this.items.filter(item => item.product.id !== productId);
  }

  getTotal() {
    return this.items.reduce(
      (total, item) => total + (item.product.price * item.quantity),
      0
    );
  }
}

export default Cart;
