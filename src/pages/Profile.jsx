import React from 'react';

const Profile = () => {
  return (
    <div className="container mt-5 mb-5 text-center">
      <div className="card mx-auto shadow-sm p-4" style={{ maxWidth: '500px' }}>
        <h2 className="mb-4">Mi Perfil</h2>
        <div className="mb-4">
          <p className="fs-5"><strong>Email:</strong> usuario@mamma-mia.com</p>
        </div>
        <button className="btn btn-danger px-4">Cerrar Sesión</button>
      </div>
    </div>
  );
};

export default Profile;
