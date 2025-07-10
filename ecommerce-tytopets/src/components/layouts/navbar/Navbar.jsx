import { Link } from "react-router";
import { CartWidget } from "../../common/cartwidget/CartWidget";

export const Navbar = () => {
  return (
    <div className="sticky top-0 z-50">
      <nav className="bg-yellow-500 text-white flex justify-between items-center p-4 shadow-md">
        <Link className="font-bold text-xl" to="/">TyTo Pets</Link>
        <ul className="flex gap-4 text-base font-medium">
          <Link to="/category/Alimentos"><li>Alimentos</li></Link>
          <Link to="/category/Accesorios"><li>Accesorios</li></Link>
          <Link to="/category/Higiene"><li>Higiene</li></Link>
          <Link to="/category/CamasyTransportadoras"><li>Camas y Transportadoras</li></Link>
        </ul>
        <Link to="/cart"><CartWidget /></Link>
      </nav>
    </div>
  );
};
