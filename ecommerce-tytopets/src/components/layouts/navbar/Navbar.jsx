import { Link } from "react-router";
import { CartWidget } from "../../common/cartwidget/CartWidget";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div>
      <nav className="title">
      <Link to="/">Mi Tienda </Link>
        <ul className="title">
          <Link to="/category/Alimentos"><li>Alimentos</li></Link>
          <Link to="/category/Accesorios"><li>Accesorios</li></Link>
          <Link to="/category/Higiene"><li>Higiene</li></Link>
          <Link to="/category/CamasyTransportadoras"><li>Camas y Transportadoras</li></Link>

        </ul>
        <Link to="/cart"><CartWidget /> </Link>
      </nav>
    </div>
  );
};
