import { Link } from 'react-router-dom'
import '../styles/Home.css'

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Bienvenido a la tienda de computadoras</h1>
      <div className="home-buttons">
        <Link to="/catalogo" className="home-button">Ver Catálogo</Link>
        <Link to="/carrito" className="home-button">Ver Carrito</Link>
      </div>
      <div className="home-features">
        <div className="feature-card">
          <h3>Encuentra las mejores computadoras</h3>
          <p>Calidad y rendimiento al mejor precio</p>
        </div>
        <div className="feature-card">
          <h3>Pagos a plazos</h3>
          <p>Hasta 12 meses sin intereses</p>
        </div>
      </div>
    </div>
  )
}

export default Home
