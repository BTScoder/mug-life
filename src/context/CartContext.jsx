import { createContext, useContext, useState } from "react";
// createContext creates the magical backpack

// Step 1a: create the magical backpack
const CartContext = createContext();

// Step 1b: create a helper to reach into the backpack
export const useCart = () => {
  return useContext(CartContext);
};

// Step 1c: Create the backpack provider component

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // Check if the item exists in the cart already
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      // Item does not exist in the cart
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const decreaseQuantity = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
            : item,
        ),
      );
    }
  };

  const value = { cart, addToCart, decreaseQuantity };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
