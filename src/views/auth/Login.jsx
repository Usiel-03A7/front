import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import '../../styles/Auth.css';

const Login = () => {
  const [email, setEmail] = useState('admin@tiendatech.com');
  const [password, setPassword] = useState('Admin123');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { signIn, error } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await signIn(email, password);
      navigate('/');
    } catch (err) {
      console.error("Error de autenticación:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>Acceso Administrativo</h1>
          <p>Ingresa tus credenciales para continuar</p>
        </div>

        {error && (
          <div className="error-message">
            {error.includes("wrong-password")
              ? "Contraseña incorrecta"
              : error.includes("user-not-found")
                ? "Usuario no registrado"
                : "Error al iniciar sesión"}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Correo electrónico</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@tiendatech.com"
              required
              className="input-field"
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <div className="password-input-container">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="input-field"
              />
              <button
                type="button"
                className="password-toggle"
                onClick={togglePasswordVisibility}
                aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="submit-button"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin" size={18} />
                <span>Procesando...</span>
              </>
            ) : (
              "Ingresar"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
