import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';

const Navbar = () => {
  const { total } = useContext(CartContext);
  const { token, logout } = useContext(UserContext);

  // Función para formatear el número con separador de miles [cite: 66, 67]
  const formatCurrency = (value) => value.toLocaleString('es-CL');

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white px-4">
      <Link className="navbar-brand" to="/">Pizzería Mamma Mia!</Link>
      <div className="navbar-nav me-auto">
        <Link className="btn btn-sm btn-outline-light border-1 mx-1" to="/">🍕 Home</Link>
        {token ? (
          <>
            <Link className="btn btn-sm btn-outline-light border-1 mx-1" to="/profile">🔓 Profile</Link>
            <button className="btn btn-sm btn-outline-light border-1 mx-1" onClick={logout}>🔒 Logout</button>
          </>
        ) : (
          <>
            <Link className="btn btn-sm btn-outline-light border-1 mx-1" to="/register">🔐 Register</Link>
            <Link className="btn btn-sm btn-outline-light border-1 mx-1" to="/login">🔐 Login</Link>
          </>
        )}
      </div>
      <div className="ms-auto">
        <Link className="btn btn-outline-info text-info border-1" to="/cart">
          🛒 Total: ${formatCurrency(total)}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;