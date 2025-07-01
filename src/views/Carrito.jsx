import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from 'lucide-react';
import '../styles/Carrito.css';

const QuantitySelector = ({ quantity, onIncrease, onDecrease }) => (
  <div className="quantity-selector">
    <button className="quantity-btn" onClick={onDecrease}>
      <Minus size={16} />
    </button>
    <span className="quantity-display">{quantity}</span>
    <button className="quantity-btn" onClick={onIncrease}>
      <Plus size={16} />
    </button>
  </div>
);

const Carrito = () => {
  const { cart, total, addToCart, removeFromCart, clearCart } = useCart();

  return (
    <div className="carrito-container">
      <div className="carrito-header">
        <h1>
          <ShoppingBag className="cart-icon" />
          Tu Carrito
        </h1>
        {cart.length > 0 && (
          <span className="items-count">{cart.length} {cart.length === 1 ? 'artículo' : 'artículos'}</span>
        )}
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <ShoppingBag size={64} className="empty-icon" />
          <h2>Tu carrito está vacío</h2>
          <p>¡Explora nuestros productos y encuentra lo que necesitas!</p>
          <Link to="/catalogo" className="btn btn-primary">
            Ver Catálogo
          </Link>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.product.id} className="cart-item">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="cart-item-image"
                />
                <div className="item-details">
                  <h3>{item.product.name}</h3>
                  <div className="item-price">${item.product.price.toLocaleString()}</div>
                  
                  <div className="item-financiacion">
                    {item.product.selectedMonths ? (
                      <div className="financiacion-selected">
                        <span>Pago a {item.product.selectedMonths} meses</span>
                        <span className="mes-pago">
                          ${(item.product.price / item.product.selectedMonths).toFixed(2)}/mes
                        </span>
                      </div>
                    ) : (
                      <div className="financiacion-none">
                        Pago de contado
                      </div>
                    )}
                  </div>

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
                  <div className="item-subtotal">
                    Subtotal: ${(item.product.price * item.quantity).toLocaleString()}
                  </div>
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="btn-remove"
                  >
                    <Trash2 size={18} /> Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Resumen de compra</h2>
            <div className="summary-details">
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${total.toLocaleString()}</span>
              </div>
              <div className="summary-row">
                <span>Envío</span>
                <span>Gratis</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>${total.toLocaleString()}</span>
              </div>
            </div>
            <Link to="/checkout" className="btn btn-primary">
              Proceder al pago
            </Link>
            <button onClick={clearCart} className="btn btn-secondary">
              Vaciar carrito
            </button>
            <Link to="/catalogo" className="continue-shopping">
              <ArrowLeft size={16} /> Seguir comprando
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrito;
