import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center flex-grow-1 my-5 text-center">
      <div className="mb-4" style={{ fontSize: '6rem' }}>
        🍕👀
      </div>
      <h1 className="display-1 fw-bold text-danger mb-3">404</h1>
      <h2 className="mb-4 fw-bold">¡Mama Mía! Nos quedamos sin masa</h2>
      <p className="fs-5 text-muted mb-5" style={{ maxWidth: '600px' }}>
        Parece que la página que estás buscando se quemó en el horno o alguien se la comió antes de que llegaras. La ruta no existe en nuestra pizzería.
      </p>
      <Link to="/" className="btn btn-danger btn-lg px-5 py-3 fw-bold rounded-pill shadow">
        🏠 Volver al menú principal
      </Link>
    </div>
  );
};

export default NotFound;
