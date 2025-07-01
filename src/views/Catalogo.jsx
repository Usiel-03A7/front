import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../controllers/ProductController';
import { useCart } from '../context/CartContext';
import '../styles/Catalogo.css';

const Catalogo = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  return (
    <div className="catalogo-container">
      <div className="catalogo-header">
        <h1>Nuestro Catálogo</h1>
        <p>Encuentra la computadora perfecta para tus necesidades</p>
      </div>

      <div className="productos-grid">
        {products.map((product) => (
          <div key={product.id} className="producto-card">
            <Link to={`/producto/${product.id}`} className="producto-link">
              <div className="producto-imagen-container">
                <img
                  src={product.image}
                  alt={product.name}
                  className="producto-imagen"
                />
              </div>
              <div className="producto-info">
                <h3>{product.name}</h3>
                <p className="producto-descripcion">{product.description}</p>
                <div className="producto-especificaciones">
                  {Object.entries(product.specs).slice(0, 2).map(([key, value]) => (
                    <div key={key} className="especificacion">
                      <span className="especificacion-key">{key}:</span>
                      <span className="especificacion-value">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
            <div className="producto-precio-container">
              <div className="precio">${product.price.toLocaleString()}</div>
              <div className="meses-sin-intereses">
                {product.monthsWithoutInterest.map(mes => (
                  <span key={mes}>{mes} MSI</span>
                ))}
              </div>
            </div>
            <button
              onClick={() => addToCart(product, 1)}
              className="btn btn-primary agregar-carrito"
            >
              Añadir al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogo;
