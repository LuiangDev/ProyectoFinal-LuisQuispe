import { CartWidget } from "../../common/cartwidget/CartWidget";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="container">
      <nav >
        <h2>Mi Tienda</h2>
        <ul >
          <li>Categoria 1</li>
          <li>Categoria 2</li>
          <li>Categoria 3</li>
          <li>Categoria 4</li>
        </ul>
        <CartWidget />
      </nav>
    </div>
  );
};
