import logoIcon from "../images/logo.svg";
import cartIcon from "../images/icon-cart.svg";
import avatarIcon from "../images/image-avatar.png";
import burgerMenu from "../images/icon-menu.svg";
import deleteIcon from "../images/icon-delete.svg";
import closeIcon from "../images/icon-close.svg";
import { useState } from "react";
import { Product } from "../App";
import { CartModal } from "./CartModal";
import { BurgerMenu } from "./BurgerMenu";

interface Props {
  cart: Product[];
  clearCart: () => void;
}

export const Navbar = ({ cart, clearCart }: Props) => {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const cartQuantity = cart.reduce((cart, product) => {
    return cart + product.quantity;
  }, 0);
  const closeCartModal = () => setIsCartModalOpen(false);
  const openBurgerMenu = () => setIsBurgerMenuOpen(true);
  const closeBurgerMenu = () => setIsBurgerMenuOpen(false);

  return (
    <div className="mx-[6%] flex items-center justify-between py-4 lg:mx-[11.5%] lg:border-b lg:py-9">
      <div className="flex items-center gap-4 lg:gap-14">
        <button onClick={openBurgerMenu}>
          <img className="lg:hidden" src={burgerMenu} alt="menu" />
        </button>
        {isBurgerMenuOpen && (
          <>
            <BurgerMenu closeBurgerMenu={closeBurgerMenu} />
          </>
        )}
        <img className="cursor-pointer" src={logoIcon} alt="logo" />
        <ul className="flex gap-8 text-[15px] text-neutral-dark-grayish-blue max-lg:hidden">
          <li className="relative after:absolute after:left-0 after:-bottom-[3.2rem] after:h-1 after:w-full after:scale-x-0 after:bg-primary-orange after:transition-all after:duration-200 after:content-[''] hover:after:scale-x-100">
            <a href="#">Collections</a>
          </li>
          <li className="relative after:absolute after:left-0 after:-bottom-[3.2rem] after:h-1 after:w-full after:scale-x-0 after:bg-primary-orange after:transition-all after:duration-200 after:content-[''] hover:after:scale-x-100">
            <a href="#">Men</a>
          </li>
          <li className="relative after:absolute after:left-0 after:-bottom-[3.2rem] after:h-1 after:w-full after:scale-x-0 after:bg-primary-orange after:transition-all after:duration-200 after:content-[''] hover:after:scale-x-100">
            <a href="#">Women</a>
          </li>
          <li className="relative after:absolute after:left-0 after:-bottom-[3.2rem] after:h-1 after:w-full after:scale-x-0 after:bg-primary-orange after:transition-all after:duration-200 after:content-[''] hover:after:scale-x-100">
            <a href="#">About</a>
          </li>
          <li className="relative after:absolute after:left-0 after:-bottom-[3.2rem] after:h-1 after:w-full after:scale-x-0 after:bg-primary-orange after:transition-all after:duration-200 after:content-[''] hover:after:scale-x-100">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-7 lg:gap-11">
        <div
          className="relative cursor-pointer"
          onClick={() => setIsCartModalOpen((prev) => !prev)}
        >
          <img className="brightness-0 lg:h-7" src={cartIcon} alt="cart" />
          <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary-orange text-[10px] font-bold text-white lg:h-5 lg:w-5 lg:text-xs">
            {cartQuantity}
          </span>
        </div>
        {isCartModalOpen && (
          <CartModal
            cart={cart}
            clearCart={clearCart}
            closeCartModal={closeCartModal}
          />
        )}
        <img
          className="h-10 w-10 cursor-pointer rounded-full hover:outline hover:outline-2 hover:outline-primary-orange max-mobile:h-8 max-mobile:w-8 lg:h-12 lg:w-12"
          src={avatarIcon}
          alt="person avatar"
        />
      </div>
    </div>
  );
};
