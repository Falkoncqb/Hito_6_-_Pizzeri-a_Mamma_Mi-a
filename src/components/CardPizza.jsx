import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CardPizza = ({ pizza }) => {
  const { addToCart } = useContext(CartContext);
  const { id, name, price, ingredients, img } = pizza;
  return (
    <div className="card h-100 w-100">
      <img src={img} className="card-img-top" alt={name} style={{height: '250px', objectFit: 'cover'}} />
      <div className="card-body text-center">
        <h4 className="card-title fw-light text-start pb-3 border-bottom">Pizza {name}</h4>
        <p className="card-text text-muted mb-0 mt-3">Ingredientes:</p>
        <ul className="list-unstyled fw-light">
          {ingredients.map((ingredient, index) => (
            <li key={index} className="text-capitalize text-center">
              🍕 {ingredient}
            </li>
          ))}
        </ul>
      </div>
      <ul className="list-group list-group-flush text-center">
        <li className="list-group-item fs-4 fw-bold text-muted border-0">
          Precio: ${price.toLocaleString('es-CL')}
        </li>
      </ul>
      <div className="card-body d-flex justify-content-around">
        <Link to={`/pizza/${id}`} className="btn btn-outline-dark border-1 px-4">Ver Más 👀</Link>
        <button className="btn btn-dark px-4" onClick={() => addToCart(pizza)}>Añadir 🛒</button>
      </div>
    </div>
  );
};

export default CardPizza;