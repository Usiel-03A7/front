import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/Header.css';

const Header = () => {
  const { cart } = useCart();

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
        </nav>
      </div>
    </header>
  );
};

export default Header;
