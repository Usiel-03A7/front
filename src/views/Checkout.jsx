import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import '../styles/Checkout.css'

const Checkout = () => {
  const { user } = useAuth()
  const { cart, total, clearCart } = useCart()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    direccion: '',
    tarjeta: '',
    cvv: ''
  })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.nombre) newErrors.nombre = 'Nombre requerido'
    if (!formData.email.includes('@')) newErrors.email = 'Email inválido'
    if (!formData.direccion) newErrors.direccion = 'Dirección requerida'
    if (formData.tarjeta.length !== 16) newErrors.tarjeta = 'Tarjeta debe tener 16 dígitos'
    if (formData.cvv.length !== 3) newErrors.cvv = 'CVV debe tener 3 dígitos'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      if (user) {
        // Aquí iría la llamada para guardar el pedido
      }
      alert('¡Compra exitosa! Gracias por tu pedido.')
      clearCart()
      navigate('/')
    }
  }

  return (
    <div className="checkout-container">
      <h1>Finalizar Compra</h1>
      <div className="checkout-grid">
        <form onSubmit={handleSubmit} className="checkout-form">
          <h2>Datos de Envío</h2>
          <div className="form-group">
            <label>Nombre completo</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
            />
            {errors.nombre && <span className="error">{errors.nombre}</span>}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label>Dirección</label>
            <input
              type="text"
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
            />
            {errors.direccion && <span className="error">{errors.direccion}</span>}
          </div>

          <h2>Datos de Pago</h2>
          <div className="form-group">
            <label>Número de tarjeta</label>
            <input
              type="number"
              name="tarjeta"
              value={formData.tarjeta}
              onChange={handleChange}
              placeholder="1234 5678 9012 3456"
            />
            {errors.tarjeta && <span className="error">{errors.tarjeta}</span>}
          </div>

          <div className="form-group">
            <label>CVV</label>
            <input
              type="number"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              placeholder="123"
            />
            {errors.cvv && <span className="error">{errors.cvv}</span>}
          </div>

          <button type="submit" className="btn-pagar">
            Confirmar Pago (${total.toLocaleString()})
          </button>
        </form>

        <div className="resumen-pedido">
          <h2>Resumen del Pedido</h2>
          {cart.map((item) => (
            <div key={item.product.id} className="resumen-item">
              <p>{item.product.name} x {item.quantity}</p>
              <p>${(item.product.price * item.quantity).toLocaleString()}</p>
            </div>
          ))}
          <div className="resumen-total">
            <h3>Total:</h3>
            <h3>${total.toLocaleString()}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
