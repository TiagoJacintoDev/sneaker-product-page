import { Product } from "../App";
import deleteIcon from "../images/icon-delete.svg";
import { createPortal } from "react-dom";

interface Props {
  cart: Product[];
  clearCart: () => void;
  closeCartModal: () => void;
}

export const CartModal = ({ cart, clearCart, closeCartModal }: Props) => {
  const cartQuantity = cart.reduce((cart, product) => {
    return cart + product.quantity;
  }, 0);

  return createPortal(
    <>
      <div
        className="fixed top-0 left-0 h-screen w-screen"
        onClick={closeCartModal}
      />
      <div
        className={`absolute right-[6%] top-16 z-10 w-[350px] rounded-lg border border-neutral-grayish-blue bg-white shadow-lg max-mobile:left-1/2 max-mobile:w-[95%] max-mobile:-translate-x-1/2 lg:right-[11.5%] lg:top-28`}
      >
        {cartQuantity > 0 ? (
          <div className="p-5">
            <h3 className="mb-5 border-b pb-5 font-bold">Cart</h3>
            {cart.map((product) => (
              <div className="flex items-center justify-between">
                <img
                  className="h-12 w-12 rounded-md"
                  src={product.image}
                  alt="product image"
                />
                <div className="flex flex-col">
                  <span className="text-neutral-dark-grayish-blue">
                    {product.name}
                  </span>
                  <div>
                    <span className="text-neutral-dark-grayish-blue">
                      {product.price.toFixed(2)} x {product.quantity} ={" "}
                    </span>
                    <b>{"$" + (product.price * product.quantity).toFixed(2)}</b>
                  </div>
                </div>
                <button>
                  <img
                    src={deleteIcon}
                    alt="remove product from cart"
                    onClick={clearCart}
                  />
                </button>
              </div>
            ))}
            <button
              className="mt-6 flex w-full justify-center gap-4 rounded-lg bg-primary-orange p-4 font-bold text-white transition-all duration-300 hover:opacity-70"
              onClick={clearCart}
            >
              Checkout
            </button>
          </div>
        ) : (
          <div className="flex h-[300px] flex-col items-center justify-center">
            <h2 className="mb-4 text-2xl font-bold text-neutral-dark-grayish-blue">
              Your cart is empty
            </h2>
            <p className="mb-4 text-center text-neutral-grayish-blue">
              Looks like you haven't made your choice yet
            </p>
            <button
              className="rounded-lg bg-primary-orange px-6 py-2 text-white"
              onClick={closeCartModal}
            >
              Continue shopping
            </button>{" "}
          </div>
        )}
      </div>
    </>,
    document.getElementById("portal") as Element
  );
};
