import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import '../styles/Header.css';

const Header = () => {
  const { cart } = useCart();
  const { user, logout } = useAuth();

  return (
    <header className="header">
      <div className="container header-content">
        <Link to="/" className="logo">TiendaTech</Link>
        <nav className="nav">
          <Link to="/" className="nav-link">Inicio</Link>
          <Link to="/catalogo" className="nav-link">Catálogo</Link>
          <Link to="/carrito" className="nav-link cart-link">
            Carrito <span className="cart-count">{cart.length}</span>
          </Link>
          {user && (
            <button onClick={logout} className="nav-link logout-btn">
              Cerrar Sesión
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;  
