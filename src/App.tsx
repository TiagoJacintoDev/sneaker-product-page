import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Product } from "./components/Product";

export interface IProduct {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export const App = () => {
  const [cart, setCart] = useState<IProduct[]>([]);

  const addToCart = (product: Omit<IProduct, "quantity">, quantity: number) => {
    const productInCart = cart?.find((item) => item.id === product.id);
    if (productInCart) {
      setCart((prev) =>
        prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCart((prev) => [...prev, { ...product, quantity }]);
    }
  };

  const removeProductFromCart = (id: number) => {
    setCart((prev) => prev.filter((product) => product.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <>
      <Navbar
        cart={cart}
        clearCart={clearCart}
        removeProductFromCart={removeProductFromCart}
      />
      <Product addToCart={addToCart} />
    </>
  );
};
