import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/Header.css';

const Header = () => {
  const { cart } = useCart();

  return (
    <header className="header">
      <Link to="/" className="logo">Tienda de Computadoras</Link>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/catalogo">Catálogo</Link>
        <Link to="/carrito">Carrito ({cart.length})</Link>
      </nav>
    </header>
  );
};

export default Header;
