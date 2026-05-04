import pizzaNapolitana from '../assets/pizza-napolitana.jpeg';
import pizzaEspañola from '../assets/pizza-española.jpeg';
import pizzaPepperoni from '../assets/pizza-pepperoni.jpg';

export const pizzas = [
  {
    id: 1,
    name: 'Napolitana',
    price: 5950,
    ingredients: ['mozzarella', 'tomates', 'jamón', 'orégano'],
    img: pizzaNapolitana,
  },
  {
    id: 2,
    name: 'Española',
    price: 6950,
    ingredients: ['mozzarella', 'gorgonzola', 'parmesano', 'provolone'],
    img: pizzaEspañola,
  },
  {
    id: 3,
    name: 'Pepperoni',
    price: 6950,
    ingredients: ['mozzarella', 'pepperoni', 'orégano'],
    img: pizzaPepperoni,
  },
  {
    id: 4,
    name: 'Margherita',
    price: 5950,
    ingredients: ['mozzarella', 'tomates', 'albahaca', 'aceite de oliva'],
    img: pizzaNapolitana,
  },
  {
    id: 5,
    name: 'Cuatro Quesos',
    price: 7950,
    ingredients: ['mozzarella', 'gorgonzola', 'parmesano', 'ricotta'],
    img: pizzaEspañola,
  },
  {
    id: 6,
    name: 'Carnes',
    price: 7950,
    ingredients: ['mozzarella', 'pepperoni', 'jamón', 'chorizo'],
    img: pizzaPepperoni,
  },
];

export const pizzaCart = [
  {
    ...pizzas[0],
    count: 1,
  },
  {
    ...pizzas[1],
    count: 1,
  },
  {
    ...pizzas[2],
    count: 1,
  },
];
