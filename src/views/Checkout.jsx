import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../styles/Checkout.css';

const Checkout = () => {
  const { user } = useAuth();
  const { cart, total, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: user?.name || '',
    email: user?.email || '',
    direccion: '',
    tarjeta: '',
    cvv: '',
    expiracion: '',
    meses: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.nombre) newErrors.nombre = 'Nombre requerido';
    if (!formData.email.includes('@')) newErrors.email = 'Email inválido';
    if (!formData.direccion) newErrors.direccion = 'Dirección requerida';
    if (!/^\d{16}$/.test(formData.tarjeta)) newErrors.tarjeta = 'Tarjeta debe tener 16 dígitos';
    if (!/^\d{3,4}$/.test(formData.cvv)) newErrors.cvv = 'CVV debe tener 3 o 4 dígitos';
    if (!/^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(formData.expiracion)) {
      newErrors.expiracion = 'Formato MM/YY';
    }
    if (!formData.meses) newErrors.meses = 'Selecciona meses';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert(`¡Compra exitosa! Total: $${total.toLocaleString()} a ${formData.meses} meses`);
      clearCart();
      navigate('/');
    }
  };

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
              className={errors.nombre ? 'error-input' : ''}
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
              className={errors.email ? 'error-input' : ''}
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
              className={errors.direccion ? 'error-input' : ''}
            />
            {errors.direccion && <span className="error">{errors.direccion}</span>}
          </div>

          <h2>Método de Pago</h2>

          <div className="form-group">
            <label>Selecciona meses sin intereses</label>
            <div className="meses-options">
              {[3, 6, 12].map(mes => (
                <div
                  key={mes}
                  className={`mes-option ${formData.meses === mes.toString() ? 'selected' : ''}`}
                  onClick={() => setFormData({ ...formData, meses: mes.toString() })}
                >
                  <div className="mes-header">
                    <span>{mes} meses sin intereses</span>
                    <div className="mes-radio">
                      {formData.meses === mes.toString() && <div className="mes-radio-selected"></div>}
                    </div>
                  </div>
                  <div className="mes-detail">
                    ${(total / mes).toFixed(2)}/mes
                  </div>
                </div>
              ))}
            </div>
            {errors.meses && <span className="error">{errors.meses}</span>}
          </div>

          <div className="form-group">
            <label>Número de tarjeta</label>
            <input
              type="text"
              name="tarjeta"
              value={formData.tarjeta}
              onChange={handleChange}
              placeholder="1234 5678 9012 3456"
              maxLength="16"
              className={errors.tarjeta ? 'error-input' : ''}
            />
            {errors.tarjeta && <span className="error">{errors.tarjeta}</span>}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Fecha de expiración (MM/YY)</label>
              <input
                type="text"
                name="expiracion"
                value={formData.expiracion}
                onChange={handleChange}
                placeholder="MM/YY"
                maxLength="5"
                className={errors.expiracion ? 'error-input' : ''}
              />
              {errors.expiracion && <span className="error">{errors.expiracion}</span>}
            </div>

            <div className="form-group">
              <label>CVV</label>
              <input
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                placeholder="123"
                maxLength="4"
                className={errors.cvv ? 'error-input' : ''}
              />
              {errors.cvv && <span className="error">{errors.cvv}</span>}
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Confirmar Pago
          </button>
        </form>

        <div className="resumen-pedido">
          <h2>Resumen del Pedido</h2>
          {cart.map((item) => (
            <div key={item.product.id} className="resumen-item">
              <div>
                <p>{item.product.name} x {item.quantity}</p>
                {item.product.selectedMonths && (
                  <p className="resumen-meses">
                    {item.product.selectedMonths} MSI (${(item.product.price / item.product.selectedMonths).toFixed(2)}/mes)
                  </p>
                )}
              </div>
              <p>${(item.product.price * item.quantity).toLocaleString()}</p>
            </div>
          ))}
          <div className="resumen-total">
            <h3>Total a {formData.meses || '--'} meses:</h3>
            <h3>${total.toLocaleString()}</h3>
          </div>
          {formData.meses && (
            <div className="resumen-mensual">
              <p>Pago mensual:</p>
              <p className="mensual-amount">
                ${(total / parseInt(formData.meses)).toFixed(2)}/mes
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
