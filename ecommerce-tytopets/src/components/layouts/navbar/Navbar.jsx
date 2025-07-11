import { useState } from "react";
import { Link } from "react-router";
import { CartWidget } from "../../common/cartwidget/CartWidget";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50">
      <nav className="bg-yellow-500 text-white p-4 shadow-md">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link className="font-bold text-xl" to="/">
            TyTo Pets
          </Link>

          {/* Menú Hamburguesa (mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white text-2xl focus:outline-none cursor-pointer"
              aria-label="Menú"
            >
              {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
            </button>
          </div>

          {/* Carrito visible solo en desktop */}
          <Link to="/cart" className="md:block hidden">
            <CartWidget />
          </Link>
        </div>

        {/* Opciones del menú */}
        <div
          className={`mt-4 md:mt-0 ${
            isOpen ? "flex" : "hidden"
          } md:flex md:justify-center w-full`}
        >
          <ul className="flex flex-col md:flex-row gap-4 font-medium text-base md:items-center">
            <Link to="/category/Alimentos">
              <li>Alimentos</li>
            </Link>
            <Link to="/category/Accesorios">
              <li>Accesorios</li>
            </Link>
            <Link to="/category/Higiene">
              <li>Higiene</li>
            </Link>
            <Link to="/category/CamasyTransportadoras">
              <li>Camas y Transportadoras</li>
            </Link>
          </ul>
        </div>

        {/* Carrito en mobile */}
        <Link
          to="/cart"
          className="md:hidden block mt-4 rounded-lg p-2 text-center"
        >
          <CartWidget />
        </Link>
      </nav>
    </div>
  );
};
