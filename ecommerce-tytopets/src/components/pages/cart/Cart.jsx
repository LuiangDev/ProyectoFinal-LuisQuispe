import { useContext } from "react";
import { Link } from "react-router";
import { CartContext } from "../../../context/CartContext";


export const Cart = () => {

  const { cart, resetCart, removeById, getTotalAmount } =
    useContext(CartContext);

  let total = getTotalAmount();

  return (

    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", padding: "20px" }}>
      <h1 className="text-xl font-medium">Resumen de Compra</h1>
      <div>
        {cart.map((product) => {
          return (
          <div style={{display: "flex", flexDirection: "row", alignItems: "center", gap: "20px", padding: "20px"}} key={product.id}>

        <h2>{product.title}</h2>
        <h3>${product.price}</h3>
        <h3>x{product.quantity}</h3>
        <button style={{padding:"3px"}} onClick={() => removeById(product.id)}>Eliminar</button>
      </div>
      );
      })}
      </div>
      <h2>El Precio Total a pagar es: ${total.toFixed(2)}</h2>
      <button style={{padding:"3px"}} onClick={resetCart}>Vaciar Carrito</button>
      <Link to="/checkout">Finalizar la Compra</Link>
      </div>

  );
};
