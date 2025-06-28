import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';
import Catalogo from './views/Catalogo';
import './styles/global.css';

function App() {
  return (
    <Router>
      <Header />
      <main style={{ padding: '2rem', marginBottom: '4rem' }}> {/* Ajuste para el footer */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
