import logo from "../images/logo.svg";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import burgerMenu from "../images/icon-menu.svg";

interface Props {
  cartQuantity: number;
}

export const Navbar = ({ cartQuantity = 0 }: Props) => {
  return (
    <div className="mx-[3.5%] flex items-center justify-between py-3 lg:mx-[11.5%] lg:border-b lg:py-9">
      <div className="flex items-center gap-4 lg:gap-14">
        <img className="lg:hidden" src={burgerMenu} alt="menu" />
        <img src={logo} alt="logo" />
        <ul className="flex gap-8 text-[15px] text-neutral-dark-grayish-blue max-lg:hidden">
          <li className="relative after:absolute after:left-0 after:-bottom-[3.2rem] after:h-1 after:w-full after:scale-x-0 after:bg-primary-orange after:transition-all after:content-[''] hover:after:scale-x-100">
            <a href="#">Collections</a>
          </li>
          <li className="relative after:absolute after:left-0 after:-bottom-[3.2rem] after:h-1 after:w-full after:scale-x-0 after:bg-primary-orange after:transition-all after:content-[''] hover:after:scale-x-100">
            <a href="#">Men</a>
          </li>
          <li className="relative after:absolute after:left-0 after:-bottom-[3.2rem] after:h-1 after:w-full after:scale-x-0 after:bg-primary-orange after:transition-all after:content-[''] hover:after:scale-x-100">
            <a href="#">Women</a>
          </li>
          <li className="relative after:absolute after:left-0 after:-bottom-[3.2rem] after:h-1 after:w-full after:scale-x-0 after:bg-primary-orange after:transition-all after:content-[''] hover:after:scale-x-100">
            <a href="#">About</a>
          </li>
          <li className="relative after:absolute after:left-0 after:-bottom-[3.2rem] after:h-1 after:w-full after:scale-x-0 after:bg-primary-orange after:transition-all after:content-[''] hover:after:scale-x-100">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-7 lg:gap-11">
        <div className="relative cursor-pointer">
          <img className="brightness-0 lg:h-7" src={cart} alt="cart" />
          <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary-orange text-[10px] font-bold text-white lg:h-5 lg:w-5 lg:text-xs">
            {cartQuantity}
          </span>
        </div>
        <img
          className="h-10 w-10 cursor-pointer rounded-full hover:outline hover:outline-2 hover:outline-primary-orange max-mobile:h-8 max-mobile:w-8 lg:h-12 lg:w-12"
          src={avatar}
          alt="person avatar"
        />
      </div>
    </div>
  );
};
