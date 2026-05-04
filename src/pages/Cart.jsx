import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, increaseCount, decreaseCount, total } = useContext(CartContext);

  return (
    <div className="container mt-5 mb-5 p-4 border rounded">
      <h2>Detalles del pedido:</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="d-flex justify-content-between align-items-center mb-3">
            <div className="d-flex align-items-center">
              <img src={item.img} alt={item.name} style={{ width: '50px', borderRadius: '5px', objectFit: 'cover', marginRight: '15px' }} />
              <span className="text-capitalize fs-5">Pizza {item.name}</span>
            </div>
            <div className="d-flex align-items-center">
              <span className="me-3 text-success fw-bold fs-5">${(item.price * item.count).toLocaleString('es-CL')}</span>
              <button className="btn btn-outline-danger btn-sm px-3 fw-bold" onClick={() => decreaseCount(item.id)}>-</button>
              <span className="mx-3 fw-bold">{item.count}</span>
              <button className="btn btn-outline-primary btn-sm px-3 fw-bold" onClick={() => increaseCount(item.id)}>+</button>
            </div>
          </div>
        ))
      )}
      <h3 className="mt-4">Total: ${total.toLocaleString('es-CL')}</h3>
      <button className="btn btn-dark mt-2">Pagar</button>
    </div>
  );
};

export default Cart;
