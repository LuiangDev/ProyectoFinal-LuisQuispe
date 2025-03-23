import React from "react";
import { Link } from "react-router";

export const Cart = () => {
  return (
    <div>
      <h1>Ubicacion del Carrito</h1>
      <Link to="/checkout">Finalizar la Compra</Link>
    </div>
  );
};
