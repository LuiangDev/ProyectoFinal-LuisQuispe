import { useContext } from "react";
import { Link } from "react-router";
import { CartContext } from "../../../context/CartContext";


export const Cart = () => {

  const { cart, resetCart, removeById, getTotalAmount } =
    useContext(CartContext);

  let total = getTotalAmount();

  return (

    <div className="flex flex-col items-center justify-center gap-4 p-4">
      <h1 className="text-xl font-medium">Resumen de Compra</h1>
      <div>
        {cart.map((product) => {
          return (
          <div className="flex items-center gap-2" key={product.id}>

        <h2>{product.title}</h2>
        <h3>${product.price}</h3>
        <h3>x{product.quantity}</h3>
        <button className="px-6 py-1 ml-6 bg-sky-900 text-white font-semibold rounded-2xl" onClick={() => removeById(product.id)}>Eliminar</button>
      </div>
      );
      })}
      </div>
      <h2>El Precio Total a pagar es: ${total.toFixed(2)}</h2>
      <button className="px-6 py-1 ml-6 bg-sky-900 text-white font-semibold rounded-2xl" onClick={resetCart}>Vaciar Carrito</button>
      <Link to="/checkout" className="px-6 py-1 ml-6 bg-sky-900 text-white font-semibold rounded-2xl">Finalizar la Compra</Link>
      </div>

  );
};
