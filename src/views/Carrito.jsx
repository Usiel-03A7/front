import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react'
import '../styles/Carrito.css'

const QuantitySelector = ({ quantity, onIncrease, onDecrease }) => (
  <div className="quantity-selector">
    <button className="quantity-btn" onClick={onDecrease}>
      <Minus size={14} />
    </button>
    <span className="quantity-display">{quantity}</span>
    <button className="quantity-btn" onClick={onIncrease}>
      <Plus size={14} />
    </button>
  </div>
)

const Carrito = () => {
  const { cart, total, addToCart, removeFromCart } = useCart()

  return (
    <div className="carrito-container">
      <div className="carrito-header">
        <div className="header-content">
          <ShoppingBag className="cart-icon" />
          <h1>Tu Carrito de Compras</h1>
          <span className="items-count">{cart.length} {cart.length === 1 ? 'artículo' : 'artículos'}</span>
        </div>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-cart-content">
            <ShoppingBag className="empty-icon" />
            <h2>Tu carrito está vacío</h2>
            <p>¡Agrega algunos productos para comenzar!</p>
            <Link to="/" className="btn-continuar">
              Continuar Comprando
            </Link>
          </div>
        </div>
      ) : (
        <div className="cart-content">
          <div className="items-container">
            {cart.map((item) => (
              <div key={item.product.id} className="cart-item">
                <div className="item-image-container">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="cart-item-image"
                  />
                </div>

                <div className="item-details">
                  <div className="item-header">
                    <h3 className="item-name">{item.product.name}</h3>
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="btn-eliminar"
                      title="Eliminar producto"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>

                  <div className="item-info">
                    <div className="price-section">
                      <span className="price-label">Precio unitario:</span>
                      <span className="unit-price">${item.product.price.toLocaleString()}</span>
                    </div>

                    <div className="quantity-section">
                      <span className="quantity-label">Cantidad:</span>
                      <QuantitySelector
                        quantity={item.quantity}
                        onIncrease={() => addToCart(item.product, 1)}
                        onDecrease={() => {
                          if (item.quantity > 1) {
                            addToCart(item.product, -1)
                          } else {
                            removeFromCart(item.product.id)
                          }
                        }}
                      />
                    </div>

                    <div className="total-section">
                      <span className="total-label">Subtotal:</span>
                      <span className="item-total">${(item.product.price * item.quantity).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="summary-content">
              <div className="total-breakdown">
                <div className="total-row">
                  <span>Subtotal:</span>
                  <span>${total.toLocaleString()}</span>
                </div>
                <div className="total-row">
                  <span>Envío:</span>
                  <span>Gratis</span>
                </div>
                <div className="total-row final-total">
                  <span>Total:</span>
                  <span>${total.toLocaleString()}</span>
                </div>
              </div>

              <Link to="/checkout" className="btn-checkout">
                Proceder al Pago
              </Link>

              <Link to="/" className="btn-continuar-secondary">
                Continuar Comprando
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Carrito
