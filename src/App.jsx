import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './views/Home'
import Catalogo from './views/Catalogo'
import Carrito from './views/Carrito'
import Checkout from './views/Checkout'
import ProductoDetalle from './views/ProductoDetalle'
import Login from './views/auth/Login'
import Register from './views/auth/Registrer.jsx'
import UserPanel from './views/UserPanel'
import { CartProvider } from './context/CartContext'
import { AuthProvider } from './context/AuthContext'
import PrivateRoute from './components/PrivateRoute'
import './styles/global.css'

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Header />
          <main style={{ padding: '2rem', marginBottom: '4rem' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalogo" element={<Catalogo />} />
              <Route path="/carrito" element={<Carrito />} />
              <Route path="/producto/:id" element={<ProductoDetalle />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/login" element={<Login />} />
              <Route path="/registro" element={<Register />} />
              <Route
                path="/mi-cuenta"
                element={
                  <PrivateRoute>
                    <UserPanel />
                  </PrivateRoute>
                }
              />
            </Routes>
          </main>
          <Footer />
        </Router>
      </CartProvider>
    </AuthProvider>
  )
}

export default App
