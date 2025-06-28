import { useCart } from '../context/CartContext';
import '../styles/Carrito.css';

const QuantitySelector = ({ quantity, onIncrease, onDecrease }) => (
  <div className="quantity-selector">
    <button onClick={onDecrease}>-</button>
    <span>{quantity}</span>
    <button onClick={onIncrease}>+</button>
  </div>
);

const Carrito = () => {
  const { cart, total, addToCart, removeFromCart } = useCart();

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
                className="cart-item-image"
              />
              <div className="item-details">
                <h3>{item.product.name}</h3>
                <p>Precio unitario: ${item.product.price.toLocaleString()}</p>
                <div className="quantity-control">
                  <QuantitySelector
                    quantity={item.quantity}
                    onIncrease={() => addToCart(item.product, 1)}
                    onDecrease={() => {
                      if (item.quantity > 1) {
                        addToCart(item.product, -1);
                      } else {
                        removeFromCart(item.product.id);
                      }
                    }}
                  />
                </div>
                <p>Total: ${(item.product.price * item.quantity).toLocaleString()}</p>
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
            <h2>Total: ${total.toLocaleString()}</h2>
            <button className="btn-pagar">Pagar ahora</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrito;
