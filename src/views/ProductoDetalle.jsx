import { useParams } from 'react-router-dom'
import { getProducts } from '../controllers/ProductController'
import { useCart } from '../context/CartContext'
import '../styles/ProductoDetalle.css'

const ProductoDetalle = () => {
  const { id } = useParams()
  const { addToCart } = useCart()
  const product = getProducts().find(p => p.id === parseInt(id))

  if (!product) return <div>Producto no encontrado</div>

  return (
    <div className="detalle-container">
      <div className="detalle-imagen">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="detalle-info">
        <h1>{product.name}</h1>
        <p className="precio">${product.price.toLocaleString()}</p>
        <p>{product.description}</p>

        <h3>Especificaciones:</h3>
        <ul className="specs-list">
          {Object.entries(product.specs).map(([key, value]) => (
            <li key={key}><strong>{key}:</strong> {value}</li>
          ))}
        </ul>

        <div className="pago-meses">
          <h3>Opciones de pago:</h3>
          {product.monthsWithoutInterest.map((mes) => (
            <p key={mes}>
              {mes} meses sin intereses: <strong>${(product.price / mes).toFixed(2)}/mes</strong>
            </p>
          ))}
        </div>

        <button
          onClick={() => addToCart(product, 1)}
          className="btn-comprar"
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  )
}

export default ProductoDetalle
