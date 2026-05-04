import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { pizzas } from '../data/pizzas';
import { CartContext } from '../context/CartContext';

const Pizza = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    // Buscar la pizza por ID en los datos locales
    const foundPizza = pizzas.find((p) => p.id === id);
    
    if (foundPizza) {
      setPizza({
        ...foundPizza,
        desc: "La auténtica receta napolitana, con una masa de fermentación lenta, una base delgada con bordes inflados y crujientes. Preparada con ingredientes frescos que resaltan el verdadero sabor de Italia en cada bocado."
      });
    }
  }, [id]);

  if (!pizza) {
    return (
      <div className="container mt-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
        <p className="mt-2">Cargando detalles de la pizza...</p>
      </div>
    );
  }

  return (
    <div className="container mt-5 mb-5">
      <div className="card mx-auto shadow-sm" style={{ maxWidth: '900px' }}>
        <div className="row g-0">
          {/* Imagen de la Pizza */}
          <div className="col-md-5">
            <img 
              src={pizza.img} 
              className="img-fluid rounded-start h-100" 
              alt={pizza.name} 
              style={{ objectFit: 'cover' }}
            />
          </div>
          
          {/* Detalles de la Pizza */}
          <div className="col-md-7">
            <div className="card-body d-flex flex-column h-100 p-4">
              <h2 className="card-title text-capitalize fw-bold mb-3">{pizza.name}</h2>
              <hr />
              
              {/* Descripción */}
              <p className="card-text text-muted mb-4">{pizza.desc}</p>
              
              {/* Ingredientes */}
              <div className="mb-4">
                <h5 className="fw-bold mb-3">Ingredientes:</h5>
                <ul className="list-unstyled">
                  {pizza.ingredients.map((ingredient, index) => (
                    <li key={index} className="text-capitalize mb-2">
                      🍕 {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Precio y Botón */}
              <div className="mt-auto d-flex justify-content-between align-items-center bg-light p-3 rounded">
                <h3 className="mb-0 fw-bold text-success">Precio: ${pizza.price.toLocaleString('es-CL')}</h3>
                <button className="btn btn-dark px-4 py-2 fw-bold" onClick={() => addToCart(pizza)}>
                  Añadir al carrito 🛒
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
