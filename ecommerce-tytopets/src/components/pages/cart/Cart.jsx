import React, { useContext } from "react";
import { Link } from "react-router";
import { CartContext } from "../../../context/CartContext";


export const Cart = () => {

  const { cart, resetCart, removeById, getTotalAmount } =
    useContext(CartContext);

  let total = getTotalAmount();

  return (

    <div>
      <h1>Aca va ir el carrito</h1>
      <div>
        {cart.map((product) => {
          return (
          <div key={product.id}>

        <h2>{product.title}</h2>
        <h3>${product.price}</h3>
        <h3>x{product.quantity}</h3>
        <button onClick={() => removeById(product.id)}>Eliminar</button>
      </div>
      );
      })}
      </div>
      <h2>El total a pagar es: ${total}</h2>
      <button onClick={resetCart}>Vaciar Carrito</button>
      <Link to="/checkout">Finalizar la Compra</Link>
      </div>

  );
};
