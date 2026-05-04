import React, { useState, useContext } from 'react';
import './Login.css';
import { UserContext } from '../context/UserContext';

const Login = () => {
  const { login } = useContext(UserContext);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Limpiar errores cuando el usuario comienza a escribir
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  // Validar formulario
  const validateForm = () => {
    const newErrors = {};

    // Validar email no vacío
    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Por favor ingresa un email válido';
    }

    // Validar contraseña no vacía
    if (!formData.password) {
      newErrors.password = 'La contraseña es obligatoria';
    } else if (formData.password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    }

    return newErrors;
  };

  // Validar formato de email simple
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage('');
    setShowSuccess(false);

    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      // Si no hay errores, mostrar mensaje de éxito
      setSuccessMessage(`¡Bienvenido ${formData.email}! Sesión iniciada correctamente.`);
      setShowSuccess(true);
      login();

      // Limpiar formulario
      setFormData({
        email: '',
        password: ''
      });

      // Ocultar mensaje de éxito después de 5 segundos
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } else {
      // Si hay errores, mostrarlos
      setErrors(newErrors);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="mb-4">Iniciar Sesión</h2>

        {/* Mensaje de éxito */}
        {showSuccess && (
          <div className="alert alert-success alert-dismissible fade show" role="alert">
            <strong>✓ Éxito:</strong> {successMessage}
          </div>
        )}

        {/* Formulario de login */}
        <form onSubmit={handleSubmit}>
          {/* Campo Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="ejemplo@correo.com"
            />
            {errors.email && (
              <div className="invalid-feedback d-block">
                {errors.email}
              </div>
            )}
          </div>

          {/* Campo Contraseña */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input
              type="password"
              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Ingresa tu contraseña"
            />
            {errors.password && (
              <div className="invalid-feedback d-block">
                {errors.password}
              </div>
            )}
          </div>

          {/* Botón de envío */}
          <button 
            type="submit" 
            className="btn btn-primary w-100 btn-lg mt-3"
          >
            Inicia Sesión
          </button>
        </form>

        {/* Texto adicional */}
        <p className="text-center mt-3 text-muted">
          ¿No tienes cuenta? <a href="#register" className="text-primary">Regístrate aquí</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
