import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';
import Catalogo from './views/Catalogo';
import Carrito from './views/Carrito';
import Checkout from './views/Checkout';
import ProductoDetalle from './views/ProductoDetalle';
import Login from './views/auth/Login';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { useAuth } from './context/AuthContext';
import './styles/global.css';

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace />;
};

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={
              <PrivateRoute>
                <>
                  <Header />
                  <main>
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/catalogo" element={<Catalogo />} />
                      <Route path="/carrito" element={<Carrito />} />
                      <Route path="/producto/:id" element={<ProductoDetalle />} />
                      <Route path="/checkout" element={<Checkout />} />
                    </Routes>
                  </main>
                  <Footer />
                </>
              </PrivateRoute>
            } />
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
