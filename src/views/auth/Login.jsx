import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../../styles/Auth.css';

const Login = () => {
  const [email, setEmail] = useState('admin@tiendatech.com');
  const [password, setPassword] = useState('Admin123');
  const { signIn, error } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      navigate('/');
    } catch (err) {
      console.error("Error de autenticación:", err);
    }
  };

  return (
    <div className="auth-container">
      <h1>Acceso Administrativo</h1>
      {error && <div className="error-message">
        Error: {error.includes("wrong-password")
          ? "Contraseña incorrecta"
          : error.includes("user-not-found")
            ? "Usuario no registrado"
            : error}
      </div>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default Login;
