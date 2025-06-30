import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getProducts } from '../controllers/ProductController'
import { useCart } from '../context/CartContext'
import '../styles/Catalogo.css'

const Catalogo = () => {
  const [products, setProducts] = useState([])
  const { addToCart } = useCart()

  useEffect(() => {
    setProducts(getProducts())
  }, [])

  const handleAddToCart = (product) => {
    addToCart(product, 1)
  }

  return (
    <div className="catalogo-container">
      <h1>Catálogo de Computadoras</h1>
      <div className="productos-grid">
        {products.map((product) => (
          <div key={product.id} className="producto-card">
            <Link to={`/producto/${product.id}`} className="producto-link">
              <img
                src={product.image}
                alt={product.name}
                className="producto-imagen"
              />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <ul className="specs-list">
                {Object.entries(product.specs || {}).map(([key, value]) => (
                  <li key={key}><strong>{key}:</strong> {value}</li>
                ))}
              </ul>
              <div className="precio-container">
                <span className="precio">${product.price.toLocaleString()}</span>
                <div className="meses-sin-intereses">
                  {product.monthsWithoutInterest.map((mes) => (
                    <span key={mes}>{mes} meses sin intereses</span>
                  ))}
                </div>
              </div>
            </Link>
            <button
              className="btn-comprar"
              onClick={() => handleAddToCart(product)}
            >
              Añadir al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Catalogo
