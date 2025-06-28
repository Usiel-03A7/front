import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">Tienda de Computadoras</Link>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/catalogo">Catálogo</Link>
        <Link to="/carrito">Carrito (0)</Link> {/* Dinámico luego */}
      </nav>
    </header>
  );
};

export default Header;
