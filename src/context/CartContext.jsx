import { createContext, useState, useContext } from "react";
import { pizzaCart } from "../data/pizzas";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(pizzaCart);

  const increaseCount = (id) => {
    setCart(cart.map((item) => item.id === id ? { ...item, count: item.count + 1 } : item));
  };

  const decreaseCount = (id) => {
    setCart(
      cart
        .map((item) => (item.id === id ? { ...item, count: item.count - 1 } : item))
        .filter((item) => item.count > 0)
    );
  };

  const addToCart = (pizza) => {
    setCart((prevCart) => {
      const existingPizza = prevCart.find((item) => item.id === pizza.id);
      if (existingPizza) {
        return prevCart.map((item) =>
          item.id === pizza.id ? { ...item, count: item.count + 1 } : item
        );
      }
      return [...prevCart, { ...pizza, count: 1 }];
    });
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <CartContext.Provider value={{ cart, setCart, increaseCount, decreaseCount, addToCart, total }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
