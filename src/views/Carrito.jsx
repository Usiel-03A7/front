import { useCart } from '../context/CartContext';
import '../styles/Carrito.css';

const Carrito = () => {
  const { cart, total, removeFromCart } = useCart();

  return (
    <div className="carrito-container">
      <h1>Tu Carrito</h1>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <div className="items-container">
          {cart.map((item) => (
            <div key={item.product.id} className="cart-item">
              <img
                src={item.product.image}
                alt={item.product.name}
              />
              <div className="item-details">
                <h3>{item.product.name}</h3>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio unitario: ${item.product.price}</p>
                <button
                  onClick={() => removeFromCart(item.product.id)}
                  className="btn-eliminar"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h2>Total: ${total}</h2>
            <button className="btn-pagar">Pagar ahora</button>
          </div>
        </div>
      )}
    </div>
  );
};
