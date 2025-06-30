import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Estilos en línea
  const styles = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px'
    },
    card: {
      background: 'white',
      borderRadius: '16px',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
      padding: '40px',
      width: '100%',
      maxWidth: '500px'
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px'
    },
    title: {
      fontSize: '2rem',
      fontWeight: '700',
      color: '#2d3748',
      margin: '0 0 8px 0'
    },
    subtitle: {
      color: '#718096',
      fontSize: '1rem',
      margin: '0'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    },
    formRow: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '15px'
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    },
    label: {
      fontWeight: '600',
      color: '#2d3748',
      fontSize: '0.9rem'
    },
    inputContainer: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    },
    input: {
      width: '100%',
      padding: '12px 12px 12px 45px',
      border: '2px solid #e2e8f0',
      borderRadius: '8px',
      fontSize: '1rem',
      background: '#f7fafc',
      boxSizing: 'border-box'
    },
    inputError: {
      borderColor: '#e53e3e',
      background: '#fef5f5'
    },
    inputIcon: {
      position: 'absolute',
      left: '12px',
      fontSize: '1.1rem',
      zIndex: 1
    },
    togglePassword: {
      position: 'absolute',
      right: '12px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: '1.1rem',
      padding: '4px',
      borderRadius: '4px'
    },
    errorMessage: {
      color: '#e53e3e',
      fontSize: '0.8rem',
      marginTop: '4px'
    },
    submitButton: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      border: 'none',
      padding: '15px',
      borderRadius: '8px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      marginTop: '10px'
    },
    loadingContent: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px'
    },
    footer: {
      marginTop: '30px',
      textAlign: 'center'
    },
    footerText: {
      color: '#718096',
      margin: '0'
    },
    loginLink: {
      background: 'none',
      border: 'none',
      color: '#667eea',
      cursor: 'pointer',
      fontWeight: '600',
      textDecoration: 'underline',
      fontSize: 'inherit'
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'El nombre es requerido';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'El apellido es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.password) {
      newErrors.password = 'La contraseña es requerida';
    } else if (formData.password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirma tu contraseña';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Datos de registro:', formData);
      alert('¡Registro exitoso!');

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });

    } catch (error) {
      console.error('Error en registro:', error);
      alert('Error al registrar usuario');
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = (field) => {
    if (field === 'password') {
      setShowPassword(!showPassword);
    } else {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h2 style={styles.title}>Crear Cuenta</h2>
          <p style={styles.subtitle}>Únete a nuestra comunidad</p>
        </div>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formRow}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Nombre</label>
              <div style={styles.inputContainer}>
                <span style={styles.inputIcon}>👤</span>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  style={{
                    ...styles.input,
                    ...(errors.firstName ? styles.inputError : {})
                  }}
                  placeholder="Tu nombre"
                />
              </div>
              {errors.firstName && (
                <span style={styles.errorMessage}>{errors.firstName}</span>
              )}
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Apellido</label>
              <div style={styles.inputContainer}>
                <span style={styles.inputIcon}>👤</span>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  style={{
                    ...styles.input,
                    ...(errors.lastName ? styles.inputError : {})
                  }}
                  placeholder="Tu apellido"
                />
              </div>
              {errors.lastName && (
                <span style={styles.errorMessage}>{errors.lastName}</span>
              )}
            </div>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Email</label>
            <div style={styles.inputContainer}>
              <span style={styles.inputIcon}>📧</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={{
                  ...styles.input,
                  ...(errors.email ? styles.inputError : {})
                }}
                placeholder="tu@email.com"
              />
            </div>
            {errors.email && (
              <span style={styles.errorMessage}>{errors.email}</span>
            )}
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Contraseña</label>
            <div style={styles.inputContainer}>
              <span style={styles.inputIcon}>🔒</span>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                style={{
                  ...styles.input,
                  ...(errors.password ? styles.inputError : {})
                }}
                placeholder="Mínimo 6 caracteres"
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility('password')}
                style={styles.togglePassword}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
            {errors.password && (
              <span style={styles.errorMessage}>{errors.password}</span>
            )}
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Confirmar Contraseña</label>
            <div style={styles.inputContainer}>
              <span style={styles.inputIcon}>🔒</span>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                style={{
                  ...styles.input,
                  ...(errors.confirmPassword ? styles.inputError : {})
                }}
                placeholder="Repite tu contraseña"
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility('confirm')}
                style={styles.togglePassword}
              >
                {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
            {errors.confirmPassword && (
              <span style={styles.errorMessage}>{errors.confirmPassword}</span>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            style={{
              ...styles.submitButton,
              opacity: isLoading ? 0.7 : 1,
              cursor: isLoading ? 'not-allowed' : 'pointer'
            }}
          >
            {isLoading ? (
              <div style={styles.loadingContent}>
                <div>⏳</div>
                Registrando...
              </div>
            ) : (
              'Crear Cuenta'
            )}
          </button>
        </form>

        <div style={styles.footer}>
          <p style={styles.footerText}>
            ¿Ya tienes una cuenta?{' '}
            <button style={styles.loginLink}>
              Iniciar Sesión
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
