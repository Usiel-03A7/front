import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero">
        <div className="hero-content">
          <h1>Las mejores computadoras al mejor precio</h1>
          <p>Encuentra el equipo perfecto para trabajo, gaming o desarrollo</p>
          <div className="hero-buttons">
            <Link to="/catalogo" className="btn btn-primary">
              Ver catálogo
            </Link>
            <Link to="/carrito" className="btn btn-secondary">
              Ver carrito
            </Link>
          </div>
        </div>
      </div>
      
      <div className="features">
        <div className="feature">
          <div className="feature-icon">🚀</div>
          <h3>Alto rendimiento</h3>
          <p>Equipos con los últimos procesadores y tarjetas gráficas</p>
        </div>
        <div className="feature">
          <div className="feature-icon">💳</div>
          <h3>Financiación flexible</h3>
          <p>Hasta 12 meses sin intereses con todas las tarjetas</p>
        </div>
        <div className="feature">
          <div className="feature-icon">🚚</div>
          <h3>Envío rápido</h3>
          <p>Recibe tu pedido en 24-48 horas</p>
        </div>
      </div>
      
      <div className="cta">
        <h2>¿Listo para encontrar tu computadora ideal?</h2>
        <Link to="/catalogo" className="btn btn-primary">
          Explorar productos
        </Link>
      </div>
    </div>
  );
};

export default Home;
