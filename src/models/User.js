// models/User.js
class User {
  constructor(email, password, name) {
    this.email = email;
    this.password = password; // En producción usaríamos bcrypt
    this.name = name;
    this.orders = []; // Array de IDs de pedidos
  }
}

export default User;
