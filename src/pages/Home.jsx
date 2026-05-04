import React from 'react';
import Header from '../components/Header';
import CardPizza from '../components/CardPizza';
import { pizzas } from '../data/pizzas';

const Home = () => {
  return (
    <div>
      <Header />
      <div className="container my-5">
        <div className="row">
          {pizzas.map((pizza) => (
            <div key={pizza.id} className="col-md-4 mb-4">
              <CardPizza
                pizza={pizza}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;