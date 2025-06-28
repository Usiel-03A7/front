import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';
import Catalogo from './views/Catalogo';
import Carrito from './views/Carrito';
import ProductoDetalle from './views/ProductoDetalle';
import { CartProvider } from './context/CartContext';
import './styles/global.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <main style={{ padding: '2rem', marginBottom: '4rem' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/producto/:id" element={<ProductoDetalle />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
