import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../controllers/ProductController';
import { useCart } from '../context/CartContext';
import '../styles/ProductoDetalle.css';

const ProductoDetalle = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [selectedMonths, setSelectedMonths] = useState(null);
  const product = getProducts().find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Producto no encontrado</h2>
        <p>Lo sentimos, el producto que buscas no está disponible.</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      ...product,
      selectedMonths
    }, 1);
  };

  return (
    <div className="producto-detalle-container">
      <div className="producto-imagen-container">
        <img src={product.image} alt={product.name} className="producto-imagen" />
      </div>
      <div className="producto-info">
        <h1>{product.name}</h1>
        <p className="producto-precio">${product.price.toLocaleString()}</p>
        <p className="producto-descripcion">{product.description}</p>
        
        <div className="producto-especificaciones">
          <h3>Especificaciones técnicas</h3>
          <ul className="specs-list">
            {Object.entries(product.specs).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="producto-financiacion">
          <h3>Opciones de financiación</h3>
          <div className="meses-options">
            {product.monthsWithoutInterest.map(mes => (
              <div 
                key={mes}
                className={`mes-option ${selectedMonths === mes ? 'selected' : ''}`}
                onClick={() => setSelectedMonths(mes)}
              >
                <div className="mes-header">
                  <span>{mes} meses sin intereses</span>
                  <div className="mes-radio">
                    {selectedMonths === mes && <div className="mes-radio-selected"></div>}
                  </div>
                </div>
                <div className="mes-detail">
                  ${(product.price / mes).toFixed(2)}/mes
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button 
          onClick={handleAddToCart}
          className="btn btn-primary agregar-carrito"
          disabled={!selectedMonths}
        >
          {selectedMonths 
            ? `Añadir al carrito (${selectedMonths} MSI)` 
            : 'Selecciona meses'}
        </button>
      </div>
    </div>
  );
};

export default ProductoDetalle;
