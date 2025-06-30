import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import '../styles/UserPanel.css';

const UserPanel = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:3001/orders?userEmail=${user.email}`)
        .then(res => res.json())
        .then(data => setOrders(data));
    }
  }, [user]);

  return (
    <div className="user-panel">
      <h1>Bienvenido, {user?.name}</h1>
      <h2>Tus Pedidos:</h2>
      {orders.length === 0 ? (
        <p>No hay pedidos registrados</p>
      ) : (
        <div className="orders-grid">
          {orders.map(order => (
            <div key={order.id} className="order-card">
              <p><strong>Fecha:</strong> {new Date(order.date).toLocaleDateString()}</p>
              <p><strong>Total:</strong> ${order.total.toLocaleString()}</p>
              <h4>Productos:</h4>
              <ul>
                {order.items.map(item => (
                  <li key={item.product.id}>
                    {item.product.name} x {item.quantity}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserPanel;
