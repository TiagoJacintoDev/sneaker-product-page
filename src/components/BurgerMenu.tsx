import { createPortal } from "react-dom";
import closeIcon from "../images/icon-close.svg";

interface Props {
  closeBurgerMenu: () => void;
}

export const BurgerMenu = ({ closeBurgerMenu }: Props) => {
  return createPortal(
    <>
      <div
        className="fixed top-0 left-0 z-10 h-full w-full bg-black opacity-50"
        onClick={closeBurgerMenu}
      />
      <div className="absolute top-0 left-0 z-20 flex h-full w-[60%] flex-col gap-4 bg-white p-4">
        <button onClick={closeBurgerMenu}>
          <img className="brightness-0" src={closeIcon} alt="close menu" />
        </button>
        <div className="mt-8 flex items-center justify-between">
          <ul className="text-[15px] font-bold text-neutral-very-dark-blue">
            <li className="mb-3">
              <a href="#">Collections</a>
            </li>
            <li className="mb-3">
              <a href="#">Men</a>
            </li>
            <li className="mb-3">
              <a href="#">Women</a>
            </li>
            <li className="mb-3">
              <a href="#">About</a>
            </li>
            <li className="mb-3">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>,
    document.getElementById("portal") as Element
  );
};
