import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Product } from "./components/Product";

export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export const App = () => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (
    product: { id: number; name: string; price: number; image: string },
    quantity: number
  ) => {
    const productInCart = cart?.find((item) => item.id === product.id);
    if (productInCart) {
      setCart((prev) =>
        prev?.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCart((prev) => [...prev, { ...product, quantity }]);
    }
  };

  const clearCart = () => setCart([]);

  return (
    <>
      <Navbar cart={cart} clearCart={clearCart} />
      <Product addToCart={addToCart} />
    </>
  );
};
